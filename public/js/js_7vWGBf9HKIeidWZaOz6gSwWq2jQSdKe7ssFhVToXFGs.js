/* global a2a*/
(function (Drupal) {
    'use strict';
  
    Drupal.behaviors.addToAny = {
      attach: function (context, settings) {
        // If not the full document (it's probably AJAX), and window.a2a exists
        if (context !== document && window.a2a) {
          a2a.init_all(); // Init all uninitiated AddToAny instances
        }
      }
    };
  
  })(Drupal);
  ;
  /*!
    * Bootstrap v5.1.3 (https://getbootstrap.com/)
    * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    */
  !function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("@popperjs/core")):"function"==typeof define&&define.amd?define(["@popperjs/core"],e):(t="undefined"!=typeof globalThis?globalThis:t||self).bootstrap=e(t.Popper)}(this,(function(t){"use strict";function e(t){if(t&&t.__esModule)return t;const e=Object.create(null);if(t)for(const i in t)if("default"!==i){const s=Object.getOwnPropertyDescriptor(t,i);Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>t[i]})}return e.default=t,Object.freeze(e)}const i=e(t),s="transitionend",n=t=>{let e=t.getAttribute("data-bs-target");if(!e||"#"===e){let i=t.getAttribute("href");if(!i||!i.includes("#")&&!i.startsWith("."))return null;i.includes("#")&&!i.startsWith("#")&&(i=`#${i.split("#")[1]}`),e=i&&"#"!==i?i.trim():null}return e},o=t=>{const e=n(t);return e&&document.querySelector(e)?e:null},r=t=>{const e=n(t);return e?document.querySelector(e):null},a=t=>{t.dispatchEvent(new Event(s))},l=t=>!(!t||"object"!=typeof t)&&(void 0!==t.jquery&&(t=t[0]),void 0!==t.nodeType),c=t=>l(t)?t.jquery?t[0]:t:"string"==typeof t&&t.length>0?document.querySelector(t):null,h=(t,e,i)=>{Object.keys(i).forEach((s=>{const n=i[s],o=e[s],r=o&&l(o)?"element":null==(a=o)?`${a}`:{}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase();var a;if(!new RegExp(n).test(r))throw new TypeError(`${t.toUpperCase()}: Option "${s}" provided type "${r}" but expected type "${n}".`)}))},d=t=>!(!l(t)||0===t.getClientRects().length)&&"visible"===getComputedStyle(t).getPropertyValue("visibility"),u=t=>!t||t.nodeType!==Node.ELEMENT_NODE||!!t.classList.contains("disabled")||(void 0!==t.disabled?t.disabled:t.hasAttribute("disabled")&&"false"!==t.getAttribute("disabled")),g=t=>{if(!document.documentElement.attachShadow)return null;if("function"==typeof t.getRootNode){const e=t.getRootNode();return e instanceof ShadowRoot?e:null}return t instanceof ShadowRoot?t:t.parentNode?g(t.parentNode):null},_=()=>{},f=t=>{t.offsetHeight},p=()=>{const{jQuery:t}=window;return t&&!document.body.hasAttribute("data-bs-no-jquery")?t:null},m=[],b=()=>"rtl"===document.documentElement.dir,v=t=>{var e;e=()=>{const e=p();if(e){const i=t.NAME,s=e.fn[i];e.fn[i]=t.jQueryInterface,e.fn[i].Constructor=t,e.fn[i].noConflict=()=>(e.fn[i]=s,t.jQueryInterface)}},"loading"===document.readyState?(m.length||document.addEventListener("DOMContentLoaded",(()=>{m.forEach((t=>t()))})),m.push(e)):e()},y=t=>{"function"==typeof t&&t()},E=(t,e,i=!0)=>{if(!i)return void y(t);const n=(t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:i}=window.getComputedStyle(t);const s=Number.parseFloat(e),n=Number.parseFloat(i);return s||n?(e=e.split(",")[0],i=i.split(",")[0],1e3*(Number.parseFloat(e)+Number.parseFloat(i))):0})(e)+5;let o=!1;const r=({target:i})=>{i===e&&(o=!0,e.removeEventListener(s,r),y(t))};e.addEventListener(s,r),setTimeout((()=>{o||a(e)}),n)},w=(t,e,i,s)=>{let n=t.indexOf(e);if(-1===n)return t[!i&&s?t.length-1:0];const o=t.length;return n+=i?1:-1,s&&(n=(n+o)%o),t[Math.max(0,Math.min(n,o-1))]},A=/[^.]*(?=\..*)\.|.*/,T=/\..*/,C=/::\d+$/,k={};let L=1;const S={mouseenter:"mouseover",mouseleave:"mouseout"},O=/^(mouseenter|mouseleave)/i,N=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function D(t,e){return e&&`${e}::${L++}`||t.uidEvent||L++}function I(t){const e=D(t);return t.uidEvent=e,k[e]=k[e]||{},k[e]}function P(t,e,i=null){const s=Object.keys(t);for(let n=0,o=s.length;n<o;n++){const o=t[s[n]];if(o.originalHandler===e&&o.delegationSelector===i)return o}return null}function x(t,e,i){const s="string"==typeof e,n=s?i:e;let o=H(t);return N.has(o)||(o=t),[s,n,o]}function M(t,e,i,s,n){if("string"!=typeof e||!t)return;if(i||(i=s,s=null),O.test(e)){const t=t=>function(e){if(!e.relatedTarget||e.relatedTarget!==e.delegateTarget&&!e.delegateTarget.contains(e.relatedTarget))return t.call(this,e)};s?s=t(s):i=t(i)}const[o,r,a]=x(e,i,s),l=I(t),c=l[a]||(l[a]={}),h=P(c,r,o?i:null);if(h)return void(h.oneOff=h.oneOff&&n);const d=D(r,e.replace(A,"")),u=o?function(t,e,i){return function s(n){const o=t.querySelectorAll(e);for(let{target:r}=n;r&&r!==this;r=r.parentNode)for(let a=o.length;a--;)if(o[a]===r)return n.delegateTarget=r,s.oneOff&&$.off(t,n.type,e,i),i.apply(r,[n]);return null}}(t,i,s):function(t,e){return function i(s){return s.delegateTarget=t,i.oneOff&&$.off(t,s.type,e),e.apply(t,[s])}}(t,i);u.delegationSelector=o?i:null,u.originalHandler=r,u.oneOff=n,u.uidEvent=d,c[d]=u,t.addEventListener(a,u,o)}function j(t,e,i,s,n){const o=P(e[i],s,n);o&&(t.removeEventListener(i,o,Boolean(n)),delete e[i][o.uidEvent])}function H(t){return t=t.replace(T,""),S[t]||t}const $={on(t,e,i,s){M(t,e,i,s,!1)},one(t,e,i,s){M(t,e,i,s,!0)},off(t,e,i,s){if("string"!=typeof e||!t)return;const[n,o,r]=x(e,i,s),a=r!==e,l=I(t),c=e.startsWith(".");if(void 0!==o){if(!l||!l[r])return;return void j(t,l,r,o,n?i:null)}c&&Object.keys(l).forEach((i=>{!function(t,e,i,s){const n=e[i]||{};Object.keys(n).forEach((o=>{if(o.includes(s)){const s=n[o];j(t,e,i,s.originalHandler,s.delegationSelector)}}))}(t,l,i,e.slice(1))}));const h=l[r]||{};Object.keys(h).forEach((i=>{const s=i.replace(C,"");if(!a||e.includes(s)){const e=h[i];j(t,l,r,e.originalHandler,e.delegationSelector)}}))},trigger(t,e,i){if("string"!=typeof e||!t)return null;const s=p(),n=H(e),o=e!==n,r=N.has(n);let a,l=!0,c=!0,h=!1,d=null;return o&&s&&(a=s.Event(e,i),s(t).trigger(a),l=!a.isPropagationStopped(),c=!a.isImmediatePropagationStopped(),h=a.isDefaultPrevented()),r?(d=document.createEvent("HTMLEvents"),d.initEvent(n,l,!0)):d=new CustomEvent(e,{bubbles:l,cancelable:!0}),void 0!==i&&Object.keys(i).forEach((t=>{Object.defineProperty(d,t,{get:()=>i[t]})})),h&&d.preventDefault(),c&&t.dispatchEvent(d),d.defaultPrevented&&void 0!==a&&a.preventDefault(),d}},B=new Map,z={set(t,e,i){B.has(t)||B.set(t,new Map);const s=B.get(t);s.has(e)||0===s.size?s.set(e,i):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`)},get:(t,e)=>B.has(t)&&B.get(t).get(e)||null,remove(t,e){if(!B.has(t))return;const i=B.get(t);i.delete(e),0===i.size&&B.delete(t)}};class R{constructor(t){(t=c(t))&&(this._element=t,z.set(this._element,this.constructor.DATA_KEY,this))}dispose(){z.remove(this._element,this.constructor.DATA_KEY),$.off(this._element,this.constructor.EVENT_KEY),Object.getOwnPropertyNames(this).forEach((t=>{this[t]=null}))}_queueCallback(t,e,i=!0){E(t,e,i)}static getInstance(t){return z.get(c(t),this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,"object"==typeof e?e:null)}static get VERSION(){return"5.1.3"}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}}const F=(t,e="hide")=>{const i=`click.dismiss${t.EVENT_KEY}`,s=t.NAME;$.on(document,i,`[data-bs-dismiss="${s}"]`,(function(i){if(["A","AREA"].includes(this.tagName)&&i.preventDefault(),u(this))return;const n=r(this)||this.closest(`.${s}`);t.getOrCreateInstance(n)[e]()}))};class q extends R{static get NAME(){return"alert"}close(){if($.trigger(this._element,"close.bs.alert").defaultPrevented)return;this._element.classList.remove("show");const t=this._element.classList.contains("fade");this._queueCallback((()=>this._destroyElement()),this._element,t)}_destroyElement(){this._element.remove(),$.trigger(this._element,"closed.bs.alert"),this.dispose()}static jQueryInterface(t){return this.each((function(){const e=q.getOrCreateInstance(this);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}F(q,"close"),v(q);const W='[data-bs-toggle="button"]';class U extends R{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(t){return this.each((function(){const e=U.getOrCreateInstance(this);"toggle"===t&&e[t]()}))}}function K(t){return"true"===t||"false"!==t&&(t===Number(t).toString()?Number(t):""===t||"null"===t?null:t)}function V(t){return t.replace(/[A-Z]/g,(t=>`-${t.toLowerCase()}`))}$.on(document,"click.bs.button.data-api",W,(t=>{t.preventDefault();const e=t.target.closest(W);U.getOrCreateInstance(e).toggle()})),v(U);const X={setDataAttribute(t,e,i){t.setAttribute(`data-bs-${V(e)}`,i)},removeDataAttribute(t,e){t.removeAttribute(`data-bs-${V(e)}`)},getDataAttributes(t){if(!t)return{};const e={};return Object.keys(t.dataset).filter((t=>t.startsWith("bs"))).forEach((i=>{let s=i.replace(/^bs/,"");s=s.charAt(0).toLowerCase()+s.slice(1,s.length),e[s]=K(t.dataset[i])})),e},getDataAttribute:(t,e)=>K(t.getAttribute(`data-bs-${V(e)}`)),offset(t){const e=t.getBoundingClientRect();return{top:e.top+window.pageYOffset,left:e.left+window.pageXOffset}},position:t=>({top:t.offsetTop,left:t.offsetLeft})},Y={find:(t,e=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(e,t)),findOne:(t,e=document.documentElement)=>Element.prototype.querySelector.call(e,t),children:(t,e)=>[].concat(...t.children).filter((t=>t.matches(e))),parents(t,e){const i=[];let s=t.parentNode;for(;s&&s.nodeType===Node.ELEMENT_NODE&&3!==s.nodeType;)s.matches(e)&&i.push(s),s=s.parentNode;return i},prev(t,e){let i=t.previousElementSibling;for(;i;){if(i.matches(e))return[i];i=i.previousElementSibling}return[]},next(t,e){let i=t.nextElementSibling;for(;i;){if(i.matches(e))return[i];i=i.nextElementSibling}return[]},focusableChildren(t){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map((t=>`${t}:not([tabindex^="-"])`)).join(", ");return this.find(e,t).filter((t=>!u(t)&&d(t)))}},Q="carousel",G={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},Z={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},J="next",tt="prev",et="left",it="right",st={ArrowLeft:it,ArrowRight:et},nt="slid.bs.carousel",ot="active",rt=".active.carousel-item";class at extends R{constructor(t,e){super(t),this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(e),this._indicatorsElement=Y.findOne(".carousel-indicators",this._element),this._touchSupported="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0,this._pointerEvent=Boolean(window.PointerEvent),this._addEventListeners()}static get Default(){return G}static get NAME(){return Q}next(){this._slide(J)}nextWhenVisible(){!document.hidden&&d(this._element)&&this.next()}prev(){this._slide(tt)}pause(t){t||(this._isPaused=!0),Y.findOne(".carousel-item-next, .carousel-item-prev",this._element)&&(a(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null}cycle(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config&&this._config.interval&&!this._isPaused&&(this._updateInterval(),this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))}to(t){this._activeElement=Y.findOne(rt,this._element);const e=this._getItemIndex(this._activeElement);if(t>this._items.length-1||t<0)return;if(this._isSliding)return void $.one(this._element,nt,(()=>this.to(t)));if(e===t)return this.pause(),void this.cycle();const i=t>e?J:tt;this._slide(i,this._items[t])}_getConfig(t){return t={...G,...X.getDataAttributes(this._element),..."object"==typeof t?t:{}},h(Q,t,Z),t}_handleSwipe(){const t=Math.abs(this.touchDeltaX);if(t<=40)return;const e=t/this.touchDeltaX;this.touchDeltaX=0,e&&this._slide(e>0?it:et)}_addEventListeners(){this._config.keyboard&&$.on(this._element,"keydown.bs.carousel",(t=>this._keydown(t))),"hover"===this._config.pause&&($.on(this._element,"mouseenter.bs.carousel",(t=>this.pause(t))),$.on(this._element,"mouseleave.bs.carousel",(t=>this.cycle(t)))),this._config.touch&&this._touchSupported&&this._addTouchEventListeners()}_addTouchEventListeners(){const t=t=>this._pointerEvent&&("pen"===t.pointerType||"touch"===t.pointerType),e=e=>{t(e)?this.touchStartX=e.clientX:this._pointerEvent||(this.touchStartX=e.touches[0].clientX)},i=t=>{this.touchDeltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this.touchStartX},s=e=>{t(e)&&(this.touchDeltaX=e.clientX-this.touchStartX),this._handleSwipe(),"hover"===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout((t=>this.cycle(t)),500+this._config.interval))};Y.find(".carousel-item img",this._element).forEach((t=>{$.on(t,"dragstart.bs.carousel",(t=>t.preventDefault()))})),this._pointerEvent?($.on(this._element,"pointerdown.bs.carousel",(t=>e(t))),$.on(this._element,"pointerup.bs.carousel",(t=>s(t))),this._element.classList.add("pointer-event")):($.on(this._element,"touchstart.bs.carousel",(t=>e(t))),$.on(this._element,"touchmove.bs.carousel",(t=>i(t))),$.on(this._element,"touchend.bs.carousel",(t=>s(t))))}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const e=st[t.key];e&&(t.preventDefault(),this._slide(e))}_getItemIndex(t){return this._items=t&&t.parentNode?Y.find(".carousel-item",t.parentNode):[],this._items.indexOf(t)}_getItemByOrder(t,e){const i=t===J;return w(this._items,e,i,this._config.wrap)}_triggerSlideEvent(t,e){const i=this._getItemIndex(t),s=this._getItemIndex(Y.findOne(rt,this._element));return $.trigger(this._element,"slide.bs.carousel",{relatedTarget:t,direction:e,from:s,to:i})}_setActiveIndicatorElement(t){if(this._indicatorsElement){const e=Y.findOne(".active",this._indicatorsElement);e.classList.remove(ot),e.removeAttribute("aria-current");const i=Y.find("[data-bs-target]",this._indicatorsElement);for(let e=0;e<i.length;e++)if(Number.parseInt(i[e].getAttribute("data-bs-slide-to"),10)===this._getItemIndex(t)){i[e].classList.add(ot),i[e].setAttribute("aria-current","true");break}}}_updateInterval(){const t=this._activeElement||Y.findOne(rt,this._element);if(!t)return;const e=Number.parseInt(t.getAttribute("data-bs-interval"),10);e?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=e):this._config.interval=this._config.defaultInterval||this._config.interval}_slide(t,e){const i=this._directionToOrder(t),s=Y.findOne(rt,this._element),n=this._getItemIndex(s),o=e||this._getItemByOrder(i,s),r=this._getItemIndex(o),a=Boolean(this._interval),l=i===J,c=l?"carousel-item-start":"carousel-item-end",h=l?"carousel-item-next":"carousel-item-prev",d=this._orderToDirection(i);if(o&&o.classList.contains(ot))return void(this._isSliding=!1);if(this._isSliding)return;if(this._triggerSlideEvent(o,d).defaultPrevented)return;if(!s||!o)return;this._isSliding=!0,a&&this.pause(),this._setActiveIndicatorElement(o),this._activeElement=o;const u=()=>{$.trigger(this._element,nt,{relatedTarget:o,direction:d,from:n,to:r})};if(this._element.classList.contains("slide")){o.classList.add(h),f(o),s.classList.add(c),o.classList.add(c);const t=()=>{o.classList.remove(c,h),o.classList.add(ot),s.classList.remove(ot,h,c),this._isSliding=!1,setTimeout(u,0)};this._queueCallback(t,s,!0)}else s.classList.remove(ot),o.classList.add(ot),this._isSliding=!1,u();a&&this.cycle()}_directionToOrder(t){return[it,et].includes(t)?b()?t===et?tt:J:t===et?J:tt:t}_orderToDirection(t){return[J,tt].includes(t)?b()?t===tt?et:it:t===tt?it:et:t}static carouselInterface(t,e){const i=at.getOrCreateInstance(t,e);let{_config:s}=i;"object"==typeof e&&(s={...s,...e});const n="string"==typeof e?e:s.slide;if("number"==typeof e)i.to(e);else if("string"==typeof n){if(void 0===i[n])throw new TypeError(`No method named "${n}"`);i[n]()}else s.interval&&s.ride&&(i.pause(),i.cycle())}static jQueryInterface(t){return this.each((function(){at.carouselInterface(this,t)}))}static dataApiClickHandler(t){const e=r(this);if(!e||!e.classList.contains("carousel"))return;const i={...X.getDataAttributes(e),...X.getDataAttributes(this)},s=this.getAttribute("data-bs-slide-to");s&&(i.interval=!1),at.carouselInterface(e,i),s&&at.getInstance(e).to(s),t.preventDefault()}}$.on(document,"click.bs.carousel.data-api","[data-bs-slide], [data-bs-slide-to]",at.dataApiClickHandler),$.on(window,"load.bs.carousel.data-api",(()=>{const t=Y.find('[data-bs-ride="carousel"]');for(let e=0,i=t.length;e<i;e++)at.carouselInterface(t[e],at.getInstance(t[e]))})),v(at);const lt="collapse",ct={toggle:!0,parent:null},ht={toggle:"boolean",parent:"(null|element)"},dt="show",ut="collapse",gt="collapsing",_t="collapsed",ft=":scope .collapse .collapse",pt='[data-bs-toggle="collapse"]';class mt extends R{constructor(t,e){super(t),this._isTransitioning=!1,this._config=this._getConfig(e),this._triggerArray=[];const i=Y.find(pt);for(let t=0,e=i.length;t<e;t++){const e=i[t],s=o(e),n=Y.find(s).filter((t=>t===this._element));null!==s&&n.length&&(this._selector=s,this._triggerArray.push(e))}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return ct}static get NAME(){return lt}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t,e=[];if(this._config.parent){const t=Y.find(ft,this._config.parent);e=Y.find(".collapse.show, .collapse.collapsing",this._config.parent).filter((e=>!t.includes(e)))}const i=Y.findOne(this._selector);if(e.length){const s=e.find((t=>i!==t));if(t=s?mt.getInstance(s):null,t&&t._isTransitioning)return}if($.trigger(this._element,"show.bs.collapse").defaultPrevented)return;e.forEach((e=>{i!==e&&mt.getOrCreateInstance(e,{toggle:!1}).hide(),t||z.set(e,"bs.collapse",null)}));const s=this._getDimension();this._element.classList.remove(ut),this._element.classList.add(gt),this._element.style[s]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const n=`scroll${s[0].toUpperCase()+s.slice(1)}`;this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove(gt),this._element.classList.add(ut,dt),this._element.style[s]="",$.trigger(this._element,"shown.bs.collapse")}),this._element,!0),this._element.style[s]=`${this._element[n]}px`}hide(){if(this._isTransitioning||!this._isShown())return;if($.trigger(this._element,"hide.bs.collapse").defaultPrevented)return;const t=this._getDimension();this._element.style[t]=`${this._element.getBoundingClientRect()[t]}px`,f(this._element),this._element.classList.add(gt),this._element.classList.remove(ut,dt);const e=this._triggerArray.length;for(let t=0;t<e;t++){const e=this._triggerArray[t],i=r(e);i&&!this._isShown(i)&&this._addAriaAndCollapsedClass([e],!1)}this._isTransitioning=!0,this._element.style[t]="",this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove(gt),this._element.classList.add(ut),$.trigger(this._element,"hidden.bs.collapse")}),this._element,!0)}_isShown(t=this._element){return t.classList.contains(dt)}_getConfig(t){return(t={...ct,...X.getDataAttributes(this._element),...t}).toggle=Boolean(t.toggle),t.parent=c(t.parent),h(lt,t,ht),t}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;const t=Y.find(ft,this._config.parent);Y.find(pt,this._config.parent).filter((e=>!t.includes(e))).forEach((t=>{const e=r(t);e&&this._addAriaAndCollapsedClass([t],this._isShown(e))}))}_addAriaAndCollapsedClass(t,e){t.length&&t.forEach((t=>{e?t.classList.remove(_t):t.classList.add(_t),t.setAttribute("aria-expanded",e)}))}static jQueryInterface(t){return this.each((function(){const e={};"string"==typeof t&&/show|hide/.test(t)&&(e.toggle=!1);const i=mt.getOrCreateInstance(this,e);if("string"==typeof t){if(void 0===i[t])throw new TypeError(`No method named "${t}"`);i[t]()}}))}}$.on(document,"click.bs.collapse.data-api",pt,(function(t){("A"===t.target.tagName||t.delegateTarget&&"A"===t.delegateTarget.tagName)&&t.preventDefault();const e=o(this);Y.find(e).forEach((t=>{mt.getOrCreateInstance(t,{toggle:!1}).toggle()}))})),v(mt);const bt="dropdown",vt="Escape",yt="Space",Et="ArrowUp",wt="ArrowDown",At=new RegExp("ArrowUp|ArrowDown|Escape"),Tt="click.bs.dropdown.data-api",Ct="keydown.bs.dropdown.data-api",kt="show",Lt='[data-bs-toggle="dropdown"]',St=".dropdown-menu",Ot=b()?"top-end":"top-start",Nt=b()?"top-start":"top-end",Dt=b()?"bottom-end":"bottom-start",It=b()?"bottom-start":"bottom-end",Pt=b()?"left-start":"right-start",xt=b()?"right-start":"left-start",Mt={offset:[0,2],boundary:"clippingParents",reference:"toggle",display:"dynamic",popperConfig:null,autoClose:!0},jt={offset:"(array|string|function)",boundary:"(string|element)",reference:"(string|element|object)",display:"string",popperConfig:"(null|object|function)",autoClose:"(boolean|string)"};class Ht extends R{constructor(t,e){super(t),this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar()}static get Default(){return Mt}static get DefaultType(){return jt}static get NAME(){return bt}toggle(){return this._isShown()?this.hide():this.show()}show(){if(u(this._element)||this._isShown(this._menu))return;const t={relatedTarget:this._element};if($.trigger(this._element,"show.bs.dropdown",t).defaultPrevented)return;const e=Ht.getParentFromElement(this._element);this._inNavbar?X.setDataAttribute(this._menu,"popper","none"):this._createPopper(e),"ontouchstart"in document.documentElement&&!e.closest(".navbar-nav")&&[].concat(...document.body.children).forEach((t=>$.on(t,"mouseover",_))),this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(kt),this._element.classList.add(kt),$.trigger(this._element,"shown.bs.dropdown",t)}hide(){if(u(this._element)||!this._isShown(this._menu))return;const t={relatedTarget:this._element};this._completeHide(t)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(t){$.trigger(this._element,"hide.bs.dropdown",t).defaultPrevented||("ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach((t=>$.off(t,"mouseover",_))),this._popper&&this._popper.destroy(),this._menu.classList.remove(kt),this._element.classList.remove(kt),this._element.setAttribute("aria-expanded","false"),X.removeDataAttribute(this._menu,"popper"),$.trigger(this._element,"hidden.bs.dropdown",t))}_getConfig(t){if(t={...this.constructor.Default,...X.getDataAttributes(this._element),...t},h(bt,t,this.constructor.DefaultType),"object"==typeof t.reference&&!l(t.reference)&&"function"!=typeof t.reference.getBoundingClientRect)throw new TypeError(`${bt.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return t}_createPopper(t){if(void 0===i)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let e=this._element;"parent"===this._config.reference?e=t:l(this._config.reference)?e=c(this._config.reference):"object"==typeof this._config.reference&&(e=this._config.reference);const s=this._getPopperConfig(),n=s.modifiers.find((t=>"applyStyles"===t.name&&!1===t.enabled));this._popper=i.createPopper(e,this._menu,s),n&&X.setDataAttribute(this._menu,"popper","static")}_isShown(t=this._element){return t.classList.contains(kt)}_getMenuElement(){return Y.next(this._element,St)[0]}_getPlacement(){const t=this._element.parentNode;if(t.classList.contains("dropend"))return Pt;if(t.classList.contains("dropstart"))return xt;const e="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();return t.classList.contains("dropup")?e?Nt:Ot:e?It:Dt}_detectNavbar(){return null!==this._element.closest(".navbar")}_getOffset(){const{offset:t}=this._config;return"string"==typeof t?t.split(",").map((t=>Number.parseInt(t,10))):"function"==typeof t?e=>t(e,this._element):t}_getPopperConfig(){const t={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return"static"===this._config.display&&(t.modifiers=[{name:"applyStyles",enabled:!1}]),{...t,..."function"==typeof this._config.popperConfig?this._config.popperConfig(t):this._config.popperConfig}}_selectMenuItem({key:t,target:e}){const i=Y.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter(d);i.length&&w(i,e,t===wt,!i.includes(e)).focus()}static jQueryInterface(t){return this.each((function(){const e=Ht.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}static clearMenus(t){if(t&&(2===t.button||"keyup"===t.type&&"Tab"!==t.key))return;const e=Y.find(Lt);for(let i=0,s=e.length;i<s;i++){const s=Ht.getInstance(e[i]);if(!s||!1===s._config.autoClose)continue;if(!s._isShown())continue;const n={relatedTarget:s._element};if(t){const e=t.composedPath(),i=e.includes(s._menu);if(e.includes(s._element)||"inside"===s._config.autoClose&&!i||"outside"===s._config.autoClose&&i)continue;if(s._menu.contains(t.target)&&("keyup"===t.type&&"Tab"===t.key||/input|select|option|textarea|form/i.test(t.target.tagName)))continue;"click"===t.type&&(n.clickEvent=t)}s._completeHide(n)}}static getParentFromElement(t){return r(t)||t.parentNode}static dataApiKeydownHandler(t){if(/input|textarea/i.test(t.target.tagName)?t.key===yt||t.key!==vt&&(t.key!==wt&&t.key!==Et||t.target.closest(St)):!At.test(t.key))return;const e=this.classList.contains(kt);if(!e&&t.key===vt)return;if(t.preventDefault(),t.stopPropagation(),u(this))return;const i=this.matches(Lt)?this:Y.prev(this,Lt)[0],s=Ht.getOrCreateInstance(i);if(t.key!==vt)return t.key===Et||t.key===wt?(e||s.show(),void s._selectMenuItem(t)):void(e&&t.key!==yt||Ht.clearMenus());s.hide()}}$.on(document,Ct,Lt,Ht.dataApiKeydownHandler),$.on(document,Ct,St,Ht.dataApiKeydownHandler),$.on(document,Tt,Ht.clearMenus),$.on(document,"keyup.bs.dropdown.data-api",Ht.clearMenus),$.on(document,Tt,Lt,(function(t){t.preventDefault(),Ht.getOrCreateInstance(this).toggle()})),v(Ht);const $t=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Bt=".sticky-top";class zt{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,"paddingRight",(e=>e+t)),this._setElementAttributes($t,"paddingRight",(e=>e+t)),this._setElementAttributes(Bt,"marginRight",(e=>e-t))}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,e,i){const s=this.getWidth();this._applyManipulationCallback(t,(t=>{if(t!==this._element&&window.innerWidth>t.clientWidth+s)return;this._saveInitialAttribute(t,e);const n=window.getComputedStyle(t)[e];t.style[e]=`${i(Number.parseFloat(n))}px`}))}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,"paddingRight"),this._resetElementAttributes($t,"paddingRight"),this._resetElementAttributes(Bt,"marginRight")}_saveInitialAttribute(t,e){const i=t.style[e];i&&X.setDataAttribute(t,e,i)}_resetElementAttributes(t,e){this._applyManipulationCallback(t,(t=>{const i=X.getDataAttribute(t,e);void 0===i?t.style.removeProperty(e):(X.removeDataAttribute(t,e),t.style[e]=i)}))}_applyManipulationCallback(t,e){l(t)?e(t):Y.find(t,this._element).forEach(e)}isOverflowing(){return this.getWidth()>0}}const Rt={className:"modal-backdrop",isVisible:!0,isAnimated:!1,rootElement:"body",clickCallback:null},Ft={className:"string",isVisible:"boolean",isAnimated:"boolean",rootElement:"(element|string)",clickCallback:"(function|null)"},qt="show",Wt="mousedown.bs.backdrop";class Ut{constructor(t){this._config=this._getConfig(t),this._isAppended=!1,this._element=null}show(t){this._config.isVisible?(this._append(),this._config.isAnimated&&f(this._getElement()),this._getElement().classList.add(qt),this._emulateAnimation((()=>{y(t)}))):y(t)}hide(t){this._config.isVisible?(this._getElement().classList.remove(qt),this._emulateAnimation((()=>{this.dispose(),y(t)}))):y(t)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add("fade"),this._element=t}return this._element}_getConfig(t){return(t={...Rt,..."object"==typeof t?t:{}}).rootElement=c(t.rootElement),h("backdrop",t,Ft),t}_append(){this._isAppended||(this._config.rootElement.append(this._getElement()),$.on(this._getElement(),Wt,(()=>{y(this._config.clickCallback)})),this._isAppended=!0)}dispose(){this._isAppended&&($.off(this._element,Wt),this._element.remove(),this._isAppended=!1)}_emulateAnimation(t){E(t,this._getElement(),this._config.isAnimated)}}const Kt={trapElement:null,autofocus:!0},Vt={trapElement:"element",autofocus:"boolean"},Xt=".bs.focustrap",Yt="backward";class Qt{constructor(t){this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}activate(){const{trapElement:t,autofocus:e}=this._config;this._isActive||(e&&t.focus(),$.off(document,Xt),$.on(document,"focusin.bs.focustrap",(t=>this._handleFocusin(t))),$.on(document,"keydown.tab.bs.focustrap",(t=>this._handleKeydown(t))),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,$.off(document,Xt))}_handleFocusin(t){const{target:e}=t,{trapElement:i}=this._config;if(e===document||e===i||i.contains(e))return;const s=Y.focusableChildren(i);0===s.length?i.focus():this._lastTabNavDirection===Yt?s[s.length-1].focus():s[0].focus()}_handleKeydown(t){"Tab"===t.key&&(this._lastTabNavDirection=t.shiftKey?Yt:"forward")}_getConfig(t){return t={...Kt,..."object"==typeof t?t:{}},h("focustrap",t,Vt),t}}const Gt="modal",Zt="Escape",Jt={backdrop:!0,keyboard:!0,focus:!0},te={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean"},ee="hidden.bs.modal",ie="show.bs.modal",se="resize.bs.modal",ne="click.dismiss.bs.modal",oe="keydown.dismiss.bs.modal",re="mousedown.dismiss.bs.modal",ae="modal-open",le="show",ce="modal-static";class he extends R{constructor(t,e){super(t),this._config=this._getConfig(e),this._dialog=Y.findOne(".modal-dialog",this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollBar=new zt}static get Default(){return Jt}static get NAME(){return Gt}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||this._isTransitioning||$.trigger(this._element,ie,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._isAnimated()&&(this._isTransitioning=!0),this._scrollBar.hide(),document.body.classList.add(ae),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),$.on(this._dialog,re,(()=>{$.one(this._element,"mouseup.dismiss.bs.modal",(t=>{t.target===this._element&&(this._ignoreBackdropClick=!0)}))})),this._showBackdrop((()=>this._showElement(t))))}hide(){if(!this._isShown||this._isTransitioning)return;if($.trigger(this._element,"hide.bs.modal").defaultPrevented)return;this._isShown=!1;const t=this._isAnimated();t&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),this._focustrap.deactivate(),this._element.classList.remove(le),$.off(this._element,ne),$.off(this._dialog,re),this._queueCallback((()=>this._hideModal()),this._element,t)}dispose(){[window,this._dialog].forEach((t=>$.off(t,".bs.modal"))),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Ut({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Qt({trapElement:this._element})}_getConfig(t){return t={...Jt,...X.getDataAttributes(this._element),..."object"==typeof t?t:{}},h(Gt,t,te),t}_showElement(t){const e=this._isAnimated(),i=Y.findOne(".modal-body",this._dialog);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0,i&&(i.scrollTop=0),e&&f(this._element),this._element.classList.add(le),this._queueCallback((()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,$.trigger(this._element,"shown.bs.modal",{relatedTarget:t})}),this._dialog,e)}_setEscapeEvent(){this._isShown?$.on(this._element,oe,(t=>{this._config.keyboard&&t.key===Zt?(t.preventDefault(),this.hide()):this._config.keyboard||t.key!==Zt||this._triggerBackdropTransition()})):$.off(this._element,oe)}_setResizeEvent(){this._isShown?$.on(window,se,(()=>this._adjustDialog())):$.off(window,se)}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide((()=>{document.body.classList.remove(ae),this._resetAdjustments(),this._scrollBar.reset(),$.trigger(this._element,ee)}))}_showBackdrop(t){$.on(this._element,ne,(t=>{this._ignoreBackdropClick?this._ignoreBackdropClick=!1:t.target===t.currentTarget&&(!0===this._config.backdrop?this.hide():"static"===this._config.backdrop&&this._triggerBackdropTransition())})),this._backdrop.show(t)}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){if($.trigger(this._element,"hidePrevented.bs.modal").defaultPrevented)return;const{classList:t,scrollHeight:e,style:i}=this._element,s=e>document.documentElement.clientHeight;!s&&"hidden"===i.overflowY||t.contains(ce)||(s||(i.overflowY="hidden"),t.add(ce),this._queueCallback((()=>{t.remove(ce),s||this._queueCallback((()=>{i.overflowY=""}),this._dialog)}),this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._scrollBar.getWidth(),i=e>0;(!i&&t&&!b()||i&&!t&&b())&&(this._element.style.paddingLeft=`${e}px`),(i&&!t&&!b()||!i&&t&&b())&&(this._element.style.paddingRight=`${e}px`)}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,e){return this.each((function(){const i=he.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===i[t])throw new TypeError(`No method named "${t}"`);i[t](e)}}))}}$.on(document,"click.bs.modal.data-api",'[data-bs-toggle="modal"]',(function(t){const e=r(this);["A","AREA"].includes(this.tagName)&&t.preventDefault(),$.one(e,ie,(t=>{t.defaultPrevented||$.one(e,ee,(()=>{d(this)&&this.focus()}))}));const i=Y.findOne(".modal.show");i&&he.getInstance(i).hide(),he.getOrCreateInstance(e).toggle(this)})),F(he),v(he);const de="offcanvas",ue={backdrop:!0,keyboard:!0,scroll:!1},ge={backdrop:"boolean",keyboard:"boolean",scroll:"boolean"},_e="show",fe=".offcanvas.show",pe="hidden.bs.offcanvas";class me extends R{constructor(t,e){super(t),this._config=this._getConfig(e),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get NAME(){return de}static get Default(){return ue}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||$.trigger(this._element,"show.bs.offcanvas",{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._element.style.visibility="visible",this._backdrop.show(),this._config.scroll||(new zt).hide(),this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(_e),this._queueCallback((()=>{this._config.scroll||this._focustrap.activate(),$.trigger(this._element,"shown.bs.offcanvas",{relatedTarget:t})}),this._element,!0))}hide(){this._isShown&&($.trigger(this._element,"hide.bs.offcanvas").defaultPrevented||(this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.remove(_e),this._backdrop.hide(),this._queueCallback((()=>{this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._element.style.visibility="hidden",this._config.scroll||(new zt).reset(),$.trigger(this._element,pe)}),this._element,!0)))}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_getConfig(t){return t={...ue,...X.getDataAttributes(this._element),..."object"==typeof t?t:{}},h(de,t,ge),t}_initializeBackDrop(){return new Ut({className:"offcanvas-backdrop",isVisible:this._config.backdrop,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:()=>this.hide()})}_initializeFocusTrap(){return new Qt({trapElement:this._element})}_addEventListeners(){$.on(this._element,"keydown.dismiss.bs.offcanvas",(t=>{this._config.keyboard&&"Escape"===t.key&&this.hide()}))}static jQueryInterface(t){return this.each((function(){const e=me.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}$.on(document,"click.bs.offcanvas.data-api",'[data-bs-toggle="offcanvas"]',(function(t){const e=r(this);if(["A","AREA"].includes(this.tagName)&&t.preventDefault(),u(this))return;$.one(e,pe,(()=>{d(this)&&this.focus()}));const i=Y.findOne(fe);i&&i!==e&&me.getInstance(i).hide(),me.getOrCreateInstance(e).toggle(this)})),$.on(window,"load.bs.offcanvas.data-api",(()=>Y.find(fe).forEach((t=>me.getOrCreateInstance(t).show())))),F(me),v(me);const be=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),ve=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,ye=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,Ee=(t,e)=>{const i=t.nodeName.toLowerCase();if(e.includes(i))return!be.has(i)||Boolean(ve.test(t.nodeValue)||ye.test(t.nodeValue));const s=e.filter((t=>t instanceof RegExp));for(let t=0,e=s.length;t<e;t++)if(s[t].test(i))return!0;return!1};function we(t,e,i){if(!t.length)return t;if(i&&"function"==typeof i)return i(t);const s=(new window.DOMParser).parseFromString(t,"text/html"),n=[].concat(...s.body.querySelectorAll("*"));for(let t=0,i=n.length;t<i;t++){const i=n[t],s=i.nodeName.toLowerCase();if(!Object.keys(e).includes(s)){i.remove();continue}const o=[].concat(...i.attributes),r=[].concat(e["*"]||[],e[s]||[]);o.forEach((t=>{Ee(t,r)||i.removeAttribute(t.nodeName)}))}return s.body.innerHTML}const Ae="tooltip",Te=new Set(["sanitize","allowList","sanitizeFn"]),Ce={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(array|string|function)",container:"(string|element|boolean)",fallbackPlacements:"array",boundary:"(string|element)",customClass:"(string|function)",sanitize:"boolean",sanitizeFn:"(null|function)",allowList:"object",popperConfig:"(null|object|function)"},ke={AUTO:"auto",TOP:"top",RIGHT:b()?"left":"right",BOTTOM:"bottom",LEFT:b()?"right":"left"},Le={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:[0,0],container:!1,fallbackPlacements:["top","right","bottom","left"],boundary:"clippingParents",customClass:"",sanitize:!0,sanitizeFn:null,allowList:{"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},popperConfig:null},Se={HIDE:"hide.bs.tooltip",HIDDEN:"hidden.bs.tooltip",SHOW:"show.bs.tooltip",SHOWN:"shown.bs.tooltip",INSERTED:"inserted.bs.tooltip",CLICK:"click.bs.tooltip",FOCUSIN:"focusin.bs.tooltip",FOCUSOUT:"focusout.bs.tooltip",MOUSEENTER:"mouseenter.bs.tooltip",MOUSELEAVE:"mouseleave.bs.tooltip"},Oe="fade",Ne="show",De="show",Ie="out",Pe=".tooltip-inner",xe=".modal",Me="hide.bs.modal",je="hover",He="focus";class $e extends R{constructor(t,e){if(void 0===i)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(t),this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this._config=this._getConfig(e),this.tip=null,this._setListeners()}static get Default(){return Le}static get NAME(){return Ae}static get Event(){return Se}static get DefaultType(){return Ce}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(t){if(this._isEnabled)if(t){const e=this._initializeOnDelegatedTarget(t);e._activeTrigger.click=!e._activeTrigger.click,e._isWithActiveTrigger()?e._enter(null,e):e._leave(null,e)}else{if(this.getTipElement().classList.contains(Ne))return void this._leave(null,this);this._enter(null,this)}}dispose(){clearTimeout(this._timeout),$.off(this._element.closest(xe),Me,this._hideModalHandler),this.tip&&this.tip.remove(),this._disposePopper(),super.dispose()}show(){if("none"===this._element.style.display)throw new Error("Please use show on visible elements");if(!this.isWithContent()||!this._isEnabled)return;const t=$.trigger(this._element,this.constructor.Event.SHOW),e=g(this._element),s=null===e?this._element.ownerDocument.documentElement.contains(this._element):e.contains(this._element);if(t.defaultPrevented||!s)return;"tooltip"===this.constructor.NAME&&this.tip&&this.getTitle()!==this.tip.querySelector(Pe).innerHTML&&(this._disposePopper(),this.tip.remove(),this.tip=null);const n=this.getTipElement(),o=(t=>{do{t+=Math.floor(1e6*Math.random())}while(document.getElementById(t));return t})(this.constructor.NAME);n.setAttribute("id",o),this._element.setAttribute("aria-describedby",o),this._config.animation&&n.classList.add(Oe);const r="function"==typeof this._config.placement?this._config.placement.call(this,n,this._element):this._config.placement,a=this._getAttachment(r);this._addAttachmentClass(a);const{container:l}=this._config;z.set(n,this.constructor.DATA_KEY,this),this._element.ownerDocument.documentElement.contains(this.tip)||(l.append(n),$.trigger(this._element,this.constructor.Event.INSERTED)),this._popper?this._popper.update():this._popper=i.createPopper(this._element,n,this._getPopperConfig(a)),n.classList.add(Ne);const c=this._resolvePossibleFunction(this._config.customClass);c&&n.classList.add(...c.split(" ")),"ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach((t=>{$.on(t,"mouseover",_)}));const h=this.tip.classList.contains(Oe);this._queueCallback((()=>{const t=this._hoverState;this._hoverState=null,$.trigger(this._element,this.constructor.Event.SHOWN),t===Ie&&this._leave(null,this)}),this.tip,h)}hide(){if(!this._popper)return;const t=this.getTipElement();if($.trigger(this._element,this.constructor.Event.HIDE).defaultPrevented)return;t.classList.remove(Ne),"ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach((t=>$.off(t,"mouseover",_))),this._activeTrigger.click=!1,this._activeTrigger.focus=!1,this._activeTrigger.hover=!1;const e=this.tip.classList.contains(Oe);this._queueCallback((()=>{this._isWithActiveTrigger()||(this._hoverState!==De&&t.remove(),this._cleanTipClass(),this._element.removeAttribute("aria-describedby"),$.trigger(this._element,this.constructor.Event.HIDDEN),this._disposePopper())}),this.tip,e),this._hoverState=""}update(){null!==this._popper&&this._popper.update()}isWithContent(){return Boolean(this.getTitle())}getTipElement(){if(this.tip)return this.tip;const t=document.createElement("div");t.innerHTML=this._config.template;const e=t.children[0];return this.setContent(e),e.classList.remove(Oe,Ne),this.tip=e,this.tip}setContent(t){this._sanitizeAndSetContent(t,this.getTitle(),Pe)}_sanitizeAndSetContent(t,e,i){const s=Y.findOne(i,t);e||!s?this.setElementContent(s,e):s.remove()}setElementContent(t,e){if(null!==t)return l(e)?(e=c(e),void(this._config.html?e.parentNode!==t&&(t.innerHTML="",t.append(e)):t.textContent=e.textContent)):void(this._config.html?(this._config.sanitize&&(e=we(e,this._config.allowList,this._config.sanitizeFn)),t.innerHTML=e):t.textContent=e)}getTitle(){const t=this._element.getAttribute("data-bs-original-title")||this._config.title;return this._resolvePossibleFunction(t)}updateAttachment(t){return"right"===t?"end":"left"===t?"start":t}_initializeOnDelegatedTarget(t,e){return e||this.constructor.getOrCreateInstance(t.delegateTarget,this._getDelegateConfig())}_getOffset(){const{offset:t}=this._config;return"string"==typeof t?t.split(",").map((t=>Number.parseInt(t,10))):"function"==typeof t?e=>t(e,this._element):t}_resolvePossibleFunction(t){return"function"==typeof t?t.call(this._element):t}_getPopperConfig(t){const e={placement:t,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"onChange",enabled:!0,phase:"afterWrite",fn:t=>this._handlePopperPlacementChange(t)}],onFirstUpdate:t=>{t.options.placement!==t.placement&&this._handlePopperPlacementChange(t)}};return{...e,..."function"==typeof this._config.popperConfig?this._config.popperConfig(e):this._config.popperConfig}}_addAttachmentClass(t){this.getTipElement().classList.add(`${this._getBasicClassPrefix()}-${this.updateAttachment(t)}`)}_getAttachment(t){return ke[t.toUpperCase()]}_setListeners(){this._config.trigger.split(" ").forEach((t=>{if("click"===t)$.on(this._element,this.constructor.Event.CLICK,this._config.selector,(t=>this.toggle(t)));else if("manual"!==t){const e=t===je?this.constructor.Event.MOUSEENTER:this.constructor.Event.FOCUSIN,i=t===je?this.constructor.Event.MOUSELEAVE:this.constructor.Event.FOCUSOUT;$.on(this._element,e,this._config.selector,(t=>this._enter(t))),$.on(this._element,i,this._config.selector,(t=>this._leave(t)))}})),this._hideModalHandler=()=>{this._element&&this.hide()},$.on(this._element.closest(xe),Me,this._hideModalHandler),this._config.selector?this._config={...this._config,trigger:"manual",selector:""}:this._fixTitle()}_fixTitle(){const t=this._element.getAttribute("title"),e=typeof this._element.getAttribute("data-bs-original-title");(t||"string"!==e)&&(this._element.setAttribute("data-bs-original-title",t||""),!t||this._element.getAttribute("aria-label")||this._element.textContent||this._element.setAttribute("aria-label",t),this._element.setAttribute("title",""))}_enter(t,e){e=this._initializeOnDelegatedTarget(t,e),t&&(e._activeTrigger["focusin"===t.type?He:je]=!0),e.getTipElement().classList.contains(Ne)||e._hoverState===De?e._hoverState=De:(clearTimeout(e._timeout),e._hoverState=De,e._config.delay&&e._config.delay.show?e._timeout=setTimeout((()=>{e._hoverState===De&&e.show()}),e._config.delay.show):e.show())}_leave(t,e){e=this._initializeOnDelegatedTarget(t,e),t&&(e._activeTrigger["focusout"===t.type?He:je]=e._element.contains(t.relatedTarget)),e._isWithActiveTrigger()||(clearTimeout(e._timeout),e._hoverState=Ie,e._config.delay&&e._config.delay.hide?e._timeout=setTimeout((()=>{e._hoverState===Ie&&e.hide()}),e._config.delay.hide):e.hide())}_isWithActiveTrigger(){for(const t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1}_getConfig(t){const e=X.getDataAttributes(this._element);return Object.keys(e).forEach((t=>{Te.has(t)&&delete e[t]})),(t={...this.constructor.Default,...e,..."object"==typeof t&&t?t:{}}).container=!1===t.container?document.body:c(t.container),"number"==typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),h(Ae,t,this.constructor.DefaultType),t.sanitize&&(t.template=we(t.template,t.allowList,t.sanitizeFn)),t}_getDelegateConfig(){const t={};for(const e in this._config)this.constructor.Default[e]!==this._config[e]&&(t[e]=this._config[e]);return t}_cleanTipClass(){const t=this.getTipElement(),e=new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`,"g"),i=t.getAttribute("class").match(e);null!==i&&i.length>0&&i.map((t=>t.trim())).forEach((e=>t.classList.remove(e)))}_getBasicClassPrefix(){return"bs-tooltip"}_handlePopperPlacementChange(t){const{state:e}=t;e&&(this.tip=e.elements.popper,this._cleanTipClass(),this._addAttachmentClass(this._getAttachment(e.placement)))}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null)}static jQueryInterface(t){return this.each((function(){const e=$e.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}v($e);const Be={...$e.Default,placement:"right",offset:[0,8],trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'},ze={...$e.DefaultType,content:"(string|element|function)"},Re={HIDE:"hide.bs.popover",HIDDEN:"hidden.bs.popover",SHOW:"show.bs.popover",SHOWN:"shown.bs.popover",INSERTED:"inserted.bs.popover",CLICK:"click.bs.popover",FOCUSIN:"focusin.bs.popover",FOCUSOUT:"focusout.bs.popover",MOUSEENTER:"mouseenter.bs.popover",MOUSELEAVE:"mouseleave.bs.popover"};class Fe extends $e{static get Default(){return Be}static get NAME(){return"popover"}static get Event(){return Re}static get DefaultType(){return ze}isWithContent(){return this.getTitle()||this._getContent()}setContent(t){this._sanitizeAndSetContent(t,this.getTitle(),".popover-header"),this._sanitizeAndSetContent(t,this._getContent(),".popover-body")}_getContent(){return this._resolvePossibleFunction(this._config.content)}_getBasicClassPrefix(){return"bs-popover"}static jQueryInterface(t){return this.each((function(){const e=Fe.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}v(Fe);const qe="scrollspy",We={offset:10,method:"auto",target:""},Ue={offset:"number",method:"string",target:"(string|element)"},Ke="active",Ve=".nav-link, .list-group-item, .dropdown-item",Xe="position";class Ye extends R{constructor(t,e){super(t),this._scrollElement="BODY"===this._element.tagName?window:this._element,this._config=this._getConfig(e),this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,$.on(this._scrollElement,"scroll.bs.scrollspy",(()=>this._process())),this.refresh(),this._process()}static get Default(){return We}static get NAME(){return qe}refresh(){const t=this._scrollElement===this._scrollElement.window?"offset":Xe,e="auto"===this._config.method?t:this._config.method,i=e===Xe?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),Y.find(Ve,this._config.target).map((t=>{const s=o(t),n=s?Y.findOne(s):null;if(n){const t=n.getBoundingClientRect();if(t.width||t.height)return[X[e](n).top+i,s]}return null})).filter((t=>t)).sort(((t,e)=>t[0]-e[0])).forEach((t=>{this._offsets.push(t[0]),this._targets.push(t[1])}))}dispose(){$.off(this._scrollElement,".bs.scrollspy"),super.dispose()}_getConfig(t){return(t={...We,...X.getDataAttributes(this._element),..."object"==typeof t&&t?t:{}}).target=c(t.target)||document.documentElement,h(qe,t,Ue),t}_getScrollTop(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop}_getScrollHeight(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)}_getOffsetHeight(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height}_process(){const t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),i=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),t>=i){const t=this._targets[this._targets.length-1];this._activeTarget!==t&&this._activate(t)}else{if(this._activeTarget&&t<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(let e=this._offsets.length;e--;)this._activeTarget!==this._targets[e]&&t>=this._offsets[e]&&(void 0===this._offsets[e+1]||t<this._offsets[e+1])&&this._activate(this._targets[e])}}_activate(t){this._activeTarget=t,this._clear();const e=Ve.split(",").map((e=>`${e}[data-bs-target="${t}"],${e}[href="${t}"]`)),i=Y.findOne(e.join(","),this._config.target);i.classList.add(Ke),i.classList.contains("dropdown-item")?Y.findOne(".dropdown-toggle",i.closest(".dropdown")).classList.add(Ke):Y.parents(i,".nav, .list-group").forEach((t=>{Y.prev(t,".nav-link, .list-group-item").forEach((t=>t.classList.add(Ke))),Y.prev(t,".nav-item").forEach((t=>{Y.children(t,".nav-link").forEach((t=>t.classList.add(Ke)))}))})),$.trigger(this._scrollElement,"activate.bs.scrollspy",{relatedTarget:t})}_clear(){Y.find(Ve,this._config.target).filter((t=>t.classList.contains(Ke))).forEach((t=>t.classList.remove(Ke)))}static jQueryInterface(t){return this.each((function(){const e=Ye.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}$.on(window,"load.bs.scrollspy.data-api",(()=>{Y.find('[data-bs-spy="scroll"]').forEach((t=>new Ye(t)))})),v(Ye);const Qe="active",Ge="fade",Ze="show",Je=".active",ti=":scope > li > .active";class ei extends R{static get NAME(){return"tab"}show(){if(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&this._element.classList.contains(Qe))return;let t;const e=r(this._element),i=this._element.closest(".nav, .list-group");if(i){const e="UL"===i.nodeName||"OL"===i.nodeName?ti:Je;t=Y.find(e,i),t=t[t.length-1]}const s=t?$.trigger(t,"hide.bs.tab",{relatedTarget:this._element}):null;if($.trigger(this._element,"show.bs.tab",{relatedTarget:t}).defaultPrevented||null!==s&&s.defaultPrevented)return;this._activate(this._element,i);const n=()=>{$.trigger(t,"hidden.bs.tab",{relatedTarget:this._element}),$.trigger(this._element,"shown.bs.tab",{relatedTarget:t})};e?this._activate(e,e.parentNode,n):n()}_activate(t,e,i){const s=(!e||"UL"!==e.nodeName&&"OL"!==e.nodeName?Y.children(e,Je):Y.find(ti,e))[0],n=i&&s&&s.classList.contains(Ge),o=()=>this._transitionComplete(t,s,i);s&&n?(s.classList.remove(Ze),this._queueCallback(o,t,!0)):o()}_transitionComplete(t,e,i){if(e){e.classList.remove(Qe);const t=Y.findOne(":scope > .dropdown-menu .active",e.parentNode);t&&t.classList.remove(Qe),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!1)}t.classList.add(Qe),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),f(t),t.classList.contains(Ge)&&t.classList.add(Ze);let s=t.parentNode;if(s&&"LI"===s.nodeName&&(s=s.parentNode),s&&s.classList.contains("dropdown-menu")){const e=t.closest(".dropdown");e&&Y.find(".dropdown-toggle",e).forEach((t=>t.classList.add(Qe))),t.setAttribute("aria-expanded",!0)}i&&i()}static jQueryInterface(t){return this.each((function(){const e=ei.getOrCreateInstance(this);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}$.on(document,"click.bs.tab.data-api",'[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',(function(t){["A","AREA"].includes(this.tagName)&&t.preventDefault(),u(this)||ei.getOrCreateInstance(this).show()})),v(ei);const ii="toast",si="hide",ni="show",oi="showing",ri={animation:"boolean",autohide:"boolean",delay:"number"},ai={animation:!0,autohide:!0,delay:5e3};class li extends R{constructor(t,e){super(t),this._config=this._getConfig(e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get DefaultType(){return ri}static get Default(){return ai}static get NAME(){return ii}show(){$.trigger(this._element,"show.bs.toast").defaultPrevented||(this._clearTimeout(),this._config.animation&&this._element.classList.add("fade"),this._element.classList.remove(si),f(this._element),this._element.classList.add(ni),this._element.classList.add(oi),this._queueCallback((()=>{this._element.classList.remove(oi),$.trigger(this._element,"shown.bs.toast"),this._maybeScheduleHide()}),this._element,this._config.animation))}hide(){this._element.classList.contains(ni)&&($.trigger(this._element,"hide.bs.toast").defaultPrevented||(this._element.classList.add(oi),this._queueCallback((()=>{this._element.classList.add(si),this._element.classList.remove(oi),this._element.classList.remove(ni),$.trigger(this._element,"hidden.bs.toast")}),this._element,this._config.animation)))}dispose(){this._clearTimeout(),this._element.classList.contains(ni)&&this._element.classList.remove(ni),super.dispose()}_getConfig(t){return t={...ai,...X.getDataAttributes(this._element),..."object"==typeof t&&t?t:{}},h(ii,t,this.constructor.DefaultType),t}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout((()=>{this.hide()}),this._config.delay)))}_onInteraction(t,e){switch(t.type){case"mouseover":case"mouseout":this._hasMouseInteraction=e;break;case"focusin":case"focusout":this._hasKeyboardInteraction=e}if(e)return void this._clearTimeout();const i=t.relatedTarget;this._element===i||this._element.contains(i)||this._maybeScheduleHide()}_setListeners(){$.on(this._element,"mouseover.bs.toast",(t=>this._onInteraction(t,!0))),$.on(this._element,"mouseout.bs.toast",(t=>this._onInteraction(t,!1))),$.on(this._element,"focusin.bs.toast",(t=>this._onInteraction(t,!0))),$.on(this._element,"focusout.bs.toast",(t=>this._onInteraction(t,!1)))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each((function(){const e=li.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}return F(li),v(li),{Alert:q,Button:U,Carousel:at,Collapse:mt,Dropdown:Ht,Modal:he,Offcanvas:me,Popover:Fe,ScrollSpy:Ye,Tab:ei,Toast:li,Tooltip:$e}}));
  
  /*! jQuery v2.1.3 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
  !function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.3",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=hb(),z=hb(),A=hb(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},eb=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fb){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function gb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+rb(o[l]);w=ab.test(a)&&pb(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function hb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ib(a){return a[u]=!0,a}function jb(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function kb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function lb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function nb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function ob(a){return ib(function(b){return b=+b,ib(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pb(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=gb.support={},f=gb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=gb.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",eb,!1):e.attachEvent&&e.attachEvent("onunload",eb)),p=!f(g),c.attributes=jb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=jb(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=jb(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(jb(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),jb(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&jb(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return lb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?lb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},gb.matches=function(a,b){return gb(a,null,null,b)},gb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return gb(b,n,null,[a]).length>0},gb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},gb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},gb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},gb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=gb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=gb.selectors={cacheLength:50,createPseudo:ib,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||gb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&gb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=gb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||gb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ib(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ib(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ib(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ib(function(a){return function(b){return gb(a,b).length>0}}),contains:ib(function(a){return a=a.replace(cb,db),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ib(function(a){return W.test(a||"")||gb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:ob(function(){return[0]}),last:ob(function(a,b){return[b-1]}),eq:ob(function(a,b,c){return[0>c?c+b:c]}),even:ob(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:ob(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:ob(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:ob(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=mb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=nb(b);function qb(){}qb.prototype=d.filters=d.pseudos,d.setFilters=new qb,g=gb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?gb.error(a):z(a,i).slice(0)};function rb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function tb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ub(a,b,c){for(var d=0,e=b.length;e>d;d++)gb(a,b[d],c);return c}function vb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wb(a,b,c,d,e,f){return d&&!d[u]&&(d=wb(d)),e&&!e[u]&&(e=wb(e,f)),ib(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ub(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:vb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=vb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=vb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sb(function(a){return a===b},h,!0),l=sb(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sb(tb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wb(i>1&&tb(m),i>1&&rb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xb(a.slice(i,e)),f>e&&xb(a=a.slice(e)),f>e&&rb(a))}m.push(c)}return tb(m)}function yb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=vb(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&gb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ib(f):f}return h=gb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,yb(e,d)),f.selector=a}return f},i=gb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&pb(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&rb(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&pb(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=jb(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),jb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||kb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&jb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||kb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),jb(function(a){return null==a.getAttribute("disabled")})||kb(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),gb}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)
  },removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(ob(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(ob(c,"script"),kb),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(hb,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function tb(a){var b=l,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:"0",fontWeight:"400"},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?zb.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=yb(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(n.cssHooks[a+b].set=Gb)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}n.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Kb.prototype.init,n.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=n.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||tb(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?tb(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ub(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return n.map(k,Ub,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xb,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xb(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),n.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Lb=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Lb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Mb||(Mb=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Mb),Mb=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Yb,Zb,$b=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))
  },removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||n.find.attr;$b[b]=function(a,b,d){var e,f;return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=n.now(),dc=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var ec=/#.*$/,fc=/([?&])_=[^&]*/,gc=/^(.*?):[ \t]*([^\r\n]*)$/gm,hc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ic=/^(?:GET|HEAD)$/,jc=/^\/\//,kc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lc={},mc={},nc="*/".concat("*"),oc=a.location.href,pc=kc.exec(oc.toLowerCase())||[];function qc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rc(a,b,c,d){var e={},f=a===mc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function uc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:oc,type:"GET",isLocal:hc.test(pc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sc(sc(a,n.ajaxSettings),b):sc(n.ajaxSettings,a)},ajaxPrefilter:qc(lc),ajaxTransport:qc(mc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gc.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||oc)+"").replace(ec,"").replace(jc,pc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pc[1]&&h[2]===pc[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pc[3]||("http:"===pc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rc(lc,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ic.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fc.test(d)?d.replace(fc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rc(mc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tc(k,v,f)),u=uc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vc=/%20/g,wc=/\[\]$/,xc=/\r?\n/g,yc=/^(?:submit|button|image|reset|file)$/i,zc=/^(?:input|select|textarea|keygen)/i;function Ac(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wc.test(a)?d(a,e):Ac(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ac(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ac(c,a[c],b,e);return d.join("&").replace(vc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zc.test(this.nodeName)&&!yc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xc,"\r\n")}}):{name:b.name,value:c.replace(xc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bc=0,Cc={},Dc={0:200,1223:204},Ec=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cc)Cc[a]()}),k.cors=!!Ec&&"withCredentials"in Ec,k.ajax=Ec=!!Ec,n.ajaxTransport(function(a){var b;return k.cors||Ec&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Dc[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cc[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fc=[],Gc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fc.pop()||n.expando+"_"+cc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hc=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hc)return Hc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ic=a.document.documentElement;function Jc(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ic;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ic})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=yb(k.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kc=a.jQuery,Lc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lc),b&&a.jQuery===n&&(a.jQuery=Kc),n},typeof b===U&&(a.jQuery=a.$=n),n});
  
  /*!
   * Isotope PACKAGED v2.0.0
   * Filter & sort magical layouts
   * http://isotope.metafizzy.co
   */
  
  (function(t){function e(){}function i(t){function i(e){e.prototype.option||(e.prototype.option=function(e){t.isPlainObject(e)&&(this.options=t.extend(!0,this.options,e))})}function n(e,i){t.fn[e]=function(n){if("string"==typeof n){for(var s=o.call(arguments,1),a=0,u=this.length;u>a;a++){var p=this[a],h=t.data(p,e);if(h)if(t.isFunction(h[n])&&"_"!==n.charAt(0)){var f=h[n].apply(h,s);if(void 0!==f)return f}else r("no such method '"+n+"' for "+e+" instance");else r("cannot call methods on "+e+" prior to initialization; "+"attempted to call '"+n+"'")}return this}return this.each(function(){var o=t.data(this,e);o?(o.option(n),o._init()):(o=new i(this,n),t.data(this,e,o))})}}if(t){var r="undefined"==typeof console?e:function(t){console.error(t)};return t.bridget=function(t,e){i(e),n(t,e)},t.bridget}}var o=Array.prototype.slice;"function"==typeof define&&define.amd?define("jquery-bridget/jquery.bridget",["jquery"],i):i(t.jQuery)})(window),function(t){function e(e){var i=t.event;return i.target=i.target||i.srcElement||e,i}var i=document.documentElement,o=function(){};i.addEventListener?o=function(t,e,i){t.addEventListener(e,i,!1)}:i.attachEvent&&(o=function(t,i,o){t[i+o]=o.handleEvent?function(){var i=e(t);o.handleEvent.call(o,i)}:function(){var i=e(t);o.call(t,i)},t.attachEvent("on"+i,t[i+o])});var n=function(){};i.removeEventListener?n=function(t,e,i){t.removeEventListener(e,i,!1)}:i.detachEvent&&(n=function(t,e,i){t.detachEvent("on"+e,t[e+i]);try{delete t[e+i]}catch(o){t[e+i]=void 0}});var r={bind:o,unbind:n};"function"==typeof define&&define.amd?define("eventie/eventie",r):"object"==typeof exports?module.exports=r:t.eventie=r}(this),function(t){function e(t){"function"==typeof t&&(e.isReady?t():r.push(t))}function i(t){var i="readystatechange"===t.type&&"complete"!==n.readyState;if(!e.isReady&&!i){e.isReady=!0;for(var o=0,s=r.length;s>o;o++){var a=r[o];a()}}}function o(o){return o.bind(n,"DOMContentLoaded",i),o.bind(n,"readystatechange",i),o.bind(t,"load",i),e}var n=t.document,r=[];e.isReady=!1,"function"==typeof define&&define.amd?(e.isReady="function"==typeof requirejs,define("doc-ready/doc-ready",["eventie/eventie"],o)):t.docReady=o(t.eventie)}(this),function(){function t(){}function e(t,e){for(var i=t.length;i--;)if(t[i].listener===e)return i;return-1}function i(t){return function(){return this[t].apply(this,arguments)}}var o=t.prototype,n=this,r=n.EventEmitter;o.getListeners=function(t){var e,i,o=this._getEvents();if(t instanceof RegExp){e={};for(i in o)o.hasOwnProperty(i)&&t.test(i)&&(e[i]=o[i])}else e=o[t]||(o[t]=[]);return e},o.flattenListeners=function(t){var e,i=[];for(e=0;t.length>e;e+=1)i.push(t[e].listener);return i},o.getListenersAsObject=function(t){var e,i=this.getListeners(t);return i instanceof Array&&(e={},e[t]=i),e||i},o.addListener=function(t,i){var o,n=this.getListenersAsObject(t),r="object"==typeof i;for(o in n)n.hasOwnProperty(o)&&-1===e(n[o],i)&&n[o].push(r?i:{listener:i,once:!1});return this},o.on=i("addListener"),o.addOnceListener=function(t,e){return this.addListener(t,{listener:e,once:!0})},o.once=i("addOnceListener"),o.defineEvent=function(t){return this.getListeners(t),this},o.defineEvents=function(t){for(var e=0;t.length>e;e+=1)this.defineEvent(t[e]);return this},o.removeListener=function(t,i){var o,n,r=this.getListenersAsObject(t);for(n in r)r.hasOwnProperty(n)&&(o=e(r[n],i),-1!==o&&r[n].splice(o,1));return this},o.off=i("removeListener"),o.addListeners=function(t,e){return this.manipulateListeners(!1,t,e)},o.removeListeners=function(t,e){return this.manipulateListeners(!0,t,e)},o.manipulateListeners=function(t,e,i){var o,n,r=t?this.removeListener:this.addListener,s=t?this.removeListeners:this.addListeners;if("object"!=typeof e||e instanceof RegExp)for(o=i.length;o--;)r.call(this,e,i[o]);else for(o in e)e.hasOwnProperty(o)&&(n=e[o])&&("function"==typeof n?r.call(this,o,n):s.call(this,o,n));return this},o.removeEvent=function(t){var e,i=typeof t,o=this._getEvents();if("string"===i)delete o[t];else if(t instanceof RegExp)for(e in o)o.hasOwnProperty(e)&&t.test(e)&&delete o[e];else delete this._events;return this},o.removeAllListeners=i("removeEvent"),o.emitEvent=function(t,e){var i,o,n,r,s=this.getListenersAsObject(t);for(n in s)if(s.hasOwnProperty(n))for(o=s[n].length;o--;)i=s[n][o],i.once===!0&&this.removeListener(t,i.listener),r=i.listener.apply(this,e||[]),r===this._getOnceReturnValue()&&this.removeListener(t,i.listener);return this},o.trigger=i("emitEvent"),o.emit=function(t){var e=Array.prototype.slice.call(arguments,1);return this.emitEvent(t,e)},o.setOnceReturnValue=function(t){return this._onceReturnValue=t,this},o._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},o._getEvents=function(){return this._events||(this._events={})},t.noConflict=function(){return n.EventEmitter=r,t},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return t}):"object"==typeof module&&module.exports?module.exports=t:this.EventEmitter=t}.call(this),function(t){function e(t){if(t){if("string"==typeof o[t])return t;t=t.charAt(0).toUpperCase()+t.slice(1);for(var e,n=0,r=i.length;r>n;n++)if(e=i[n]+t,"string"==typeof o[e])return e}}var i="Webkit Moz ms Ms O".split(" "),o=document.documentElement.style;"function"==typeof define&&define.amd?define("get-style-property/get-style-property",[],function(){return e}):"object"==typeof exports?module.exports=e:t.getStyleProperty=e}(window),function(t){function e(t){var e=parseFloat(t),i=-1===t.indexOf("%")&&!isNaN(e);return i&&e}function i(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0,i=s.length;i>e;e++){var o=s[e];t[o]=0}return t}function o(t){function o(t){if("string"==typeof t&&(t=document.querySelector(t)),t&&"object"==typeof t&&t.nodeType){var o=r(t);if("none"===o.display)return i();var n={};n.width=t.offsetWidth,n.height=t.offsetHeight;for(var h=n.isBorderBox=!(!p||!o[p]||"border-box"!==o[p]),f=0,c=s.length;c>f;f++){var d=s[f],l=o[d];l=a(t,l);var y=parseFloat(l);n[d]=isNaN(y)?0:y}var m=n.paddingLeft+n.paddingRight,g=n.paddingTop+n.paddingBottom,v=n.marginLeft+n.marginRight,_=n.marginTop+n.marginBottom,I=n.borderLeftWidth+n.borderRightWidth,L=n.borderTopWidth+n.borderBottomWidth,z=h&&u,S=e(o.width);S!==!1&&(n.width=S+(z?0:m+I));var b=e(o.height);return b!==!1&&(n.height=b+(z?0:g+L)),n.innerWidth=n.width-(m+I),n.innerHeight=n.height-(g+L),n.outerWidth=n.width+v,n.outerHeight=n.height+_,n}}function a(t,e){if(n||-1===e.indexOf("%"))return e;var i=t.style,o=i.left,r=t.runtimeStyle,s=r&&r.left;return s&&(r.left=t.currentStyle.left),i.left=e,e=i.pixelLeft,i.left=o,s&&(r.left=s),e}var u,p=t("boxSizing");return function(){if(p){var t=document.createElement("div");t.style.width="200px",t.style.padding="1px 2px 3px 4px",t.style.borderStyle="solid",t.style.borderWidth="1px 2px 3px 4px",t.style[p]="border-box";var i=document.body||document.documentElement;i.appendChild(t);var o=r(t);u=200===e(o.width),i.removeChild(t)}}(),o}var n=t.getComputedStyle,r=n?function(t){return n(t,null)}:function(t){return t.currentStyle},s=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];"function"==typeof define&&define.amd?define("get-size/get-size",["get-style-property/get-style-property"],o):"object"==typeof exports?module.exports=o(require("get-style-property")):t.getSize=o(t.getStyleProperty)}(window),function(t,e){function i(t,e){return t[a](e)}function o(t){if(!t.parentNode){var e=document.createDocumentFragment();e.appendChild(t)}}function n(t,e){o(t);for(var i=t.parentNode.querySelectorAll(e),n=0,r=i.length;r>n;n++)if(i[n]===t)return!0;return!1}function r(t,e){return o(t),i(t,e)}var s,a=function(){if(e.matchesSelector)return"matchesSelector";for(var t=["webkit","moz","ms","o"],i=0,o=t.length;o>i;i++){var n=t[i],r=n+"MatchesSelector";if(e[r])return r}}();if(a){var u=document.createElement("div"),p=i(u,"div");s=p?i:r}else s=n;"function"==typeof define&&define.amd?define("matches-selector/matches-selector",[],function(){return s}):window.matchesSelector=s}(this,Element.prototype),function(t){function e(t,e){for(var i in e)t[i]=e[i];return t}function i(t){for(var e in t)return!1;return e=null,!0}function o(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}function n(t,n,r){function a(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}var u=r("transition"),p=r("transform"),h=u&&p,f=!!r("perspective"),c={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"}[u],d=["transform","transition","transitionDuration","transitionProperty"],l=function(){for(var t={},e=0,i=d.length;i>e;e++){var o=d[e],n=r(o);n&&n!==o&&(t[o]=n)}return t}();e(a.prototype,t.prototype),a.prototype._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},a.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},a.prototype.getSize=function(){this.size=n(this.element)},a.prototype.css=function(t){var e=this.element.style;for(var i in t){var o=l[i]||i;e[o]=t[i]}},a.prototype.getPosition=function(){var t=s(this.element),e=this.layout.options,i=e.isOriginLeft,o=e.isOriginTop,n=parseInt(t[i?"left":"right"],10),r=parseInt(t[o?"top":"bottom"],10);n=isNaN(n)?0:n,r=isNaN(r)?0:r;var a=this.layout.size;n-=i?a.paddingLeft:a.paddingRight,r-=o?a.paddingTop:a.paddingBottom,this.position.x=n,this.position.y=r},a.prototype.layoutPosition=function(){var t=this.layout.size,e=this.layout.options,i={};e.isOriginLeft?(i.left=this.position.x+t.paddingLeft+"px",i.right=""):(i.right=this.position.x+t.paddingRight+"px",i.left=""),e.isOriginTop?(i.top=this.position.y+t.paddingTop+"px",i.bottom=""):(i.bottom=this.position.y+t.paddingBottom+"px",i.top=""),this.css(i),this.emitEvent("layout",[this])};var y=f?function(t,e){return"translate3d("+t+"px, "+e+"px, 0)"}:function(t,e){return"translate("+t+"px, "+e+"px)"};a.prototype._transitionTo=function(t,e){this.getPosition();var i=this.position.x,o=this.position.y,n=parseInt(t,10),r=parseInt(e,10),s=n===this.position.x&&r===this.position.y;if(this.setPosition(t,e),s&&!this.isTransitioning)return this.layoutPosition(),void 0;var a=t-i,u=e-o,p={},h=this.layout.options;a=h.isOriginLeft?a:-a,u=h.isOriginTop?u:-u,p.transform=y(a,u),this.transition({to:p,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},a.prototype.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},a.prototype.moveTo=h?a.prototype._transitionTo:a.prototype.goTo,a.prototype.setPosition=function(t,e){this.position.x=parseInt(t,10),this.position.y=parseInt(e,10)},a.prototype._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to);for(var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)},a.prototype._transition=function(t){if(!parseFloat(this.layout.options.transitionDuration))return this._nonTransition(t),void 0;var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);var o=this.element.offsetHeight;o=null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0};var m=p&&o(p)+",opacity";a.prototype.enableTransition=function(){this.isTransitioning||(this.css({transitionProperty:m,transitionDuration:this.layout.options.transitionDuration}),this.element.addEventListener(c,this,!1))},a.prototype.transition=a.prototype[u?"_transition":"_nonTransition"],a.prototype.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},a.prototype.onotransitionend=function(t){this.ontransitionend(t)};var g={"-webkit-transform":"transform","-moz-transform":"transform","-o-transform":"transform"};a.prototype.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,o=g[t.propertyName]||t.propertyName;if(delete e.ingProperties[o],i(e.ingProperties)&&this.disableTransition(),o in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[o]),o in e.onEnd){var n=e.onEnd[o];n.call(this),delete e.onEnd[o]}this.emitEvent("transitionEnd",[this])}},a.prototype.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(c,this,!1),this.isTransitioning=!1},a.prototype._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var v={transitionProperty:"",transitionDuration:""};return a.prototype.removeTransitionStyles=function(){this.css(v)},a.prototype.removeElem=function(){this.element.parentNode.removeChild(this.element),this.emitEvent("remove",[this])},a.prototype.remove=function(){if(!u||!parseFloat(this.layout.options.transitionDuration))return this.removeElem(),void 0;var t=this;this.on("transitionEnd",function(){return t.removeElem(),!0}),this.hide()},a.prototype.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options;this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0})},a.prototype.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options;this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:{opacity:function(){this.isHidden&&this.css({display:"none"})}}})},a.prototype.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},a}var r=t.getComputedStyle,s=r?function(t){return r(t,null)}:function(t){return t.currentStyle};"function"==typeof define&&define.amd?define("outlayer/item",["eventEmitter/EventEmitter","get-size/get-size","get-style-property/get-style-property"],n):(t.Outlayer={},t.Outlayer.Item=n(t.EventEmitter,t.getSize,t.getStyleProperty))}(window),function(t){function e(t,e){for(var i in e)t[i]=e[i];return t}function i(t){return"[object Array]"===f.call(t)}function o(t){var e=[];if(i(t))e=t;else if(t&&"number"==typeof t.length)for(var o=0,n=t.length;n>o;o++)e.push(t[o]);else e.push(t);return e}function n(t,e){var i=d(e,t);-1!==i&&e.splice(i,1)}function r(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()}function s(i,s,f,d,l,y){function m(t,i){if("string"==typeof t&&(t=a.querySelector(t)),!t||!c(t))return u&&u.error("Bad "+this.constructor.namespace+" element: "+t),void 0;this.element=t,this.options=e({},this.constructor.defaults),this.option(i);var o=++g;this.element.outlayerGUID=o,v[o]=this,this._create(),this.options.isInitLayout&&this.layout()}var g=0,v={};return m.namespace="outlayer",m.Item=y,m.defaults={containerStyle:{position:"relative"},isInitLayout:!0,isOriginLeft:!0,isOriginTop:!0,isResizeBound:!0,isResizingContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}},e(m.prototype,f.prototype),m.prototype.option=function(t){e(this.options,t)},m.prototype._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),e(this.element.style,this.options.containerStyle),this.options.isResizeBound&&this.bindResize()},m.prototype.reloadItems=function(){this.items=this._itemize(this.element.children)},m.prototype._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,o=[],n=0,r=e.length;r>n;n++){var s=e[n],a=new i(s,this);o.push(a)}return o},m.prototype._filterFindItemElements=function(t){t=o(t);for(var e=this.options.itemSelector,i=[],n=0,r=t.length;r>n;n++){var s=t[n];if(c(s))if(e){l(s,e)&&i.push(s);for(var a=s.querySelectorAll(e),u=0,p=a.length;p>u;u++)i.push(a[u])}else i.push(s)}return i},m.prototype.getItemElements=function(){for(var t=[],e=0,i=this.items.length;i>e;e++)t.push(this.items[e].element);return t},m.prototype.layout=function(){this._resetLayout(),this._manageStamps();var t=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;this.layoutItems(this.items,t),this._isLayoutInited=!0},m.prototype._init=m.prototype.layout,m.prototype._resetLayout=function(){this.getSize()},m.prototype.getSize=function(){this.size=d(this.element)},m.prototype._getMeasurement=function(t,e){var i,o=this.options[t];o?("string"==typeof o?i=this.element.querySelector(o):c(o)&&(i=o),this[t]=i?d(i)[e]:o):this[t]=0},m.prototype.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},m.prototype._getItemsForLayout=function(t){for(var e=[],i=0,o=t.length;o>i;i++){var n=t[i];n.isIgnored||e.push(n)}return e},m.prototype._layoutItems=function(t,e){function i(){o.emitEvent("layoutComplete",[o,t])}var o=this;if(!t||!t.length)return i(),void 0;this._itemsOn(t,"layout",i);for(var n=[],r=0,s=t.length;s>r;r++){var a=t[r],u=this._getItemLayoutPosition(a);u.item=a,u.isInstant=e||a.isLayoutInstant,n.push(u)}this._processLayoutQueue(n)},m.prototype._getItemLayoutPosition=function(){return{x:0,y:0}},m.prototype._processLayoutQueue=function(t){for(var e=0,i=t.length;i>e;e++){var o=t[e];this._positionItem(o.item,o.x,o.y,o.isInstant)}},m.prototype._positionItem=function(t,e,i,o){o?t.goTo(e,i):t.moveTo(e,i)},m.prototype._postLayout=function(){this.resizeContainer()},m.prototype.resizeContainer=function(){if(this.options.isResizingContainer){var t=this._getContainerSize();t&&(this._setContainerMeasure(t.width,!0),this._setContainerMeasure(t.height,!1))}},m.prototype._getContainerSize=h,m.prototype._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},m.prototype._itemsOn=function(t,e,i){function o(){return n++,n===r&&i.call(s),!0}for(var n=0,r=t.length,s=this,a=0,u=t.length;u>a;a++){var p=t[a];p.on(e,o)}},m.prototype.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},m.prototype.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},m.prototype.stamp=function(t){if(t=this._find(t)){this.stamps=this.stamps.concat(t);for(var e=0,i=t.length;i>e;e++){var o=t[e];this.ignore(o)}}},m.prototype.unstamp=function(t){if(t=this._find(t))for(var e=0,i=t.length;i>e;e++){var o=t[e];n(o,this.stamps),this.unignore(o)}},m.prototype._find=function(t){return t?("string"==typeof t&&(t=this.element.querySelectorAll(t)),t=o(t)):void 0},m.prototype._manageStamps=function(){if(this.stamps&&this.stamps.length){this._getBoundingRect();for(var t=0,e=this.stamps.length;e>t;t++){var i=this.stamps[t];this._manageStamp(i)}}},m.prototype._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},m.prototype._manageStamp=h,m.prototype._getElementOffset=function(t){var e=t.getBoundingClientRect(),i=this._boundingRect,o=d(t),n={left:e.left-i.left-o.marginLeft,top:e.top-i.top-o.marginTop,right:i.right-e.right-o.marginRight,bottom:i.bottom-e.bottom-o.marginBottom};return n},m.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},m.prototype.bindResize=function(){this.isResizeBound||(i.bind(t,"resize",this),this.isResizeBound=!0)},m.prototype.unbindResize=function(){this.isResizeBound&&i.unbind(t,"resize",this),this.isResizeBound=!1},m.prototype.onresize=function(){function t(){e.resize(),delete e.resizeTimeout}this.resizeTimeout&&clearTimeout(this.resizeTimeout);var e=this;this.resizeTimeout=setTimeout(t,100)},m.prototype.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},m.prototype.needsResizeLayout=function(){var t=d(this.element),e=this.size&&t;return e&&t.innerWidth!==this.size.innerWidth},m.prototype.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},m.prototype.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},m.prototype.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},m.prototype.reveal=function(t){var e=t&&t.length;if(e)for(var i=0;e>i;i++){var o=t[i];o.reveal()}},m.prototype.hide=function(t){var e=t&&t.length;if(e)for(var i=0;e>i;i++){var o=t[i];o.hide()}},m.prototype.getItem=function(t){for(var e=0,i=this.items.length;i>e;e++){var o=this.items[e];if(o.element===t)return o}},m.prototype.getItems=function(t){if(t&&t.length){for(var e=[],i=0,o=t.length;o>i;i++){var n=t[i],r=this.getItem(n);r&&e.push(r)}return e}},m.prototype.remove=function(t){t=o(t);var e=this.getItems(t);if(e&&e.length){this._itemsOn(e,"remove",function(){this.emitEvent("removeComplete",[this,e])});for(var i=0,r=e.length;r>i;i++){var s=e[i];s.remove(),n(s,this.items)}}},m.prototype.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="";for(var e=0,i=this.items.length;i>e;e++){var o=this.items[e];o.destroy()}this.unbindResize(),delete this.element.outlayerGUID,p&&p.removeData(this.element,this.constructor.namespace)},m.data=function(t){var e=t&&t.outlayerGUID;return e&&v[e]},m.create=function(t,i){function o(){m.apply(this,arguments)}return Object.create?o.prototype=Object.create(m.prototype):e(o.prototype,m.prototype),o.prototype.constructor=o,o.defaults=e({},m.defaults),e(o.defaults,i),o.prototype.settings={},o.namespace=t,o.data=m.data,o.Item=function(){y.apply(this,arguments)},o.Item.prototype=new y,s(function(){for(var e=r(t),i=a.querySelectorAll(".js-"+e),n="data-"+e+"-options",s=0,h=i.length;h>s;s++){var f,c=i[s],d=c.getAttribute(n);try{f=d&&JSON.parse(d)}catch(l){u&&u.error("Error parsing "+n+" on "+c.nodeName.toLowerCase()+(c.id?"#"+c.id:"")+": "+l);continue}var y=new o(c,f);p&&p.data(c,t,y)}}),p&&p.bridget&&p.bridget(t,o),o},m.Item=y,m}var a=t.document,u=t.console,p=t.jQuery,h=function(){},f=Object.prototype.toString,c="object"==typeof HTMLElement?function(t){return t instanceof HTMLElement}:function(t){return t&&"object"==typeof t&&1===t.nodeType&&"string"==typeof t.nodeName},d=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var i=0,o=t.length;o>i;i++)if(t[i]===e)return i;return-1};"function"==typeof define&&define.amd?define("outlayer/outlayer",["eventie/eventie","doc-ready/doc-ready","eventEmitter/EventEmitter","get-size/get-size","matches-selector/matches-selector","./item"],s):t.Outlayer=s(t.eventie,t.docReady,t.EventEmitter,t.getSize,t.matchesSelector,t.Outlayer.Item)}(window),function(t){function e(t){function e(){t.Item.apply(this,arguments)}return e.prototype=new t.Item,e.prototype._create=function(){this.id=this.layout.itemGUID++,t.Item.prototype._create.call(this),this.sortData={}},e.prototype.updateSortData=function(){if(!this.isIgnored){this.sortData.id=this.id,this.sortData["original-order"]=this.id,this.sortData.random=Math.random();var t=this.layout.options.getSortData,e=this.layout._sorters;for(var i in t){var o=e[i];this.sortData[i]=o(this.element,this)}}},e}"function"==typeof define&&define.amd?define("isotope/js/item",["outlayer/outlayer"],e):(t.Isotope=t.Isotope||{},t.Isotope.Item=e(t.Outlayer))}(window),function(t){function e(t,e){function i(t){this.isotope=t,t&&(this.options=t.options[this.namespace],this.element=t.element,this.items=t.filteredItems,this.size=t.size)}return function(){function t(t){return function(){return e.prototype[t].apply(this.isotope,arguments)}}for(var o=["_resetLayout","_getItemLayoutPosition","_manageStamp","_getContainerSize","_getElementOffset","needsResizeLayout"],n=0,r=o.length;r>n;n++){var s=o[n];i.prototype[s]=t(s)}}(),i.prototype.needsVerticalResizeLayout=function(){var e=t(this.isotope.element),i=this.isotope.size&&e;return i&&e.innerHeight!==this.isotope.size.innerHeight},i.prototype._getMeasurement=function(){this.isotope._getMeasurement.apply(this,arguments)},i.prototype.getColumnWidth=function(){this.getSegmentSize("column","Width")},i.prototype.getRowHeight=function(){this.getSegmentSize("row","Height")},i.prototype.getSegmentSize=function(t,e){var i=t+e,o="outer"+e;if(this._getMeasurement(i,o),!this[i]){var n=this.getFirstItemSize();this[i]=n&&n[o]||this.isotope.size["inner"+e]}},i.prototype.getFirstItemSize=function(){var e=this.isotope.filteredItems[0];return e&&e.element&&t(e.element)},i.prototype.layout=function(){this.isotope.layout.apply(this.isotope,arguments)},i.prototype.getSize=function(){this.isotope.getSize(),this.size=this.isotope.size},i.modes={},i.create=function(t,e){function o(){i.apply(this,arguments)}return o.prototype=new i,e&&(o.options=e),o.prototype.namespace=t,i.modes[t]=o,o},i}"function"==typeof define&&define.amd?define("isotope/js/layout-mode",["get-size/get-size","outlayer/outlayer"],e):(t.Isotope=t.Isotope||{},t.Isotope.LayoutMode=e(t.getSize,t.Outlayer))}(window),function(t){function e(t,e){var o=t.create("masonry");return o.prototype._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns();var t=this.cols;for(this.colYs=[];t--;)this.colYs.push(0);this.maxY=0},o.prototype.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element;this.columnWidth=i&&e(i).outerWidth||this.containerWidth}this.columnWidth+=this.gutter,this.cols=Math.floor((this.containerWidth+this.gutter)/this.columnWidth),this.cols=Math.max(this.cols,1)},o.prototype.getContainerWidth=function(){var t=this.options.isFitWidth?this.element.parentNode:this.element,i=e(t);this.containerWidth=i&&i.innerWidth},o.prototype._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,o=e&&1>e?"round":"ceil",n=Math[o](t.size.outerWidth/this.columnWidth);n=Math.min(n,this.cols);for(var r=this._getColGroup(n),s=Math.min.apply(Math,r),a=i(r,s),u={x:this.columnWidth*a,y:s},p=s+t.size.outerHeight,h=this.cols+1-r.length,f=0;h>f;f++)this.colYs[a+f]=p;return u},o.prototype._getColGroup=function(t){if(2>t)return this.colYs;for(var e=[],i=this.cols+1-t,o=0;i>o;o++){var n=this.colYs.slice(o,o+t);e[o]=Math.max.apply(Math,n)}return e},o.prototype._manageStamp=function(t){var i=e(t),o=this._getElementOffset(t),n=this.options.isOriginLeft?o.left:o.right,r=n+i.outerWidth,s=Math.floor(n/this.columnWidth);s=Math.max(0,s);var a=Math.floor(r/this.columnWidth);a-=r%this.columnWidth?0:1,a=Math.min(this.cols-1,a);for(var u=(this.options.isOriginTop?o.top:o.bottom)+i.outerHeight,p=s;a>=p;p++)this.colYs[p]=Math.max(u,this.colYs[p])},o.prototype._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this.options.isFitWidth&&(t.width=this._getContainerFitWidth()),t},o.prototype._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},o.prototype.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!==this.containerWidth},o}var i=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var i=0,o=t.length;o>i;i++){var n=t[i];if(n===e)return i}return-1};"function"==typeof define&&define.amd?define("masonry/masonry",["outlayer/outlayer","get-size/get-size"],e):t.Masonry=e(t.Outlayer,t.getSize)}(window),function(t){function e(t,e){for(var i in e)t[i]=e[i];return t}function i(t,i){var o=t.create("masonry"),n=o.prototype._getElementOffset,r=o.prototype.layout,s=o.prototype._getMeasurement;e(o.prototype,i.prototype),o.prototype._getElementOffset=n,o.prototype.layout=r,o.prototype._getMeasurement=s;var a=o.prototype.measureColumns;o.prototype.measureColumns=function(){this.items=this.isotope.filteredItems,a.call(this)};var u=o.prototype._manageStamp;return o.prototype._manageStamp=function(){this.options.isOriginLeft=this.isotope.options.isOriginLeft,this.options.isOriginTop=this.isotope.options.isOriginTop,u.apply(this,arguments)},o}"function"==typeof define&&define.amd?define("isotope/js/layout-modes/masonry",["../layout-mode","masonry/masonry"],i):i(t.Isotope.LayoutMode,t.Masonry)}(window),function(t){function e(t){var e=t.create("fitRows");return e.prototype._resetLayout=function(){this.x=0,this.y=0,this.maxY=0},e.prototype._getItemLayoutPosition=function(t){t.getSize(),0!==this.x&&t.size.outerWidth+this.x>this.isotope.size.innerWidth&&(this.x=0,this.y=this.maxY);var e={x:this.x,y:this.y};return this.maxY=Math.max(this.maxY,this.y+t.size.outerHeight),this.x+=t.size.outerWidth,e},e.prototype._getContainerSize=function(){return{height:this.maxY}},e}"function"==typeof define&&define.amd?define("isotope/js/layout-modes/fit-rows",["../layout-mode"],e):e(t.Isotope.LayoutMode)}(window),function(t){function e(t){var e=t.create("vertical",{horizontalAlignment:0});return e.prototype._resetLayout=function(){this.y=0},e.prototype._getItemLayoutPosition=function(t){t.getSize();var e=(this.isotope.size.innerWidth-t.size.outerWidth)*this.options.horizontalAlignment,i=this.y;return this.y+=t.size.outerHeight,{x:e,y:i}},e.prototype._getContainerSize=function(){return{height:this.y}},e}"function"==typeof define&&define.amd?define("isotope/js/layout-modes/vertical",["../layout-mode"],e):e(t.Isotope.LayoutMode)}(window),function(t){function e(t,e){for(var i in e)t[i]=e[i];return t}function i(t){return"[object Array]"===h.call(t)}function o(t){var e=[];if(i(t))e=t;else if(t&&"number"==typeof t.length)for(var o=0,n=t.length;n>o;o++)e.push(t[o]);else e.push(t);return e}function n(t,e){var i=f(e,t);-1!==i&&e.splice(i,1)}function r(t,i,r,u,h){function f(t,e){return function(i,o){for(var n=0,r=t.length;r>n;n++){var s=t[n],a=i.sortData[s],u=o.sortData[s];if(a>u||u>a){var p=void 0!==e[s]?e[s]:e,h=p?1:-1;return(a>u?1:-1)*h}}return 0}}var c=t.create("isotope",{layoutMode:"masonry",isJQueryFiltering:!0,sortAscending:!0});c.Item=u,c.LayoutMode=h,c.prototype._create=function(){this.itemGUID=0,this._sorters={},this._getSorters(),t.prototype._create.call(this),this.modes={},this.filteredItems=this.items,this.sortHistory=["original-order"];for(var e in h.modes)this._initLayoutMode(e)},c.prototype.reloadItems=function(){this.itemGUID=0,t.prototype.reloadItems.call(this)},c.prototype._itemize=function(){for(var e=t.prototype._itemize.apply(this,arguments),i=0,o=e.length;o>i;i++){var n=e[i];n.id=this.itemGUID++}return this._updateItemsSortData(e),e},c.prototype._initLayoutMode=function(t){var i=h.modes[t],o=this.options[t]||{};this.options[t]=i.options?e(i.options,o):o,this.modes[t]=new i(this)},c.prototype.layout=function(){return!this._isLayoutInited&&this.options.isInitLayout?(this.arrange(),void 0):(this._layout(),void 0)},c.prototype._layout=function(){var t=this._getIsInstant();this._resetLayout(),this._manageStamps(),this.layoutItems(this.filteredItems,t),this._isLayoutInited=!0},c.prototype.arrange=function(t){this.option(t),this._getIsInstant(),this.filteredItems=this._filter(this.items),this._sort(),this._layout()},c.prototype._init=c.prototype.arrange,c.prototype._getIsInstant=function(){var t=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;return this._isInstant=t,t},c.prototype._filter=function(t){function e(){f.reveal(n),f.hide(r)}var i=this.options.filter;i=i||"*";for(var o=[],n=[],r=[],s=this._getFilterTest(i),a=0,u=t.length;u>a;a++){var p=t[a];if(!p.isIgnored){var h=s(p);h&&o.push(p),h&&p.isHidden?n.push(p):h||p.isHidden||r.push(p)}}var f=this;return this._isInstant?this._noTransition(e):e(),o},c.prototype._getFilterTest=function(t){return s&&this.options.isJQueryFiltering?function(e){return s(e.element).is(t)}:"function"==typeof t?function(e){return t(e.element)}:function(e){return r(e.element,t)}},c.prototype.updateSortData=function(t){this._getSorters(),t=o(t);var e=this.getItems(t);e=e.length?e:this.items,this._updateItemsSortData(e)
  },c.prototype._getSorters=function(){var t=this.options.getSortData;for(var e in t){var i=t[e];this._sorters[e]=d(i)}},c.prototype._updateItemsSortData=function(t){for(var e=0,i=t.length;i>e;e++){var o=t[e];o.updateSortData()}};var d=function(){function t(t){if("string"!=typeof t)return t;var i=a(t).split(" "),o=i[0],n=o.match(/^\[(.+)\]$/),r=n&&n[1],s=e(r,o),u=c.sortDataParsers[i[1]];return t=u?function(t){return t&&u(s(t))}:function(t){return t&&s(t)}}function e(t,e){var i;return i=t?function(e){return e.getAttribute(t)}:function(t){var i=t.querySelector(e);return i&&p(i)}}return t}();c.sortDataParsers={parseInt:function(t){return parseInt(t,10)},parseFloat:function(t){return parseFloat(t)}},c.prototype._sort=function(){var t=this.options.sortBy;if(t){var e=[].concat.apply(t,this.sortHistory),i=f(e,this.options.sortAscending);this.filteredItems.sort(i),t!==this.sortHistory[0]&&this.sortHistory.unshift(t)}},c.prototype._mode=function(){var t=this.options.layoutMode,e=this.modes[t];if(!e)throw Error("No layout mode: "+t);return e.options=this.options[t],e},c.prototype._resetLayout=function(){t.prototype._resetLayout.call(this),this._mode()._resetLayout()},c.prototype._getItemLayoutPosition=function(t){return this._mode()._getItemLayoutPosition(t)},c.prototype._manageStamp=function(t){this._mode()._manageStamp(t)},c.prototype._getContainerSize=function(){return this._mode()._getContainerSize()},c.prototype.needsResizeLayout=function(){return this._mode().needsResizeLayout()},c.prototype.appended=function(t){var e=this.addItems(t);if(e.length){var i=this._filterRevealAdded(e);this.filteredItems=this.filteredItems.concat(i)}},c.prototype.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps();var o=this._filterRevealAdded(e);this.layoutItems(i),this.filteredItems=o.concat(this.filteredItems)}},c.prototype._filterRevealAdded=function(t){var e=this._noTransition(function(){return this._filter(t)});return this.layoutItems(e,!0),this.reveal(e),t},c.prototype.insert=function(t){var e=this.addItems(t);if(e.length){var i,o,n=e.length;for(i=0;n>i;i++)o=e[i],this.element.appendChild(o.element);var r=this._filter(e);for(this._noTransition(function(){this.hide(r)}),i=0;n>i;i++)e[i].isLayoutInstant=!0;for(this.arrange(),i=0;n>i;i++)delete e[i].isLayoutInstant;this.reveal(r)}};var l=c.prototype.remove;return c.prototype.remove=function(t){t=o(t);var e=this.getItems(t);if(l.call(this,t),e&&e.length)for(var i=0,r=e.length;r>i;i++){var s=e[i];n(s,this.filteredItems)}},c.prototype._noTransition=function(t){var e=this.options.transitionDuration;this.options.transitionDuration=0;var i=t.call(this);return this.options.transitionDuration=e,i},c}var s=t.jQuery,a=String.prototype.trim?function(t){return t.trim()}:function(t){return t.replace(/^\s+|\s+$/g,"")},u=document.documentElement,p=u.textContent?function(t){return t.textContent}:function(t){return t.innerText},h=Object.prototype.toString,f=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var i=0,o=t.length;o>i;i++)if(t[i]===e)return i;return-1};"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size","matches-selector/matches-selector","isotope/js/item","isotope/js/layout-mode","isotope/js/layout-modes/masonry","isotope/js/layout-modes/fit-rows","isotope/js/layout-modes/vertical"],r):t.Isotope=r(t.Outlayer,t.getSize,t.matchesSelector,t.Isotope.Item,t.Isotope.LayoutMode)}(window);
  ;
  !function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var o in n)("object"==typeof exports?exports:e)[o]=n[o]}}(window,(function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o,i="fslightbox-",r="".concat(i,"styles"),s="".concat(i,"cursor-grabbing"),a="".concat(i,"full-dimension"),c="".concat(i,"flex-centered"),l="".concat(i,"open"),u="".concat(i,"transform-transition"),d="".concat(i,"absoluted"),f="".concat(i,"slide-btn"),p="".concat(f,"-container"),h="".concat(i,"fade-in"),m="".concat(i,"fade-out"),g=h+"-strong",v=m+"-strong",b="".concat(i,"opacity-"),x="".concat(b,"1"),y="".concat(i,"source");function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(e){var t=e.stageIndexes,n=e.core.stageManager,o=e.props.sources.length-1;n.getPreviousSlideIndex=function(){return 0===t.current?o:t.current-1},n.getNextSlideIndex=function(){return t.current===o?0:t.current+1},n.updateStageIndexes=0===o?function(){}:1===o?function(){0===t.current?(t.next=1,delete t.previous):(t.previous=0,delete t.next)}:function(){t.previous=n.getPreviousSlideIndex(),t.next=n.getNextSlideIndex()},n.i=o<=2?function(){return!0}:function(e){var n=t.current;if(0===n&&e===o||n===o&&0===e)return!0;var i=n-e;return-1===i||0===i||1===i}}"object"===("undefined"==typeof document?"undefined":w(document))&&((o=document.createElement("style")).className=r,o.appendChild(document.createTextNode(".fslightbox-absoluted{position:absolute;top:0;left:0}.fslightbox-fade-in{animation:fslightbox-fade-in .3s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out{animation:fslightbox-fade-out .3s ease}.fslightbox-fade-in-strong{animation:fslightbox-fade-in-strong .3s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out-strong{animation:fslightbox-fade-out-strong .3s ease}@keyframes fslightbox-fade-in{from{opacity:.65}to{opacity:1}}@keyframes fslightbox-fade-out{from{opacity:.35}to{opacity:0}}@keyframes fslightbox-fade-in-strong{from{opacity:.3}to{opacity:1}}@keyframes fslightbox-fade-out-strong{from{opacity:1}to{opacity:0}}.fslightbox-cursor-grabbing{cursor:grabbing}.fslightbox-full-dimension{width:100%;height:100%}.fslightbox-open{overflow:hidden;height:100%}.fslightbox-flex-centered{display:flex;justify-content:center;align-items:center}.fslightbox-opacity-0{opacity:0!important}.fslightbox-opacity-1{opacity:1!important}.fslightbox-scrollbarfix{padding-right:17px}.fslightbox-transform-transition{transition:transform .3s}.fslightbox-container{font-family:Arial,sans-serif;position:fixed;top:0;left:0;background:linear-gradient(rgba(30,30,30,.9),#000 1810%);touch-action:pinch-zoom;z-index:1000000000;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.fslightbox-container *{box-sizing:border-box}.fslightbox-svg-path{transition:fill .15s ease;fill:#ddd}.fslightbox-nav{height:45px;width:100%;position:absolute;top:0;left:0}.fslightbox-slide-number-container{display:flex;justify-content:center;align-items:center;position:relative;height:100%;font-size:15px;color:#d7d7d7;z-index:0;max-width:55px;text-align:left}.fslightbox-slide-number-container .fslightbox-flex-centered{height:100%}.fslightbox-slash{display:block;margin:0 5px;width:1px;height:12px;transform:rotate(15deg);background:#fff}.fslightbox-toolbar{position:absolute;z-index:3;right:0;top:0;height:100%;display:flex;background:rgba(35,35,35,.65)}.fslightbox-toolbar-button{height:100%;width:45px;cursor:pointer}.fslightbox-toolbar-button:hover .fslightbox-svg-path{fill:#fff}.fslightbox-slide-btn-container{display:flex;align-items:center;padding:12px 12px 12px 6px;position:absolute;top:50%;cursor:pointer;z-index:3;transform:translateY(-50%)}@media (min-width:476px){.fslightbox-slide-btn-container{padding:22px 22px 22px 6px}}@media (min-width:768px){.fslightbox-slide-btn-container{padding:30px 30px 30px 6px}}.fslightbox-slide-btn-container:hover .fslightbox-svg-path{fill:#f1f1f1}.fslightbox-slide-btn{padding:9px;font-size:26px;background:rgba(35,35,35,.65)}@media (min-width:768px){.fslightbox-slide-btn{padding:10px}}@media (min-width:1600px){.fslightbox-slide-btn{padding:11px}}.fslightbox-slide-btn-container-previous{left:0}@media (max-width:475.99px){.fslightbox-slide-btn-container-previous{padding-left:3px}}.fslightbox-slide-btn-container-next{right:0;padding-left:12px;padding-right:3px}@media (min-width:476px){.fslightbox-slide-btn-container-next{padding-left:22px}}@media (min-width:768px){.fslightbox-slide-btn-container-next{padding-left:30px}}@media (min-width:476px){.fslightbox-slide-btn-container-next{padding-right:6px}}.fslightbox-down-event-detector{position:absolute;z-index:1}.fslightbox-slide-swiping-hoverer{z-index:4}.fslightbox-invalid-file-wrapper{font-size:22px;color:#eaebeb;margin:auto}.fslightbox-video{object-fit:cover}.fslightbox-youtube-iframe{border:0}.fslightboxl{display:block;margin:auto;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:67px;height:67px}.fslightboxl div{box-sizing:border-box;display:block;position:absolute;width:54px;height:54px;margin:6px;border:5px solid;border-color:#999 transparent transparent transparent;border-radius:50%;animation:fslightboxl 1.2s cubic-bezier(.5,0,.5,1) infinite}.fslightboxl div:nth-child(1){animation-delay:-.45s}.fslightboxl div:nth-child(2){animation-delay:-.3s}.fslightboxl div:nth-child(3){animation-delay:-.15s}@keyframes fslightboxl{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.fslightbox-source{position:relative;z-index:2;opacity:0}")),document.head.appendChild(o));function L(e){var t,n=e.props,o=0,i={};this.getSourceTypeFromLocalStorageByUrl=function(e){return t[e]?t[e]:r(e)},this.handleReceivedSourceTypeForUrl=function(e,n){if(!1===i[n]&&(o--,"invalid"!==e?i[n]=e:delete i[n],0===o)){!function(e,t){for(var n in t)e[n]=t[n]}(t,i);try{localStorage.setItem("fslightbox-types",JSON.stringify(t))}catch(e){}}};var r=function(e){o++,i[e]=!1};if(n.disableLocalStorage)this.getSourceTypeFromLocalStorageByUrl=function(){},this.handleReceivedSourceTypeForUrl=function(){};else{try{t=JSON.parse(localStorage.getItem("fslightbox-types"))}catch(e){}t||(t={},this.getSourceTypeFromLocalStorageByUrl=r)}}function A(e,t,n,o){var i=e.data,r=e.elements.sources,s=n/o,a=0;this.adjustSize=function(){if((a=i.maxSourceWidth/s)<i.maxSourceHeight)return n<i.maxSourceWidth&&(a=o),c();a=o>i.maxSourceHeight?i.maxSourceHeight:o,c()};var c=function(){r[t].style.width=a*s+"px",r[t].style.height=a+"px"}}function C(e,t){var n=this,o=e.collections.sourceSizers,i=e.elements,r=i.sourceAnimationWrappers,s=i.sources,a=e.isl,c=e.resolve;function l(e,n){o[t]=c(A,[t,e,n]),o[t].adjustSize()}this.runActions=function(e,o){a[t]=!0,s[t].classList.add(x),r[t].classList.add(g),r[t].removeChild(r[t].firstChild),l(e,o),n.runActions=l}}function E(e,t){var n,o=this,i=e.elements.sources,r=e.props,s=(0,e.resolve)(C,[t]);this.handleImageLoad=function(e){var t=e.target,n=t.naturalWidth,o=t.naturalHeight;s.runActions(n,o)},this.handleVideoLoad=function(e){var t=e.target,o=t.videoWidth,i=t.videoHeight;n=!0,s.runActions(o,i)},this.handleNotMetaDatedVideoLoad=function(){n||o.handleYoutubeLoad()},this.handleYoutubeLoad=function(){var e=1920,t=1080;r.maxYoutubeDimensions&&(e=r.maxYoutubeDimensions.width,t=r.maxYoutubeDimensions.height),s.runActions(e,t)},this.handleCustomLoad=function(){var e=i[t],n=e.offsetWidth,r=e.offsetHeight;n&&r?s.runActions(n,r):setTimeout(o.handleCustomLoad)}}function F(e,t,n){var o=e.elements.sources,i=e.props.customClasses,r=i[t]?i[t]:"";o[t].className=n+" "+r}function I(e,t){var n=e.elements.sources,o=e.props.customAttributes;for(var i in o[t])n[t].setAttribute(i,o[t][i])}function T(e,t){var n=e.collections.sourceLoadHandlers,o=e.elements,i=o.sources,r=o.sourceAnimationWrappers,s=e.props.sources;i[t]=document.createElement("img"),F(e,t,y),i[t].src=s[t],i[t].onload=n[t].handleImageLoad,I(e,t),r[t].appendChild(i[t])}function N(e,t){var n=e.collections.sourceLoadHandlers,o=e.elements,i=o.sources,r=o.sourceAnimationWrappers,s=e.props,a=s.sources,c=s.videosPosters;i[t]=document.createElement("video"),F(e,t,y),i[t].src=a[t],i[t].onloadedmetadata=function(e){n[t].handleVideoLoad(e)},i[t].controls=!0,I(e,t),c[t]&&(i[t].poster=c[t]);var l=document.createElement("source");l.src=a[t],i[t].appendChild(l),setTimeout(n[t].handleNotMetaDatedVideoLoad,3e3),r[t].appendChild(i[t])}function z(e,t){var n=e.collections.sourceLoadHandlers,o=e.elements,r=o.sources,s=o.sourceAnimationWrappers,a=e.props.sources;r[t]=document.createElement("iframe"),F(e,t,"".concat(y," ").concat(i,"youtube-iframe"));var c=a[t],l=c.split("?")[1];r[t].src="https://www.youtube.com/embed/".concat(c.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/)[2],"?").concat(l||""),r[t].allowFullscreen=!0,I(e,t),s[t].appendChild(r[t]),n[t].handleYoutubeLoad()}function P(e,t){var n=e.collections.sourceLoadHandlers,o=e.elements,i=o.sources,r=o.sourceAnimationWrappers,s=e.props.sources;i[t]=s[t],F(e,t,"".concat(i[t].className," ").concat(y)),r[t].appendChild(i[t]),n[t].handleCustomLoad()}function k(e,t){var n=e.elements,o=n.sources,r=n.sourceAnimationWrappers;e.props.sources;o[t]=document.createElement("div"),o[t].className="".concat(i,"invalid-file-wrapper ").concat(c),o[t].innerHTML="Invalid source",r[t].classList.add(g),r[t].removeChild(r[t].firstChild),r[t].appendChild(o[t])}function H(e){var t=e.collections,n=t.sourceLoadHandlers,o=t.sourcesRenderFunctions,i=e.core.sourceDisplayFacade,r=e.resolve;this.runActionsForSourceTypeAndIndex=function(t,s){var a;switch("invalid"!==t&&(n[s]=r(E,[s])),t){case"image":a=T;break;case"video":a=N;break;case"youtube":a=z;break;case"custom":a=P;break;default:a=k}o[s]=function(){return a(e,s)},i.displaySourcesWhichShouldBeDisplayed()}}function W(){var e,t,n,o={isUrlYoutubeOne:function(e){var t=document.createElement("a");return t.href=e,"www.youtube.com"===t.hostname||"youtu.be"===t.hostname},getTypeFromResponseContentType:function(e){return e.slice(0,e.indexOf("/"))}};function i(){if(4!==n.readyState){if(2===n.readyState){var e;switch(o.getTypeFromResponseContentType(n.getResponseHeader("content-type"))){case"image":e="image";break;case"video":e="video";break;default:e="invalid"}n.onreadystatechange=null,n.abort(),t(e)}}else t("invalid")}this.setUrlToCheck=function(t){e=t},this.getSourceType=function(r){if(o.isUrlYoutubeOne(e))return r("youtube");t=r,(n=new XMLHttpRequest).onreadystatechange=i,n.open("GET",e,!0),n.send()}}function R(e,t,n){var o=e.props,i=o.types,r=o.type,s=o.sources,a=e.resolve;this.getTypeSetByClientForIndex=function(e){var t;return i&&i[e]?t=i[e]:r&&(t=r),t},this.retrieveTypeWithXhrForIndex=function(e){var o=a(W);o.setUrlToCheck(s[e]),o.getSourceType((function(o){t.handleReceivedSourceTypeForUrl(o,s[e]),n.runActionsForSourceTypeAndIndex(o,e)}))}}function D(e,t){var n=e.core.stageManager,o=e.elements,i=o.smw,r=o.sourceWrappersContainer,s=e.props,l=0,f=document.createElement("div");function p(e){f.style.transform="translateX(".concat(e+l,"px)"),l=0}function h(){return(1+s.slideDistance)*innerWidth}f.className="".concat(d," ").concat(a," ").concat(c),f.s=function(){f.style.display="flex"},f.h=function(){f.style.display="none"},f.a=function(){f.classList.add(u)},f.d=function(){f.classList.remove(u)},f.n=function(){f.style.removeProperty("transform")},f.v=function(e){return l=e,f},f.ne=function(){p(-h())},f.z=function(){p(0)},f.p=function(){p(h())},n.i(t)||f.h(),i[t]=f,r.appendChild(f),function(e,t){var n=e.elements,o=n.smw,i=n.sourceAnimationWrappers,r=document.createElement("div"),s=document.createElement("div");s.className="fslightboxl";for(var a=0;a<3;a++){var c=document.createElement("div");s.appendChild(c)}r.appendChild(s),o[t].appendChild(r),i[t]=r}(e,t)}function O(e,t,n,o){var r=document.createElementNS("http://www.w3.org/2000/svg","svg");r.setAttributeNS(null,"width",t),r.setAttributeNS(null,"height",t),r.setAttributeNS(null,"viewBox",n);var s=document.createElementNS("http://www.w3.org/2000/svg","path");return s.setAttributeNS(null,"class","".concat(i,"svg-path")),s.setAttributeNS(null,"d",o),r.appendChild(s),e.appendChild(r),r}function M(e,t){var n=document.createElement("div");return n.className="".concat(i,"toolbar-button ").concat(c),n.title=t,e.appendChild(n),n}function j(e,t){var n=document.createElement("div");n.className="".concat(i,"toolbar"),t.appendChild(n),function(e,t){var n=e.componentsServices,o=e.data,i=e.fs,r="M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z",s=M(t);s.title="Enter fullscreen";var a=O(s,"20px","0 0 18 18",r);n.ofs=function(){o.ifs=!0,s.title="Exit fullscreen",a.setAttributeNS(null,"width","24px"),a.setAttributeNS(null,"height","24px"),a.setAttributeNS(null,"viewBox","0 0 950 1024"),a.firstChild.setAttributeNS(null,"d","M682 342h128v84h-212v-212h84v128zM598 810v-212h212v84h-128v128h-84zM342 342v-128h84v212h-212v-84h128zM214 682v-84h212v212h-84v-128h-128z")},n.xfs=function(){o.ifs=!1,s.title="Enter fullscreen",a.setAttributeNS(null,"width","20px"),a.setAttributeNS(null,"height","20px"),a.setAttributeNS(null,"viewBox","0 0 18 18"),a.firstChild.setAttributeNS(null,"d",r)},s.onclick=i.t}(e,n),function(e,t){var n=M(t,"Close");n.onclick=e.core.lightboxCloser.closeLightbox,O(n,"20px","0 0 24 24","M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z")}(e,n)}function X(e){var t=e.props.sources,n=e.elements.container,o=document.createElement("div");o.className="".concat(i,"nav"),n.appendChild(o),j(e,o),t.length>1&&function(e,t){var n=e.componentsServices,o=e.props.sources,r=(e.stageIndexes,document.createElement("div"));r.className="".concat(i,"slide-number-container");var s=document.createElement("div");s.className=c;var a=document.createElement("span");n.setSlideNumber=function(e){return a.innerHTML=e};var l=document.createElement("span");l.className="".concat(i,"slash");var u=document.createElement("div");u.innerHTML=o.length,r.appendChild(s),s.appendChild(a),s.appendChild(l),s.appendChild(u),t.appendChild(r),setTimeout((function(){s.offsetWidth>55&&(r.style.justifyContent="flex-start")}))}(e,o)}function B(e,t,n,o){var i=e.elements.container,r=n.charAt(0).toUpperCase()+n.slice(1),s=document.createElement("div");s.className="".concat(p," ").concat(p,"-").concat(n),s.title="".concat(r," slide"),s.onclick=t,function(e,t){var n=document.createElement("div");n.className="".concat(f," ").concat(c),O(n,"20px","0 0 20 20",t),e.appendChild(n)}(s,o),i.appendChild(s)}function U(e){var t=e.core,n=t.lightboxCloser,o=t.slideChangeFacade,i=e.fs;this.listener=function(e){switch(e.key){case"Escape":n.closeLightbox();break;case"ArrowLeft":o.changeToPrevious();break;case"ArrowRight":o.changeToNext();break;case"F11":e.preventDefault(),i.t()}}}function q(e){var t=e.elements,n=e.sourcePointerProps,o=e.stageIndexes;function i(e,o){t.smw[e].v(n.swipedX)[o]()}this.runActionsForEvent=function(e){var r,a,c;t.container.contains(t.slideSwipingHoverer)||t.container.appendChild(t.slideSwipingHoverer),r=t.container,a=s,(c=r.classList).contains(a)||c.add(a),n.swipedX=e.screenX-n.downScreenX;var l=o.previous,u=o.next;i(o.current,"z"),void 0!==l&&n.swipedX>0?i(l,"ne"):void 0!==u&&n.swipedX<0&&i(u,"p")}}function V(e){var t=e.props.sources,n=e.resolve,o=e.sourcePointerProps,i=n(q);1===t.length?this.listener=function(){o.swipedX=1}:this.listener=function(e){o.isPointering&&i.runActionsForEvent(e)}}function _(e){var t=e.core.slideIndexChanger,n=e.elements.smw,o=e.stageIndexes,i=e.sws;function r(e){var t=n[o.current];t.a(),t[e]()}function s(e,t){void 0!==e&&(n[e].s(),n[e][t]())}this.runPositiveSwipedXActions=function(){var e=o.previous;if(void 0===e)r("z");else{r("p");var n=o.next;t.changeTo(e);var a=o.previous;i.d(a),i.b(n),r("z"),s(a,"ne")}},this.runNegativeSwipedXActions=function(){var e=o.next;if(void 0===e)r("z");else{r("ne");var n=o.previous;t.changeTo(e);var a=o.next;i.d(a),i.b(n),r("z"),s(a,"p")}}}function Y(e,t){e.contains(t)&&e.removeChild(t)}function J(e){var t=e.core.lightboxCloser,n=e.elements,o=e.resolve,i=e.sourcePointerProps,r=o(_);this.runNoSwipeActions=function(){Y(n.container,n.slideSwipingHoverer),i.isSourceDownEventTarget||t.closeLightbox(),i.isPointering=!1},this.runActions=function(){i.swipedX>0?r.runPositiveSwipedXActions():r.runNegativeSwipedXActions(),Y(n.container,n.slideSwipingHoverer),n.container.classList.remove(s),i.isPointering=!1}}function G(e){var t=e.resolve,n=e.sourcePointerProps,o=t(J);this.listener=function(){n.isPointering&&(n.swipedX?o.runActions():o.runNoSwipeActions())}}function $(e){var t=this,n=e.core,o=n.eventsDispatcher,i=n.globalEventsController,r=n.scrollbarRecompensor,s=e.data,a=e.elements,c=e.fs,u=e.props,d=e.sourcePointerProps;this.isLightboxFadingOut=!1,this.runActions=function(){t.isLightboxFadingOut=!0,a.container.classList.add(v),i.removeListeners(),u.exitFullscreenOnClose&&s.ifs&&c.x(),setTimeout((function(){t.isLightboxFadingOut=!1,d.isPointering=!1,a.container.classList.remove(v),document.documentElement.classList.remove(l),r.removeRecompense(),document.body.removeChild(a.container),o.dispatch("onClose")}),270)}}function K(e,t){var n=e.classList;n.contains(t)&&n.remove(t)}function Q(e){var t,n,o;n=(t=e).core.eventsDispatcher,o=t.props,n.dispatch=function(e){o[e]&&o[e]()},function(e){var t=e.componentsServices,n=e.data,o=e.fs,i=["fullscreenchange","webkitfullscreenchange","mozfullscreenchange","MSFullscreenChange"];function r(e){for(var t=0;t<i.length;t++)document[e](i[t],s)}function s(){document.fullscreenElement||document.webkitIsFullScreen||document.mozFullScreen||document.msFullscreenElement?t.ofs():t.xfs()}o.o=function(){t.ofs();var e=document.documentElement;e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()},o.x=function(){t.xfs(),document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()},o.t=function(){n.ifs?o.x():o.o()},o.l=function(){r("addEventListener")},o.q=function(){r("removeEventListener")}}(e),function(e){var t=e.core,n=t.globalEventsController,o=t.windowResizeActioner,i=e.fs,r=e.resolve,s=r(U),a=r(V),c=r(G);n.attachListeners=function(){document.addEventListener("pointermove",a.listener),document.addEventListener("pointerup",c.listener),addEventListener("resize",o.runActions),document.addEventListener("keydown",s.listener),i.l()},n.removeListeners=function(){document.removeEventListener("pointermove",a.listener),document.removeEventListener("pointerup",c.listener),removeEventListener("resize",o.runActions),document.removeEventListener("keydown",s.listener),i.q()}}(e),function(e){var t=e.core.lightboxCloser,n=(0,e.resolve)($);t.closeLightbox=function(){n.isLightboxFadingOut||n.runActions()}}(e),function(e){var t=e.data,n=e.core.scrollbarRecompensor;function o(){document.body.offsetHeight>innerHeight&&(document.body.style.marginRight=t.scrollbarWidth+"px")}n.addRecompense=function(){"complete"===document.readyState?o():addEventListener("load",(function(){o(),n.addRecompense=o}))},n.removeRecompense=function(){document.body.style.removeProperty("margin-right")}}(e),function(e){var t=e.core,n=t.slideChangeFacade,o=t.slideIndexChanger,i=t.stageManager;e.props.sources.length>1?(n.changeToPrevious=function(){o.jumpTo(i.getPreviousSlideIndex())},n.changeToNext=function(){o.jumpTo(i.getNextSlideIndex())}):(n.changeToPrevious=function(){},n.changeToNext=function(){})}(e),function(e){var t=e.componentsServices,n=e.core,o=n.slideIndexChanger,i=n.sourceDisplayFacade,r=n.stageManager,s=e.elements,a=s.smw,c=s.sourceAnimationWrappers,l=e.isl,u=e.stageIndexes,d=e.sws;o.changeTo=function(e){u.current=e,r.updateStageIndexes(),t.setSlideNumber(e+1),i.displaySourcesWhichShouldBeDisplayed()},o.jumpTo=function(e){var t=u.previous,n=u.current,i=u.next,s=l[n],f=l[e];o.changeTo(e);for(var p=0;p<a.length;p++)a[p].d();d.d(n),d.c(),requestAnimationFrame((function(){requestAnimationFrame((function(){var e=u.previous,o=u.next;function p(){r.i(n)?n===u.previous?a[n].ne():n===u.next&&a[n].p():(a[n].h(),a[n].n())}s&&c[n].classList.add(m),f&&c[u.current].classList.add(h),d.a(),void 0!==e&&e!==n&&a[e].ne(),a[u.current].n(),void 0!==o&&o!==n&&a[o].p(),d.b(t),d.b(i),l[n]?setTimeout(p,260):p()}))}))}}(e),function(e){var t=e.core.sourcesPointerDown,n=e.elements,o=n.smw,i=n.sources,r=e.sourcePointerProps,s=e.stageIndexes;t.listener=function(e){"VIDEO"!==e.target.tagName&&e.preventDefault(),r.isPointering=!0,r.downScreenX=e.screenX,r.swipedX=0;var t=i[s.current];t&&t.contains(e.target)?r.isSourceDownEventTarget=!0:r.isSourceDownEventTarget=!1;for(var n=0;n<o.length;n++)o[n].d()}}(e),function(e){var t=e.collections.sourcesRenderFunctions,n=e.core.sourceDisplayFacade,o=e.props,i=e.stageIndexes;function r(e){t[e]&&(t[e](),delete t[e])}n.displaySourcesWhichShouldBeDisplayed=function(){if(o.loadOnlyCurrentSource)r(i.current);else for(var e in i)r(i[e])}}(e),function(e){var t=e.core.stageManager,n=e.elements,o=n.smw,i=n.sourceAnimationWrappers,r=e.isl,s=e.stageIndexes,a=e.sws;a.a=function(){for(var e in s)o[s[e]].s()},a.b=function(e){void 0===e||t.i(e)||(o[e].h(),o[e].n())},a.c=function(){for(var e in s)a.d(s[e])},a.d=function(e){if(r[e]){var t=i[e];K(t,g),K(t,h),K(t,m)}}}(e),function(e){var t=e.collections.sourceSizers,n=e.core.windowResizeActioner,o=e.data,i=e.elements.smw,r=e.stageIndexes;n.runActions=function(){innerWidth<992?o.maxSourceWidth=innerWidth:o.maxSourceWidth=.9*innerWidth,o.maxSourceHeight=.9*innerHeight;for(var e=0;e<i.length;e++)i[e].d(),t[e]&&t[e].adjustSize();var n=r.previous,s=r.next;void 0!==n&&i[n].ne(),void 0!==s&&i[s].p()}}(e)}function Z(e){var t=e.componentsServices,n=e.core,o=n.eventsDispatcher,r=n.globalEventsController,s=n.scrollbarRecompensor,c=n.sourceDisplayFacade,u=n.stageManager,f=n.windowResizeActioner,p=e.data,h=e.elements,m=(e.props,e.stageIndexes),v=e.sws;function b(){var t,n;p.i=!0,p.scrollbarWidth=function(){var e=document.createElement("div"),t=e.style,n=document.createElement("div");t.visibility="hidden",t.width="100px",t.msOverflowStyle="scrollbar",t.overflow="scroll",n.style.width="100%",document.body.appendChild(e);var o=e.offsetWidth;e.appendChild(n);var i=n.offsetWidth;return document.body.removeChild(e),o-i}(),Q(e),h.container=document.createElement("div"),h.container.className="".concat(i,"container ").concat(a," ").concat(g),function(e){var t=e.elements;t.slideSwipingHoverer=document.createElement("div"),t.slideSwipingHoverer.className="".concat(i,"slide-swiping-hoverer ").concat(a," ").concat(d)}(e),X(e),function(e){var t=e.core.sourcesPointerDown,n=e.elements,o=e.props.sources,i=document.createElement("div");i.className="".concat(d," ").concat(a),n.container.appendChild(i),i.addEventListener("pointerdown",t.listener),n.sourceWrappersContainer=i;for(var r=0;r<o.length;r++)D(e,r)}(e),e.props.sources.length>1&&(n=(t=e).core.slideChangeFacade,B(t,n.changeToPrevious,"previous","M18.271,9.212H3.615l4.184-4.184c0.306-0.306,0.306-0.801,0-1.107c-0.306-0.306-0.801-0.306-1.107,0L1.21,9.403C1.194,9.417,1.174,9.421,1.158,9.437c-0.181,0.181-0.242,0.425-0.209,0.66c0.005,0.038,0.012,0.071,0.022,0.109c0.028,0.098,0.075,0.188,0.142,0.271c0.021,0.026,0.021,0.061,0.045,0.085c0.015,0.016,0.034,0.02,0.05,0.033l5.484,5.483c0.306,0.307,0.801,0.307,1.107,0c0.306-0.305,0.306-0.801,0-1.105l-4.184-4.185h14.656c0.436,0,0.788-0.353,0.788-0.788S18.707,9.212,18.271,9.212z"),B(t,n.changeToNext,"next","M1.729,9.212h14.656l-4.184-4.184c-0.307-0.306-0.307-0.801,0-1.107c0.305-0.306,0.801-0.306,1.106,0l5.481,5.482c0.018,0.014,0.037,0.019,0.053,0.034c0.181,0.181,0.242,0.425,0.209,0.66c-0.004,0.038-0.012,0.071-0.021,0.109c-0.028,0.098-0.075,0.188-0.143,0.271c-0.021,0.026-0.021,0.061-0.045,0.085c-0.015,0.016-0.034,0.02-0.051,0.033l-5.483,5.483c-0.306,0.307-0.802,0.307-1.106,0c-0.307-0.305-0.307-0.801,0-1.105l4.184-4.185H1.729c-0.436,0-0.788-0.353-0.788-0.788S1.293,9.212,1.729,9.212z")),function(e){for(var t=e.props.sources,n=e.resolve,o=n(L),i=n(H),r=n(R,[o,i]),s=0;s<t.length;s++)if("string"==typeof t[s]){var a=r.getTypeSetByClientForIndex(s);if(a)i.runActionsForSourceTypeAndIndex(a,s);else{var c=o.getSourceTypeFromLocalStorageByUrl(t[s]);c?i.runActionsForSourceTypeAndIndex(c,s):r.retrieveTypeWithXhrForIndex(s)}}else i.runActionsForSourceTypeAndIndex("custom",s)}(e),o.dispatch("onInit")}e.open=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,i=m.previous,a=m.current,d=m.next;m.current=n,p.i||S(e),u.updateStageIndexes(),p.i?(v.c(),v.a(),v.b(i),v.b(a),v.b(d),o.dispatch("onShow")):b(),c.displaySourcesWhichShouldBeDisplayed(),t.setSlideNumber(n+1),document.body.appendChild(h.container),document.documentElement.classList.add(l),s.addRecompense(),r.attachListeners(),f.runActions(),h.smw[m.current].n(),o.dispatch("onOpen")}}function ee(e,t,n){return(ee=te()?Reflect.construct.bind():function(e,t,n){var o=[null];o.push.apply(o,t);var i=new(Function.bind.apply(e,o));return n&&ne(i,n.prototype),i}).apply(null,arguments)}function te(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function ne(e,t){return(ne=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function oe(e){return function(e){if(Array.isArray(e))return ie(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return ie(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ie(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ie(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function re(){for(var e=document.getElementsByTagName("a"),t=function(t){if(!e[t].hasAttribute("data-fslightbox"))return"continue";var n=e[t].hasAttribute("data-href")?e[t].getAttribute("data-href"):e[t].getAttribute("href");if(!n)return console.warn('The "data-fslightbox" attribute was set without the "href" attribute.'),"continue";var o=e[t].getAttribute("data-fslightbox");fsLightboxInstances[o]||(fsLightboxInstances[o]=new FsLightbox);var i=null;"#"===n.charAt(0)?(i=document.getElementById(n.substring(1)).cloneNode(!0)).removeAttribute("id"):i=n,fsLightboxInstances[o].props.sources.push(i),fsLightboxInstances[o].elements.a.push(e[t]);var r=fsLightboxInstances[o].props.sources.length-1;e[t].onclick=function(e){e.preventDefault(),fsLightboxInstances[o].open(r)},d("types","data-type"),d("videosPosters","data-video-poster"),d("customClasses","data-class"),d("customClasses","data-custom-class");for(var s=["href","data-fslightbox","data-href","data-type","data-video-poster","data-class","data-custom-class"],a=e[t].attributes,c=fsLightboxInstances[o].props.customAttributes,l=0;l<a.length;l++)if(-1===s.indexOf(a[l].name)&&"data-"===a[l].name.substr(0,5)){c[r]||(c[r]={});var u=a[l].name.substr(5);c[r][u]=a[l].value}function d(n,i){e[t].hasAttribute(i)&&(fsLightboxInstances[o].props[n][r]=e[t].getAttribute(i))}},n=0;n<e.length;n++)t(n);var o=Object.keys(fsLightboxInstances);window.fsLightbox=fsLightboxInstances[o[o.length-1]]}window.FsLightbox=function(){var e=this;this.props={sources:[],customAttributes:[],customClasses:[],types:[],videosPosters:[],slideDistance:.3},this.data={isFullscreenOpen:!1,maxSourceWidth:0,maxSourceHeight:0,scrollbarWidth:0},this.isl=[],this.sourcePointerProps={downScreenX:null,isPointering:!1,isSourceDownEventTarget:!1,swipedX:0},this.stageIndexes={},this.elements={a:[],container:null,slideSwipingHoverer:null,smw:[],sourceWrappersContainer:null,sources:[],sourceAnimationWrappers:[]},this.componentsServices={setSlideNumber:function(){}},this.resolve=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return n.unshift(e),ee(t,oe(n))},this.collections={sourceLoadHandlers:[],sourcesRenderFunctions:[],sourceSizers:[]},this.core={eventsDispatcher:{},globalEventsController:{},lightboxCloser:{},lightboxUpdater:{},scrollbarRecompensor:{},slideChangeFacade:{},slideIndexChanger:{},sourcesPointerDown:{},sourceDisplayFacade:{},stageManager:{},windowResizeActioner:{}},this.fs={},this.sws={},Z(this),this.close=function(){return e.core.lightboxCloser.closeLightbox()}},window.fsLightboxInstances={},re(),window.refreshFsLightbox=function(){for(var e in fsLightboxInstances){var t=fsLightboxInstances[e].props;fsLightboxInstances[e]=new FsLightbox,fsLightboxInstances[e].props=t,fsLightboxInstances[e].props.sources=[],fsLightboxInstances[e].elements.a=[]}re()}}])}));;
  /**
   * Owl Carousel v2.3.4
   * Copyright 2013-2018 David Deutsch
   * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
   */
  /**
   * Owl carousel
   * @version 2.3.4
   * @author Bartosz Wojciechowski
   * @author David Deutsch
   * @license The MIT License (MIT)
   * @todo Lazy Load Icon
   * @todo prevent animationend bubling
   * @todo itemsScaleUp
   * @todo Test Zepto
   * @todo stagePadding calculate wrong active classes
   */
  ;(function($, window, document, undefined) {
  
      /**
       * Creates a carousel.
       * @class The Owl Carousel.
       * @public
       * @param {HTMLElement|jQuery} element - The element to create the carousel for.
       * @param {Object} [options] - The options
       */
      function Owl(element, options) {
  
          /**
           * Current settings for the carousel.
           * @public
           */
          this.settings = null;
  
          /**
           * Current options set by the caller including defaults.
           * @public
           */
          this.options = $.extend({}, Owl.Defaults, options);
  
          /**
           * Plugin element.
           * @public
           */
          this.$element = $(element);
  
          /**
           * Proxied event handlers.
           * @protected
           */
          this._handlers = {};
  
          /**
           * References to the running plugins of this carousel.
           * @protected
           */
          this._plugins = {};
  
          /**
           * Currently suppressed events to prevent them from being retriggered.
           * @protected
           */
          this._supress = {};
  
          /**
           * Absolute current position.
           * @protected
           */
          this._current = null;
  
          /**
           * Animation speed in milliseconds.
           * @protected
           */
          this._speed = null;
  
          /**
           * Coordinates of all items in pixel.
           * @todo The name of this member is missleading.
           * @protected
           */
          this._coordinates = [];
  
          /**
           * Current breakpoint.
           * @todo Real media queries would be nice.
           * @protected
           */
          this._breakpoint = null;
  
          /**
           * Current width of the plugin element.
           */
          this._width = null;
  
          /**
           * All real items.
           * @protected
           */
          this._items = [];
  
          /**
           * All cloned items.
           * @protected
           */
          this._clones = [];
  
          /**
           * Merge values of all items.
           * @todo Maybe this could be part of a plugin.
           * @protected
           */
          this._mergers = [];
  
          /**
           * Widths of all items.
           */
          this._widths = [];
  
          /**
           * Invalidated parts within the update process.
           * @protected
           */
          this._invalidated = {};
  
          /**
           * Ordered list of workers for the update process.
           * @protected
           */
          this._pipe = [];
  
          /**
           * Current state information for the drag operation.
           * @todo #261
           * @protected
           */
          this._drag = {
              time: null,
              target: null,
              pointer: null,
              stage: {
                  start: null,
                  current: null
              },
              direction: null
          };
  
          /**
           * Current state information and their tags.
           * @type {Object}
           * @protected
           */
          this._states = {
              current: {},
              tags: {
                  'initializing': [ 'busy' ],
                  'animating': [ 'busy' ],
                  'dragging': [ 'interacting' ]
              }
          };
  
          $.each([ 'onResize', 'onThrottledResize' ], $.proxy(function(i, handler) {
              this._handlers[handler] = $.proxy(this[handler], this);
          }, this));
  
          $.each(Owl.Plugins, $.proxy(function(key, plugin) {
              this._plugins[key.charAt(0).toLowerCase() + key.slice(1)]
                  = new plugin(this);
          }, this));
  
          $.each(Owl.Workers, $.proxy(function(priority, worker) {
              this._pipe.push({
                  'filter': worker.filter,
                  'run': $.proxy(worker.run, this)
              });
          }, this));
  
          this.setup();
          this.initialize();
      }
  
      /**
       * Default options for the carousel.
       * @public
       */
      Owl.Defaults = {
          items: 3,
          loop: false,
          center: false,
          rewind: false,
          checkVisibility: true,
  
          mouseDrag: true,
          touchDrag: true,
          pullDrag: true,
          freeDrag: false,
  
          margin: 0,
          stagePadding: 0,
  
          merge: false,
          mergeFit: true,
          autoWidth: false,
  
          startPosition: 0,
          rtl: false,
  
          smartSpeed: 250,
          fluidSpeed: false,
          dragEndSpeed: false,
  
          responsive: {},
          responsiveRefreshRate: 200,
          responsiveBaseElement: window,
  
          fallbackEasing: 'swing',
          slideTransition: '',
  
          info: false,
  
          nestedItemSelector: false,
          itemElement: 'div',
          stageElement: 'div',
  
          refreshClass: 'owl-refresh',
          loadedClass: 'owl-loaded',
          loadingClass: 'owl-loading',
          rtlClass: 'owl-rtl',
          responsiveClass: 'owl-responsive',
          dragClass: 'owl-drag',
          itemClass: 'owl-item',
          stageClass: 'owl-stage',
          stageOuterClass: 'owl-stage-outer',
          grabClass: 'owl-grab'
      };
  
      /**
       * Enumeration for width.
       * @public
       * @readonly
       * @enum {String}
       */
      Owl.Width = {
          Default: 'default',
          Inner: 'inner',
          Outer: 'outer'
      };
  
      /**
       * Enumeration for types.
       * @public
       * @readonly
       * @enum {String}
       */
      Owl.Type = {
          Event: 'event',
          State: 'state'
      };
  
      /**
       * Contains all registered plugins.
       * @public
       */
      Owl.Plugins = {};
  
      /**
       * List of workers involved in the update process.
       */
      Owl.Workers = [ {
          filter: [ 'width', 'settings' ],
          run: function() {
              this._width = this.$element.width();
          }
      }, {
          filter: [ 'width', 'items', 'settings' ],
          run: function(cache) {
              cache.current = this._items && this._items[this.relative(this._current)];
          }
      }, {
          filter: [ 'items', 'settings' ],
          run: function() {
              this.$stage.children('.cloned').remove();
          }
      }, {
          filter: [ 'width', 'items', 'settings' ],
          run: function(cache) {
              var margin = this.settings.margin || '',
                  grid = !this.settings.autoWidth,
                  rtl = this.settings.rtl,
                  css = {
                      'width': 'auto',
                      'margin-left': rtl ? margin : '',
                      'margin-right': rtl ? '' : margin
                  };
  
              !grid && this.$stage.children().css(css);
  
              cache.css = css;
          }
      }, {
          filter: [ 'width', 'items', 'settings' ],
          run: function(cache) {
              var width = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                  merge = null,
                  iterator = this._items.length,
                  grid = !this.settings.autoWidth,
                  widths = [];
  
              cache.items = {
                  merge: false,
                  width: width
              };
  
              while (iterator--) {
                  merge = this._mergers[iterator];
                  merge = this.settings.mergeFit && Math.min(merge, this.settings.items) || merge;
  
                  cache.items.merge = merge > 1 || cache.items.merge;
  
                  widths[iterator] = !grid ? this._items[iterator].width() : width * merge;
              }
  
              this._widths = widths;
          }
      }, {
          filter: [ 'items', 'settings' ],
          run: function() {
              var clones = [],
                  items = this._items,
                  settings = this.settings,
                  // TODO: Should be computed from number of min width items in stage
                  view = Math.max(settings.items * 2, 4),
                  size = Math.ceil(items.length / 2) * 2,
                  repeat = settings.loop && items.length ? settings.rewind ? view : Math.max(view, size) : 0,
                  append = '',
                  prepend = '';
  
              repeat /= 2;
  
              while (repeat > 0) {
                  // Switch to only using appended clones
                  clones.push(this.normalize(clones.length / 2, true));
                  append = append + items[clones[clones.length - 1]][0].outerHTML;
                  clones.push(this.normalize(items.length - 1 - (clones.length - 1) / 2, true));
                  prepend = items[clones[clones.length - 1]][0].outerHTML + prepend;
                  repeat -= 1;
              }
  
              this._clones = clones;
  
              $(append).addClass('cloned').appendTo(this.$stage);
              $(prepend).addClass('cloned').prependTo(this.$stage);
          }
      }, {
          filter: [ 'width', 'items', 'settings' ],
          run: function() {
              var rtl = this.settings.rtl ? 1 : -1,
                  size = this._clones.length + this._items.length,
                  iterator = -1,
                  previous = 0,
                  current = 0,
                  coordinates = [];
  
              while (++iterator < size) {
                  previous = coordinates[iterator - 1] || 0;
                  current = this._widths[this.relative(iterator)] + this.settings.margin;
                  coordinates.push(previous + current * rtl);
              }
  
              this._coordinates = coordinates;
          }
      }, {
          filter: [ 'width', 'items', 'settings' ],
          run: function() {
              var padding = this.settings.stagePadding,
                  coordinates = this._coordinates,
                  css = {
                      'width': Math.ceil(Math.abs(coordinates[coordinates.length - 1])) + padding * 2,
                      'padding-left': padding || '',
                      'padding-right': padding || ''
                  };
  
              this.$stage.css(css);
          }
      }, {
          filter: [ 'width', 'items', 'settings' ],
          run: function(cache) {
              var iterator = this._coordinates.length,
                  grid = !this.settings.autoWidth,
                  items = this.$stage.children();
  
              if (grid && cache.items.merge) {
                  while (iterator--) {
                      cache.css.width = this._widths[this.relative(iterator)];
                      items.eq(iterator).css(cache.css);
                  }
              } else if (grid) {
                  cache.css.width = cache.items.width;
                  items.css(cache.css);
              }
          }
      }, {
          filter: [ 'items' ],
          run: function() {
              this._coordinates.length < 1 && this.$stage.removeAttr('style');
          }
      }, {
          filter: [ 'width', 'items', 'settings' ],
          run: function(cache) {
              cache.current = cache.current ? this.$stage.children().index(cache.current) : 0;
              cache.current = Math.max(this.minimum(), Math.min(this.maximum(), cache.current));
              this.reset(cache.current);
          }
      }, {
          filter: [ 'position' ],
          run: function() {
              this.animate(this.coordinates(this._current));
          }
      }, {
          filter: [ 'width', 'position', 'items', 'settings' ],
          run: function() {
              var rtl = this.settings.rtl ? 1 : -1,
                  padding = this.settings.stagePadding * 2,
                  begin = this.coordinates(this.current()) + padding,
                  end = begin + this.width() * rtl,
                  inner, outer, matches = [], i, n;
  
              for (i = 0, n = this._coordinates.length; i < n; i++) {
                  inner = this._coordinates[i - 1] || 0;
                  outer = Math.abs(this._coordinates[i]) + padding * rtl;
  
                  if ((this.op(inner, '<=', begin) && (this.op(inner, '>', end)))
                      || (this.op(outer, '<', begin) && this.op(outer, '>', end))) {
                      matches.push(i);
                  }
              }
  
              this.$stage.children('.active').removeClass('active');
              this.$stage.children(':eq(' + matches.join('), :eq(') + ')').addClass('active');
  
              this.$stage.children('.center').removeClass('center');
              if (this.settings.center) {
                  this.$stage.children().eq(this.current()).addClass('center');
              }
          }
      } ];
  
      /**
       * Create the stage DOM element
       */
      Owl.prototype.initializeStage = function() {
          this.$stage = this.$element.find('.' + this.settings.stageClass);
  
          // if the stage is already in the DOM, grab it and skip stage initialization
          if (this.$stage.length) {
              return;
          }
  
          this.$element.addClass(this.options.loadingClass);
  
          // create stage
          this.$stage = $('<' + this.settings.stageElement + '>', {
              "class": this.settings.stageClass
          }).wrap( $( '<div/>', {
              "class": this.settings.stageOuterClass
          }));
  
          // append stage
          this.$element.append(this.$stage.parent());
      };
  
      /**
       * Create item DOM elements
       */
      Owl.prototype.initializeItems = function() {
          var $items = this.$element.find('.owl-item');
  
          // if the items are already in the DOM, grab them and skip item initialization
          if ($items.length) {
              this._items = $items.get().map(function(item) {
                  return $(item);
              });
  
              this._mergers = this._items.map(function() {
                  return 1;
              });
  
              this.refresh();
  
              return;
          }
  
          // append content
          this.replace(this.$element.children().not(this.$stage.parent()));
  
          // check visibility
          if (this.isVisible()) {
              // update view
              this.refresh();
          } else {
              // invalidate width
              this.invalidate('width');
          }
  
          this.$element
              .removeClass(this.options.loadingClass)
              .addClass(this.options.loadedClass);
      };
  
      /**
       * Initializes the carousel.
       * @protected
       */
      Owl.prototype.initialize = function() {
          this.enter('initializing');
          this.trigger('initialize');
  
          this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl);
  
          if (this.settings.autoWidth && !this.is('pre-loading')) {
              var imgs, nestedSelector, width;
              imgs = this.$element.find('img');
              nestedSelector = this.settings.nestedItemSelector ? '.' + this.settings.nestedItemSelector : undefined;
              width = this.$element.children(nestedSelector).width();
  
              if (imgs.length && width <= 0) {
                  this.preloadAutoWidthImages(imgs);
              }
          }
  
          this.initializeStage();
          this.initializeItems();
  
          // register event handlers
          this.registerEventHandlers();
  
          this.leave('initializing');
          this.trigger('initialized');
      };
  
      /**
       * @returns {Boolean} visibility of $element
       *                    if you know the carousel will always be visible you can set `checkVisibility` to `false` to
       *                    prevent the expensive browser layout forced reflow the $element.is(':visible') does
       */
      Owl.prototype.isVisible = function() {
          return this.settings.checkVisibility
              ? this.$element.is(':visible')
              : true;
      };
  
      /**
       * Setups the current settings.
       * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
       * @todo Support for media queries by using `matchMedia` would be nice.
       * @public
       */
      Owl.prototype.setup = function() {
          var viewport = this.viewport(),
              overwrites = this.options.responsive,
              match = -1,
              settings = null;
  
          if (!overwrites) {
              settings = $.extend({}, this.options);
          } else {
              $.each(overwrites, function(breakpoint) {
                  if (breakpoint <= viewport && breakpoint > match) {
                      match = Number(breakpoint);
                  }
              });
  
              settings = $.extend({}, this.options, overwrites[match]);
              if (typeof settings.stagePadding === 'function') {
                  settings.stagePadding = settings.stagePadding();
              }
              delete settings.responsive;
  
              // responsive class
              if (settings.responsiveClass) {
                  this.$element.attr('class',
                      this.$element.attr('class').replace(new RegExp('(' + this.options.responsiveClass + '-)\\S+\\s', 'g'), '$1' + match)
                  );
              }
          }
  
          this.trigger('change', { property: { name: 'settings', value: settings } });
          this._breakpoint = match;
          this.settings = settings;
          this.invalidate('settings');
          this.trigger('changed', { property: { name: 'settings', value: this.settings } });
      };
  
      /**
       * Updates option logic if necessery.
       * @protected
       */
      Owl.prototype.optionsLogic = function() {
          if (this.settings.autoWidth) {
              this.settings.stagePadding = false;
              this.settings.merge = false;
          }
      };
  
      /**
       * Prepares an item before add.
       * @todo Rename event parameter `content` to `item`.
       * @protected
       * @returns {jQuery|HTMLElement} - The item container.
       */
      Owl.prototype.prepare = function(item) {
          var event = this.trigger('prepare', { content: item });
  
          if (!event.data) {
              event.data = $('<' + this.settings.itemElement + '/>')
                  .addClass(this.options.itemClass).append(item)
          }
  
          this.trigger('prepared', { content: event.data });
  
          return event.data;
      };
  
      /**
       * Updates the view.
       * @public
       */
      Owl.prototype.update = function() {
          var i = 0,
              n = this._pipe.length,
              filter = $.proxy(function(p) { return this[p] }, this._invalidated),
              cache = {};
  
          while (i < n) {
              if (this._invalidated.all || $.grep(this._pipe[i].filter, filter).length > 0) {
                  this._pipe[i].run(cache);
              }
              i++;
          }
  
          this._invalidated = {};
  
          !this.is('valid') && this.enter('valid');
      };
  
      /**
       * Gets the width of the view.
       * @public
       * @param {Owl.Width} [dimension=Owl.Width.Default] - The dimension to return.
       * @returns {Number} - The width of the view in pixel.
       */
      Owl.prototype.width = function(dimension) {
          dimension = dimension || Owl.Width.Default;
          switch (dimension) {
              case Owl.Width.Inner:
              case Owl.Width.Outer:
                  return this._width;
              default:
                  return this._width - this.settings.stagePadding * 2 + this.settings.margin;
          }
      };
  
      /**
       * Refreshes the carousel primarily for adaptive purposes.
       * @public
       */
      Owl.prototype.refresh = function() {
          this.enter('refreshing');
          this.trigger('refresh');
  
          this.setup();
  
          this.optionsLogic();
  
          this.$element.addClass(this.options.refreshClass);
  
          this.update();
  
          this.$element.removeClass(this.options.refreshClass);
  
          this.leave('refreshing');
          this.trigger('refreshed');
      };
  
      /**
       * Checks window `resize` event.
       * @protected
       */
      Owl.prototype.onThrottledResize = function() {
          window.clearTimeout(this.resizeTimer);
          this.resizeTimer = window.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate);
      };
  
      /**
       * Checks window `resize` event.
       * @protected
       */
      Owl.prototype.onResize = function() {
          if (!this._items.length) {
              return false;
          }
  
          if (this._width === this.$element.width()) {
              return false;
          }
  
          if (!this.isVisible()) {
              return false;
          }
  
          this.enter('resizing');
  
          if (this.trigger('resize').isDefaultPrevented()) {
              this.leave('resizing');
              return false;
          }
  
          this.invalidate('width');
  
          this.refresh();
  
          this.leave('resizing');
          this.trigger('resized');
      };
  
      /**
       * Registers event handlers.
       * @todo Check `msPointerEnabled`
       * @todo #261
       * @protected
       */
      Owl.prototype.registerEventHandlers = function() {
          if ($.support.transition) {
              this.$stage.on($.support.transition.end + '.owl.core', $.proxy(this.onTransitionEnd, this));
          }
  
          if (this.settings.responsive !== false) {
              this.on(window, 'resize', this._handlers.onThrottledResize);
          }
  
          if (this.settings.mouseDrag) {
              this.$element.addClass(this.options.dragClass);
              this.$stage.on('mousedown.owl.core', $.proxy(this.onDragStart, this));
              this.$stage.on('dragstart.owl.core selectstart.owl.core', function() { return false });
          }
  
          if (this.settings.touchDrag){
              this.$stage.on('touchstart.owl.core', $.proxy(this.onDragStart, this));
              this.$stage.on('touchcancel.owl.core', $.proxy(this.onDragEnd, this));
          }
      };
  
      /**
       * Handles `touchstart` and `mousedown` events.
       * @todo Horizontal swipe threshold as option
       * @todo #261
       * @protected
       * @param {Event} event - The event arguments.
       */
      Owl.prototype.onDragStart = function(event) {
          var stage = null;
  
          if (event.which === 3) {
              return;
          }
  
          if ($.support.transform) {
              stage = this.$stage.css('transform').replace(/.*\(|\)| /g, '').split(',');
              stage = {
                  x: stage[stage.length === 16 ? 12 : 4],
                  y: stage[stage.length === 16 ? 13 : 5]
              };
          } else {
              stage = this.$stage.position();
              stage = {
                  x: this.settings.rtl ?
                      stage.left + this.$stage.width() - this.width() + this.settings.margin :
                      stage.left,
                  y: stage.top
              };
          }
  
          if (this.is('animating')) {
              $.support.transform ? this.animate(stage.x) : this.$stage.stop()
              this.invalidate('position');
          }
  
          this.$element.toggleClass(this.options.grabClass, event.type === 'mousedown');
  
          this.speed(0);
  
          this._drag.time = new Date().getTime();
          this._drag.target = $(event.target);
          this._drag.stage.start = stage;
          this._drag.stage.current = stage;
          this._drag.pointer = this.pointer(event);
  
          $(document).on('mouseup.owl.core touchend.owl.core', $.proxy(this.onDragEnd, this));
  
          $(document).one('mousemove.owl.core touchmove.owl.core', $.proxy(function(event) {
              var delta = this.difference(this._drag.pointer, this.pointer(event));
  
              $(document).on('mousemove.owl.core touchmove.owl.core', $.proxy(this.onDragMove, this));
  
              if (Math.abs(delta.x) < Math.abs(delta.y) && this.is('valid')) {
                  return;
              }
  
              event.preventDefault();
  
              this.enter('dragging');
              this.trigger('drag');
          }, this));
      };
  
      /**
       * Handles the `touchmove` and `mousemove` events.
       * @todo #261
       * @protected
       * @param {Event} event - The event arguments.
       */
      Owl.prototype.onDragMove = function(event) {
          var minimum = null,
              maximum = null,
              pull = null,
              delta = this.difference(this._drag.pointer, this.pointer(event)),
              stage = this.difference(this._drag.stage.start, delta);
  
          if (!this.is('dragging')) {
              return;
          }
  
          event.preventDefault();
  
          if (this.settings.loop) {
              minimum = this.coordinates(this.minimum());
              maximum = this.coordinates(this.maximum() + 1) - minimum;
              stage.x = (((stage.x - minimum) % maximum + maximum) % maximum) + minimum;
          } else {
              minimum = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
              maximum = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
              pull = this.settings.pullDrag ? -1 * delta.x / 5 : 0;
              stage.x = Math.max(Math.min(stage.x, minimum + pull), maximum + pull);
          }
  
          this._drag.stage.current = stage;
  
          this.animate(stage.x);
      };
  
      /**
       * Handles the `touchend` and `mouseup` events.
       * @todo #261
       * @todo Threshold for click event
       * @protected
       * @param {Event} event - The event arguments.
       */
      Owl.prototype.onDragEnd = function(event) {
          var delta = this.difference(this._drag.pointer, this.pointer(event)),
              stage = this._drag.stage.current,
              direction = delta.x > 0 ^ this.settings.rtl ? 'left' : 'right';
  
          $(document).off('.owl.core');
  
          this.$element.removeClass(this.options.grabClass);
  
          if (delta.x !== 0 && this.is('dragging') || !this.is('valid')) {
              this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
              this.current(this.closest(stage.x, delta.x !== 0 ? direction : this._drag.direction));
              this.invalidate('position');
              this.update();
  
              this._drag.direction = direction;
  
              if (Math.abs(delta.x) > 3 || new Date().getTime() - this._drag.time > 300) {
                  this._drag.target.one('click.owl.core', function() { return false; });
              }
          }
  
          if (!this.is('dragging')) {
              return;
          }
  
          this.leave('dragging');
          this.trigger('dragged');
      };
  
      /**
       * Gets absolute position of the closest item for a coordinate.
       * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
       * @protected
       * @param {Number} coordinate - The coordinate in pixel.
       * @param {String} direction - The direction to check for the closest item. Ether `left` or `right`.
       * @return {Number} - The absolute position of the closest item.
       */
      Owl.prototype.closest = function(coordinate, direction) {
          var position = -1,
              pull = 30,
              width = this.width(),
              coordinates = this.coordinates();
  
          if (!this.settings.freeDrag) {
              // check closest item
              $.each(coordinates, $.proxy(function(index, value) {
                  // on a left pull, check on current index
                  if (direction === 'left' && coordinate > value - pull && coordinate < value + pull) {
                      position = index;
                  // on a right pull, check on previous index
                  // to do so, subtract width from value and set position = index + 1
                  } else if (direction === 'right' && coordinate > value - width - pull && coordinate < value - width + pull) {
                      position = index + 1;
                  } else if (this.op(coordinate, '<', value)
                      && this.op(coordinate, '>', coordinates[index + 1] !== undefined ? coordinates[index + 1] : value - width)) {
                      position = direction === 'left' ? index + 1 : index;
                  }
                  return position === -1;
              }, this));
          }
  
          if (!this.settings.loop) {
              // non loop boundries
              if (this.op(coordinate, '>', coordinates[this.minimum()])) {
                  position = coordinate = this.minimum();
              } else if (this.op(coordinate, '<', coordinates[this.maximum()])) {
                  position = coordinate = this.maximum();
              }
          }
  
          return position;
      };
  
      /**
       * Animates the stage.
       * @todo #270
       * @public
       * @param {Number} coordinate - The coordinate in pixels.
       */
      Owl.prototype.animate = function(coordinate) {
          var animate = this.speed() > 0;
  
          this.is('animating') && this.onTransitionEnd();
  
          if (animate) {
              this.enter('animating');
              this.trigger('translate');
          }
  
          if ($.support.transform3d && $.support.transition) {
              this.$stage.css({
                  transform: 'translate3d(' + coordinate + 'px,0px,0px)',
                  transition: (this.speed() / 1000) + 's' + (
                      this.settings.slideTransition ? ' ' + this.settings.slideTransition : ''
                  )
              });
          } else if (animate) {
              this.$stage.animate({
                  left: coordinate + 'px'
              }, this.speed(), this.settings.fallbackEasing, $.proxy(this.onTransitionEnd, this));
          } else {
              this.$stage.css({
                  left: coordinate + 'px'
              });
          }
      };
  
      /**
       * Checks whether the carousel is in a specific state or not.
       * @param {String} state - The state to check.
       * @returns {Boolean} - The flag which indicates if the carousel is busy.
       */
      Owl.prototype.is = function(state) {
          return this._states.current[state] && this._states.current[state] > 0;
      };
  
      /**
       * Sets the absolute position of the current item.
       * @public
       * @param {Number} [position] - The new absolute position or nothing to leave it unchanged.
       * @returns {Number} - The absolute position of the current item.
       */
      Owl.prototype.current = function(position) {
          if (position === undefined) {
              return this._current;
          }
  
          if (this._items.length === 0) {
              return undefined;
          }
  
          position = this.normalize(position);
  
          if (this._current !== position) {
              var event = this.trigger('change', { property: { name: 'position', value: position } });
  
              if (event.data !== undefined) {
                  position = this.normalize(event.data);
              }
  
              this._current = position;
  
              this.invalidate('position');
  
              this.trigger('changed', { property: { name: 'position', value: this._current } });
          }
  
          return this._current;
      };
  
      /**
       * Invalidates the given part of the update routine.
       * @param {String} [part] - The part to invalidate.
       * @returns {Array.<String>} - The invalidated parts.
       */
      Owl.prototype.invalidate = function(part) {
          if ($.type(part) === 'string') {
              this._invalidated[part] = true;
              this.is('valid') && this.leave('valid');
          }
          return $.map(this._invalidated, function(v, i) { return i });
      };
  
      /**
       * Resets the absolute position of the current item.
       * @public
       * @param {Number} position - The absolute position of the new item.
       */
      Owl.prototype.reset = function(position) {
          position = this.normalize(position);
  
          if (position === undefined) {
              return;
          }
  
          this._speed = 0;
          this._current = position;
  
          this.suppress([ 'translate', 'translated' ]);
  
          this.animate(this.coordinates(position));
  
          this.release([ 'translate', 'translated' ]);
      };
  
      /**
       * Normalizes an absolute or a relative position of an item.
       * @public
       * @param {Number} position - The absolute or relative position to normalize.
       * @param {Boolean} [relative=false] - Whether the given position is relative or not.
       * @returns {Number} - The normalized position.
       */
      Owl.prototype.normalize = function(position, relative) {
          var n = this._items.length,
              m = relative ? 0 : this._clones.length;
  
          if (!this.isNumeric(position) || n < 1) {
              position = undefined;
          } else if (position < 0 || position >= n + m) {
              position = ((position - m / 2) % n + n) % n + m / 2;
          }
  
          return position;
      };
  
      /**
       * Converts an absolute position of an item into a relative one.
       * @public
       * @param {Number} position - The absolute position to convert.
       * @returns {Number} - The converted position.
       */
      Owl.prototype.relative = function(position) {
          position -= this._clones.length / 2;
          return this.normalize(position, true);
      };
  
      /**
       * Gets the maximum position for the current item.
       * @public
       * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
       * @returns {Number}
       */
      Owl.prototype.maximum = function(relative) {
          var settings = this.settings,
              maximum = this._coordinates.length,
              iterator,
              reciprocalItemsWidth,
              elementWidth;
  
          if (settings.loop) {
              maximum = this._clones.length / 2 + this._items.length - 1;
          } else if (settings.autoWidth || settings.merge) {
              iterator = this._items.length;
              if (iterator) {
                  reciprocalItemsWidth = this._items[--iterator].width();
                  elementWidth = this.$element.width();
                  while (iterator--) {
                      reciprocalItemsWidth += this._items[iterator].width() + this.settings.margin;
                      if (reciprocalItemsWidth > elementWidth) {
                          break;
                      }
                  }
              }
              maximum = iterator + 1;
          } else if (settings.center) {
              maximum = this._items.length - 1;
          } else {
              maximum = this._items.length - settings.items;
          }
  
          if (relative) {
              maximum -= this._clones.length / 2;
          }
  
          return Math.max(maximum, 0);
      };
  
      /**
       * Gets the minimum position for the current item.
       * @public
       * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
       * @returns {Number}
       */
      Owl.prototype.minimum = function(relative) {
          return relative ? 0 : this._clones.length / 2;
      };
  
      /**
       * Gets an item at the specified relative position.
       * @public
       * @param {Number} [position] - The relative position of the item.
       * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
       */
      Owl.prototype.items = function(position) {
          if (position === undefined) {
              return this._items.slice();
          }
  
          position = this.normalize(position, true);
          return this._items[position];
      };
  
      /**
       * Gets an item at the specified relative position.
       * @public
       * @param {Number} [position] - The relative position of the item.
       * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
       */
      Owl.prototype.mergers = function(position) {
          if (position === undefined) {
              return this._mergers.slice();
          }
  
          position = this.normalize(position, true);
          return this._mergers[position];
      };
  
      /**
       * Gets the absolute positions of clones for an item.
       * @public
       * @param {Number} [position] - The relative position of the item.
       * @returns {Array.<Number>} - The absolute positions of clones for the item or all if no position was given.
       */
      Owl.prototype.clones = function(position) {
          var odd = this._clones.length / 2,
              even = odd + this._items.length,
              map = function(index) { return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2 };
  
          if (position === undefined) {
              return $.map(this._clones, function(v, i) { return map(i) });
          }
  
          return $.map(this._clones, function(v, i) { return v === position ? map(i) : null });
      };
  
      /**
       * Sets the current animation speed.
       * @public
       * @param {Number} [speed] - The animation speed in milliseconds or nothing to leave it unchanged.
       * @returns {Number} - The current animation speed in milliseconds.
       */
      Owl.prototype.speed = function(speed) {
          if (speed !== undefined) {
              this._speed = speed;
          }
  
          return this._speed;
      };
  
      /**
       * Gets the coordinate of an item.
       * @todo The name of this method is missleanding.
       * @public
       * @param {Number} position - The absolute position of the item within `minimum()` and `maximum()`.
       * @returns {Number|Array.<Number>} - The coordinate of the item in pixel or all coordinates.
       */
      Owl.prototype.coordinates = function(position) {
          var multiplier = 1,
              newPosition = position - 1,
              coordinate;
  
          if (position === undefined) {
              return $.map(this._coordinates, $.proxy(function(coordinate, index) {
                  return this.coordinates(index);
              }, this));
          }
  
          if (this.settings.center) {
              if (this.settings.rtl) {
                  multiplier = -1;
                  newPosition = position + 1;
              }
  
              coordinate = this._coordinates[position];
              coordinate += (this.width() - coordinate + (this._coordinates[newPosition] || 0)) / 2 * multiplier;
          } else {
              coordinate = this._coordinates[newPosition] || 0;
          }
  
          coordinate = Math.ceil(coordinate);
  
          return coordinate;
      };
  
      /**
       * Calculates the speed for a translation.
       * @protected
       * @param {Number} from - The absolute position of the start item.
       * @param {Number} to - The absolute position of the target item.
       * @param {Number} [factor=undefined] - The time factor in milliseconds.
       * @returns {Number} - The time in milliseconds for the translation.
       */
      Owl.prototype.duration = function(from, to, factor) {
          if (factor === 0) {
              return 0;
          }
  
          return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs((factor || this.settings.smartSpeed));
      };
  
      /**
       * Slides to the specified item.
       * @public
       * @param {Number} position - The position of the item.
       * @param {Number} [speed] - The time in milliseconds for the transition.
       */
      Owl.prototype.to = function(position, speed) {
          var current = this.current(),
              revert = null,
              distance = position - this.relative(current),
              direction = (distance > 0) - (distance < 0),
              items = this._items.length,
              minimum = this.minimum(),
              maximum = this.maximum();
  
          if (this.settings.loop) {
              if (!this.settings.rewind && Math.abs(distance) > items / 2) {
                  distance += direction * -1 * items;
              }
  
              position = current + distance;
              revert = ((position - minimum) % items + items) % items + minimum;
  
              if (revert !== position && revert - distance <= maximum && revert - distance > 0) {
                  current = revert - distance;
                  position = revert;
                  this.reset(current);
              }
          } else if (this.settings.rewind) {
              maximum += 1;
              position = (position % maximum + maximum) % maximum;
          } else {
              position = Math.max(minimum, Math.min(maximum, position));
          }
  
          this.speed(this.duration(current, position, speed));
          this.current(position);
  
          if (this.isVisible()) {
              this.update();
          }
      };
  
      /**
       * Slides to the next item.
       * @public
       * @param {Number} [speed] - The time in milliseconds for the transition.
       */
      Owl.prototype.next = function(speed) {
          speed = speed || false;
          this.to(this.relative(this.current()) + 1, speed);
      };
  
      /**
       * Slides to the previous item.
       * @public
       * @param {Number} [speed] - The time in milliseconds for the transition.
       */
      Owl.prototype.prev = function(speed) {
          speed = speed || false;
          this.to(this.relative(this.current()) - 1, speed);
      };
  
      /**
       * Handles the end of an animation.
       * @protected
       * @param {Event} event - The event arguments.
       */
      Owl.prototype.onTransitionEnd = function(event) {
  
          // if css2 animation then event object is undefined
          if (event !== undefined) {
              event.stopPropagation();
  
              // Catch only owl-stage transitionEnd event
              if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)) {
                  return false;
              }
          }
  
          this.leave('animating');
          this.trigger('translated');
      };
  
      /**
       * Gets viewport width.
       * @protected
       * @return {Number} - The width in pixel.
       */
      Owl.prototype.viewport = function() {
          var width;
          if (this.options.responsiveBaseElement !== window) {
              width = $(this.options.responsiveBaseElement).width();
          } else if (window.innerWidth) {
              width = window.innerWidth;
          } else if (document.documentElement && document.documentElement.clientWidth) {
              width = document.documentElement.clientWidth;
          } else {
              console.warn('Can not detect viewport width.');
          }
          return width;
      };
  
      /**
       * Replaces the current content.
       * @public
       * @param {HTMLElement|jQuery|String} content - The new content.
       */
      Owl.prototype.replace = function(content) {
          this.$stage.empty();
          this._items = [];
  
          if (content) {
              content = (content instanceof jQuery) ? content : $(content);
          }
  
          if (this.settings.nestedItemSelector) {
              content = content.find('.' + this.settings.nestedItemSelector);
          }
  
          content.filter(function() {
              return this.nodeType === 1;
          }).each($.proxy(function(index, item) {
              item = this.prepare(item);
              this.$stage.append(item);
              this._items.push(item);
              this._mergers.push(item.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
          }, this));
  
          this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);
  
          this.invalidate('items');
      };
  
      /**
       * Adds an item.
       * @todo Use `item` instead of `content` for the event arguments.
       * @public
       * @param {HTMLElement|jQuery|String} content - The item content to add.
       * @param {Number} [position] - The relative position at which to insert the item otherwise the item will be added to the end.
       */
      Owl.prototype.add = function(content, position) {
          var current = this.relative(this._current);
  
          position = position === undefined ? this._items.length : this.normalize(position, true);
          content = content instanceof jQuery ? content : $(content);
  
          this.trigger('add', { content: content, position: position });
  
          content = this.prepare(content);
  
          if (this._items.length === 0 || position === this._items.length) {
              this._items.length === 0 && this.$stage.append(content);
              this._items.length !== 0 && this._items[position - 1].after(content);
              this._items.push(content);
              this._mergers.push(content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
          } else {
              this._items[position].before(content);
              this._items.splice(position, 0, content);
              this._mergers.splice(position, 0, content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
          }
  
          this._items[current] && this.reset(this._items[current].index());
  
          this.invalidate('items');
  
          this.trigger('added', { content: content, position: position });
      };
  
      /**
       * Removes an item by its position.
       * @todo Use `item` instead of `content` for the event arguments.
       * @public
       * @param {Number} position - The relative position of the item to remove.
       */
      Owl.prototype.remove = function(position) {
          position = this.normalize(position, true);
  
          if (position === undefined) {
              return;
          }
  
          this.trigger('remove', { content: this._items[position], position: position });
  
          this._items[position].remove();
          this._items.splice(position, 1);
          this._mergers.splice(position, 1);
  
          this.invalidate('items');
  
          this.trigger('removed', { content: null, position: position });
      };
  
      /**
       * Preloads images with auto width.
       * @todo Replace by a more generic approach
       * @protected
       */
      Owl.prototype.preloadAutoWidthImages = function(images) {
          images.each($.proxy(function(i, element) {
              this.enter('pre-loading');
              element = $(element);
              $(new Image()).one('load', $.proxy(function(e) {
                  element.attr('src', e.target.src);
                  element.css('opacity', 1);
                  this.leave('pre-loading');
                  !this.is('pre-loading') && !this.is('initializing') && this.refresh();
              }, this)).attr('src', element.attr('src') || element.attr('data-src') || element.attr('data-src-retina'));
          }, this));
      };
  
      /**
       * Destroys the carousel.
       * @public
       */
      Owl.prototype.destroy = function() {
  
          this.$element.off('.owl.core');
          this.$stage.off('.owl.core');
          $(document).off('.owl.core');
  
          if (this.settings.responsive !== false) {
              window.clearTimeout(this.resizeTimer);
              this.off(window, 'resize', this._handlers.onThrottledResize);
          }
  
          for (var i in this._plugins) {
              this._plugins[i].destroy();
          }
  
          this.$stage.children('.cloned').remove();
  
          this.$stage.unwrap();
          this.$stage.children().contents().unwrap();
          this.$stage.children().unwrap();
          this.$stage.remove();
          this.$element
              .removeClass(this.options.refreshClass)
              .removeClass(this.options.loadingClass)
              .removeClass(this.options.loadedClass)
              .removeClass(this.options.rtlClass)
              .removeClass(this.options.dragClass)
              .removeClass(this.options.grabClass)
              .attr('class', this.$element.attr('class').replace(new RegExp(this.options.responsiveClass + '-\\S+\\s', 'g'), ''))
              .removeData('owl.carousel');
      };
  
      /**
       * Operators to calculate right-to-left and left-to-right.
       * @protected
       * @param {Number} [a] - The left side operand.
       * @param {String} [o] - The operator.
       * @param {Number} [b] - The right side operand.
       */
      Owl.prototype.op = function(a, o, b) {
          var rtl = this.settings.rtl;
          switch (o) {
              case '<':
                  return rtl ? a > b : a < b;
              case '>':
                  return rtl ? a < b : a > b;
              case '>=':
                  return rtl ? a <= b : a >= b;
              case '<=':
                  return rtl ? a >= b : a <= b;
              default:
                  break;
          }
      };
  
      /**
       * Attaches to an internal event.
       * @protected
       * @param {HTMLElement} element - The event source.
       * @param {String} event - The event name.
       * @param {Function} listener - The event handler to attach.
       * @param {Boolean} capture - Wether the event should be handled at the capturing phase or not.
       */
      Owl.prototype.on = function(element, event, listener, capture) {
          if (element.addEventListener) {
              element.addEventListener(event, listener, capture);
          } else if (element.attachEvent) {
              element.attachEvent('on' + event, listener);
          }
      };
  
      /**
       * Detaches from an internal event.
       * @protected
       * @param {HTMLElement} element - The event source.
       * @param {String} event - The event name.
       * @param {Function} listener - The attached event handler to detach.
       * @param {Boolean} capture - Wether the attached event handler was registered as a capturing listener or not.
       */
      Owl.prototype.off = function(element, event, listener, capture) {
          if (element.removeEventListener) {
              element.removeEventListener(event, listener, capture);
          } else if (element.detachEvent) {
              element.detachEvent('on' + event, listener);
          }
      };
  
      /**
       * Triggers a public event.
       * @todo Remove `status`, `relatedTarget` should be used instead.
       * @protected
       * @param {String} name - The event name.
       * @param {*} [data=null] - The event data.
       * @param {String} [namespace=carousel] - The event namespace.
       * @param {String} [state] - The state which is associated with the event.
       * @param {Boolean} [enter=false] - Indicates if the call enters the specified state or not.
       * @returns {Event} - The event arguments.
       */
      Owl.prototype.trigger = function(name, data, namespace, state, enter) {
          var status = {
              item: { count: this._items.length, index: this.current() }
          }, handler = $.camelCase(
              $.grep([ 'on', name, namespace ], function(v) { return v })
                  .join('-').toLowerCase()
          ), event = $.Event(
              [ name, 'owl', namespace || 'carousel' ].join('.').toLowerCase(),
              $.extend({ relatedTarget: this }, status, data)
          );
  
          if (!this._supress[name]) {
              $.each(this._plugins, function(name, plugin) {
                  if (plugin.onTrigger) {
                      plugin.onTrigger(event);
                  }
              });
  
              this.register({ type: Owl.Type.Event, name: name });
              this.$element.trigger(event);
  
              if (this.settings && typeof this.settings[handler] === 'function') {
                  this.settings[handler].call(this, event);
              }
          }
  
          return event;
      };
  
      /**
       * Enters a state.
       * @param name - The state name.
       */
      Owl.prototype.enter = function(name) {
          $.each([ name ].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
              if (this._states.current[name] === undefined) {
                  this._states.current[name] = 0;
              }
  
              this._states.current[name]++;
          }, this));
      };
  
      /**
       * Leaves a state.
       * @param name - The state name.
       */
      Owl.prototype.leave = function(name) {
          $.each([ name ].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
              this._states.current[name]--;
          }, this));
      };
  
      /**
       * Registers an event or state.
       * @public
       * @param {Object} object - The event or state to register.
       */
      Owl.prototype.register = function(object) {
          if (object.type === Owl.Type.Event) {
              if (!$.event.special[object.name]) {
                  $.event.special[object.name] = {};
              }
  
              if (!$.event.special[object.name].owl) {
                  var _default = $.event.special[object.name]._default;
                  $.event.special[object.name]._default = function(e) {
                      if (_default && _default.apply && (!e.namespace || e.namespace.indexOf('owl') === -1)) {
                          return _default.apply(this, arguments);
                      }
                      return e.namespace && e.namespace.indexOf('owl') > -1;
                  };
                  $.event.special[object.name].owl = true;
              }
          } else if (object.type === Owl.Type.State) {
              if (!this._states.tags[object.name]) {
                  this._states.tags[object.name] = object.tags;
              } else {
                  this._states.tags[object.name] = this._states.tags[object.name].concat(object.tags);
              }
  
              this._states.tags[object.name] = $.grep(this._states.tags[object.name], $.proxy(function(tag, i) {
                  return $.inArray(tag, this._states.tags[object.name]) === i;
              }, this));
          }
      };
  
      /**
       * Suppresses events.
       * @protected
       * @param {Array.<String>} events - The events to suppress.
       */
      Owl.prototype.suppress = function(events) {
          $.each(events, $.proxy(function(index, event) {
              this._supress[event] = true;
          }, this));
      };
  
      /**
       * Releases suppressed events.
       * @protected
       * @param {Array.<String>} events - The events to release.
       */
      Owl.prototype.release = function(events) {
          $.each(events, $.proxy(function(index, event) {
              delete this._supress[event];
          }, this));
      };
  
      /**
       * Gets unified pointer coordinates from event.
       * @todo #261
       * @protected
       * @param {Event} - The `mousedown` or `touchstart` event.
       * @returns {Object} - Contains `x` and `y` coordinates of current pointer position.
       */
      Owl.prototype.pointer = function(event) {
          var result = { x: null, y: null };
  
          event = event.originalEvent || event || window.event;
  
          event = event.touches && event.touches.length ?
              event.touches[0] : event.changedTouches && event.changedTouches.length ?
                  event.changedTouches[0] : event;
  
          if (event.pageX) {
              result.x = event.pageX;
              result.y = event.pageY;
          } else {
              result.x = event.clientX;
              result.y = event.clientY;
          }
  
          return result;
      };
  
      /**
       * Determines if the input is a Number or something that can be coerced to a Number
       * @protected
       * @param {Number|String|Object|Array|Boolean|RegExp|Function|Symbol} - The input to be tested
       * @returns {Boolean} - An indication if the input is a Number or can be coerced to a Number
       */
      Owl.prototype.isNumeric = function(number) {
          return !isNaN(parseFloat(number));
      };
  
      /**
       * Gets the difference of two vectors.
       * @todo #261
       * @protected
       * @param {Object} - The first vector.
       * @param {Object} - The second vector.
       * @returns {Object} - The difference.
       */
      Owl.prototype.difference = function(first, second) {
          return {
              x: first.x - second.x,
              y: first.y - second.y
          };
      };
  
      /**
       * The jQuery Plugin for the Owl Carousel
       * @todo Navigation plugin `next` and `prev`
       * @public
       */
      $.fn.owlCarousel = function(option) {
          var args = Array.prototype.slice.call(arguments, 1);
  
          return this.each(function() {
              var $this = $(this),
                  data = $this.data('owl.carousel');
  
              if (!data) {
                  data = new Owl(this, typeof option == 'object' && option);
                  $this.data('owl.carousel', data);
  
                  $.each([
                      'next', 'prev', 'to', 'destroy', 'refresh', 'replace', 'add', 'remove'
                  ], function(i, event) {
                      data.register({ type: Owl.Type.Event, name: event });
                      data.$element.on(event + '.owl.carousel.core', $.proxy(function(e) {
                          if (e.namespace && e.relatedTarget !== this) {
                              this.suppress([ event ]);
                              data[event].apply(this, [].slice.call(arguments, 1));
                              this.release([ event ]);
                          }
                      }, data));
                  });
              }
  
              if (typeof option == 'string' && option.charAt(0) !== '_') {
                  data[option].apply(data, args);
              }
          });
      };
  
      /**
       * The constructor for the jQuery Plugin
       * @public
       */
      $.fn.owlCarousel.Constructor = Owl;
  
  })(window.Zepto || window.jQuery, window, document);
  
  /**
   * AutoRefresh Plugin
   * @version 2.3.4
   * @author Artus Kolanowski
   * @author David Deutsch
   * @license The MIT License (MIT)
   */
  ;(function($, window, document, undefined) {
  
      /**
       * Creates the auto refresh plugin.
       * @class The Auto Refresh Plugin
       * @param {Owl} carousel - The Owl Carousel
       */
      var AutoRefresh = function(carousel) {
          /**
           * Reference to the core.
           * @protected
           * @type {Owl}
           */
          this._core = carousel;
  
          /**
           * Refresh interval.
           * @protected
           * @type {number}
           */
          this._interval = null;
  
          /**
           * Whether the element is currently visible or not.
           * @protected
           * @type {Boolean}
           */
          this._visible = null;
  
          /**
           * All event handlers.
           * @protected
           * @type {Object}
           */
          this._handlers = {
              'initialized.owl.carousel': $.proxy(function(e) {
                  if (e.namespace && this._core.settings.autoRefresh) {
                      this.watch();
                  }
              }, this)
          };
  
          // set default options
          this._core.options = $.extend({}, AutoRefresh.Defaults, this._core.options);
  
          // register event handlers
          this._core.$element.on(this._handlers);
      };
  
      /**
       * Default options.
       * @public
       */
      AutoRefresh.Defaults = {
          autoRefresh: true,
          autoRefreshInterval: 500
      };
  
      /**
       * Watches the element.
       */
      AutoRefresh.prototype.watch = function() {
          if (this._interval) {
              return;
          }
  
          this._visible = this._core.isVisible();
          this._interval = window.setInterval($.proxy(this.refresh, this), this._core.settings.autoRefreshInterval);
      };
  
      /**
       * Refreshes the element.
       */
      AutoRefresh.prototype.refresh = function() {
          if (this._core.isVisible() === this._visible) {
              return;
          }
  
          this._visible = !this._visible;
  
          this._core.$element.toggleClass('owl-hidden', !this._visible);
  
          this._visible && (this._core.invalidate('width') && this._core.refresh());
      };
  
      /**
       * Destroys the plugin.
       */
      AutoRefresh.prototype.destroy = function() {
          var handler, property;
  
          window.clearInterval(this._interval);
  
          for (handler in this._handlers) {
              this._core.$element.off(handler, this._handlers[handler]);
          }
          for (property in Object.getOwnPropertyNames(this)) {
              typeof this[property] != 'function' && (this[property] = null);
          }
      };
  
      $.fn.owlCarousel.Constructor.Plugins.AutoRefresh = AutoRefresh;
  
  })(window.Zepto || window.jQuery, window, document);
  
  /**
   * Lazy Plugin
   * @version 2.3.4
   * @author Bartosz Wojciechowski
   * @author David Deutsch
   * @license The MIT License (MIT)
   */
  ;(function($, window, document, undefined) {
  
      /**
       * Creates the lazy plugin.
       * @class The Lazy Plugin
       * @param {Owl} carousel - The Owl Carousel
       */
      var Lazy = function(carousel) {
  
          /**
           * Reference to the core.
           * @protected
           * @type {Owl}
           */
          this._core = carousel;
  
          /**
           * Already loaded items.
           * @protected
           * @type {Array.<jQuery>}
           */
          this._loaded = [];
  
          /**
           * Event handlers.
           * @protected
           * @type {Object}
           */
          this._handlers = {
              'initialized.owl.carousel change.owl.carousel resized.owl.carousel': $.proxy(function(e) {
                  if (!e.namespace) {
                      return;
                  }
  
                  if (!this._core.settings || !this._core.settings.lazyLoad) {
                      return;
                  }
  
                  if ((e.property && e.property.name == 'position') || e.type == 'initialized') {
                      var settings = this._core.settings,
                          n = (settings.center && Math.ceil(settings.items / 2) || settings.items),
                          i = ((settings.center && n * -1) || 0),
                          position = (e.property && e.property.value !== undefined ? e.property.value : this._core.current()) + i,
                          clones = this._core.clones().length,
                          load = $.proxy(function(i, v) { this.load(v) }, this);
                      //TODO: Need documentation for this new option
                      if (settings.lazyLoadEager > 0) {
                          n += settings.lazyLoadEager;
                          // If the carousel is looping also preload images that are to the "left"
                          if (settings.loop) {
                position -= settings.lazyLoadEager;
                n++;
              }
                      }
  
                      while (i++ < n) {
                          this.load(clones / 2 + this._core.relative(position));
                          clones && $.each(this._core.clones(this._core.relative(position)), load);
                          position++;
                      }
                  }
              }, this)
          };
  
          // set the default options
          this._core.options = $.extend({}, Lazy.Defaults, this._core.options);
  
          // register event handler
          this._core.$element.on(this._handlers);
      };
  
      /**
       * Default options.
       * @public
       */
      Lazy.Defaults = {
          lazyLoad: false,
          lazyLoadEager: 0
      };
  
      /**
       * Loads all resources of an item at the specified position.
       * @param {Number} position - The absolute position of the item.
       * @protected
       */
      Lazy.prototype.load = function(position) {
          var $item = this._core.$stage.children().eq(position),
              $elements = $item && $item.find('.owl-lazy');
  
          if (!$elements || $.inArray($item.get(0), this._loaded) > -1) {
              return;
          }
  
          $elements.each($.proxy(function(index, element) {
              var $element = $(element), image,
                  url = (window.devicePixelRatio > 1 && $element.attr('data-src-retina')) || $element.attr('data-src') || $element.attr('data-srcset');
  
              this._core.trigger('load', { element: $element, url: url }, 'lazy');
  
              if ($element.is('img')) {
                  $element.one('load.owl.lazy', $.proxy(function() {
                      $element.css('opacity', 1);
                      this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
                  }, this)).attr('src', url);
              } else if ($element.is('source')) {
                  $element.one('load.owl.lazy', $.proxy(function() {
                      this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
                  }, this)).attr('srcset', url);
              } else {
                  image = new Image();
                  image.onload = $.proxy(function() {
                      $element.css({
                          'background-image': 'url("' + url + '")',
                          'opacity': '1'
                      });
                      this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
                  }, this);
                  image.src = url;
              }
          }, this));
  
          this._loaded.push($item.get(0));
      };
  
      /**
       * Destroys the plugin.
       * @public
       */
      Lazy.prototype.destroy = function() {
          var handler, property;
  
          for (handler in this.handlers) {
              this._core.$element.off(handler, this.handlers[handler]);
          }
          for (property in Object.getOwnPropertyNames(this)) {
              typeof this[property] != 'function' && (this[property] = null);
          }
      };
  
      $.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy;
  
  })(window.Zepto || window.jQuery, window, document);
  
  /**
   * AutoHeight Plugin
   * @version 2.3.4
   * @author Bartosz Wojciechowski
   * @author David Deutsch
   * @license The MIT License (MIT)
   */
  ;(function($, window, document, undefined) {
  
      /**
       * Creates the auto height plugin.
       * @class The Auto Height Plugin
       * @param {Owl} carousel - The Owl Carousel
       */
      var AutoHeight = function(carousel) {
          /**
           * Reference to the core.
           * @protected
           * @type {Owl}
           */
          this._core = carousel;
  
          this._previousHeight = null;
  
          /**
           * All event handlers.
           * @protected
           * @type {Object}
           */
          this._handlers = {
              'initialized.owl.carousel refreshed.owl.carousel': $.proxy(function(e) {
                  if (e.namespace && this._core.settings.autoHeight) {
                      this.update();
                  }
              }, this),
              'changed.owl.carousel': $.proxy(function(e) {
                  if (e.namespace && this._core.settings.autoHeight && e.property.name === 'position'){
                      this.update();
                  }
              }, this),
              'loaded.owl.lazy': $.proxy(function(e) {
                  if (e.namespace && this._core.settings.autoHeight
                      && e.element.closest('.' + this._core.settings.itemClass).index() === this._core.current()) {
                      this.update();
                  }
              }, this)
          };
  
          // set default options
          this._core.options = $.extend({}, AutoHeight.Defaults, this._core.options);
  
          // register event handlers
          this._core.$element.on(this._handlers);
          this._intervalId = null;
          var refThis = this;
  
          // These changes have been taken from a PR by gavrochelegnou proposed in #1575
          // and have been made compatible with the latest jQuery version
          $(window).on('load', function() {
              if (refThis._core.settings.autoHeight) {
                  refThis.update();
              }
          });
  
          // Autoresize the height of the carousel when window is resized
          // When carousel has images, the height is dependent on the width
          // and should also change on resize
          $(window).resize(function() {
              if (refThis._core.settings.autoHeight) {
                  if (refThis._intervalId != null) {
                      clearTimeout(refThis._intervalId);
                  }
  
                  refThis._intervalId = setTimeout(function() {
                      refThis.update();
                  }, 250);
              }
          });
  
      };
  
      /**
       * Default options.
       * @public
       */
      AutoHeight.Defaults = {
          autoHeight: false,
          autoHeightClass: 'owl-height'
      };
  
      /**
       * Updates the view.
       */
      AutoHeight.prototype.update = function() {
          var start = this._core._current,
              end = start + this._core.settings.items,
              lazyLoadEnabled = this._core.settings.lazyLoad,
              visible = this._core.$stage.children().toArray().slice(start, end),
              heights = [],
              maxheight = 0;
  
          $.each(visible, function(index, item) {
              heights.push($(item).height());
          });
  
          maxheight = Math.max.apply(null, heights);
  
          if (maxheight <= 1 && lazyLoadEnabled && this._previousHeight) {
              maxheight = this._previousHeight;
          }
  
          this._previousHeight = maxheight;
  
          this._core.$stage.parent()
              .height(maxheight)
              .addClass(this._core.settings.autoHeightClass);
      };
  
      AutoHeight.prototype.destroy = function() {
          var handler, property;
  
          for (handler in this._handlers) {
              this._core.$element.off(handler, this._handlers[handler]);
          }
          for (property in Object.getOwnPropertyNames(this)) {
              typeof this[property] !== 'function' && (this[property] = null);
          }
      };
  
      $.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;
  
  })(window.Zepto || window.jQuery, window, document);
  
  /**
   * Video Plugin
   * @version 2.3.4
   * @author Bartosz Wojciechowski
   * @author David Deutsch
   * @license The MIT License (MIT)
   */
  ;(function($, window, document, undefined) {
  
      /**
       * Creates the video plugin.
       * @class The Video Plugin
       * @param {Owl} carousel - The Owl Carousel
       */
      var Video = function(carousel) {
          /**
           * Reference to the core.
           * @protected
           * @type {Owl}
           */
          this._core = carousel;
  
          /**
           * Cache all video URLs.
           * @protected
           * @type {Object}
           */
          this._videos = {};
  
          /**
           * Current playing item.
           * @protected
           * @type {jQuery}
           */
          this._playing = null;
  
          /**
           * All event handlers.
           * @todo The cloned content removale is too late
           * @protected
           * @type {Object}
           */
          this._handlers = {
              'initialized.owl.carousel': $.proxy(function(e) {
                  if (e.namespace) {
                      this._core.register({ type: 'state', name: 'playing', tags: [ 'interacting' ] });
                  }
              }, this),
              'resize.owl.carousel': $.proxy(function(e) {
                  if (e.namespace && this._core.settings.video && this.isInFullScreen()) {
                      e.preventDefault();
                  }
              }, this),
              'refreshed.owl.carousel': $.proxy(function(e) {
                  if (e.namespace && this._core.is('resizing')) {
                      this._core.$stage.find('.cloned .owl-video-frame').remove();
                  }
              }, this),
              'changed.owl.carousel': $.proxy(function(e) {
                  if (e.namespace && e.property.name === 'position' && this._playing) {
                      this.stop();
                  }
              }, this),
              'prepared.owl.carousel': $.proxy(function(e) {
                  if (!e.namespace) {
                      return;
                  }
  
                  var $element = $(e.content).find('.owl-video');
  
                  if ($element.length) {
                      $element.css('display', 'none');
                      this.fetch($element, $(e.content));
                  }
              }, this)
          };
  
          // set default options
          this._core.options = $.extend({}, Video.Defaults, this._core.options);
  
          // register event handlers
          this._core.$element.on(this._handlers);
  
          this._core.$element.on('click.owl.video', '.owl-video-play-icon', $.proxy(function(e) {
              this.play(e);
          }, this));
      };
  
      /**
       * Default options.
       * @public
       */
      Video.Defaults = {
          video: false,
          videoHeight: false,
          videoWidth: false
      };
  
      /**
       * Gets the video ID and the type (YouTube/Vimeo/vzaar only).
       * @protected
       * @param {jQuery} target - The target containing the video data.
       * @param {jQuery} item - The item containing the video.
       */
      Video.prototype.fetch = function(target, item) {
              var type = (function() {
                      if (target.attr('data-vimeo-id')) {
                          return 'vimeo';
                      } else if (target.attr('data-vzaar-id')) {
                          return 'vzaar'
                      } else {
                          return 'youtube';
                      }
                  })(),
                  id = target.attr('data-vimeo-id') || target.attr('data-youtube-id') || target.attr('data-vzaar-id'),
                  width = target.attr('data-width') || this._core.settings.videoWidth,
                  height = target.attr('data-height') || this._core.settings.videoHeight,
                  url = target.attr('href');
  
          if (url) {
  
              /*
                      Parses the id's out of the following urls (and probably more):
                      https://www.youtube.com/watch?v=:id
                      https://youtu.be/:id
                      https://vimeo.com/:id
                      https://vimeo.com/channels/:channel/:id
                      https://vimeo.com/groups/:group/videos/:id
                      https://app.vzaar.com/videos/:id
  
                      Visual example: https://regexper.com/#(http%3A%7Chttps%3A%7C)%5C%2F%5C%2F(player.%7Cwww.%7Capp.)%3F(vimeo%5C.com%7Cyoutu(be%5C.com%7C%5C.be%7Cbe%5C.googleapis%5C.com)%7Cvzaar%5C.com)%5C%2F(video%5C%2F%7Cvideos%5C%2F%7Cembed%5C%2F%7Cchannels%5C%2F.%2B%5C%2F%7Cgroups%5C%2F.%2B%5C%2F%7Cwatch%5C%3Fv%3D%7Cv%5C%2F)%3F(%5BA-Za-z0-9._%25-%5D*)(%5C%26%5CS%2B)%3F
              */
  
              id = url.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);
  
              if (id[3].indexOf('youtu') > -1) {
                  type = 'youtube';
              } else if (id[3].indexOf('vimeo') > -1) {
                  type = 'vimeo';
              } else if (id[3].indexOf('vzaar') > -1) {
                  type = 'vzaar';
              } else {
                  throw new Error('Video URL not supported.');
              }
              id = id[6];
          } else {
              throw new Error('Missing video URL.');
          }
  
          this._videos[url] = {
              type: type,
              id: id,
              width: width,
              height: height
          };
  
          item.attr('data-video', url);
  
          this.thumbnail(target, this._videos[url]);
      };
  
      /**
       * Creates video thumbnail.
       * @protected
       * @param {jQuery} target - The target containing the video data.
       * @param {Object} info - The video info object.
       * @see `fetch`
       */
      Video.prototype.thumbnail = function(target, video) {
          var tnLink,
              icon,
              path,
              dimensions = video.width && video.height ? 'width:' + video.width + 'px;height:' + video.height + 'px;' : '',
              customTn = target.find('img'),
              srcType = 'src',
              lazyClass = '',
              settings = this._core.settings,
              create = function(path) {
                  icon = '<div class="owl-video-play-icon"></div>';
  
                  if (settings.lazyLoad) {
                      tnLink = $('<div/>',{
                          "class": 'owl-video-tn ' + lazyClass,
                          "srcType": path
                      });
                  } else {
                      tnLink = $( '<div/>', {
                          "class": "owl-video-tn",
                          "style": 'opacity:1;background-image:url(' + path + ')'
                      });
                  }
                  target.after(tnLink);
                  target.after(icon);
              };
  
          // wrap video content into owl-video-wrapper div
          target.wrap( $( '<div/>', {
              "class": "owl-video-wrapper",
              "style": dimensions
          }));
  
          if (this._core.settings.lazyLoad) {
              srcType = 'data-src';
              lazyClass = 'owl-lazy';
          }
  
          // custom thumbnail
          if (customTn.length) {
              create(customTn.attr(srcType));
              customTn.remove();
              return false;
          }
  
          if (video.type === 'youtube') {
              path = "//img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
              create(path);
          } else if (video.type === 'vimeo') {
              $.ajax({
                  type: 'GET',
                  url: '//vimeo.com/api/v2/video/' + video.id + '.json',
                  jsonp: 'callback',
                  dataType: 'jsonp',
                  success: function(data) {
                      path = data[0].thumbnail_large;
                      create(path);
                  }
              });
          } else if (video.type === 'vzaar') {
              $.ajax({
                  type: 'GET',
                  url: '//vzaar.com/api/videos/' + video.id + '.json',
                  jsonp: 'callback',
                  dataType: 'jsonp',
                  success: function(data) {
                      path = data.framegrab_url;
                      create(path);
                  }
              });
          }
      };
  
      /**
       * Stops the current video.
       * @public
       */
      Video.prototype.stop = function() {
          this._core.trigger('stop', null, 'video');
          this._playing.find('.owl-video-frame').remove();
          this._playing.removeClass('owl-video-playing');
          this._playing = null;
          this._core.leave('playing');
          this._core.trigger('stopped', null, 'video');
      };
  
      /**
       * Starts the current video.
       * @public
       * @param {Event} event - The event arguments.
       */
      Video.prototype.play = function(event) {
          var target = $(event.target),
              item = target.closest('.' + this._core.settings.itemClass),
              video = this._videos[item.attr('data-video')],
              width = video.width || '100%',
              height = video.height || this._core.$stage.height(),
              html,
              iframe;
  
          if (this._playing) {
              return;
          }
  
          this._core.enter('playing');
          this._core.trigger('play', null, 'video');
  
          item = this._core.items(this._core.relative(item.index()));
  
          this._core.reset(item.index());
  
          html = $( '<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>' );
          html.attr( 'height', height );
          html.attr( 'width', width );
          if (video.type === 'youtube') {
              html.attr( 'src', '//www.youtube.com/embed/' + video.id + '?autoplay=1&rel=0&v=' + video.id );
          } else if (video.type === 'vimeo') {
              html.attr( 'src', '//player.vimeo.com/video/' + video.id + '?autoplay=1' );
          } else if (video.type === 'vzaar') {
              html.attr( 'src', '//view.vzaar.com/' + video.id + '/player?autoplay=true' );
          }
  
          iframe = $(html).wrap( '<div class="owl-video-frame" />' ).insertAfter(item.find('.owl-video'));
  
          this._playing = item.addClass('owl-video-playing');
      };
  
      /**
       * Checks whether an video is currently in full screen mode or not.
       * @todo Bad style because looks like a readonly method but changes members.
       * @protected
       * @returns {Boolean}
       */
      Video.prototype.isInFullScreen = function() {
          var element = document.fullscreenElement || document.mozFullScreenElement ||
                  document.webkitFullscreenElement;
  
          return element && $(element).parent().hasClass('owl-video-frame');
      };
  
      /**
       * Destroys the plugin.
       */
      Video.prototype.destroy = function() {
          var handler, property;
  
          this._core.$element.off('click.owl.video');
  
          for (handler in this._handlers) {
              this._core.$element.off(handler, this._handlers[handler]);
          }
          for (property in Object.getOwnPropertyNames(this)) {
              typeof this[property] != 'function' && (this[property] = null);
          }
      };
  
      $.fn.owlCarousel.Constructor.Plugins.Video = Video;
  
  })(window.Zepto || window.jQuery, window, document);
  
  /**
   * Animate Plugin
   * @version 2.3.4
   * @author Bartosz Wojciechowski
   * @author David Deutsch
   * @license The MIT License (MIT)
   */
  ;(function($, window, document, undefined) {
  
      /**
       * Creates the animate plugin.
       * @class The Navigation Plugin
       * @param {Owl} scope - The Owl Carousel
       */
      var Animate = function(scope) {
          this.core = scope;
          this.core.options = $.extend({}, Animate.Defaults, this.core.options);
          this.swapping = true;
          this.previous = undefined;
          this.next = undefined;
  
          this.handlers = {
              'change.owl.carousel': $.proxy(function(e) {
                  if (e.namespace && e.property.name == 'position') {
                      this.previous = this.core.current();
                      this.next = e.property.value;
                  }
              }, this),
              'drag.owl.carousel dragged.owl.carousel translated.owl.carousel': $.proxy(function(e) {
                  if (e.namespace) {
                      this.swapping = e.type == 'translated';
                  }
              }, this),
              'translate.owl.carousel': $.proxy(function(e) {
                  if (e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn)) {
                      this.swap();
                  }
              }, this)
          };
  
          this.core.$element.on(this.handlers);
      };
  
      /**
       * Default options.
       * @public
       */
      Animate.Defaults = {
          animateOut: false,
          animateIn: false
      };
  
      /**
       * Toggles the animation classes whenever an translations starts.
       * @protected
       * @returns {Boolean|undefined}
       */
      Animate.prototype.swap = function() {
  
          if (this.core.settings.items !== 1) {
              return;
          }
  
          if (!$.support.animation || !$.support.transition) {
              return;
          }
  
          this.core.speed(0);
  
          var left,
              clear = $.proxy(this.clear, this),
              previous = this.core.$stage.children().eq(this.previous),
              next = this.core.$stage.children().eq(this.next),
              incoming = this.core.settings.animateIn,
              outgoing = this.core.settings.animateOut;
  
          if (this.core.current() === this.previous) {
              return;
          }
  
          if (outgoing) {
              left = this.core.coordinates(this.previous) - this.core.coordinates(this.next);
              previous.one($.support.animation.end, clear)
                  .css( { 'left': left + 'px' } )
                  .addClass('animated owl-animated-out')
                  .addClass(outgoing);
          }
  
          if (incoming) {
              next.one($.support.animation.end, clear)
                  .addClass('animated owl-animated-in')
                  .addClass(incoming);
          }
      };
  
      Animate.prototype.clear = function(e) {
          $(e.target).css( { 'left': '' } )
              .removeClass('animated owl-animated-out owl-animated-in')
              .removeClass(this.core.settings.animateIn)
              .removeClass(this.core.settings.animateOut);
          this.core.onTransitionEnd();
      };
  
      /**
       * Destroys the plugin.
       * @public
       */
      Animate.prototype.destroy = function() {
          var handler, property;
  
          for (handler in this.handlers) {
              this.core.$element.off(handler, this.handlers[handler]);
          }
          for (property in Object.getOwnPropertyNames(this)) {
              typeof this[property] != 'function' && (this[property] = null);
          }
      };
  
      $.fn.owlCarousel.Constructor.Plugins.Animate = Animate;
  
  })(window.Zepto || window.jQuery, window, document);
  
  /**
   * Autoplay Plugin
   * @version 2.3.4
   * @author Bartosz Wojciechowski
   * @author Artus Kolanowski
   * @author David Deutsch
   * @author Tom De Caluwé
   * @license The MIT License (MIT)
   */
  ;(function($, window, document, undefined) {
  
      /**
       * Creates the autoplay plugin.
       * @class The Autoplay Plugin
       * @param {Owl} scope - The Owl Carousel
       */
      var Autoplay = function(carousel) {
          /**
           * Reference to the core.
           * @protected
           * @type {Owl}
           */
          this._core = carousel;
  
          /**
           * The autoplay timeout id.
           * @type {Number}
           */
          this._call = null;
  
          /**
           * Depending on the state of the plugin, this variable contains either
           * the start time of the timer or the current timer value if it's
           * paused. Since we start in a paused state we initialize the timer
           * value.
           * @type {Number}
           */
          this._time = 0;
  
          /**
           * Stores the timeout currently used.
           * @type {Number}
           */
          this._timeout = 0;
  
          /**
           * Indicates whenever the autoplay is paused.
           * @type {Boolean}
           */
          this._paused = true;
  
          /**
           * All event handlers.
           * @protected
           * @type {Object}
           */
          this._handlers = {
              'changed.owl.carousel': $.proxy(function(e) {
                  if (e.namespace && e.property.name === 'settings') {
                      if (this._core.settings.autoplay) {
                          this.play();
                      } else {
                          this.stop();
                      }
                  } else if (e.namespace && e.property.name === 'position' && this._paused) {
                      // Reset the timer. This code is triggered when the position
                      // of the carousel was changed through user interaction.
                      this._time = 0;
                  }
              }, this),
              'initialized.owl.carousel': $.proxy(function(e) {
                  if (e.namespace && this._core.settings.autoplay) {
                      this.play();
                  }
              }, this),
              'play.owl.autoplay': $.proxy(function(e, t, s) {
                  if (e.namespace) {
                      this.play(t, s);
                  }
              }, this),
              'stop.owl.autoplay': $.proxy(function(e) {
                  if (e.namespace) {
                      this.stop();
                  }
              }, this),
              'mouseover.owl.autoplay': $.proxy(function() {
                  if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
                      this.pause();
                  }
              }, this),
              'mouseleave.owl.autoplay': $.proxy(function() {
                  if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
                      this.play();
                  }
              }, this),
              'touchstart.owl.core': $.proxy(function() {
                  if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
                      this.pause();
                  }
              }, this),
              'touchend.owl.core': $.proxy(function() {
                  if (this._core.settings.autoplayHoverPause) {
                      this.play();
                  }
              }, this)
          };
  
          // register event handlers
          this._core.$element.on(this._handlers);
  
          // set default options
          this._core.options = $.extend({}, Autoplay.Defaults, this._core.options);
      };
  
      /**
       * Default options.
       * @public
       */
      Autoplay.Defaults = {
          autoplay: false,
          autoplayTimeout: 5000,
          autoplayHoverPause: false,
          autoplaySpeed: false
      };
  
      /**
       * Transition to the next slide and set a timeout for the next transition.
       * @private
       * @param {Number} [speed] - The animation speed for the animations.
       */
      Autoplay.prototype._next = function(speed) {
          this._call = window.setTimeout(
              $.proxy(this._next, this, speed),
              this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()
          );
  
          if (this._core.is('interacting') || document.hidden) {
              return;
          }
          this._core.next(speed || this._core.settings.autoplaySpeed);
      }
  
      /**
       * Reads the current timer value when the timer is playing.
       * @public
       */
      Autoplay.prototype.read = function() {
          return new Date().getTime() - this._time;
      };
  
      /**
       * Starts the autoplay.
       * @public
       * @param {Number} [timeout] - The interval before the next animation starts.
       * @param {Number} [speed] - The animation speed for the animations.
       */
      Autoplay.prototype.play = function(timeout, speed) {
          var elapsed;
  
          if (!this._core.is('rotating')) {
              this._core.enter('rotating');
          }
  
          timeout = timeout || this._core.settings.autoplayTimeout;
  
          // Calculate the elapsed time since the last transition. If the carousel
          // wasn't playing this calculation will yield zero.
          elapsed = Math.min(this._time % (this._timeout || timeout), timeout);
  
          if (this._paused) {
              // Start the clock.
              this._time = this.read();
              this._paused = false;
          } else {
              // Clear the active timeout to allow replacement.
              window.clearTimeout(this._call);
          }
  
          // Adjust the origin of the timer to match the new timeout value.
          this._time += this.read() % timeout - elapsed;
  
          this._timeout = timeout;
          this._call = window.setTimeout($.proxy(this._next, this, speed), timeout - elapsed);
      };
  
      /**
       * Stops the autoplay.
       * @public
       */
      Autoplay.prototype.stop = function() {
          if (this._core.is('rotating')) {
              // Reset the clock.
              this._time = 0;
              this._paused = true;
  
              window.clearTimeout(this._call);
              this._core.leave('rotating');
          }
      };
  
      /**
       * Pauses the autoplay.
       * @public
       */
      Autoplay.prototype.pause = function() {
          if (this._core.is('rotating') && !this._paused) {
              // Pause the clock.
              this._time = this.read();
              this._paused = true;
  
              window.clearTimeout(this._call);
          }
      };
  
      /**
       * Destroys the plugin.
       */
      Autoplay.prototype.destroy = function() {
          var handler, property;
  
          this.stop();
  
          for (handler in this._handlers) {
              this._core.$element.off(handler, this._handlers[handler]);
          }
          for (property in Object.getOwnPropertyNames(this)) {
              typeof this[property] != 'function' && (this[property] = null);
          }
      };
  
      $.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;
  
  })(window.Zepto || window.jQuery, window, document);
  
  /**
   * Navigation Plugin
   * @version 2.3.4
   * @author Artus Kolanowski
   * @author David Deutsch
   * @license The MIT License (MIT)
   */
  ;(function($, window, document, undefined) {
      'use strict';
  
      /**
       * Creates the navigation plugin.
       * @class The Navigation Plugin
       * @param {Owl} carousel - The Owl Carousel.
       */
      var Navigation = function(carousel) {
          /**
           * Reference to the core.
           * @protected
           * @type {Owl}
           */
          this._core = carousel;
  
          /**
           * Indicates whether the plugin is initialized or not.
           * @protected
           * @type {Boolean}
           */
          this._initialized = false;
  
          /**
           * The current paging indexes.
           * @protected
           * @type {Array}
           */
          this._pages = [];
  
          /**
           * All DOM elements of the user interface.
           * @protected
           * @type {Object}
           */
          this._controls = {};
  
          /**
           * Markup for an indicator.
           * @protected
           * @type {Array.<String>}
           */
          this._templates = [];
  
          /**
           * The carousel element.
           * @type {jQuery}
           */
          this.$element = this._core.$element;
  
          /**
           * Overridden methods of the carousel.
           * @protected
           * @type {Object}
           */
          this._overrides = {
              next: this._core.next,
              prev: this._core.prev,
              to: this._core.to
          };
  
          /**
           * All event handlers.
           * @protected
           * @type {Object}
           */
          this._handlers = {
              'prepared.owl.carousel': $.proxy(function(e) {
                  if (e.namespace && this._core.settings.dotsData) {
                      this._templates.push('<div class="' + this._core.settings.dotClass + '">' +
                          $(e.content).find('[data-dot]').addBack('[data-dot]').attr('data-dot') + '</div>');
                  }
              }, this),
              'added.owl.carousel': $.proxy(function(e) {
                  if (e.namespace && this._core.settings.dotsData) {
                      this._templates.splice(e.position, 0, this._templates.pop());
                  }
              }, this),
              'remove.owl.carousel': $.proxy(function(e) {
                  if (e.namespace && this._core.settings.dotsData) {
                      this._templates.splice(e.position, 1);
                  }
              }, this),
              'changed.owl.carousel': $.proxy(function(e) {
                  if (e.namespace && e.property.name == 'position') {
                      this.draw();
                  }
              }, this),
              'initialized.owl.carousel': $.proxy(function(e) {
                  if (e.namespace && !this._initialized) {
                      this._core.trigger('initialize', null, 'navigation');
                      this.initialize();
                      this.update();
                      this.draw();
                      this._initialized = true;
                      this._core.trigger('initialized', null, 'navigation');
                  }
              }, this),
              'refreshed.owl.carousel': $.proxy(function(e) {
                  if (e.namespace && this._initialized) {
                      this._core.trigger('refresh', null, 'navigation');
                      this.update();
                      this.draw();
                      this._core.trigger('refreshed', null, 'navigation');
                  }
              }, this)
          };
  
          // set default options
          this._core.options = $.extend({}, Navigation.Defaults, this._core.options);
  
          // register event handlers
          this.$element.on(this._handlers);
      };
  
      /**
       * Default options.
       * @public
       * @todo Rename `slideBy` to `navBy`
       */
      Navigation.Defaults = {
          nav: false,
          navText: [
              '<span aria-label="' + 'Previous' + '">&#x2039;</span>',
              '<span aria-label="' + 'Next' + '">&#x203a;</span>'
          ],
          navSpeed: false,
          navElement: 'button type="button" role="presentation"',
          navContainer: false,
          navContainerClass: 'owl-nav',
          navClass: [
              'owl-prev',
              'owl-next'
          ],
          slideBy: 1,
          dotClass: 'owl-dot',
          dotsClass: 'owl-dots',
          dots: true,
          dotsEach: false,
          dotsData: false,
          dotsSpeed: false,
          dotsContainer: false
      };
  
      /**
       * Initializes the layout of the plugin and extends the carousel.
       * @protected
       */
      Navigation.prototype.initialize = function() {
          var override,
              settings = this._core.settings;
  
          // create DOM structure for relative navigation
          this._controls.$relative = (settings.navContainer ? $(settings.navContainer)
              : $('<div>').addClass(settings.navContainerClass).appendTo(this.$element)).addClass('disabled');
  
          this._controls.$previous = $('<' + settings.navElement + '>')
              .addClass(settings.navClass[0])
              .html(settings.navText[0])
              .prependTo(this._controls.$relative)
              .on('click', $.proxy(function(e) {
                  this.prev(settings.navSpeed);
              }, this));
          this._controls.$next = $('<' + settings.navElement + '>')
              .addClass(settings.navClass[1])
              .html(settings.navText[1])
              .appendTo(this._controls.$relative)
              .on('click', $.proxy(function(e) {
                  this.next(settings.navSpeed);
              }, this));
  
          // create DOM structure for absolute navigation
          if (!settings.dotsData) {
              this._templates = [ $('<button role="button">')
                  .addClass(settings.dotClass)
                  .append($('<span>'))
                  .prop('outerHTML') ];
          }
  
          this._controls.$absolute = (settings.dotsContainer ? $(settings.dotsContainer)
              : $('<div>').addClass(settings.dotsClass).appendTo(this.$element)).addClass('disabled');
  
          this._controls.$absolute.on('click', 'button', $.proxy(function(e) {
              var index = $(e.target).parent().is(this._controls.$absolute)
                  ? $(e.target).index() : $(e.target).parent().index();
  
              e.preventDefault();
  
              this.to(index, settings.dotsSpeed);
          }, this));
  
          /*$el.on('focusin', function() {
              $(document).off(".carousel");
  
              $(document).on('keydown.carousel', function(e) {
                  if(e.keyCode == 37) {
                      $el.trigger('prev.owl')
                  }
                  if(e.keyCode == 39) {
                      $el.trigger('next.owl')
                  }
              });
          });*/
  
          // override public methods of the carousel
          for (override in this._overrides) {
              this._core[override] = $.proxy(this[override], this);
          }
      };
  
      /**
       * Destroys the plugin.
       * @protected
       */
      Navigation.prototype.destroy = function() {
          var handler, control, property, override, settings;
          settings = this._core.settings;
  
          for (handler in this._handlers) {
              this.$element.off(handler, this._handlers[handler]);
          }
          for (control in this._controls) {
              if (control === '$relative' && settings.navContainer) {
                  this._controls[control].html('');
              } else {
                  this._controls[control].remove();
              }
          }
          for (override in this.overides) {
              this._core[override] = this._overrides[override];
          }
          for (property in Object.getOwnPropertyNames(this)) {
              typeof this[property] != 'function' && (this[property] = null);
          }
      };
  
      /**
       * Updates the internal state.
       * @protected
       */
      Navigation.prototype.update = function() {
          var i, j, k,
              lower = this._core.clones().length / 2,
              upper = lower + this._core.items().length,
              maximum = this._core.maximum(true),
              settings = this._core.settings,
              size = settings.center || settings.autoWidth || settings.dotsData
                  ? 1 : settings.dotsEach || settings.items;
  
          if (settings.slideBy !== 'page') {
              settings.slideBy = Math.min(settings.slideBy, settings.items);
          }
  
          if (settings.dots || settings.slideBy == 'page') {
              this._pages = [];
  
              for (i = lower, j = 0, k = 0; i < upper; i++) {
                  if (j >= size || j === 0) {
                      this._pages.push({
                          start: Math.min(maximum, i - lower),
                          end: i - lower + size - 1
                      });
                      if (Math.min(maximum, i - lower) === maximum) {
                          break;
                      }
                      j = 0, ++k;
                  }
                  j += this._core.mergers(this._core.relative(i));
              }
          }
      };
  
      /**
       * Draws the user interface.
       * @todo The option `dotsData` wont work.
       * @protected
       */
      Navigation.prototype.draw = function() {
          var difference,
              settings = this._core.settings,
              disabled = this._core.items().length <= settings.items,
              index = this._core.relative(this._core.current()),
              loop = settings.loop || settings.rewind;
  
          this._controls.$relative.toggleClass('disabled', !settings.nav || disabled);
  
          if (settings.nav) {
              this._controls.$previous.toggleClass('disabled', !loop && index <= this._core.minimum(true));
              this._controls.$next.toggleClass('disabled', !loop && index >= this._core.maximum(true));
          }
  
          this._controls.$absolute.toggleClass('disabled', !settings.dots || disabled);
  
          if (settings.dots) {
              difference = this._pages.length - this._controls.$absolute.children().length;
  
              if (settings.dotsData && difference !== 0) {
                  this._controls.$absolute.html(this._templates.join(''));
              } else if (difference > 0) {
                  this._controls.$absolute.append(new Array(difference + 1).join(this._templates[0]));
              } else if (difference < 0) {
                  this._controls.$absolute.children().slice(difference).remove();
              }
  
              this._controls.$absolute.find('.active').removeClass('active');
              this._controls.$absolute.children().eq($.inArray(this.current(), this._pages)).addClass('active');
          }
      };
  
      /**
       * Extends event data.
       * @protected
       * @param {Event} event - The event object which gets thrown.
       */
      Navigation.prototype.onTrigger = function(event) {
          var settings = this._core.settings;
  
          event.page = {
              index: $.inArray(this.current(), this._pages),
              count: this._pages.length,
              size: settings && (settings.center || settings.autoWidth || settings.dotsData
                  ? 1 : settings.dotsEach || settings.items)
          };
      };
  
      /**
       * Gets the current page position of the carousel.
       * @protected
       * @returns {Number}
       */
      Navigation.prototype.current = function() {
          var current = this._core.relative(this._core.current());
          return $.grep(this._pages, $.proxy(function(page, index) {
              return page.start <= current && page.end >= current;
          }, this)).pop();
      };
  
      /**
       * Gets the current succesor/predecessor position.
       * @protected
       * @returns {Number}
       */
      Navigation.prototype.getPosition = function(successor) {
          var position, length,
              settings = this._core.settings;
  
          if (settings.slideBy == 'page') {
              position = $.inArray(this.current(), this._pages);
              length = this._pages.length;
              successor ? ++position : --position;
              position = this._pages[((position % length) + length) % length].start;
          } else {
              position = this._core.relative(this._core.current());
              length = this._core.items().length;
              successor ? position += settings.slideBy : position -= settings.slideBy;
          }
  
          return position;
      };
  
      /**
       * Slides to the next item or page.
       * @public
       * @param {Number} [speed=false] - The time in milliseconds for the transition.
       */
      Navigation.prototype.next = function(speed) {
          $.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
      };
  
      /**
       * Slides to the previous item or page.
       * @public
       * @param {Number} [speed=false] - The time in milliseconds for the transition.
       */
      Navigation.prototype.prev = function(speed) {
          $.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
      };
  
      /**
       * Slides to the specified item or page.
       * @public
       * @param {Number} position - The position of the item or page.
       * @param {Number} [speed] - The time in milliseconds for the transition.
       * @param {Boolean} [standard=false] - Whether to use the standard behaviour or not.
       */
      Navigation.prototype.to = function(position, speed, standard) {
          var length;
  
          if (!standard && this._pages.length) {
              length = this._pages.length;
              $.proxy(this._overrides.to, this._core)(this._pages[((position % length) + length) % length].start, speed);
          } else {
              $.proxy(this._overrides.to, this._core)(position, speed);
          }
      };
  
      $.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;
  
  })(window.Zepto || window.jQuery, window, document);
  
  /**
   * Hash Plugin
   * @version 2.3.4
   * @author Artus Kolanowski
   * @author David Deutsch
   * @license The MIT License (MIT)
   */
  ;(function($, window, document, undefined) {
      'use strict';
  
      /**
       * Creates the hash plugin.
       * @class The Hash Plugin
       * @param {Owl} carousel - The Owl Carousel
       */
      var Hash = function(carousel) {
          /**
           * Reference to the core.
           * @protected
           * @type {Owl}
           */
          this._core = carousel;
  
          /**
           * Hash index for the items.
           * @protected
           * @type {Object}
           */
          this._hashes = {};
  
          /**
           * The carousel element.
           * @type {jQuery}
           */
          this.$element = this._core.$element;
  
          /**
           * All event handlers.
           * @protected
           * @type {Object}
           */
          this._handlers = {
              'initialized.owl.carousel': $.proxy(function(e) {
                  if (e.namespace && this._core.settings.startPosition === 'URLHash') {
                      $(window).trigger('hashchange.owl.navigation');
                  }
              }, this),
              'prepared.owl.carousel': $.proxy(function(e) {
                  if (e.namespace) {
                      var hash = $(e.content).find('[data-hash]').addBack('[data-hash]').attr('data-hash');
  
                      if (!hash) {
                          return;
                      }
  
                      this._hashes[hash] = e.content;
                  }
              }, this),
              'changed.owl.carousel': $.proxy(function(e) {
                  if (e.namespace && e.property.name === 'position') {
                      var current = this._core.items(this._core.relative(this._core.current())),
                          hash = $.map(this._hashes, function(item, hash) {
                              return item === current ? hash : null;
                          }).join();
  
                      if (!hash || window.location.hash.slice(1) === hash) {
                          return;
                      }
  
                      window.location.hash = hash;
                  }
              }, this)
          };
  
          // set default options
          this._core.options = $.extend({}, Hash.Defaults, this._core.options);
  
          // register the event handlers
          this.$element.on(this._handlers);
  
          // register event listener for hash navigation
          $(window).on('hashchange.owl.navigation', $.proxy(function(e) {
              var hash = window.location.hash.substring(1),
                  items = this._core.$stage.children(),
                  position = this._hashes[hash] && items.index(this._hashes[hash]);
  
              if (position === undefined || position === this._core.current()) {
                  return;
              }
  
              this._core.to(this._core.relative(position), false, true);
          }, this));
      };
  
      /**
       * Default options.
       * @public
       */
      Hash.Defaults = {
          URLhashListener: false
      };
  
      /**
       * Destroys the plugin.
       * @public
       */
      Hash.prototype.destroy = function() {
          var handler, property;
  
          $(window).off('hashchange.owl.navigation');
  
          for (handler in this._handlers) {
              this._core.$element.off(handler, this._handlers[handler]);
          }
          for (property in Object.getOwnPropertyNames(this)) {
              typeof this[property] != 'function' && (this[property] = null);
          }
      };
  
      $.fn.owlCarousel.Constructor.Plugins.Hash = Hash;
  
  })(window.Zepto || window.jQuery, window, document);
  
  /**
   * Support Plugin
   *
   * @version 2.3.4
   * @author Vivid Planet Software GmbH
   * @author Artus Kolanowski
   * @author David Deutsch
   * @license The MIT License (MIT)
   */
  ;(function($, window, document, undefined) {
  
      var style = $('<support>').get(0).style,
          prefixes = 'Webkit Moz O ms'.split(' '),
          events = {
              transition: {
                  end: {
                      WebkitTransition: 'webkitTransitionEnd',
                      MozTransition: 'transitionend',
                      OTransition: 'oTransitionEnd',
                      transition: 'transitionend'
                  }
              },
              animation: {
                  end: {
                      WebkitAnimation: 'webkitAnimationEnd',
                      MozAnimation: 'animationend',
                      OAnimation: 'oAnimationEnd',
                      animation: 'animationend'
                  }
              }
          },
          tests = {
              csstransforms: function() {
                  return !!test('transform');
              },
              csstransforms3d: function() {
                  return !!test('perspective');
              },
              csstransitions: function() {
                  return !!test('transition');
              },
              cssanimations: function() {
                  return !!test('animation');
              }
          };
  
      function test(property, prefixed) {
          var result = false,
              upper = property.charAt(0).toUpperCase() + property.slice(1);
  
          $.each((property + ' ' + prefixes.join(upper + ' ') + upper).split(' '), function(i, property) {
              if (style[property] !== undefined) {
                  result = prefixed ? property : true;
                  return false;
              }
          });
  
          return result;
      }
  
      function prefixed(property) {
          return test(property, true);
      }
  
      if (tests.csstransitions()) {
          /* jshint -W053 */
          $.support.transition = new String(prefixed('transition'))
          $.support.transition.end = events.transition.end[ $.support.transition ];
      }
  
      if (tests.cssanimations()) {
          /* jshint -W053 */
          $.support.animation = new String(prefixed('animation'))
          $.support.animation.end = events.animation.end[ $.support.animation ];
      }
  
      if (tests.csstransforms()) {
          /* jshint -W053 */
          $.support.transform = new String(prefixed('transform'));
          $.support.transform3d = tests.csstransforms3d();
      }
  
  })(window.Zepto || window.jQuery, window, document);;
  /*!
   * Lightbox v2.10.0
   * by Lokesh Dhakar
   *
   * More info:
   * http://lokeshdhakar.com/projects/lightbox2/
   *
   * Copyright 2007, 2018 Lokesh Dhakar
   * Released under the MIT license
   * https://github.com/lokesh/lightbox2/blob/master/LICENSE
   *
   * @preserve
   */
  
  // Uses Node, AMD or browser globals to create a module.
  (function (root, factory) {
      if (typeof define === 'function' && define.amd) {
          // AMD. Register as an anonymous module.
          define(['jquery'], factory);
      } else if (typeof exports === 'object') {
          // Node. Does not work with strict CommonJS, but
          // only CommonJS-like environments that support module.exports,
          // like Node.
          module.exports = factory(require('jquery'));
      } else {
          // Browser globals (root is window)
          root.lightbox = factory(root.jQuery);
      }
  }(this, function ($) {
  
    function Lightbox(options) {
      this.album = [];
      this.currentImageIndex = void 0;
      this.init();
  
      // options
      this.options = $.extend({}, this.constructor.defaults);
      this.option(options);
    }
  
    // Descriptions of all options available on the demo site:
    // http://lokeshdhakar.com/projects/lightbox2/index.html#options
    Lightbox.defaults = {
      albumLabel: 'Image %1 of %2',
      alwaysShowNavOnTouchDevices: false,
      fadeDuration: 600,
      fitImagesInViewport: true,
      imageFadeDuration: 600,
      // maxWidth: 800,
      // maxHeight: 600,
      positionFromTop: 50,
      resizeDuration: 700,
      showImageNumberLabel: true,
      wrapAround: false,
      disableScrolling: false,
      /*
      Sanitize Title
      If the caption data is trusted, for example you are hardcoding it in, then leave this to false.
      This will free you to add html tags, such as links, in the caption.
  
      If the caption data is user submitted or from some other untrusted source, then set this to true
      to prevent xss and other injection attacks.
       */
      sanitizeTitle: false
    };
  
    Lightbox.prototype.option = function(options) {
      $.extend(this.options, options);
    };
  
    Lightbox.prototype.imageCountLabel = function(currentImageNum, totalImages) {
      return this.options.albumLabel.replace(/%1/g, currentImageNum).replace(/%2/g, totalImages);
    };
  
    Lightbox.prototype.init = function() {
      var self = this;
      // Both enable and build methods require the body tag to be in the DOM.
      $(document).ready(function() {
        self.enable();
        self.build();
      });
    };
  
    // Loop through anchors and areamaps looking for either data-lightbox attributes or rel attributes
    // that contain 'lightbox'. When these are clicked, start lightbox.
    Lightbox.prototype.enable = function() {
      var self = this;
      $('body').on('click', 'a[rel^=lightbox], area[rel^=lightbox], a[data-lightbox], area[data-lightbox]', function(event) {
        self.start($(event.currentTarget));
        return false;
      });
    };
  
    // Build html for the lightbox and the overlay.
    // Attach event handlers to the new DOM elements. click click click
    Lightbox.prototype.build = function() {
      if ($('#lightbox').length > 0) {
          return;
      }
  
      var self = this;
      $('<div id="lightboxOverlay" class="lightboxOverlay"></div><div id="lightbox" class="lightbox"><div class="lb-outerContainer"><div class="lb-container"><img class="lb-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" /><div class="lb-nav"><a class="lb-prev" href="" ></a><a class="lb-next" href="" ></a></div><div class="lb-loader"><a class="lb-cancel"></a></div></div></div><div class="lb-dataContainer"><div class="lb-data"><div class="lb-details"><span class="lb-caption"></span><span class="lb-number"></span></div><div class="lb-closeContainer"><a class="lb-close"></a></div></div></div></div>').appendTo($('body'));
  
      // Cache jQuery objects
      this.$lightbox       = $('#lightbox');
      this.$overlay        = $('#lightboxOverlay');
      this.$outerContainer = this.$lightbox.find('.lb-outerContainer');
      this.$container      = this.$lightbox.find('.lb-container');
      this.$image          = this.$lightbox.find('.lb-image');
      this.$nav            = this.$lightbox.find('.lb-nav');
  
      // Store css values for future lookup
      this.containerPadding = {
        top: parseInt(this.$container.css('padding-top'), 10),
        right: parseInt(this.$container.css('padding-right'), 10),
        bottom: parseInt(this.$container.css('padding-bottom'), 10),
        left: parseInt(this.$container.css('padding-left'), 10)
      };
  
      this.imageBorderWidth = {
        top: parseInt(this.$image.css('border-top-width'), 10),
        right: parseInt(this.$image.css('border-right-width'), 10),
        bottom: parseInt(this.$image.css('border-bottom-width'), 10),
        left: parseInt(this.$image.css('border-left-width'), 10)
      };
  
      // Attach event handlers to the newly minted DOM elements
      this.$overlay.hide().on('click', function() {
        self.end();
        return false;
      });
  
      this.$lightbox.hide().on('click', function(event) {
        if ($(event.target).attr('id') === 'lightbox') {
          self.end();
        }
        return false;
      });
  
      this.$outerContainer.on('click', function(event) {
        if ($(event.target).attr('id') === 'lightbox') {
          self.end();
        }
        return false;
      });
  
      this.$lightbox.find('.lb-prev').on('click', function() {
        if (self.currentImageIndex === 0) {
          self.changeImage(self.album.length - 1);
        } else {
          self.changeImage(self.currentImageIndex - 1);
        }
        return false;
      });
  
      this.$lightbox.find('.lb-next').on('click', function() {
        if (self.currentImageIndex === self.album.length - 1) {
          self.changeImage(0);
        } else {
          self.changeImage(self.currentImageIndex + 1);
        }
        return false;
      });
  
      /*
        Show context menu for image on right-click
  
        There is a div containing the navigation that spans the entire image and lives above of it. If
        you right-click, you are right clicking this div and not the image. This prevents users from
        saving the image or using other context menu actions with the image.
  
        To fix this, when we detect the right mouse button is pressed down, but not yet clicked, we
        set pointer-events to none on the nav div. This is so that the upcoming right-click event on
        the next mouseup will bubble down to the image. Once the right-click/contextmenu event occurs
        we set the pointer events back to auto for the nav div so it can capture hover and left-click
        events as usual.
       */
      this.$nav.on('mousedown', function(event) {
        if (event.which === 3) {
          self.$nav.css('pointer-events', 'none');
  
          self.$lightbox.one('contextmenu', function() {
            setTimeout(function() {
                this.$nav.css('pointer-events', 'auto');
            }.bind(self), 0);
          });
        }
      });
  
  
      this.$lightbox.find('.lb-loader, .lb-close').on('click', function() {
        self.end();
        return false;
      });
    };
  
    // Show overlay and lightbox. If the image is part of a set, add siblings to album array.
    Lightbox.prototype.start = function($link) {
      var self    = this;
      var $window = $(window);
  
      $window.on('resize', $.proxy(this.sizeOverlay, this));
  
      $('select, object, embed').css({
        visibility: 'hidden'
      });
  
      this.sizeOverlay();
  
      this.album = [];
      var imageNumber = 0;
  
      function addToAlbum($link) {
        self.album.push({
          alt: $link.attr('data-alt'),
          link: $link.attr('href'),
          title: $link.attr('data-title') || $link.attr('title')
        });
      }
  
      // Support both data-lightbox attribute and rel attribute implementations
      var dataLightboxValue = $link.attr('data-lightbox');
      var $links;
  
      if (dataLightboxValue) {
        $links = $($link.prop('tagName') + '[data-lightbox="' + dataLightboxValue + '"]');
        for (var i = 0; i < $links.length; i = ++i) {
          addToAlbum($($links[i]));
          if ($links[i] === $link[0]) {
            imageNumber = i;
          }
        }
      } else {
        if ($link.attr('rel') === 'lightbox') {
          // If image is not part of a set
          addToAlbum($link);
        } else {
          // If image is part of a set
          $links = $($link.prop('tagName') + '[rel="' + $link.attr('rel') + '"]');
          for (var j = 0; j < $links.length; j = ++j) {
            addToAlbum($($links[j]));
            if ($links[j] === $link[0]) {
              imageNumber = j;
            }
          }
        }
      }
  
      // Position Lightbox
      var top  = $window.scrollTop() + this.options.positionFromTop;
      var left = $window.scrollLeft();
      this.$lightbox.css({
        top: top + 'px',
        left: left + 'px'
      }).fadeIn(this.options.fadeDuration);
  
      // Disable scrolling of the page while open
      if (this.options.disableScrolling) {
        $('html').addClass('lb-disable-scrolling');
      }
  
      this.changeImage(imageNumber);
    };
  
    // Hide most UI elements in preparation for the animated resizing of the lightbox.
    Lightbox.prototype.changeImage = function(imageNumber) {
      var self = this;
  
      this.disableKeyboardNav();
      var $image = this.$lightbox.find('.lb-image');
  
      this.$overlay.fadeIn(this.options.fadeDuration);
  
      $('.lb-loader').fadeIn('slow');
      this.$lightbox.find('.lb-image, .lb-nav, .lb-prev, .lb-next, .lb-dataContainer, .lb-numbers, .lb-caption').hide();
  
      this.$outerContainer.addClass('animating');
  
      // When image to show is preloaded, we send the width and height to sizeContainer()
      var preloader = new Image();
      preloader.onload = function() {
        var $preloader;
        var imageHeight;
        var imageWidth;
        var maxImageHeight;
        var maxImageWidth;
        var windowHeight;
        var windowWidth;
  
        $image.attr({
          'alt': self.album[imageNumber].alt,
          'src': self.album[imageNumber].link
        });
  
        $preloader = $(preloader);
  
        $image.width(preloader.width);
        $image.height(preloader.height);
  
        if (self.options.fitImagesInViewport) {
          // Fit image inside the viewport.
          // Take into account the border around the image and an additional 10px gutter on each side.
  
          windowWidth    = $(window).width();
          windowHeight   = $(window).height();
          maxImageWidth  = windowWidth - self.containerPadding.left - self.containerPadding.right - self.imageBorderWidth.left - self.imageBorderWidth.right - 20;
          maxImageHeight = windowHeight - self.containerPadding.top - self.containerPadding.bottom - self.imageBorderWidth.top - self.imageBorderWidth.bottom - 120;
  
          // Check if image size is larger then maxWidth|maxHeight in settings
          if (self.options.maxWidth && self.options.maxWidth < maxImageWidth) {
            maxImageWidth = self.options.maxWidth;
          }
          if (self.options.maxHeight && self.options.maxHeight < maxImageWidth) {
            maxImageHeight = self.options.maxHeight;
          }
  
          // Is the current image's width or height is greater than the maxImageWidth or maxImageHeight
          // option than we need to size down while maintaining the aspect ratio.
          if ((preloader.width > maxImageWidth) || (preloader.height > maxImageHeight)) {
            if ((preloader.width / maxImageWidth) > (preloader.height / maxImageHeight)) {
              imageWidth  = maxImageWidth;
              imageHeight = parseInt(preloader.height / (preloader.width / imageWidth), 10);
              $image.width(imageWidth);
              $image.height(imageHeight);
            } else {
              imageHeight = maxImageHeight;
              imageWidth = parseInt(preloader.width / (preloader.height / imageHeight), 10);
              $image.width(imageWidth);
              $image.height(imageHeight);
            }
          }
        }
        self.sizeContainer($image.width(), $image.height());
      };
  
      preloader.src          = this.album[imageNumber].link;
      this.currentImageIndex = imageNumber;
    };
  
    // Stretch overlay to fit the viewport
    Lightbox.prototype.sizeOverlay = function() {
      this.$overlay
        .width($(document).width())
        .height($(document).height());
    };
  
    // Animate the size of the lightbox to fit the image we are showing
    Lightbox.prototype.sizeContainer = function(imageWidth, imageHeight) {
      var self = this;
  
      var oldWidth  = this.$outerContainer.outerWidth();
      var oldHeight = this.$outerContainer.outerHeight();
      var newWidth  = imageWidth + this.containerPadding.left + this.containerPadding.right + this.imageBorderWidth.left + this.imageBorderWidth.right;
      var newHeight = imageHeight + this.containerPadding.top + this.containerPadding.bottom + this.imageBorderWidth.top + this.imageBorderWidth.bottom;
  
      function postResize() {
        self.$lightbox.find('.lb-dataContainer').width(newWidth);
        self.$lightbox.find('.lb-prevLink').height(newHeight);
        self.$lightbox.find('.lb-nextLink').height(newHeight);
        self.showImage();
      }
  
      if (oldWidth !== newWidth || oldHeight !== newHeight) {
        this.$outerContainer.animate({
          width: newWidth,
          height: newHeight
        }, this.options.resizeDuration, 'swing', function() {
          postResize();
        });
      } else {
        postResize();
      }
    };
  
    // Display the image and its details and begin preload neighboring images.
    Lightbox.prototype.showImage = function() {
      this.$lightbox.find('.lb-loader').stop(true).hide();
      this.$lightbox.find('.lb-image').fadeIn(this.options.imageFadeDuration);
  
      this.updateNav();
      this.updateDetails();
      this.preloadNeighboringImages();
      this.enableKeyboardNav();
    };
  
    // Display previous and next navigation if appropriate.
    Lightbox.prototype.updateNav = function() {
      // Check to see if the browser supports touch events. If so, we take the conservative approach
      // and assume that mouse hover events are not supported and always show prev/next navigation
      // arrows in image sets.
      var alwaysShowNav = false;
      try {
        document.createEvent('TouchEvent');
        alwaysShowNav = (this.options.alwaysShowNavOnTouchDevices) ? true : false;
      } catch (e) {}
  
      this.$lightbox.find('.lb-nav').show();
  
      if (this.album.length > 1) {
        if (this.options.wrapAround) {
          if (alwaysShowNav) {
            this.$lightbox.find('.lb-prev, .lb-next').css('opacity', '1');
          }
          this.$lightbox.find('.lb-prev, .lb-next').show();
        } else {
          if (this.currentImageIndex > 0) {
            this.$lightbox.find('.lb-prev').show();
            if (alwaysShowNav) {
              this.$lightbox.find('.lb-prev').css('opacity', '1');
            }
          }
          if (this.currentImageIndex < this.album.length - 1) {
            this.$lightbox.find('.lb-next').show();
            if (alwaysShowNav) {
              this.$lightbox.find('.lb-next').css('opacity', '1');
            }
          }
        }
      }
    };
  
    // Display caption, image number, and closing button.
    Lightbox.prototype.updateDetails = function() {
      var self = this;
  
      // Enable anchor clicks in the injected caption html.
      // Thanks Nate Wright for the fix. @https://github.com/NateWr
      if (typeof this.album[this.currentImageIndex].title !== 'undefined' &&
        this.album[this.currentImageIndex].title !== '') {
        var $caption = this.$lightbox.find('.lb-caption');
        if (this.options.sanitizeTitle) {
          $caption.text(this.album[this.currentImageIndex].title);
        } else {
          $caption.html(this.album[this.currentImageIndex].title);
        }
        $caption.fadeIn('fast')
          .find('a').on('click', function(event) {
            if ($(this).attr('target') !== undefined) {
              window.open($(this).attr('href'), $(this).attr('target'));
            } else {
              location.href = $(this).attr('href');
            }
          });
      }
  
      if (this.album.length > 1 && this.options.showImageNumberLabel) {
        var labelText = this.imageCountLabel(this.currentImageIndex + 1, this.album.length);
        this.$lightbox.find('.lb-number').text(labelText).fadeIn('fast');
      } else {
        this.$lightbox.find('.lb-number').hide();
      }
  
      this.$outerContainer.removeClass('animating');
  
      this.$lightbox.find('.lb-dataContainer').fadeIn(this.options.resizeDuration, function() {
        return self.sizeOverlay();
      });
    };
  
    // Preload previous and next images in set.
    Lightbox.prototype.preloadNeighboringImages = function() {
      if (this.album.length > this.currentImageIndex + 1) {
        var preloadNext = new Image();
        preloadNext.src = this.album[this.currentImageIndex + 1].link;
      }
      if (this.currentImageIndex > 0) {
        var preloadPrev = new Image();
        preloadPrev.src = this.album[this.currentImageIndex - 1].link;
      }
    };
  
    Lightbox.prototype.enableKeyboardNav = function() {
      $(document).on('keyup.keyboard', $.proxy(this.keyboardAction, this));
    };
  
    Lightbox.prototype.disableKeyboardNav = function() {
      $(document).off('.keyboard');
    };
  
    Lightbox.prototype.keyboardAction = function(event) {
      var KEYCODE_ESC        = 27;
      var KEYCODE_LEFTARROW  = 37;
      var KEYCODE_RIGHTARROW = 39;
  
      var keycode = event.keyCode;
      var key     = String.fromCharCode(keycode).toLowerCase();
      if (keycode === KEYCODE_ESC || key.match(/x|o|c/)) {
        this.end();
      } else if (key === 'p' || keycode === KEYCODE_LEFTARROW) {
        if (this.currentImageIndex !== 0) {
          this.changeImage(this.currentImageIndex - 1);
        } else if (this.options.wrapAround && this.album.length > 1) {
          this.changeImage(this.album.length - 1);
        }
      } else if (key === 'n' || keycode === KEYCODE_RIGHTARROW) {
        if (this.currentImageIndex !== this.album.length - 1) {
          this.changeImage(this.currentImageIndex + 1);
        } else if (this.options.wrapAround && this.album.length > 1) {
          this.changeImage(0);
        }
      }
    };
  
    // Closing time. :-(
    Lightbox.prototype.end = function() {
      this.disableKeyboardNav();
      $(window).off('resize', this.sizeOverlay);
      this.$lightbox.fadeOut(this.options.fadeDuration);
      this.$overlay.fadeOut(this.options.fadeDuration);
      $('select, object, embed').css({
        visibility: 'visible'
      });
      if (this.options.disableScrolling) {
        $('html').removeClass('lb-disable-scrolling');
      }
    };
  
    return new Lightbox();
  }));
  ;
  /* ========================================================================= */
  /* VIDEO POPUP FUNCTION */
  /* ========================================================================= */
  function videoPopup() {
      var play = $('.play'),
          link = $(play).attr('src');
      $(play).magnificPopup({
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,
          fixedContentPos: true,
          iframe: {
              patterns: {
                  youtube: {
                      src: link
                  }
              }
          }
      });
   }
  /*! Magnific Popup - v1.1.0 - 2016-02-20
  * http://dimsemenov.com/plugins/magnific-popup/
  * Copyright (c) 2016 Dmitry Semenov; */
  !function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function(a){var b,c,d,e,f,g,h="Close",i="BeforeClose",j="AfterClose",k="BeforeAppend",l="MarkupParse",m="Open",n="Change",o="mfp",p="."+o,q="mfp-ready",r="mfp-removing",s="mfp-prevent-close",t=function(){},u=!!window.jQuery,v=a(window),w=function(a,c){b.ev.on(o+a+p,c)},x=function(b,c,d,e){var f=document.createElement("div");return f.className="mfp-"+b,d&&(f.innerHTML=d),e?c&&c.appendChild(f):(f=a(f),c&&f.appendTo(c)),f},y=function(c,d){b.ev.triggerHandler(o+c,d),b.st.callbacks&&(c=c.charAt(0).toLowerCase()+c.slice(1),b.st.callbacks[c]&&b.st.callbacks[c].apply(b,a.isArray(d)?d:[d]))},z=function(c){return c===g&&b.currTemplate.closeBtn||(b.currTemplate.closeBtn=a(b.st.closeMarkup.replace("%title%",b.st.tClose)),g=c),b.currTemplate.closeBtn},A=function(){a.magnificPopup.instance||(b=new t,b.init(),a.magnificPopup.instance=b)},B=function(){var a=document.createElement("p").style,b=["ms","O","Moz","Webkit"];if(void 0!==a.transition)return!0;for(;b.length;)if(b.pop()+"Transition"in a)return!0;return!1};t.prototype={constructor:t,init:function(){var c=navigator.appVersion;b.isLowIE=b.isIE8=document.all&&!document.addEventListener,b.isAndroid=/android/gi.test(c),b.isIOS=/iphone|ipad|ipod/gi.test(c),b.supportsTransition=B(),b.probablyMobile=b.isAndroid||b.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),d=a(document),b.popupsCache={}},open:function(c){var e;if(c.isObj===!1){b.items=c.items.toArray(),b.index=0;var g,h=c.items;for(e=0;e<h.length;e++)if(g=h[e],g.parsed&&(g=g.el[0]),g===c.el[0]){b.index=e;break}}else b.items=a.isArray(c.items)?c.items:[c.items],b.index=c.index||0;if(b.isOpen)return void b.updateItemHTML();b.types=[],f="",c.mainEl&&c.mainEl.length?b.ev=c.mainEl.eq(0):b.ev=d,c.key?(b.popupsCache[c.key]||(b.popupsCache[c.key]={}),b.currTemplate=b.popupsCache[c.key]):b.currTemplate={},b.st=a.extend(!0,{},a.magnificPopup.defaults,c),b.fixedContentPos="auto"===b.st.fixedContentPos?!b.probablyMobile:b.st.fixedContentPos,b.st.modal&&(b.st.closeOnContentClick=!1,b.st.closeOnBgClick=!1,b.st.showCloseBtn=!1,b.st.enableEscapeKey=!1),b.bgOverlay||(b.bgOverlay=x("bg").on("click"+p,function(){b.close()}),b.wrap=x("wrap").attr("tabindex",-1).on("click"+p,function(a){b._checkIfClose(a.target)&&b.close()}),b.container=x("container",b.wrap)),b.contentContainer=x("content"),b.st.preloader&&(b.preloader=x("preloader",b.container,b.st.tLoading));var i=a.magnificPopup.modules;for(e=0;e<i.length;e++){var j=i[e];j=j.charAt(0).toUpperCase()+j.slice(1),b["init"+j].call(b)}y("BeforeOpen"),b.st.showCloseBtn&&(b.st.closeBtnInside?(w(l,function(a,b,c,d){c.close_replaceWith=z(d.type)}),f+=" mfp-close-btn-in"):b.wrap.append(z())),b.st.alignTop&&(f+=" mfp-align-top"),b.fixedContentPos?b.wrap.css({overflow:b.st.overflowY,overflowX:"hidden",overflowY:b.st.overflowY}):b.wrap.css({top:v.scrollTop(),position:"absolute"}),(b.st.fixedBgPos===!1||"auto"===b.st.fixedBgPos&&!b.fixedContentPos)&&b.bgOverlay.css({height:d.height(),position:"absolute"}),b.st.enableEscapeKey&&d.on("keyup"+p,function(a){27===a.keyCode&&b.close()}),v.on("resize"+p,function(){b.updateSize()}),b.st.closeOnContentClick||(f+=" mfp-auto-cursor"),f&&b.wrap.addClass(f);var k=b.wH=v.height(),n={};if(b.fixedContentPos&&b._hasScrollBar(k)){var o=b._getScrollbarSize();o&&(n.marginRight=o)}b.fixedContentPos&&(b.isIE7?a("body, html").css("overflow","hidden"):n.overflow="hidden");var r=b.st.mainClass;return b.isIE7&&(r+=" mfp-ie7"),r&&b._addClassToMFP(r),b.updateItemHTML(),y("BuildControls"),a("html").css(n),b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo||a(document.body)),b._lastFocusedEl=document.activeElement,setTimeout(function(){b.content?(b._addClassToMFP(q),b._setFocus()):b.bgOverlay.addClass(q),d.on("focusin"+p,b._onFocusIn)},16),b.isOpen=!0,b.updateSize(k),y(m),c},close:function(){b.isOpen&&(y(i),b.isOpen=!1,b.st.removalDelay&&!b.isLowIE&&b.supportsTransition?(b._addClassToMFP(r),setTimeout(function(){b._close()},b.st.removalDelay)):b._close())},_close:function(){y(h);var c=r+" "+q+" ";if(b.bgOverlay.detach(),b.wrap.detach(),b.container.empty(),b.st.mainClass&&(c+=b.st.mainClass+" "),b._removeClassFromMFP(c),b.fixedContentPos){var e={marginRight:""};b.isIE7?a("body, html").css("overflow",""):e.overflow="",a("html").css(e)}d.off("keyup"+p+" focusin"+p),b.ev.off(p),b.wrap.attr("class","mfp-wrap").removeAttr("style"),b.bgOverlay.attr("class","mfp-bg"),b.container.attr("class","mfp-container"),!b.st.showCloseBtn||b.st.closeBtnInside&&b.currTemplate[b.currItem.type]!==!0||b.currTemplate.closeBtn&&b.currTemplate.closeBtn.detach(),b.st.autoFocusLast&&b._lastFocusedEl&&a(b._lastFocusedEl).focus(),b.currItem=null,b.content=null,b.currTemplate=null,b.prevHeight=0,y(j)},updateSize:function(a){if(b.isIOS){var c=document.documentElement.clientWidth/window.innerWidth,d=window.innerHeight*c;b.wrap.css("height",d),b.wH=d}else b.wH=a||v.height();b.fixedContentPos||b.wrap.css("height",b.wH),y("Resize")},updateItemHTML:function(){var c=b.items[b.index];b.contentContainer.detach(),b.content&&b.content.detach(),c.parsed||(c=b.parseEl(b.index));var d=c.type;if(y("BeforeChange",[b.currItem?b.currItem.type:"",d]),b.currItem=c,!b.currTemplate[d]){var f=b.st[d]?b.st[d].markup:!1;y("FirstMarkupParse",f),f?b.currTemplate[d]=a(f):b.currTemplate[d]=!0}e&&e!==c.type&&b.container.removeClass("mfp-"+e+"-holder");var g=b["get"+d.charAt(0).toUpperCase()+d.slice(1)](c,b.currTemplate[d]);b.appendContent(g,d),c.preloaded=!0,y(n,c),e=c.type,b.container.prepend(b.contentContainer),y("AfterChange")},appendContent:function(a,c){b.content=a,a?b.st.showCloseBtn&&b.st.closeBtnInside&&b.currTemplate[c]===!0?b.content.find(".mfp-close").length||b.content.append(z()):b.content=a:b.content="",y(k),b.container.addClass("mfp-"+c+"-holder"),b.contentContainer.append(b.content)},parseEl:function(c){var d,e=b.items[c];if(e.tagName?e={el:a(e)}:(d=e.type,e={data:e,src:e.src}),e.el){for(var f=b.types,g=0;g<f.length;g++)if(e.el.hasClass("mfp-"+f[g])){d=f[g];break}e.src=e.el.attr("data-mfp-src"),e.src||(e.src=e.el.attr("href"))}return e.type=d||b.st.type||"inline",e.index=c,e.parsed=!0,b.items[c]=e,y("ElementParse",e),b.items[c]},addGroup:function(a,c){var d=function(d){d.mfpEl=this,b._openClick(d,a,c)};c||(c={});var e="click.magnificPopup";c.mainEl=a,c.items?(c.isObj=!0,a.off(e).on(e,d)):(c.isObj=!1,c.delegate?a.off(e).on(e,c.delegate,d):(c.items=a,a.off(e).on(e,d)))},_openClick:function(c,d,e){var f=void 0!==e.midClick?e.midClick:a.magnificPopup.defaults.midClick;if(f||!(2===c.which||c.ctrlKey||c.metaKey||c.altKey||c.shiftKey)){var g=void 0!==e.disableOn?e.disableOn:a.magnificPopup.defaults.disableOn;if(g)if(a.isFunction(g)){if(!g.call(b))return!0}else if(v.width()<g)return!0;c.type&&(c.preventDefault(),b.isOpen&&c.stopPropagation()),e.el=a(c.mfpEl),e.delegate&&(e.items=d.find(e.delegate)),b.open(e)}},updateStatus:function(a,d){if(b.preloader){c!==a&&b.container.removeClass("mfp-s-"+c),d||"loading"!==a||(d=b.st.tLoading);var e={status:a,text:d};y("UpdateStatus",e),a=e.status,d=e.text,b.preloader.html(d),b.preloader.find("a").on("click",function(a){a.stopImmediatePropagation()}),b.container.addClass("mfp-s-"+a),c=a}},_checkIfClose:function(c){if(!a(c).hasClass(s)){var d=b.st.closeOnContentClick,e=b.st.closeOnBgClick;if(d&&e)return!0;if(!b.content||a(c).hasClass("mfp-close")||b.preloader&&c===b.preloader[0])return!0;if(c===b.content[0]||a.contains(b.content[0],c)){if(d)return!0}else if(e&&a.contains(document,c))return!0;return!1}},_addClassToMFP:function(a){b.bgOverlay.addClass(a),b.wrap.addClass(a)},_removeClassFromMFP:function(a){this.bgOverlay.removeClass(a),b.wrap.removeClass(a)},_hasScrollBar:function(a){return(b.isIE7?d.height():document.body.scrollHeight)>(a||v.height())},_setFocus:function(){(b.st.focus?b.content.find(b.st.focus).eq(0):b.wrap).focus()},_onFocusIn:function(c){return c.target===b.wrap[0]||a.contains(b.wrap[0],c.target)?void 0:(b._setFocus(),!1)},_parseMarkup:function(b,c,d){var e;d.data&&(c=a.extend(d.data,c)),y(l,[b,c,d]),a.each(c,function(c,d){if(void 0===d||d===!1)return!0;if(e=c.split("_"),e.length>1){var f=b.find(p+"-"+e[0]);if(f.length>0){var g=e[1];"replaceWith"===g?f[0]!==d[0]&&f.replaceWith(d):"img"===g?f.is("img")?f.attr("src",d):f.replaceWith(a("<img>").attr("src",d).attr("class",f.attr("class"))):f.attr(e[1],d)}}else b.find(p+"-"+c).html(d)})},_getScrollbarSize:function(){if(void 0===b.scrollbarSize){var a=document.createElement("div");a.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(a),b.scrollbarSize=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return b.scrollbarSize}},a.magnificPopup={instance:null,proto:t.prototype,modules:[],open:function(b,c){return A(),b=b?a.extend(!0,{},b):{},b.isObj=!0,b.index=c||0,this.instance.open(b)},close:function(){return a.magnificPopup.instance&&a.magnificPopup.instance.close()},registerModule:function(b,c){c.options&&(a.magnificPopup.defaults[b]=c.options),a.extend(this.proto,c.proto),this.modules.push(b)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},a.fn.magnificPopup=function(c){A();var d=a(this);if("string"==typeof c)if("open"===c){var e,f=u?d.data("magnificPopup"):d[0].magnificPopup,g=parseInt(arguments[1],10)||0;f.items?e=f.items[g]:(e=d,f.delegate&&(e=e.find(f.delegate)),e=e.eq(g)),b._openClick({mfpEl:e},d,f)}else b.isOpen&&b[c].apply(b,Array.prototype.slice.call(arguments,1));else c=a.extend(!0,{},c),u?d.data("magnificPopup",c):d[0].magnificPopup=c,b.addGroup(d,c);return d};var C,D,E,F="inline",G=function(){E&&(D.after(E.addClass(C)).detach(),E=null)};a.magnificPopup.registerModule(F,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){b.types.push(F),w(h+"."+F,function(){G()})},getInline:function(c,d){if(G(),c.src){var e=b.st.inline,f=a(c.src);if(f.length){var g=f[0].parentNode;g&&g.tagName&&(D||(C=e.hiddenClass,D=x(C),C="mfp-"+C),E=f.after(D).detach().removeClass(C)),b.updateStatus("ready")}else b.updateStatus("error",e.tNotFound),f=a("<div>");return c.inlineElement=f,f}return b.updateStatus("ready"),b._parseMarkup(d,{},c),d}}});var H,I="ajax",J=function(){H&&a(document.body).removeClass(H)},K=function(){J(),b.req&&b.req.abort()};a.magnificPopup.registerModule(I,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){b.types.push(I),H=b.st.ajax.cursor,w(h+"."+I,K),w("BeforeChange."+I,K)},getAjax:function(c){H&&a(document.body).addClass(H),b.updateStatus("loading");var d=a.extend({url:c.src,success:function(d,e,f){var g={data:d,xhr:f};y("ParseAjax",g),b.appendContent(a(g.data),I),c.finished=!0,J(),b._setFocus(),setTimeout(function(){b.wrap.addClass(q)},16),b.updateStatus("ready"),y("AjaxContentAdded")},error:function(){J(),c.finished=c.loadError=!0,b.updateStatus("error",b.st.ajax.tError.replace("%url%",c.src))}},b.st.ajax.settings);return b.req=a.ajax(d),""}}});var L,M=function(c){if(c.data&&void 0!==c.data.title)return c.data.title;var d=b.st.image.titleSrc;if(d){if(a.isFunction(d))return d.call(b,c);if(c.el)return c.el.attr(d)||""}return""};a.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var c=b.st.image,d=".image";b.types.push("image"),w(m+d,function(){"image"===b.currItem.type&&c.cursor&&a(document.body).addClass(c.cursor)}),w(h+d,function(){c.cursor&&a(document.body).removeClass(c.cursor),v.off("resize"+p)}),w("Resize"+d,b.resizeImage),b.isLowIE&&w("AfterChange",b.resizeImage)},resizeImage:function(){var a=b.currItem;if(a&&a.img&&b.st.image.verticalFit){var c=0;b.isLowIE&&(c=parseInt(a.img.css("padding-top"),10)+parseInt(a.img.css("padding-bottom"),10)),a.img.css("max-height",b.wH-c)}},_onImageHasSize:function(a){a.img&&(a.hasSize=!0,L&&clearInterval(L),a.isCheckingImgSize=!1,y("ImageHasSize",a),a.imgHidden&&(b.content&&b.content.removeClass("mfp-loading"),a.imgHidden=!1))},findImageSize:function(a){var c=0,d=a.img[0],e=function(f){L&&clearInterval(L),L=setInterval(function(){return d.naturalWidth>0?void b._onImageHasSize(a):(c>200&&clearInterval(L),c++,void(3===c?e(10):40===c?e(50):100===c&&e(500)))},f)};e(1)},getImage:function(c,d){var e=0,f=function(){c&&(c.img[0].complete?(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("ready")),c.hasSize=!0,c.loaded=!0,y("ImageLoadComplete")):(e++,200>e?setTimeout(f,100):g()))},g=function(){c&&(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("error",h.tError.replace("%url%",c.src))),c.hasSize=!0,c.loaded=!0,c.loadError=!0)},h=b.st.image,i=d.find(".mfp-img");if(i.length){var j=document.createElement("img");j.className="mfp-img",c.el&&c.el.find("img").length&&(j.alt=c.el.find("img").attr("alt")),c.img=a(j).on("load.mfploader",f).on("error.mfploader",g),j.src=c.src,i.is("img")&&(c.img=c.img.clone()),j=c.img[0],j.naturalWidth>0?c.hasSize=!0:j.width||(c.hasSize=!1)}return b._parseMarkup(d,{title:M(c),img_replaceWith:c.img},c),b.resizeImage(),c.hasSize?(L&&clearInterval(L),c.loadError?(d.addClass("mfp-loading"),b.updateStatus("error",h.tError.replace("%url%",c.src))):(d.removeClass("mfp-loading"),b.updateStatus("ready")),d):(b.updateStatus("loading"),c.loading=!0,c.hasSize||(c.imgHidden=!0,d.addClass("mfp-loading"),b.findImageSize(c)),d)}}});var N,O=function(){return void 0===N&&(N=void 0!==document.createElement("p").style.MozTransform),N};a.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(a){return a.is("img")?a:a.find("img")}},proto:{initZoom:function(){var a,c=b.st.zoom,d=".zoom";if(c.enabled&&b.supportsTransition){var e,f,g=c.duration,j=function(a){var b=a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),d="all "+c.duration/1e3+"s "+c.easing,e={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},f="transition";return e["-webkit-"+f]=e["-moz-"+f]=e["-o-"+f]=e[f]=d,b.css(e),b},k=function(){b.content.css("visibility","visible")};w("BuildControls"+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.content.css("visibility","hidden"),a=b._getItemToZoom(),!a)return void k();f=j(a),f.css(b._getOffset()),b.wrap.append(f),e=setTimeout(function(){f.css(b._getOffset(!0)),e=setTimeout(function(){k(),setTimeout(function(){f.remove(),a=f=null,y("ZoomAnimationEnded")},16)},g)},16)}}),w(i+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.st.removalDelay=g,!a){if(a=b._getItemToZoom(),!a)return;f=j(a)}f.css(b._getOffset(!0)),b.wrap.append(f),b.content.css("visibility","hidden"),setTimeout(function(){f.css(b._getOffset())},16)}}),w(h+d,function(){b._allowZoom()&&(k(),f&&f.remove(),a=null)})}},_allowZoom:function(){return"image"===b.currItem.type},_getItemToZoom:function(){return b.currItem.hasSize?b.currItem.img:!1},_getOffset:function(c){var d;d=c?b.currItem.img:b.st.zoom.opener(b.currItem.el||b.currItem);var e=d.offset(),f=parseInt(d.css("padding-top"),10),g=parseInt(d.css("padding-bottom"),10);e.top-=a(window).scrollTop()-f;var h={width:d.width(),height:(u?d.innerHeight():d[0].offsetHeight)-g-f};return O()?h["-moz-transform"]=h.transform="translate("+e.left+"px,"+e.top+"px)":(h.left=e.left,h.top=e.top),h}}});var P="iframe",Q="//about:blank",R=function(a){if(b.currTemplate[P]){var c=b.currTemplate[P].find("iframe");c.length&&(a||(c[0].src=Q),b.isIE8&&c.css("display",a?"block":"none"))}};a.magnificPopup.registerModule(P,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){b.types.push(P),w("BeforeChange",function(a,b,c){b!==c&&(b===P?R():c===P&&R(!0))}),w(h+"."+P,function(){R()})},getIframe:function(c,d){var e=c.src,f=b.st.iframe;a.each(f.patterns,function(){return e.indexOf(this.index)>-1?(this.id&&(e="string"==typeof this.id?e.substr(e.lastIndexOf(this.id)+this.id.length,e.length):this.id.call(this,e)),e=this.src.replace("%id%",e),!1):void 0});var g={};return f.srcAction&&(g[f.srcAction]=e),b._parseMarkup(d,g,c),b.updateStatus("ready"),d}}});var S=function(a){var c=b.items.length;return a>c-1?a-c:0>a?c+a:a},T=function(a,b,c){return a.replace(/%curr%/gi,b+1).replace(/%total%/gi,c)};a.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var c=b.st.gallery,e=".mfp-gallery";return b.direction=!0,c&&c.enabled?(f+=" mfp-gallery",w(m+e,function(){c.navigateByImgClick&&b.wrap.on("click"+e,".mfp-img",function(){return b.items.length>1?(b.next(),!1):void 0}),d.on("keydown"+e,function(a){37===a.keyCode?b.prev():39===a.keyCode&&b.next()})}),w("UpdateStatus"+e,function(a,c){c.text&&(c.text=T(c.text,b.currItem.index,b.items.length))}),w(l+e,function(a,d,e,f){var g=b.items.length;e.counter=g>1?T(c.tCounter,f.index,g):""}),w("BuildControls"+e,function(){if(b.items.length>1&&c.arrows&&!b.arrowLeft){var d=c.arrowMarkup,e=b.arrowLeft=a(d.replace(/%title%/gi,c.tPrev).replace(/%dir%/gi,"left")).addClass(s),f=b.arrowRight=a(d.replace(/%title%/gi,c.tNext).replace(/%dir%/gi,"right")).addClass(s);e.click(function(){b.prev()}),f.click(function(){b.next()}),b.container.append(e.add(f))}}),w(n+e,function(){b._preloadTimeout&&clearTimeout(b._preloadTimeout),b._preloadTimeout=setTimeout(function(){b.preloadNearbyImages(),b._preloadTimeout=null},16)}),void w(h+e,function(){d.off(e),b.wrap.off("click"+e),b.arrowRight=b.arrowLeft=null})):!1},next:function(){b.direction=!0,b.index=S(b.index+1),b.updateItemHTML()},prev:function(){b.direction=!1,b.index=S(b.index-1),b.updateItemHTML()},goTo:function(a){b.direction=a>=b.index,b.index=a,b.updateItemHTML()},preloadNearbyImages:function(){var a,c=b.st.gallery.preload,d=Math.min(c[0],b.items.length),e=Math.min(c[1],b.items.length);for(a=1;a<=(b.direction?e:d);a++)b._preloadItem(b.index+a);for(a=1;a<=(b.direction?d:e);a++)b._preloadItem(b.index-a)},_preloadItem:function(c){if(c=S(c),!b.items[c].preloaded){var d=b.items[c];d.parsed||(d=b.parseEl(c)),y("LazyLoad",d),"image"===d.type&&(d.img=a('<img class="mfp-img" />').on("load.mfploader",function(){d.hasSize=!0}).on("error.mfploader",function(){d.hasSize=!0,d.loadError=!0,y("LazyLoadError",d)}).attr("src",d.src)),d.preloaded=!0}}}});var U="retina";a.magnificPopup.registerModule(U,{options:{replaceSrc:function(a){return a.src.replace(/\.\w+$/,function(a){return"@2x"+a})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var a=b.st.retina,c=a.ratio;c=isNaN(c)?c():c,c>1&&(w("ImageHasSize."+U,function(a,b){b.img.css({"max-width":b.img[0].naturalWidth/c,width:"100%"})}),w("ElementParse."+U,function(b,d){d.src=a.replaceSrc(d,c)}))}}}}),A()});
  ;
  (function ($) {
  
    "use strict";
  
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      var box = $('.header-text').height();
      var header = $('header').height();
  
      if (scroll >= box - header) {
        $("header").addClass("background-header");
      } else {
        $("header").removeClass("background-header");
      }
    });
  
    $('.filters ul li').click(function(){
      $('.filters ul li').removeClass('active');
      $(this).addClass('active');
  
      var data = $(this).attr('data-filter');
      $grid.isotope({
        filter: data
      })
    });
  
    var $grid = $(".grid").isotope({
      itemSelector: ".all",
      percentPosition: true,
      masonry: {
        columnWidth: ".all"
      }
    })
  
  
    const Accordion = {
      settings: {
        // Expand the first item by default
        first_expanded: false,
        // Allow items to be toggled independently
        toggle: false
      },
  
      openAccordion: function(toggle, content) {
        if (content.children.length) {
          toggle.classList.add("is-open");
          let final_height = Math.floor(content.children[0].offsetHeight);
          content.style.height = final_height + "px";
        }
      },
  
      closeAccordion: function(toggle, content) {
        toggle.classList.remove("is-open");
        content.style.height = 0;
      },
  
      init: function(el) {
        const _this = this;
  
        // Override default settings with classes
        let is_first_expanded = _this.settings.first_expanded;
        if (el.classList.contains("is-first-expanded")) is_first_expanded = true;
        let is_toggle = _this.settings.toggle;
        if (el.classList.contains("is-toggle")) is_toggle = true;
  
        // Loop through the accordion's sections and set up the click behavior
        const sections = el.getElementsByClassName("accordion");
        const all_toggles = el.getElementsByClassName("accordion-head");
        const all_contents = el.getElementsByClassName("accordion-body");
        for (let i = 0; i < sections.length; i++) {
          const section = sections[i];
          const toggle = all_toggles[i];
          const content = all_contents[i];
  
          // Click behavior
          toggle.addEventListener("click", function(e) {
            if (!is_toggle) {
              // Hide all content areas first
              for (let a = 0; a < all_contents.length; a++) {
                _this.closeAccordion(all_toggles[a], all_contents[a]);
              }
  
              // Expand the clicked item
              _this.openAccordion(toggle, content);
            } else {
              // Toggle the clicked item
              if (toggle.classList.contains("is-open")) {
                _this.closeAccordion(toggle, content);
              } else {
                _this.openAccordion(toggle, content);
              }
            }
          });
  
          // Expand the first item
          if (i === 0 && is_first_expanded) {
            _this.openAccordion(toggle, content);
          }
        }
      }
    };
  
    (function() {
      // Initiate all instances on the page
      const accordions = document.getElementsByClassName("accordions");
      for (let i = 0; i < accordions.length; i++) {
        Accordion.init(accordions[i]);
      }
    })();
  
  
    // $(document).on("click", ".naccs .menu div", function() {
    //   var numberIndex = $(this).index();
    //
    //   if (!$(this).is("active")) {
    //     $(".naccs .menu div").removeClass("active");
    //     $(".naccs ul li").removeClass("active");
    //
    //     $(this).addClass("active");
    //     $(".naccs ul").find("li:eq(" + numberIndex + ")").addClass("active");
    //
    //     var listItemHeight = $(".naccs ul")
    //       .find("li:eq(" + numberIndex + ")")
    //       .innerHeight();
    //     $(".naccs ul").height(listItemHeight + "px");
    //   }
    // });
  
  
    $('.owl-service-item').owlCarousel({
      items:4,
      loop:true,
      dots: true,
      nav: false,
      autoplay: true,
      margin:15,
      responsive:{
        0:{
          items:1
        },
        600:{
          items:2
        },
        1000:{
          items:4
        }
      }
    })
  
    $('.owl-testimonials').owlCarousel({
      items:3,
      loop:true,
      dots: true,
      nav: false,
      autoplay: true,
      margin:15,
      responsive:{
        0:{
          items:1
        },
        600:{
          items:2
        },
        1000:{
          items:3
        }
      }
    })
  
  
    // Menu Dropdown Toggle
    if($('.menu-trigger').length){
      $(".menu-trigger").on('click', function() {
        $(this).toggleClass('active');
        $('.header-area .nav').slideToggle(200);
      });
    }
  
  
    // Menu elevator animation
    // $('.scroll-to-section a[href*=\\#]:not([href=\\#])').on('click', function() {
    //   if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    //     var target = $(this.hash);
    //     target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    //     if (target.length) {
    //       var width = $(window).width();
    //       if(width < 991) {
    //         $('.menu-trigger').removeClass('active');
    //         $('.header-area .nav').slideUp(200);
    //       }
    //       $('html,body').animate({
    //         scrollTop: (target.offset().top) - 80
    //       }, 700);
    //       return false;
    //     }
    //   }
    // });
  
    // $(document).ready(function () {
    //   $(document).on("scroll", onScroll);
    //
    //   //smoothscroll
    //   $('.scroll-to-section a[href^="#"]').on('click', function (e) {
    //     e.preventDefault();
    //     $(document).off("scroll");
    //
    //     $('.scroll-to-section a').each(function () {
    //       $(this).removeClass('active');
    //     })
    //     $(this).addClass('active');
    //
    //     var target = this.hash,
    //       menu = target;
    //     var target = $(this.hash);
    //     $('html, body').stop().animate({
    //       scrollTop: (target.offset().top) - 79
    //     }, 500, 'swing', function () {
    //       window.location.hash = target;
    //       $(document).on("scroll", onScroll);
    //     });
    //   });
    // });
    //
    // function onScroll(event){
    //   var scrollPos = $(document).scrollTop();
    //   $('.nav a').each(function () {
    //     var currLink = $(this);
    //     var refElement = $(currLink.attr("href"));
    //     if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
    //       $('.nav ul li a').removeClass("active");
    //       currLink.addClass("active");
    //     }
    //     else{
    //       currLink.removeClass("active");
    //     }
    //   });
    // }
  
  
    // Page loading animation
    $(window).on('load', function() {
      if($('.cover').length){
        $('.cover').parallax({
          imageSrc: $('.cover').data('image'),
          zIndex: '1'
        });
      }
  
      $("#preloader").animate({
        'opacity': '0'
      }, 600, function(){
        setTimeout(function(){
          $("#preloader").css("visibility", "hidden").fadeOut();
        }, 300);
      });
    });
  
  
  
    const dropdownOpener = $('.main-nav ul.nav .has-sub > a');
  
    // Open/Close Submenus
    if (dropdownOpener.length) {
      dropdownOpener.each(function () {
        var _this = $(this);
  
        _this.on('tap click', function (e) {
          var thisItemParent = _this.parent('li'),
            thisItemParentSiblingsWithDrop = thisItemParent.siblings('.has-sub');
  
          if (thisItemParent.hasClass('has-sub')) {
            var submenu = thisItemParent.find('> ul.sub-menu');
  
            if (submenu.is(':visible')) {
              // submenu.slideUp(450, 'easeInOutQuad');
              thisItemParent.removeClass('is-open-sub');
            } else {
              thisItemParent.addClass('is-open-sub');
  
              if (thisItemParentSiblingsWithDrop.length === 0) {
                thisItemParent.find('.sub-menu').slideUp(400, 'easeInOutQuad', function () {
                  submenu.slideDown(250, 'easeInOutQuad');
                });
              } else {
                thisItemParent.siblings().removeClass('is-open-sub').find('.sub-menu').slideUp(250, 'easeInOutQuad', function () {
                  submenu.slideDown(250, 'easeInOutQuad');
                });
              }
            }
          }
  
          e.preventDefault();
        });
      });
    }
  
  
    // function visible(partial) {
    //   var $t = partial,
    //     $w = jQuery(window),
    //     viewTop = $w.scrollTop(),
    //     viewBottom = viewTop + $w.height(),
    //     _top = $t.offset().top,
    //     _bottom = _top + $t.height(),
    //     compareTop = partial === true ? _bottom : _top,
    //     compareBottom = partial === true ? _top : _bottom;
    //
    //   return ((compareBottom <= viewBottom) && (compareTop >= viewTop) && $t.is(':visible'));
    //
    // }
  
    // $(window).scroll(function() {
    //
    //   if (visible($('.count-digit'))) {
    //     if ($('.count-digit').hasClass('counter-loaded')) return;
    //     $('.count-digit').addClass('counter-loaded');
    //
    //     $('.count-digit').each(function() {
    //       var $this = $(this);
    //       jQuery({
    //         Counter: 0
    //       }).animate({
    //         Counter: $this.text()
    //       }, {
    //         duration: 3000,
    //         easing: 'swing',
    //         step: function() {
    //           $this.text(Math.ceil(this.Counter));
    //         }
    //       });
    //     });
    //   }
    // })
  
  
  })(window.jQuery);
  ;
  jQuery(document).ready(function ($) {
  
      "use strict";
  
      jQuery("#owl-img-article").owlCarousel({
          autoPlay: 3000,
          loop: false,
          autoplay: true,
          navText: [
              "<i class='fa fa-angle-left' aria-hidden='true'></i>",
              "<i class='fa fa-angle-right' aria-hidden='true'></i>",
          ],
          nav: true,
          dots: false,
          responsive: {
              0: {
                  items: 1,
              },
              992: {
                  items: 4,
              },
              1200: {
                  items: 4
              }
          },
  
      });
  
      var showSection = function showSection(section, isAnimate) {
          var
              direction = section.replace(/#/, ''),
              reqSection = $('.section').filter('[data-section="' + direction + '"]'),
              reqSectionPos = reqSection.offset().top - 0;
  
          if (isAnimate) {
              $('body, html').animate({
                      scrollTop: reqSectionPos
                  },
                  800);
          } else {
              $('body, html').scrollTop(reqSectionPos);
          }
  
      };
  
      var checkSection = function checkSection() {
          $('.section').each(function () {
              var
                  $this = $(this),
                  topEdge = $this.offset().top - 80,
                  bottomEdge = topEdge + $this.height(),
                  wScroll = $(window).scrollTop();
              if (topEdge < wScroll && bottomEdge > wScroll) {
                  var
                      currentId = $this.data('section'),
                      reqLink = $('a').filter('[href*=\\#' + currentId + ']');
                  reqLink.closest('li').addClass('active').siblings().removeClass('active');
              }
          });
      };
  
      $('.main-menu, .responsive-menu, .scroll-to-section').on('click', 'a', function (e) {
          e.preventDefault();
          showSection($(this).attr('href'), true);
      });
  
      $(window).scroll(function () {
          checkSection();
      });
  });
  ;
  /**
  * DO NOT EDIT THIS FILE.
  * See the following change record for more information,
  * https://www.drupal.org/node/2815083
  * @preserve
  **/
  Drupal.debounce = function (func, wait, immediate) {
    var timeout;
    var result;
    return function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      var context = this;
      var later = function later() {
        timeout = null;
        if (!immediate) {
          result = func.apply(context, args);
        }
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) {
        result = func.apply(context, args);
      }
      return result;
    };
  };;
  /**
  * DO NOT EDIT THIS FILE.
  * See the following change record for more information,
  * https://www.drupal.org/node/2815083
  * @preserve
  **/
  (function ($, once) {
    var deprecatedMessageSuffix = "is deprecated in Drupal 9.3.0 and will be removed in Drupal 10.0.0. Use the core/once library instead. See https://www.drupal.org/node/3158256";
    var originalJQOnce = $.fn.once;
    var originalJQRemoveOnce = $.fn.removeOnce;
    $.fn.once = function jQueryOnce(id) {
      Drupal.deprecationError({
        message: "jQuery.once() ".concat(deprecatedMessageSuffix)
      });
      return originalJQOnce.apply(this, [id]);
    };
    $.fn.removeOnce = function jQueryRemoveOnce(id) {
      Drupal.deprecationError({
        message: "jQuery.removeOnce() ".concat(deprecatedMessageSuffix)
      });
      return originalJQRemoveOnce.apply(this, [id]);
    };
    var drupalOnce = once;
    function augmentedOnce(id, selector, context) {
      originalJQOnce.apply($(selector, context), [id]);
      return drupalOnce(id, selector, context);
    }
    function remove(id, selector, context) {
      originalJQRemoveOnce.apply($(selector, context), [id]);
      return drupalOnce.remove(id, selector, context);
    }
    window.once = Object.assign(augmentedOnce, drupalOnce, {
      remove: remove
    });
  })(jQuery, once);;
  /**
  * DO NOT EDIT THIS FILE.
  * See the following change record for more information,
  * https://www.drupal.org/node/2815083
  * @preserve
  **/
  (function ($, Drupal, debounce) {
    $.fn.drupalGetSummary = function () {
      var callback = this.data('summaryCallback');
      return this[0] && callback ? callback(this[0]).trim() : '';
    };
    $.fn.drupalSetSummary = function (callback) {
      var self = this;
      if (typeof callback !== 'function') {
        var val = callback;
        callback = function callback() {
          return val;
        };
      }
      return this.data('summaryCallback', callback).off('formUpdated.summary').on('formUpdated.summary', function () {
        self.trigger('summaryUpdated');
      }).trigger('summaryUpdated');
    };
    Drupal.behaviors.formSingleSubmit = {
      attach: function attach() {
        function onFormSubmit(e) {
          var $form = $(e.currentTarget);
          var formValues = $form.serialize();
          var previousValues = $form.attr('data-drupal-form-submit-last');
          if (previousValues === formValues) {
            e.preventDefault();
          } else {
            $form.attr('data-drupal-form-submit-last', formValues);
          }
        }
        $(once('form-single-submit', 'body')).on('submit.singleSubmit', 'form:not([method~="GET"])', onFormSubmit);
      }
    };
    function triggerFormUpdated(element) {
      $(element).trigger('formUpdated');
    }
    function fieldsList(form) {
      return [].map.call(form.querySelectorAll('[name][id]'), function (el) {
        return el.id;
      });
    }
    Drupal.behaviors.formUpdated = {
      attach: function attach(context) {
        var $context = $(context);
        var contextIsForm = $context.is('form');
        var $forms = $(once('form-updated', contextIsForm ? $context : $context.find('form')));
        var formFields;
        if ($forms.length) {
          $.makeArray($forms).forEach(function (form) {
            var events = 'change.formUpdated input.formUpdated ';
            var eventHandler = debounce(function (event) {
              triggerFormUpdated(event.target);
            }, 300);
            formFields = fieldsList(form).join(',');
            form.setAttribute('data-drupal-form-fields', formFields);
            $(form).on(events, eventHandler);
          });
        }
        if (contextIsForm) {
          formFields = fieldsList(context).join(',');
          var currentFields = $(context).attr('data-drupal-form-fields');
          if (formFields !== currentFields) {
            triggerFormUpdated(context);
          }
        }
      },
      detach: function detach(context, settings, trigger) {
        var $context = $(context);
        var contextIsForm = $context.is('form');
        if (trigger === 'unload') {
          once.remove('form-updated', contextIsForm ? $context : $context.find('form')).forEach(function (form) {
            form.removeAttribute('data-drupal-form-fields');
            $(form).off('.formUpdated');
          });
        }
      }
    };
    Drupal.behaviors.fillUserInfoFromBrowser = {
      attach: function attach(context, settings) {
        var userInfo = ['name', 'mail', 'homepage'];
        var $forms = $(once('user-info-from-browser', '[data-user-info-from-browser]'));
        if ($forms.length) {
          userInfo.forEach(function (info) {
            var $element = $forms.find("[name=".concat(info, "]"));
            var browserData = localStorage.getItem("Drupal.visitor.".concat(info));
            if (!$element.length) {
              return;
            }
            var emptyValue = $element[0].value === '';
            var defaultValue = $element.attr('data-drupal-default-value') === $element[0].value;
            if (browserData && (emptyValue || defaultValue)) {
              $element.each(function (index, item) {
                item.value = browserData;
              });
            }
          });
        }
        $forms.on('submit', function () {
          userInfo.forEach(function (info) {
            var $element = $forms.find("[name=".concat(info, "]"));
            if ($element.length) {
              localStorage.setItem("Drupal.visitor.".concat(info), $element[0].value);
            }
          });
        });
      }
    };
    var handleFragmentLinkClickOrHashChange = function handleFragmentLinkClickOrHashChange(e) {
      var url;
      if (e.type === 'click') {
        url = e.currentTarget.location ? e.currentTarget.location : e.currentTarget;
      } else {
        url = window.location;
      }
      var hash = url.hash.substr(1);
      if (hash) {
        var $target = $("#".concat(hash));
        $('body').trigger('formFragmentLinkClickOrHashChange', [$target]);
        setTimeout(function () {
          return $target.trigger('focus');
        }, 300);
      }
    };
    var debouncedHandleFragmentLinkClickOrHashChange = debounce(handleFragmentLinkClickOrHashChange, 300, true);
    $(window).on('hashchange.form-fragment', debouncedHandleFragmentLinkClickOrHashChange);
    $(document).on('click.form-fragment', 'a[href*="#"]', debouncedHandleFragmentLinkClickOrHashChange);
  })(jQuery, Drupal, Drupal.debounce);;
  /**
   * @file
   * Webform behaviors.
   */
  
  (function ($, Drupal) {
  
    'use strict';
  
    // Trigger Drupal's attaching of behaviors after the page is
    // completely loaded.
    // @see https://stackoverflow.com/questions/37838430/detect-if-page-is-load-from-back-button
    // @see https://stackoverflow.com/questions/20899274/how-to-refresh-page-on-back-button-click/20899422#20899422
    var isChrome = (/chrom(e|ium)/.test(window.navigator.userAgent.toLowerCase()));
    if (isChrome) {
      // Track back button in navigation.
      // @see https://stackoverflow.com/questions/37838430/detect-if-page-is-load-from-back-button
      var backButton = false;
      if (window.performance) {
        var navEntries = window.performance.getEntriesByType('navigation');
        if (navEntries.length > 0 && navEntries[0].type === 'back_forward') {
          backButton = true;
        }
        else if (window.performance.navigation
          && window.performance.navigation.type === window.performance.navigation.TYPE_BACK_FORWARD) {
          backButton = true;
        }
      }
  
      // If the back button is pressed, delay Drupal's attaching of behaviors.
      if (backButton) {
        var attachBehaviors = Drupal.attachBehaviors;
        Drupal.attachBehaviors = function (context, settings) {
          setTimeout(function (context, settings) {
            attachBehaviors(context, settings);
          }, 300);
        };
      }
    }
  
  })(jQuery, Drupal);
  ;
  /**
  * DO NOT EDIT THIS FILE.
  * See the following change record for more information,
  * https://www.drupal.org/node/2815083
  * @preserve
  **/
  (function ($, Drupal) {
    var states = {
      postponed: []
    };
    Drupal.states = states;
    function invert(a, invertState) {
      return invertState && typeof a !== 'undefined' ? !a : a;
    }
    function _compare2(a, b) {
      if (a === b) {
        return typeof a === 'undefined' ? a : true;
      }
      return typeof a === 'undefined' || typeof b === 'undefined';
    }
    function ternary(a, b) {
      if (typeof a === 'undefined') {
        return b;
      }
      if (typeof b === 'undefined') {
        return a;
      }
      return a && b;
    }
    Drupal.behaviors.states = {
      attach: function attach(context, settings) {
        var $states = $(context).find('[data-drupal-states]');
        var il = $states.length;
        var _loop = function _loop(i) {
          var config = JSON.parse($states[i].getAttribute('data-drupal-states'));
          Object.keys(config || {}).forEach(function (state) {
            new states.Dependent({
              element: $($states[i]),
              state: states.State.sanitize(state),
              constraints: config[state]
            });
          });
        };
        for (var i = 0; i < il; i++) {
          _loop(i);
        }
        while (states.postponed.length) {
          states.postponed.shift()();
        }
      }
    };
    states.Dependent = function (args) {
      var _this = this;
      $.extend(this, {
        values: {},
        oldValue: null
      }, args);
      this.dependees = this.getDependees();
      Object.keys(this.dependees || {}).forEach(function (selector) {
        _this.initializeDependee(selector, _this.dependees[selector]);
      });
    };
    states.Dependent.comparisons = {
      RegExp: function RegExp(reference, value) {
        return reference.test(value);
      },
      Function: function Function(reference, value) {
        return reference(value);
      },
      Number: function Number(reference, value) {
        return typeof value === 'string' ? _compare2(reference.toString(), value) : _compare2(reference, value);
      }
    };
    states.Dependent.prototype = {
      initializeDependee: function initializeDependee(selector, dependeeStates) {
        var _this2 = this;
        this.values[selector] = {};
        Object.keys(dependeeStates).forEach(function (i) {
          var state = dependeeStates[i];
          if ($.inArray(state, dependeeStates) === -1) {
            return;
          }
          state = states.State.sanitize(state);
          _this2.values[selector][state.name] = null;
          $(selector).on("state:".concat(state), {
            selector: selector,
            state: state
          }, function (e) {
            _this2.update(e.data.selector, e.data.state, e.value);
          });
          new states.Trigger({
            selector: selector,
            state: state
          });
        });
      },
      compare: function compare(reference, selector, state) {
        var value = this.values[selector][state.name];
        if (reference.constructor.name in states.Dependent.comparisons) {
          return states.Dependent.comparisons[reference.constructor.name](reference, value);
        }
        return _compare2(reference, value);
      },
      update: function update(selector, state, value) {
        if (value !== this.values[selector][state.name]) {
          this.values[selector][state.name] = value;
          this.reevaluate();
        }
      },
      reevaluate: function reevaluate() {
        var value = this.verifyConstraints(this.constraints);
        if (value !== this.oldValue) {
          this.oldValue = value;
          value = invert(value, this.state.invert);
          this.element.trigger({
            type: "state:".concat(this.state),
            value: value,
            trigger: true
          });
        }
      },
      verifyConstraints: function verifyConstraints(constraints, selector) {
        var result;
        if ($.isArray(constraints)) {
          var hasXor = $.inArray('xor', constraints) === -1;
          var len = constraints.length;
          for (var i = 0; i < len; i++) {
            if (constraints[i] !== 'xor') {
              var constraint = this.checkConstraints(constraints[i], selector, i);
              if (constraint && (hasXor || result)) {
                return hasXor;
              }
              result = result || constraint;
            }
          }
        } else if ($.isPlainObject(constraints)) {
          for (var n in constraints) {
            if (constraints.hasOwnProperty(n)) {
              result = ternary(result, this.checkConstraints(constraints[n], selector, n));
              if (result === false) {
                return false;
              }
            }
          }
        }
        return result;
      },
      checkConstraints: function checkConstraints(value, selector, state) {
        if (typeof state !== 'string' || /[0-9]/.test(state[0])) {
          state = null;
        } else if (typeof selector === 'undefined') {
          selector = state;
          state = null;
        }
        if (state !== null) {
          state = states.State.sanitize(state);
          return invert(this.compare(value, selector, state), state.invert);
        }
        return this.verifyConstraints(value, selector);
      },
      getDependees: function getDependees() {
        var cache = {};
        var _compare = this.compare;
        this.compare = function (reference, selector, state) {
          (cache[selector] || (cache[selector] = [])).push(state.name);
        };
        this.verifyConstraints(this.constraints);
        this.compare = _compare;
        return cache;
      }
    };
    states.Trigger = function (args) {
      $.extend(this, args);
      if (this.state in states.Trigger.states) {
        this.element = $(this.selector);
        if (!this.element.data("trigger:".concat(this.state))) {
          this.initialize();
        }
      }
    };
    states.Trigger.prototype = {
      initialize: function initialize() {
        var _this3 = this;
        var trigger = states.Trigger.states[this.state];
        if (typeof trigger === 'function') {
          trigger.call(window, this.element);
        } else {
          Object.keys(trigger || {}).forEach(function (event) {
            _this3.defaultTrigger(event, trigger[event]);
          });
        }
        this.element.data("trigger:".concat(this.state), true);
      },
      defaultTrigger: function defaultTrigger(event, valueFn) {
        var oldValue = valueFn.call(this.element);
        this.element.on(event, $.proxy(function (e) {
          var value = valueFn.call(this.element, e);
          if (oldValue !== value) {
            this.element.trigger({
              type: "state:".concat(this.state),
              value: value,
              oldValue: oldValue
            });
            oldValue = value;
          }
        }, this));
        states.postponed.push($.proxy(function () {
          this.element.trigger({
            type: "state:".concat(this.state),
            value: oldValue,
            oldValue: null
          });
        }, this));
      }
    };
    states.Trigger.states = {
      empty: {
        keyup: function keyup() {
          return this.val() === '';
        },
        change: function change() {
          return this.val() === '';
        }
      },
      checked: {
        change: function change() {
          var checked = false;
          this.each(function () {
            checked = $(this).prop('checked');
            return !checked;
          });
          return checked;
        }
      },
      value: {
        keyup: function keyup() {
          if (this.length > 1) {
            return this.filter(':checked').val() || false;
          }
          return this.val();
        },
        change: function change() {
          if (this.length > 1) {
            return this.filter(':checked').val() || false;
          }
          return this.val();
        }
      },
      collapsed: {
        collapsed: function collapsed(e) {
          return typeof e !== 'undefined' && 'value' in e ? e.value : !this.is('[open]');
        }
      }
    };
    states.State = function (state) {
      this.pristine = state;
      this.name = state;
      var process = true;
      do {
        while (this.name.charAt(0) === '!') {
          this.name = this.name.substring(1);
          this.invert = !this.invert;
        }
        if (this.name in states.State.aliases) {
          this.name = states.State.aliases[this.name];
        } else {
          process = false;
        }
      } while (process);
    };
    states.State.sanitize = function (state) {
      if (state instanceof states.State) {
        return state;
      }
      return new states.State(state);
    };
    states.State.aliases = {
      enabled: '!disabled',
      invisible: '!visible',
      invalid: '!valid',
      untouched: '!touched',
      optional: '!required',
      filled: '!empty',
      unchecked: '!checked',
      irrelevant: '!relevant',
      expanded: '!collapsed',
      open: '!collapsed',
      closed: 'collapsed',
      readwrite: '!readonly'
    };
    states.State.prototype = {
      invert: false,
      toString: function toString() {
        return this.name;
      }
    };
    var $document = $(document);
    $document.on('state:disabled', function (e) {
      if (e.trigger) {
        $(e.target).closest('.js-form-item, .js-form-submit, .js-form-wrapper').toggleClass('form-disabled', e.value).find('select, input, textarea').prop('disabled', e.value);
      }
    });
    $document.on('state:required', function (e) {
      if (e.trigger) {
        if (e.value) {
          var label = "label".concat(e.target.id ? "[for=".concat(e.target.id, "]") : '');
          var $label = $(e.target).attr({
            required: 'required',
            'aria-required': 'true'
          }).closest('.js-form-item, .js-form-wrapper').find(label);
          if (!$label.hasClass('js-form-required').length) {
            $label.addClass('js-form-required form-required');
          }
        } else {
          $(e.target).removeAttr('required aria-required').closest('.js-form-item, .js-form-wrapper').find('label.js-form-required').removeClass('js-form-required form-required');
        }
      }
    });
    $document.on('state:visible', function (e) {
      if (e.trigger) {
        $(e.target).closest('.js-form-item, .js-form-submit, .js-form-wrapper').toggle(e.value);
      }
    });
    $document.on('state:checked', function (e) {
      if (e.trigger) {
        $(e.target).closest('.js-form-item, .js-form-wrapper').find('input').prop('checked', e.value).trigger('change');
      }
    });
    $document.on('state:collapsed', function (e) {
      if (e.trigger) {
        if ($(e.target).is('[open]') === e.value) {
          $(e.target).find('> summary').trigger('click');
        }
      }
    });
  })(jQuery, Drupal);;
  /**
   * @file
   * JavaScript behaviors for custom webform #states.
   */
  
  (function ($, Drupal, once) {
  
    'use strict';
  
    Drupal.webform = Drupal.webform || {};
    Drupal.webform.states = Drupal.webform.states || {};
    Drupal.webform.states.slideDown = Drupal.webform.states.slideDown || {};
    Drupal.webform.states.slideDown.duration = 'slow';
    Drupal.webform.states.slideUp = Drupal.webform.states.slideUp || {};
    Drupal.webform.states.slideUp.duration = 'fast';
  
    /* ************************************************************************ */
    // jQuery functions.
    /* ************************************************************************ */
  
    /**
     * Check if an element has a specified data attribute.
     *
     * @param {string} data
     *   The data attribute name.
     *
     * @return {boolean}
     *   TRUE if an element has a specified data attribute.
     */
    $.fn.hasData = function (data) {
      return (typeof this.data(data) !== 'undefined');
    };
  
    /**
     * Check if element is within the webform or not.
     *
     * @return {boolean}
     *   TRUE if element is within the webform.
     */
    $.fn.isWebform = function () {
      return $(this).closest('form.webform-submission-form, form[id^="webform"], form[data-is-webform]').length ? true : false;
    };
  
    /**
     * Check if element is to be treated as a webform element.
     *
     * @return {boolean}
     *   TRUE if element is to be treated as a webform element.
     */
    $.fn.isWebformElement = function () {
      return ($(this).isWebform() || $(this).closest('[data-is-webform-element]').length) ? true : false;
    };
  
    /* ************************************************************************ */
    // Trigger.
    /* ************************************************************************ */
  
    // The change event is triggered by cut-n-paste and select menus.
    // Issue #2445271: #states element empty check not triggered on mouse
    // based paste.
    // @see https://www.drupal.org/node/2445271
    Drupal.states.Trigger.states.empty.change = function change() {
      return this.val() === '';
    };
  
    /* ************************************************************************ */
    // Dependents.
    /* ************************************************************************ */
  
    // Apply solution included in #1962800 patch.
    // Issue #1962800: Form #states not working with literal integers as
    // values in IE11.
    // @see https://www.drupal.org/project/drupal/issues/1962800
    // @see https://www.drupal.org/files/issues/core-states-not-working-with-integers-ie11_1962800_46.patch
    //
    // This issue causes pattern, less than, and greater than support to break.
    // @see https://www.drupal.org/project/webform/issues/2981724
    var states = Drupal.states;
    Drupal.states.Dependent.prototype.compare = function compare(reference, selector, state) {
      var value = this.values[selector][state.name];
  
      var name = reference.constructor.name;
      if (!name) {
        name = $.type(reference);
  
        name = name.charAt(0).toUpperCase() + name.slice(1);
      }
      if (name in states.Dependent.comparisons) {
        return states.Dependent.comparisons[name](reference, value);
      }
  
      if (reference.constructor.name in states.Dependent.comparisons) {
        return states.Dependent.comparisons[reference.constructor.name](reference, value);
      }
  
      return _compare2(reference, value);
    };
    function _compare2(a, b) {
      if (a === b) {
        return typeof a === 'undefined' ? a : true;
      }
  
      return typeof a === 'undefined' || typeof b === 'undefined';
    }
  
    // Adds pattern, less than, and greater than support to #state API.
    // @see http://drupalsun.com/julia-evans/2012/03/09/extending-form-api-states-regular-expressions
    Drupal.states.Dependent.comparisons.Object = function (reference, value) {
      if ('pattern' in reference) {
        return (new RegExp(reference['pattern'])).test(value);
      }
      else if ('!pattern' in reference) {
        return !((new RegExp(reference['!pattern'])).test(value));
      }
      else if ('less' in reference) {
        return (value !== '' && parseFloat(reference['less']) > parseFloat(value));
      }
      else if ('less_equal' in reference) {
        return (value !== '' && parseFloat(reference['less_equal']) >= parseFloat(value));
      }
      else if ('greater' in reference) {
        return (value !== '' && parseFloat(reference['greater']) < parseFloat(value));
      }
      else if ('greater_equal' in reference) {
        return (value !== '' && parseFloat(reference['greater_equal']) <= parseFloat(value));
      }
      else if ('between' in reference || '!between' in reference) {
        if (value === '') {
          return false;
        }
  
        var between = reference['between'] || reference['!between'];
        var betweenParts = between.split(':');
        var greater = betweenParts[0];
        var less = (typeof betweenParts[1] !== 'undefined') ? betweenParts[1] : null;
        var isGreaterThan = (greater === null || greater === '' || parseFloat(value) >= parseFloat(greater));
        var isLessThan = (less === null || less === '' || parseFloat(value) <= parseFloat(less));
        var result = (isGreaterThan && isLessThan);
        return (reference['!between']) ? !result : result;
      }
      else {
        return reference.indexOf(value) !== false;
      }
    };
  
    /* ************************************************************************ */
    // States events.
    /* ************************************************************************ */
  
    var $document = $(document);
  
    $document.on('state:required', function (e) {
      if (e.trigger && $(e.target).isWebformElement()) {
        var $target = $(e.target);
        // Fix #required file upload.
        // @see Issue #2860529: Conditional required File upload field don't work.
        toggleRequired($target.find('input[type="file"]'), e.value);
  
        // Fix #required for radios and likert.
        // @see Issue #2856795: If radio buttons are required but not filled form is nevertheless submitted.
        if ($target.is('.js-form-type-radios, .js-form-type-webform-radios-other, .js-webform-type-radios, .js-webform-type-webform-radios-other, .js-webform-type-webform-entity-radios, .webform-likert-table')) {
          $target.toggleClass('required', e.value);
          toggleRequired($target.find('input[type="radio"]'), e.value);
        }
  
        // Fix #required for checkboxes.
        // @see Issue #2938414: Checkboxes don't support #states required.
        // @see checkboxRequiredhandler
        if ($target.is('.js-form-type-checkboxes, .js-form-type-webform-checkboxes-other, .js-webform-type-checkboxes, .js-webform-type-webform-checkboxes-other')) {
          $target.toggleClass('required', e.value);
          var $checkboxes = $target.find('input[type="checkbox"]');
          if (e.value) {
            // Add event handler.
            $checkboxes.on('click', statesCheckboxesRequiredEventHandler);
            // Initialize and add required attribute.
            checkboxesRequired($target);
          }
          else {
            // Remove event handler.
            $checkboxes.off('click', statesCheckboxesRequiredEventHandler);
            // Remove required attribute.
            toggleRequired($checkboxes, false);
          }
        }
  
        // Fix #required for tableselect.
        // @see Issue #3212581: Table select does not trigger client side validation
        if ($target.is('.js-webform-tableselect')) {
          $target.toggleClass('required', e.value);
          var isMultiple = $target.is('[multiple]');
          if (isMultiple) {
            // Checkboxes.
            var $tbody = $target.find('tbody');
            var $checkboxes = $tbody.find('input[type="checkbox"]');
            copyRequireMessage($target, $checkboxes);
            if (e.value) {
              $checkboxes.on('click change', statesCheckboxesRequiredEventHandler);
              checkboxesRequired($tbody);
            }
            else {
              $checkboxes.off('click change ', statesCheckboxesRequiredEventHandler);
              toggleRequired($tbody, false);
            }
          }
          else {
            // Radios.
            var $radios = $target.find('input[type="radio"]');
            copyRequireMessage($target, $radios);
            toggleRequired($radios, e.value);
          }
        }
  
        // Fix required label for elements without the for attribute.
        // @see Issue #3145300: Conditional Visible Select Other not working.
        if ($target.is('.js-form-type-webform-select-other, .js-webform-type-webform-select-other')) {
          var $select = $target.find('select');
          toggleRequired($select, e.value);
          copyRequireMessage($target, $select);
        }
        if ($target.find('> label:not([for])').length) {
          $target.find('> label').toggleClass('js-form-required form-required', e.value);
        }
  
        // Fix required label for checkboxes and radios.
        // @see Issue #2938414: Checkboxes don't support #states required
        // @see Issue #2731991: Setting required on radios marks all options required.
        // @see Issue #2856315: Conditional Logic - Requiring Radios in a Fieldset.
        // Fix #required for fieldsets.
        // @see Issue #2977569: Hidden fieldsets that become visible with conditional logic cannot be made required.
        if ($target.is('.js-webform-type-radios, .js-webform-type-checkboxes, fieldset')) {
          $target.find('legend span.fieldset-legend:not(.visually-hidden)').toggleClass('js-form-required form-required', e.value);
        }
  
        // Issue #2986017: Fieldsets shouldn't have required attribute.
        if ($target.is('fieldset')) {
          $target.removeAttr('required aria-required');
        }
      }
    });
  
    $document.on('state:checked', function (e) {
      if (e.trigger) {
        $(e.target).trigger('change');
      }
    });
  
    $document.on('state:readonly', function (e) {
      if (e.trigger && $(e.target).isWebformElement()) {
        $(e.target).prop('readonly', e.value).closest('.js-form-item, .js-form-wrapper').toggleClass('webform-readonly', e.value).find('input, textarea').prop('readonly', e.value);
  
        // Trigger webform:readonly.
        $(e.target).trigger('webform:readonly')
          .find('select, input, textarea, button').trigger('webform:readonly');
      }
    });
  
    $document.on('state:visible state:visible-slide', function (e) {
      if (e.trigger && $(e.target).isWebformElement()) {
        if (e.value) {
          $(':input', e.target).addBack().each(function () {
            restoreValueAndRequired(this);
            triggerEventHandlers(this);
          });
        }
        else {
          // @see https://www.sitepoint.com/jquery-function-clear-form-data/
          $(':input', e.target).addBack().each(function () {
            backupValueAndRequired(this);
            clearValueAndRequired(this);
            triggerEventHandlers(this);
          });
        }
      }
    });
  
    $document.on('state:visible-slide', function (e) {
      if (e.trigger && $(e.target).isWebformElement()) {
        var effect = e.value ? 'slideDown' : 'slideUp';
        var duration = Drupal.webform.states[effect].duration;
        $(e.target).closest('.js-form-item, .js-form-submit, .js-form-wrapper')[effect](duration);
      }
    });
    Drupal.states.State.aliases['invisible-slide'] = '!visible-slide';
  
    $document.on('state:disabled', function (e) {
      if (e.trigger && $(e.target).isWebformElement()) {
        // Make sure disabled property is set before triggering webform:disabled.
        // Copied from: core/misc/states.js
        $(e.target)
          .prop('disabled', e.value)
          .closest('.js-form-item, .js-form-submit, .js-form-wrapper').toggleClass('form-disabled', e.value)
          .find('select, input, textarea, button').prop('disabled', e.value);
  
        // Never disable hidden file[fids] because the existing values will
        // be completely lost when the webform is submitted.
        var fileElements = $(e.target)
          .find(':input[type="hidden"][name$="[fids]"]');
        if (fileElements.length) {
          // Remove 'disabled' attribute from fieldset which will block
          // all disabled elements from being submitted.
          if ($(e.target).is('fieldset')) {
            $(e.target).prop('disabled', false);
          }
          fileElements.removeAttr('disabled');
        }
  
        // Trigger webform:disabled.
        $(e.target).trigger('webform:disabled')
          .find('select, input, textarea, button').trigger('webform:disabled');
      }
    });
  
    /* ************************************************************************ */
    // Behaviors.
    /* ************************************************************************ */
  
    /**
     * Adds HTML5 validation to required checkboxes.
     *
     * @type {Drupal~behavior}
     *
     * @see https://www.drupal.org/project/webform/issues/3068998
     */
    Drupal.behaviors.webformCheckboxesRequired = {
      attach: function (context) {
        $(once('webform-checkboxes-required', '.js-form-type-checkboxes.required, .js-form-type-webform-checkboxes-other.required, .js-webform-type-checkboxes.required, .js-webform-type-webform-checkboxes-other.required, .js-webform-type-webform-radios-other.checkboxes', context))
          .each(function () {
            var $element = $(this);
            $element.find('input[type="checkbox"]').on('click', statesCheckboxesRequiredEventHandler);
            setTimeout(function () {checkboxesRequired($element);});
          });
      }
    };
  
    /**
     * Adds HTML5 validation to required radios.
     *
     * @type {Drupal~behavior}
     *
     * @see https://www.drupal.org/project/webform/issues/2856795
     */
    Drupal.behaviors.webformRadiosRequired = {
      attach: function (context) {
        $(once('webform-radios-required', '.js-form-type-radios, .js-form-type-webform-radios-other, .js-webform-type-radios, .js-webform-type-webform-radios-other, .js-webform-type-webform-entity-radios, .js-webform-type-webform-scale', context))
          .each(function () {
            var $element = $(this);
            setTimeout(function () {radiosRequired($element);});
          });
      }
    };
  
   /**
     * Adds HTML5 validation to required table select.
     *
     * @type {Drupal~behavior}
     *
     * @see https://www.drupal.org/project/webform/issues/2856795
     */
    Drupal.behaviors.webformTableSelectRequired = {
      attach: function (context) {
        $(once('webform-tableselect-required','.js-webform-tableselect.required', context))
          .each(function () {
            var $element = $(this);
            var $tbody = $element.find('tbody');
            var isMultiple = $element.is('[multiple]');
  
            if (isMultiple) {
              // Check all checkbox triggers checkbox 'change' event on
              // select and deselect all.
              // @see Drupal.tableSelect
              $tbody.find('input[type="checkbox"]').on('click change', function () {
                checkboxesRequired($tbody);
              });
            }
  
            setTimeout(function () {
              isMultiple ? checkboxesRequired($tbody) : radiosRequired($element);
            });
          });
      }
    };
  
    /**
     * Add HTML5 multiple checkboxes required validation.
     *
     * @param {jQuery} $element
     *   An jQuery object containing HTML5 radios.
     *
     * @see https://stackoverflow.com/a/37825072/145846
     */
    function checkboxesRequired($element) {
      var $firstCheckbox = $element.find('input[type="checkbox"]').first();
      var isChecked = $element.find('input[type="checkbox"]').is(':checked');
      toggleRequired($firstCheckbox, !isChecked);
      copyRequireMessage($element, $firstCheckbox);
    }
  
    /**
     * Add HTML5 radios required validation.
     *
     * @param {jQuery} $element
     *   An jQuery object containing HTML5 radios.
     *
     * @see https://www.drupal.org/project/webform/issues/2856795
     */
    function radiosRequired($element) {
      var $radios = $element.find('input[type="radio"]');
      var isRequired = $element.hasClass('required');
      toggleRequired($radios, isRequired);
      copyRequireMessage($element, $radios);
    }
  
    /* ************************************************************************ */
    // Event handlers.
    /* ************************************************************************ */
  
    /**
     * Trigger #states API HTML5 multiple checkboxes required validation.
     *
     * @see https://stackoverflow.com/a/37825072/145846
     */
    function statesCheckboxesRequiredEventHandler() {
      var $element = $(this).closest('.js-webform-type-checkboxes, .js-webform-type-webform-checkboxes-other');
      checkboxesRequired($element);
    }
  
    /**
     * Trigger an input's event handlers.
     *
     * @param {element} input
     *   An input.
     */
    function triggerEventHandlers(input) {
      var $input = $(input);
      var type = input.type;
      var tag = input.tagName.toLowerCase();
      // Add 'webform.states' as extra parameter to event handlers.
      // @see Drupal.behaviors.webformUnsaved
      var extraParameters = ['webform.states'];
      if (type === 'checkbox' || type === 'radio') {
        $input
          .trigger('change', extraParameters)
          .trigger('blur', extraParameters);
      }
      else if (tag === 'select') {
        // Do not trigger the onchange event for Address element's country code
        // when it is initialized.
        // @see \Drupal\address\Element\Country
        if ($input.closest('.webform-type-address').length) {
          if (!$input.data('webform-states-address-initialized')
            && $input.attr('autocomplete') === 'country'
            && $input.val() === $input.find("option[selected]").attr('value')) {
            return;
          }
          $input.data('webform-states-address-initialized', true);
        }
  
        $input
          .trigger('change', extraParameters)
          .trigger('blur', extraParameters);
      }
      else if (type !== 'submit' && type !== 'button' && type !== 'file') {
        // Make sure input mask is removed and then reset when value is restored.
        // @see https://www.drupal.org/project/webform/issues/3124155
        // @see https://www.drupal.org/project/webform/issues/3202795
        var hasInputMask = ($.fn.inputmask && $input.hasClass('js-webform-input-mask'));
        hasInputMask && $input.inputmask('remove');
  
        $input
          .trigger('input', extraParameters)
          .trigger('change', extraParameters)
          .trigger('keydown', extraParameters)
          .trigger('keyup', extraParameters)
          .trigger('blur', extraParameters);
  
        hasInputMask && $input.inputmask();
      }
    }
  
    /* ************************************************************************ */
    // Backup and restore value functions.
    /* ************************************************************************ */
  
    /**
     * Backup an input's current value and required attribute
     *
     * @param {element} input
     *   An input.
     */
    function backupValueAndRequired(input) {
      var $input = $(input);
      var type = input.type;
      var tag = input.tagName.toLowerCase(); // Normalize case.
  
      // Backup required.
      if ($input.prop('required') && !$input.hasData('webform-required')) {
        $input.data('webform-required', true);
      }
  
      // Backup value.
      if (!$input.hasData('webform-value')) {
        if (type === 'checkbox' || type === 'radio') {
          $input.data('webform-value', $input.prop('checked'));
        }
        else if (tag === 'select') {
          var values = [];
          $input.find('option:selected').each(function (i, option) {
            values[i] = option.value;
          });
          $input.data('webform-value', values);
        }
        else if (type !== 'submit' && type !== 'button') {
          $input.data('webform-value', input.value);
        }
      }
    }
  
    /**
     * Restore an input's value and required attribute.
     *
     * @param {element} input
     *   An input.
     */
    function restoreValueAndRequired(input) {
      var $input = $(input);
  
      // Restore value.
      var value = $input.data('webform-value');
      if (typeof value !== 'undefined') {
        var type = input.type;
        var tag = input.tagName.toLowerCase(); // Normalize case.
  
        if (type === 'checkbox' || type === 'radio') {
          $input.prop('checked', value);
        }
        else if (tag === 'select') {
          $.each(value, function (i, option_value) {
            // Prevent "Syntax error, unrecognized expression" error by
            // escaping single quotes.
            // @see https://forum.jquery.com/topic/escape-characters-prior-to-using-selector
            option_value = option_value.replace(/'/g, "\\\'");
            $input.find("option[value='" + option_value + "']").prop('selected', true);
          });
        }
        else if (type !== 'submit' && type !== 'button') {
          input.value = value;
        }
        $input.removeData('webform-value');
      }
  
      // Restore required.
      var required = $input.data('webform-required');
      if (typeof required !== 'undefined') {
        if (required) {
          $input.prop('required', true);
        }
        $input.removeData('webform-required');
      }
    }
  
    /**
     * Clear an input's value and required attributes.
     *
     * @param {element} input
     *   An input.
     */
    function clearValueAndRequired(input) {
      var $input = $(input);
  
      // Check for #states no clear attribute.
      // @see https://css-tricks.com/snippets/jquery/make-an-jquery-hasattr/
      if ($input.closest('[data-webform-states-no-clear]').length) {
        return;
      }
  
      // Clear value.
      var type = input.type;
      var tag = input.tagName.toLowerCase(); // Normalize case.
      if (type === 'checkbox' || type === 'radio') {
        $input.prop('checked', false);
      }
      else if (tag === 'select') {
        if ($input.find('option[value=""]').length) {
          $input.val('');
        }
        else {
          input.selectedIndex = -1;
        }
      }
      else if (type !== 'submit' && type !== 'button') {
        input.value = (type === 'color') ? '#000000' : '';
      }
  
      // Clear required.
      $input.prop('required', false);
    }
  
    /* ************************************************************************ */
    // Helper functions.
    /* ************************************************************************ */
  
    /**
     * Toggle an input's required attributes.
     *
     * @param {element} $input
     *   An input.
     * @param {boolean} required
     *   Is input required.
     */
    function toggleRequired($input, required) {
      var isCheckboxOrRadio = ($input.attr('type') === 'radio' || $input.attr('type') === 'checkbox');
      if (required) {
        if (isCheckboxOrRadio) {
          $input.attr({'required': 'required'});
        }
        else {
          $input.attr({'required': 'required', 'aria-required': 'true'});
        }
      }
      else {
        if (isCheckboxOrRadio) {
          $input.removeAttr('required');
        }
        else {
          $input.removeAttr('required aria-required');
        }
      }
    }
  
    /**
     * Copy the clientside_validation.module's message.
     *
     * @param {jQuery} $source
     *   The source element.
     * @param {jQuery} $destination
     *   The destination element.
     */
    function copyRequireMessage($source, $destination) {
      if ($source.attr('data-msg-required')) {
        $destination.attr('data-msg-required', $source.attr('data-msg-required'));
      }
    }
  
  })(jQuery, Drupal, once);
  ;
  /**
   * @file
   * JavaScript behaviors for webforms.
   */
  
  (function ($, Drupal, once) {
  
    'use strict';
  
    /**
     * Remove single submit event listener.
     *
     * @type {Drupal~behavior}
     *
     * @prop {Drupal~behaviorAttach} attach
     *   Attaches the behavior for removing single submit event listener.
     *
     * @see Drupal.behaviors.formSingleSubmit
     */
    Drupal.behaviors.webformRemoveFormSingleSubmit = {
      attach: function attach() {
        function onFormSubmit(e) {
          var $form = $(e.currentTarget);
          $form.removeAttr('data-drupal-form-submit-last');
        }
        $(once('webform-single-submit', 'body'))
          .on('submit.singleSubmit', 'form.webform-remove-single-submit', onFormSubmit);
      }
    };
  
    /**
     * Prevent webform autosubmit on wizard pages.
     *
     * @type {Drupal~behavior}
     *
     * @prop {Drupal~behaviorAttach} attach
     *   Attaches the behavior for disabling webform autosubmit.
     *   Wizard pages need to be progressed with the Previous or Next buttons,
     *   not by pressing Enter.
     */
    Drupal.behaviors.webformDisableAutoSubmit = {
      attach: function (context) {
        // Not using context so that inputs loaded via Ajax will have autosubmit
        // disabled.
        // @see http://stackoverflow.com/questions/11235622/jquery-disable-form-submit-on-enter
        $(once('webform-disable-autosubmit', $('.js-webform-disable-autosubmit input').not(':button, :submit, :reset, :image, :file')))
          .on('keyup keypress', function (e) {
            if (e.which === 13) {
              e.preventDefault();
              return false;
            }
          });
      }
    };
  
    /**
     * Custom required and pattern validation error messages.
     *
     * @type {Drupal~behavior}
     *
     * @prop {Drupal~behaviorAttach} attach
     *   Attaches the behavior for the webform custom required and pattern
     *   validation error messages.
     *
     * @see http://stackoverflow.com/questions/5272433/html5-form-required-attribute-set-custom-validation-message
     **/
    Drupal.behaviors.webformRequiredError = {
      attach: function (context) {
        $(once('webform-required-error', $(context).find(':input[data-webform-required-error], :input[data-webform-pattern-error]')))
          .on('invalid', function () {
            this.setCustomValidity('');
            if (this.valid) {
              return;
            }
  
            if (this.validity.patternMismatch && $(this).attr('data-webform-pattern-error')) {
              this.setCustomValidity($(this).attr('data-webform-pattern-error'));
            }
            else if (this.validity.valueMissing && $(this).attr('data-webform-required-error')) {
              this.setCustomValidity($(this).attr('data-webform-required-error'));
            }
          })
          .on('input change', function () {
            // Find all related elements by name and reset custom validity.
            // This specifically applies to required radios and checkboxes.
            var name = $(this).attr('name');
            $(this.form).find(':input[name="' + name + '"]').each(function () {
              this.setCustomValidity('');
            });
          });
      }
    };
  
    // When #state:required is triggered we need to reset the target elements
    // custom validity.
    $(document).on('state:required', function (e) {
      $(e.target).filter(':input[data-webform-required-error]')
        .each(function () {this.setCustomValidity('');});
    });
  
  })(jQuery, Drupal, once);
  ;
  /**
   * @file
   * JavaScript behaviors for details element.
   */
  
  (function ($, Drupal, once) {
  
    'use strict';
  
    // Determine if local storage exists and is enabled.
    // This approach is copied from Modernizr.
    // @see https://github.com/Modernizr/Modernizr/blob/c56fb8b09515f629806ca44742932902ac145302/modernizr.js#L696-731
    var hasLocalStorage = (function () {
      try {
        localStorage.setItem('webform', 'webform');
        localStorage.removeItem('webform');
        return true;
      }
      catch (e) {
        return false;
      }
    }());
  
    /**
     * Attach handler to save details open/close state.
     *
     * @type {Drupal~behavior}
     */
    Drupal.behaviors.webformDetailsSave = {
      attach: function (context) {
        if (!hasLocalStorage) {
          return;
        }
  
        // Summary click event handler.
        $(once('webform-details-summary-save', 'details > summary', context)).on('click', function () {
          var $details = $(this).parent();
  
          // @see https://css-tricks.com/snippets/jquery/make-an-jquery-hasattr/
          if ($details[0].hasAttribute('data-webform-details-nosave')) {
            return;
          }
  
          var name = Drupal.webformDetailsSaveGetName($details);
          if (!name) {
            return;
          }
  
          var open = ($details.attr('open') !== 'open') ? '1' : '0';
          localStorage.setItem(name, open);
        });
  
        // Initialize details open state via local storage.
        $(once('webform-details-save', 'details', context)).each(function () {
          var $details = $(this);
  
          var name = Drupal.webformDetailsSaveGetName($details);
          if (!name) {
            return;
          }
  
          var open = localStorage.getItem(name);
          if (open === null) {
            return;
          }
  
          if (open === '1') {
            $details.attr('open', 'open');
          }
          else {
            $details.removeAttr('open');
          }
        });
      }
  
    };
  
    /**
     * Get the name used to store the state of details element.
     *
     * @param {jQuery} $details
     *   A details element.
     *
     * @return {string}
     *   The name used to store the state of details element.
     */
    Drupal.webformDetailsSaveGetName = function ($details) {
      if (!hasLocalStorage) {
        return '';
      }
  
      // Ignore details that are vertical tabs pane.
      if ($details.hasClass('vertical-tabs__pane')) {
        return '';
      }
  
      // Any details element not included a webform must have define its own id.
      var webformId = $details.attr('data-webform-element-id');
      if (webformId) {
        return 'Drupal.webform.' + webformId.replace('--', '.');
      }
  
      var detailsId = $details.attr('id');
      if (!detailsId) {
        return '';
      }
  
      var $form = $details.parents('form');
      if (!$form.length || !$form.attr('id')) {
        return '';
      }
  
      var formId = $form.attr('id');
      if (!formId) {
        return '';
      }
  
      // ISSUE: When Drupal renders a webform in a modal dialog it appends a unique
      // identifier to webform ids and details ids. (i.e. my-form--FeSFISegTUI)
      // WORKAROUND: Remove the unique id that delimited using double dashes.
      formId = formId.replace(/--.+?$/, '').replace(/-/g, '_');
      detailsId = detailsId.replace(/--.+?$/, '').replace(/-/g, '_');
      return 'Drupal.webform.' + formId + '.' + detailsId;
    };
  
  })(jQuery, Drupal, once);
  ;
  /**
  * DO NOT EDIT THIS FILE.
  * See the following change record for more information,
  * https://www.drupal.org/node/2815083
  * @preserve
  **/
  (function (Drupal, debounce) {
    var liveElement;
    var announcements = [];
    Drupal.behaviors.drupalAnnounce = {
      attach: function attach(context) {
        if (!liveElement) {
          liveElement = document.createElement('div');
          liveElement.id = 'drupal-live-announce';
          liveElement.className = 'visually-hidden';
          liveElement.setAttribute('aria-live', 'polite');
          liveElement.setAttribute('aria-busy', 'false');
          document.body.appendChild(liveElement);
        }
      }
    };
    function announce() {
      var text = [];
      var priority = 'polite';
      var announcement;
      var il = announcements.length;
      for (var i = 0; i < il; i++) {
        announcement = announcements.pop();
        text.unshift(announcement.text);
        if (announcement.priority === 'assertive') {
          priority = 'assertive';
        }
      }
      if (text.length) {
        liveElement.innerHTML = '';
        liveElement.setAttribute('aria-busy', 'true');
        liveElement.setAttribute('aria-live', priority);
        liveElement.innerHTML = text.join('\n');
        liveElement.setAttribute('aria-busy', 'false');
      }
    }
    Drupal.announce = function (text, priority) {
      announcements.push({
        text: text,
        priority: priority
      });
      return debounce(announce, 200)();
    };
  })(Drupal, Drupal.debounce);;
  /**
   * @file
   * JavaScript behaviors for details element.
   */
  
  (function ($, Drupal, once) {
  
    'use strict';
  
    Drupal.webform = Drupal.webform || {};
    Drupal.webform.detailsToggle = Drupal.webform.detailsToggle || {};
    Drupal.webform.detailsToggle.options = Drupal.webform.detailsToggle.options || {};
  
    /**
     * Attach handler to toggle details open/close state.
     *
     * @type {Drupal~behavior}
     */
    Drupal.behaviors.webformDetailsToggle = {
      attach: function (context) {
        $(once('webform-details-toggle', '.js-webform-details-toggle', context)).each(function () {
          var $form = $(this);
          var $tabs = $form.find('.webform-tabs');
  
          // Get only the main details elements and ignore all nested details.
          var selector = ($tabs.length) ? '.webform-tab' : '.js-webform-details-toggle, .webform-elements';
          var $details = $form.find('details').filter(function () {
            var $parents = $(this).parentsUntil(selector);
            return ($parents.find('details').length === 0);
          });
  
          // Toggle is only useful when there are two or more details elements.
          if ($details.length < 2) {
            return;
          }
  
          var options = $.extend({
            button: '<button type="button" class="webform-details-toggle-state"></button>'
          }, Drupal.webform.detailsToggle.options);
  
          // Create toggle buttons.
          var $toggle = $(options.button)
            .attr('title', Drupal.t('Toggle details widget state.'))
            .on('click', function (e) {
              // Get details that are not vertical tabs pane.
              var $details = $form.find('details:not(.vertical-tabs__pane)');
              var open;
              if (Drupal.webform.detailsToggle.isFormDetailsOpen($form)) {
                $details.removeAttr('open');
                open = 0;
              }
              else {
                $details.attr('open', 'open');
                open = 1;
              }
              Drupal.webform.detailsToggle.setDetailsToggleLabel($form);
  
              // Set the saved states for all the details elements.
              // @see webform.element.details.save.js
              if (Drupal.webformDetailsSaveGetName) {
                $details.each(function () {
                  // Note: Drupal.webformDetailsSaveGetName checks if localStorage
                  // exists and is enabled.
                  // @see webform.element.details.save.js
                  var name = Drupal.webformDetailsSaveGetName($(this));
                  if (name) {
                    localStorage.setItem(name, open);
                  }
                });
              }
            })
            .wrap('<div class="webform-details-toggle-state-wrapper"></div>')
            .parent();
  
          if ($tabs.length) {
            // Add toggle state before the tabs.
            $tabs.find('.item-list:first-child').eq(0).before($toggle);
          }
          else {
            // Add toggle state link to first details element.
            $details.eq(0).before($toggle);
          }
  
          Drupal.webform.detailsToggle.setDetailsToggleLabel($form);
        });
      }
    };
  
    /**
     * Determine if a webform's details are all opened.
     *
     * @param {jQuery} $form
     *   A webform.
     *
     * @return {boolean}
     *   TRUE if a webform's details are all opened.
     */
    Drupal.webform.detailsToggle.isFormDetailsOpen = function ($form) {
      return ($form.find('details[open]').length === $form.find('details').length);
    };
  
    /**
     * Set a webform's details toggle state widget label.
     *
     * @param {jQuery} $form
     *   A webform.
     */
    Drupal.webform.detailsToggle.setDetailsToggleLabel = function ($form) {
      var isOpen = Drupal.webform.detailsToggle.isFormDetailsOpen($form);
  
      var label = (isOpen) ? Drupal.t('Collapse all') : Drupal.t('Expand all');
      $form.find('.webform-details-toggle-state').html(label);
  
      var text = (isOpen) ? Drupal.t('All details have been expanded.') : Drupal.t('All details have been collapsed.');
      Drupal.announce(text);
    };
  
  })(jQuery, Drupal, once);
  ;
  /**
   * @file
   * JavaScript behaviors for message element integration.
   */
  
  (function ($, Drupal, once) {
  
    'use strict';
  
    // Determine if local storage exists and is enabled.
    // This approach is copied from Modernizr.
    // @see https://github.com/Modernizr/Modernizr/blob/c56fb8b09515f629806ca44742932902ac145302/modernizr.js#L696-731
    var hasLocalStorage = (function () {
      try {
        localStorage.setItem('webform', 'webform');
        localStorage.removeItem('webform');
        return true;
      }
      catch (e) {
        return false;
      }
    }());
  
    // Determine if session storage exists and is enabled.
    // This approach is copied from Modernizr.
    // @see https://github.com/Modernizr/Modernizr/blob/c56fb8b09515f629806ca44742932902ac145302/modernizr.js#L696-731
    var hasSessionStorage = (function () {
      try {
        sessionStorage.setItem('webform', 'webform');
        sessionStorage.removeItem('webform');
        return true;
      }
      catch (e) {
        return false;
      }
    }());
  
    /**
     * Behavior for handler message close.
     *
     * @type {Drupal~behavior}
     */
    Drupal.behaviors.webformMessageClose = {
      attach: function (context) {
        $(once('webform-message--close', '.js-webform-message--close', context)).each(function () {
          var $element = $(this);
  
          var id = $element.attr('data-message-id');
          var storage = $element.attr('data-message-storage');
          var effect = $element.attr('data-message-close-effect') || 'hide';
          switch (effect) {
            case 'slide': effect = 'slideUp'; break;
  
            case 'fade': effect = 'fadeOut'; break;
          }
  
          // Check storage status.
          if (isClosed($element, storage, id)) {
            return;
          }
  
          // Only show element if it's style is not set to 'display: none'
          // and it is not hidden via .js-webform-states-hidden.
          if ($element.attr('style') !== 'display: none;' && !$element.hasClass('js-webform-states-hidden')) {
            $element.show();
          }
  
          $element.find('.js-webform-message__link').on('click', function (event) {
            $element[effect]();
            setClosed($element, storage, id);
            $element.trigger('close');
            event.preventDefault();
          });
        });
      }
    };
  
    function isClosed($element, storage, id) {
      if (!id || !storage) {
        return false;
      }
  
      switch (storage) {
        case 'local':
          if (hasLocalStorage) {
            return localStorage.getItem('Drupal.webform.message.' + id) || false;
          }
          return false;
  
        case 'session':
          if (hasSessionStorage) {
            return sessionStorage.getItem('Drupal.webform.message.' + id) || false;
          }
          return false;
  
        default:
          return false;
      }
    }
  
    function setClosed($element, storage, id) {
      if (!id || !storage) {
        return;
      }
  
      switch (storage) {
        case 'local':
          if (hasLocalStorage) {
            localStorage.setItem('Drupal.webform.message.' + id, true);
          }
          break;
  
        case 'session':
          if (hasSessionStorage) {
            sessionStorage.setItem('Drupal.webform.message.' + id, true);
          }
          break;
  
        case 'user':
        case 'state':
        case 'custom':
          $.get($element.find('.js-webform-message__link').attr('href'));
          return true;
      }
    }
  
  })(jQuery, Drupal, once);
  ;
  