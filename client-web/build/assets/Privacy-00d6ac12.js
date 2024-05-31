import{bm as ce,l as e,s as O,m as R,k as c,i as Ae,j as Pe,bL as _e,bM as Oe,bq as de,bn as We,u as Ne,_ as ue,bN as Ee,n as Ve,o as Be,bl as Ue,q as He,bO as Fe,bP as qe,ah as W,ai as N,a6 as w,a4 as l,Y as i,X as $,U as z,O as V,S as H,bQ as Ge,Z as L,aO as he,ak as pe,a5 as xe,bR as me,bs as A,bt as B,bu as U,aD as C,ao as fe,bS as ge,a8 as ye,ay as je,aj as F,bG as q,bH as M,bT as be,bU as ve,Q as Ye,b1 as Qe,bV as Ke,aa as Xe,bW as J,aM as P,bX as ee}from"./index-2048bd11.js";import{_ as Ze,Q as ke}from"./QrModal-908d5485.js";import{D as Je}from"./DeleteDialog-d8d3ee34.js";const et=ce(e.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),tt=ce(e.jsx("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked"),nt=O("span")({position:"relative",display:"flex"}),ot=O(et)({transform:"scale(1)"}),st=O(tt)(({theme:t,ownerState:n})=>R({left:0,position:"absolute",transform:"scale(0)",transition:t.transitions.create("transform",{easing:t.transitions.easing.easeIn,duration:t.transitions.duration.shortest})},n.checked&&{transform:"scale(1)",transition:t.transitions.create("transform",{easing:t.transitions.easing.easeOut,duration:t.transitions.duration.shortest})}));function Se(t){const{checked:n=!1,classes:o={},fontSize:s}=t,a=R({},t,{checked:n});return e.jsxs(nt,{className:o.root,ownerState:a,children:[e.jsx(ot,{fontSize:s,className:o.background,ownerState:a}),e.jsx(st,{fontSize:s,className:o.dot,ownerState:a})]})}const at=c.createContext(void 0),Ce=at;function it(){return c.useContext(Ce)}function lt(t){return Pe("MuiRadio",t)}const rt=Ae("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary"]),te=rt,ct=["checked","checkedIcon","color","icon","name","onChange","size","className"],dt=t=>{const{classes:n,color:o}=t,s={root:["root",`color${de(o)}`]};return R({},n,Be(s,lt,n))},ut=O(_e,{shouldForwardProp:t=>Oe(t)||t==="classes",name:"MuiRadio",slot:"Root",overridesResolver:(t,n)=>{const{ownerState:o}=t;return[n.root,n[`color${de(o.color)}`]]}})(({theme:t,ownerState:n})=>R({color:(t.vars||t).palette.text.secondary},!n.disableRipple&&{"&:hover":{backgroundColor:t.vars?`rgba(${n.color==="default"?t.vars.palette.action.activeChannel:t.vars.palette[n.color].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:We(n.color==="default"?t.palette.action.active:t.palette[n.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},n.color!=="default"&&{[`&.${te.checked}`]:{color:(t.vars||t).palette[n.color].main}},{[`&.${te.disabled}`]:{color:(t.vars||t).palette.action.disabled}}));function ht(t,n){return typeof n=="object"&&n!==null?t===n:String(t)===String(n)}const ne=e.jsx(Se,{checked:!0}),oe=e.jsx(Se,{}),pt=c.forwardRef(function(n,o){var s,a;const d=Ne({props:n,name:"MuiRadio"}),{checked:u,checkedIcon:h=ne,color:v="primary",icon:j=oe,name:b,onChange:y,size:k="medium",className:p}=d,x=ue(d,ct),g=R({},d,{color:v,size:k}),r=dt(g),f=it();let m=u;const S=Ee(y,f&&f.onChange);let D=b;return f&&(typeof m>"u"&&(m=ht(f.value,d.value)),typeof D>"u"&&(D=f.name)),e.jsx(ut,R({type:"radio",icon:c.cloneElement(j,{fontSize:(s=oe.props.fontSize)!=null?s:k}),checkedIcon:c.cloneElement(h,{fontSize:(a=ne.props.fontSize)!=null?a:k}),ownerState:g,classes:r,name:D,checked:m,onChange:S,ref:o,className:Ve(r.root,p)},x))}),_=pt,xt=["actions","children","defaultValue","name","onChange","value"],mt=c.forwardRef(function(n,o){const{actions:s,children:a,defaultValue:d,name:u,onChange:h,value:v}=n,j=ue(n,xt),b=c.useRef(null),[y,k]=Ue({controlled:v,default:d,name:"RadioGroup"});c.useImperativeHandle(s,()=>({focus:()=>{let r=b.current.querySelector("input:not(:disabled):checked");r||(r=b.current.querySelector("input:not(:disabled)")),r&&r.focus()}}),[]);const p=He(o,b),x=Fe(u),g=c.useMemo(()=>({name:x,onChange(r){k(r.target.value),h&&h(r,r.target.value)},value:y}),[x,h,k,y]);return e.jsx(Ce.Provider,{value:g,children:e.jsx(qe,R({role:"radiogroup",ref:p},j,{children:a}))})}),se=mt;var G={},ft=N;Object.defineProperty(G,"__esModule",{value:!0});var we=G.default=void 0,gt=ft(W()),yt=e,jt=(0,gt.default)((0,yt.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20z"}),"AccountCircle");we=G.default=jt;var Y={},bt=N;Object.defineProperty(Y,"__esModule",{value:!0});var De=Y.default=void 0,vt=bt(W()),kt=e,St=(0,vt.default)((0,kt.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"}),"RemoveCircle");De=Y.default=St;const Ct=t=>{const n=w(s=>s.blackList),o=s=>{console.log(s),V.removeUserFromBlackList(s),V.getBlackList()};return e.jsx(l,{style:{margin:"20px"},children:e.jsxs(l,{children:[e.jsx(i,{fontWeight:"bold",children:"Users you have blocked"}),e.jsx(i,{children:"The blocked users cannot message you or view your profile. Tap the bin icon if you wish to remove the block."}),n.map(s=>e.jsx(wt,{handleRemove:o,userItem:s}))]})})};function wt(t){const{userItem:n,handleRemove:o}=t;return e.jsxs(l,{style:{marginTop:"20px",display:"flex",alignItems:"center",justifyContent:"space-between",maxWidth:"300px"},children:[e.jsxs(l,{style:{alignItems:"center",display:"flex",justifyContent:"space-around"},children:[e.jsx(we,{fontSize:"large"}),e.jsxs(l,{style:{marginLeft:"10px"},children:[e.jsx(i,{children:n.fullName}),e.jsx(i,{children:$(new Date(n.date*1e3),"dd MMMM yyyy")})]})]}),e.jsx(z,{onClick:()=>o(n.user),children:e.jsx(De,{color:"error"})})]})}const Me=t=>{const{user:n,createdLink:o,linkType:s}=t,a=()=>{if(s==="profile")return he({firstName:n.firstName,lastName:n.lastName,walletAddress:o.walletAddress,xmppId:pe(n.walletAddress)+xe,linkToken:o.token});if(s==="document")return me({linkToken:o.token})};return e.jsxs(e.Fragment,{children:[e.jsx(Ze,{size:226,style:{height:"60vh",maxWidth:"100%",width:"100%"},value:a(),viewBox:"0 0 256 256"}),e.jsxs(H,{sx:{boxShadow:"2px 0px 5px 0px rgba(0,0,0,0.75)",borderRadius:"10px",display:"flex",justifyContent:"space-between",alignItems:"center",pl:"10px",my:"10px"},children:[e.jsx("span",{children:Ge(a(),50)}),e.jsx(L,{variant:"contained",sx:{borderRadius:"10px"},onClick:()=>navigator.clipboard.writeText(a()),children:"Copy"})]})]})},Le=60*60,ze=Le*24,Re=ze*7,Dt=Re*4,Mt="If you set this, this link will only be valid for the given period of time",Lt="Add an optional note so that you remember who you shared this with.",zt="Choose the Document you would like to share.",Rt=t=>{const{getSharedLinks:n}=t,[o,s]=c.useState((-1).toString()),[a,d]=c.useState(""),[u,h]=c.useState(""),[v,j]=c.useState(!1),[b,y]=c.useState({_id:"",expiration:"",memo:"",resource:"",token:"",updatedAt:"",userId:"",walletAddress:"",createdAt:""}),k=w(m=>m.user),p=w(m=>m.documents),x=m=>s(m),g=m=>d(m),r=m=>h(m),f=async()=>{const m={expiration:Date.now()+ +o*1e3,memo:a,resource:"document",documentId:u};j(!0);try{const{data:S}=await ge(m);console.log(S),y(S.sharelinkData),n()}catch(S){console.log(S)}j(!1)};return e.jsxs(l,{style:{display:"flex",alignItems:"flex-start",flexDirection:"column",margin:"20px"},children:[e.jsxs(l,{children:[e.jsx(i,{fontWeight:"bold",children:"Create a Document Sharing link"}),e.jsx(i,{children:"Send this link to your trusted contact(s) so they can access your profile when you're in Restricted mode.."}),e.jsx(i,{fontWeight:"light",fontStyle:"italic",fontSize:"12px",children:"Note: you'll be able to remove this link any time if you change your mind."})]}),e.jsx(E,{selectedValue:o,handleChange:x,description:Mt,title:"Expiration",type:"menu1"}),e.jsx(E,{selectedValue:u,handleChange:r,description:zt,title:"Document",type:"menu2",documents:p}),e.jsx(E,{selectedValue:a,handleChange:g,description:Lt,title:"Memo",type:"input"}),e.jsxs(l,{children:[e.jsx(i,{fontSize:"15px",fontWeight:"bold",children:"Here you go!"}),e.jsx(i,{fontSize:"15px",children:"Your unique link and QR code have been created. You can share them using buttons below."}),e.jsx(i,{fontWeight:"light",fontStyle:"italic",fontSize:"12px",children:'Note: use "Manage" tab in case you want to copy or modify your sharing link in future.'}),e.jsx(l,{style:{marginTop:"20px"},children:b.walletAddress?e.jsx(Me,{createdLink:b,user:k,linkType:"document"}):e.jsx(L,{disabled:v,onClick:f,variant:"contained",children:"Generate Link"})})]})]})};function E(t){const{handleChange:n,selectedValue:o,title:s,description:a,type:d,documents:u}=t;return e.jsxs(l,{style:{margin:"10px"},children:[e.jsx(i,{fontSize:"15px",fontWeight:"bold",children:s}),e.jsx(i,{fontSize:"15px",children:a}),d==="menu1"?e.jsxs(A,{sx:{minWidth:120,marginTop:"20px"},children:[e.jsx(B,{id:"demo-simple-select-helper-label",children:"Expiration"}),e.jsxs(U,{labelId:"demo-simple-select-helper-label",id:"demo-simple-select-helper",value:o,label:"Expiration",onChange:h=>n(h.target.value),children:[e.jsx(C,{value:(-1).toString(),children:"No Expiration"}),e.jsx(C,{value:Le.toString(),children:"1 hour"}),e.jsx(C,{value:ze.toString(),children:"1 day"}),e.jsx(C,{value:Re.toString(),children:"1 week"}),e.jsx(C,{value:Dt.toString(),children:"1 month"})]})]}):null,d==="menu2"?e.jsxs(A,{sx:{minWidth:120,marginTop:"20px"},children:[e.jsx(B,{id:"demo-simple-select-helper-label",children:"Choose Document"}),e.jsx(U,{size:"medium",style:{width:"120px"},labelId:"demo-simple-select-helper-label",id:"demo-simple-select-helper",value:o,label:"Choose document",onChange:h=>n(h.target.value),children:u.map(h=>e.jsx(C,{value:h._id,children:h.documentName}))})]}):null,d==="input"?e.jsx(l,{style:{marginTop:"20px"},children:e.jsx(fe,{onChange:h=>n(h.target.value),id:"outlined-basic",label:"shared with Alice",variant:"outlined"})}):null]})}var Q={},It=N;Object.defineProperty(Q,"__esModule",{value:!0});var K=Q.default=void 0,Tt=It(W()),$t=e,At=(0,Tt.default)((0,$t.jsx)("path",{d:"M15 21h-2v-2h2v2zm-2-7h-2v5h2v-5zm8-2h-2v4h2v-4zm-2-2h-2v2h2v-2zM7 12H5v2h2v-2zm-2-2H3v2h2v-2zm7-5h2V3h-2v2zm-7.5-.5v3h3v-3h-3zM9 9H3V3h6v6zm-4.5 7.5v3h3v-3h-3zM9 21H3v-6h6v6zm7.5-16.5v3h3v-3h-3zM21 9h-6V3h6v6zm-2 10v-3h-4v2h2v3h4v-2h-2zm-2-7h-4v2h4v-2zm-4-2H7v2h2v2h2v-2h2v-2zm1-1V7h-2V5h-2v4h4zM6.75 5.25h-1.5v1.5h1.5v-1.5zm0 12h-1.5v1.5h1.5v-1.5zm12-12h-1.5v1.5h1.5v-1.5z"}),"QrCode2");K=Q.default=At;var X={},Pt=N;Object.defineProperty(X,"__esModule",{value:!0});var Z=X.default=void 0,_t=Pt(W()),Ot=e,Wt=(0,_t.default)((0,Ot.jsx)("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"}),"Description");Z=X.default=Wt;const Nt=t=>{const{handleChangeTab:n,loading:o,sharedLinks:s,handleOpenModal:a,deleteLink:d}=t;return e.jsxs(l,{style:{margin:"10px",display:"flex",flexDirection:"column"},children:[e.jsxs(l,{style:{flexDirection:"row",display:"flex",alignItems:"center",margin:"10px",marginLeft:0},children:[e.jsx(i,{fontWeight:"bold",children:"Current Document Shares"}),e.jsx(L,{style:{width:"150px",marginLeft:"10px"},onClick:u=>n(u,1),variant:"contained",children:"+ Add a share"})]}),e.jsx(i,{children:"Listed below are your currently active document sharing links. You can share or delete them."}),o?e.jsx(ye,{}):null,s.length>0?s.map((u,h)=>e.jsx(Et,{handleOpenModal:a,linkItem:u,docLink:me({linkToken:u.token}),deleteLink:d},u._id)):null]})};function Et(t){const{linkItem:n,key:o,handleOpenModal:s,docLink:a,deleteLink:d}=t;return e.jsxs(l,{style:{margin:"10px",marginTop:"40px"},children:[e.jsx(i,{fontWeight:"bold",children:n.memo}),e.jsxs(l,{style:{flexDirection:"row",display:"flex",alignItems:"center"},children:[e.jsxs(l,{children:[e.jsxs(i,{children:["Created at:"," ",$(new Date(n.createdAt),"MMMM dd yyyy, hh:mm")]}),e.jsxs(i,{children:["Expires:"," ",+n.expiration==-1?"":$(new Date(n.expiration),"MMMM dd yyyy hh:mm")]})]}),e.jsxs(l,{marginLeft:"50px",children:[e.jsx(z,{onClick:()=>s(a),color:"inherit",children:e.jsx(K,{fontSize:"large"})}),e.jsx(z,{onClick:()=>navigator.clipboard.writeText(a),color:"inherit",children:e.jsx(Z,{fontSize:"large"})}),e.jsx(z,{onClick:()=>d(n.token),color:"inherit",children:e.jsx(je,{fontSize:"large"})})]})]})]},o)}function ae(t){return{id:`simple-tab-${t}`,"aria-controls":`simple-tabpanel-${t}`}}const Vt=t=>{const[n,o]=c.useState(0),[s,a]=c.useState(!1),[d,u]=c.useState(!1),[h,v]=c.useState([]),[j,b]=c.useState("");w(f=>f.user);const{showSnackbar:y}=F(),k=()=>a(!1),p=f=>{b(f),a(!0)},x=(f,m)=>{o(m)},g=async()=>{u(!0);try{const{data:f}=await be();v(f.items.filter(m=>m.resource==="document"))}catch(f){console.log(f)}u(!1)},r=async f=>{try{const{data:m}=await ve(f);await g(),y("success","Link deleted successfully")}catch(m){console.log(m)}};return c.useEffect(()=>{g()},[]),e.jsxs(H,{children:[e.jsxs(q,{style:{display:"flex"},value:n,onChange:x,"aria-label":"basic tabs example",children:[e.jsx(M,{label:"Manage",...ae(0)}),e.jsx(M,{label:"Add",...ae(1)})]}),n===0&&e.jsx(Nt,{handleChangeTab:x,sharedLinks:h,loading:d,handleOpenModal:p,deleteLink:r}),n===1&&e.jsx(Rt,{getSharedLinks:g}),e.jsx(ke,{open:s,link:j,onClose:k})]})},Bt=t=>{const[n,o]=c.useState(!1),[s,a]=c.useState(!1),{showSnackbar:d}=F(),u=w(r=>r.clearUser),h=w(r=>r.user),v=Ye(),{active:j,deactivate:b}=Qe(),y=()=>o(!1),k=async()=>{a(!0);try{await Ke(),d("success","Account deleted successfully"),p()}catch(r){console.log(r),d("error","Something went wrong")}a(!1),o(!1)},p=()=>{u(),V.stop(),j&&b(),v.push("/")},x=r=>{const f=`data:text/json;chatset=utf-8,${encodeURIComponent(JSON.stringify(r))}`,m=document.createElement("a");m.href=f,m.download=h.firstName+" "+h.lastName+" personal data.json",m.click(),m.remove()},g=async()=>{a(!0);try{const{data:r}=await Xe().get("/users/exportData");x(r)}catch(r){console.log(r)}a(!1)};return e.jsxs(l,{sx:{display:"flex",alignItems:"flex-start",flexDirection:"column",margin:"20px",width:"50vw"},children:[e.jsxs(l,{sx:{width:"100%"},children:[e.jsx(i,{fontWeight:"bold",children:"Download your data"}),e.jsx(i,{children:"You own your data. Tap the button below to download a copy of your data"}),e.jsx(l,{sx:{display:"flex",justifyContent:"center"},children:e.jsx(L,{sx:{margin:"0 auto"},disabled:s,onClick:g,variant:"contained",children:"Download my data"})})]}),e.jsxs(l,{sx:{marginTop:"20px",width:"100%"},children:[e.jsx(i,{fontWeight:"bold",children:"Delete your account"}),e.jsx(i,{children:"Use this only if you want to permanently delete your account & data from our system."}),e.jsx(i,{fontWeight:"light",fontStyle:"italic",fontSize:"12px",children:"Note: due to the immutable nature of distributed ledger technology, network nodes operated by the community may still retain historical transactions generated by your account, however your personally identifiable information such as your name, e-mail, your key-value storage etc will be removed."}),e.jsx(i,{fontWeight:"light",fontStyle:"italic",fontSize:"12px",children:"Any of your digital assets will be lost."}),e.jsx(l,{sx:{display:"flex",justifyContent:"center"},children:e.jsx(L,{color:"error",onClick:()=>o(!0),variant:"contained",children:"Delete my account"})})]}),e.jsx(Je,{onDeletePress:k,loading:s,onClose:y,open:n,title:"Delete Account",description:"This will result in a complete deletion of your account and assets. Are you sure you want to proceed?"})]})},Ut=t=>{const{handleChangeTab:n,sharedLinks:o,loading:s,handleOpenModal:a,profileLink:d,deleteLink:u}=t;return e.jsxs(l,{style:{margin:"10px",display:"flex",flexDirection:"column"},children:[e.jsxs(l,{style:{flexDirection:"row",display:"flex",alignItems:"center",margin:"10px",marginLeft:0},children:[e.jsx(i,{fontWeight:"bold",children:"Current Profile Shares"}),e.jsx(L,{style:{width:"150px",marginLeft:"10px"},onClick:h=>n(h,1),variant:"contained",children:"+ Add a share"})]}),e.jsx(i,{children:"Listed below are your currently active profile sharing links. You can share or delete them."}),s?e.jsx(ye,{}):null,o.length>0?o.map((h,v)=>e.jsx(Ht,{handleOpenModal:a,linkItem:h,profileLink:d,deleteLink:u},h._id)):null]})};function Ht(t){const{linkItem:n,key:o,handleOpenModal:s,profileLink:a,deleteLink:d}=t;return e.jsxs(l,{style:{margin:"10px",marginTop:"40px"},children:[e.jsx(i,{fontWeight:"bold",children:n.memo}),e.jsxs(l,{style:{flexDirection:"row",display:"flex",alignItems:"center"},children:[e.jsxs(l,{children:[e.jsxs(i,{children:["Created at:"," ",$(new Date(n.createdAt),"MMMM dd yyyy, hh:mm")]}),e.jsxs(i,{children:["Expires:"," ",+n.expiration==-1?"":$(new Date(n.expiration),"MMMM dd yyyy hh:mm")]})]}),e.jsxs(l,{marginLeft:"50px",children:[e.jsx(z,{onClick:s,color:"inherit",children:e.jsx(K,{fontSize:"large"})}),e.jsx(z,{onClick:()=>navigator.clipboard.writeText(a),color:"inherit",children:e.jsx(Z,{fontSize:"large"})}),e.jsx(z,{onClick:()=>d(n.token),color:"inherit",children:e.jsx(je,{fontSize:"large"})})]})]})]},o)}const Ie=60*60,Te=Ie*24,$e=Te*7,Ft=$e*4,qt="If you set this, this link will only be valid for the given period of time",Gt="Add an optional note so that you remember who you shared this with.";function ie(t){const{handleChange:n,selectedValue:o,title:s,description:a,type:d}=t;return e.jsxs(l,{style:{margin:"10px"},children:[e.jsx(i,{fontSize:"15px",fontWeight:"bold",children:s}),e.jsx(i,{fontSize:"15px",children:a}),d==="menu"?e.jsxs(A,{sx:{minWidth:120,marginTop:"20px"},children:[e.jsx(B,{id:"demo-simple-select-helper-label",children:"Expiration"}),e.jsxs(U,{labelId:"demo-simple-select-helper-label",id:"demo-simple-select-helper",value:o,label:"Expiration",onChange:u=>n(u.target.value),children:[e.jsx(C,{value:(-1).toString(),children:"No Expiration"}),e.jsx(C,{value:Ie.toString(),children:"1 hour"}),e.jsx(C,{value:Te.toString(),children:"1 day"}),e.jsx(C,{value:$e.toString(),children:"1 week"}),e.jsx(C,{value:Ft.toString(),children:"1 month"})]})]}):e.jsx(l,{style:{marginTop:"20px"},children:e.jsx(fe,{onChange:u=>n(u.target.value),id:"outlined-basic",label:"shared with Alice",variant:"outlined"})})]})}const Yt=t=>{const{getSharedLinks:n}=t,[o,s]=c.useState((-1).toString()),[a,d]=c.useState(""),[u,h]=c.useState({_id:"",expiration:"",memo:"",resource:"",token:"",updatedAt:"",userId:"",walletAddress:"",createdAt:""}),[v,j]=c.useState(!1),b=w(x=>x.user),y=x=>s(x),k=x=>d(x),p=async()=>{const x={expiration:Date.now()+ +o*1e3,memo:a,resource:"profile"};j(!0);try{const{data:g}=await ge(x);console.log(g),h(g.sharelinkData),n()}catch(g){console.log(g)}j(!1)};return e.jsxs(l,{style:{display:"flex",alignItems:"flex-start",flexDirection:"column",margin:"20px"},children:[e.jsxs(l,{children:[e.jsx(i,{fontWeight:"bold",children:"Create a Profile Sharing link"}),e.jsx(i,{children:"Send this link to your trusted contact(s) so they can access your profile when you're in Restricted mode.."}),e.jsx(i,{fontWeight:"light",fontStyle:"italic",fontSize:"12px",children:"Note: you'll be able to remove this link any time if you change your mind."})]}),e.jsx(ie,{selectedValue:o,handleChange:y,description:qt,title:"Expiration",type:"menu"}),e.jsx(ie,{selectedValue:a,handleChange:k,description:Gt,title:"Memo",type:"input"}),e.jsxs(l,{children:[e.jsx(i,{fontSize:"15px",fontWeight:"bold",children:"Here you go!"}),e.jsx(i,{fontSize:"15px",children:"Your unique link and QR code have been created. You can share them using buttons below."}),e.jsx(i,{fontWeight:"light",fontStyle:"italic",fontSize:"12px",children:'Note: use "Manage" tab in case you want to copy or modify your sharing link in future.'}),e.jsx(l,{style:{marginTop:"20px"},children:u.walletAddress?e.jsx(Me,{createdLink:u,user:b,linkType:"profile"}):e.jsx(L,{disabled:v,onClick:p,variant:"contained",children:"Generate Link"})})]})]})};function le(t){return{id:`simple-tab-${t}`,"aria-controls":`simple-tabpanel-${t}`}}const Qt=t=>{const[n,o]=c.useState(0),[s,a]=c.useState(!1),[d,u]=c.useState([]),[h,v]=c.useState(!1),[j,b]=c.useState(!1),y=w(S=>S.user),k=()=>v(!0),p=()=>v(!1),x=()=>b(!0),g=(S,D)=>{o(D)},r=he({firstName:y.firstName,lastName:y.lastName,walletAddress:y.walletAddress,xmppId:pe(y.walletAddress)+xe,linkToken:y.token}),f=async()=>{a(!0);try{const{data:S}=await be();u(S.items.filter(D=>D.resource==="profile"))}catch(S){console.log(S)}a(!1)},m=async S=>{try{const{data:D}=await ve(S);await f(),x()}catch(D){console.log(D)}};return c.useEffect(()=>{f()},[]),e.jsxs(l,{children:[e.jsxs(q,{style:{display:"flex"},value:n,onChange:g,"aria-label":"basic tabs example",children:[e.jsx(M,{label:"Manage",...le(0)}),e.jsx(M,{label:"Add",...le(1)})]}),n===0?e.jsx(Ut,{handleChangeTab:g,sharedLinks:d,loading:s,profileLink:r,handleOpenModal:k,deleteLink:m}):null,n===1?e.jsx(Yt,{getSharedLinks:f}):null,e.jsx(ke,{open:h,link:r,onClose:p})]})},re={open:"true",restricted:"false",full:"true",individual:"false"},Kt=({handleChangeTab:t})=>{const n=w(p=>p.updateUserProfilePermission),o=w(p=>p.updateUserDocumentsPermission),s=w(p=>p.user),[a,d]=c.useState(s.isProfileOpen?"open":"restricted"),[u,h]=c.useState(s.isAssetsOpen?"full":"individual"),[v,j]=c.useState(null),{showSnackbar:b}=F();console.log(u);const y=async p=>{const x=p==="full",g=re[p];j("profile");try{const r=new FormData;r.append("isProfileOpen",g);const{data:f}=await ee(r);b("success","Profile permissions updated"),n(x),d(p)}catch(r){console.log(r)}j(null)},k=async p=>{j("assets");const x=p==="full",g=re[p];try{const r=new FormData;r.append("isAssetsOpen",g);const{data:f}=await ee(r);b("success","Assets permissions updated"),o(x),h(p)}catch(r){console.log(r)}j(null)};return e.jsxs(H,{sx:{margin:"20px",flexDirection:"column",display:"flex",alignItems:"center"},children:[e.jsxs(A,{children:[e.jsx(J,{id:"demo-radio-buttons-group-label",children:"Profile Visiblility"}),e.jsxs(se,{"aria-labelledby":"demo-radio-buttons-group-label",value:a,name:"radio-buttons-group",onChange:(p,x)=>y(x),children:[e.jsx(P,{value:"open",control:e.jsx(_,{}),label:e.jsx(i,{fontWeight:"bold",children:"Open (default)"})}),e.jsx(i,{fontSize:"15px",children:"Your profile can be viewed by anyone who follows your profile link or QR code"}),e.jsx(P,{value:"restricted",control:e.jsx(_,{}),label:e.jsx(i,{fontWeight:"bold",children:"Restricted"})}),e.jsx(i,{fontSize:"15px",children:"Only users with your permission or temporary secure link can see your profile"})]})]}),e.jsx(L,{sx:{marginTop:"10px",marginBottom:"20px"},disabled:v==="profile",onClick:p=>t(p,1),variant:"contained",id:"manageProfileShares",children:"Manage profile shares"}),e.jsxs(A,{children:[e.jsx(J,{id:"demo-radio-buttons-group-label",children:"Documents Visiblility"}),e.jsxs(se,{"aria-labelledby":"demo-radio-buttons-group-label",value:u,name:"radio-buttons-group",onChange:(p,x)=>k(x),children:[e.jsx(P,{value:"full",control:e.jsx(_,{}),label:e.jsx(i,{fontWeight:"bold",children:"Full (default)"})}),e.jsx(i,{fontSize:"15px",children:"Show all Documents to those who can see your profile"}),e.jsx(P,{value:"individual",control:e.jsx(_,{}),label:e.jsx(i,{fontWeight:"bold",children:"Individual"})}),e.jsx(i,{fontSize:"15px",children:"You need to share each document individually before others can see them"})]})]}),e.jsx(L,{sx:{marginTop:"10px",marginBottom:"20px"},disabled:v==="assets",fullWidth:!1,onClick:p=>t(p,2),variant:"contained",id:"manageDocumentShares",children:"Manage documents shares"})]})};function I(t){return{id:`simple-tab-${t}`,"aria-controls":`simple-tabpanel-${t}`}}const T={display:"flex",justifyContent:"center"},en=()=>{const[t,n]=c.useState(0),o=(s,a)=>{n(a)};return e.jsxs(l,{sx:{borderBottom:1,borderColor:"divider"},children:[e.jsxs(q,{value:t,onChange:o,"aria-label":"basic tabs example",children:[e.jsx(M,{label:"Visibility",...I(0)}),e.jsx(M,{label:"Profile Shares",...I(1)}),e.jsx(M,{label:"Document Shares",...I(2)}),e.jsx(M,{label:"Blocking",...I(3)}),e.jsx(M,{label:"Manage Data",...I(4)})]}),t===0&&e.jsx(l,{sx:T,children:e.jsx(Kt,{handleChangeTab:o})}),t===1&&e.jsx(l,{sx:T,children:e.jsx(Qt,{})}),t===2&&e.jsx(l,{sx:T,children:e.jsx(Vt,{})}),t===3&&e.jsx(l,{sx:T,children:e.jsx(Ct,{})}),t===4&&e.jsx(l,{sx:T,children:e.jsx(Bt,{})})]})};export{en as default};