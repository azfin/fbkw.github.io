(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[559],{51132:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user-waiting-list",function(){return n(54548)}])},97897:function(e,t,n){"use strict";n(85893),n(67294),n(84059)},91046:function(e,t,n){"use strict";var r=n(85893);n(67294);t.Z=function(){return(0,r.jsx)("div",{className:"page-is-loading",children:(0,r.jsx)("img",{src:"/static/images/loading.gif",style:{height:"160px",marginLeft:"5px",marginRight:"15px"}})})}},77582:function(e,t,n){"use strict";var r=n(85893),o=(n(67294),{container:{display:"flex",flexDirection:"row",margin:"0 auto"},label:{fontSize:"12px"},input:{fontSize:"12px",width:"80px"}});t.Z=function(e){var t=e.value,n=e.onChange;return(0,r.jsx)("div",{style:o.container,children:(0,r.jsx)("input",{id:"money-input",type:"text",value:t,onChange:function(e){var t=e.target.value.replace(/[^0-9]/g,""),r=t.replace(/\B(?=(\d{3})+(?!\d))/g,",");n(r)},style:o.input,placeholder:"0"})})}},68509:function(e,t,n){"use strict";var r=n(67294),o=n(56225),i=(n(96486),n(94872)),c=n(65578);function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return!t||"object"!==f(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}var h=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(u,e);var t,n,r,o=d(u);function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=o.call(this,e)).state={},t}return t=u,(n=[{key:"componentWillReceiveProps",value:function(e){}},{key:"componentDidMount",value:function(){null!==this.props.userLoginData&&(0,c.bh)().dispatch((0,i.Ei)())}},{key:"render",value:function(){return""}}])&&a(t.prototype,n),r&&a(t,r),u}(r.Component),p={getNowTime:i.Ei};t.Z=(0,o.$j)((function(e){return{nowTime:e.homeReducer.nowTime}}),p)(h)},54548:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return D},default:function(){return H}});var r=n(85893),o=n(67294),i=n(56225),c=n(96486),a=n.n(c),u=n(38585),s=n(91046),l=(n(97897),n(11310),n(22582)),f=n(77582);function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return!t||"object"!==b(t)&&"function"!==typeof t?d(e):t}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function g(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=p(e);if(t){var o=p(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return m(this,n)}}var v=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(c,e);var t,n,o,i=g(c);function c(e){var t,n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),t=i.call(this,e),n=d(t),o=function(e){t.setState({sotien:e})},(r="handleChange")in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o;var a=t.props,s=a.item;a.index,a.handleRegisterClick,a.handleXoaClick;return t.state={sotien:(0,u.formatNumbers)(s.cpbs,0)},t}return t=c,(n=[{key:"componentWillReceiveProps",value:function(e){}},{key:"render",value:function(){try{var e=this.props,t=e.item,n=e.index,o=e.handleRegisterClick,i=e.handleXoaClick,c=this.state.sotien;console.log("render item",t,"sotien",c);var a=(0,u.isEmptyOrBlank)(c)?0:Number(c.replaceAll(",","")),s=t.uid,d=t.em,h=t.ht,p=t.m,m=t.curcode,y=t.curky,b=t.curcpbs,g=t.curendtime,v=t.code,x=t.ky,j=t.regtime,k=t.mkm,N=t.cpbs;return console.log("DoiPheDuyetItem",t),(0,r.jsxs)("tr",{className:"".concat(t.change>=0?"colorTot":"colorXau"),children:[(0,r.jsx)("td",{className:"colNumberValue",children:n+1}),(0,r.jsx)("td",{className:"colTen",children:t.ht}),(0,r.jsx)("td",{className:"colTen",children:(0,r.jsx)("a",{href:"/azu-inf?user_email=".concat(t.em),children:t.em})}),(0,r.jsx)("td",{className:"colTen",children:t.m||"-"}),(0,r.jsxs)("td",{className:"colTen",children:[l.Cx.SHORTCODE[m],"-",l.Cx.DISPLAYTEXT[y],"-",(0,u.convertDMYHHMM2DDMM)(g)]}),(0,r.jsx)("td",{className:"colTen",children:j}),(0,r.jsx)("td",{className:"colTen",children:t.ngt}),(0,r.jsx)("td",{className:"colTen",children:l.Cx.DISPLAYTEXT[t.code]}),(0,r.jsx)("td",{className:"colTen",children:l.Cx.DISPLAYTEXT[t.ky]}),(0,r.jsx)("td",{className:"colTen",children:t.mkm}),(0,r.jsx)("td",{className:"colTen",children:(0,u.formatNumbers)(t.cpbs)}),(0,r.jsx)("td",{className:"colTen",children:(0,r.jsx)(f.Z,{value:c,onChange:this.handleChange})}),(0,r.jsxs)("td",{className:"colTen",children:[(0,u.isEmptyOrBlank)(s)&&(0,r.jsx)("a",{href:"/dang-ky-tai-khoan",target:"_blank",title:"T\u1ea1o t\xe0i kho\u1ea3n xong t\u1ea1o g\xf3i r\u1ed3i g\u1eedi th\xf4ng tin cho Kh\xe1ch",children:"T\u1ea1o t\xe0i kho\u1ea3n"}),!(0,u.isEmptyOrBlank)(s)&&(0,r.jsx)("button",{className:"",style:{width:"73px"},onClick:function(){return o({uid:s,em:d,ht:h,m:p,curcode:m,curky:y,curcpbs:b,curendtime:g,code:v,ky:x,regtime:j,mkm:k,cpbs:N,sotien:a})},children:"Ph\xea duy\u1ec7t"}),(0,r.jsx)("button",{className:"",onClick:function(){return i({uid:s,code:v,em:d,ky:x,regtime:j})},style:{marginLeft:"5px"},children:"Hu\u1ef7"})]})]})}catch(T){return console.log("error",T),(0,r.jsx)(Error,{title:"Bi\u1ec3u \u0111\u1ed3",content:T+""})}}}])&&h(t.prototype,n),o&&h(t,o),c}(o.Component),x=n(89164),j=n(65578);function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function N(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function T(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t){return!t||"object"!==C(t)&&"function"!==typeof t?k(e):t}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var C=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function R(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=w(e);if(t){var o=w(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return _(this,n)}}var E=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(c,e);var t,n,o,i=R(c);function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),T(k(t=i.call(this,e)),"handleApproveClick",(function(e){var n=e.uid,r=e.em,o=e.ht,i=e.m,c=e.curcode,a=e.curky,u=e.curcpbs,s=e.curendtime,f=e.code,d=e.ky,h=e.regtime,p=e.mkm,m=e.cpbs,y=e.sotien,b=t.props,g=(b.userWaitingList,b.userLoginData),v=b.nowTime,k=(g.role,g.email);g.mobile,g.displayName;console.log("uid, code, ky, regTime",n,f,d,h,y);var N=(0,l.U4)(v,c,a,u,s,f,d,p),T=N.endtime,w=(N.giaTriConLai,N.soNgayConLaiGoiHienTai,N.giaGoc,N.khuyenMai);N.chiPhiBoSung,N.msg;(0,j.bh)().dispatch((0,x.fj)({uid:n,em:r,ht:o,m:i,nowTime:v,code:f,ky:d,regtime:v,endtime:T,mkm:p,cpbs:m,sotien:y,approveuser:k,nguoiKhuyenMai:0===w?"":"CTY-a"}))})),T(k(t),"handleXoaClick",(function(e){var n=e.uid,r=e.code,o=e.em,i=e.ky,c=e.regtime,a=t.props,u=(a.userWaitingList,a.userLoginData);u.role,u.email,u.mobile,u.displayName;console.log("handleXoaClick uid, code, ky, regTime",n,r,i,c),(0,j.bh)().dispatch((0,x.ol)({uid:n,code:r,em:o,ky:i,regtime:c}))})),t}return t=c,(n=[{key:"componentWillReceiveProps",value:function(e){}},{key:"componentDidMount",value:function(){(0,j.bh)().dispatch((0,x.hE)())}},{key:"render",value:function(){var e=this,t=this.props,n=t.userWaitingList,o=t.userLoginData;if("Az@4Adm"!==a().get(o,"role",""))return(0,r.jsx)("h2",{children:"B\u1ea1n kh\xf4ng c\xf3 quy\u1ec1n xem trang n\xe0y"});if(!n)return(0,r.jsx)(s.Z,{});var i=n.map((function(t,n){return(0,r.jsx)(v,{index:n,handleRegisterClick:e.handleApproveClick,handleXoaClick:e.handleXoaClick,item:t},n)}));try{return(0,r.jsxs)("div",{className:"divCol divCenter",style:{width:"100%"},children:[(0,r.jsx)("h2",{className:"boxTitle",children:"Danh S\xe1ch Ng\u01b0\u1eddi \u0110\u0103ng K\xfd Ch\u1edd Duy\u1ec7t"}),(0,r.jsx)("div",{style:{borderRadius:"10px",width:"100%"},children:(0,r.jsx)("table",{style:{borderRadius:"10px",width:"100%"},children:(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{className:"trHead",children:[(0,r.jsx)("td",{className:"tdHeadLeft",style:{borderRadius:"10px 0px 0px 0px"},children:"STT"}),(0,r.jsx)("td",{className:"tdHeadLeft",children:"T\xean"}),(0,r.jsx)("td",{className:"tdHeadLeft",children:"Email"}),(0,r.jsx)("td",{className:"tdHeadLeft",children:"\u0110i\u1ec7n tho\u1ea1i"}),(0,r.jsx)("td",{className:"tdHeadLeft",children:"Hi\u1ec7n t\u1ea1i"}),(0,r.jsx)("td",{className:"tdHeadLeft",children:"Ng\xe0y gi\u1edd \u0110K"}),(0,r.jsx)("td",{className:"tdHeadLeft",children:"Email gi\u1edbi thi\u1ec7u"}),(0,r.jsx)("td",{className:"tdHeadLeft",children:"G\xf3i"}),(0,r.jsx)("td",{className:"tdHeadLeft",children:"K\u1ef3 h\u1ea1n"}),(0,r.jsx)("td",{className:"tdHeadLeft",children:"M\xe3 KM"}),(0,r.jsx)("td",{className:"tdHeadLeft",children:"S\u1ed1 ti\u1ec1n c\u1ea7n"}),(0,r.jsx)("td",{className:"tdHeadLeft",children:"S\u1ed1 ti\u1ec1n CK"}),(0,r.jsx)("td",{className:"tdHeadLeft",children:" "})]}),i]})})})]})}catch(c){return console.log("error",c),(0,r.jsx)(Error,{title:"Danh s\xe1ch",content:c+""})}}}])&&N(t.prototype,n),o&&N(t,o),c}(o.Component),L=(0,i.$j)((function(e){return{userLoginData:e.userReducer.userLoginData,userWaitingList:e.userReducer.userWaitingList,nowTime:e.homeReducer.nowTime}}),(function(e){return{getUSER_WAITINGLIST:function(){return e((0,x.hE)())},APROVEUSER_WAITINGLIST:function(t){return e((0,x.fj)(t))},fUNAPROVE_USER_WAITINGLIST:function(t){return e((0,x.ol)(t))}}}))(E),P=(n(53948),n(45325)),S=n(68509),D=!0,H=function(){var e=(0,i.I0)();return(0,o.useEffect)((function(){}),[e]),(0,r.jsxs)(P.Z,{navmenu:!1,container:!1,children:[(0,r.jsx)(L,{}),(0,r.jsx)(S.Z,{})]})}}},function(e){e.O(0,[523,260,868,59,325,774,888,179],(function(){return t=51132,e(e.s=t);var t}));var t=e.O();_N_E=t}]);