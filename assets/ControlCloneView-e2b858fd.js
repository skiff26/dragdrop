import{_ as A,o as l,c as p,b as f,F as O,r as T,w as r,t as I,p as V,f as F,g as S,e as u,h as $}from"./index-790e05ed.js";import{C as j,B as q,P as z,V as E}from"./ViewCodeButton-5fbaf652.js";const k=d=>(V("data-v-0c21758a"),d=d(),F(),d),M={class:"demo"},N=k(()=>f("h3",null,"First list",-1)),G=["onDragstart","onDrop"],H=k(()=>f("h3",null,"Second list",-1)),J=["onDragstart","onDrop"],K={__name:"CloneOnControl",props:{firstList:{type:Array,required:!0},secondList:{type:Array,required:!0}},setup(d){const{firstList:a,secondList:i}=d,m=(o,t,e)=>{o.dataTransfer.dropEffect="move",o.dataTransfer.effectAllowed="move",o.dataTransfer.setData("itemId",t.id),o.dataTransfer.setData("itemList",e)},_=o=>o.target.classList.add("on-over"),g=o=>o.target.classList.remove("on-over"),x=o=>o.length?Math.max(...o.map(t=>t.id))+1:0,c=(o,t)=>o.findIndex(e=>e.id==t),D=(o,t)=>{const e=+o.dataTransfer.getData("itemId");return{item:t===1?a.find(n=>n.id==e):i.find(n=>n.id==e),itemId:e}},y=(o,t,e,s,n)=>{o.splice(e,1),t.splice(s,0,{...n,id:x(t)})},P=(o,t,e,s)=>{const{item:n,itemId:C}=s===1?D(o,1):D(o),v=c(t,C),L=c(t,e.id);t.splice(v,1),t.splice(L,0,n)},b=(o,t,e)=>{g(o);const s=+o.dataTransfer.getData("itemList"),{item:n,itemId:C}=D(o,s),v=c(s===1?a:i,C),L=c(e===1?a:i,t.id);if(s===1&&e===2){y(a,i,v,L,n);return}if(s===2&&e===1){y(i,a,v,L,n);return}e===1?P(o,a,t,e):P(o,i,t,e)},B=(o,t,e,s)=>{const n=c(o,s);o.splice(n,1),t.push({id:x(t),title:e.title})},w=(o,t)=>{const e=+o.dataTransfer.getData("itemList"),{item:s,itemId:n}=D(o,e);e===1&&t===2?B(a,i,s,n):e===2&&t===1&&B(i,a,s,n)};return(o,t)=>(l(),p("div",M,[f("div",{class:"drop-zone",onDrop:t[3]||(t[3]=e=>w(e,1)),onDragenter:t[4]||(t[4]=r(()=>{},["prevent"])),onDragover:t[5]||(t[5]=r(()=>{},["prevent"]))},[N,(l(!0),p(O,null,T(d.firstList,e=>(l(),p("div",{class:"drag-el",key:e.id,draggable:"true",onDragstart:s=>m(s,e,1),onDrop:r(s=>b(s,e,1),["stop"]),onDragover:t[0]||(t[0]=r(s=>_(s),["prevent"])),onDragleave:t[1]||(t[1]=r(s=>g(s),["prevent"])),onDragenter:t[2]||(t[2]=r(()=>{},["prevent"]))},I(e.title)+" id: "+I(e.id),41,G))),128))],32),f("div",{class:"drop-zone",onDrop:t[9]||(t[9]=e=>w(e,2)),onDragenter:t[10]||(t[10]=r(()=>{},["prevent"])),onDragover:t[11]||(t[11]=r(()=>{},["prevent"]))},[H,(l(!0),p(O,null,T(d.secondList,e=>(l(),p("div",{class:"drag-el",key:e.id,draggable:"true",onDragstart:s=>m(s,e,2),onDrop:r(s=>b(s,e,2),["stop"]),onDragover:t[6]||(t[6]=r(s=>_(s),["prevent"])),onDragleave:t[7]||(t[7]=r(s=>g(s),["prevent"])),onDragenter:t[8]||(t[8]=r(()=>{},["prevent"]))},I(e.title)+" id: "+I(e.id),41,J))),128))],32)]))}},Q=A(K,[["__scopeId","data-v-0c21758a"]]),R={class:"main__example example"},U=f("h1",{class:"example__title"},"Clone on control",-1),Y={__name:"ControlCloneView",setup(d){const a=[{name:"firstList",text:"Object[] - items for 1 list."},{name:"secondList",text:"Object[] - items for 2 list."}],i=S([{id:0,title:"Item B"},{id:1,title:"Item C"},{id:2,title:"Item D"}]),m=S([{id:0,title:"Item A"}]);return(_,g)=>(l(),p("section",R,[U,u(Q,{firstList:i.value,secondList:m.value},null,8,["firstList","secondList"]),u(j,{data:i.value,data2:m.value},null,8,["data","data2"]),u(z,{list:a}),u(q,null,{default:$(()=>[u(E,{url:"https://github.com/skiff26/dragdrop/blob/main/src/components/examples/CloneOnControl.vue"})]),_:1})]))}};export{Y as default};
