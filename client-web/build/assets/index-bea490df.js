import{ah as ye,ai as be,l as g,aG as ve,k as E,aF as ke,a_ as Y,a$ as xe,b1 as ae,a6 as W,Q as se,aJ as ie,am as ce,a4 as R,aH as ue,U as _e,ac as je,ao as J,Z as H,b2 as Se,aj as le,aN as Ce,b3 as Pe,b4 as Oe,aW as Ie,b5 as Ee,b6 as Le,b7 as Te,O as Re,aU as Ne,aw as Ae,b8 as Me,b9 as Fe,ba as Be,bb as Ue,Y as We,bc as ze,bd as qe,be as $e,bf as re,bg as oe,bh as q}from"./index-2048bd11.js";var X={},He=be;Object.defineProperty(X,"__esModule",{value:!0});var de=X.default=void 0,Ve=He(ye()),Ge=g,De=(0,Ve.default)((0,Ge.jsx)("path",{d:"M12.16 3h-.32L9.21 8.25h5.58zm4.3 5.25h5.16L19 3h-5.16zm4.92 1.5h-8.63V20.1zM11.25 20.1V9.75H2.62zM7.54 8.25 10.16 3H5L2.38 8.25z"}),"Diamond");de=X.default=De;var fe={exports:{}};(function(u,c){(function(d,t){u.exports=t(E)})(ke,function(d){return function(t){function e(s){if(r[s])return r[s].exports;var o=r[s]={exports:{},id:s,loaded:!1};return t[s].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){t.exports=r(8)},function(t,e,r){t.exports=r(6)()},function(t,e){t.exports=d},function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(r,s){return decodeURIComponent(r.replace(new RegExp("^(?:.*[&\\?]"+encodeURIComponent(s).replace(/[\.\+\*]/g,"\\$&")+"(?:\\=([^&]*))?)?.*$","i"),"$1"))}},function(t,e,r){function s(f){return f&&f.__esModule?f:{default:f}}function o(f,n){if(!(f instanceof n))throw new TypeError("Cannot call a class as a function")}function h(f,n){if(!f)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||typeof n!="object"&&typeof n!="function"?f:n}function m(f,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof n);f.prototype=Object.create(n&&n.prototype,{constructor:{value:f,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(f,n):f.__proto__=n)}Object.defineProperty(e,"__esModule",{value:!0});var b=Object.assign||function(f){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var p in i)Object.prototype.hasOwnProperty.call(i,p)&&(f[p]=i[p])}return f},k=function(){function f(n,i){for(var p=0;p<i.length;p++){var l=i[p];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(n,l.key,l)}}return function(n,i,p){return i&&f(n.prototype,i),p&&f(n,p),n}}(),C=r(2),_=s(C),N=r(1),w=s(N),L=r(5),I=s(L),F=r(3),T=s(F),A=function(){var f=!1;try{f=!!(window.navigator&&window.navigator.standalone||navigator.userAgent.match("CriOS")||navigator.userAgent.match(/mobile/i))}catch{}return f},P=function(f){function n(){var i,p,l,a;o(this,n);for(var y=arguments.length,S=Array(y),v=0;v<y;v++)S[v]=arguments[v];return p=l=h(this,(i=n.__proto__||Object.getPrototypeOf(n)).call.apply(i,[this].concat(S))),l.state={isSdkLoaded:!1,isProcessing:!1},l.responseApi=function(x){window.FB.api("/me",{locale:l.props.language,fields:l.props.fields},function(j){b(j,x),l.props.callback(j)})},l.checkLoginState=function(x){l.setStateIfMounted({isProcessing:!1}),x.authResponse?l.responseApi(x.authResponse):l.props.onFailure?l.props.onFailure({status:x.status}):l.props.callback({status:x.status})},l.checkLoginAfterRefresh=function(x){x.status==="connected"?l.checkLoginState(x):window.FB.login(function(j){return l.checkLoginState(j)},!0)},l.click=function(x){if(l.state.isSdkLoaded&&!l.state.isProcessing&&!l.props.isDisabled){l.setState({isProcessing:!0});var j=l.props,z=j.scope,B=j.appId,U=j.onClick,te=j.returnScopes,pe=j.responseType,he=j.redirectUri,me=j.disableMobileRedirect,ge=j.authType,we=j.state;if(typeof U!="function"||(U(x),!x.defaultPrevented)){var ne={client_id:B,redirect_uri:he,state:we,return_scopes:te,scope:z,response_type:pe,auth_type:ge};if(l.props.isMobile&&!me)window.location.href="https://www.facebook.com/dialog/oauth"+(0,I.default)(ne);else{if(!window.FB)return void(l.props.onFailure&&l.props.onFailure({status:"facebookNotLoaded"}));window.FB.login(l.checkLoginState,{scope:z,return_scopes:te,auth_type:ne.auth_type})}}}},a=p,h(l,a)}return m(n,f),k(n,[{key:"componentDidMount",value:function(){if(this._isMounted=!0,document.getElementById("facebook-jssdk"))return void this.sdkLoaded();this.setFbAsyncInit(),this.loadSdkAsynchronously();var i=document.getElementById("fb-root");i||(i=document.createElement("div"),i.id="fb-root",document.body.appendChild(i))}},{key:"componentWillReceiveProps",value:function(i){this.state.isSdkLoaded&&i.autoLoad&&!this.props.autoLoad&&window.FB.getLoginStatus(this.checkLoginAfterRefresh)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"setStateIfMounted",value:function(i){this._isMounted&&this.setState(i)}},{key:"setFbAsyncInit",value:function(){var i=this,p=this.props,l=p.appId,a=p.xfbml,y=p.cookie,S=p.version,v=p.autoLoad;window.fbAsyncInit=function(){window.FB.init({version:"v"+S,appId:l,xfbml:a,cookie:y}),i.setStateIfMounted({isSdkLoaded:!0}),(v||i.isRedirectedFromFb())&&window.FB.getLoginStatus(i.checkLoginAfterRefresh)}}},{key:"isRedirectedFromFb",value:function(){var i=window.location.search;return(0,T.default)(i,"code")||(0,T.default)(i,"granted_scopes")}},{key:"sdkLoaded",value:function(){this.setState({isSdkLoaded:!0})}},{key:"loadSdkAsynchronously",value:function(){var i=this.props.language;(function(p,l,a){var y=p.getElementsByTagName(l)[0],S=y,v=y;p.getElementById(a)||(v=p.createElement(l),v.id=a,v.src="https://connect.facebook.net/"+i+"/sdk.js",S.parentNode.insertBefore(v,S))})(document,"script","facebook-jssdk")}},{key:"render",value:function(){var p=this.props.render;if(!p)throw new Error("ReactFacebookLogin requires a render prop to render");var l={onClick:this.click,isDisabled:!!this.props.isDisabled,isProcessing:this.state.isProcessing,isSdkLoaded:this.state.isSdkLoaded};return this.props.render(l)}}]),n}(_.default.Component);P.propTypes={isDisabled:w.default.bool,callback:w.default.func.isRequired,appId:w.default.string.isRequired,xfbml:w.default.bool,cookie:w.default.bool,authType:w.default.string,scope:w.default.string,state:w.default.string,responseType:w.default.string,returnScopes:w.default.bool,redirectUri:w.default.string,autoLoad:w.default.bool,disableMobileRedirect:w.default.bool,isMobile:w.default.bool,fields:w.default.string,version:w.default.string,language:w.default.string,onClick:w.default.func,onFailure:w.default.func,render:w.default.func.isRequired},P.defaultProps={redirectUri:typeof window<"u"?window.location.href:"/",scope:"public_profile,email",returnScopes:!1,xfbml:!1,cookie:!1,authType:"",fields:"name",version:"2.3",language:"en_US",disableMobileRedirect:!1,isMobile:A(),onFailure:null,state:"facebookdirect",responseType:"code"},e.default=P},function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(r){return"?"+Object.keys(r).map(function(s){return s+"="+encodeURIComponent(r[s])}).join("&")}},function(t,e,r){function s(){}var o=r(7);t.exports=function(){function h(k,C,_,N,w,L){if(L!==o){var I=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw I.name="Invariant Violation",I}}function m(){return h}h.isRequired=h;var b={array:h,bool:h,func:h,number:h,object:h,string:h,symbol:h,any:h,arrayOf:m,element:h,instanceOf:m,node:h,objectOf:m,oneOf:m,oneOfType:m,shape:m,exact:m};return b.checkPropTypes=s,b.PropTypes=b,b}},function(t,e){var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";t.exports=r},function(t,e,r){function s(f){return f&&f.__esModule?f:{default:f}}function o(f,n){if(!(f instanceof n))throw new TypeError("Cannot call a class as a function")}function h(f,n){if(!f)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||typeof n!="object"&&typeof n!="function"?f:n}function m(f,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof n);f.prototype=Object.create(n&&n.prototype,{constructor:{value:f,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(f,n):f.__proto__=n)}Object.defineProperty(e,"__esModule",{value:!0});var b=Object.assign||function(f){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var p in i)Object.prototype.hasOwnProperty.call(i,p)&&(f[p]=i[p])}return f},k=function(){function f(n,i){for(var p=0;p<i.length;p++){var l=i[p];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(n,l.key,l)}}return function(n,i,p){return i&&f(n.prototype,i),p&&f(n,p),n}}(),C=r(2),_=s(C),N=r(1),w=s(N),L=r(9),I=s(L),F=r(4),T=s(F),A=function(f){return["button","input","select","textarea","optgroup","option","fieldset"].indexOf((f+"").toLowerCase())>=0},P=function(f){function n(){return o(this,n),h(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return m(n,f),k(n,[{key:"style",value:function(){var i=this.constructor.defaultProps.cssClass;return this.props.cssClass===i&&_.default.createElement("style",{dangerouslySetInnerHTML:{__html:I.default}})}},{key:"containerStyle",value:function(i){var p=i.isProcessing,l=i.isSdkLoaded,a=i.isDisabled,y={transition:"opacity 0.5s"};return(p||!l||a)&&(y.opacity=.6),b(y,this.props.containerStyle)}},{key:"renderOwnButton",value:function(i){var p=this.props,l=p.cssClass,a=p.size,y=p.icon,S=p.textButton,v=p.typeButton,x=p.buttonStyle,j=i.onClick,z=i.isDisabled,B=typeof y=="string",U={};return z&&A(this.props.tag)&&(U.disabled=!0),_.default.createElement("span",{style:this.containerStyle(i)},B&&_.default.createElement("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"}),_.default.createElement(this.props.tag,b({type:v,className:l+" "+a,style:x,onClick:j},U),y&&B&&_.default.createElement("i",{className:"fa "+y}),y&&!B&&y,S),this.style())}},{key:"render",value:function(){var i=this;return _.default.createElement(T.default,b({},this.props,{render:function(p){return i.renderOwnButton(p)}}))}}]),n}(_.default.Component);P.propTypes={textButton:w.default.string,typeButton:w.default.string,size:w.default.string,cssClass:w.default.string,icon:w.default.any,containerStyle:w.default.object,buttonStyle:w.default.object,tag:w.default.oneOfType([w.default.node,w.default.func])},P.defaultProps={textButton:"Login with Facebook",typeButton:"button",size:"metro",fields:"name",cssClass:"kep-login-facebook",tag:"button"},e.default=P},function(t,e,r){e=t.exports=r(10)(),e.push([t.id,".kep-login-facebook{font-family:Helvetica,sans-serif;font-weight:700;-webkit-font-smoothing:antialiased;color:#fff;cursor:pointer;display:inline-block;font-size:calc(.27548vw + 12.71074px);text-decoration:none;text-transform:uppercase;transition:background-color .3s,border-color .3s;background-color:#4c69ba;border:calc(.06887vw + .67769px) solid #4c69ba;padding:calc(.34435vw + 13.38843px) calc(.34435vw + 18.38843px)}.kep-login-facebook.small{padding:calc(.34435vw + 3.38843px) calc(.34435vw + 8.38843px)}.kep-login-facebook.medium{padding:calc(.34435vw + 8.38843px) calc(.34435vw + 13.38843px)}.kep-login-facebook.metro{border-radius:0}.kep-login-facebook .fa{margin-right:calc(.34435vw + 3.38843px)}",""]),e.locals={"kep-login-facebook":"kep-login-facebook",small:"small",medium:"medium",metro:"metro",fa:"fa"}},function(t,e){t.exports=function(){var r=[];return r.toString=function(){for(var s=[],o=0;o<this.length;o++){var h=this[o];h[2]?s.push("@media "+h[2]+"{"+h[1]+"}"):s.push(h[1])}return s.join("")},r.i=function(s,o){typeof s=="string"&&(s=[[null,s,""]]);for(var h={},m=0;m<this.length;m++){var b=this[m][0];typeof b=="number"&&(h[b]=!0)}for(m=0;m<s.length;m++){var k=s[m];typeof k[0]=="number"&&h[k[0]]||(o&&!k[2]?k[2]=o:o&&(k[2]="("+k[2]+") and ("+o+")"),r.push(k))}},r}}])})})(fe);var Ye=fe.exports;const Qe=ve(Ye);function Je(u,c){u.prototype=Object.create(c.prototype),u.prototype.constructor=u,u.__proto__=c}var Ze=function(u){Je(c,u);function c(t){var e,r=t===void 0?{}:t,s=r.supportedChainIds;return e=u.call(this)||this,e.supportedChainIds=s,e}var d=c.prototype;return d.emitUpdate=function(e){this.emit(Y.Update,e)},d.emitError=function(e){this.emit(Y.Error,e)},d.emitDeactivate=function(){this.emit(Y.Deactivate)},c}(xe.EventEmitter);function Z(){return Z=Object.assign||function(u){for(var c=1;c<arguments.length;c++){var d=arguments[c];for(var t in d)Object.prototype.hasOwnProperty.call(d,t)&&(u[t]=d[t])}return u},Z.apply(this,arguments)}function ee(u,c){u.prototype=Object.create(c.prototype),u.prototype.constructor=u,u.__proto__=c}function K(u){return K=Object.setPrototypeOf?Object.getPrototypeOf:function(d){return d.__proto__||Object.getPrototypeOf(d)},K(u)}function G(u,c){return G=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},G(u,c)}function Ke(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function V(u,c,d){return Ke()?V=Reflect.construct:V=function(e,r,s){var o=[null];o.push.apply(o,r);var h=Function.bind.apply(e,o),m=new h;return s&&G(m,s.prototype),m},V.apply(null,arguments)}function Xe(u){return Function.toString.call(u).indexOf("[native code]")!==-1}function D(u){var c=typeof Map=="function"?new Map:void 0;return D=function(t){if(t===null||!Xe(t))return t;if(typeof t!="function")throw new TypeError("Super expression must either be null or a function");if(typeof c<"u"){if(c.has(t))return c.get(t);c.set(t,e)}function e(){return V(t,arguments,K(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),G(e,t)},D(u)}function $(u){if(u===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return u}typeof Symbol<"u"&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator")));typeof Symbol<"u"&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));function M(u,c){try{var d=u()}catch(t){return c(t)}return d&&d.then?d.then(void 0,c):d}function O(u){return u.hasOwnProperty("result")?u.result:u}var Q=function(u){ee(c,u);function c(){var d;return d=u.call(this)||this,d.name=d.constructor.name,d.message="No Ethereum provider was found on window.ethereum.",d}return c}(D(Error)),et=function(u){ee(c,u);function c(){var d;return d=u.call(this)||this,d.name=d.constructor.name,d.message="The user rejected the request.",d}return c}(D(Error)),tt=function(u){ee(c,u);function c(t){var e;return e=u.call(this,t)||this,e.handleNetworkChanged=e.handleNetworkChanged.bind($(e)),e.handleChainChanged=e.handleChainChanged.bind($(e)),e.handleAccountsChanged=e.handleAccountsChanged.bind($(e)),e.handleClose=e.handleClose.bind($(e)),e}var d=c.prototype;return d.handleChainChanged=function(e){this.emitUpdate({chainId:e,provider:window.ethereum})},d.handleAccountsChanged=function(e){e.length===0?this.emitDeactivate():this.emitUpdate({account:e[0]})},d.handleClose=function(e,r){this.emitDeactivate()},d.handleNetworkChanged=function(e){this.emitUpdate({chainId:e,provider:window.ethereum})},d.activate=function(){try{var e=function(b){if(r)return b;function k(){return Z({provider:window.ethereum},o?{account:o}:{})}var C=function(){if(!o)return Promise.resolve(window.ethereum.enable().then(function(_){return _&&O(_)[0]})).then(function(_){o=_})}();return C&&C.then?C.then(k):k(C)},r=!1,s=this;if(!window.ethereum)throw new Q;window.ethereum.on&&(window.ethereum.on("chainChanged",s.handleChainChanged),window.ethereum.on("accountsChanged",s.handleAccountsChanged),window.ethereum.on("close",s.handleClose),window.ethereum.on("networkChanged",s.handleNetworkChanged)),window.ethereum.isMetaMask&&(window.ethereum.autoRefreshOnNetworkChange=!1);var o,h=M(function(){return Promise.resolve(window.ethereum.send("eth_requestAccounts").then(function(m){return O(m)[0]})).then(function(m){o=m})},function(m){if(m.code===4001)throw new et});return Promise.resolve(h&&h.then?h.then(e):e(h))}catch(m){return Promise.reject(m)}},d.getProvider=function(){try{return Promise.resolve(window.ethereum)}catch(e){return Promise.reject(e)}},d.getChainId=function(){try{var e=function(){function h(){if(!r)try{r=O(window.ethereum.send({method:"net_version"}))}catch{}return r||(window.ethereum.isDapper?r=O(window.ethereum.cachedResults.net_version):r=window.ethereum.chainId||window.ethereum.netVersion||window.ethereum.networkVersion||window.ethereum._chainId),r}var m=function(){if(!r){var b=M(function(){return Promise.resolve(window.ethereum.send("net_version").then(O)).then(function(k){r=k})},function(){});if(b&&b.then)return b.then(function(){})}}();return m&&m.then?m.then(h):h(m)};if(!window.ethereum)throw new Q;var r,s=M(function(){return Promise.resolve(window.ethereum.send("eth_chainId").then(O)).then(function(o){r=o})},function(){});return Promise.resolve(s&&s.then?s.then(e):e(s))}catch(o){return Promise.reject(o)}},d.getAccount=function(){try{var e=function(){function h(){return r||(r=O(window.ethereum.send({method:"eth_accounts"}))[0]),r}var m=function(){if(!r){var b=M(function(){return Promise.resolve(window.ethereum.enable().then(function(k){return O(k)[0]})).then(function(k){r=k})},function(){});if(b&&b.then)return b.then(function(){})}}();return m&&m.then?m.then(h):h(m)};if(!window.ethereum)throw new Q;var r,s=M(function(){return Promise.resolve(window.ethereum.send("eth_accounts").then(function(o){return O(o)[0]})).then(function(o){r=o})},function(){});return Promise.resolve(s&&s.then?s.then(e):e(s))}catch(o){return Promise.reject(o)}},d.deactivate=function(){window.ethereum&&window.ethereum.removeListener&&(window.ethereum.removeListener("chainChanged",this.handleChainChanged),window.ethereum.removeListener("accountsChanged",this.handleAccountsChanged),window.ethereum.removeListener("close",this.handleClose),window.ethereum.removeListener("networkChanged",this.handleNetworkChanged))},d.isAuthorized=function(){try{return window.ethereum?Promise.resolve(M(function(){return Promise.resolve(window.ethereum.send("eth_accounts").then(function(e){return O(e).length>0}))},function(){return!1})):Promise.resolve(!1)}catch(e){return Promise.reject(e)}},c}(Ze);const nt=new tt({supportedChainIds:[1,3,4,5,42]}),rt=u=>{const c={};return u.firstName||(c.firstName="Required"),u.lastName||(c.lastName="Required"),c};function ot({open:u,setOpen:c,updateUser:d}){const{account:t,library:e,deactivate:r}=ae();W(h=>h.setUser);const s=se(),o=ie({initialValues:{firstName:"",lastName:""},validate:rt,onSubmit:async h=>{const m=e.getSigner();try{const b="Register",k=await m.signMessage(b),C=await Se(t,k,b,h.firstName,h.lastName),_=C.data.user;d(C.data),r(),s.push(`/profile/${_.defaultWallet.walletAddress}`)}catch(b){console.log("signature error",b)}}});return g.jsx(ce,{onClose:()=>c(!1),maxWidth:!1,open:u,children:g.jsxs(R,{style:{width:"350px"},children:[g.jsxs(ue,{style:{display:"flex",justifyContent:"space-between"},children:["Continue with Metamask",g.jsx(_e,{onClick:()=>c(!1),children:g.jsx(je,{})})]}),g.jsx(R,{sx:{width:"100%",typography:"body1",padding:1},children:g.jsxs("form",{onSubmit:o.handleSubmit,children:[g.jsx(J,{margin:"dense",inputProps:{autoComplete:"off"},label:"First Name",name:"firstName",type:"text",fullWidth:!0,variant:"standard",onChange:o.handleChange,onBlur:o.handleBlur,error:o.touched.firstName&&!!o.errors.firstName,helperText:o.touched.firstName&&o.errors.firstName?o.errors.firstName:""}),g.jsx(J,{margin:"dense",label:"Last Name",name:"lastName",type:"text",fullWidth:!0,inputProps:{autoComplete:"off"},variant:"standard",onChange:o.handleChange,onBlur:o.handleBlur,error:o.touched.lastName&&!!o.errors.lastName,helperText:o.touched.lastName&&o.errors.lastName?o.errors.lastName:""}),g.jsx(R,{sx:{margin:2,display:"flex",justifyContent:"center"},children:g.jsx(H,{type:"submit",variant:"contained",children:"Register"})})]})})]})})}const at=u=>{const c={};return u.email?/^[\w%+.-]+@[\d.a-z-]+\.[a-z]{2,4}$/i.test(u.email)||(c.email="Invalid email address"):c.email="Required",c},st=({open:u,onClose:c})=>{const{showSnackbar:d}=le(),t=W(r=>r.config.appToken),e=ie({initialValues:{email:""},validate:at,onSubmit:async({email:r},{setSubmitting:s,resetForm:o})=>{s(!0);try{const h=await Pe(t).post("/users/forgot",{email:r});d("success","The password reset email has been successfully sent. Please, check your email for further actions."),o(),c()}catch{d("error","Cannot reset email")}s(!1)}});return g.jsx(ce,{maxWidth:!1,open:u,onClose:c,children:g.jsxs(R,{sx:{padding:2},children:[g.jsx(ue,{style:{padding:0,margin:0},children:"Forgot Password?"}),g.jsx(R,{sx:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",minWidth:300,maxWidth:"50vw"},children:g.jsxs("form",{onSubmit:e.handleSubmit,style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",flexDirection:"column"},children:[g.jsx(J,{margin:"normal",label:"Email",name:"email",type:"email",fullWidth:!0,variant:"outlined",onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.email,error:!!e.touched.email&&!!e.errors.email}),g.jsx(Ce,{loading:e.isSubmitting,variant:"contained",type:"submit",sx:{marginTop:2},children:"Send link to email"})]})})]})})};function ut(){const u=W(a=>a.setUser),c=W(a=>a.user),d=W(a=>a.config),t=Oe(),e=se(),{search:r}=Ie(),{active:s,account:o,library:h,activate:m}=ae(),[b,k]=E.useState(!1),[C,_]=E.useState(!1),[N,w]=E.useState(!1),[L,I]=E.useState(!1),[F,T]=E.useState(!1),{showSnackbar:A}=le(),P=new URLSearchParams(r).get("signUpPlan"),f=()=>{m(nt)};E.useEffect(()=>{const a=t.get("type");if(a)switch(a){case"username":{_(!0);break}case"email":{k(!0);break}}},[t]),E.useEffect(()=>{console.log("active",s),s&&(console.log(s,o),o&&!c.firstName&&Ee(o).then(async a=>{console.log("login user");const y=h.getSigner(),S="Login",v=await y.signMessage(S),x=await Le(o,v,S);x.data.user,i(x.data)}).catch(a=>{console.log(a),a.response&&a.response.status===404?(console.log("registering user"),w(!0)):console.log("other errors")}))},[s,o]);const n=async()=>{const a="google";try{const y=await $e();if((await re(y.user.providerData[0].email)).data.success){await oe(y.idToken,y.credential.accessToken,"",a,P);const v=await q(y.idToken,y.credential.accessToken,a),x=v.data.user;i(v.data),e.push("/organizations")}else{const v=await q(y.idToken,y.credential.accessToken,a),x=v.data.user;i(v.data)}}catch(y){console.log(y),A("error","Cannot authenticate user")}};E.useEffect(()=>{if(c.firstName&&c.xmppPassword){if(c.stripeCustomerId&&c.company.length===0){e.push("/organizations");return}if(c.stripeCustomerId&&c.paymentMethods.data.length===0){e.push("/payments");return}e.push("/home");return}if(c.firstName&&!c.xmppPassword){e.push("/owner");return}},[c]);const i=async a=>{const y=await Te(a.token);u({_id:a.user._id,firstName:a.user.firstName,lastName:a.user.lastName,description:a.user.description,xmppPassword:a.user.xmppPassword,walletAddress:a.user.defaultWallet.walletAddress,token:a.token,refreshToken:a.refreshToken,profileImage:a.user.profileImage,isProfileOpen:a.user.isProfileOpen,isAssetsOpen:a.user.isAssetsOpen,ACL:a.user.ACL,referrerId:a.user.referrerId||"",isAllowedNewAppCreate:a.isAllowedNewAppCreate,isAgreeWithTerms:a.user.isAgreeWithTerms,stripeCustomerId:a.user.stripeCustomerId,paymentMethods:a.paymentMethods,subscriptions:a.subscriptions,company:y.data.result,appId:a.user.appId,homeScreen:a.user.homeScreen}),Re.init(a.user.defaultWallet.walletAddress,a==null?void 0:a.user.xmppPassword)},p=async a=>{if(!(a!=null&&a.email))return;const y="facebook";I(!0);const S=await re(a.email);try{if(S.data.success){await oe("","",a.accessToken,y,P);const v=await q("","",y,a.accessToken),x=v.data.user;i(v.data)}else{const v=await q("","",y,a.accessToken),x=v.data.user;i(v.data)}}catch(v){A("error","Cannot authenticate user"),console.log(v)}I(!1)},l=()=>!!d.firebaseWebConfigString;return L?g.jsx(Ne,{}):g.jsx(R,{sx:{backgroundColor:d.loginBackgroundColor||"white"},children:g.jsxs(Ae,{maxWidth:"xl",style:{display:"flex",flexDirection:"column",height:"calc(100vh - 68px)",justifyContent:"center",alignItems:"center"},children:[!!P&&g.jsxs(Me,{severity:"info",children:[g.jsx(Fe,{children:"Account Owners"}),"In order to create and manage your App(s), you need to create your own account first. You can use one of your social accounts or create a new custom account using e-mail and password."]}),g.jsxs(R,{sx:{marginTop:5},style:{display:"flex",maxWidth:"300px",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[d.logoImage&&g.jsx("img",{src:d.logoImage,style:{width:"100%",height:200,marginBottom:10}}),g.jsx(Qe,{appId:"1172938123281314",autoLoad:!1,fields:"name,email,picture",onClick:()=>{},callback:p,icon:g.jsx(Be,{style:{marginRight:10}}),buttonStyle:{display:"flex",justifyContent:"flex-start",alignItems:"center",fontSize:16,padding:5,borderRadius:4,width:"100%",margin:"3px 0",fontFamily:"Roboto,Helvetica,Arial,sans-serif",fontWeight:500,textTransform:"none",paddingLeft:20},textButton:"Sign In with facebook",containerStyle:{padding:0,width:"100%"}}),l()&&g.jsx(H,{onClick:n,sx:{margin:1},fullWidth:!0,id:"googleLogin",variant:"contained",startIcon:g.jsx(Ue,{}),style:{backgroundColor:"white",color:"rgba(0,0,0,0.6)",textTransform:"none",fontSize:"16px"},children:"Sign In with Google"}),g.jsx(H,{sx:{margin:1},fullWidth:!0,variant:"contained",id:"metamaskLogin",onClick:()=>f(),startIcon:g.jsx(de,{}),style:{backgroundColor:"#d9711a",textTransform:"none",fontSize:"16px"},children:"Sign In with Metamask"}),g.jsx(H,{sx:{margin:1,textTransform:"none",fontSize:"16px"},fullWidth:!0,variant:"contained",id:"regularLogin",onClick:()=>k(!0),children:"Sign In with E-mail"}),g.jsx(We,{sx:{fontSize:"12px",textDecoration:"underline",cursor:"pointer"},children:g.jsx("span",{onClick:()=>T(!0),children:"Forgot password?"})})]}),g.jsx(ot,{updateUser:i,open:N,setOpen:w}),g.jsx(ze,{updateUser:i,open:b,setOpen:k}),g.jsx(qe,{updateUser:i,open:C,setOpen:_}),g.jsx(st,{open:F,onClose:()=>T(!1)})]})})}export{ut as default};