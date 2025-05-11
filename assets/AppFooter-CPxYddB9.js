import{m as d,_,c as h,o as i,F as v,g,a as s,h as w,i as y,t as m,b as C}from"./index-C52zYMIp.js";/**
 * @license lucide-vue-next v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),b=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,o,a)=>a?a.toUpperCase():o.toLowerCase()),x=e=>{const t=b(e);return t.charAt(0).toUpperCase()+t.slice(1)},A=(...e)=>e.filter((t,o,a)=>!!t&&t.trim()!==""&&a.indexOf(t)===o).join(" ").trim();/**
 * @license lucide-vue-next v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var c={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=({size:e,strokeWidth:t=2,absoluteStrokeWidth:o,color:a,iconNode:n,name:l,class:U,...k},{slots:p})=>d("svg",{...c,width:e||c.width,height:e||c.height,stroke:a||c.stroke,"stroke-width":o?Number(t)*24/Number(e):t,class:A("lucide",...l?[`lucide-${u(x(l))}-icon`,`lucide-${u(l)}`]:["lucide-icon"]),...k},[...n.map(f=>d(...f)),...p.default?[p.default()]:[]]);/**
 * @license lucide-vue-next v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r=(e,t)=>(o,{slots:a})=>d(L,{...o,iconNode:t,name:e},a);/**
 * @license lucide-vue-next v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=r("chevron-down",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-vue-next v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=r("facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]);/**
 * @license lucide-vue-next v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=r("instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-vue-next v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=r("linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-vue-next v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=r("twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]),S={class:"social-links"},j=["href"],z={class:"sr-only"},D={__name:"SocialLinks",props:{customClass:{type:String,default:""}},setup(e){const t=[{name:"Instagram",icon:I,url:"#"},{name:"Facebook",icon:B,url:"#"},{name:"Twitter",icon:F,url:"#"},{name:"LinkedIn",icon:$,url:"#"}];return(o,a)=>(i(),h("div",S,[(i(),h(v,null,g(t,n=>s("a",{key:n.name,href:n.url,class:"social-link"},[(i(),w(y(n.icon))),s("span",z,m(n.name),1)],8,j)),64))]))}},M=_(D,[["__scopeId","data-v-1271b1ef"]]),T={class:"footer"},N={class:"container"},P={class:"footer-main"},V={class:"footer-bottom"},q={class:"copyright"},O={__name:"AppFooter",setup(e){return(t,o)=>(i(),h("footer",T,[s("div",N,[s("div",P,[o[0]||(o[0]=s("div",{class:"footer-brand"},[s("h2",{class:"brand-name"},"BONSAI"),s("p",null,"Cultivando elegancia desde 2010")],-1)),C(M)]),s("div",V,[s("p",q," © "+m(new Date().getFullYear())+" Bonsai Styling. Todos los derechos reservados. ",1),o[1]||(o[1]=s("div",{class:"footer-links"},[s("a",{href:"#"},"Política de Privacidad"),s("a",{href:"#"},"Términos de Servicio"),s("a",{href:"#"},"Contacto")],-1))])])]))}},H=_(O,[["__scopeId","data-v-4da5ef53"]]);export{H as A,E as C,r as c};
