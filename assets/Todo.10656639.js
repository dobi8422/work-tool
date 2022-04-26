import{k as T,_ as m,h as $,f as g,g as w,l as N,o as l,c as n,a as e,j as x,v as B,u as c,m as J,q as O,n as i,i as r,t as h,F as I,s as D,p as V,d as K}from"./index.1566bf9a.js";const F=T("localStorage",{state:()=>({todoList:{}}),actions:{},getters:{}});const d=k=>(V("data-v-de7ce7b4"),k=k(),K(),k),U={class:"input"},j=["onKeyup"],q=d(()=>e("option",{class:"color_1",value:"1"},"trivia",-1)),z=d(()=>e("option",{class:"color_2",value:"2"},"routine",-1)),E=d(()=>e("option",{class:"color_3",value:"3"},"important",-1)),H=d(()=>e("option",{class:"color_4",value:"4"},"urgent",-1)),A=[q,z,E,H],G={class:"button_group"},P=d(()=>e("i",{class:"fa-solid fa-arrow-down-wide-short"},null,-1)),Q=[P],R=d(()=>e("i",{class:"fa-solid fa-clock"},null,-1)),W=[R],X=d(()=>e("i",{class:"fa-solid fa-trash-can"},null,-1)),Y=[X],Z={key:0},oo=["checked","onClick"],eo={key:0},to=["onClick"],so=d(()=>e("i",{class:"fa-solid fa-xmark"},null,-1)),lo=[so],no={key:2,class:"opacity_button"},ao={key:0,class:"color_grey"},co={key:1},uo=["checked","onClick"],io={key:0},ro=["onClick"],_o=d(()=>e("i",{class:"fa-solid fa-xmark"},null,-1)),vo=[_o],po={key:2,class:"opacity_button"},ho={key:0,class:"color_grey"},ko={setup(k){const a=$({done:!1,delete:!1,title:"",color:"2",date:"",ID:""}),C=()=>{if(!a.title)return;const t=new Date;a.date=`${t.getMonth()+1}/${t.getDate()} ${t.getHours()}:${t.getMinutes()<10?`0${t.getMinutes()}`:t.getMinutes()}`,a.ID=t.getTime(),f.push(JSON.parse(JSON.stringify(a))),a.title="",u.value="undone"},f=$([]),u=g("undone"),v=w(()=>f.filter(t=>t.done===!1&&t.delete===!1)),S=w(()=>f.filter(t=>t.done===!0&&t.delete===!1)),y=g(!1),L=()=>{y.value?v.value.sort((t,s)=>t.color-s.color):v.value.sort((t,s)=>t.ID-s.ID),y.value=!y.value},_=g(!1),p=g(!1),M=F();return N(()=>{const t=JSON.parse(localStorage.getItem("todoList"));for(let s=0;s<t.length;s++)f[s]=t[s]}),window.onbeforeunload=()=>{localStorage.setItem("todoList",JSON.stringify(v.value))},(t,s)=>(l(),n("div",null,[e("div",U,[x(e("input",{type:"text","onUpdate:modelValue":s[0]||(s[0]=o=>c(a).title=o),onKeyup:J(C,["enter"])},null,40,j),[[B,c(a).title]]),x(e("select",{class:i({color_1:c(a).color==="1",color_2:c(a).color==="2",color_3:c(a).color==="3",color_4:c(a).color==="4"}),name:"color",id:"color","onUpdate:modelValue":s[1]||(s[1]=o=>c(a).color=o)},A,2),[[O,c(a).color]]),e("button",{onClick:C},"\u21A9")]),e("div",G,[e("div",null,[e("button",{class:i({active_button:u.value==="undone"}),onClick:s[2]||(s[2]=o=>u.value="undone")},"undone",2),e("button",{class:i({active_button:u.value==="completed"}),onClick:s[3]||(s[3]=o=>u.value="completed")},"completed",2)]),e("div",null,[u.value==="undone"?(l(),n("button",{key:0,id:"orderButton",class:i({color_3:!y.value}),onClick:L},Q,2)):r("",!0),e("button",{class:i({active_button:p.value}),onClick:s[4]||(s[4]=o=>p.value=!p.value)},W,2),e("button",{class:i({active_button:_.value,color_4:_.value}),onClick:s[5]||(s[5]=o=>_.value=!_.value)},Y,2)])]),u.value==="undone"?(l(),n("ul",Z,[e("li",null,h(c(M).todoList.title),1),(l(!0),n(I,null,D(c(v).slice().reverse(),o=>(l(),n("li",{key:o},[e("input",{type:"checkbox",checked:o.done,onClick:b=>o.done=!o.done},null,8,oo),e("p",{class:i({color_1:o.color==="1",color_2:o.color==="2",color_3:o.color==="3",color_4:o.color==="4"})},h(o.title),3),p.value?(l(),n("span",eo,h(o.date),1)):r("",!0),_.value?(l(),n("button",{key:1,onClick:b=>o.delete=!0},lo,8,to)):(l(),n("button",no))]))),128)),c(v)[0]?r("",!0):(l(),n("li",ao,"There is nothing"))])):r("",!0),u.value==="completed"?(l(),n("ul",co,[(l(!0),n(I,null,D(c(S),o=>(l(),n("li",{key:o},[e("input",{type:"checkbox",checked:o.done,onClick:b=>o.done=!o.done},null,8,uo),e("p",null,h(o.title),1),p.value?(l(),n("span",io,h(o.date),1)):r("",!0),_.value?(l(),n("button",{key:1,onClick:b=>o.delete=!0},vo,8,ro)):(l(),n("button",po))]))),128)),c(S)[0]?r("",!0):(l(),n("li",ho,"There is nothing"))])):r("",!0)]))}};var yo=m(ko,[["__scopeId","data-v-de7ce7b4"]]);export{yo as default};
