(function(e){function t(t){for(var o,a,i=t[0],l=t[1],s=t[2],p=0,d=[];p<i.length;p++)a=i[p],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);c&&c(t);while(d.length)d.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],o=!0,i=1;i<n.length;i++){var l=n[i];0!==r[l]&&(o=!1)}o&&(u.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={app:0},u=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var c=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"0d57":function(e,t,n){},2576:function(e,t,n){"use strict";n("0d57")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Alunos")],1)},u=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"title"},[n("Titulo",{attrs:{texto:"Cadastro de alunos"}})],1),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.nome,expression:"nome"}],attrs:{type:"text",placeholder:"Nome do Aluno"},domProps:{value:e.nome},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addAluno()},input:function(t){t.target.composing||(e.nome=t.target.value)}}}),n("button",{staticClass:"btn btnInput",on:{click:function(t){return e.addAluno()}}},[e._v("Cadastrar")])]),n("table",[e._m(0),e.alunos.length?n("tbody",e._l(e.alunos,(function(t,o){return n("tr",{key:o},[n("td",[e._v(e._s(o+1))]),n("td",[e._v(e._s(t.nome)+" "+e._s(t.sobrenome))]),n("td",[n("button",{staticClass:"btn btn_Danger",on:{click:function(n){return e.remover(t)}}},[e._v("Remover")])])])})),0):e._e(),e.alunos.length?e._e():n("tfoot",[n("br"),e._v(" Nenhum Aluno Encontrado ")])])])},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("thead",[n("th",[e._v("Matricula")]),n("th",[e._v("Nome")]),n("th",[e._v("Opcoes")])])}],l=(n("c975"),n("a434"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v(e._s(e.texto))])])}),s=[],c={props:{texto:String}},p=c,d=n("2877"),f=Object(d["a"])(p,l,s,!1,null,"3f391490",null),v=f.exports,m={components:{Titulo:v},data:function(){return{titulo:"Cadastro de alunos",nome:"",alunos:[{id:1,nome:"Igor",sobrenome:"Bryan"},{id:2,nome:"Bryan",sobrenome:"Igor"},{id:3,nome:"Cruz",sobrenome:"Marinho"}]}},props:{},methods:{addAluno:function(){var e={nome:this.nome};this.alunos.push(e),this.nome=""},remover:function(e){var t=this.alunos.indexOf(e);this.alunos.splice(t,1)}}},h=m,b=(n("2576"),Object(d["a"])(h,a,i,!1,null,"6ca1a10a",null)),_=b.exports,y={name:"App",components:{Alunos:_}},g=y,O=(n("034f"),Object(d["a"])(g,r,u,!1,null,null,null)),x=O.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(x)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.57aa1180.js.map