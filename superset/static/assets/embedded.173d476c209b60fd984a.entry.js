(()=>{"use strict";var e,a,t,d,c,r,o,n,b={66481:(e,a,t)=>{var d,c=t(67294),r=t(90731),o=t(73727),n=t(16550),b=t(68492),f=t(55867),s=t(22102);!function(e){e.GET="get",e.REPLY="reply",e.EMIT="emit",e.ERROR="error"}(d||(d={}));const i=new class{constructor(e){this.port=void 0,this.name="",this.methods={},this.incrementor=1,this.debugMode=void 0,this.isInitialised=void 0,e&&this.init(e)}init(e){if(this.isInitialised)return void this.logError("already initialized");const{port:a,name:t="switchboard",debug:c=!1}=e;this.port=a,this.name=t,this.debugMode=c,a.addEventListener("message",(async e=>{this.log("message received",e);const a=e.data;if(function(e){return e.switchboardAction===d.GET}(a))this.port.postMessage(await this.getMethodResult(a));else if(function(e){return e.switchboardAction===d.EMIT}(a)){const{method:e,args:t}=a,d=this.methods[e];d&&d(t)}})),this.isInitialised=!0}async getMethodResult(e){let{messageId:a,method:t,args:c}=e;const r=this.methods[t];if(null==r)return{switchboardAction:d.ERROR,messageId:a,error:`[${this.name}] Method "${t}" is not defined`};try{const e=await r(c);return{switchboardAction:d.REPLY,messageId:a,result:e}}catch(e){return this.logError(e),{switchboardAction:d.ERROR,messageId:a,error:`[${this.name}] Method "${t}" threw an error`}}}defineMethod(e,a){this.methods[e]=a}get(e,a){return void 0===a&&(a=void 0),new Promise(((t,c)=>{if(!this.isInitialised)return void c(new Error("Switchboard not initialised"));const r=this.getNewMessageId(),o=e=>{const a=e.data;if(a.messageId===r)if(this.port.removeEventListener("message",o),function(e){return e.switchboardAction===d.REPLY}(a))t(a.result);else{const e=function(e){return e.switchboardAction===d.ERROR}(a)?a.error:"Unexpected response message";c(new Error(e))}};this.port.addEventListener("message",o),this.port.start();const n={switchboardAction:d.GET,method:e,messageId:r,args:a};this.port.postMessage(n)}))}emit(e,a){if(void 0===a&&(a=void 0),!this.isInitialised)return void this.logError("Switchboard not initialised");const t={switchboardAction:d.EMIT,method:e,args:a};this.port.postMessage(t)}start(){this.isInitialised?this.port.start():this.logError("Switchboard not initialised")}log(){if(this.debugMode){for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];console.debug(`[${this.name}]`,...a)}}logError(){for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];console.error(`[${this.name}]`,...a)}getNewMessageId(){return`m_${this.name}_${this.incrementor++}`}};var l=t(20292),u=t(15501),h=t(75049),m=t(68135),p=t(28216),g=t(35755),v=t(38626),y=t(57865),w=t(29454),E=t(14114),T=t(33626);const k={info:"addInfoToast",alert:"addDangerToast",danger:"addDangerToast",warning:"addWarningToast",success:"addSuccessToast"};function Z(e){let{children:a,messages:t}=e;const d=(0,E.e1)();return(0,T.J)((()=>{t.forEach((e=>{const[a,t]=e,c=d[k[a]];c&&c(t)}))})),a}var O=t(25076),j=t(29147),M=t(14278),x=t(11965);const{common:S}=(0,l.Z)(),A=(0,h.I)(),I=e=>{let{children:a}=e;const t=A.get("root.context.provider");return(0,x.tZ)(m.a,{theme:O.r},(0,x.tZ)(p.zt,{store:w.h},(0,x.tZ)(v.W,{backend:y.PD},(0,x.tZ)(Z,{messages:S.flash_messages},(0,x.tZ)(j.DG,null,(0,x.tZ)(M.EM,null,(0,x.tZ)(g.Fz,{ReactRouterRoute:n.AW,stringifyOptions:{encode:!1}},t?(0,x.tZ)(t,null,a):a)))))))};var R=t(57902),_=t(38703),C=t(72570),$=t(14890),N=t(51995),P=t(94184),D=t.n(P),L=t(7748),H=t(70163),G=t(1927);const z=N.iK.div`
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    padding: 0 11px;
  }
`,W=e=>x.iv`
  min-width: ${5*e.gridUnit}px;
  color: ${e.colors.grayscale.base};
`;function F(e){let{toast:a,onCloseToast:t}=e;const d=(0,c.useRef)(),[r,o]=(0,c.useState)(!1),n=()=>{o(!0)},b=(0,c.useCallback)((()=>{d.current&&clearTimeout(d.current),o((()=>(setTimeout((()=>{t(a.id)}),150),!1)))}),[t,a.id]);(0,c.useEffect)((()=>(setTimeout(n),a.duration>0&&(d.current=setTimeout(b,a.duration)),()=>{d.current&&clearTimeout(d.current)})),[b,a.duration]);let f="toast--success",s=(0,x.tZ)(H.Z.CircleCheckSolid,{css:e=>W(e)});return a.toastType===G.p.WARNING?(s=(0,x.tZ)(H.Z.WarningSolid,{css:W}),f="toast--warning"):a.toastType===G.p.DANGER?(s=(0,x.tZ)(H.Z.ErrorSolid,{css:W}),f="toast--danger"):a.toastType===G.p.INFO&&(s=(0,x.tZ)(H.Z.InfoSolid,{css:W}),f="toast--info"),(0,x.tZ)(z,{className:D()("alert","toast",r&&"toast--visible",f),role:"alert"},s,(0,x.tZ)(L.wZ,{content:a.text,noHtml:!a.allowHtml}),(0,x.tZ)("i",{className:"fa fa-close pull-right pointer",role:"button",tabIndex:0,onClick:b,"aria-label":"Close"}))}const K=N.iK.div`
  max-width: 600px;
  position: fixed;
  ${e=>{let{position:a}=e;return"bottom"===a?"bottom":"top"}}: 0px;
  right: 0px;
  margin-right: 50px;
  margin-bottom: 50px;
  z-index: ${e=>{let{theme:a}=e;return a.zIndex.max}};
  word-break: break-word;

  .toast {
    background: ${e=>{let{theme:a}=e;return a.colors.grayscale.dark1}};
    border-radius: ${e=>{let{theme:a}=e;return a.borderRadius}};
    box-shadow: 0 2px 4px 0
      fade(
        ${e=>{let{theme:a}=e;return a.colors.grayscale.dark2}},
        ${e=>{let{theme:a}=e;return a.opacity.mediumLight}}
      );
    color: ${e=>{let{theme:a}=e;return a.colors.grayscale.light5}};
    opacity: 0;
    position: relative;
    transform: translateY(-100%);
    white-space: pre-line;
    will-change: transform, opacity;
    transition: transform ${e=>{let{theme:a}=e;return a.transitionTiming}}s,
      opacity ${e=>{let{theme:a}=e;return a.transitionTiming}}s;

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 6px;
      height: 100%;
    }
  }

  .toast > button {
    color: ${e=>{let{theme:a}=e;return a.colors.grayscale.light5}};
    opacity: 1;
  }

  .toast--visible {
    opacity: 1;
    transform: translateY(0);
  }
`,U=(0,p.$j)((e=>{let{messageToasts:a}=e;return{toasts:a}}),(e=>(0,$.DE)({removeToast:C.RS},e)))((function(e){let{toasts:a,removeToast:t,position:d="bottom"}=e;return(0,x.tZ)(c.Fragment,null,a.length>0&&(0,x.tZ)(K,{id:"toast-presenter",position:d},a.map((e=>(0,x.tZ)(F,{key:e.id,toast:e,onCloseToast:t})))))}));var Y=t(23525);const B=(0,l.Z)(),q=()=>({width:document.body.scrollWidth,height:document.body.scrollHeight}),J=async e=>{var a,t;let{anchor:d}=e;const c=null==w.h?void 0:w.h.getState(),{dashboardId:r,dataMask:o,activeTabs:n}={dashboardId:(null==c||null==(a=c.dashboardInfo)?void 0:a.id)||(null==B?void 0:B.embedded.dashboard_id),dataMask:null==c?void 0:c.dataMask,activeTabs:null==(t=c.dashboardState)?void 0:t.activeTabs};return(0,Y.Nm)({dashboardId:r,dataMask:o,activeTabs:n,anchor:d})},V=()=>{var e,a;return(null==w.h||null==(e=w.h.getState())||null==(a=e.dashboardState)?void 0:a.activeTabs)||[]},Q=(0,l.Z)(),X=(0,c.lazy)((()=>Promise.all([t.e(1216),t.e(504),t.e(8767),t.e(2087),t.e(845),t.e(8989),t.e(5619),t.e(9772),t.e(5296)]).then(t.bind(t,25619)))),ee=()=>(0,x.tZ)(c.Suspense,{fallback:(0,x.tZ)(_.Z,null)},(0,x.tZ)(I,null,(0,x.tZ)(R.Z,null,(0,x.tZ)(X,{idOrSlug:Q.embedded.dashboard_id})),(0,x.tZ)(U,{position:"top"}))),ae=()=>(0,x.tZ)(o.VK,null,(0,x.tZ)(n.AW,{path:"/dashboard/:idOrSlug/embedded/",component:ee}),(0,x.tZ)(n.AW,{path:"/embedded/:uuid/",component:ee})),te=document.getElementById("app");function de(e){te.innerHTML=e}window.parent&&window.parent!==window||de("This page is intended to be embedded in an iframe, but it looks like that is not the case.");let ce=!1;function re(){ce||(ce=!0,w.h.dispatch((0,C.Gb)((0,f.t)("This session has encountered an interruption, and some controls may not work as intended. If you are the developer of this app, please check that the guest token is being generated correctly."),{duration:-1,noDuplicate:!0})))}window.addEventListener("message",(function(e){var a;try{!function(e){if("object"!=typeof e.data||"__embedded_comms__"!==e.data.type)throw new Error("Message type does not match type used for embedded comms")}(e)}catch(e){return}const t=null==(a=e.ports)?void 0:a[0];if("port transfer"===e.data.handshake&&t){i.init({port:t,name:"superset",debug:false});let e=!1;i.defineMethod("guestToken",(a=>{let{guestToken:t}=a;!function(e){var a;(0,u.Z)({guestToken:e,guestTokenHeaderName:null==(a=Q.config)?void 0:a.GUEST_TOKEN_HEADER_NAME,unauthorizedHandler:re})}(t),e||((0,s.Z)({method:"GET",endpoint:"/api/v1/me/roles/"})().then((e=>{let{result:a}=e;Q.user=a,w.h.dispatch({type:w.Cy,user:a}),r.render((0,x.tZ)(ae,null),te)}),(e=>{b.Z.error(e),de("Something went wrong with embedded authentication. Check the dev console for details.")})),e=!0)})),i.defineMethod("getScrollSize",q),i.defineMethod("getDashboardPermalink",J),i.defineMethod("getActiveTabs",V),i.start()}}))},33626:(e,a,t)=>{t.d(a,{J:()=>c});var d=t(67294);const c=e=>{(0,d.useEffect)(e,[])}}},f={};function s(e){var a=f[e];if(void 0!==a)return a.exports;var t=f[e]={id:e,loaded:!1,exports:{}};return b[e].call(t.exports,t,t.exports,s),t.loaded=!0,t.exports}s.m=b,s.amdD=function(){throw new Error("define cannot be used indirect")},s.amdO={},e=[],s.O=(a,t,d,c)=>{if(!t){var r=1/0;for(f=0;f<e.length;f++){for(var[t,d,c]=e[f],o=!0,n=0;n<t.length;n++)(!1&c||r>=c)&&Object.keys(s.O).every((e=>s.O[e](t[n])))?t.splice(n--,1):(o=!1,c<r&&(r=c));if(o){e.splice(f--,1);var b=d();void 0!==b&&(a=b)}}return a}c=c||0;for(var f=e.length;f>0&&e[f-1][2]>c;f--)e[f]=e[f-1];e[f]=[t,d,c]},s.H={},s.G=e=>{Object.keys(s.H).map((a=>{s.H[a](e)}))},s.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return s.d(a,{a}),a},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,s.t=function(e,d){if(1&d&&(e=this(e)),8&d)return e;if("object"==typeof e&&e){if(4&d&&e.__esModule)return e;if(16&d&&"function"==typeof e.then)return e}var c=Object.create(null);s.r(c);var r={};a=a||[null,t({}),t([]),t(t)];for(var o=2&d&&e;"object"==typeof o&&!~a.indexOf(o);o=t(o))Object.getOwnPropertyNames(o).forEach((a=>r[a]=()=>e[a]));return r.default=()=>e,s.d(c,r),c},s.d=(e,a)=>{for(var t in a)s.o(a,t)&&!s.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},s.f={},s.e=e=>Promise.all(Object.keys(s.f).reduce(((a,t)=>(s.f[t](e,a),a)),[])),s.u=e=>2087===e?"2087.d090220e75d89441b289.entry.js":8767===e?"8767.e99bd9bd2f429864b6f0.entry.js":6217===e?"6217.339f55fcac29c585713d.entry.js":8989===e?"8989.696ff79fcd9b40192e66.entry.js":9772===e?"9772.25b06b5374ee1ca395bb.entry.js":504===e?"thumbnail.f7f91866e420f4d9227b.entry.js":845===e?"845.081f0271a4794ffae5c5.entry.js":5296===e?"DashboardPage.69e400961285a522b1aa.entry.js":2441===e?"2441.88b6789af1d53f852f83.entry.js":5640===e?"5640.d16ad9020fbf76e46301.entry.js":4717===e?"4717.0bcbff030e6e0fdc3a17.entry.js":{57:"4362b5304762d1e0b0d3",112:"f6d017953aec813a7fe6",137:"16cf3edc284d2ee6501a",158:"d20fb16ba662419cf713",177:"3c694511e12766de3fdb",183:"fc084293cd81bf3d202b",215:"b141fc66cd9111e73a75",310:"62bceea4739b1f1a5bc9",312:"65631b4f49f22d2413c2",326:"d242f2ad2d3442ba4133",336:"334a3891e7de11316812",347:"eb5ca79a61e22b824e7f",349:"ddbeb4e9369b016e3138",357:"9c6ff5d06296e26f681e",363:"b58cab3e521511e45a9a",440:"ac518f6c7471ecc8589d",444:"1e9647d5b1ca4ad8c5b0",452:"8c87dc94d6c3382d35a6",498:"2b24558db86c183a3f28",597:"891c9b9684277a17a60e",600:"0177d8101821912d936b",616:"6a7667fb7b513c0d092a",704:"21d2fb529e44fcf67add",741:"f8e056d22124a7fd6234",775:"cb6001d7703ed9082969",783:"4edc2cd35a5b0e58e5bc",826:"f5869088a4319a800ccb",876:"164a9c7420e83c02aabb",954:"2303fb8941bde712abf8",986:"f701a9d9f1e129014644",992:"cc74b5cb12406685536f",999:"9ba647b17b697f8d9d70",1020:"cf0fd6735c1379b71de4",1075:"3d9f9c55dfd05b09a6fe",1095:"21eac80381a20e1970c7",1128:"2959760c98cb6c223a83",1130:"bb83ea894155833b2918",1161:"e4cf5490d1f2dcefa90f",1174:"718d389061dd32058771",1185:"c4947a81e5cbf90ea2fa",1221:"eecffbbd005d7be8cad5",1256:"4c2391ac8aafc5a56b06",1258:"d965f006bd20b8ca4361",1261:"60feda24c9afd7f51a05",1263:"0eec8025b1da27433364",1293:"50584f9c49cbb0b9fd9f",1351:"d7859b43df2e8565d05e",1382:"42aeaf6d0c9152d0af24",1398:"d50144b85b56ef439bb3",1402:"7fe38901eceb0cefc829",1458:"bda04609cd55869cb5bc",1493:"22335e2922f171e25afd",1568:"aeaf7a986946c92c7ec3",1573:"2d8e4594741dce3dbd4f",1605:"3a34d566763b41457ec4",1877:"058a6a4dd8015f223965",1899:"b937388aca2fb5504511",1948:"d807b0db7d2f582d56fb",2079:"c0243f2080737fc9e2d9",2089:"236135bf62aa9ae755bb",2105:"044a114a0250557286f0",2112:"71f6dae2883e90721236",2197:"cb761344203d9deb7872",2229:"afdcf8204c3daab2510c",2264:"5e8890aa7b66e1ef4bdc",2267:"687c0a6eaa1d0a8f7313",2403:"952401cd0329c226b7d1",2439:"4a31589eccb01444ed49",2549:"7536866c1c0f67b91175",2646:"12367d1e0bb2b4afb255",2698:"f2735c169d7b6a4f5848",2713:"b33db133524d59872498",2797:"c664ff837065c346780f",2907:"4fe79584d10e2ad19292",2923:"4c81b739e6e8cff1c345",2955:"bbf1f258aa4d1f39b77a",2983:"b56274c43951cd5c9fb0",3036:"4f833db30c0b2d91910e",3126:"a40dd0f4278de0ae8f9c",3141:"74aa1bb1aa347b6e1264",3187:"2a60889d78c01d71e0dd",3208:"5965e60fa243ff6d2bc8",3240:"fc28aa5f2526f7bd1660",3265:"b1cc64850473a13027ef",3325:"39e61bf287a84284337a",3496:"e4549a3c444a4bad31cb",3537:"1f93011280e2f4b3c89b",3544:"59252fbba271a71ecc89",3558:"33174e7edaaac248423d",3567:"f158268a2958199d23ba",3588:"e10559f631421e8e5933",3606:"d8ca4e3d2c999f3432ea",3711:"d588b2a6dd1d55402ab8",3745:"2f9998dd40a29b6f22fc",3749:"07d664aaf1537ae41b3c",3831:"78d5f7e10e75224b45d4",3871:"9ab6f0cada666faef121",3955:"073c164857f20fc71ca4",3985:"e6cf10829d09f4640214",4139:"3254a4a2afe05d91676f",4194:"5ab969bdb60236120b31",4237:"5b4efb9d89b9ceb2f2fc",4266:"0197266f2dc0b4c8f5fa",4273:"ed1976d07a2474c894f9",4421:"7070c33ea00c0d7d22a9",4458:"3e7d75f61b48452097dc",4474:"3f9a354919a133da7818",4494:"5ff3e8b7a73a7bbed35f",4572:"90202c9e154dcdec5895",4579:"324ea06214e3e7cf9b5b",4625:"621e401582ff3bca2342",4662:"1be29b0a1306522b22b4",4667:"b95d31197f37908372c0",4732:"dfa5abcf641f49f06937",4757:"bdd493eebcb903da929d",4758:"9f168dc8a77ac47f7ce1",4790:"8113b2d34e866bee4b7f",4794:"e1342085181b820e1166",4797:"26da53a05512a54f0ab9",4810:"4083b1c309b89db43387",4817:"cffe88250e2792acb914",4832:"6d13aacaaf914e02ad77",4851:"4dab4855dd5604d12c6d",4936:"32d5a63607c1083ec0f3",4972:"92b4f1a79172452ffe53",5051:"8f0e428abc411189219e",5094:"39c2ee74c0b24aa382d9",5123:"64590c9fada5a5856638",5181:"5b26643f606977e9ed54",5201:"f7a288fffdd2a4a748d3",5207:"5390d4fcbebc7c83f8ab",5215:"29b91d6854c5e405ce45",5224:"c28f014ad3177cf611f3",5226:"3c611279fc6880af6256",5249:"5727cf1feb0f056ab206",5264:"86e4515eee75df245995",5281:"d9ea22831a45efa05abf",5330:"35ac45286b6b44167bd7",5334:"9ce119655aa145613a7f",5335:"88b06a818cd0117f56b1",5350:"7889d5826b40395c074f",5359:"5364a0ae2074914b0b45",5367:"c14a6b3f383e99e0f762",5378:"4b78570a5638ef07bcaf",5507:"cbe5b1d7a2202354be3d",5566:"8d7057eb8271bbaefac8",5580:"56b4ea31f6378cfbbe67",5592:"98927561afa54be3c797",5619:"1882240ba470d27198f4",5641:"6abe473e8ad84b72d7f9",5707:"d650cc0676c989c53b46",5771:"cb1924c9720f5f456868",5777:"4316beeb5144100af911",5802:"466d74e3e6955ef7209a",5816:"8ae960dccbd5932ecc4f",5832:"ea166e36b0b0b2327639",5838:"c694317e35f598e5bf1a",5962:"568f59ad9c53fe7b78a2",5972:"e7e5e34c2290ec967c85",5998:"732e4b677c3e43e37262",6052:"4c65ab1958700a12a74b",6061:"e3e81b8e8c58530a1e1d",6126:"575a4cb2f911ca3ba909",6150:"c3dd6eec636540d0ef94",6167:"71dcab1e81d48a10b442",6207:"ba7c3d6aebfe0750dc67",6254:"5a90e5fe4b068b6241a0",6303:"85b33e0dcbc189800dda",6357:"987dae83a2704344cc3d",6371:"bd6302508932f2b751ac",6377:"323e845597342cf9b240",6420:"dbd10f614337e1472a17",6447:"08c21008a6fc572a67ff",6486:"59091cc686ab0175d690",6507:"e935076dcc7fbe1cc651",6579:"72a6c2ece1a923b2e311",6668:"22eba8579f51d4d93737",6682:"0b14c0b7a7d9904ec527",6693:"b3ecca997bbad24ed990",6758:"1a621d7f286d5c9adb4b",6819:"66742c8d9e5b1ce8259b",6871:"c7c924cf89dcb6670405",6883:"9ed65ab8d3b4bbfb47c9",6968:"c244372f367e01b6b8bf",6981:"608c68ce541fbd39d168",7003:"a48b494de6c9eee62a48",7183:"68fa39af2a7b9374751d",7245:"f29b8f3dc3716ccd1769",7249:"16413091c03ca1a2f2b8",7405:"e3420515b524f5516e0e",7460:"8b280e898799f93de5be",7521:"45ff3c7f689460a6a58b",7584:"7aca1ea0c22d4b2a3dc4",7610:"95bc00206741bcfd6541",7654:"51ef84f7843a0856d189",7716:"5de142721fdf097ef171",7760:"4de155e4c465c48391c2",7803:"a69a5f6546322eebba43",7832:"108ceb65fa77e2ee3b1e",7850:"86ff63c706b5260ebc5e",7922:"fcc96506913a8c345894",7984:"64ff5b51bb710a740d05",7989:"0f388f5a81ab8de20c79",8041:"108c8baedd99ed2b2154",8274:"595a30c93acfef945612",8312:"e8abff2e2378b2690e44",8349:"0d7ae8d02636df8e6102",8398:"01a3aa3aadcfaa41bc46",8425:"b82e084872e4409a8328",8463:"f0afa7465c828a07259a",8464:"3e98ff9b633c3b705a05",8491:"d250a632b0232d6da24f",8551:"d437ed9d48498711e187",8623:"f78780e94e356fb88436",8650:"b2e7fa388f024048b5fa",8656:"762d4c99ea31d0a7ce0e",8682:"fd78b2810aae9d021034",8695:"acbbd60dde6db231dfd3",8701:"418d3c6040f80556531e",8750:"8932d659b9462359cd4f",8883:"3ea64ae0c92692819070",8924:"d230312d67b229d5bdc7",8970:"24e438afe5479e2dc2f3",9013:"a1a4cd98f6ba21481de6",9034:"c4daab2219b057a7b12f",9052:"08e0467a85d5d2746a69",9101:"8626ca0e23112e7d15ab",9109:"1fd4febdc037cb353e1b",9207:"78a5fba54c4293b0b34c",9305:"d12e380a429916e4f0c8",9322:"23be6a05ce9b3316ce0e",9325:"2c33db7428d1157db168",9393:"b5388a7a6d54d88adf1a",9396:"bd9e6daeba3a8d07c22a",9471:"bc753eab1937650d8a4f",9483:"5c29d96181ac2a4000fb",9510:"23e786be46b42f2dde05",9558:"914f0e63918f281e3dd5",9622:"15b35e117682e2e2bed9",9767:"b58b6142662719f0b769",9794:"815f7ca4e1c4b2abb4d1",9811:"2deb857f57c1c2e5ddb1",9857:"21151c26622dbe000474",9873:"c05b12d4832ab2ed804f",9877:"9ce07ae9a17b4ea94970"}[e]+".chunk.js",s.miniCssF=e=>(452===e?"DashboardContainer":e)+"."+{137:"16cf3edc284d2ee6501a",452:"8c87dc94d6c3382d35a6",1261:"60feda24c9afd7f51a05",1877:"058a6a4dd8015f223965",3036:"4f833db30c0b2d91910e",4194:"5ab969bdb60236120b31",4237:"5b4efb9d89b9ceb2f2fc",4494:"5ff3e8b7a73a7bbed35f",4936:"32d5a63607c1083ec0f3",5378:"4b78570a5638ef07bcaf",5566:"8d7057eb8271bbaefac8",6871:"c7c924cf89dcb6670405",8623:"f78780e94e356fb88436",8650:"b2e7fa388f024048b5fa"}[e]+".chunk.css",s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),s.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),d={},c="superset:",s.l=(e,a,t,r)=>{if(d[e])d[e].push(a);else{var o,n;if(void 0!==t)for(var b=document.getElementsByTagName("script"),f=0;f<b.length;f++){var i=b[f];if(i.getAttribute("src")==e||i.getAttribute("data-webpack")==c+t){o=i;break}}o||(n=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,s.nc&&o.setAttribute("nonce",s.nc),o.setAttribute("data-webpack",c+t),o.src=e),d[e]=[a];var l=(a,t)=>{o.onerror=o.onload=null,clearTimeout(u);var c=d[e];if(delete d[e],o.parentNode&&o.parentNode.removeChild(o),c&&c.forEach((e=>e(t))),a)return a(t)},u=setTimeout(l.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=l.bind(null,o.onerror),o.onload=l.bind(null,o.onload),n&&document.head.appendChild(o)}},s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),s.p="/static/assets/",r=e=>new Promise(((a,t)=>{var d=s.miniCssF(e),c=s.p+d;if(((e,a)=>{for(var t=document.getElementsByTagName("link"),d=0;d<t.length;d++){var c=(o=t[d]).getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(c===e||c===a))return o}var r=document.getElementsByTagName("style");for(d=0;d<r.length;d++){var o;if((c=(o=r[d]).getAttribute("data-href"))===e||c===a)return o}})(d,c))return a();((e,a,t,d)=>{var c=document.createElement("link");c.rel="stylesheet",c.type="text/css",c.onerror=c.onload=r=>{if(c.onerror=c.onload=null,"load"===r.type)t();else{var o=r&&("load"===r.type?"missing":r.type),n=r&&r.target&&r.target.href||a,b=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");b.code="CSS_CHUNK_LOAD_FAILED",b.type=o,b.request=n,c.parentNode.removeChild(c),d(b)}},c.href=a,document.head.appendChild(c)})(e,c,a,t)})),o={8815:0},s.f.miniCss=(e,a)=>{o[e]?a.push(o[e]):0!==o[e]&&{137:1,452:1,1261:1,1877:1,3036:1,4194:1,4237:1,4494:1,4936:1,5378:1,5566:1,6871:1,8623:1,8650:1}[e]&&a.push(o[e]=r(e).then((()=>{o[e]=0}),(a=>{throw delete o[e],a})))},(()=>{var e={8815:0};s.f.j=(a,t)=>{var d=s.o(e,a)?e[a]:void 0;if(0!==d)if(d)t.push(d[2]);else if(/^(126|687)1$/.test(a))e[a]=0;else{var c=new Promise(((t,c)=>d=e[a]=[t,c]));t.push(d[2]=c);var r=s.p+s.u(a),o=new Error;s.l(r,(t=>{if(s.o(e,a)&&(0!==(d=e[a])&&(e[a]=void 0),d)){var c=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;o.message="Loading chunk "+a+" failed.\n("+c+": "+r+")",o.name="ChunkLoadError",o.type=c,o.request=r,d[1](o)}}),"chunk-"+a,a)}},s.H.j=a=>{if(!(s.o(e,a)&&void 0!==e[a]||/^(126|687)1$/.test(a))){e[a]=null;var t=document.createElement("link");t.charset="utf-8",s.nc&&t.setAttribute("nonce",s.nc),t.rel="preload",t.as="script",t.href=s.p+s.u(a),document.head.appendChild(t)}},s.O.j=a=>0===e[a];var a=(a,t)=>{var d,c,[r,o,n]=t,b=0;if(r.some((a=>0!==e[a]))){for(d in o)s.o(o,d)&&(s.m[d]=o[d]);if(n)var f=n(s)}for(a&&a(t);b<r.length;b++)c=r[b],s.o(e,c)&&e[c]&&e[c][0](),e[r[b]]=0;return s.O(f)},t=globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))})(),n={5296:[1216,8494,8453,7167,678,876,6052,2907,5207,5640,5010,8888,7243,986,8274,2923,4717,452]},s.f.preload=e=>{var a=n[e];Array.isArray(a)&&a.map(s.G)},s.O(void 0,[1216,2450,8494,2318,8453,7167,678,6140,5755,9602,5010,8047,8888,7243,9454],(()=>s(25076)));var i=s.O(void 0,[1216,2450,8494,2318,8453,7167,678,6140,5755,9602,5010,8047,8888,7243,9454],(()=>s(66481)));i=s.O(i)})();
//# sourceMappingURL=embedded.173d476c209b60fd984a.entry.js.map