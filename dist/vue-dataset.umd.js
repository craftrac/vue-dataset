(function(d,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(d=typeof globalThis<"u"?globalThis:d||self,e(d.VueDataset={},d.Vue))})(this,function(d,e){"use strict";const E={show:"Show",entries:"entries",previous:"Previous",next:"Next",showing:"Showing",showingTo:"to",showingOf:"of",showingEntries:"entries"},D="...";function x(n,s,a){let t;return function(){const r=this,i=arguments;clearTimeout(t),a&&!t&&n.apply(r,i),t=setTimeout(function(){t=null,a||n.apply(r,i)},s)}}function k(n){for(const s in n)return!1;return!0}function I(n,s){const t=[],r=[];let i;if(t.push(1),n<=1)return t;for(let o=s-2;o<=s+2;o++)o<n&&o>1&&t.push(o);t.push(n);for(let o=0;o<t.length;o++)i&&(t[o]-i===2?r.push(i+1):t[o]-i!==1&&r.push(D)),r.push(t[o]),i=t[o];return r}function N(n,s={}){const a=[];let t;const r=n.length;return n=n.map(function(i,o){return i[0]==="-"?(a[o]=-1,i=i.substring(1)):a[o]=1,i}),function(i,o){for(t=0;t<r;t++){const l=n[t],u=s[l]?s[l](i.value[l]):i.value[l],g=s[l]?s[l](o.value[l]):o.value[l];if(u>g)return a[t];if(u<g)return-a[t]}return 0}}function B(n,s){for(const a in s)n=n.filter(function(t){const r=t.value;for(const i in r)if(i===a){if(typeof s[a]=="function")return s[a](r[i]);if(s[a]===""||r[i]===s[a])return!0}return!1});return n}function j(n,s,a,t){t=String(t).toLowerCase();for(const r in a)if(n.length===0||n.indexOf(r)!==-1){const i=String(a[r]).toLowerCase();for(const o in s)if(o===r&&typeof s[o]=="function"){const l=s[o](i,t,a);if(l===!0)return l}if(i.indexOf(t)>=0)return!0}return!1}const m=(n,s)=>{const a=n.__vccOpts||n;for(const[t,r]of s)a[t]=r;return a},F={props:{dsData:{type:Array,default:()=>[]},dsFilterFields:{type:Object,default:()=>({})},dsSortby:{type:Array,default:()=>[]},dsSearchIn:{type:Array,default:()=>[]},dsSearchAs:{type:Object,default:()=>({})},dsSortAs:{type:Object,default:()=>({})}},emits:["update:dsData"],setup(n,{emit:s}){const a=e.ref(1),t=e.ref(""),r=e.ref(10),i=e.ref(E),o=e.ref([]),l=h=>{t.value=h},u=async h=>{r.value=h,await e.nextTick(),a.value>S.value&&g(y.value[y.value.length-1])},g=h=>{a.value=h},se=e.computed(()=>(n.dsData,t.value,n.dsSortby,n.dsFilterFields,n.dsSearchIn,n.dsSearchAs,n.dsSortAs,Date.now())),P=e.computed(()=>o.value.slice(_.value,p.value)),y=e.computed(()=>I(S.value,a.value)),w=e.computed(()=>o.value.length),S=e.computed(()=>Math.ceil(w.value/r.value)),_=e.computed(()=>(a.value-1)*r.value),p=e.computed(()=>a.value*r.value);return e.watch(w,(h,oe)=>{g(1)}),e.watch(se,(h,oe)=>{let c=[];!t.value&&!n.dsSortby.length&&k(n.dsFilterFields)?c=n.dsData.map((f,b)=>b):(c=n.dsData.map((f,b)=>({index:b,value:f})),k(n.dsFilterFields)||(c=B(c,n.dsFilterFields)),t.value&&(c=c.filter(f=>j(n.dsSearchIn,n.dsSearchAs,f.value,t.value))),n.dsSortby.length&&c.sort(N(n.dsSortby,n.dsSortAs)),c=c.map(f=>f.index)),o.value=c,s("update:dsData",c.map(f=>n.dsData[f]))},{immediate:!0}),e.provide("dsIndexes",o),e.provide("search",l),e.provide("showEntries",u),e.provide("setActive",g),e.provide("datasetI18n",i),e.provide("dsData",e.computed(()=>n.dsData)),e.provide("dsRows",P),e.provide("dsPages",y),e.provide("dsResultsNumber",w),e.provide("dsPagecount",S),e.provide("dsFrom",_),e.provide("dsTo",p),e.provide("dsPage",a),{dsIndexes:o,dsShowEntries:r,dsResultsNumber:w,dsPage:a,dsPagecount:S,dsFrom:_,dsTo:p,dsRows:P,dsPages:y,search:l,showEntries:u,setActive:g}}};function R(n,s,a,t,r,i){return e.renderSlot(n.$slots,"default",{ds:{dsIndexes:t.dsIndexes,dsShowEntries:t.dsShowEntries,dsResultsNumber:t.dsResultsNumber,dsPage:t.dsPage,dsPagecount:t.dsPagecount,dsFrom:t.dsFrom,dsTo:t.dsTo,dsData:a.dsData,dsRows:t.dsRows,dsPages:t.dsPages,search:t.search,showEntries:t.showEntries,setActive:t.setActive}})}const T=m(F,[["render",R]]),A={setup(){const n=e.inject("dsResultsNumber"),s=e.inject("dsFrom"),a=e.inject("dsTo"),t=e.computed(()=>n.value!==0?s.value+1:0),r=e.computed(()=>a.value>=n.value?n.value:a.value);return{datasetI18n:e.inject("datasetI18n"),dsResultsNumber:n,showing:t,showingTo:r}}};function V(n,s,a,t,r,i){return e.openBlock(),e.createElementBlock("div",null,e.toDisplayString(t.datasetI18n.showing)+" "+e.toDisplayString(t.showing)+" "+e.toDisplayString(t.datasetI18n.showingTo)+" "+e.toDisplayString(t.showingTo)+" "+e.toDisplayString(t.datasetI18n.showingOf)+" "+e.toDisplayString(t.dsResultsNumber)+" "+e.toDisplayString(t.datasetI18n.showingEntries),1)}const C=m(A,[["render",V]]),O={props:{tag:{type:String,default:"div"}},setup(){const n=e.computed(()=>{const s=[];for(let a=e.inject("dsFrom").value;a<e.inject("dsTo").value;a++)s.push(a);return s});return{dsData:e.inject("dsData"),dsRows:e.inject("dsRows"),indexes:n}}};function L(n,s,a,t,r,i){return e.openBlock(),e.createBlock(e.resolveDynamicComponent(a.tag),null,{default:e.withCtx(()=>[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.dsRows,(o,l)=>e.renderSlot(n.$slots,"default",{row:t.dsData[o],rowIndex:o,index:t.indexes[l]})),256)),t.dsRows.length?e.createCommentVNode("",!0):e.renderSlot(n.$slots,"noDataFound",{key:0})]),_:3})}const M=m(O,[["render",L]]),z={setup(){const n=e.ref(D),s=e.inject("dsPage"),a=e.inject("dsPagecount"),t=e.computed(()=>s.value===1),r=e.computed(()=>s.value===a.value||a.value===0);return{datasetI18n:e.inject("datasetI18n"),setActive:e.inject("setActive"),dsPages:e.inject("dsPages"),dsPagecount:a,dsPage:s,morePages:n,disabledPrevious:t,disabledNext:r}}},K={class:"pagination"},q=["tabindex","aria-disabled"],G=["onClick"],W={key:1,class:"page-link"},H=["tabindex","aria-disabled"];function J(n,s,a,t,r,i){return e.openBlock(),e.createElementBlock("ul",K,[e.createElementVNode("li",{class:e.normalizeClass(["page-item",t.disabledPrevious&&"disabled"])},[e.createElementVNode("a",{class:"page-link",href:"#",tabindex:t.disabledPrevious?"-1":null,"aria-disabled":t.disabledPrevious?"true":null,onClick:s[0]||(s[0]=e.withModifiers(o=>t.setActive(t.dsPage!==1&&t.dsPagecount!==0?t.dsPage-1:t.dsPage),["prevent"]))},e.toDisplayString(t.datasetI18n.previous),9,q)],2),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.dsPages,(o,l)=>(e.openBlock(),e.createElementBlock("li",{key:l,class:e.normalizeClass(["page-item",o===t.dsPage&&"active",o===t.morePages&&"disabled"])},[o!==t.morePages?(e.openBlock(),e.createElementBlock("a",{key:0,class:"page-link",href:"#",onClick:e.withModifiers(u=>t.setActive(o),["prevent"])},e.toDisplayString(o),9,G)):(e.openBlock(),e.createElementBlock("span",W,e.toDisplayString(o),1))],2))),128)),e.createElementVNode("li",{class:e.normalizeClass(["page-item",t.disabledNext&&"disabled"])},[e.createElementVNode("a",{class:"page-link",href:"#",tabindex:t.disabledNext?"-1":null,"aria-disabled":t.disabledNext?"true":null,onClick:s[1]||(s[1]=e.withModifiers(o=>t.setActive(t.dsPage!==t.dsPagecount&&t.dsPagecount!==0?t.dsPage+1:t.dsPage),["prevent"]))},e.toDisplayString(t.datasetI18n.next),9,H)],2)])}const Q=m(z,[["render",J]]),U={props:{dsSearchPlaceholder:{type:String,default:""},wait:{type:Number,default:0}},setup(n){const s=e.inject("search"),a=e.ref(""),t=x(r=>{s(r)},n.wait);return{dsSearch:a,input:t}}},X=["placeholder","value"];function Y(n,s,a,t,r,i){return e.openBlock(),e.createElementBlock("input",{type:"text",placeholder:a.dsSearchPlaceholder,class:"form-control",value:t.dsSearch,onInput:s[0]||(s[0]=o=>t.input(o.target.value))},null,40,X)}const Z=m(U,[["render",Y]]),v={props:{dsShowEntries:{type:Number,default:10},dsShowEntriesLovs:{type:Array,default:()=>[{value:5,text:5},{value:10,text:10},{value:25,text:25},{value:50,text:50},{value:100,text:100}]}},emits:["changed"],setup(n,{emit:s}){const a=e.inject("showEntries"),t=r=>{s("changed",Number(r.target.value)),a(Number(r.target.value))};return a(Number(n.dsShowEntries)),{datasetI18n:e.inject("datasetI18n"),change:t}}},$={class:"form-inline"},ee=["value"],te=["value"];function ne(n,s,a,t,r,i){return e.openBlock(),e.createElementBlock("div",$,[e.createElementVNode("label",null,e.toDisplayString(t.datasetI18n.show),1),e.createElementVNode("select",{value:a.dsShowEntries,class:"form-control mr-1 ml-1",onChange:s[0]||(s[0]=(...o)=>t.change&&t.change(...o))},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(a.dsShowEntriesLovs,o=>(e.openBlock(),e.createElementBlock("option",{key:o.value,value:o.value},e.toDisplayString(o.text),9,te))),128))],40,ee),e.createElementVNode("label",null,e.toDisplayString(t.datasetI18n.entries),1)])}const ae=m(v,[["render",ne]]);d.Dataset=T,d.DatasetInfo=C,d.DatasetItem=M,d.DatasetPager=Q,d.DatasetSearch=Z,d.DatasetShow=ae,Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});
