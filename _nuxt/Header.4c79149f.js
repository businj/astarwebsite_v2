import{a as de,o as $,b as O,e as c,A as je,B as G,F as C,D as te,E as ne,G as S,H as Be,I as T,s as F,f as M,c as me,w as E,j as k,u as B,T as De,J as _e,r as Y,t as Q,i as Z,h as ae}from"./entry.47b8bce4.js";import{_ as ye}from"./ArrowTopRightOnSquare.fc6e790d.js";import{_ as we}from"./Button.vue_vue_type_script_setup_true_lang.2d993e9e.js";import{_ as ge}from"./logo.2b2abc16.js";const Le={},Ce={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},Te=c("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"},null,-1),Me=[Te];function He(e,t){return $(),O("svg",Ce,Me)}const Re=de(Le,[["render",He]]),Ue={},Ge={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},We=c("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"},null,-1),Ve=[We];function ze(e,t){return $(),O("svg",Ge,Ve)}const Ke=de(Ue,[["render",ze]]);function j(e,t,...l){if(e in t){let n=t[e];return typeof n=="function"?n(...l):n}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(n=>`"${n}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,j),r}var z=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(z||{}),qe=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(qe||{});function V({visible:e=!0,features:t=0,ourProps:l,theirProps:r,...n}){var o;let s=Je(r,l),a=Object.assign(n,{props:s});if(e||t&2&&s.static)return se(a);if(t&1){let i=(o=s.unmount)==null||o?0:1;return j(i,{[0](){return null},[1](){return se({...n,props:{...s,hidden:!0,style:{display:"none"}}})}})}return se(a)}function se({props:e,attrs:t,slots:l,slot:r,name:n}){var o;let{as:s,...a}=Pe(e,["unmount","static"]),i=(o=l.default)==null?void 0:o.call(l,r),f={};if(r){let v=!1,_=[];for(let[p,y]of Object.entries(r))typeof y=="boolean"&&(v=!0),y===!0&&_.push(p);v&&(f["data-headlessui-state"]=_.join(" "))}if(s==="template"){if(i=xe(i!=null?i:[]),Object.keys(a).length>0||Object.keys(t).length>0){let[v,..._]=i!=null?i:[];if(!Xe(v)||_.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${n} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(a).concat(Object.keys(t)).sort((p,y)=>p.localeCompare(y)).map(p=>`  - ${p}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(p=>`  - ${p}`).join(`
`)].join(`
`));return je(v,Object.assign({},a,f))}return Array.isArray(i)&&i.length===1?i[0]:i}return G(s,Object.assign({},a,f),{default:()=>i})}function xe(e){return e.flatMap(t=>t.type===C?xe(t.children):[t])}function Je(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},l={};for(let r of e)for(let n in r)n.startsWith("on")&&typeof r[n]=="function"?(l[n]!=null||(l[n]=[]),l[n].push(r[n])):t[n]=r[n];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(l).map(r=>[r,void 0])));for(let r in l)Object.assign(t,{[r](n,...o){let s=l[r];for(let a of s){if(n instanceof Event&&n.defaultPrevented)return;a(n,...o)}}});return t}function Pe(e,t=[]){let l=Object.assign({},e);for(let r of t)r in l&&delete l[r];return l}function Xe(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}let Ye=0;function Qe(){return++Ye}function W(){return Qe()}var I=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(I||{});function u(e){var t;return e==null||e.value==null?null:(t=e.value.$el)!=null?t:e.value}let ke=Symbol("Context");var K=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(K||{});function $e(){return te(ke,null)}function Ze(e){ne(ke,e)}function be(e,t){if(e)return e;let l=t!=null?t:"button";if(typeof l=="string"&&l.toLowerCase()==="button")return"button"}function et(e,t){let l=S(be(e.value.type,e.value.as));return Be(()=>{l.value=be(e.value.type,e.value.as)}),T(()=>{var r;l.value||!u(t)||u(t)instanceof HTMLButtonElement&&!((r=u(t))!=null&&r.hasAttribute("type"))&&(l.value="button")}),l}const oe=typeof window>"u"||typeof document>"u";function q(e){if(oe)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let t=u(e);if(t)return t.ownerDocument}return document}let ue=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var D=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(D||{}),tt=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(tt||{}),nt=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(nt||{});function fe(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(ue))}var ve=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(ve||{});function Se(e,t=0){var l;return e===((l=q(e))==null?void 0:l.body)?!1:j(t,{[0](){return e.matches(ue)},[1](){let r=e;for(;r!==null;){if(r.matches(ue))return!0;r=r.parentElement}return!1}})}let ot=["textarea","input"].join(",");function lt(e){var t,l;return(l=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,ot))!=null?l:!1}function rt(e,t=l=>l){return e.slice().sort((l,r)=>{let n=t(l),o=t(r);if(n===null||o===null)return 0;let s=n.compareDocumentPosition(o);return s&Node.DOCUMENT_POSITION_FOLLOWING?-1:s&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function U(e,t,l=!0,r=null){var n;let o=(n=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?n:document,s=Array.isArray(e)?l?rt(e):e:fe(e);r=r!=null?r:o.activeElement;let a=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),i=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,s.indexOf(r))-1;if(t&4)return Math.max(0,s.indexOf(r))+1;if(t&8)return s.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),f=t&32?{preventScroll:!0}:{},v=0,_=s.length,p;do{if(v>=_||v+_<=0)return 0;let y=i+v;if(t&16)y=(y+_)%_;else{if(y<0)return 3;if(y>=_)return 1}p=s[y],p==null||p.focus(f),v+=a}while(p!==o.activeElement);return t&6&&lt(p)&&p.select(),p.hasAttribute("tabindex")||p.setAttribute("tabindex","0"),2}function ie(e,t,l){oe||T(r=>{document.addEventListener(e,t,l),r(()=>document.removeEventListener(e,t,l))})}function at(e,t,l=F(()=>!0)){function r(o,s){if(!l.value||o.defaultPrevented)return;let a=s(o);if(a===null||!a.getRootNode().contains(a))return;let i=function f(v){return typeof v=="function"?f(v()):Array.isArray(v)||v instanceof Set?v:[v]}(e);for(let f of i){if(f===null)continue;let v=f instanceof HTMLElement?f:u(f);if(v!=null&&v.contains(a))return}return!Se(a,ve.Loose)&&a.tabIndex!==-1&&o.preventDefault(),t(o,a)}let n=S(null);ie("mousedown",o=>{var s,a;l.value&&(n.value=((a=(s=o.composedPath)==null?void 0:s.call(o))==null?void 0:a[0])||o.target)},!0),ie("click",o=>{!n.value||(r(o,()=>n.value),n.value=null)},!0),ie("blur",o=>r(o,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}var ee=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(ee||{});let ce=M({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(e,{slots:t,attrs:l}){return()=>{let{features:r,...n}=e,o={"aria-hidden":(r&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(r&4)===4&&(r&2)!==2&&{display:"none"}}};return V({ourProps:o,theirProps:n,slot:{},attrs:l,slots:t,name:"Hidden"})}}});function st(e,t,l){oe||T(r=>{window.addEventListener(e,t,l),r(()=>window.removeEventListener(e,t,l))})}var L=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(L||{});function Ee(){let e=S(0);return st("keydown",t=>{t.key==="Tab"&&(e.value=t.shiftKey?1:0)}),e}function it(e,t,l,r){oe||T(n=>{e=e!=null?e:window,e.addEventListener(t,l,r),n(()=>e.removeEventListener(t,l,r))})}var ut=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(ut||{});let Oe=Symbol("PopoverContext");function le(e){let t=te(Oe,null);if(t===null){let l=new Error(`<${e} /> is missing a parent <${he.name} /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,le),l}return t}let Fe=Symbol("PopoverGroupContext");function Ae(){return te(Fe,null)}let Ne=Symbol("PopoverPanelContext");function ct(){return te(Ne,null)}let he=M({name:"Popover",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:t,attrs:l,expose:r}){var n;let o=`headlessui-popover-button-${W()}`,s=`headlessui-popover-panel-${W()}`,a=S(null);r({el:a,$el:a});let i=S(1),f=S(null),v=S(null),_=S(null),p=S(null),y=F(()=>q(a)),N=F(()=>{var m,w;if(!u(f)||!u(p))return!1;for(let X of document.querySelectorAll("body > *"))if(Number(X==null?void 0:X.contains(u(f)))^Number(X==null?void 0:X.contains(u(p))))return!0;let h=fe(),A=h.indexOf(u(f)),re=(A+h.length-1)%h.length,H=(A+1)%h.length,R=h[re],J=h[H];return!((m=u(p))!=null&&m.contains(R))&&!((w=u(p))!=null&&w.contains(J))}),x={popoverState:i,buttonId:o,panelId:s,panel:p,button:f,isPortalled:N,beforePanelSentinel:v,afterPanelSentinel:_,togglePopover(){i.value=j(i.value,{[0]:1,[1]:0})},closePopover(){i.value!==1&&(i.value=1)},close(m){x.closePopover();let w=(()=>m?m instanceof HTMLElement?m:m.value instanceof HTMLElement?u(m):u(x.button):u(x.button))();w==null||w.focus()}};ne(Oe,x),Ze(F(()=>j(i.value,{[0]:K.Open,[1]:K.Closed})));let g={buttonId:o,panelId:s,close(){x.closePopover()}},d=Ae(),b=d==null?void 0:d.registerPopover;function P(){var m,w,h,A;return(A=d==null?void 0:d.isFocusWithinPopoverGroup())!=null?A:((m=y.value)==null?void 0:m.activeElement)&&(((w=u(f))==null?void 0:w.contains(y.value.activeElement))||((h=u(p))==null?void 0:h.contains(y.value.activeElement)))}return T(()=>b==null?void 0:b(g)),it((n=y.value)==null?void 0:n.defaultView,"focus",m=>{var w,h;i.value===0&&(P()||!f||!p||(w=u(x.beforePanelSentinel))!=null&&w.contains(m.target)||(h=u(x.afterPanelSentinel))!=null&&h.contains(m.target)||x.closePopover())},!0),at([f,p],(m,w)=>{var h;x.closePopover(),Se(w,ve.Loose)||(m.preventDefault(),(h=u(f))==null||h.focus())},F(()=>i.value===0)),()=>{let m={open:i.value===0,close:x.close};return V({theirProps:e,ourProps:{ref:a},slot:m,slots:t,attrs:l,name:"Popover"})}}}),pe=M({name:"PopoverButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(e,{attrs:t,slots:l,expose:r}){let n=le("PopoverButton"),o=F(()=>q(n.button));r({el:n.button,$el:n.button});let s=Ae(),a=s==null?void 0:s.closeOthers,i=ct(),f=i===null?!1:i===n.panelId,v=S(null),_=`headlessui-focus-sentinel-${W()}`;f||T(()=>{n.button.value=v.value});let p=et(F(()=>({as:e.as,type:t.type})),v);function y(d){var b,P,m,w,h;if(f){if(n.popoverState.value===1)return;switch(d.key){case I.Space:case I.Enter:d.preventDefault(),(P=(b=d.target).click)==null||P.call(b),n.closePopover(),(m=u(n.button))==null||m.focus();break}}else switch(d.key){case I.Space:case I.Enter:d.preventDefault(),d.stopPropagation(),n.popoverState.value===1&&(a==null||a(n.buttonId)),n.togglePopover();break;case I.Escape:if(n.popoverState.value!==0)return a==null?void 0:a(n.buttonId);if(!u(n.button)||((w=o.value)==null?void 0:w.activeElement)&&!((h=u(n.button))!=null&&h.contains(o.value.activeElement)))return;d.preventDefault(),d.stopPropagation(),n.closePopover();break}}function N(d){f||d.key===I.Space&&d.preventDefault()}function x(d){var b,P;e.disabled||(f?(n.closePopover(),(b=u(n.button))==null||b.focus()):(d.preventDefault(),d.stopPropagation(),n.popoverState.value===1&&(a==null||a(n.buttonId)),n.togglePopover(),(P=u(n.button))==null||P.focus()))}function g(d){d.preventDefault(),d.stopPropagation()}return()=>{let d=n.popoverState.value===0,b={open:d},P=f?{ref:v,type:p.value,onKeydown:y,onClick:x}:{ref:v,id:n.buttonId,type:p.value,"aria-expanded":e.disabled?void 0:n.popoverState.value===0,"aria-controls":u(n.panel)?n.panelId:void 0,disabled:e.disabled?!0:void 0,onKeydown:y,onKeyup:N,onClick:x,onMousedown:g},m=Ee();function w(){let h=u(n.panel);if(!h)return;function A(){j(m.value,{[L.Forwards]:()=>U(h,D.First),[L.Backwards]:()=>U(h,D.Last)})}A()}return G(C,[V({ourProps:P,theirProps:{...t,...e},slot:b,attrs:t,slots:l,name:"PopoverButton"}),d&&!f&&n.isPortalled.value&&G(ce,{id:_,features:ee.Focusable,as:"button",type:"button",onFocus:w})])}}});M({name:"PopoverOverlay",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0}},setup(e,{attrs:t,slots:l}){let r=le("PopoverOverlay"),n=`headlessui-popover-overlay-${W()}`,o=$e(),s=F(()=>o!==null?o.value===K.Open:r.popoverState.value===0);function a(){r.closePopover()}return()=>{let i={open:r.popoverState.value===0};return V({ourProps:{id:n,"aria-hidden":!0,onClick:a},theirProps:e,slot:i,attrs:t,slots:l,features:z.RenderStrategy|z.Static,visible:s.value,name:"PopoverOverlay"})}}});let Ie=M({name:"PopoverPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},focus:{type:Boolean,default:!1}},inheritAttrs:!1,setup(e,{attrs:t,slots:l,expose:r}){let{focus:n}=e,o=le("PopoverPanel"),s=F(()=>q(o.panel)),a=`headlessui-focus-sentinel-before-${W()}`,i=`headlessui-focus-sentinel-after-${W()}`;r({el:o.panel,$el:o.panel}),ne(Ne,o.panelId),T(()=>{var g,d;if(!n||o.popoverState.value!==0||!o.panel)return;let b=(g=s.value)==null?void 0:g.activeElement;(d=u(o.panel))!=null&&d.contains(b)||U(u(o.panel),D.First)});let f=$e(),v=F(()=>f!==null?f.value===K.Open:o.popoverState.value===0);function _(g){var d,b;switch(g.key){case I.Escape:if(o.popoverState.value!==0||!u(o.panel)||s.value&&!((d=u(o.panel))!=null&&d.contains(s.value.activeElement)))return;g.preventDefault(),g.stopPropagation(),o.closePopover(),(b=u(o.button))==null||b.focus();break}}function p(g){var d,b,P,m,w;let h=g.relatedTarget;!h||!u(o.panel)||(d=u(o.panel))!=null&&d.contains(h)||(o.closePopover(),(((P=(b=u(o.beforePanelSentinel))==null?void 0:b.contains)==null?void 0:P.call(b,h))||((w=(m=u(o.afterPanelSentinel))==null?void 0:m.contains)==null?void 0:w.call(m,h)))&&h.focus({preventScroll:!0}))}let y=Ee();function N(){let g=u(o.panel);if(!g)return;function d(){j(y.value,{[L.Forwards]:()=>{U(g,D.Next)},[L.Backwards]:()=>{var b;(b=u(o.button))==null||b.focus({preventScroll:!0})}})}d()}function x(){let g=u(o.panel);if(!g)return;function d(){j(y.value,{[L.Forwards]:()=>{var b,P;let m=u(o.button),w=u(o.panel);if(!m)return;let h=fe(),A=h.indexOf(m),re=h.slice(0,A+1),H=[...h.slice(A+1),...re];for(let R of H.slice())if(((P=(b=R==null?void 0:R.id)==null?void 0:b.startsWith)==null?void 0:P.call(b,"headlessui-focus-sentinel-"))||(w==null?void 0:w.contains(R))){let J=H.indexOf(R);J!==-1&&H.splice(J,1)}U(H,D.First,!1)},[L.Backwards]:()=>U(g,D.Previous)})}d()}return()=>{let g={open:o.popoverState.value===0,close:o.close},d={ref:o.panel,id:o.panelId,onKeydown:_,onFocusout:n&&o.popoverState.value===0?p:void 0,tabIndex:-1};return V({ourProps:d,theirProps:{...t,...Pe(e,["focus"])},attrs:t,slot:g,slots:{...l,default:(...b)=>{var P;return[G(C,[v.value&&o.isPortalled.value&&G(ce,{id:a,ref:o.beforePanelSentinel,features:ee.Focusable,as:"button",type:"button",onFocus:N}),(P=l.default)==null?void 0:P.call(l,...b),v.value&&o.isPortalled.value&&G(ce,{id:i,ref:o.afterPanelSentinel,features:ee.Focusable,as:"button",type:"button",onFocus:x})])]}},features:z.RenderStrategy|z.Static,visible:v.value,name:"PopoverPanel"})}}});M({name:"PopoverGroup",props:{as:{type:[Object,String],default:"div"}},setup(e,{attrs:t,slots:l,expose:r}){let n=S(null),o=S([]),s=F(()=>q(n));r({el:n,$el:n});function a(_){let p=o.value.indexOf(_);p!==-1&&o.value.splice(p,1)}function i(_){return o.value.push(_),()=>{a(_)}}function f(){var _;let p=s.value;if(!p)return!1;let y=p.activeElement;return(_=u(n))!=null&&_.contains(y)?!0:o.value.some(N=>{var x,g;return((x=p.getElementById(N.buttonId))==null?void 0:x.contains(y))||((g=p.getElementById(N.panelId))==null?void 0:g.contains(y))})}function v(_){for(let p of o.value)p.buttonId!==_&&p.close()}return ne(Fe,{registerPopover:i,unregisterPopover:a,isFocusWithinPopoverGroup:f,closeOthers:v}),()=>V({ourProps:{ref:n},theirProps:e,slot:{},attrs:t,slots:l,name:"PopoverGroup"})}});const pt=c("span",{class:"sr-only"},"Open menu",-1),dt={class:"bg-space-gray-dark shadow-lg min-h-screen pb-96"},ft={class:"flex items-center justify-between px-4 py-5 sm:px-6 sm:py-8"},vt=c("a",{href:"/",class:"block"},[c("img",{class:"h-10 w-auto sm:h-14",src:ge,alt:"Astar Network",width:"188",height:"60"})],-1),ht={class:"-mr-2 sm:mr-0"},mt=c("span",{class:"sr-only"},"Close menu",-1),bt={class:""},_t={class:"border-b border-gray-600"},yt=c("li",null,[c("a",{href:"/developers",class:"text-white block border-t border-gray-600 px-6 py-5"},"Developers")],-1),wt=c("a",{href:"#",class:"text-white block border-t border-gray-600 px-6 py-5"},"Network",-1),gt={class:"px-6 py-4 text-sm"},xt={class:"mb-6"},Pt={class:"uppercase block border-b border-gray-600 text-gray-400 pb-1 mb-3"},kt=["href"],$t=c("li",null,[c("a",{href:"/community",class:"text-white block border-t border-gray-600 px-6 py-5"},"Community")],-1),St={class:"py-12 px-6"},Et=M({__name:"MobileNav",props:{network:null},setup(e){return(t,l)=>{const r=Re,n=Ke,o=ye,s=we;return $(),me(B(he),null,{default:E(()=>[k(B(pe),{class:"inline-flex items-center justify-center rounded-md p-2 text-gray-200 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-white"},{default:E(()=>[pt,k(r,{class:"h-6 w-6","aria-hidden":"true"})]),_:1}),($(),me(De,{to:"body"},[k(_e,{"enter-active-class":"duration-200 ease-out","enter-from-class":"opacity-0 scale-95","enter-to-class":"opacity-100 scale-100","leave-active-class":"duration-100 ease-in","leave-from-class":"opacity-100 scale-100","leave-to-class":"opacity-0 scale-95"},{default:E(()=>[k(B(Ie),{focus:"",class:"absolute inset-x-0 top-0 z-50 origin-top-right transform transition"},{default:E(()=>[c("div",dt,[c("div",ft,[vt,c("div",ht,[k(B(pe),{class:"inline-flex items-center justify-center rounded-md p-2 text-gray-200 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-white"},{default:E(()=>[mt,k(n,{class:"h-6 w-6","aria-hidden":"true"})]),_:1})])]),c("nav",bt,[c("ul",_t,[yt,c("li",null,[wt,c("ul",gt,[($(!0),O(C,null,Y(e.network,a=>($(),O("li",xt,[c("span",Pt,Q(a.label),1),c("ul",null,[($(!0),O(C,null,Y(a.nav,i=>($(),O("li",null,[c("a",{class:"inline-block py-2 text-white hover:underline transition hover:text-space-cyan-lighter",href:i.href,target:"_blank",rel:"noopener"},[Z(Q(i.label)+" ",1),k(o,{class:"w-4 h-4 inline-block stroke-2"})],8,kt)]))),256))])]))),256))])]),$t]),c("div",St,[k(s,{href:"https://portal.astar.network/",target:"_blank",rel:"noopener",size:"lg",class:"w-full"},{default:E(()=>[Z(" Launch App "),k(o,{class:"w-5 h-5 ml-1 stroke-2"})]),_:1})])])])]),_:1})]),_:1})]))]),_:1})}}}),Ot={},Ft={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2.5",stroke:"currentColor",class:"w-6 h-6"},At=c("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"},null,-1),Nt=[At];function It(e,t){return $(),O("svg",Ft,Nt)}const jt=de(Ot,[["render",It]]);const Bt={class:"relative"},Dt=c("div",{class:"pointer-events-none absolute inset-0 z-30","aria-hidden":"true"},null,-1),Lt={class:"mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 sm:py-8 md:space-x-10 lg:px-8"},Ct=c("a",{href:"/",class:"flex"},[c("span",{class:"sr-only"},"Astar Network"),c("img",{class:"h-10 w-auto sm:h-14",src:ge,alt:"Astar Network",width:"188",height:"60"})],-1),Tt={class:"-my-2 -mr-2 lg:hidden"},Mt={class:"hidden lg:flex lg:items-center"},Ht={class:"flex space-x-10"},Rt=c("a",{href:"/developers",class:"nav-item"},"Developers",-1),Ut=c("span",null,"Network",-1),Gt=c("a",{href:"/community",class:"nav-item"},"Community",-1),Wt={class:"md:ml-12"},Vt={class:"mx-auto grid max-w-7xl pt-10 pb-24 rounded-3xl px-4 sm:px-6"},zt={class:"grid grid-cols-1 sm:grid-cols-3 gap-12"},Kt={class:"uppercase block border-b border-gray-600 text-gray-400 pb-1 mb-3"},qt=["href"],Zt={__name:"Header",setup(e){const t=[{label:"Explorer",nav:[{label:"Subscan",href:"https://astar.subscan.io/"},{label:"Blockscout",href:"https://blockscout.com/astar/"}]},{label:"Status",nav:[{label:"DApp Staking",href:"https://portal.astar.network/#/astar/dapp-staking/discover"},{label:"DeFi TVL",href:"https://defillama.com/chain/Astar"},{label:"Applications",href:"https://dappradar.com/rankings/protocol/astar"}]},{label:"Infrastructure",nav:[{label:"Shiden Network",href:"https://shiden.astar.network"},{label:"Alchemy",href:"https://www.alchemy.com/astar"},{label:"Blockdeamon",href:"https://blockdaemon.com/protocols/astar/"},{label:"BlastAPI",href:"https://blastapi.io/"},{label:"OnFinality",href:"https://www.onfinality.io/marketplace/astar"}]}];return(l,r)=>{const n=Et,o=jt,s=ye,a=we;return $(),O("div",Bt,[Dt,k(B(he),null,{default:E(({open:i})=>[c("div",{class:ae([i?"bg-space-gray-dark shadow-lg bg-opacity-95":"","transition absolute z-40 w-full"])},[c("div",Lt,[Ct,c("div",Tt,[k(n,{network:t})]),c("div",Mt,[c("nav",Ht,[Rt,k(B(pe),{class:ae([i?"text-space-cyan-light":"text-white hover:text-space-cyan-light","group inline-flex items-center focus:outline-none focus:ring-0 focus:ring-offset-0 font-medium transition"])},{default:E(()=>[Ut,k(o,{class:ae([i?"text-space-cyan-light":"text-gray-200","ml-2 h-5 w-5 group-hover:text-space-cyan-light"]),"aria-hidden":"true"},null,8,["class"])]),_:2},1032,["class"]),Gt]),c("div",Wt,[k(a,{variant:"outlined",href:"https://portal.astar.network/",target:"_blank",rel:"noopener"},{default:E(()=>[Z(" Launch App "),k(s,{class:"w-5 h-5 ml-1 stroke-2"})]),_:1})])])]),k(_e,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"opacity-0 -translate-y-1","enter-to-class":"opacity-100 translate-y-0","leave-active-class":"transition ease-in duration-150","leave-from-class":"opacity-100 translate-y-0","leave-to-class":"opacity-0 -translate-y-1"},{default:E(()=>[k(B(Ie),{class:"border-t border-gray-600 hidden lg:block"},{default:E(()=>[c("div",Vt,[c("ul",zt,[($(),O(C,null,Y(t,f=>c("li",null,[c("span",Kt,Q(f.label),1),c("ul",null,[($(!0),O(C,null,Y(f.nav,v=>($(),O("li",null,[c("a",{class:"inline-block py-2 text-white hover:underline transition hover:text-space-cyan-lighter",href:v.href,target:"_blank",rel:"noopener"},[Z(Q(v.label)+" ",1),k(s,{class:"w-4 h-4 inline-block stroke-2"})],8,qt)]))),256))])])),64))])])]),_:1})]),_:1})],2)]),_:1})])}}};export{Zt as _};
