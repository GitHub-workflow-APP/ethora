import xmpp, { xml, Client } from "@xmpp/client";
import { walletToUsername } from "../helpers/walletUsername";
import {
  getListOfRooms,
  onGetLastMessageArchive,
  onMessageHistory,
  onPresenceInRoom,
  onRealtimeMessage,
} from "./stanzaHandlers";

export class XmppClient {
  public client!: Client;
  public devServer: string | undefined;

  //core functions
  init(walletAddress: string, password: string) {
    //maybe add here devServer
    try {
      if (!password) {
        return;
      }

      if (this.client) {
        return;
      }

      this.client = xmpp.client({
        service: `wss://${this?.devServer || "dev.dxmpp.com:5443"}/ws`,
        username: walletToUsername(walletAddress),
        password,
      });

      this.client.setMaxListeners(20);
      this.client.start();

      this.client.on("online", (jid) => {
        getListOfRooms(this);
      });
      this.client.on("stanza", (stanza) => console.log("New message:", stanza)); //is used to show all the nessages sent and got

      this.client.on("stanza", (stanza) => onRealtimeMessage(stanza));
      this.client.on("stanza", (stanza) => onPresenceInRoom(stanza));
      this.client.on("stanza", (stanza) => onMessageHistory(stanza));
      this.client.on("stanza", (stanza) => onRealtimeMessage(stanza));
      this.client.on("stanza", (stanza) =>
        onGetLastMessageArchive(stanza, this)
      );

      this.client.on("offline", () => console.log("offline"));

      this.client.on("error", (error) => {
        console.log("xmmpp on error", error);
        // this.stop();

        console.log("xmmpp error, terminating collection");
      });
      console.log("successfull init");
    } catch (error) {
      console.error("An error occurred during initialization:", error);
    }
  }

  presence = () => {
    try {
      this.client.send(xml("presence"));
      console.log("successfull presence");
    } catch (error) {
      console.error("An error occurred while sending presence:", error);
    }
  };

  subsribe = (address: string) => {
    try {
      const message = xml(
        "iq",
        {
          from: this.client?.jid?.toString(),
          to: address,
          type: "set",
          id: "newSubscription",
        },
        xml(
          "subscribe",
          {
            xmlns: "urn:xmpp:mucsub:0",
            nick: this.client?.jid?.getLocal(),
          },
          xml("event", { node: "urn:xmpp:mucsub:nodes:messages" }),
          xml("event", { node: "urn:xmpp:mucsub:nodes:presence" }),
          xml("event", { node: "urn:xmpp:mucsub:nodes:subscribers" })
        )
      );

      this.client.send(message);
      console.log("successfull subscribe");
    } catch (error) {
      console.error("An error occurred while subscribing:", error);
    }
  };

  unsubscribe = (address: string) => {
    try {
      const message = xml(
        "iq",
        {
          from: this.client?.jid?.toString(),
          to: address,
          type: "set",
          id: "unsubscribe",
        },
        xml("unsubscribe", { xmlns: "urn:xmpp:mucsub:0" })
      );

      this.client.send(message);
    } catch (error) {
      console.error("An error occurred while unsubscribing:", error);
    }
  };

  getRooms = () => {
    try {
      const message = xml(
        "iq",
        {
          type: "get",
          from: this.client.jid?.toString(),
          id: "getUserRooms",
        },
        xml("query", { xmlns: "ns:getrooms" })
      );
      this.client.send(message);
      console.log("getRooms");
    } catch (error) {
      console.error("An error occurred while getting rooms:", error);
    }
  };

  //room functions
  leaveTheRoom = (roomJID: string) => {
    try {
      const presence = xml("presence", {
        from: this.client.jid?.toString(),
        to: roomJID + "/" + this.client.jid?.getLocal(),
        type: "unavailable",
      });
      this.client.send(presence);
    } catch (error) {
      console.error("An error occurred while leaving the room:", error);
    }
  };

  presenceInRoom = (roomJID: string) => {
    try {
      const presence = xml(
        "presence",
        {
          from: this.client.jid?.toString(),
          to: roomJID + "/" + this.client.jid?.getLocal(),
          id: "presenceInRoom",
        },
        xml("x", "http://jabber.org/protocol/muc")
      );
      this.client.send(presence);
      console.log("presence");
    } catch (error) {
      console.error("An error occurred while setting presence in room:", error);
    }
  };

  getArchive = (userJID: string) => {
    const message = xml(
      "iq",
      { type: "set", id: userJID },
      xml(
        "query",
        { xmlns: "urn:xmpp:mam:2", queryid: "userArchive" },
        xml("set", { xmlns: "http://jabber.org/protocol/rsm" }, xml("before"))
      )
    );
    this.client.send(message);
    console.log("getArchive");
  };

  getPaginatedArchive = (
    chatJID: string,
    firstUserMessageID: string,
    amount: number
  ) => {
    // if (xmppMessagesHandler.lastMsgId === firstUserMessageID) {
    //   return
    // }
    // xmppMessagesHandler.isGettingMessages = true
    // xmppMessagesHandler.isGettingFirstMessages = true
    // useStoreState.getState().setLoaderArchive(true)
    const message = xml(
      "iq",
      {
        type: "set",
        to: chatJID,
        id: "paginatedArchive",
      },
      xml(
        "query",
        { xmlns: "urn:xmpp:mam:2" },
        xml(
          "set",
          { xmlns: "http://jabber.org/protocol/rsm" },
          xml("max", {}, String(amount)),
          xml("before", {}, firstUserMessageID)
        )
      )
    );
    this.client.send(message);
  };

  getAndReceiveRoomInfo = (roomJID: string) => {
    const message = xml(
      "iq",
      {
        from: this.client.jid?.toString(),
        id: "roomInfo",
        to: roomJID,
        type: "get",
      },
      xml("query", { xmlns: "http://jabber.org/protocol/disco#info" })
    );
    return this.client.sendReceive(message);
  };

  getLastMessageArchive(roomJID: string) {
    // xmppMessagesHandler.isGettingMessages = true
    const message = xml(
      "iq",
      {
        type: "set",
        to: roomJID,
        id: "GetArchive",
      },
      xml(
        "query",
        { xmlns: "urn:xmpp:mam:2" },
        xml(
          "set",
          { xmlns: "http://jabber.org/protocol/rsm" },
          xml("max", {}, "1"),
          xml("before")
        )
      )
    );
    this.client.send(message);
  }

  //messages
  sendMessage = (
    roomJID: string,
    firstName: string,
    lastName: string,
    photo: string,
    walletAddress: string,
    userMessage: string,
    notDisplayedValue?: string
  ) => {
    try {
      const message = xml(
        "message",
        {
          to: roomJID,
          type: "groupchat",
          id: "sendMessage",
        },
        xml("data", {
          xmlns: `wss://${this?.devServer || "dev.dxmpp.com:5443"}/ws`,
          senderFirstName: firstName,
          senderLastName: lastName,
          photoURL: photo,
          senderJID: this.client.jid?.toString(),
          senderWalletAddress: walletAddress,
          roomJid: roomJID,
          isSystemMessage: false,
          tokenAmount: 0,
          quickReplies: [],
          notDisplayedValue: notDisplayedValue ? notDisplayedValue : "",
        }),
        xml("body", {}, userMessage)
      );
      this.client.send(message);
    } catch (error) {
      console.error("An error occurred while sending message:", error);
    }
  };
}

const xmppClient = new XmppClient();

export default xmppClient;
