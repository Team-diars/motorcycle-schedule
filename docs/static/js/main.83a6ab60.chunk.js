(this["webpackJsonpmotorcycle-schedule"]=this["webpackJsonpmotorcycle-schedule"]||[]).push([[0],{19:function(n,t,e){},25:function(n,t,e){"use strict";e.r(t);var r=e(1),c=e(0),a=e(10),i=e.n(a),o=(e(19),e(3)),u=e(2),s=e(7),l=e.n(s),f=e(4);function d(){var n=Object(o.a)(["\n  padding:10px;\n  width: 100px;\n"]);return d=function(){return n},n}var j=function(n){var t=n.hour,e=n.handleQuantity,a=n.isDisabled,i=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(c.useState)(n),e=Object(u.a)(t,2),r=e[0],a=e[1],i=r.myColor;return[r,function(){a({myColor:"#91E72B"===i?"#7B252A":"#91E72B"})}]}({myColor:"#91E72B"}),o=Object(u.a)(i,2),s=o[0],l=o[1],f=s.myColor;return Object(r.jsx)(h,{className:"btn m-2",onClick:function(){l(),e(f)},style:{backgroundColor:f},disabled:!("#91E72B"!==f||!a),children:t})},h=f.a.button(d());function m(){var n=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return m=function(){return n},n}function b(){var n=Object(o.a)(["\nheight:100vh;\nwidth:50vw;\n"]);return b=function(){return n},n}function x(){var n=Object(o.a)(["\n  @media (max-width:480px){\n    font-size:18px;\n  }\n"]);return x=function(){return n},n}var v=function(){var n=Object(c.useState)(8),t=Object(u.a)(n,2),e=t[0],a=t[1],i=Object(c.useState)(!1),o=Object(u.a)(i,2),s=o[0],f=o[1],d=[];new Array(13).fill().forEach((function(n,t){var e=l()({hour:8+t}).format("h:mm A"),r=l()({hour:8+t,minute:30}).format("h:mm A");d.push(e),12!==t&&d.push(r)}));var h=function(n){var t=e<8?e-1:8;return"#7B252A"===n?(m(e<8?e+1:8),a(e<8?e+1:8)):(m(t),a(e>0?e-1:0))},m=function(n){return f(0===n)};return Object(r.jsxs)(y,{className:"d-flex justify-content-center flex-column align-items-center",children:[Object(r.jsxs)(O,{className:"mt-3",children:["Free Motorcyclist: ",e]}),Object(r.jsx)(p,{className:"d-flex flex-row flex-wrap justify-content-center",children:d.map((function(n,t){return Object(r.jsx)(j,{hour:n,handleQuantity:h,isDisabled:s},t)}))})]})},O=f.a.h1(x()),y=f.a.div(b()),p=f.a.div(m()),w=(e(23),e(24),function(){return Object(r.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:Object(r.jsx)(v,{})})});i.a.render(Object(r.jsx)(w,{}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.83a6ab60.chunk.js.map