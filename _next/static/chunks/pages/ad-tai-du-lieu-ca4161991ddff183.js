(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[390],{69979:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ad-tai-du-lieu",function(){return n(57513)}])},91046:function(t,e,n){"use strict";var r=n(85893);n(67294);e.Z=function(){return(0,r.jsx)("div",{className:"page-is-loading",children:(0,r.jsx)("img",{src:"/static/images/loading.gif",style:{height:"160px",marginLeft:"5px",marginRight:"15px"}})})}},57513:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return S},default:function(){return R}});var r=n(85893),o=n(67294),c=n(56225),a=(n(8539),n(34051)),i=n.n(a),u=n(96486),s=n.n(u),l=n(38585),f=(n(91046),n(16379),n(22582),n(9669)),h=n.n(f),d=n(6077);n(11310);function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function m(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function y(t,e,n,r,o,c,a){try{var i=t[c](a),u=i.value}catch(s){return void n(s)}i.done?e(u):Promise.resolve(u).then(r,o)}function b(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var c=t.apply(e,n);function a(t){y(c,r,o,a,i,"next",t)}function i(t){y(c,r,o,a,i,"throw",t)}a(void 0)}))}}function v(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function g(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function x(t){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function w(t,e){return!e||"object"!==_(e)&&"function"!==typeof e?m(t):e}function P(t,e){return(P=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function j(t){return function(t){if(Array.isArray(t))return p(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"===typeof t)return p(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var _=function(t){return t&&"undefined"!==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};function C(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=x(t);if(e){var o=x(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return w(this,n)}}var E=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&P(t,e)}(a,t);var e,n,o,c=C(a);function a(t){var e;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),g(m(e=c.call(this,t)),"setMaCoPhieuGia",(function(t){e.setState(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){g(t,e,n[e])}))}return t}({},e.state,{maCoPhieuGia:t}))}));var n=m(e);g(m(e),"exportExcelGia",b(i().mark((function t(){var e,r,o,c,a,u,f,p,m,y;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.state.maCoPhieuGia,r="".concat(d.Q4,"StartDate=2007-01-01&EndDate=").concat((0,l.getCurrentDateyyyy_MM_dd)(),"&x=1&PageSize=6000&Symbol=").concat(e),o=[],t.next=5,h().get(r);case 5:(c=t.sent).data&&(o=s().get(c.data,"Data.Data",[])),a="STT, Ng\xe0y, Gi\xe1, Gi\xe1 \u0110i\u1ec1u Ch\u1ec9nh",u="",o&&(u=o.map((function(t,e){var n=t.Ngay,r=t.GiaDieuChinh,o=t.GiaDongCua;return"".concat(e,",").concat(n,",").concat(o,",").concat(r)}))),console.log("Du lieu response",o,u,"response.data",c.data.Data.Data),f=[a].concat(j(u)).join("\n"),p=new Blob(["\ufeff"+f],{type:"text/csv;charset=utf-8;"}),m=URL.createObjectURL(p),(y=document.createElement("a")).href=m,y.setAttribute("download","GiaCoPhieu".concat(e,".csv")),document.body.appendChild(y),y.click(),document.body.removeChild(y);case 20:case"end":return t.stop()}}),t)}))));var r=m(e);return g(m(e),"exportExcelDinhGia",b(i().mark((function t(){var e,n,o,c,a,u,s,l,f,p,m,y,b,v,g,x,w,P,_,C,E;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=r.state.maCoPhieuGia,n="".concat(d.aV,"pepb/").concat(e),[],t.next=5,h().get(n);case 5:if((o=t.sent).data){for(c=o.data,a=c.ED,u=c.PER,s=c.BD,l=c.PBR,f=c.SD,p=c.PSR,console.log("exportExcel",e),m="PE date, PE, PB date, PB, PS date, PS",y=Math.max(a.length,s.length,f.length),b=y-a.length,v=y-s.length,g=y-f.length,w=0;w<b;w++)a.unshift(""),u.unshift("");for(w=0;w<v;w++)s.unshift(""),l.unshift("");for(w=0;w<g;w++)f.unshift(""),p.unshift("");for(x=[],w=0;w<y;w++)x.push("".concat(a[w],",").concat(u[w],",").concat(s[w],",").concat(l[w],",").concat(f[w],",").concat(p[w])),console.log("".concat(a[w],",").concat(u[w],",").concat(s[w],",").concat(l[w],",SD[i],PSR,").concat(f[w],",").concat(p[w]));P=[m].concat(j(x)).join("\n"),_=new Blob(["\ufeff"+P],{type:"text/csv;charset=utf-8;"}),C=URL.createObjectURL(_),(E=document.createElement("a")).href=C,E.setAttribute("download","".concat(e,"_PePbPs.csv")),document.body.appendChild(E),E.click(),document.body.removeChild(E)}case 7:case"end":return t.stop()}}),t)})))),e.state={maCoPhieuGia:""},e}return e=a,(n=[{key:"componentWillReceiveProps",value:function(t){}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var t=this.state.maCoPhieuGia,e=this.props.userLoginData;if("Az@4Adm"!==s().get(e,"role",""))return(0,r.jsx)("h2",{children:"B\u1ea1n kh\xf4ng c\xf3 quy\u1ec1n xem trang n\xe0y"});try{var n=this;return(0,r.jsxs)("div",{className:"divCol divCenter",style:{width:"100%"},children:[(0,r.jsx)("h2",{className:"boxTitle",children:"T\u1ea3i d\u1eef li\u1ec7u"}),(0,r.jsx)("div",{style:{borderRadius:"10px",width:"100%"},children:(0,r.jsxs)("div",{className:"divRow",children:[(0,r.jsx)("label",{children:"M\xe3 c\u1ed5 phi\u1ebfu"}),(0,r.jsx)("input",{value:t,onChange:function(t){return n.setMaCoPhieuGia(t.target.value)},style:{margin:"0px 10px 3px 5px"}}),(0,r.jsxs)("button",{className:"btnXanh",onClick:function(){return n.exportExcelGia()},style:{height:"28px"},children:[(0,r.jsx)("img",{src:"./static/images/icon_download.png",alt:"Excel",className:"icon_in_button"}),"Xu\u1ea5t D\u1eef Li\u1ec7u Gi\xe1"]}),(0,r.jsxs)("button",{className:"btnXanh",onClick:function(){return n.exportExcelDinhGia()},style:{height:"28px"},children:[(0,r.jsx)("img",{src:"./static/images/icon_download.png",alt:"Excel",className:"icon_in_button"}),"Xu\u1ea5t D\u1eef Li\u1ec7u \u0110\u1ecbnh Gi\xe1"]})]})})]})}catch(o){return console.log("error",o),(0,r.jsx)(Error,{title:"Danh s\xe1ch",content:o+""})}}}])&&v(e.prototype,n),o&&v(e,o),a}(o.Component),O=(0,c.$j)((function(t){return{userLoginData:t.userReducer.userLoginData,nowTime:t.homeReducer.nowTime}}),(function(t){return{}}))(E),D=(n(53948),n(67924)),S=!0,R=function(){var t=(0,c.I0)();return(0,o.useEffect)((function(){}),[t]),(0,r.jsx)(D.Z,{navmenu:!1,container:!1,children:(0,r.jsx)(O,{className:"text-muted small"})})}}},function(t){t.O(0,[523,260,868,547,924,539,774,888,179],(function(){return e=69979,t(t.s=e);var e}));var e=t.O();_N_E=e}]);