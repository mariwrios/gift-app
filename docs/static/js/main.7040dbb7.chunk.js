(this["webpackJsonpgif-app"]=this["webpackJsonpgif-app"]||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n(7),c=n.n(r),i=n(2),s=n(9),u=n(0),o=function(t){var e=t.setCategories,n=Object(a.useState)(""),r=Object(i.a)(n,2),c=r[0],o=r[1];return Object(u.jsx)("form",{onSubmit:function(t){t.preventDefault(),c.trim().length>2&&e((function(t){return[c].concat(Object(s.a)(t))}))},children:Object(u.jsx)("input",{placeholder:"Buscar...",type:"text",value:c,onChange:function(t){o(t.target.value)}})})},j=n(10),d=n(6),b=n.n(d),l=n(8),p=function(){var t=Object(l.a)(b.a.mark((function t(e){var n,a,r,c,i;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?api_key=iG2ZzbLSGUbkJjOp1d6U582vDPDJUqpT&q=".concat(e,"&limit=12"),t.next=3,fetch(n);case 3:return a=t.sent,t.next=6,a.json();case 6:return r=t.sent,c=r.data,i=c.map((function(t){return{id:t.id,title:t.title,url:t.images.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(t){var e=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(e,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){p(t).then((function(t){return c({data:t,loading:!1})}))}),[t]),r},O=function(t){var e=t.title,n=t.url;return Object(u.jsxs)("div",{className:"card animate__animated animate__fadeIn animate__delay-1s\t1s",children:[Object(u.jsx)("img",{src:n,alt:e}),Object(u.jsx)("p",{children:e})]})},h=function(t){var e=t.category,n=f(e),a=n.loading,r=n.data;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:e}),a&&"Loading. . .",Object(u.jsx)("div",{className:"container__cards",children:r.map((function(t){return Object(u.jsx)(O,Object(j.a)({},t),t.id)}))})]})},m=function(){var t=Object(a.useState)(["Sakura Card Captor"]),e=Object(i.a)(t,2),n=e[0],r=e[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"GifApp"}),Object(u.jsx)(o,{setCategories:r}),Object(u.jsx)("hr",{}),Object(u.jsx)("ol",{children:n.map((function(t){return Object(u.jsx)(h,{category:t},t)}))})]})};n(17);c.a.render(Object(u.jsx)(m,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.7040dbb7.chunk.js.map