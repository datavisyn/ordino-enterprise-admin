"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[2197],{72197:(e,t,r)=>{r.r(t),r.d(t,{extractTreePathInfo:()=>u,default:()=>i});var n=r(78580),l=r.n(n),a=r(67294),c=r(63475),s=r(11965);const u=e=>(null!=e?e:[]).map((e=>(null==e?void 0:e.name)||"")).filter((e=>""!==e));function i(e){const{height:t,width:r,echartOptions:n,setDataMask:i,labelMap:o,selectedValues:h,formData:d,onContextMenu:f,refs:p,emitCrossFilters:g}=e,{columns:v}=d,w=(0,a.useCallback)((e=>{const t=u(e).join(","),r=Object.values(h);let n;n=l()(r).call(r,t)?r.filter((e=>e!==t)):[t];const a=n.map((e=>o[e]));return{dataMask:{extraFormData:{filters:0!==n.length&&v?v.map(((e,t)=>{const r=a.map((e=>e[t]));return null==r?{col:e,op:"IS NULL"}:{col:e,op:"IN",val:r}})):[]},filterState:{value:a.length?a:null,selectedValues:n.length?n:null}},isCurrentValueSelected:l()(r).call(r,t)}}),[v,o,h]),m=(0,a.useCallback)((e=>{g&&i(w(e).dataMask)}),[g,i,w]),b={click:e=>{const{treePathInfo:t}=e;m(t)},contextmenu:e=>{if(f){e.event.stop();const{data:t,treePathInfo:r}=e,{records:n}=t,l=u(e.treePathInfo),a=e.event.event,c=[];null!=v&&v.length&&l.forEach(((e,t)=>c.push({col:v[t],op:"==",val:n[t],formattedVal:e}))),f(a.clientX,a.clientY,{drillToDetail:c,crossFilter:w(r)})}}};return(0,s.tZ)(c.Z,{refs:p,height:t,width:r,echartOptions:n,eventHandlers:b,selectedValues:h})}},63475:(e,t,r)=>{r.d(t,{Z:()=>h});var n=r(78580),l=r.n(n),a=r(67294),c=r(51995),s=r(31431),u=r(11965);const i=c.iK.div`
  height: ${e=>{let{height:t}=e;return t}};
  width: ${e=>{let{width:t}=e;return t}};
`;function o(e,t){let{width:r,height:n,echartOptions:c,eventHandlers:o,zrEventHandlers:h,selectedValues:d={},refs:f}=e;const p=(0,a.useRef)(null);f&&(f.divRef=p);const g=(0,a.useRef)(),v=(0,a.useMemo)((()=>Object.keys(d)||[]),[d]),w=(0,a.useRef)([]);(0,a.useImperativeHandle)(t,(()=>({getEchartInstance:()=>g.current}))),(0,a.useEffect)((()=>{p.current&&(g.current||(g.current=(0,s.S1)(p.current)),Object.entries(o||{}).forEach((e=>{var t,r;let[n,l]=e;null==(t=g.current)||t.off(n),null==(r=g.current)||r.on(n,l)})),Object.entries(h||{}).forEach((e=>{var t,r;let[n,l]=e;null==(t=g.current)||t.getZr().off(n),null==(r=g.current)||r.getZr().on(n,l)})),g.current.setOption(c,!0))}),[c,o,h]),(0,a.useEffect)((()=>{g.current&&(g.current.dispatchAction({type:"downplay",dataIndex:w.current.filter((e=>!l()(v).call(v,e)))}),v.length&&g.current.dispatchAction({type:"highlight",dataIndex:v}),w.current=v)}),[v]);const m=(0,a.useCallback)((e=>{let{width:t,height:r}=e;g.current&&g.current.resize({width:t,height:r})}),[]);return(0,a.useEffect)((()=>(m({width:r,height:n}),()=>{var e;return null==(e=g.current)?void 0:e.dispose()})),[]),(0,a.useLayoutEffect)((()=>{m({width:r,height:n})}),[r,n,m]),(0,u.tZ)(i,{ref:p,height:n,width:r})}const h=(0,a.forwardRef)(o)}}]);
//# sourceMappingURL=cb761344203d9deb7872.chunk.js.map