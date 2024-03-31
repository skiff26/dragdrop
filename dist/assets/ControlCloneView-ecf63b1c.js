import{_ as A,o as l,c as p,b as f,F as T,r as k,w as r,t as L,p as F,f as V,g as S,e as I}from"./index-0e3632fb.js";import{C as $,P as j,B as q}from"./ButtonsList-4ebe67e7.js";const w=d=>(F("data-v-fa21cc8d"),d=d(),V(),d),z={class:"demo"},E=w(()=>f("h3",null,"First list",-1)),M=["onDragstart","onDrop"],N=w(()=>f("h3",null,"Second list",-1)),G=["onDragstart","onDrop"],H={__name:"CloneOnControl",props:{firstList:{type:Array,required:!0},secondList:{type:Array,required:!0}},setup(d){const{firstList:a,secondList:i}=d,m=(s,t,e)=>{s.dataTransfer.dropEffect="move",s.dataTransfer.effectAllowed="move",s.dataTransfer.setData("itemId",t.id),s.dataTransfer.setData("itemList",e)},_=s=>s.target.classList.add("on-over"),u=s=>s.target.classList.remove("on-over"),x=s=>s.length?Math.max(...s.map(t=>t.id))+1:0,c=(s,t)=>s.findIndex(e=>e.id==t),g=(s,t)=>{const e=+s.dataTransfer.getData("itemId");return{item:t===1?a.find(n=>n.id==e):i.find(n=>n.id==e),itemId:e}},y=(s,t,e,o,n)=>{s.splice(e,1),t.splice(o,0,{...n,id:x(t)})},P=(s,t,e,o)=>{const{item:n,itemId:C}=o===1?g(s,1):g(s),D=c(t,C),v=c(t,e.id);t.splice(D,1),t.splice(v,0,n)},b=(s,t,e)=>{u(s);const o=+s.dataTransfer.getData("itemList"),{item:n,itemId:C}=g(s,o),D=c(o===1?a:i,C),v=c(e===1?a:i,t.id);if(o===1&&e===2){y(a,i,D,v,n);return}if(o===2&&e===1){y(i,a,D,v,n);return}e===1?P(s,a,t,e):P(s,i,t,e)},B=(s,t,e,o)=>{const n=c(s,o);s.splice(n,1),t.push({id:x(t),title:e.title})},O=(s,t)=>{const e=+s.dataTransfer.getData("itemList"),{item:o,itemId:n}=g(s,e);e===1&&t===2?B(a,i,o,n):e===2&&t===1&&B(i,a,o,n)};return(s,t)=>(l(),p("div",z,[f("div",{class:"drop-zone",onDrop:t[3]||(t[3]=e=>O(e,1)),onDragenter:t[4]||(t[4]=r(()=>{},["prevent"])),onDragover:t[5]||(t[5]=r(()=>{},["prevent"]))},[E,(l(!0),p(T,null,k(d.firstList,e=>(l(),p("div",{class:"drag-el",key:e.id,draggable:"true",onDragstart:o=>m(o,e,1),onDrop:r(o=>b(o,e,1),["stop"]),onDragover:t[0]||(t[0]=r(o=>_(o),["prevent"])),onDragleave:t[1]||(t[1]=r(o=>u(o),["prevent"])),onDragenter:t[2]||(t[2]=r(()=>{},["prevent"]))},L(e.title)+" id: "+L(e.id),41,M))),128))],32),f("div",{class:"drop-zone",onDrop:t[9]||(t[9]=e=>O(e,2)),onDragenter:t[10]||(t[10]=r(()=>{},["prevent"])),onDragover:t[11]||(t[11]=r(()=>{},["prevent"]))},[N,(l(!0),p(T,null,k(d.secondList,e=>(l(),p("div",{class:"drag-el",key:e.id,draggable:"true",onDragstart:o=>m(o,e,2),onDrop:r(o=>b(o,e,2),["stop"]),onDragover:t[6]||(t[6]=r(o=>_(o),["prevent"])),onDragleave:t[7]||(t[7]=r(o=>u(o),["prevent"])),onDragenter:t[8]||(t[8]=r(()=>{},["prevent"]))},L(e.title)+" id: "+L(e.id),41,G))),128))],32)]))}},J=A(H,[["__scopeId","data-v-fa21cc8d"]]),K={class:"main__example example"},Q=f("h1",{class:"example__title"},"Clone on control",-1),W={__name:"ControlCloneView",setup(d){const a=[{name:"firstList",text:"Object[] - items for 1 list."},{name:"secondList",text:"Object[] - items for 2 list."}],i=S([{id:0,title:"Item B"},{id:1,title:"Item C"},{id:2,title:"Item D"}]),m=S([{id:0,title:"Item A"}]);return(_,u)=>(l(),p("section",K,[Q,I(J,{firstList:i.value,secondList:m.value},null,8,["firstList","secondList"]),I($,{items:i.value,items2:m.value},null,8,["items","items2"]),I(j,{list:a}),I(q,{link:"https://github.com/skiff26/dragdrop/blob/main/src/components/examples/CloneOnControl.vue"})]))}};export{W as default};