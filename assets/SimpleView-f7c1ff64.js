import{_ as g,o as i,c as n,F as v,r as x,w as _,t as D,g as b,e as a,b as y}from"./index-a19232e8.js";import{C as I,P as S,B}from"./ButtonsList-9d248b2e.js";const k={class:"drop-zone"},L=["onDragstart","onDrop"],h={__name:"Simple",props:{items:{type:Array,requried:!0}},setup(l){const{items:r}=l,d=(e,t)=>{e.dataTransfer.dropEffect="move",e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("itemId",t.id)},f=e=>e.target.style.border="1px solid #33a06f",m=e=>e.target.style.border="1px solid #363636",u=(e,t)=>{m(e);const o=e.dataTransfer.getData("itemId"),p=r.find(c=>c.id==o),s=r.findIndex(c=>c.id==o);r.splice(s,1),r.splice(t,0,p)};return(e,t)=>(i(),n("div",k,[(i(!0),n(v,null,x(l.items,(o,p)=>(i(),n("div",{class:"drag-el",key:o.id,draggable:"true",onDragenter:t[0]||(t[0]=_(()=>{},["prevent"])),onDragstart:s=>d(s,o),onDrop:s=>u(s,p),onDragover:t[1]||(t[1]=_(s=>f(s),["prevent"])),onDragleave:t[2]||(t[2]=_(s=>m(s),["prevent"]))},D(o.title),41,L))),128))]))}},w=g(h,[["__scopeId","data-v-a3e26d60"]]),P={class:"main__example example"},T=y("h1",{class:"example__title"},"Simple",-1),V={__name:"SimpleView",setup(l){const r=b([{id:0,title:"Item A"},{id:1,title:"Item B"},{id:2,title:"Item C"}]),d=[{name:"items",text:"Object[] - items for list."}];return(f,m)=>(i(),n("section",P,[T,a(w,{items:r.value},null,8,["items"]),a(I,{items:r.value},null,8,["items"]),a(S,{list:d}),a(B,{link:"https://github.com/skiff26/dragdrop/blob/main/src/components/examples/Simple.vue"})]))}};export{V as default};