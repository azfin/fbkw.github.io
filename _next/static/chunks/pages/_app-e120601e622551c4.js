from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,M=z`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,R=z`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,A=b("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${n=>n.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${N} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${M} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${n=>n.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${R} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,L=z`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,U=b("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${n=>n.secondary||"#e0e0e0"};
  border-right-color: ${n=>n.primary||"#616161"};
  animation: ${L} 1s linear infinite;
`,F=z`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,H=z`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,W=b("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${n=>n.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${F} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${H} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${n=>n.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Y=b("div")`
  position: absolute;
`,B=b("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,G=z`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,V=b("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${G} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,$=({toast:n})=>{let{icon:t,type:e,iconTheme:r}=n;return void 0!==t?"string"==typeof t?i.createElement(V,null,t):t:"blank"===e?null:i.createElement(B,null,i.createElement(U,{...r}),"loading"!==e&&i.createElement(Y,null,"error"===e?i.createElement(A,{...r}):i.createElement(W,{...r})))},K=n=>`\n0% {transform: translate3d(0,${-200*n}%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n`,Q=n=>`\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,${-150*n}%,-1px) scale(.6); opacity:0;}\n`,Z=b("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,X=b("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,J=i.memo((({toast:n,position:t,style:e,children:r})=>{let o=n.height?((n,t)=>{let e=n.includes("top")?1:-1,[i,r]=w()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[K(e),Q(e)];return{animation:t?`${z(i)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${z(r)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(n.position||t||"top-center",n.visible):{opacity:0},u=i.createElement($,{toast:n}),s=i.createElement(X,{...n.ariaProps},j(n.message,n));return i.createElement(Z,{className:n.className,style:{...o,...e,...n.style}},"function"==typeof r?r({icon:u,message:s}):i.createElement(i.Fragment,null,u,s))}));!function(n,t,e,i){a.p=t,y=n,p=e,m=i}(i.createElement);var nn=({id:n,className:t,style:e,onHeightUpdate:r,children:o})=>{let u=i.useCallback((t=>{if(t){let e=()=>{let e=t.getBoundingClientRect().height;r(n,e)};e(),new MutationObserver(e).observe(t,{subtree:!0,childList:!0,characterData:!0})}}),[n,r]);return i.createElement("div",{ref:u,className:t,style:e},o)},tn=f`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,en=({reverseOrder:n,position:t="top-center",toastOptions:e,gutter:r,children:o,containerStyle:u,containerClassName:s})=>{let{toasts:h,handlers:a}=D(e);return i.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...u},className:s,onMouseEnter:a.startPause,onMouseLeave:a.endPause},h.map((e=>{let u=e.position||t,s=((n,t)=>{let e=n.includes("top"),i=e?{top:0}:{bottom:0},r=n.includes("center")?{justifyContent:"center"}:n.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:w()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(e?1:-1)}px)`,...i,...r}})(u,a.calculateOffset(e,{reverseOrder:n,gutter:r,defaultPosition:t}));return i.createElement(nn,{id:e.id,key:e.id,onHeightUpdate:a.updateHeight,className:e.visible?tn:"",style:s},"custom"===e.type?j(e.message,e):o?o(e):i.createElement(J,{toast:e,position:u}))})))},rn=P}},function(n){var t=function(t){return n(n.s=t)};n.O(0,[774,179],(function(){return t(91118),t(80880)}));var e=n.O();_N_E=e}]);