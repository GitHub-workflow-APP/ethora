import{ah as h,ai as f,l as a,ab as g,k as m,aj as k,a6 as v,aw as C,a4 as u,ca as c,O as j}from"./index-2048bd11.js";var n={},b=f;Object.defineProperty(n,"__esModule",{value:!0});var l=n.default=void 0,S=b(h()),I=a,w=(0,S.default)((0,I.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckCircle");l=n.default=w;const y=({url:s,selected:r,onClick:o})=>a.jsxs(u,{sx:{backgroundImage:`url(${s})`,width:200,height:400,borderRadius:"10px",display:"flex",justifyContent:"center",alignItems:"center",position:"relative"},children:[r&&a.jsx(l,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",zIndex:10111},fontSize:"large"}),a.jsx("div",{onClick:o,style:{opacity:r?.4:0,height:"100%",width:"100%",backgroundColor:"white",cursor:"pointer"}})]}),_=({})=>{const{roomJID:s}=g(),[r,o]=m.useState(0),{showSnackbar:i}=k(),d=v(e=>e.userChatRooms.find(t=>t.jid===s)),x=e=>{o(e);const t=c[e],p=s.split("@")[0];j.setRoomImage(p,d.room_thumbnail,t.value,"background"),i("success","Success! The chat background was set.")};return a.jsx(C,{maxWidth:"xl",sx:{height:"calc(100vh - 68px)",width:"100%",display:"flex",justifyContent:"center",padding:"10px 0"},children:a.jsx(u,{sx:{display:"flex",gap:"10px",flexWrap:"wrap"},children:c.map((e,t)=>a.jsx(y,{onClick:()=>x(t),selected:r===t,url:e.value},e.value))})})};export{_ as default};