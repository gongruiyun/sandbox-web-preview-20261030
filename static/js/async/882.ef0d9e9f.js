"use strict";(self.webpackChunksandbox_web=self.webpackChunksandbox_web||[]).push([[882,944,2080,4524,9638],{11378(e,t,s){var n=s(39638);const o=(0,s(63568).b)(n.chartIcon,"IconChart");s.d(t,["s",0,o])},62772(e,t,s){var n=s(12080);const o=(0,s(63568).b)(n.playSquareIcon,"IconPlaySquare");s.d(t,["J",0,o])},3101(e,t,s){var n=s(39625);const o=(0,s(63568).b)(n.successIcon,"IconSuccess");s.d(t,["l",0,o])},7168(e,t,s){var n=s(34524);const o=(0,s(63568).b)(n.terminalIcon,"IconTerminal");s.d(t,["y",0,o])},23020(e,t,s){var n=s(70944);const o=(0,s(63568).b)(n.trash03Icon,"IconTrash03");s.d(t,["b",0,o])},26882(e,t,s){s.d(t,{Q:()=>Ge});var n=s(30758),o=s.t(n,2),r=s(46140),i=s(99576),a=s(45080),c=s(67286),l=s(61834),u=s(94023),v=s(17400),h=s(40362),m=s(36832);const g=a.AH`
  :host {
    --ve-message-wrapper-margin-top: var(--space-xxl);
    --ve-message-wrapper-margin-bottom: var(--space-xxl);
    --ve-message-wrapper-padding-inline: var(--space-xs);
    --ve-message-z-index: var(--z-index-message, 1003);

    --ve-message-max-width: none;
    --ve-message-padding-block: var(--space-xs);
    --ve-message-padding-inline: var(--space-s);
    --ve-message-margin-bottom: var(--space-s);
    --ve-message-border-radius: var(--radius-lg);
    --ve-message-font-family: var(--font-cn);
    --ve-message-font-size-icon: 18px;
    --ve-message-font-size-content: var(--text-body);
    --ve-message-font-weight-content: var(--font-weight-medium);
    --ve-message-line-height-content: 22px;
    --ve-message-gap: var(--space-xxs);
    --ve-message-border-width: var(--stroke-0_5);
    --ve-message-border-style: solid;
    --ve-message-box-shadow: var(--shadow-md);

    --ve-message-close-icon-color: var(--color-text-primary);
    --ve-message-close-icon-size: var(--text-ui-strong);
    --ve-message-close-icon-padding: var(--space-xxxs);
    --ve-message-close-icon-hover-base: var(--color-bg-base);
    --ve-message-close-icon-hover-radius: var(--radius-xs);

    --ve-message-info-color-bg: var(--color-bg-base);
    --ve-message-info-color-icon: var(--color-bg-info);
    --ve-message-info-color-content: var(--color-text-primary);
    --ve-message-info-color-border: var(--color-border-default);

    --ve-message-success-color-bg: var(--color-bg-base);
    --ve-message-success-color-icon: var(--color-bg-success);
    --ve-message-success-color-content: var(--color-text-primary);
    --ve-message-success-color-border: var(--color-border-default);

    --ve-message-warning-color-bg: var(--color-bg-base);
    --ve-message-warning-color-icon: var(--color-bg-warning);
    --ve-message-warning-color-content: var(--color-text-primary);
    --ve-message-warning-color-border: var(--color-border-default);

    --ve-message-error-color-bg: var(--color-bg-base);
    --ve-message-error-color-icon: var(--color-bg-danger);
    --ve-message-error-color-content: var(--color-text-primary);
    --ve-message-error-color-border: var(--color-border-default);

    --ve-message-loading-color-bg: var(--color-bg-base);
    --ve-message-loading-color-icon: var(--color-text-primary);
    --ve-message-loading-color-content: var(--color-text-primary);
    --ve-message-loading-color-border: var(--color-border-default);

    --ve-message-current-color-bg: var(--ve-message-info-color-bg);
    --ve-message-current-color-icon: var(--ve-message-info-color-icon);
    --ve-message-current-color-content: var(--ve-message-info-color-content);
    --ve-message-current-color-border: var(--ve-message-info-color-border);

    --ve-message-enter-duration: 100ms;
    --ve-message-fade-duration: 100ms;
    --ve-message-exit-duration: 300ms;
    --ve-message-icon-scale-duration: 400ms;
    --ve-message-loading-duration: 1s;
    --ve-message-linear-easing: cubic-bezier(0, 0, 1, 1);
    --ve-message-standard-easing: cubic-bezier(0.34, 0.69, 0.1, 1);
    --ve-message-overshoot-easing: cubic-bezier(0.3, 1.3, 0.3, 1);
  }
`,d=[u.H6,g,a.AH`
    :host {
      display: block;
      box-sizing: border-box;
      width: 100%;
      text-align: center;
      pointer-events: none;
    }

    :host([hidden]) {
      display: none;
    }

    .ve-message {
      position: relative;
      display: inline-flex;
      align-items: center;
      box-sizing: border-box;
      max-width: var(--ve-message-max-width);
      margin-bottom: var(--ve-message-margin-bottom);
      padding: var(--ve-message-padding-block) var(--ve-message-padding-inline);
      gap: var(--ve-message-gap);
      color: var(--ve-message-current-color-content);
      font-family: var(--ve-message-font-family);
      font-size: var(--ve-message-font-size-content);
      font-weight: var(--ve-message-font-weight-content);
      line-height: var(--ve-message-line-height-content);
      letter-spacing: var(--letter-spacing-normal);
      text-align: start;
      background-color: var(--ve-message-current-color-bg);
      border: var(--ve-message-border-width) var(--ve-message-border-style)
        var(--ve-message-current-color-border);
      border-radius: var(--ve-message-border-radius);
      box-shadow: var(--ve-message-box-shadow);
      opacity: 0;
      pointer-events: auto;
      transition: opacity var(--ve-message-enter-duration)
        var(--ve-message-linear-easing);
    }

    .ve-message-info {
      --ve-message-current-color-bg: var(--ve-message-info-color-bg);
      --ve-message-current-color-icon: var(--ve-message-info-color-icon);
      --ve-message-current-color-content: var(--ve-message-info-color-content);
      --ve-message-current-color-border: var(--ve-message-info-color-border);
    }

    .ve-message-success {
      --ve-message-current-color-bg: var(--ve-message-success-color-bg);
      --ve-message-current-color-icon: var(--ve-message-success-color-icon);
      --ve-message-current-color-content: var(
        --ve-message-success-color-content
      );
      --ve-message-current-color-border: var(--ve-message-success-color-border);
    }

    .ve-message-warning {
      --ve-message-current-color-bg: var(--ve-message-warning-color-bg);
      --ve-message-current-color-icon: var(--ve-message-warning-color-icon);
      --ve-message-current-color-content: var(
        --ve-message-warning-color-content
      );
      --ve-message-current-color-border: var(--ve-message-warning-color-border);
    }

    .ve-message-error {
      --ve-message-current-color-bg: var(--ve-message-error-color-bg);
      --ve-message-current-color-icon: var(--ve-message-error-color-icon);
      --ve-message-current-color-content: var(--ve-message-error-color-content);
      --ve-message-current-color-border: var(--ve-message-error-color-border);
    }

    .ve-message-loading {
      --ve-message-current-color-bg: var(--ve-message-loading-color-bg);
      --ve-message-current-color-icon: var(--ve-message-loading-color-icon);
      --ve-message-current-color-content: var(
        --ve-message-loading-color-content
      );
      --ve-message-current-color-border: var(--ve-message-loading-color-border);
    }

    .ve-message-entered {
      opacity: 1;
    }

    .ve-message-leaving {
      opacity: 0;
      transition: opacity var(--ve-message-fade-duration)
        var(--ve-message-linear-easing);
    }

    .ve-message-multiline {
      align-items: flex-start;
    }

    .ve-message-icon {
      display: inline-flex;
      flex: none;
      align-items: center;
      justify-content: center;
      width: var(--ve-message-font-size-icon);
      height: var(--ve-message-line-height-content);
      color: var(--ve-message-current-color-icon);
      font-size: var(--ve-message-font-size-icon);
      line-height: 1;
      animation:
        ve-message-fade var(--ve-message-fade-duration)
          var(--ve-message-linear-easing),
        ve-message-scale var(--ve-message-icon-scale-duration)
          var(--ve-message-overshoot-easing);
    }

    .ve-message-icon svg,
    .ve-message-icon ::slotted(svg) {
      display: inline-block;
      width: 1em;
      height: 1em;
      color: inherit;
      flex: none;
    }

    .ve-message-icon ::slotted(*) {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      max-width: 1em;
      max-height: 1em;
      color: inherit;
      line-height: 1;
    }

    .ve-message-loading .ve-message-icon svg,
    .ve-message-loading .ve-message-icon ::slotted(svg) {
      animation: ve-message-loading-circle var(--ve-message-loading-duration)
        infinite var(--ve-message-linear-easing);
    }

    .ve-message-content {
      flex: 1 1 auto;
      min-width: 0;
      color: var(--ve-message-current-color-content);
      font-size: var(--ve-message-font-size-content);
      font-weight: var(--ve-message-font-weight-content);
      line-height: var(--ve-message-line-height-content);
      word-break: break-word;
    }

    .ve-message-close-btn {
      display: inline-flex;
      flex: none;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      width: calc(
        var(--ve-message-close-icon-size) +
          var(--ve-message-close-icon-padding) * 2
      );
      height: calc(
        var(--ve-message-close-icon-size) +
          var(--ve-message-close-icon-padding) * 2
      );
      padding: var(--ve-message-close-icon-padding);
      color: var(--ve-message-close-icon-color);
      font: inherit;
      font-size: var(--ve-message-close-icon-size);
      line-height: 1;
      background: transparent;
      border: 0;
      border-radius: var(--ve-message-close-icon-hover-radius);
      cursor: pointer;
      transition:
        background-color var(--ve-message-fade-duration)
          var(--ve-message-linear-easing),
        color var(--ve-message-fade-duration) var(--ve-message-linear-easing);
    }

    .ve-message-multiline .ve-message-close-btn {
      margin-top: calc(
        (
            var(--ve-message-line-height-content) -
              (
                var(--ve-message-close-icon-size) +
                  var(--ve-message-close-icon-padding) * 2
              )
          ) /
          2
      );
    }

    .ve-message-close-btn:hover,
    .ve-message-close-btn:focus-visible {
      background-color: color-mix(
        in srgb,
        var(--ve-message-close-icon-hover-base) var(--state-hover-subtle-ratio),
        var(--state-hover-subtle-mix)
      );
    }

    .ve-message-close-btn slot,
    .ve-message-close-btn ::slotted(*) {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      color: inherit;
      line-height: 1;
    }

    .ve-message-close-btn ve-icon,
    .ve-message-close-btn svg,
    .ve-message-close-btn ::slotted(svg) {
      width: 1em;
      height: 1em;
      color: inherit;
    }

    @keyframes ve-message-fade {
      from {
        opacity: 0;
      }

      to {
        opacity: 1;
      }
    }

    @keyframes ve-message-scale {
      from {
        transform: scale(0);
      }

      to {
        transform: scale(1);
      }
    }

    @keyframes ve-message-loading-circle {
      100% {
        transform: rotate(360deg);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .ve-message,
      .ve-message-leaving,
      .ve-message-close-btn {
        transition: none;
      }

      .ve-message-icon,
      .ve-message-loading .ve-message-icon svg,
      .ve-message-loading .ve-message-icon ::slotted(svg) {
        animation: none;
      }
    }

    @supports not (color: color-mix(in srgb, red, blue)) {
      .ve-message-close-btn:hover,
      .ve-message-close-btn:focus-visible {
        background-color: var(--ve-message-close-icon-hover-base);
      }
    }
  `];function p(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var s=e[Symbol.toPrimitive];if(void 0!==s){var n=s.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function f(e){if(Object(e)!==e)throw TypeError("right-hand side of 'in' should be an object, got "+(null!==e?typeof e:"null"));return e}function b(e,t,s){"symbol"==typeof t&&(t=(t=t.description)?"["+t+"]":"");try{Object.defineProperty(e,"name",{configurable:!0,value:s?s+" "+t:t})}catch(n){}return e}let _,y,w,C,x,I,k,M,S,E,T,z,D,A,O,F,j,$,q,N,R,P,B,H,L,W,U,Z,V,J,Q,X,G,K,Y,ee,te,se,ne,oe,re,ie,ae,ce,le,ue,ve,he;const me="ve-message",ge="ve-close",de="ve-after-close",pe=["info","success","warning","error","loading"],fe=3e3,be={fromAttribute:e=>null===e||"false"!==e,toAttribute:e=>e?null:"false"};function _e(e,t){return Number.isFinite(e)&&e>=0?e:t}_=(0,l.MZ)({type:String,reflect:!0,useDefault:!0}),y=(0,l.MZ)({type:String,reflect:!0}),w=(0,l.MZ)({type:String,attribute:"message-id",reflect:!0}),C=(0,l.MZ)({type:String,reflect:!0,useDefault:!0}),x=(0,l.MZ)({attribute:"show-icon",reflect:!0,converter:be,useDefault:!0}),I=(0,l.MZ)({type:Boolean,reflect:!0}),k=(0,l.MZ)({type:Number,reflect:!0,useDefault:!0}),M=(0,l.MZ)({type:Number,attribute:"enter-duration",reflect:!0,useDefault:!0}),S=(0,l.MZ)({type:Number,attribute:"exit-duration",reflect:!0,useDefault:!0}),E=(0,l.P)('slot[name="icon"]'),T=(0,l.P)('slot[name="close-icon"]'),z=(0,l.P)(".ve-message-content"),D=(0,l.wk)(),A=(0,l.wk)(),O=(0,l.wk)(),F=(0,l.wk)();class ye extends u.IB{static{({e:[j,$,q,N,R,P,B,H,L,W,U,Z,V,J,Q,X,G,K,Y,ee,te,se,ne,oe,re,ie,ae,ce,le,ue,ve,he]}=function(e,t,s,n,o,r){var i,a,c,l,u,v,h,m=Symbol.metadata||Symbol.for("Symbol.metadata"),g=Object.defineProperty,d=Object.create,_=[d(null),d(null)],y=t.length;function w(t,s,n){return function(o,r){s&&(r=o,o=e);for(var i=0;i<t.length;i++)r=t[i].apply(o,n?[r]:[]);return n?r:o}}function C(e,t,s,n){if("function"!=typeof e&&(n||void 0!==e))throw new TypeError(t+" must "+(s||"be")+" a function"+(n?"":" or undefined"));return e}function x(e,t,s,n,o,r,c,l,u,v,h){function m(e){if(!h(e))throw new TypeError("Attempted to access private element on non-instance")}var d=[].concat(t[0]),p=t[3],f=!c,y=1===o,x=3===o,I=4===o,k=2===o;function M(t,s,n){return function(o,r){return s&&(r=o,o=e),n&&n(o),desc[t].call(o,r)}}var S={},E=[],T=x?"get":I||y?"set":"value";if(!f&&(u?(v||y?S={get:b(function(){return p(this)},n,"get"),set:function(e){t[4](this,e)}}:S[T]=p,v||b(S[T],n,k?"":T)):v||(S=Object.getOwnPropertyDescriptor(e,n)),!v&&!u)){if((a=_[+l][n])&&7!==(a^o))throw new Error("Decorating two elements with the same name ("+S[T].name+") is not supported yet");_[+l][n]=o<3?1:o}for(var z=e,D=d.length-1;D>=0;D-=s?2:1){var A=C(d[D],"A decorator","be",!0),O=s?d[D-1]:void 0,F={},j={kind:["field","accessor","method","getter","setter","class"][o],name:n,metadata:i,addInitializer:function(e,t){if(e.v)throw new TypeError("attempted to call addInitializer after decoration was finished");C(t,"An initializer","be",!0),r.push(t)}.bind(null,F)};if(f)a=A.call(O,z,j),F.v=1,C(a,"class decorators","return")&&(z=a);else if(j.static=l,j.private=u,a=j.access={has:u?h.bind():function(e){return n in e}},I||(a.get=u?k?function(e){return m(e),S.value}:M("get",0,m):function(e){return e[n]}),k||x||(a.set=u?M("set",0,m):function(e,t){e[n]=t}),z=A.call(O,y?{get:S.get,set:S.set}:S[T],j),F.v=1,y){if("object"==typeof z&&z)(a=C(z.get,"accessor.get"))&&(S.get=a),(a=C(z.set,"accessor.set"))&&(S.set=a),(a=C(z.init,"accessor.init"))&&E.unshift(a);else if(void 0!==z)throw new TypeError("accessor decorators must return an object with get, set, or init properties or undefined")}else C(z,(v?"field":"method")+" decorators","return")&&(v?E.unshift(z):S[T]=z)}return o<2&&c.push(w(E,l,1),w(r,l,0)),v||f||(u?y?c.splice(-1,0,M("get",l),M("set",l)):c.push(k?S[T]:C.call.bind(S[T])):g(e,n,S)),z}function I(e){return g(e,m,{configurable:!0,enumerable:!0,value:i})}return void 0!==r&&(i=r[m]),i=d(null==i?null:i),u=[],v=function(e){e&&u.push(w(e))},(h=function(t,n){for(var r=0;r<s.length;r++){var i=s[r],a=i[1],v=7&a;if((8&a)==t&&!v==n){var h=i[2],m=!!i[3],g=16&a;x(t?e:e.prototype,i,g,m?"#"+h:p(h),v,v<2?[]:t?l=l||[]:c=c||[],u,!!t,m,n,t&&m?function(t){return f(t)===e}:o)}}})(8,0),h(0,0),h(8,1),h(0,1),v(c),v(l),a=u,y||I(e),{e:a,get c(){var s=[];return y&&[I(e=x(e,[t],n,e.name,5,s)),w(s,1)]}}}(this,[],[[_,1,"type"],[y,1,"content"],[w,1,"messageId"],[C,1,"position"],[x,1,"showIcon"],[I,1,"closable"],[k,1,"duration"],[M,1,"enterDuration"],[S,1,"exitDuration"],[E,1,"iconSlot"],[T,1,"closeIconSlot"],[z,1,"contentElement"],[D,1,"hasIconSlot"],[A,1,"hasCloseIconSlot"],[O,1,"contentMultiline"],[F,1,"phase"]]))}static styles=d;static dependencies={[v.v]:v.O};#e=(()=>{const e=j(this,"info");return $(this),e})();get type(){return this.#e}set type(e){this.#e=e}#t=(()=>{const e=q(this,"");return N(this),e})();get content(){return this.#t}set content(e){this.#t=e}#s=(()=>{const e=R(this,"");return P(this),e})();get messageId(){return this.#s}set messageId(e){this.#s=e}#n=(()=>{const e=B(this,"top");return H(this),e})();get position(){return this.#n}set position(e){this.#n=e}#o=(()=>{const e=L(this,!0);return W(this),e})();get showIcon(){return this.#o}set showIcon(e){this.#o=e}#r=(()=>{const e=U(this,!1);return Z(this),e})();get closable(){return this.#r}set closable(e){this.#r=e}#i=(()=>{const e=V(this,fe);return J(this),e})();get duration(){return this.#i}set duration(e){this.#i=e}#a=(()=>{const e=Q(this,100);return X(this),e})();get enterDuration(){return this.#a}set enterDuration(e){this.#a=e}#c=(()=>{const e=G(this,300);return K(this),e})();get exitDuration(){return this.#c}set exitDuration(e){this.#c=e}#l=(()=>{const e=Y(this,null);return ee(this),e})();get iconSlot(){return this.#l}set iconSlot(e){this.#l=e}#u=(()=>{const e=te(this,null);return se(this),e})();get closeIconSlot(){return this.#u}set closeIconSlot(e){this.#u=e}#v=(()=>{const e=ne(this,null);return oe(this),e})();get contentElement(){return this.#v}set contentElement(e){this.#v=e}#h=(()=>{const e=re(this,!1);return ie(this),e})();get hasIconSlot(){return this.#h}set hasIconSlot(e){this.#h=e}#m=(()=>{const e=ae(this,!1);return ce(this),e})();get hasCloseIconSlot(){return this.#m}set hasCloseIconSlot(e){this.#m=e}#g=(()=>{const e=le(this,!1);return ue(this),e})();get contentMultiline(){return this.#g}set contentMultiline(e){this.#g=e}#d=(()=>{const e=ve(this,"entering");return he(this),e})();get phase(){return this.#d}set phase(e){this.#d=e}autoCloseTimer=null;enterFrame=null;closeOpacityTimer=null;closeCompleteTimer=null;hovering=!1;focusWithin=!1;lightDomSlotObserver;contentResizeObserver=null;observedContentElement=null;contentMeasureFrame=null;get normalizedType(){return pe.includes(this.type)?this.type:"info"}get normalizedEnterDuration(){return _e(this.enterDuration,100)}get normalizedExitDuration(){return _e(this.exitDuration,300)}get normalizedDuration(){return _e(this.duration,fe)}get shouldRenderIcon(){return!!this.showIcon}get messageRole(){return"error"===this.normalizedType||"warning"===this.normalizedType?"alert":"status"}get messageAriaLive(){return"status"===this.messageRole?"polite":"assertive"}get hasIconContent(){return this.hasIconSlot||(0,h.mh)(this,"icon")}get hasCloseIconContent(){return this.hasCloseIconSlot||(0,h.mh)(this,"close-icon")}connectedCallback(){super.connectedCallback(),this.observeLightDomSlots(),this.syncSlotState(),this.applyTransitionVariables()}firstUpdated(){this.syncSlotState(),this.observeContentElement(),this.scheduleEnter(),this.startTimer()}updated(e){this.observeContentElement(),e.has("content")&&this.scheduleContentMeasure(),e.has("duration")&&"entered"===this.phase&&this.restartTimer(),(e.has("enterDuration")||e.has("exitDuration"))&&this.applyTransitionVariables()}disconnectedCallback(){this.lightDomSlotObserver?.disconnect(),this.lightDomSlotObserver=void 0,this.contentResizeObserver?.disconnect(),this.contentResizeObserver=null,this.observedContentElement=null,this.cancelContentMeasure(),this.clearTimers(),super.disconnectedCallback()}restartTimer(){this.clearAutoCloseTimer(),this.syncAutoCloseTimer()}close(e){if("leaving"===this.phase||"closed"===this.phase)return;if(this.clearAutoCloseTimer(),this.clearCloseTimers(),!this.dispatchMessageEvent(ge,e))return void this.syncAutoCloseTimer();if(this.phase="leaving","u">typeof window&&"function"==typeof window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches)return void this.finishClose(e);const t=this.scrollHeight||this.getBoundingClientRect().height;this.style.height=`${t}px`,this.style.overflow="hidden",this.style.transition="none",this.getBoundingClientRect();const s=this.normalizedEnterDuration;this.closeOpacityTimer=window.setTimeout(()=>{this.closeOpacityTimer=null,this.style.transition=`height ${this.normalizedExitDuration}ms var(--ve-message-standard-easing)`,this.style.height="0px"},s),this.closeCompleteTimer=window.setTimeout(()=>{this.closeCompleteTimer=null,this.finishClose(e)},s+this.normalizedExitDuration)}applyTransitionVariables(){this.style.setProperty("--ve-message-enter-duration",`${this.normalizedEnterDuration}ms`),this.style.setProperty("--ve-message-fade-duration",`${this.normalizedEnterDuration}ms`),this.style.setProperty("--ve-message-exit-duration",`${this.normalizedExitDuration}ms`)}scheduleEnter(){this.cancelEnterFrame(),this.phase="entering",this.enterFrame=window.requestAnimationFrame(()=>{this.enterFrame=null,"entering"===this.phase&&(this.phase="entered")})}startTimer(){if(0===this.duration||"leaving"===this.phase||"closed"===this.phase)return;if(null!==this.autoCloseTimer)return;const e=this.normalizedDuration;this.autoCloseTimer=window.setTimeout(()=>{this.autoCloseTimer=null,this.close()},e)}clearAutoCloseTimer(){null!==this.autoCloseTimer&&(window.clearTimeout(this.autoCloseTimer),this.autoCloseTimer=null)}clearCloseTimers(){null!==this.closeOpacityTimer&&(window.clearTimeout(this.closeOpacityTimer),this.closeOpacityTimer=null),null!==this.closeCompleteTimer&&(window.clearTimeout(this.closeCompleteTimer),this.closeCompleteTimer=null)}cancelEnterFrame(){null!==this.enterFrame&&(window.cancelAnimationFrame(this.enterFrame),this.enterFrame=null)}clearTimers(){this.clearAutoCloseTimer(),this.clearCloseTimers(),this.cancelEnterFrame()}syncAutoCloseTimer(){this.hovering||this.focusWithin?this.clearAutoCloseTimer():this.startTimer()}isMessageNode(e){return e instanceof Node&&(this.contains(e)||this.renderRoot.contains(e))}syncSlotState(){this.hasIconSlot=(0,h.qi)(this.iconSlot)||(0,h.mh)(this,"icon"),this.hasCloseIconSlot=(0,h.qi)(this.closeIconSlot)||(0,h.mh)(this,"close-icon")}observeContentElement(){"u"<typeof ResizeObserver?this.scheduleContentMeasure():(this.contentResizeObserver??=new ResizeObserver(()=>{this.syncContentMultiline()}),this.observedContentElement!==this.contentElement&&(this.observedContentElement&&this.contentResizeObserver.unobserve(this.observedContentElement),this.observedContentElement=this.contentElement,this.observedContentElement&&this.contentResizeObserver.observe(this.observedContentElement),this.scheduleContentMeasure()))}scheduleContentMeasure(){"u"<typeof window||"function"!=typeof window.requestAnimationFrame?this.syncContentMultiline():null===this.contentMeasureFrame&&(this.contentMeasureFrame=window.requestAnimationFrame(()=>{this.contentMeasureFrame=null,this.syncContentMultiline()}))}cancelContentMeasure(){null===this.contentMeasureFrame||"u"<typeof window||"function"!=typeof window.cancelAnimationFrame||window.cancelAnimationFrame(this.contentMeasureFrame),this.contentMeasureFrame=null}syncContentMultiline(){if(!this.contentElement||"u"<typeof getComputedStyle)return void(this.contentMultiline=!1);const e=Number.parseFloat(getComputedStyle(this.contentElement).lineHeight),t=this.contentElement.getBoundingClientRect().height,s=Number.isFinite(e)&&e>0&&t>1.5*e;this.contentMultiline!==s&&(this.contentMultiline=s)}observeLightDomSlots(){"u"<typeof MutationObserver||this.lightDomSlotObserver||(this.lightDomSlotObserver=new MutationObserver(()=>{this.syncSlotState(),this.scheduleContentMeasure()}),this.lightDomSlotObserver.observe(this,{childList:!0,subtree:!1,attributes:!0,attributeFilter:["slot"]}))}handleSlotChange(){this.syncSlotState(),this.scheduleContentMeasure()}handleMouseEnter(){this.hovering=!0,this.syncAutoCloseTimer()}handleMouseLeave(){this.hovering=!1,this.syncAutoCloseTimer()}handleFocusIn(){this.focusWithin=!0,this.syncAutoCloseTimer()}handleFocusOut(e){this.isMessageNode(e.relatedTarget)||(this.focusWithin=!1,this.syncAutoCloseTimer())}handleClose(e){this.close(e)}createCloseDetail(e){const t={type:this.normalizedType};return this.messageId&&(t.id=this.messageId),e&&(t.sourceEvent=e),t}dispatchMessageEvent(e,t){return this.dispatchEvent(new CustomEvent(e,{detail:this.createCloseDetail(t),bubbles:!0,composed:!0,cancelable:e===ge}))}finishClose(e){this.phase="closed",this.style.removeProperty("height"),this.style.removeProperty("overflow"),this.style.removeProperty("transition"),this.dispatchMessageEvent(de,e)}renderDefaultIcon(){switch(this.normalizedType){case"success":return a.qy`
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="m7.95 12 2.7 2.7 5.4-5.4M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
            ></path>
          </svg>
        `;case"warning":return a.qy`
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M12 8v5m0 3v.1M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
            ></path>
          </svg>
        `;case"error":return a.qy`
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="m14.7 9.3-5.4 5.4m0-5.4 5.4 5.4M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
            ></path>
          </svg>
        `;case"loading":return a.qy`
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0"
              opacity=".3"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
            ></path>
            <path
              d="M21 12a9 9 0 0 1-9 9"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
            ></path>
          </svg>
        `;default:return a.qy`
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M12 11v5m0 5a9 9 0 1 1 0-18 9 9 0 0 1 0 18m.05-13v.1h-.1V8z"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
            ></path>
          </svg>
        `}}renderIcon(){return this.shouldRenderIcon?a.qy`
      <span class="ve-message-icon" part="icon" aria-hidden="true">
        <slot name="icon" @slotchange=${this.handleSlotChange}></slot>
        ${this.hasIconContent?a.s6:this.renderDefaultIcon()}
      </span>
    `:a.s6}renderCloseIcon(){return a.qy`
      <slot name="close-icon" @slotchange=${this.handleSlotChange}></slot>
      ${this.hasCloseIconContent?a.s6:a.qy`<ve-icon
            .definition=${m.u}
            size="var(--ve-message-close-icon-size)"
          ></ve-icon>`}
    `}render(){if("closed"===this.phase)return a.s6;const e=(0,c.H)({"ve-message":!0,[`ve-message-${this.normalizedType}`]:!0,"ve-message-multiline":this.contentMultiline,"ve-message-closable":this.closable,"ve-message-entered":"entered"===this.phase,"ve-message-leaving":"leaving"===this.phase});return a.qy`<div
      class=${e}
      part="message"
      role=${this.messageRole}
      aria-live=${this.messageAriaLive}
      @mouseenter=${this.handleMouseEnter}
      @mouseleave=${this.handleMouseLeave}
      @focusin=${this.handleFocusIn}
      @focusout=${this.handleFocusOut}
    >
      ${this.renderIcon()}
      <div class="ve-message-content" part="content">
        <slot @slotchange=${this.handleSlotChange}>${this.content}</slot>
      </div>
      ${this.closable?a.qy`<button
            type="button"
            class="ve-message-close-btn"
            part="close-button"
            aria-label="Close message"
            @click=${this.handleClose}
          >
            ${this.renderCloseIcon()}
          </button>`:a.s6}
    </div>`}}(0,u.Xq)(me,ye);let we={};const Ce=new WeakMap,xe=new WeakMap,Ie=new WeakMap;function ke(e){return"u">typeof Node&&e instanceof Node}function Me(e,t){var s;return{..."string"==typeof(s=t)||"function"==typeof s||ke(s)?{content:t}:t,type:e}}function Se(){return"u">typeof document?document.body:null}function Ee(e){return e instanceof Element?e.getAttribute("slot")??"":""}function Te(e,t){for(const s of Array.from(e.childNodes))Ee(s)===t&&s.remove()}function ze(e,t){if(!ke(e)){const s=document.createElement("span");return s.textContent=e,t&&(s.slot=t),s}if(!t)return e instanceof Element&&e.removeAttribute("slot"),e;if(e instanceof Element)return e.setAttribute("slot",t),e;const s=document.createElement("span");return s.slot=t,s.appendChild(e),s}function De(e,t,s){Te(e,t),void 0!==s&&e.appendChild(ze(s,t))}function Ae(e){const t=xe.get(e);t&&(xe.delete(e),t())}function Oe(e,t,s){e.type=t.type??"info",e.position=t.position??"top",e.messageId=t.id??s,e.duration=t.duration??fe,e.showIcon=t.showIcon??!0,e.closable=t.closable??!1,e.enterDuration=100,e.exitDuration=300,function(e,t){if(Ae(e),"string"==typeof t)return Te(e,""),void(e.content=t);if(e.content="",Te(e,""),"function"!=typeof t)return void e.appendChild(ze(t,""));const s=document.createElement("div");e.appendChild(s);const n=t(s,{element:e,close:()=>e.close()});"function"!=typeof n?"string"!=typeof n?ke(n)&&s.appendChild(n):s.textContent=n:xe.set(e,n)}(e,t.content),De(e,"icon",t.icon),De(e,"close-icon",t.closeIcon)}function Fe(e){e.holder.childElementCount>0||(e.holder.remove(),we[e.position]===e&&delete we[e.position])}function je(e,t){e.messages=e.messages.filter(e=>e!==t)}function $e(e){const t=function(e){const t=Se();if(!t)return null;const s=we[e];if(s&&s.container===t)return s;const n=document.createElement("div");!function(e,t){e.className=`ve-message-wrapper ve-message-wrapper-${t}`,e.dataset.veMessagePosition=t,e.style.width="100%",e.style.position="fixed",e.style.zIndex="var(--ve-message-z-index, var(--z-index-message, 1003))",e.style.padding="0 var(--ve-message-wrapper-padding-inline, 12px)",e.style.textAlign="center",e.style.pointerEvents="none",e.style.boxSizing="border-box",e.style.left="0","top"===t?(e.style.top="var(--ve-message-wrapper-margin-top, 40px)",e.style.bottom=""):(e.style.top="",e.style.bottom="var(--ve-message-wrapper-margin-bottom, 40px)")}(n,e),t.appendChild(n);const o={holder:n,messages:[],container:t,position:e};return we[e]=o,o}(e.position??"top");if(!t)return()=>{};const s=e.id?function(e){for(const t of Object.values(we)){const s=t.messages.find(t=>t.messageId===e);if(s)return{record:t,message:s}}return null}(e.id):null;if(s)return function(e,t,s){t!==s&&(je(t,e),s.messages.push(e),Ie.set(e,s),s.holder.appendChild(e),Fe(t))}(s.message,s.record,t),Oe(s.message,e,s.message.messageId),Ce.set(s.message,e.onClose),s.message.restartTimer(),()=>s.message.close();const n=document.createElement(me),o=e.id??("u">typeof crypto&&"function"==typeof crypto.randomUUID?`ve_notice_id_${crypto.randomUUID()}`:`ve_notice_id_${Math.random().toFixed(10).slice(2)}`);return Oe(n,e,o),Ce.set(n,e.onClose),n.addEventListener(de,()=>{const e=Ie.get(n);e?function(e,t){je(e,t),Ie.delete(t),Ae(t),t.remove(),Fe(e)}(e,n):n.remove();const t=Ce.get(n);Ce.delete(n),t?.()},{once:!0}),t.messages.push(n),Ie.set(n,t),t.holder.appendChild(n),()=>n.close()}const qe={info:e=>$e(Me("info",e)),success:e=>$e(Me("success",e)),warning:e=>$e(Me("warning",e)),error:e=>$e(Me("error",e)),loading:e=>$e(Me("loading",e)),addInstance:e=>$e(e),clear(){!function(){for(const e of Object.values(we))for(const t of[...e.messages])t.close()}()}};var Ne=s(74410);const Re="ve-react-message-renderer",Pe=(0,r.a)({tagName:me,elementClass:ye,react:o,events:{onClose:"ve-close",onAfterClose:"ve-after-close"}});function Be(){return"u">typeof document}function He(e){return"u">typeof Node&&e instanceof Node}function Le(e){return null!=e&&"boolean"!=typeof e}function We(){"u"<typeof customElements||"u"<typeof HTMLElement||customElements.get(Re)||customElements.define(Re,class extends HTMLElement{root;content=null;set reactContent(e){this.content=e,this.renderContent()}get reactContent(){return this.content}connectedCallback(){this.style.display||="contents",this.renderContent()}disconnectedCallback(){queueMicrotask(()=>{this.isConnected||(this.root?.unmount(),this.root=void 0)})}renderContent(){this.isConnected&&(this.root??=(0,i.H)(this),this.root.render(n.createElement(n.Fragment,null,this.content)))}})}function Ue(e){return Le(e)?"string"==typeof(t=e)||"number"==typeof t||"bigint"==typeof t?String(e):He(e)?e:function(e){We();const t=document.createElement(Re);return t.reactContent=e,t}(e):"";var t}function Ze(e){return"string"==typeof e||"function"==typeof e||He(e)?"function"!=typeof e?e:(t,s)=>{return void 0===(n=e(t,s))||"function"==typeof n||"string"==typeof n||He(n)?n:Ue(n);var n}:Ue(e)}function Ve(e){if(Le(e))return Ue(e)}function Je(e){const{content:t,icon:s,closeIcon:n,...o}=e,r={...o,content:Ze(t)},i=Ve(s),a=Ve(n);return void 0!==i&&(r.icon=i),void 0!==a&&(r.closeIcon=a),r}function Qe(e,t){if(!Be())return()=>{};const s="object"!=typeof(o=t)||null===o||Array.isArray(o)||He(o)||n.isValidElement(o)||!("content"in o)?{content:Ze(t)}:Je(t);var o;return qe.addInstance({...s,type:e})}const Xe=n.forwardRef(({content:e,icon:t,closeIcon:s,children:o,...r},i)=>{const a=(0,Ne.Vx)(e)?String(e):void 0,c=void 0===a?e:void 0;return n.createElement(Pe,{...r,...void 0===a?{}:{content:a},ref:i},(0,Ne.M2)([["icon",t],["close-icon",s]]),c??o)}),Ge=Object.assign(Xe,{info:e=>Qe("info",e),success:e=>Qe("success",e),warning:e=>Qe("warning",e),error:e=>Qe("error",e),loading:e=>Qe("loading",e),addInstance:e=>Be()?qe.addInstance(Je(e)):()=>{},clear(){qe.clear()}});Ge.displayName="Message"},39638(e,t,s){s.r(t);var n=s(24913),o=s(86913);const r={name:"chart",svg:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.5 4.5h15m-15 0v10.455c0 1.004.814 1.818 1.818 1.818h11.364a1.82 1.82 0 0 0 1.818-1.819V4.5m-15 0H22h-2.5m-15 0H2m10 3.636v5m-3.41-1.363v1.363m6.82-3.181v3.181m-3.108 4.092 1.515 2.272m-2.12-2.272L10.182 19.5"/></svg>\n'};(0,n.W)(),(0,o.pU)(r),s.d(t,["chartIcon",0,r])},12080(e,t,s){s.r(t);var n=s(24913),o=s(86913);const r={name:"play-square",svg:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.5 8.965c0-.477 0-.716.1-.849a.5.5 0 0 1 .364-.199c.166-.012.367.117.769.375l4.72 3.035c.349.224.523.336.583.478a.5.5 0 0 1 0 .39c-.06.142-.234.254-.583.478l-4.72 3.035c-.402.258-.603.387-.769.375a.5.5 0 0 1-.364-.2c-.1-.132-.1-.371-.1-.848z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 7.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C5.28 3 6.12 3 7.8 3h8.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C21 5.28 21 6.12 21 7.8v8.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 21 17.88 21 16.2 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 18.72 3 17.88 3 16.2z"/></svg>\n'};(0,n.W)(),(0,o.pU)(r),s.d(t,["playSquareIcon",0,r])},34524(e,t,s){s.r(t);var n=s(24913),o=s(86913);const r={name:"terminal",svg:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m7 15 3-3-3-3m6 6h4m-9.2 6h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 18.72 21 17.88 21 16.2V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 3 17.88 3 16.2 3H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.28 3 6.12 3 7.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 21 6.12 21 7.8 21"/></svg>\n'};(0,n.W)(),(0,o.pU)(r),s.d(t,["terminalIcon",0,r])},70944(e,t,s){s.r(t);var n=s(24913),o=s(86913);const r={name:"trash-03",svg:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 3h6M3 6h18m-2 0-.701 10.52c-.105 1.578-.158 2.367-.499 2.965a3 3 0 0 1-1.298 1.215c-.62.3-1.41.3-2.993.3h-3.018c-1.582 0-2.373 0-2.993-.3A3 3 0 0 1 6.2 19.485c-.34-.598-.394-1.387-.499-2.966L5 6m5 4.5v5m4-5v5"/></svg>\n'};(0,n.W)(),(0,o.pU)(r),s.d(t,["trash03Icon",0,r])}}]);