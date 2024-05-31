import{b_ as Q,k as $,l as T,am as ot,aH as st,S as K,bQ as ut,Z as lt,U as ft,ac as ht}from"./index-2048bd11.js";var W={},J={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},vt=J;function Z(t){this.mode=vt.MODE_8BIT_BYTE,this.data=t}Z.prototype={getLength:function(t){return this.data.length},write:function(t){for(var e=0;e<this.data.length;e++)t.put(this.data.charCodeAt(e),8)}};var gt=Z,V={L:1,M:0,Q:3,H:2},x=V;function m(t,e){this.totalCount=t,this.dataCount=e}m.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]];m.getRSBlocks=function(t,e){var a=m.getRsBlockTable(t,e);if(a==null)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e);for(var r=a.length/3,n=new Array,i=0;i<r;i++)for(var s=a[i*3+0],o=a[i*3+1],l=a[i*3+2],f=0;f<s;f++)n.push(new m(o,l));return n};m.getRsBlockTable=function(t,e){switch(e){case x.L:return m.RS_BLOCK_TABLE[(t-1)*4+0];case x.M:return m.RS_BLOCK_TABLE[(t-1)*4+1];case x.Q:return m.RS_BLOCK_TABLE[(t-1)*4+2];case x.H:return m.RS_BLOCK_TABLE[(t-1)*4+3];default:return}};var dt=m;function j(){this.buffer=new Array,this.length=0}j.prototype={get:function(t){var e=Math.floor(t/8);return(this.buffer[e]>>>7-t%8&1)==1},put:function(t,e){for(var a=0;a<e;a++)this.putBit((t>>>e-a-1&1)==1)},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var pt=j,p={glog:function(t){if(t<1)throw new Error("glog("+t+")");return p.LOG_TABLE[t]},gexp:function(t){for(;t<0;)t+=255;for(;t>=256;)t-=255;return p.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)};for(var v=0;v<8;v++)p.EXP_TABLE[v]=1<<v;for(var v=8;v<256;v++)p.EXP_TABLE[v]=p.EXP_TABLE[v-4]^p.EXP_TABLE[v-5]^p.EXP_TABLE[v-6]^p.EXP_TABLE[v-8];for(var v=0;v<255;v++)p.LOG_TABLE[p.EXP_TABLE[v]]=v;var q=p,P=q;function N(t,e){if(t.length==null)throw new Error(t.length+"/"+e);for(var a=0;a<t.length&&t[a]==0;)a++;this.num=new Array(t.length-a+e);for(var r=0;r<t.length-a;r++)this.num[r]=t[r+a]}N.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),a=0;a<this.getLength();a++)for(var r=0;r<t.getLength();r++)e[a+r]^=P.gexp(P.glog(this.get(a))+P.glog(t.get(r)));return new N(e,0)},mod:function(t){if(this.getLength()-t.getLength()<0)return this;for(var e=P.glog(this.get(0))-P.glog(t.get(0)),a=new Array(this.getLength()),r=0;r<this.getLength();r++)a[r]=this.get(r);for(var r=0;r<t.getLength();r++)a[r]^=P.gexp(P.glog(t.get(r))+e);return new N(a,0).mod(t)}};var tt=N,d=J,U=tt,mt=q,_={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},h={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){for(var e=t<<10;h.getBCHDigit(e)-h.getBCHDigit(h.G15)>=0;)e^=h.G15<<h.getBCHDigit(e)-h.getBCHDigit(h.G15);return(t<<10|e)^h.G15_MASK},getBCHTypeNumber:function(t){for(var e=t<<12;h.getBCHDigit(e)-h.getBCHDigit(h.G18)>=0;)e^=h.G18<<h.getBCHDigit(e)-h.getBCHDigit(h.G18);return t<<12|e},getBCHDigit:function(t){for(var e=0;t!=0;)e++,t>>>=1;return e},getPatternPosition:function(t){return h.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,a){switch(t){case _.PATTERN000:return(e+a)%2==0;case _.PATTERN001:return e%2==0;case _.PATTERN010:return a%3==0;case _.PATTERN011:return(e+a)%3==0;case _.PATTERN100:return(Math.floor(e/2)+Math.floor(a/3))%2==0;case _.PATTERN101:return e*a%2+e*a%3==0;case _.PATTERN110:return(e*a%2+e*a%3)%2==0;case _.PATTERN111:return(e*a%3+(e+a)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new U([1],0),a=0;a<t;a++)e=e.multiply(new U([1,mt.gexp(a)],0));return e},getLengthInBits:function(t,e){if(1<=e&&e<10)switch(t){case d.MODE_NUMBER:return 10;case d.MODE_ALPHA_NUM:return 9;case d.MODE_8BIT_BYTE:return 8;case d.MODE_KANJI:return 8;default:throw new Error("mode:"+t)}else if(e<27)switch(t){case d.MODE_NUMBER:return 12;case d.MODE_ALPHA_NUM:return 11;case d.MODE_8BIT_BYTE:return 16;case d.MODE_KANJI:return 10;default:throw new Error("mode:"+t)}else if(e<41)switch(t){case d.MODE_NUMBER:return 14;case d.MODE_ALPHA_NUM:return 13;case d.MODE_8BIT_BYTE:return 16;case d.MODE_KANJI:return 12;default:throw new Error("mode:"+t)}else throw new Error("type:"+e)},getLostPoint:function(t){for(var e=t.getModuleCount(),a=0,r=0;r<e;r++)for(var n=0;n<e;n++){for(var i=0,s=t.isDark(r,n),o=-1;o<=1;o++)if(!(r+o<0||e<=r+o))for(var l=-1;l<=1;l++)n+l<0||e<=n+l||o==0&&l==0||s==t.isDark(r+o,n+l)&&i++;i>5&&(a+=3+i-5)}for(var r=0;r<e-1;r++)for(var n=0;n<e-1;n++){var f=0;t.isDark(r,n)&&f++,t.isDark(r+1,n)&&f++,t.isDark(r,n+1)&&f++,t.isDark(r+1,n+1)&&f++,(f==0||f==4)&&(a+=3)}for(var r=0;r<e;r++)for(var n=0;n<e-6;n++)t.isDark(r,n)&&!t.isDark(r,n+1)&&t.isDark(r,n+2)&&t.isDark(r,n+3)&&t.isDark(r,n+4)&&!t.isDark(r,n+5)&&t.isDark(r,n+6)&&(a+=40);for(var n=0;n<e;n++)for(var r=0;r<e-6;r++)t.isDark(r,n)&&!t.isDark(r+1,n)&&t.isDark(r+2,n)&&t.isDark(r+3,n)&&t.isDark(r+4,n)&&!t.isDark(r+5,n)&&t.isDark(r+6,n)&&(a+=40);for(var u=0,n=0;n<e;n++)for(var r=0;r<e;r++)t.isDark(r,n)&&u++;var C=Math.abs(100*u/e/e-50)/5;return a+=C*10,a}},ct=h,Tt=gt,et=dt,rt=pt,B=ct,Et=tt;function c(t,e){this.typeNumber=t,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}var g=c.prototype;g.addData=function(t){var e=new Tt(t);this.dataList.push(e),this.dataCache=null};g.isDark=function(t,e){if(t<0||this.moduleCount<=t||e<0||this.moduleCount<=e)throw new Error(t+","+e);return this.modules[t][e]};g.getModuleCount=function(){return this.moduleCount};g.make=function(){if(this.typeNumber<1){var t=1;for(t=1;t<40;t++){for(var e=et.getRSBlocks(t,this.errorCorrectLevel),a=new rt,r=0,n=0;n<e.length;n++)r+=e[n].dataCount;for(var n=0;n<this.dataList.length;n++){var i=this.dataList[n];a.put(i.mode,4),a.put(i.getLength(),B.getLengthInBits(i.mode,t)),i.write(a)}if(a.getLengthInBits()<=r*8)break}this.typeNumber=t}this.makeImpl(!1,this.getBestMaskPattern())};g.makeImpl=function(t,e){this.moduleCount=this.typeNumber*4+17,this.modules=new Array(this.moduleCount);for(var a=0;a<this.moduleCount;a++){this.modules[a]=new Array(this.moduleCount);for(var r=0;r<this.moduleCount;r++)this.modules[a][r]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(t,e),this.typeNumber>=7&&this.setupTypeNumber(t),this.dataCache==null&&(this.dataCache=c.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,e)};g.setupPositionProbePattern=function(t,e){for(var a=-1;a<=7;a++)if(!(t+a<=-1||this.moduleCount<=t+a))for(var r=-1;r<=7;r++)e+r<=-1||this.moduleCount<=e+r||(0<=a&&a<=6&&(r==0||r==6)||0<=r&&r<=6&&(a==0||a==6)||2<=a&&a<=4&&2<=r&&r<=4?this.modules[t+a][e+r]=!0:this.modules[t+a][e+r]=!1)};g.getBestMaskPattern=function(){for(var t=0,e=0,a=0;a<8;a++){this.makeImpl(!0,a);var r=B.getLostPoint(this);(a==0||t>r)&&(t=r,e=a)}return e};g.createMovieClip=function(t,e,a){var r=t.createEmptyMovieClip(e,a),n=1;this.make();for(var i=0;i<this.modules.length;i++)for(var s=i*n,o=0;o<this.modules[i].length;o++){var l=o*n,f=this.modules[i][o];f&&(r.beginFill(0,100),r.moveTo(l,s),r.lineTo(l+n,s),r.lineTo(l+n,s+n),r.lineTo(l,s+n),r.endFill())}return r};g.setupTimingPattern=function(){for(var t=8;t<this.moduleCount-8;t++)this.modules[t][6]==null&&(this.modules[t][6]=t%2==0);for(var e=8;e<this.moduleCount-8;e++)this.modules[6][e]==null&&(this.modules[6][e]=e%2==0)};g.setupPositionAdjustPattern=function(){for(var t=B.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var a=0;a<t.length;a++){var r=t[e],n=t[a];if(this.modules[r][n]==null)for(var i=-2;i<=2;i++)for(var s=-2;s<=2;s++)i==-2||i==2||s==-2||s==2||i==0&&s==0?this.modules[r+i][n+s]=!0:this.modules[r+i][n+s]=!1}};g.setupTypeNumber=function(t){for(var e=B.getBCHTypeNumber(this.typeNumber),a=0;a<18;a++){var r=!t&&(e>>a&1)==1;this.modules[Math.floor(a/3)][a%3+this.moduleCount-8-3]=r}for(var a=0;a<18;a++){var r=!t&&(e>>a&1)==1;this.modules[a%3+this.moduleCount-8-3][Math.floor(a/3)]=r}};g.setupTypeInfo=function(t,e){for(var a=this.errorCorrectLevel<<3|e,r=B.getBCHTypeInfo(a),n=0;n<15;n++){var i=!t&&(r>>n&1)==1;n<6?this.modules[n][8]=i:n<8?this.modules[n+1][8]=i:this.modules[this.moduleCount-15+n][8]=i}for(var n=0;n<15;n++){var i=!t&&(r>>n&1)==1;n<8?this.modules[8][this.moduleCount-n-1]=i:n<9?this.modules[8][15-n-1+1]=i:this.modules[8][15-n-1]=i}this.modules[this.moduleCount-8][8]=!t};g.mapData=function(t,e){for(var a=-1,r=this.moduleCount-1,n=7,i=0,s=this.moduleCount-1;s>0;s-=2)for(s==6&&s--;;){for(var o=0;o<2;o++)if(this.modules[r][s-o]==null){var l=!1;i<t.length&&(l=(t[i]>>>n&1)==1);var f=B.getMask(e,r,s-o);f&&(l=!l),this.modules[r][s-o]=l,n--,n==-1&&(i++,n=7)}if(r+=a,r<0||this.moduleCount<=r){r-=a,a=-a;break}}};c.PAD0=236;c.PAD1=17;c.createData=function(t,e,a){for(var r=et.getRSBlocks(t,e),n=new rt,i=0;i<a.length;i++){var s=a[i];n.put(s.mode,4),n.put(s.getLength(),B.getLengthInBits(s.mode,t)),s.write(n)}for(var o=0,i=0;i<r.length;i++)o+=r[i].dataCount;if(n.getLengthInBits()>o*8)throw new Error("code length overflow. ("+n.getLengthInBits()+">"+o*8+")");for(n.getLengthInBits()+4<=o*8&&n.put(0,4);n.getLengthInBits()%8!=0;)n.putBit(!1);for(;!(n.getLengthInBits()>=o*8||(n.put(c.PAD0,8),n.getLengthInBits()>=o*8));)n.put(c.PAD1,8);return c.createBytes(n,r)};c.createBytes=function(t,e){for(var a=0,r=0,n=0,i=new Array(e.length),s=new Array(e.length),o=0;o<e.length;o++){var l=e[o].dataCount,f=e[o].totalCount-l;r=Math.max(r,l),n=Math.max(n,f),i[o]=new Array(l);for(var u=0;u<i[o].length;u++)i[o][u]=255&t.buffer[u+a];a+=l;var C=B.getErrorCorrectPolynomial(f),D=new Et(i[o],C.getLength()-1),M=D.mod(C);s[o]=new Array(C.getLength()-1);for(var u=0;u<s[o].length;u++){var L=u+M.getLength()-s[o].length;s[o][u]=L>=0?M.get(L):0}}for(var w=0,u=0;u<e.length;u++)w+=e[u].totalCount;for(var R=new Array(w),y=0,u=0;u<r;u++)for(var o=0;o<e.length;o++)u<i[o].length&&(R[y++]=i[o][u]);for(var u=0;u<n;u++)for(var o=0;o<e.length;o++)u<s[o].length&&(R[y++]=s[o][u]);return R};var _t=c,S={};Object.defineProperty(S,"__esModule",{value:!0});var Bt=Q,b=at(Bt),Ct=$,Pt=at(Ct);function at(t){return t&&t.__esModule?t:{default:t}}var Lt={d:b.default.string.isRequired,fill:b.default.string.isRequired,transformX:b.default.number.isRequired,transformY:b.default.number.isRequired},Rt={},H=function(e){var a=e.d,r=e.fill,n=e.transformX,i=e.transformY;return Pt.default.createElement("path",{d:a,fill:r,transform:"matrix("+[1,0,0,1,n,i]+")"})};H.propTypes=Lt;H.defaultProps=Rt;S.default=H;var z={};Object.defineProperty(z,"__esModule",{value:!0});var At=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},Dt=Q,O=it(Dt),nt=$,Y=it(nt);function it(t){return t&&t.__esModule?t:{default:t}}function wt(t,e){var a={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(a[r]=t[r]);return a}var yt={children:O.default.array.isRequired,size:O.default.number.isRequired,title:O.default.string,xmlns:O.default.string},Mt={title:void 0,xmlns:"http://www.w3.org/2000/svg"},k=(0,nt.forwardRef)(function(t,e){var a=t.children,r=t.size,n=t.title,i=t.xmlns,s=wt(t,["children","size","title","xmlns"]);return Y.default.createElement("svg",At({},s,{height:r,ref:e,width:r,xmlns:i}),n?Y.default.createElement("title",null,n):null,a)});k.displayName="QRCodeSurface";k.propTypes=yt;k.defaultProps=Mt;z.default=k;Object.defineProperty(W,"__esModule",{value:!0});var xt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},bt=_t,Ot=A(bt),Nt=V,kt=A(Nt),It=Q,E=A(It),X=$,F=A(X),Qt=S,$t=A(Qt),St=z,Ht=A(St);function A(t){return t&&t.__esModule?t:{default:t}}function zt(t,e){var a={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(a[r]=t[r]);return a}var Xt={bgColor:E.default.oneOfType([E.default.object,E.default.string]),fgColor:E.default.oneOfType([E.default.object,E.default.string]),level:E.default.string,size:E.default.number,value:E.default.string.isRequired},Gt={bgColor:"#FFFFFF",fgColor:"#000000",level:"L",size:256},I=(0,X.forwardRef)(function(t,e){var a=t.bgColor,r=t.fgColor,n=t.level,i=t.size,s=t.value,o=zt(t,["bgColor","fgColor","level","size","value"]),l=new Ot.default(-1,kt.default[n]);l.addData(s),l.make();var f=l.modules,u=i/f.length;return F.default.createElement(Ht.default,xt({},o,{size:i,ref:e}),f.map(function(C,D){return C.map(function(M,L){var w=Math.round(L*u),R=Math.round(D*u),y=Math.round((L+1)*u)-w,G=Math.round((D+1)*u)-R;return F.default.createElement($t.default,{key:"rectangle-"+D+"-"+L,d:"M 0 0 L "+y+" 0 L "+y+" "+G+" L 0 "+G+" Z",fill:M?r:a,transformX:w,transformY:R})})}))});I.displayName="QRCode";I.propTypes=Xt;I.defaultProps=Gt;var Kt=W.default=(0,X.memo)(I);const Yt=({title:t,open:e,link:a,onClose:r})=>T.jsxs(ot,{maxWidth:!1,open:e,onClose:r,children:[!!t&&T.jsx(st,{sx:{padding:"0 24px",paddingTop:"20px"},children:t}),T.jsxs(K,{sx:{padding:"20px"},children:[T.jsx(Kt,{size:256,style:{height:"50vh",maxWidth:"100%",width:"100%"},value:a,viewBox:"0 0 256 256"}),T.jsxs(K,{sx:{boxShadow:"0px 0px 10px -5px rgba(0,0,0,0.75)",borderRadius:"10px",display:"flex",justifyContent:"space-between",alignItems:"center",pl:"10px",my:"10px"},children:[T.jsx("span",{children:ut(a,50)}),T.jsx(lt,{variant:"contained",sx:{borderRadius:"10px",marginLeft:"5px"},onClick:()=>navigator.clipboard.writeText(a),children:"Copy"})]}),T.jsx(ft,{onClick:r,sx:{color:"black",position:"absolute",top:10,right:10,fontSize:"30px"},children:T.jsx(ht,{fontSize:"inherit"})})]})]});export{Yt as Q,Kt as _};