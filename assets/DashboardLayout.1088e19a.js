import{o as m,c as X,a as i,r as N,b as C,w as g,d as x,v as k,u as n,s as h,n as v,e as L,f as gt,g as tt,h as vt,i as E,j as Xt,t as U,k as Wt,T as et,m as rt,l as nt,p as bt,q as ot,F as mt,x as st,y as Rt,z as lt,A as q,B as at,C as z}from"./index.b21598e3.js";import{L as yt,_ as St}from"./PageFooter.98246fbf.js";import{_ as B}from"./Button.ea2f6f7c.js";import{M as wt,a as _t,E as Z,D as Mt,m as Et,p as $t,f as Ct,v as Ot,A as At}from"./menu.5cc1871f.js";import"./plugin-vue_export-helper.21dcd24c.js";function Pt(t,e){return m(),X("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},[i("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"})])}function Bt(t,e){return m(),X("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},[i("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"})])}function Dt(t,e){return m(),X("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},[i("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4 6h16M4 12h16M4 18h16"})])}function it(t,e){return m(),X("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},[i("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})])}function It(t,e){return m(),X("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},[i("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})])}function jt(t,e){return m(),X("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},[i("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"})])}function ct(t,e){return m(),X("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},[i("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})])}function xt(t,e){return m(),X("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},[i("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})])}const Nt={class:"flex items-center justify-between flex-shrink-0 px-3"},Kt=L("span",{class:"sr-only"},"K-UI",-1),Ut={__name:"SidebarHeader",setup(t){return(e,r)=>{const o=N("router-link");return m(),C("div",Nt,[i(o,{to:{name:"Dashboard"},class:"inline-flex items-center gap-2"},{default:g(()=>[Kt,i(yt,{"aria-hidden":"true",class:"w-10 h-auto"})]),_:1}),x(i(B,{iconOnly:"",variant:"secondary",onClick:r[0]||(r[0]=a=>n(h).isOpen=!n(h).isOpen),srText:n(h).isOpen?"Close sidebar":"Open sidebar"},{default:g(({iconSizeClasses:a})=>[x(i(n(wt),{"aria-hidden":"true",class:v(["hidden lg:block",a])},null,8,["class"]),[[k,n(h).isOpen]]),x(i(n(_t),{"aria-hidden":"true",class:v(["hidden lg:block",a])},null,8,["class"]),[[k,!n(h).isOpen]]),i(n(xt),{"aria-hidden":"true",class:v(["lg:hidden",a])},null,8,["class"])]),_:1},8,["srText"]),[[k,n(h).isOpen||n(h).isHovered]])])}}};/*!
 * perfect-scrollbar v1.5.3
 * Copyright 2021 Hyunje Jun, MDBootstrap and Contributors
 * Licensed under MIT
 */function $(t){return getComputedStyle(t)}function H(t,e){for(var r in e){var o=e[r];typeof o=="number"&&(o=o+"px"),t.style[r]=o}return t}function J(t){var e=document.createElement("div");return e.className=t,e}var ut=typeof Element!="undefined"&&(Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector);function A(t,e){if(!ut)throw new Error("No element matching method supported");return ut.call(t,e)}function j(t){t.remove?t.remove():t.parentNode&&t.parentNode.removeChild(t)}function dt(t,e){return Array.prototype.filter.call(t.children,function(r){return A(r,e)})}var Y={main:"ps",rtl:"ps__rtl",element:{thumb:function(t){return"ps__thumb-"+t},rail:function(t){return"ps__rail-"+t},consuming:"ps__child--consume"},state:{focus:"ps--focus",clicking:"ps--clicking",active:function(t){return"ps--active-"+t},scrolling:function(t){return"ps--scrolling-"+t}}},kt={x:null,y:null};function Yt(t,e){var r=t.element.classList,o=Y.state.scrolling(e);r.contains(o)?clearTimeout(kt[e]):r.add(o)}function Lt(t,e){kt[e]=setTimeout(function(){return t.isAlive&&t.element.classList.remove(Y.state.scrolling(e))},t.settings.scrollingThreshold)}function Ft(t,e){Yt(t,e),Lt(t,e)}var F=function(e){this.element=e,this.handlers={}},Tt={isEmpty:{configurable:!0}};F.prototype.bind=function(e,r){typeof this.handlers[e]=="undefined"&&(this.handlers[e]=[]),this.handlers[e].push(r),this.element.addEventListener(e,r,!1)};F.prototype.unbind=function(e,r){var o=this;this.handlers[e]=this.handlers[e].filter(function(a){return r&&a!==r?!0:(o.element.removeEventListener(e,a,!1),!1)})};F.prototype.unbindAll=function(){for(var e in this.handlers)this.unbind(e)};Tt.isEmpty.get=function(){var t=this;return Object.keys(this.handlers).every(function(e){return t.handlers[e].length===0})};Object.defineProperties(F.prototype,Tt);var K=function(){this.eventElements=[]};K.prototype.eventElement=function(e){var r=this.eventElements.filter(function(o){return o.element===e})[0];return r||(r=new F(e),this.eventElements.push(r)),r};K.prototype.bind=function(e,r,o){this.eventElement(e).bind(r,o)};K.prototype.unbind=function(e,r,o){var a=this.eventElement(e);a.unbind(r,o),a.isEmpty&&this.eventElements.splice(this.eventElements.indexOf(a),1)};K.prototype.unbindAll=function(){this.eventElements.forEach(function(e){return e.unbindAll()}),this.eventElements=[]};K.prototype.once=function(e,r,o){var a=this.eventElement(e),u=function(l){a.unbind(r,u),o(l)};a.bind(r,u)};function Q(t){if(typeof window.CustomEvent=="function")return new CustomEvent(t);var e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,void 0),e}function G(t,e,r,o,a){o===void 0&&(o=!0),a===void 0&&(a=!1);var u;if(e==="top")u=["contentHeight","containerHeight","scrollTop","y","up","down"];else if(e==="left")u=["contentWidth","containerWidth","scrollLeft","x","left","right"];else throw new Error("A proper axis should be provided");Vt(t,r,u,o,a)}function Vt(t,e,r,o,a){var u=r[0],l=r[1],c=r[2],s=r[3],d=r[4],y=r[5];o===void 0&&(o=!0),a===void 0&&(a=!1);var T=t.element;t.reach[s]=null,T[c]<1&&(t.reach[s]="start"),T[c]>t[u]-t[l]-1&&(t.reach[s]="end"),e&&(T.dispatchEvent(Q("ps-scroll-"+s)),e<0?T.dispatchEvent(Q("ps-scroll-"+d)):e>0&&T.dispatchEvent(Q("ps-scroll-"+y)),o&&Ft(t,s)),t.reach[s]&&(e||a)&&T.dispatchEvent(Q("ps-"+s+"-reach-"+t.reach[s]))}function w(t){return parseInt(t,10)||0}function qt(t){return A(t,"input,[contenteditable]")||A(t,"select,[contenteditable]")||A(t,"textarea,[contenteditable]")||A(t,"button,[contenteditable]")}function zt(t){var e=$(t);return w(e.width)+w(e.paddingLeft)+w(e.paddingRight)+w(e.borderLeftWidth)+w(e.borderRightWidth)}var I={isWebKit:typeof document!="undefined"&&"WebkitAppearance"in document.documentElement.style,supportsTouch:typeof window!="undefined"&&("ontouchstart"in window||"maxTouchPoints"in window.navigator&&window.navigator.maxTouchPoints>0||window.DocumentTouch&&document instanceof window.DocumentTouch),supportsIePointer:typeof navigator!="undefined"&&navigator.msMaxTouchPoints,isChrome:typeof navigator!="undefined"&&/Chrome/i.test(navigator&&navigator.userAgent)};function O(t){var e=t.element,r=Math.floor(e.scrollTop),o=e.getBoundingClientRect();t.containerWidth=Math.round(o.width),t.containerHeight=Math.round(o.height),t.contentWidth=e.scrollWidth,t.contentHeight=e.scrollHeight,e.contains(t.scrollbarXRail)||(dt(e,Y.element.rail("x")).forEach(function(a){return j(a)}),e.appendChild(t.scrollbarXRail)),e.contains(t.scrollbarYRail)||(dt(e,Y.element.rail("y")).forEach(function(a){return j(a)}),e.appendChild(t.scrollbarYRail)),!t.settings.suppressScrollX&&t.containerWidth+t.settings.scrollXMarginOffset<t.contentWidth?(t.scrollbarXActive=!0,t.railXWidth=t.containerWidth-t.railXMarginWidth,t.railXRatio=t.containerWidth/t.railXWidth,t.scrollbarXWidth=ht(t,w(t.railXWidth*t.containerWidth/t.contentWidth)),t.scrollbarXLeft=w((t.negativeScrollAdjustment+e.scrollLeft)*(t.railXWidth-t.scrollbarXWidth)/(t.contentWidth-t.containerWidth))):t.scrollbarXActive=!1,!t.settings.suppressScrollY&&t.containerHeight+t.settings.scrollYMarginOffset<t.contentHeight?(t.scrollbarYActive=!0,t.railYHeight=t.containerHeight-t.railYMarginHeight,t.railYRatio=t.containerHeight/t.railYHeight,t.scrollbarYHeight=ht(t,w(t.railYHeight*t.containerHeight/t.contentHeight)),t.scrollbarYTop=w(r*(t.railYHeight-t.scrollbarYHeight)/(t.contentHeight-t.containerHeight))):t.scrollbarYActive=!1,t.scrollbarXLeft>=t.railXWidth-t.scrollbarXWidth&&(t.scrollbarXLeft=t.railXWidth-t.scrollbarXWidth),t.scrollbarYTop>=t.railYHeight-t.scrollbarYHeight&&(t.scrollbarYTop=t.railYHeight-t.scrollbarYHeight),Jt(e,t),t.scrollbarXActive?e.classList.add(Y.state.active("x")):(e.classList.remove(Y.state.active("x")),t.scrollbarXWidth=0,t.scrollbarXLeft=0,e.scrollLeft=t.isRtl===!0?t.contentWidth:0),t.scrollbarYActive?e.classList.add(Y.state.active("y")):(e.classList.remove(Y.state.active("y")),t.scrollbarYHeight=0,t.scrollbarYTop=0,e.scrollTop=0)}function ht(t,e){return t.settings.minScrollbarLength&&(e=Math.max(e,t.settings.minScrollbarLength)),t.settings.maxScrollbarLength&&(e=Math.min(e,t.settings.maxScrollbarLength)),e}function Jt(t,e){var r={width:e.railXWidth},o=Math.floor(t.scrollTop);e.isRtl?r.left=e.negativeScrollAdjustment+t.scrollLeft+e.containerWidth-e.contentWidth:r.left=t.scrollLeft,e.isScrollbarXUsingBottom?r.bottom=e.scrollbarXBottom-o:r.top=e.scrollbarXTop+o,H(e.scrollbarXRail,r);var a={top:o,height:e.railYHeight};e.isScrollbarYUsingRight?e.isRtl?a.right=e.contentWidth-(e.negativeScrollAdjustment+t.scrollLeft)-e.scrollbarYRight-e.scrollbarYOuterWidth-9:a.right=e.scrollbarYRight-t.scrollLeft:e.isRtl?a.left=e.negativeScrollAdjustment+t.scrollLeft+e.containerWidth*2-e.contentWidth-e.scrollbarYLeft-e.scrollbarYOuterWidth:a.left=e.scrollbarYLeft+t.scrollLeft,H(e.scrollbarYRail,a),H(e.scrollbarX,{left:e.scrollbarXLeft,width:e.scrollbarXWidth-e.railBorderXWidth}),H(e.scrollbarY,{top:e.scrollbarYTop,height:e.scrollbarYHeight-e.railBorderYWidth})}function Qt(t){t.element,t.event.bind(t.scrollbarY,"mousedown",function(e){return e.stopPropagation()}),t.event.bind(t.scrollbarYRail,"mousedown",function(e){var r=e.pageY-window.pageYOffset-t.scrollbarYRail.getBoundingClientRect().top,o=r>t.scrollbarYTop?1:-1;t.element.scrollTop+=o*t.containerHeight,O(t),e.stopPropagation()}),t.event.bind(t.scrollbarX,"mousedown",function(e){return e.stopPropagation()}),t.event.bind(t.scrollbarXRail,"mousedown",function(e){var r=e.pageX-window.pageXOffset-t.scrollbarXRail.getBoundingClientRect().left,o=r>t.scrollbarXLeft?1:-1;t.element.scrollLeft+=o*t.containerWidth,O(t),e.stopPropagation()})}function Zt(t){ft(t,["containerWidth","contentWidth","pageX","railXWidth","scrollbarX","scrollbarXWidth","scrollLeft","x","scrollbarXRail"]),ft(t,["containerHeight","contentHeight","pageY","railYHeight","scrollbarY","scrollbarYHeight","scrollTop","y","scrollbarYRail"])}function ft(t,e){var r=e[0],o=e[1],a=e[2],u=e[3],l=e[4],c=e[5],s=e[6],d=e[7],y=e[8],T=t.element,R=null,M=null,f=null;function _(p){p.touches&&p.touches[0]&&(p[a]=p.touches[0].pageY),T[s]=R+f*(p[a]-M),Yt(t,d),O(t),p.stopPropagation(),p.type.startsWith("touch")&&p.changedTouches.length>1&&p.preventDefault()}function W(){Lt(t,d),t[y].classList.remove(Y.state.clicking),t.event.unbind(t.ownerDocument,"mousemove",_)}function b(p,S){R=T[s],S&&p.touches&&(p[a]=p.touches[0].pageY),M=p[a],f=(t[o]-t[r])/(t[u]-t[c]),S?t.event.bind(t.ownerDocument,"touchmove",_):(t.event.bind(t.ownerDocument,"mousemove",_),t.event.once(t.ownerDocument,"mouseup",W),p.preventDefault()),t[y].classList.add(Y.state.clicking),p.stopPropagation()}t.event.bind(t[l],"mousedown",function(p){b(p)}),t.event.bind(t[l],"touchstart",function(p){b(p,!0)})}function Gt(t){var e=t.element,r=function(){return A(e,":hover")},o=function(){return A(t.scrollbarX,":focus")||A(t.scrollbarY,":focus")};function a(u,l){var c=Math.floor(e.scrollTop);if(u===0){if(!t.scrollbarYActive)return!1;if(c===0&&l>0||c>=t.contentHeight-t.containerHeight&&l<0)return!t.settings.wheelPropagation}var s=e.scrollLeft;if(l===0){if(!t.scrollbarXActive)return!1;if(s===0&&u<0||s>=t.contentWidth-t.containerWidth&&u>0)return!t.settings.wheelPropagation}return!0}t.event.bind(t.ownerDocument,"keydown",function(u){if(!(u.isDefaultPrevented&&u.isDefaultPrevented()||u.defaultPrevented)&&!(!r()&&!o())){var l=document.activeElement?document.activeElement:t.ownerDocument.activeElement;if(l){if(l.tagName==="IFRAME")l=l.contentDocument.activeElement;else for(;l.shadowRoot;)l=l.shadowRoot.activeElement;if(qt(l))return}var c=0,s=0;switch(u.which){case 37:u.metaKey?c=-t.contentWidth:u.altKey?c=-t.containerWidth:c=-30;break;case 38:u.metaKey?s=t.contentHeight:u.altKey?s=t.containerHeight:s=30;break;case 39:u.metaKey?c=t.contentWidth:u.altKey?c=t.containerWidth:c=30;break;case 40:u.metaKey?s=-t.contentHeight:u.altKey?s=-t.containerHeight:s=-30;break;case 32:u.shiftKey?s=t.containerHeight:s=-t.containerHeight;break;case 33:s=t.containerHeight;break;case 34:s=-t.containerHeight;break;case 36:s=t.contentHeight;break;case 35:s=-t.contentHeight;break;default:return}t.settings.suppressScrollX&&c!==0||t.settings.suppressScrollY&&s!==0||(e.scrollTop-=s,e.scrollLeft+=c,O(t),a(c,s)&&u.preventDefault())}})}function te(t){var e=t.element;function r(l,c){var s=Math.floor(e.scrollTop),d=e.scrollTop===0,y=s+e.offsetHeight===e.scrollHeight,T=e.scrollLeft===0,R=e.scrollLeft+e.offsetWidth===e.scrollWidth,M;return Math.abs(c)>Math.abs(l)?M=d||y:M=T||R,M?!t.settings.wheelPropagation:!0}function o(l){var c=l.deltaX,s=-1*l.deltaY;return(typeof c=="undefined"||typeof s=="undefined")&&(c=-1*l.wheelDeltaX/6,s=l.wheelDeltaY/6),l.deltaMode&&l.deltaMode===1&&(c*=10,s*=10),c!==c&&s!==s&&(c=0,s=l.wheelDelta),l.shiftKey?[-s,-c]:[c,s]}function a(l,c,s){if(!I.isWebKit&&e.querySelector("select:focus"))return!0;if(!e.contains(l))return!1;for(var d=l;d&&d!==e;){if(d.classList.contains(Y.element.consuming))return!0;var y=$(d);if(s&&y.overflowY.match(/(scroll|auto)/)){var T=d.scrollHeight-d.clientHeight;if(T>0&&(d.scrollTop>0&&s<0||d.scrollTop<T&&s>0))return!0}if(c&&y.overflowX.match(/(scroll|auto)/)){var R=d.scrollWidth-d.clientWidth;if(R>0&&(d.scrollLeft>0&&c<0||d.scrollLeft<R&&c>0))return!0}d=d.parentNode}return!1}function u(l){var c=o(l),s=c[0],d=c[1];if(!a(l.target,s,d)){var y=!1;t.settings.useBothWheelAxes?t.scrollbarYActive&&!t.scrollbarXActive?(d?e.scrollTop-=d*t.settings.wheelSpeed:e.scrollTop+=s*t.settings.wheelSpeed,y=!0):t.scrollbarXActive&&!t.scrollbarYActive&&(s?e.scrollLeft+=s*t.settings.wheelSpeed:e.scrollLeft-=d*t.settings.wheelSpeed,y=!0):(e.scrollTop-=d*t.settings.wheelSpeed,e.scrollLeft+=s*t.settings.wheelSpeed),O(t),y=y||r(s,d),y&&!l.ctrlKey&&(l.stopPropagation(),l.preventDefault())}}typeof window.onwheel!="undefined"?t.event.bind(e,"wheel",u):typeof window.onmousewheel!="undefined"&&t.event.bind(e,"mousewheel",u)}function ee(t){if(!I.supportsTouch&&!I.supportsIePointer)return;var e=t.element;function r(f,_){var W=Math.floor(e.scrollTop),b=e.scrollLeft,p=Math.abs(f),S=Math.abs(_);if(S>p){if(_<0&&W===t.contentHeight-t.containerHeight||_>0&&W===0)return window.scrollY===0&&_>0&&I.isChrome}else if(p>S&&(f<0&&b===t.contentWidth-t.containerWidth||f>0&&b===0))return!0;return!0}function o(f,_){e.scrollTop-=_,e.scrollLeft-=f,O(t)}var a={},u=0,l={},c=null;function s(f){return f.targetTouches?f.targetTouches[0]:f}function d(f){return f.pointerType&&f.pointerType==="pen"&&f.buttons===0?!1:!!(f.targetTouches&&f.targetTouches.length===1||f.pointerType&&f.pointerType!=="mouse"&&f.pointerType!==f.MSPOINTER_TYPE_MOUSE)}function y(f){if(!!d(f)){var _=s(f);a.pageX=_.pageX,a.pageY=_.pageY,u=new Date().getTime(),c!==null&&clearInterval(c)}}function T(f,_,W){if(!e.contains(f))return!1;for(var b=f;b&&b!==e;){if(b.classList.contains(Y.element.consuming))return!0;var p=$(b);if(W&&p.overflowY.match(/(scroll|auto)/)){var S=b.scrollHeight-b.clientHeight;if(S>0&&(b.scrollTop>0&&W<0||b.scrollTop<S&&W>0))return!0}if(_&&p.overflowX.match(/(scroll|auto)/)){var D=b.scrollWidth-b.clientWidth;if(D>0&&(b.scrollLeft>0&&_<0||b.scrollLeft<D&&_>0))return!0}b=b.parentNode}return!1}function R(f){if(d(f)){var _=s(f),W={pageX:_.pageX,pageY:_.pageY},b=W.pageX-a.pageX,p=W.pageY-a.pageY;if(T(f.target,b,p))return;o(b,p),a=W;var S=new Date().getTime(),D=S-u;D>0&&(l.x=b/D,l.y=p/D,u=S),r(b,p)&&f.preventDefault()}}function M(){t.settings.swipeEasing&&(clearInterval(c),c=setInterval(function(){if(t.isInitialized){clearInterval(c);return}if(!l.x&&!l.y){clearInterval(c);return}if(Math.abs(l.x)<.01&&Math.abs(l.y)<.01){clearInterval(c);return}if(!t.element){clearInterval(c);return}o(l.x*30,l.y*30),l.x*=.8,l.y*=.8},10))}I.supportsTouch?(t.event.bind(e,"touchstart",y),t.event.bind(e,"touchmove",R),t.event.bind(e,"touchend",M)):I.supportsIePointer&&(window.PointerEvent?(t.event.bind(e,"pointerdown",y),t.event.bind(e,"pointermove",R),t.event.bind(e,"pointerup",M)):window.MSPointerEvent&&(t.event.bind(e,"MSPointerDown",y),t.event.bind(e,"MSPointerMove",R),t.event.bind(e,"MSPointerUp",M)))}var re=function(){return{handlers:["click-rail","drag-thumb","keyboard","wheel","touch"],maxScrollbarLength:null,minScrollbarLength:null,scrollingThreshold:1e3,scrollXMarginOffset:0,scrollYMarginOffset:0,suppressScrollX:!1,suppressScrollY:!1,swipeEasing:!0,useBothWheelAxes:!1,wheelPropagation:!0,wheelSpeed:1}},ne={"click-rail":Qt,"drag-thumb":Zt,keyboard:Gt,wheel:te,touch:ee},V=function(e,r){var o=this;if(r===void 0&&(r={}),typeof e=="string"&&(e=document.querySelector(e)),!e||!e.nodeName)throw new Error("no element is specified to initialize PerfectScrollbar");this.element=e,e.classList.add(Y.main),this.settings=re();for(var a in r)this.settings[a]=r[a];this.containerWidth=null,this.containerHeight=null,this.contentWidth=null,this.contentHeight=null;var u=function(){return e.classList.add(Y.state.focus)},l=function(){return e.classList.remove(Y.state.focus)};this.isRtl=$(e).direction==="rtl",this.isRtl===!0&&e.classList.add(Y.rtl),this.isNegativeScroll=function(){var d=e.scrollLeft,y=null;return e.scrollLeft=-1,y=e.scrollLeft<0,e.scrollLeft=d,y}(),this.negativeScrollAdjustment=this.isNegativeScroll?e.scrollWidth-e.clientWidth:0,this.event=new K,this.ownerDocument=e.ownerDocument||document,this.scrollbarXRail=J(Y.element.rail("x")),e.appendChild(this.scrollbarXRail),this.scrollbarX=J(Y.element.thumb("x")),this.scrollbarXRail.appendChild(this.scrollbarX),this.scrollbarX.setAttribute("tabindex",0),this.event.bind(this.scrollbarX,"focus",u),this.event.bind(this.scrollbarX,"blur",l),this.scrollbarXActive=null,this.scrollbarXWidth=null,this.scrollbarXLeft=null;var c=$(this.scrollbarXRail);this.scrollbarXBottom=parseInt(c.bottom,10),isNaN(this.scrollbarXBottom)?(this.isScrollbarXUsingBottom=!1,this.scrollbarXTop=w(c.top)):this.isScrollbarXUsingBottom=!0,this.railBorderXWidth=w(c.borderLeftWidth)+w(c.borderRightWidth),H(this.scrollbarXRail,{display:"block"}),this.railXMarginWidth=w(c.marginLeft)+w(c.marginRight),H(this.scrollbarXRail,{display:""}),this.railXWidth=null,this.railXRatio=null,this.scrollbarYRail=J(Y.element.rail("y")),e.appendChild(this.scrollbarYRail),this.scrollbarY=J(Y.element.thumb("y")),this.scrollbarYRail.appendChild(this.scrollbarY),this.scrollbarY.setAttribute("tabindex",0),this.event.bind(this.scrollbarY,"focus",u),this.event.bind(this.scrollbarY,"blur",l),this.scrollbarYActive=null,this.scrollbarYHeight=null,this.scrollbarYTop=null;var s=$(this.scrollbarYRail);this.scrollbarYRight=parseInt(s.right,10),isNaN(this.scrollbarYRight)?(this.isScrollbarYUsingRight=!1,this.scrollbarYLeft=w(s.left)):this.isScrollbarYUsingRight=!0,this.scrollbarYOuterWidth=this.isRtl?zt(this.scrollbarY):null,this.railBorderYWidth=w(s.borderTopWidth)+w(s.borderBottomWidth),H(this.scrollbarYRail,{display:"block"}),this.railYMarginHeight=w(s.marginTop)+w(s.marginBottom),H(this.scrollbarYRail,{display:""}),this.railYHeight=null,this.railYRatio=null,this.reach={x:e.scrollLeft<=0?"start":e.scrollLeft>=this.contentWidth-this.containerWidth?"end":null,y:e.scrollTop<=0?"start":e.scrollTop>=this.contentHeight-this.containerHeight?"end":null},this.isAlive=!0,this.settings.handlers.forEach(function(d){return ne[d](o)}),this.lastScrollTop=Math.floor(e.scrollTop),this.lastScrollLeft=e.scrollLeft,this.event.bind(this.element,"scroll",function(d){return o.onScroll(d)}),O(this)};V.prototype.update=function(){!this.isAlive||(this.negativeScrollAdjustment=this.isNegativeScroll?this.element.scrollWidth-this.element.clientWidth:0,H(this.scrollbarXRail,{display:"block"}),H(this.scrollbarYRail,{display:"block"}),this.railXMarginWidth=w($(this.scrollbarXRail).marginLeft)+w($(this.scrollbarXRail).marginRight),this.railYMarginHeight=w($(this.scrollbarYRail).marginTop)+w($(this.scrollbarYRail).marginBottom),H(this.scrollbarXRail,{display:"none"}),H(this.scrollbarYRail,{display:"none"}),O(this),G(this,"top",0,!1,!0),G(this,"left",0,!1,!0),H(this.scrollbarXRail,{display:""}),H(this.scrollbarYRail,{display:""}))};V.prototype.onScroll=function(e){!this.isAlive||(O(this),G(this,"top",this.element.scrollTop-this.lastScrollTop),G(this,"left",this.element.scrollLeft-this.lastScrollLeft),this.lastScrollTop=Math.floor(this.element.scrollTop),this.lastScrollLeft=this.element.scrollLeft)};V.prototype.destroy=function(){!this.isAlive||(this.event.unbindAll(),j(this.scrollbarX),j(this.scrollbarY),j(this.scrollbarXRail),j(this.scrollbarYRail),this.removePsClasses(),this.element=null,this.scrollbarX=null,this.scrollbarY=null,this.scrollbarXRail=null,this.scrollbarYRail=null,this.isAlive=!1)};V.prototype.removePsClasses=function(){this.element.className=this.element.className.split(" ").filter(function(e){return!e.match(/^ps([-_].+|)$/)}).join(" ")};const oe={__name:"PerfectScrollbar",props:{settings:{type:Object,default:{}},tagname:{type:String,default:"div"}},setup(t){const e=t,{settings:r,tagname:o}=e;let a=null;const u=()=>{a&&a.update()},l=gt(null);return tt(()=>{a=new V(l.value,r)}),vt(()=>{a.destroy()}),(c,s)=>(m(),X(Xt(n(o)),{ref_key:"el",ref:l,onMouseoverOnce:u},{default:g(()=>[E(c.$slots,"default")]),_:3},544))}},se=["href"],Ht={__name:"SidebarLink",props:{href:{type:String,required:!1},to:{type:[String,Object],required:!1},active:{type:Boolean,default:!1},title:{type:String,required:!0}},setup(t){return(e,r)=>{const o=N("router-link");return t.href?(m(),C("a",{key:0,href:t.href,class:v(["p-2 flex items-center gap-2 rounded-md transition-colors",{"text-gray-500 hover:text-gray-700 hover:bg-gray-100 dark:hover:text-gray-300 dark:hover:bg-dark-eval-2":!t.active,"text-white bg-purple-500 shadow-lg hover:bg-purple-600":t.active}])},[E(e.$slots,"icon",{},()=>[i(n(Z),{"aria-hidden":"true",class:"flex-shrink-0 w-6 h-6"})]),x(L("span",{class:"text-base font-medium"},U(t.title),513),[[k,n(h).isOpen||n(h).isHovered]])],10,se)):t.to?(m(),X(o,{key:1,to:t.to,class:v(["p-2 flex items-center gap-2 rounded-md transition-colors",{"text-gray-500 hover:text-gray-700 hover:bg-gray-100 dark:hover:text-gray-300 dark:hover:bg-dark-eval-2":!t.active,"text-white bg-purple-500 shadow-lg hover:bg-purple-600":t.active}])},{default:g(()=>[E(e.$slots,"icon",{},()=>[i(n(Z),{"aria-hidden":"true",class:"flex-shrink-0 w-6 h-6"})]),x(L("span",{class:"text-base font-medium"},U(t.title),513),[[k,n(h).isOpen||n(h).isHovered]])]),_:3},8,["to","class"])):(m(),C("button",{key:2,type:"button",class:v(["p-2 w-full flex items-center gap-2 rounded-md transition-colors",{"text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:text-gray-300 dark:hover:bg-dark-eval-2":!t.active,"text-white bg-purple-500 shadow-lg hover:bg-purple-600":t.active}])},[E(e.$slots,"icon",{},()=>[i(n(Z),{"aria-hidden":"true",class:"flex-shrink-0 w-6 h-6"})]),x(L("span",{class:"text-base font-medium"},U(t.title),513),[[k,n(h).isOpen||n(h).isHovered]]),E(e.$slots,"arrow")],2))}}},le={class:"relative"},ae={"aria-hidden":"true",class:"relative block w-6 h-6 ml-auto"},ie={class:"overflow-hidden transition-all duration-200 max-h-0"},ce={class:"relative px-0 pt-2 pb-0 ml-5 before:w-0 before:block before:absolute before:inset-y-0 before:left-0 before:border-l-2 before:border-l-gray-200 dark:before:border-l-gray-600"},pt={__name:"SidebarCollapsible",props:{title:{type:String},icon:{required:!1},active:{type:Boolean}},setup(t){const e=t,{active:r}=Wt(e),o=gt(r.value),a=s=>{s.style.maxHeight="0px"},u=s=>{s.style.maxHeight=`${s.scrollHeight}px`},l=s=>{s.style.maxHeight=`${s.scrollHeight}px`},c=s=>{s.style.maxHeight="0px"};return(s,d)=>(m(),C("div",le,[i(Ht,{onClick:d[0]||(d[0]=y=>o.value=!o.value),title:t.title,active:n(r)},{icon:g(()=>[E(s.$slots,"icon",{},()=>[i(n(Z),{"aria-hidden":"true",class:"flex-shrink-0 w-6 h-6"})])]),arrow:g(()=>[x(L("span",ae,[L("span",{class:v(["absolute right-[9px] mt-[-5px] h-2 w-[2px] top-1/2 transition-all duration-200",{"-rotate-45":o.value,"rotate-45":!o.value,"bg-white":n(r),"bg-gray-400":!n(r)}])},null,2),L("span",{class:v(["absolute left-[9px] mt-[-5px] h-2 w-[2px] top-1/2 transition-all duration-200",{"rotate-45":o.value,"-rotate-45":!o.value,"bg-white":n(r),"bg-gray-400":!n(r)}])},null,2)],512),[[k,n(h).isOpen||n(h).isHovered]])]),_:3},8,["title","active"]),i(et,{onBeforeEnter:a,onEnter:u,onBeforeLeave:l,onLeave:c,appear:""},{default:g(()=>[x(L("div",ie,[L("ul",ce,[E(s.$slots,"default")])],512),[[k,o.value&&(n(h).isOpen||n(h).isHovered)]])]),_:3})]))}},ue=["href"],P={__name:"SidebarCollapsibleItem",props:{href:String,to:[String,Object],title:String,active:{type:Boolean,default:!1}},setup(t){return(e,r)=>{const o=N("router-link");return m(),C("li",{class:v(["relative leading-8 m-0 pl-6","before:block before:w-4 before:h-0 before:absolute before:left-0 before:top-4 before:border-t-2 before:border-t-gray-200 before:-mt-0.5","last:before:bg-white last:before:h-auto last:before:top-4 last:before:bottom-0","dark:last:before:bg-dark-eval-1 dark:before:border-t-gray-600"])},[t.href?(m(),C("a",rt({key:0,href:t.href},e.$attrs,{class:["transition-colors hover:text-gray-900 dark:hover:text-gray-100",{"text-gray-900 dark:text-gray-200":t.active,"text-gray-500 dark:text-gray-400":!t.active}]}),U(t.title),17,ue)):nt("",!0),t.to?(m(),X(o,rt({key:1,to:t.to},e.$attrs,{class:["transition-colors hover:text-gray-900 dark:hover:text-gray-100",{"text-gray-900 dark:text-gray-200":t.active,"text-gray-500 dark:text-gray-400":!t.active}]}),{default:g(()=>[bt(U(t.title),1)]),_:1},16,["to","class"])):nt("",!0)],2)}}},de={__name:"SidebarContent",setup(t){const e=o=>ot().currentRoute.value.name==o,r=o=>ot().currentRoute.value.path.startsWith(o);return(o,a)=>(m(),X(oe,{tagname:"nav","aria-label":"main",class:"relative flex flex-col flex-1 max-h-full gap-4 px-3"},{default:g(()=>[i(Ht,{title:"Dashboard",to:{name:"Dashboard"},active:e("Dashboard")},{icon:g(()=>[i(n(Mt),{class:"flex-shrink-0 w-6 h-6","aria-hidden":"true"})]),_:1},8,["active"]),i(pt,{title:"Pages",active:r("/pages")},{icon:g(()=>[i(n(Bt),{class:"flex-shrink-0 w-6 h-6","aria-hidden":"true"})]),default:g(()=>[i(P,{to:{name:"Blank"},title:"Blank",active:e("Blank")},null,8,["active"])]),_:1},8,["active"]),i(pt,{title:"Authentication"},{icon:g(()=>[i(n(jt),{class:"flex-shrink-0 w-6 h-6","aria-hidden":"true"})]),default:g(()=>[i(P,{to:{name:"Login"},title:"Login"}),i(P,{to:{name:"Register"},title:"Register"}),i(P,{to:{name:"VerifyEmail"},title:"Verify Email"}),i(P,{to:{name:"ForgotPassword"},title:"Forgot Password"}),i(P,{to:{name:"ResetPassword"},title:"Reset Password"}),i(P,{to:{name:"ConfirmPassword"},title:"Confirm Password"})]),_:1})]),_:1}))}},he={class:"flex-shrink-0 px-3 lg:hidden"},fe={__name:"SidebarFooter",setup(t){return(e,r)=>(m(),C("div",he,[x(i(B,{iconOnly:"",variant:"secondary",onClick:r[0]||(r[0]=o=>n(h).isOpen=!n(h).isOpen),srText:n(h).isOpen?"Close sidebar":"Open sidebar"},{default:g(({iconSizeClasses:o})=>[x(i(n(wt),{"aria-hidden":"true",class:v([o])},null,8,["class"]),[[k,n(h).isOpen]]),x(i(n(_t),{"aria-hidden":"true",class:v([o])},null,8,["class"]),[[k,!n(h).isOpen]])]),_:1},8,["srText"]),[[k,!n(h).isOpen]])]))}},pe={__name:"Sidebar",setup(t){return tt(()=>{window.addEventListener("resize",h.handleWindowResize)}),(e,r)=>(m(),C(mt,null,[i(et,{"enter-active-class":"transition","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"transition","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:g(()=>[x(L("div",{onClick:r[0]||(r[0]=o=>n(h).isOpen=!1),class:"fixed inset-0 z-20 bg-black/50 lg:hidden"},null,512),[[k,n(h).isOpen]])]),_:1}),L("aside",{style:{"transition-property":"width, transform","transition-duration":"150ms"},class:v(["fixed inset-y-0 z-20 py-4 flex flex-col space-y-6 bg-white shadow-lg dark:bg-dark-eval-1",{"translate-x-0 w-64":n(h).isOpen||n(h).isHovered,"-translate-x-full w-64 md:w-16 md:translate-x-0":!n(h).isOpen&&!n(h).isHovered}]),onMouseenter:r[1]||(r[1]=o=>n(h).handleHover(!0)),onMouseleave:r[2]||(r[2]=o=>n(h).handleHover(!1))},[i(Ut),i(de),i(fe)],34)],64))}},ge={__name:"Dropdown",props:{align:{default:"right"},width:{default:"48"},contentClasses:{default:()=>["py-1","bg-white dark:bg-dark-eval-1"]}},setup(t){const e=t,r=st(()=>({48:"w-48"})[e.width.toString()]),o=st(()=>e.align==="left"?"origin-top-left left-0":e.align==="right"?"origin-top-right right-0":"origin-top");return(a,u)=>(m(),X(n(Ct),{as:"div",class:"relative"},{default:g(()=>[i(n(Et),{as:"div"},{default:g(()=>[E(a.$slots,"trigger")]),_:3}),i(et,{"enter-active-class":"transition duration-200 ease-out","enter-from-class":"transform scale-95 opacity-0","enter-to-class":"transform scale-100 opacity-100","leave-active-class":"transition duration-75 ease-in","leave-from-class":"transform scale-100 opacity-100","leave-to-class":"transform scale-95 opacity-0"},{default:g(()=>[i(n($t),{class:v(["absolute z-50 mt-2 rounded-md shadow-lg",[n(r),n(o)]]),onClick:u[0]||(u[0]=l=>a.open=!1)},{default:g(()=>[L("div",{class:v(["rounded-md ring-1 ring-black ring-opacity-5",t.contentClasses])},[E(a.$slots,"content")],2)]),_:3},8,["class"])]),_:3})]),_:3}))}},ve={__name:"DropdownLink",setup(t){return(e,r)=>{const o=N("router-link");return m(),X(n(Ot),null,{default:g(({active:a,disabled:u})=>[i(o,{class:v(["block w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 transition duration-150 ease-in-out focus:outline-none dark:focus:text-white dark:focus:bg-dark-eval-3 dark:text-gray-400",{"bg-gray-100 dark:text-gray-200 dark:bg-dark-eval-3":a,"pointer-events-none":u}])},{default:g(()=>[E(e.$slots,"default")]),_:2},1032,["class"])]),_:3})}}};var be="/kui-dashboard-vue/assets/avatar.de113cd5.jpg";const me={class:"flex items-center gap-2"},ye={class:"flex items-center gap-2"},we={class:"flex text-sm transition border-2 border-transparent rounded-md focus:outline-none focus:ring focus:ring-purple-500 focus:ring-offset-1 focus:ring-offset-white dark:focus:ring-offset-dark-eval-1"},_e=["src"],xe=bt("Log Out"),ke=L("span",{class:"sr-only"},"K UI",-1),Ye={__name:"Navbar",setup(t){const{isFullscreen:e,toggle:r}=Rt();return tt(()=>{document.addEventListener("scroll",lt)}),vt(()=>{document.removeEventListener("scroll",lt)}),(o,a)=>{const u=N("router-link");return m(),C(mt,null,[L("nav",{"aria-label":"secondary",class:v(["sticky top-0 z-10 px-6 py-4 bg-white flex items-center justify-between transition-transform duration-500 dark:bg-dark-eval-1",{"-translate-y-full":n(z).down,"translate-y-0":n(z).up}])},[L("div",me,[i(B,{iconOnly:"",variant:"secondary",onClick:n(at),class:"md:hidden",srText:"Toggle dark mode"},{default:g(({iconSizeClasses:l})=>[x(i(n(it),{"aria-hidden":"true",class:v(l)},null,8,["class"]),[[k,!n(q)]]),x(i(n(ct),{"aria-hidden":"true",class:v(l)},null,8,["class"]),[[k,n(q)]])]),_:1},8,["onClick"])]),L("div",ye,[i(B,{iconOnly:"",variant:"secondary",onClick:a[0]||(a[0]=l=>n(at)()),class:"hidden md:inline-flex",srText:"Toggle dark mode"},{default:g(({iconSizeClasses:l})=>[x(i(n(it),{"aria-hidden":"true",class:v(l)},null,8,["class"]),[[k,!n(q)]]),x(i(n(ct),{"aria-hidden":"true",class:v(l)},null,8,["class"]),[[k,n(q)]])]),_:1}),i(B,{iconOnly:"",variant:"secondary",onClick:n(r),class:"hidden md:inline-flex",srText:"Toggle dark mode"},{default:g(({iconSizeClasses:l})=>[x(i(n(Pt),{"aria-hidden":"true",class:v(l)},null,8,["class"]),[[k,!n(e)]]),x(i(n(At),{"aria-hidden":"true",class:v(l)},null,8,["class"]),[[k,n(e)]])]),_:1},8,["onClick"]),i(ge,{align:"right",width:"48"},{trigger:g(()=>[L("button",we,[L("img",{class:"object-cover w-8 h-8 rounded-md",src:n(be),alt:"User Name"},null,8,_e)])]),content:g(()=>[i(ve,{to:"#"},{default:g(()=>[xe]),_:1})]),_:1})])],2),L("div",{class:v(["fixed inset-x-0 bottom-0 flex items-center justify-between px-4 py-4 sm:px-6 transition-transform duration-500 bg-white md:hidden dark:bg-dark-eval-1",{"translate-y-full":n(z).down,"translate-y-0":n(z).up}])},[i(B,{iconOnly:"",variant:"secondary",srText:"Search"},{default:g(({iconSizeClasses:l})=>[i(n(It),{"aria-hidden":"true",class:v(l)},null,8,["class"])]),_:1}),i(u,{to:{name:"Dashboard"}},{default:g(()=>[i(yt,{class:"w-10 h-10"}),ke]),_:1}),i(B,{iconOnly:"",variant:"secondary",onClick:a[1]||(a[1]=l=>n(h).isOpen=!n(h).isOpen),class:"md:hidden",srText:"Search"},{default:g(({iconSizeClasses:l})=>[x(i(n(Dt),{"aria-hidden":"true",class:v(l)},null,8,["class"]),[[k,!n(h).isOpen]]),x(i(n(xt),{"aria-hidden":"true",class:v(l)},null,8,["class"]),[[k,n(h).isOpen]])]),_:1})],2)],64)}}},Le={class:"min-h-screen text-gray-900 bg-gray-100 dark:bg-dark-bg dark:text-gray-100"},Se={__name:"DashboardLayout",setup(t){return(e,r)=>{const o=N("router-view");return m(),C("div",Le,[i(pe),L("div",{style:{"transition-property":"margin","transition-duration":"150ms"},class:v(["min-h-screen flex flex-col",{"lg:ml-64":n(h).isOpen,"md:ml-16":!n(h).isOpen}])},[i(Ye),i(o),i(St)],2)])}}};export{Se as default};