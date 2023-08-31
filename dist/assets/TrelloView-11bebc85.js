import{_ as L,o as a,c as l,b as p,F as x,r as b,w as n,t as y,p as w,f as P,g as S,e as m}from"./index-cdf3d270.js";import{C as A,P as C,B as V}from"./ButtonsList-73d0b6b0.js";const T=i=>(w("data-v-0be42f9e"),i=i(),P(),i),$={class:"demo"},z=T(()=>p("h3",null,"In progress",-1)),E=["onDragstart","onDrop"],F=T(()=>p("h3",null,"Done",-1)),N=["onDragstart","onDrop"],O={__name:"Trello",props:{items:{type:Array,required:!0},sort:{type:Boolean,default:!1}},setup(i){const{items:s,sort:d}=i,u=r=>s?s.filter(t=>t.list==r):[],g=r=>{const t=r.dataTransfer.getData("itemId");return{item:s.find(e=>e.id==t),itemId:t}},D=r=>{d&&(r.target.style.border="1px solid #33a06f")},f=r=>{d&&(r.target.style.border="1px solid #363636")},_=(r,t)=>{if(!d)return;f(r);const{item:o,itemId:e}=g(r),B=s.findIndex(v=>v.id==e),k=s.findIndex(v=>v.id==t.id);s.splice(B,1),s.splice(k,0,o)},I=(r,t)=>{r.dataTransfer.dropEffect="move",r.dataTransfer.effectAllowed="move",r.dataTransfer.setData("itemId",t.id)},c=(r,t)=>{const{item:o}=g(r);o.list=t};return(r,t)=>(a(),l("div",$,[p("div",{class:"drop-zone",onDrop:t[3]||(t[3]=o=>c(o,1)),onDragenter:t[4]||(t[4]=n(()=>{},["prevent"])),onDragover:t[5]||(t[5]=n(()=>{},["prevent"]))},[z,(a(!0),l(x,null,b(u(1),o=>(a(),l("div",{class:"drag-el",key:o.id,draggable:"true",onDragstart:e=>I(e,o),onDrop:e=>_(e,o),onDragover:t[0]||(t[0]=n(e=>D(e),["prevent"])),onDragleave:t[1]||(t[1]=n(e=>f(e),["prevent"])),onDragenter:t[2]||(t[2]=n(()=>{},["prevent"]))},y(o.title),41,E))),128))],32),p("div",{class:"drop-zone",onDrop:t[9]||(t[9]=o=>c(o,2)),onDragenter:t[10]||(t[10]=n(()=>{},["prevent"])),onDragover:t[11]||(t[11]=n(()=>{},["prevent"]))},[F,(a(!0),l(x,null,b(u(2),o=>(a(),l("div",{class:"drag-el",key:o.id,draggable:"true",onDragstart:e=>I(e,o),onDrop:e=>_(e,o),onDragover:t[6]||(t[6]=n(e=>D(e),["prevent"])),onDragleave:t[7]||(t[7]=n(e=>f(e),["prevent"])),onDragenter:t[8]||(t[8]=n(()=>{},["prevent"]))},y(o.title),41,N))),128))],32)]))}},j=L(O,[["__scopeId","data-v-0be42f9e"]]),q={class:"main__example example"},M=p("h1",{class:"example__title"},"Trello",-1),J={__name:"TrelloView",setup(i){const s=S([{id:0,title:"Item A",list:1},{id:1,title:"Item B",list:1},{id:2,title:"Item C",list:1},{id:3,title:"Item D",list:2}]),d=[{name:"items",text:"Object[] - items for list."},{name:"sort",text:"Boolean - enable / disable sorting as in a simple example."}];return(u,g)=>(a(),l("section",q,[M,m(j,{items:s.value,sort:!0},null,8,["items"]),m(A,{items:s.value},null,8,["items"]),m(C,{list:d}),m(V,{link:"https://github.com/skiff26/dragdrop/blob/main/src/components/examples/Trello.vue"})]))}};export{J as default};