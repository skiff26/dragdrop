import{_ as d,o,c as r,a as h,r as g,b as e,t as i,d as m,e as s,B as n,F as p,p as _,f as u}from"./index-6d2733e2.js";const f={},v={class:"product"},b=h('<h2 class="product__title" data-v-9e9a025e>What this library is?</h2><div class="product__text" data-v-9e9a025e><p data-v-9e9a025e>This is a library with <strong data-v-9e9a025e>Ready-To-Use Drag-and-Drop</strong> components.</p><p data-v-9e9a025e>It is created to facilitate the integration of Drag-and-Drop elements into Vue.js applications.</p><h3 data-v-9e9a025e><strong data-v-9e9a025e>Drag and drop</strong> is a convenient and intuitive way to interact with web applications.<br data-v-9e9a025e>Here are a few reasons why it is considered convenient:</h3><ul data-v-9e9a025e><li data-v-9e9a025e><strong data-v-9e9a025e>Intuitiveness:</strong> Users can easily understand how to use drag and drop as it simulates real-world behavior when they move objects between different places on the screen.</li><li data-v-9e9a025e><strong data-v-9e9a025e>Improved user experience:</strong> Drag and drop makes interacting with the application more interactive and enjoyable for users since they can visually move elements and instantly see the results of their actions.</li><li data-v-9e9a025e><strong data-v-9e9a025e>Simplifying data manipulation:</strong> Dragging allows easy movement of data between different parts of the interface without the need to use context menus or other control elements.</li><li data-v-9e9a025e><strong data-v-9e9a025e>Task acceleration:</strong> Drag and drop eliminates the need to switch between various control elements and menus, reducing the number of steps and simplifying task execution.</li><li data-v-9e9a025e><strong data-v-9e9a025e>Associativity:</strong> The visual nature of dragging allows for easy association between objects, for example, dragging an item to a specific area for its use or processing.</li><li data-v-9e9a025e><strong data-v-9e9a025e>Enhanced efficiency:</strong> For performing specific tasks such as sorting, grouping, or multiple item selection, dragging provides a faster and more intuitive way.</li></ul></div>',2),w=[b];function y(t,c){return o(),r("section",v,w)}const k=d(f,[["render",y],["__scopeId","data-v-9e9a025e"]]);const x={class:"card__image"},A=["href"],I=["src","alt"],$={class:"card__info"},D={class:"card__name"},j={class:"card__org"},V={class:"card__details"},T=["href"],S=["href"],B={class:"card__media"},C=["href"],L=["href"],N={__name:"PersonCard",props:{team:Array,required:!0},setup(t){return(c,l)=>(o(!0),r(p,null,g(t.team,a=>(o(),r("article",{class:"card",key:a.name},[e("figure",x,[e("a",{href:a.media.linkedin,target:"_blank"},[e("img",{src:`./about/${a.img}.jpg`,alt:a.name},null,8,I)],8,A)]),e("div",$,[e("h3",D,i(a.name),1),e("p",j,[m("Creator @ "),e("span",null,i(a.org),1)]),e("ul",V,[e("li",null,[s(n,{name:"location",wh:"16"}),e("address",null,i(a.details.location),1)]),e("li",null,[s(n,{name:"code",wh:"16"}),e("a",{href:a.details.projects[0].link,target:"_blank"},i(a.details.projects[0].name),9,T)]),e("li",null,[s(n,{name:"lang",wh:"16"}),e("div",null,i(a.details.languages),1)]),e("li",null,[s(n,{name:"link",wh:"16"}),e("a",{href:a.details.website,target:"_blank"},i(a.details.website),9,S)])]),e("ul",B,[e("li",null,[e("a",{href:a.media.github,target:"_blank"},[s(n,{name:"github",wh:"20"})],8,C)]),e("li",null,[e("a",{href:a.media.linkedin,target:"_blank"},[s(n,{name:"linkedin",wh:"20"})],8,L)])])])]))),128))}},P=d(N,[["__scopeId","data-v-1721a3fe"]]);const E=t=>(_("data-v-2690254d"),t=t(),u(),t),F={class:"team"},U=E(()=>e("h2",{class:"team__title"},"Creator",-1)),R={__name:"AboutTeam",setup(t){const c=[{img:"creator",name:"Artem Kulchytskyi",org:"Vue.js Drag&Drop Library",details:{location:"Warsaw, Poland",projects:[{name:"vue-drag&drop",link:"https://skiff26.github.io/dragdrop/"}],languages:"English • Russian • Ukrainian",website:"https://skiff26.github.io/portfolio/"},media:{github:"https://github.com/skiff26",linkedin:"https://www.linkedin.com/in/akulchytskyi/"}}];return(l,a)=>(o(),r("section",F,[U,s(P,{team:c})]))}},W=d(R,[["__scopeId","data-v-2690254d"]]);const q=t=>(_("data-v-aece1f03"),t=t(),u(),t),H={class:"main__container"},K=q(()=>e("h1",{class:"main__title"},"About",-1)),z={__name:"AboutView",setup(t){return(c,l)=>(o(),r("div",H,[K,s(k),s(W)]))}},J=d(z,[["__scopeId","data-v-aece1f03"]]);export{J as default};
