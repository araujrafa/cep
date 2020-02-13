(this.webpackJsonpcep=this.webpackJsonpcep||[]).push([[0],{19:function(n,e,t){n.exports=t(30)},30:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(8),c=t.n(o),i=t(5),u=t.n(i),l=t(9),f=t(3),s=t(1),m=t(2);function p(){var n=Object(s.a)(["\n  background-color: ",";\n  border: 0;\n  border-radius: 2px;\n  color: ",";\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: bold;\n  padding: 5px 15px;\n"]);return p=function(){return n},n}var b=m.a.button(p(),(function(n){return n.primary&&"#50a5de"}),(function(n){return n.primary&&"#fff"})),d=function(n){return a.a.createElement(b,n,n.children)};function h(){var n=Object(s.a)(["\n  background-color: ",";\n  padding: 20px;\n  margin: 0 auto;\n  max-width: 600px;\n"]);return h=function(){return n},n}var v=m.a.div(h(),(function(n){return n.gray&&"#ededed"})),g=function(n){return a.a.createElement(v,n,n.children)},j=t(13);function w(){var n=Object(s.a)(["\n  color: #9b9b9b;\n  font-size: 12px;\n  min-width: 64px;\n"]);return w=function(){return n},n}var x=Object(m.a)(j.a)(w()),E=function(n){return a.a.createElement(x,n)};function O(){var n=Object(s.a)(["\n  position: relative;\n  display: block;\n  width: 100%;\n  min-height: 300px;\n  padding: 0;\n  overflow: hidden;\n"]);return O=function(){return n},n}function y(){var n=Object(s.a)(["\n  position: absolute;\n  border: 0;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n"]);return y=function(){return n},n}var C=m.a.iframe(y());C.Container=m.a.div(O());var k=C,S=function(n){var e=n.cep;return a.a.createElement(k.Container,null,a.a.createElement(k,{marginWidth:"0",marginHeight:"0",frameBorder:"0",scrolling:"auto",src:"https://www.google.com.br/maps?q=".concat(e,",%20Brasil&output=embed"),allowFullScreen:!0}))};function z(){var n=Object(s.a)(["\n  cursor: pointer;\n  float: right;\n  font-family: 'Arial';\n"]);return z=function(){return n},n}function B(){var n=Object(s.a)(["\n  display: ",";\n"]);return B=function(){return n},n}var A=Object(m.a)(g)(B(),(function(n){return!n.show&&"none"}));A.Close=m.a.a(z());var F=A,W=function(n){var e=n.show,t=n.handleClose,r=n.children;return a.a.createElement(F,{show:e},a.a.createElement(F.Close,{onClick:t}," x"),r)};function J(){var n=Object(s.a)(["\n  color: ",";\n  font-family: Arial;\n  font-size: ",";\n  margin: ",";\n"]);return J=function(){return n},n}var P=m.a.p(J(),(function(n){return n.gray&&"#9b9b9b"}),(function(n){return n.small?"10px":"14px"}),(function(n){return n.small&&0})),T=function(n){return a.a.createElement(P,n,n.children)};function q(){var n=Object(s.a)(["\n  font-family: Arial;\n  font-weight: bold;\n  font-size: ","\n"]);return q=function(){return n},n}var D=m.a.h1(q(),(function(n){return n.small?"14px":"24px"})),H=function(n){return a.a.createElement(D,n,n.children)};function I(){var n=Object(s.a)(["\n  display: block;\n  font-family: Arial;\n  font-size: 10px;\n  margin: 0;\n  min-height: 10px;\n"]);return I=function(){return n},n}function $(){var n=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 200px;\n"]);return $=function(){return n},n}function G(){var n=Object(s.a)([""]);return G=function(){return n},n}var K=m.a.div(G());K.Form=m.a.div($()),K.SmallText=m.a.small(I());var L=K,M=t(15),N=t(16),Q=t(17),R=t.n(Q),U=function(){function n(){Object(M.a)(this,n)}return Object(N.a)(n,[{key:"getCepCb",value:function(n,e){return R()("".concat("https://viacep.com.br","/ws/").concat(n,"/json/?callback=").concat(e),{jsonpCallbackFunction:e}).then((function(n){return n.json()}))}}]),n}(),V=function(){var n=new U,e=Object(r.useState)(!1),t=Object(f.a)(e,2),o=t[0],c=t[1],i=Object(r.useState)(""),s=Object(f.a)(i,2),m=s[0],p=s[1],b=Object(r.useState)(null),h=Object(f.a)(b,2),v=h[0],j=h[1],w=Object(r.useState)(""),x=Object(f.a)(w,2),O=x[0],y=x[1],C=function(){var e=Object(l.a)(u.a.mark((function e(t){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!(m.length<7)){e.next=5;break}return y("Por favor, preencha o cep completo."),c(!1),e.abrupt("return",null);case 5:return e.next=7,n.getCepCb(m,"myfn");case 7:(r=e.sent).erro?(y("Cep invalido."),c(!1)):(j(r),c(!0),p(""),y(""));case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return a.a.createElement(L,null,a.a.createElement(g,{gray:!0},a.a.createElement(H,{small:!0},"Consultar"),a.a.createElement(L.Form,null,a.a.createElement(T,{gray:!0},"CEP"),a.a.createElement(E,{mask:"11111-111",name:"cep",value:m,onChange:function(n){return p(n.target.value)},type:"text"}),a.a.createElement(d,{primary:!0,onClick:C},"Buscar")),a.a.createElement(L.SmallText,null,O)),a.a.createElement(W,{show:o,handleClose:function(){return c(!1)}},a.a.createElement(H,null,v&&v.logradouro),a.a.createElement(T,null,v&&v.bairro),a.a.createElement(T,null,v&&v.localidade),a.a.createElement(T,null,v&&v.cep),a.a.createElement(S,{cep:v&&v.cep})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[19,1,2]]]);
//# sourceMappingURL=main.2d18de5d.chunk.js.map