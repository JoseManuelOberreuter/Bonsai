import{m as l,_ as p,c,o as r,F as y,g as k,a as t,h as w,i as C,t as h,f as S,j as x,p as f,k as A,b as m}from"./index-iLy2pyir.js";/**
 * @license lucide-vue-next v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),$=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(s,a,e)=>e?e.toUpperCase():a.toLowerCase()),B=o=>{const s=$(o);return s.charAt(0).toUpperCase()+s.slice(1)},I=(...o)=>o.filter((s,a,e)=>!!s&&s.trim()!==""&&e.indexOf(s)===a).join(" ").trim();/**
 * @license lucide-vue-next v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var d={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=({size:o,strokeWidth:s=2,absoluteStrokeWidth:a,color:e,iconNode:n,name:i,class:R,..._},{slots:u})=>l("svg",{...d,width:o||d.width,height:o||d.height,stroke:e||d.stroke,"stroke-width":a?Number(s)*24/Number(o):s,class:I("lucide",...i?[`lucide-${v(B(i))}-icon`,`lucide-${v(i)}`]:["lucide-icon"]),..._},[...n.map(g=>l(...g)),...u.default?[u.default()]:[]]);/**
 * @license lucide-vue-next v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=(o,s)=>(a,{slots:e})=>l(L,{...a,iconNode:s,name:o},e);/**
 * @license lucide-vue-next v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=b("chevron-down",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-vue-next v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=b("instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]),j={class:"social-links"},M=["href"],N={class:"sr-only"},O={__name:"SocialLinks",props:{customClass:{type:String,default:""}},setup(o){const s=[{name:"Instagram",icon:T,url:"#"}];return(a,e)=>(r(),c("div",j,[(r(),c(y,null,k(s,n=>t("a",{key:n.name,href:n.url,class:"social-link"},[(r(),w(C(n.icon))),t("span",N,h(n.name),1)],8,M)),64))]))}},P=p(O,[["__scopeId","data-v-95825818"]]),q={__name:"TermsOfServiceModal",props:{isOpen:{type:Boolean,required:!0}},emits:["close"],setup(o,{emit:s}){const a=s,e=()=>{a("close")};return(n,i)=>o.isOpen?(r(),c("div",{key:0,class:"modal-overlay",onClick:e},[t("div",{class:"modal-content",onClick:i[0]||(i[0]=f(()=>{},["stop"]))},[t("div",{class:"modal-header"},[i[1]||(i[1]=t("h2",null,"Términos de Servicio",-1)),t("button",{class:"close-button",onClick:e},"×")]),i[2]||(i[2]=x('<div class="modal-body" data-v-0d3a2b12><h3 data-v-0d3a2b12>1. Aceptación de los Términos</h3><p data-v-0d3a2b12>Al acceder y utilizar este sitio web, usted acepta estar sujeto a estos Términos de Servicio y cumplir con todas las leyes y regulaciones aplicables.</p><h3 data-v-0d3a2b12>2. Uso del Servicio</h3><p data-v-0d3a2b12>Usted se compromete a utilizar el servicio solo para fines legales y de una manera que no infrinja los derechos de terceros.</p><h3 data-v-0d3a2b12>3. Propiedad Intelectual</h3><p data-v-0d3a2b12>Todo el contenido presente en este sitio web, incluyendo pero no limitado a textos, gráficos, logotipos, imágenes y software, está protegido por derechos de autor y otras leyes de propiedad intelectual.</p><h3 data-v-0d3a2b12>4. Política de Privacidad</h3><p data-v-0d3a2b12>Su uso de nuestro servicio está también sujeto a nuestra Política de Privacidad. Al utilizar nuestro servicio, usted consiente la recopilación y uso de información según lo establecido en dicha política.</p><h3 data-v-0d3a2b12>5. Limitación de Responsabilidad</h3><p data-v-0d3a2b12>En ningún caso Bonsai Styling será responsable por daños directos, indirectos, incidentales, especiales o consecuentes que resulten del uso o la imposibilidad de uso de nuestros servicios.</p><h3 data-v-0d3a2b12>6. Modificaciones</h3><p data-v-0d3a2b12>Nos reservamos el derecho de modificar estos términos en cualquier momento. Las modificaciones entrarán en vigor inmediatamente después de su publicación en el sitio web.</p></div>',1))])])):S("",!0)}},F=p(q,[["__scopeId","data-v-0d3a2b12"]]),D={class:"footer"},U={class:"container"},V={class:"footer-main"},z={class:"footer-bottom"},E={class:"copyright"},Z={class:"footer-links"},K={__name:"AppFooter",setup(o){const s=A(!1);return(a,e)=>(r(),c("footer",D,[t("div",U,[t("div",V,[e[2]||(e[2]=t("div",{class:"footer-brand"},[t("h2",{class:"brand-name"},"BONSAI"),t("p",null,"Cultivando elegancia desde 2010")],-1)),m(P)]),t("div",z,[t("p",E," © "+h(new Date().getFullYear())+" Bonsai Styling. Todos los derechos reservados. ",1),t("div",Z,[t("a",{href:"#",onClick:e[0]||(e[0]=f(n=>s.value=!0,["prevent"]))},"Términos de Servicio"),e[3]||(e[3]=t("a",{href:"#"},"Contacto",-1))])])]),m(F,{"is-open":s.value,onClose:e[1]||(e[1]=n=>s.value=!1)},null,8,["is-open"])]))}},H=p(K,[["__scopeId","data-v-8867f8b7"]]);export{H as A,G as C,b as c};
