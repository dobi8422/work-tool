import{_ as g,f as l,o as i,c as r,a as u,g as I,t as f,h as k,v as y,p as C,d as T,e as V}from"./index.33b3b9e8.js";const w=c=>(C("data-v-08144c62"),c=c(),T(),c),B=w(()=>u("h2",null,"Todo",-1)),N={key:3,class:"time"},D={class:"time"},M=V(": "),U={setup(c){const a=l(0),e=l(2),s=l(!1),t=l(a.value),v=l(e.value),h=()=>{s.value&&(t.value>100&&(t.value=parseInt(t.value/10)),v.value>100&&(v.value=parseInt(v.value/10)),a.value=t.value,e.value=v.value,clearInterval(o.value),n.value=!1),s.value=!s.value,d.value=!1},n=l(!1),d=l(!1),o=l(""),S=()=>{const m=()=>{e.value!==0?e.value--:a.value!==0?(a.value--,e.value=59):clearInterval(o.value)};o.value=setInterval(m,1e3),n.value=!n.value,d.value=!0},b=()=>{clearInterval(o.value),n.value=!n.value},x=()=>{clearInterval(o.value),a.value=t.value,e.value=v.value,n.value=!1,d.value=!1};return(m,p)=>(i(),r("div",null,[B,u("div",null,[n.value?(i(),r("button",{key:1,onClick:b},"stop")):(i(),r("button",{key:0,onClick:S},"run")),d.value?(i(),r("button",{key:2,onClick:x},"reset")):I("",!0),u("button",{onClick:h},f(s.value?"save":"edit"),1),s.value?(i(),r("div",N,[k(u("input",{type:"number",oninput:`\r
          if(value.length>2)value=value.slice(0,2);\r
          if(value>59)value=59;\r
          if(value<0)value=0`,name:"",id:"","onUpdate:modelValue":p[0]||(p[0]=_=>t.value=_)},null,512),[[y,t.value]]),k(u("input",{type:"number",oninput:`\r
          if(value.length>2)value=value.slice(0,2);\r
          if(value>59)value=59;\r
          if(value<0)value=0`,name:"",id:"","onUpdate:modelValue":p[1]||(p[1]=_=>v.value=_)},null,512),[[y,v.value]])])):I("",!0)]),u("div",D,[u("p",null,f(a.value>=10?a.value:`0${a.value}`),1),M,u("p",null,f(e.value>=10?e.value:`0${e.value}`),1)])]))}};var E=g(U,[["__scopeId","data-v-08144c62"]]);export{E as default};
