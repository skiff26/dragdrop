import{_ as o,o as s,c as n,b as t,t as a,h as d,F as u,r as l,d as i,e as p,B as m}from"./index-0e3632fb.js";const y={class:"code"},h={key:0},v={__name:"CodePre",props:{items:{type:Array,required:!0},items2:{type:Array}},setup(e){return(r,c)=>(s(),n("div",y,[t("pre",null,a(e.items),1),e.items2?(s(),n("pre",h,a(e.items2),1)):d("",!0)]))}},k=o(v,[["__scopeId","data-v-f5300a75"]]);const f={class:"info"},g={__name:"PropsList",props:{list:{type:Array,required:!0},emit:{type:Boolean,default:!1}},setup(e){return(r,c)=>(s(),n("div",f,[t("ul",null,[t("strong",null,a(e.emit?"Emits:":"Props:"),1),(s(!0),n(u,null,l(e.list,_=>(s(),n("li",{key:_.name},[t("p",null,[t("strong",null,a(_.name)+":",1),i(" "+a(_.text),1)])]))),128))])]))}},L=o(g,[["__scopeId","data-v-0e9cbd43"]]);const x={class:"buttons"},B=["href"],b={__name:"ButtonsList",props:{link:{type:String,required:!0}},setup(e){return(r,c)=>(s(),n("div",x,[t("a",{class:"buttons__view-code",target:"_blank",href:e.link},[p(m,{name:"github",wh:"20"}),i("View code ")],8,B)]))}},C=o(b,[["__scopeId","data-v-ca064be4"]]);export{C as B,k as C,L as P};