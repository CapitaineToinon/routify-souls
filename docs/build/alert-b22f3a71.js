import{_ as n,a as t,b as s,i as e,s as o,c as a,S as i,f as r,h as u,d as c,F as l,p as d,q as f,e as p,E as v,g as $,u as y,j as m,x as h,y as b,z as g,t as j,Q as w}from"./main-3cec1253.js";var x=function(n){return{}},q=function(n){return{}};function z(n){var t,s,e=n[7].header,o=v(e,n,n[6],q),a=o||function(n){var t;return{c:function(){t=j(n[0])},m:function(n,s){c(n,t,s)},p:function(n,s){1&s&&w(t,n[0])},d:function(n){n&&p(t)}}}(n);return{c:function(){t=r("div"),a&&a.c(),u(t,"class","title font-bold rounded-t px-4 py-2 svelte-alj0l6")},m:function(n,e){c(n,t,e),a&&a.m(t,null),s=!0},p:function(n,t){o?o.p&&64&t&&l(o,e,n,n[6],t,x,q):a&&a.p&&1&t&&a.p(n,t)},i:function(n){s||(d(a,n),s=!0)},o:function(n){f(a,n),s=!1},d:function(n){n&&p(t),a&&a.d(n)}}}function A(n){var t,s,e,o,a,i,j=!n[1]&&z(n),w=n[7].default,x=v(w,n,n[6],null);return{c:function(){t=r("div"),j&&j.c(),s=$(),e=r("div"),o=r("p"),x&&x.c(),u(e,"class",a="content border px-4 py-3 "+(n[1]?"rounded":"border-t-0 rounded-b")+" svelte-alj0l6"),u(t,"role","alert"),u(t,"class","overflow-hidden w-full svelte-alj0l6"),y(t,"info",n[4]),y(t,"danger",n[2]),y(t,"warning",n[3]),y(t,"success",n[5])},m:function(n,a){c(n,t,a),j&&j.m(t,null),m(t,s),m(t,e),m(e,o),x&&x.m(o,null),i=!0},p:function(n,o){var r=h(o,1)[0];n[1]?j&&(b(),f(j,1,1,(function(){j=null})),g()):j?(j.p(n,r),2&r&&d(j,1)):((j=z(n)).c(),d(j,1),j.m(t,s)),x&&x.p&&64&r&&l(x,w,n,n[6],r,null,null),(!i||2&r&&a!==(a="content border px-4 py-3 "+(n[1]?"rounded":"border-t-0 rounded-b")+" svelte-alj0l6"))&&u(e,"class",a),16&r&&y(t,"info",n[4]),4&r&&y(t,"danger",n[2]),8&r&&y(t,"warning",n[3]),32&r&&y(t,"success",n[5])},i:function(n){i||(d(j),d(x,n),i=!0)},o:function(n){f(j),f(x,n),i=!1},d:function(n){n&&p(t),j&&j.d(),x&&x.d(n)}}}function E(n,t,s){var e,o,a,i,r=t.type,u=void 0===r?"info":r,c=t.headless,l=void 0!==c&&c,d=t.$$slots,f=void 0===d?{}:d,p=t.$$scope;return n.$$set=function(n){"type"in n&&s(0,u=n.type),"headless"in n&&s(1,l=n.headless),"$$scope"in n&&s(6,p=n.$$scope)},n.$$.update=function(){1&n.$$.dirty&&s(2,e="danger"===u),1&n.$$.dirty&&s(3,o="warning"===u),1&n.$$.dirty&&s(4,a="info"===u),1&n.$$.dirty&&s(5,i="success"===u)},[u,l,e,o,a,i,p,f]}var F=function(r){n(c,i);var u=t(c);function c(n){var t;return s(this,c),t=u.call(this),e(a(t),n,E,A,o,{type:0,headless:1}),t}return c}();export{F as A};