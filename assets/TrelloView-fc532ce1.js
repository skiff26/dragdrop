import{_ as L,o as a,c as l,b as m,F as b,r as y,i as s,t as T,p as P,f as S,j as w,e as u}from"./index-965cb641.js";import{C as A,P as C,B as V}from"./ButtonsList-6cd22e90.js";const B=i=>(P("data-v-de18dcac"),i=i(),S(),i),$={class:"demo"},j=B(()=>m("h3",null,"In progress",-1)),z=["onDragstart","onDrop"],E=B(()=>m("h3",null,"Done",-1)),F=["onDragstart","onDrop"],N={__name:"Trello",props:{items:{type:Array,required:!0},sort:{type:Boolean,default:!1}},setup(i){const{items:n,sort:d}=i,g=o=>n.filter(t=>t.list==o),f=o=>{const t=o.dataTransfer.getData("itemId");return{item:n.find(p=>p.id==t),itemId:t}},_=o=>{d&&(o.target.style.border="1px solid #33a06f")},v=o=>{d&&(o.target.style.border="1px solid #363636")},c=(o,t)=>{if(!d)return;v(o);const{item:e,itemId:p}=f(o),r=n.findIndex(D=>D.id==p),k=n.findIndex(D=>D.id==t.id);n.splice(r,1),n.splice(k,0,e)},x=(o,t)=>{o.dataTransfer.dropEffect="move",o.dataTransfer.effectAllowed="move",o.dataTransfer.setData("itemId",t.id)},I=(o,t)=>{const{item:e}=f(o);e.list=t};return(o,t)=>(a(),l("div",$,[m("div",{class:"drop-zone",onDrop:t[3]||(t[3]=e=>I(e,1)),onDragenter:t[4]||(t[4]=s(()=>{},["prevent"])),onDragover:t[5]||(t[5]=s(()=>{},["prevent"]))},[j,(a(!0),l(b,null,y(g(1),(e,p)=>(a(),l("div",{class:"drag-el",key:e.id,draggable:"true",onDragstart:r=>x(r,e),onDrop:r=>c(r,e),onDragover:t[0]||(t[0]=s(r=>_(r),["prevent"])),onDragleave:t[1]||(t[1]=s(r=>v(r),["prevent"])),onDragenter:t[2]||(t[2]=s(()=>{},["prevent"]))},T(e.title),41,z))),128))],32),m("div",{class:"drop-zone",onDrop:t[9]||(t[9]=e=>I(e,2)),onDragenter:t[10]||(t[10]=s(()=>{},["prevent"])),onDragover:t[11]||(t[11]=s(()=>{},["prevent"]))},[E,(a(!0),l(b,null,y(g(2),(e,p)=>(a(),l("div",{class:"drag-el",key:e.id,draggable:"true",onDragstart:r=>x(r,e),onDrop:r=>c(r,e),onDragover:t[6]||(t[6]=s(r=>_(r),["prevent"])),onDragleave:t[7]||(t[7]=s(r=>v(r),["prevent"])),onDragenter:t[8]||(t[8]=s(()=>{},["prevent"]))},T(e.title),41,F))),128))],32)]))}},O=L(N,[["__scopeId","data-v-de18dcac"]]),q={class:"main__example example"},M=m("h1",{class:"example__title"},"Trello",-1),J={__name:"TrelloView",setup(i){const n=w([{id:0,title:"Item A",list:1},{id:1,title:"Item B",list:1},{id:2,title:"Item C",list:1},{id:3,title:"Item D",list:2}]),d=[{name:"items",text:"Object[] - items for list."},{name:"sort",text:"Boolean - enable / disable sorting as in a simple example."}];return(g,f)=>(a(),l("section",q,[M,u(O,{items:n.value,sort:!0},null,8,["items"]),u(A,{items:n.value},null,8,["items"]),u(C,{list:d}),u(V,{link:"https://github.com/skiff26/dragdrop/blob/main/src/components/examples/Trello.vue"})]))}};export{J as default};
