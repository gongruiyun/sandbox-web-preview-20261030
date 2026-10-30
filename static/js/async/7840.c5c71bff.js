/*! For license information please see 7840.c5c71bff.js.LICENSE.txt */
"use strict";(self.webpackChunksandbox_web=self.webpackChunksandbox_web||[]).push([[448,1093,1909,2109,3152,3254,3449,3793,4006,4166,5249,6832,7840,7894,8110,8597,9040,9625,9769],{58738(e,t,r){var n=r(30758);const o=function(e){var t=(0,n.useRef)();return t.current=e,(0,n.useCallback)(function(){var e=t.current;return e&&e.apply(void 0,arguments)},[t])};r.d(t,["A",0,o])},88875(e,t,r){r.d(t,{$:()=>d});var n=r(30758),o=r.t(n,2),i=r(46140),a=r(444);(0,r(94023).Xq)(a.I,a.c);var s=r(74410);const l=(0,i.a)({tagName:a.I,elementClass:a.c,react:o,events:{onClick:"click"}}),c={width:"var(--ve-button-icon-size)",height:"var(--ve-button-icon-size)"},d=n.forwardRef(({icon:e,children:t,...r},o)=>n.createElement(l,{...r,ref:o},(e=>(0,s.ns)(e)?n.isValidElement(e)&&"string"==typeof e.type?n.cloneElement(e,{slot:"icon"}):n.createElement("span",{slot:"icon",style:c},e):null)(e),t));d.displayName="Button"},67978(e,t,r){r.d(t,{ms:()=>Vt,tJ:()=>Ft});var n=r(30758),o=r.t(n,2),i=r(45080),a=r(61834),s=r(67286),l=r(94023),c=r(17400),d=r(43449),u=r(87907),v=r(7624);const h=i.AH`
  :host {
    --ve-dropdown-z-index: 1000;
    --ve-dropdown-offset: var(--space-xxxs);

    --ve-dropdown-min-width: 200px;
    --ve-dropdown-max-width: min(400px, calc(100vw - var(--space-xxs)));
    --ve-dropdown-max-height: none;
    --ve-dropdown-padding-block: var(--space-xxs);
    --ve-dropdown-padding-inline: var(--space-xxs);
    --ve-dropdown-radius: var(--radius-lg);
    --ve-dropdown-border-width: var(--stroke-0_5);
    --ve-dropdown-border-color: var(--color-border-default);
    --ve-dropdown-background: var(--color-bg-overlay);
    --ve-dropdown-shadow: var(--shadow-md);
    --ve-dropdown-menu-gap: 0px;

    --ve-dropdown-trigger-focus-ring: var(--color-text-accent);
    --ve-dropdown-disabled-opacity: var(--state-disabled-ratio);
    --ve-dropdown-enter-offset: var(--space-xxxs);

    --ve-dropdown-item-min-height: 38px;
    --ve-dropdown-item-padding-block: var(--space-xxs);
    --ve-dropdown-item-padding-inline: var(--space-xxs);
    --ve-dropdown-item-font-size: var(--text-body);
    --ve-dropdown-item-font-weight: var(--font-weight-normal);
    --ve-dropdown-item-label-line-height: 22px;
    --ve-dropdown-item-radius: var(--radius-md);
    --ve-dropdown-item-gap: var(--space-xxs);
    --ve-dropdown-item-color: var(--color-text-primary);
    --ve-dropdown-item-danger-color: var(--color-text-danger);
    --ve-dropdown-item-disabled-color: var(--color-text-disable);
    --ve-dropdown-item-extra-color: var(--color-text-tertiary);
    --ve-dropdown-item-extra-margin-inline-start: var(--space-xs);
    --ve-dropdown-item-selected-icon-color: currentColor;
    --ve-dropdown-item-selected-icon-size: 16px;
    --ve-dropdown-item-indicator-size: 16px;
    --ve-dropdown-item-selected-bg: transparent;
    --ve-dropdown-item-hover-bg: var(--color-bg-surface);
    --ve-dropdown-item-active-bg: color-mix(
      in srgb,
      var(--color-bg-overlay) var(--state-hover-subtle-ratio),
      var(--state-hover-subtle-mix)
    );
    --ve-dropdown-item-danger-surface: color-mix(
      in srgb,
      var(--color-bg-overlay) 92%,
      var(--color-bg-danger)
    );
    --ve-dropdown-item-danger-hover-bg: color-mix(
      in srgb,
      var(--ve-dropdown-item-danger-surface) var(--state-hover-subtle-ratio),
      var(--state-hover-subtle-mix)
    );
    --ve-dropdown-item-danger-active-bg: color-mix(
      in srgb,
      var(--ve-dropdown-item-danger-surface) var(--state-pressed-subtle-ratio),
      var(--state-pressed-subtle-mix)
    );
    --ve-dropdown-item-focus-shadow: 0 0 0 var(--stroke-2)
      var(--color-bg-primary) inset;
    --ve-dropdown-item-checkbox-size: 16px;
    --ve-dropdown-item-checkbox-border-width: var(
      --ve-checkbox-mask-border-width,
      var(--stroke-weight-strong)
    );
    --ve-dropdown-item-checkbox-radius: var(--radius-xs);
    --ve-dropdown-item-checkbox-border-color: var(--color-border-strong);
    --ve-dropdown-item-checkbox-background: var(--color-bg-base);
    --ve-dropdown-item-checkbox-check-color: var(--color-text-foreground);
    --ve-dropdown-item-checkbox-check-width: 8px;
    --ve-dropdown-item-checkbox-check-height: 5px;
    --ve-dropdown-item-checkbox-check-stroke: 2px;
    --ve-dropdown-item-checkbox-selected-border-color: var(
      --ve-checkbox-mask-color-border-checked,
      transparent
    );
    --ve-dropdown-item-checkbox-selected-background: var(
      --ve-checkbox-mask-color-bg-checked,
      var(--color-bg-primary)
    );
    --ve-dropdown-item-switch-width: 24px;
    --ve-dropdown-item-switch-height: 14px;
    --ve-dropdown-item-switch-border-width: var(--stroke-0_5);
    --ve-dropdown-item-switch-radius: 99px;
    --ve-dropdown-item-switch-border-color: var(--color-border-default);
    --ve-dropdown-item-switch-background: var(--color-bg-muted);
    --ve-dropdown-item-switch-selected-border-color: var(--color-bg-primary);
    --ve-dropdown-item-switch-selected-background: var(--color-bg-primary);
    --ve-dropdown-item-switch-thumb-size: 10px;
    --ve-dropdown-item-switch-thumb-offset: 1.5px;
    --ve-dropdown-item-switch-thumb-background-unchecked: var(--color-white);
    --ve-dropdown-item-switch-thumb-background-checked: var(
      --color-text-foreground
    );
    --ve-dropdown-item-switch-current-thumb-background: var(
      --ve-dropdown-item-switch-thumb-background-unchecked
    );
    --ve-dropdown-item-switch-thumb-shadow: 0 1px 2px rgba(16, 16, 19, 0.18);

    --ve-dropdown-group-title-padding-block: 0px;
    --ve-dropdown-group-title-padding-inline: var(--space-xs);
    --ve-dropdown-group-title-margin-top: var(--space-xxxs);
    --ve-dropdown-group-title-height: 20px;
    --ve-dropdown-group-title-color: var(--color-text-tertiary);
    --ve-dropdown-group-title-font-size: var(--text-caption);
    --ve-dropdown-group-title-line-height: var(
      --ve-dropdown-group-title-height
    );
    --ve-dropdown-group-title-font-weight: var(--font-weight-normal);
    --ve-dropdown-group-gap: 0px;

    --ve-dropdown-divider-margin-block: var(--space-xxxs);
    --ve-dropdown-divider-margin-inline: var(--space-xxxs);
    --ve-dropdown-divider-width: var(--stroke-0_5);
    --ve-dropdown-divider-color: var(--color-border-default);
    --ve-dropdown-sub-item-gap: var(--space-xxxs);
    --ve-dropdown-sub-item-arrow-color: var(--ve-dropdown-item-extra-color);
    --ve-dropdown-sub-item-arrow-size: 16px;
    --ve-dropdown-sub-item-arrow-icon-size: 6px;
    --ve-dropdown-sub-item-arrow-stroke: var(--stroke-weight-strong);
    --ve-dropdown-sub-item-arrow-offset-y: 0px;

    --ve-dropdown-transition-duration: var(--motion-fast);
    --ve-dropdown-transition-easing: cubic-bezier(0.34, 0.69, 0.1, 1);
    --ve-dropdown-current-transform-origin: 0% 0%;

    --ve-dropdown-current-enter-transform: translate3d(
      0,
      var(--ve-dropdown-enter-offset),
      0
    );
  }

  :host([selected]) {
    --ve-dropdown-item-switch-current-thumb-background: var(
      --ve-dropdown-item-switch-thumb-background-checked
    );
  }

  @supports not (color: color-mix(in srgb, red, blue)) {
    :host {
      --ve-dropdown-item-active-bg: var(--color-bg-overlay);
      --ve-dropdown-item-danger-surface: var(--color-bg-overlay);
      --ve-dropdown-item-danger-hover-bg: var(--ve-dropdown-item-danger-surface);
      --ve-dropdown-item-danger-active-bg: var(
        --ve-dropdown-item-danger-surface
      );
    }
  }
`,p=[l.H6,h,i.AH`
    :host {
      display: block;
    }

    :host([hidden]) {
      display: none;
    }

    .ve-dropdown-item {
      appearance: none;
      display: flex;
      align-items: center;
      justify-content: space-between;
      inline-size: 100%;
      min-block-size: var(--ve-dropdown-item-min-height);
      box-sizing: border-box;
      padding-block: var(--ve-dropdown-item-padding-block);
      padding-inline: var(--ve-dropdown-item-padding-inline);
      gap: var(--ve-dropdown-item-gap);
      border: none;
      border-radius: var(--ve-dropdown-item-radius);
      background: transparent;
      color: var(--ve-dropdown-item-color);
      font-family: var(--font-sans);
      font-size: var(--ve-dropdown-item-font-size);
      font-weight: var(--ve-dropdown-item-font-weight);
      line-height: var(--ve-dropdown-item-label-line-height);
      text-align: left;
      cursor: pointer;
      z-index: 1;
      transition:
        background-color var(--ve-dropdown-transition-duration)
          var(--ve-dropdown-transition-easing),
        color var(--ve-dropdown-transition-duration)
          var(--ve-dropdown-transition-easing);
    }

    .ve-dropdown-item-content {
      min-inline-size: 0;
      display: block;
      flex: 1;
      overflow: hidden;
      text-align: left;
    }

    .ve-dropdown-item-extra {
      display: inline-flex;
      align-items: center;
      gap: var(--space-xxs);
      flex: none;
      color: var(--ve-dropdown-item-extra-color);
      margin-inline-start: var(--ve-dropdown-item-extra-margin-inline-start);
      min-block-size: var(--ve-dropdown-item-label-line-height);
    }

    .ve-dropdown-item-check {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      inline-size: var(--ve-dropdown-item-indicator-size);
      block-size: var(--ve-dropdown-item-indicator-size);
      color: var(--ve-dropdown-item-selected-icon-color);
      font-size: var(--ve-dropdown-item-selected-icon-size);
      line-height: 1;
    }

    .ve-dropdown-item-checkbox {
      position: relative;
      box-sizing: border-box;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      inline-size: var(--ve-dropdown-item-checkbox-size);
      block-size: var(--ve-dropdown-item-checkbox-size);
      flex: none;
      border: var(--ve-dropdown-item-checkbox-border-width) solid
        var(--ve-dropdown-item-checkbox-border-color);
      border-radius: var(--ve-dropdown-item-checkbox-radius);
      background: var(--ve-dropdown-item-checkbox-background);
      color: var(--ve-dropdown-item-checkbox-check-color);
      transition:
        background-color var(--ve-dropdown-transition-duration)
          var(--ve-dropdown-transition-easing),
        border-color var(--ve-dropdown-transition-duration)
          var(--ve-dropdown-transition-easing);
    }

    .ve-dropdown-item-checkbox::after {
      content: '';
      display: none;
      inline-size: var(--ve-dropdown-item-checkbox-check-width);
      block-size: var(--ve-dropdown-item-checkbox-check-height);
      border-color: currentColor;
      border-style: solid;
      border-width: 0 0 var(--ve-dropdown-item-checkbox-check-stroke)
        var(--ve-dropdown-item-checkbox-check-stroke);
      transform: rotate(-45deg) translateY(-1px);
      transform-origin: center;
    }

    .ve-dropdown-item-switch {
      box-sizing: border-box;
      position: relative;
      display: inline-flex;
      align-items: center;
      inline-size: var(--ve-dropdown-item-switch-width);
      block-size: var(--ve-dropdown-item-switch-height);
      flex: none;
      border: var(--ve-dropdown-item-switch-border-width) solid
        var(--ve-dropdown-item-switch-border-color);
      border-radius: var(--ve-dropdown-item-switch-radius);
      background: var(--ve-dropdown-item-switch-background);
      transition:
        background-color var(--ve-dropdown-transition-duration)
          var(--ve-dropdown-transition-easing),
        border-color var(--ve-dropdown-transition-duration)
          var(--ve-dropdown-transition-easing);
    }

    .ve-dropdown-item-switch-thumb {
      position: absolute;
      inset-block-start: var(--ve-dropdown-item-switch-thumb-offset);
      inset-inline-start: var(--ve-dropdown-item-switch-thumb-offset);
      inline-size: var(--ve-dropdown-item-switch-thumb-size);
      block-size: var(--ve-dropdown-item-switch-thumb-size);
      border-radius: 50%;
      background: var(--ve-dropdown-item-switch-current-thumb-background);
      box-shadow: var(--ve-dropdown-item-switch-thumb-shadow);
      transition: inset-inline-start var(--ve-dropdown-transition-duration)
        var(--ve-dropdown-transition-easing);
    }

    :host([selected]) .ve-dropdown-item-checkbox {
      border-color: var(--ve-dropdown-item-checkbox-selected-border-color);
      background: var(--ve-dropdown-item-checkbox-selected-background);
    }

    :host([selected]) .ve-dropdown-item-checkbox::after {
      display: block;
    }

    :host([selected]) .ve-dropdown-item-switch {
      border-color: var(--ve-dropdown-item-switch-selected-border-color);
      background: var(--ve-dropdown-item-switch-selected-background);
    }

    :host([selected]) .ve-dropdown-item-switch-thumb {
      inset-inline-start: calc(
        var(--ve-dropdown-item-switch-width) - var(
            --ve-dropdown-item-switch-thumb-size
          ) - var(--ve-dropdown-item-switch-thumb-offset) - var(
            --ve-dropdown-item-switch-border-width
          ) *
          2
      );
    }

    .ve-dropdown-item-check[hidden] {
      display: none;
    }

    .ve-dropdown-item.is-selected {
      background: var(--ve-dropdown-item-selected-bg);
    }

    .ve-dropdown-item:hover,
    .ve-dropdown-item:focus-visible {
      background: var(--ve-dropdown-item-hover-bg);
    }

    .ve-dropdown-item:active {
      background: var(--ve-dropdown-item-active-bg);
    }

    .ve-dropdown-item:focus-visible {
      outline: none;
    }

    :host([danger]) .ve-dropdown-item {
      color: var(--ve-dropdown-item-danger-color);
    }

    :host([danger]) .ve-dropdown-item:hover,
    :host([danger]) .ve-dropdown-item:focus-visible {
      background: var(--ve-dropdown-item-danger-hover-bg);
    }

    :host([danger]) .ve-dropdown-item:active {
      background: var(--ve-dropdown-item-danger-active-bg);
    }

    :host([disabled]) .ve-dropdown-item,
    :host([disabled]) .ve-dropdown-item:hover,
    :host([disabled]) .ve-dropdown-item:active,
    :host([disabled]) .ve-dropdown-item:focus-visible {
      color: var(--ve-dropdown-item-disabled-color);
      background: transparent;
      cursor: not-allowed;
      opacity: var(--ve-dropdown-disabled-opacity);
      pointer-events: none;
    }
  `];function g(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function b(e){if(Object(e)!==e)throw TypeError("right-hand side of 'in' should be an object, got "+(null!==e?typeof e:"null"));return e}function m(e,t,r){"symbol"==typeof t&&(t=(t=t.description)?"["+t+"]":"");try{Object.defineProperty(e,"name",{configurable:!0,value:r?r+" "+t:t})}catch(n){}return e}let f,_,w,y,x,k,S,C,z,E,O,M,A,I,P,T,$,R;const D="ve-dropdown-item";f=(0,a.MZ)({type:String}),_=(0,a.MZ)({type:Boolean,reflect:!0}),w=(0,a.MZ)({type:Boolean,reflect:!0}),y=(0,a.MZ)({type:Boolean,reflect:!0}),x=(0,a.MZ)({type:String,reflect:!0,useDefault:!0}),k=(0,a.P)(".ve-dropdown-item");class F extends l.IB{static{({e:[S,C,z,E,O,M,A,I,P,T,$,R]}=function(e,t,r,n,o,i){var a,s,l,c,d,u,v,h=Symbol.metadata||Symbol.for("Symbol.metadata"),p=Object.defineProperty,f=Object.create,_=[f(null),f(null)],w=t.length;function y(t,r,n){return function(o,i){r&&(i=o,o=e);for(var a=0;a<t.length;a++)i=t[a].apply(o,n?[i]:[]);return n?i:o}}function x(e,t,r,n){if("function"!=typeof e&&(n||void 0!==e))throw new TypeError(t+" must "+(r||"be")+" a function"+(n?"":" or undefined"));return e}function k(e,t,r,n,o,i,l,c,d,u,v){function h(e){if(!v(e))throw new TypeError("Attempted to access private element on non-instance")}var g=[].concat(t[0]),b=t[3],f=!l,w=1===o,k=3===o,S=4===o,C=2===o;function z(t,r,n){return function(o,i){return r&&(i=o,o=e),n&&n(o),desc[t].call(o,i)}}var E={},O=[],M=k?"get":S||w?"set":"value";if(!f&&(d?(u||w?E={get:m(function(){return b(this)},n,"get"),set:function(e){t[4](this,e)}}:E[M]=b,u||m(E[M],n,C?"":M)):u||(E=Object.getOwnPropertyDescriptor(e,n)),!u&&!d)){if((s=_[+c][n])&&7!==(s^o))throw new Error("Decorating two elements with the same name ("+E[M].name+") is not supported yet");_[+c][n]=o<3?1:o}for(var A=e,I=g.length-1;I>=0;I-=r?2:1){var P=x(g[I],"A decorator","be",!0),T=r?g[I-1]:void 0,$={},R={kind:["field","accessor","method","getter","setter","class"][o],name:n,metadata:a,addInitializer:function(e,t){if(e.v)throw new TypeError("attempted to call addInitializer after decoration was finished");x(t,"An initializer","be",!0),i.push(t)}.bind(null,$)};if(f)s=P.call(T,A,R),$.v=1,x(s,"class decorators","return")&&(A=s);else if(R.static=c,R.private=d,s=R.access={has:d?v.bind():function(e){return n in e}},S||(s.get=d?C?function(e){return h(e),E.value}:z("get",0,h):function(e){return e[n]}),C||k||(s.set=d?z("set",0,h):function(e,t){e[n]=t}),A=P.call(T,w?{get:E.get,set:E.set}:E[M],R),$.v=1,w){if("object"==typeof A&&A)(s=x(A.get,"accessor.get"))&&(E.get=s),(s=x(A.set,"accessor.set"))&&(E.set=s),(s=x(A.init,"accessor.init"))&&O.unshift(s);else if(void 0!==A)throw new TypeError("accessor decorators must return an object with get, set, or init properties or undefined")}else x(A,(u?"field":"method")+" decorators","return")&&(u?O.unshift(A):E[M]=A)}return o<2&&l.push(y(O,c,1),y(i,c,0)),u||f||(d?w?l.splice(-1,0,z("get",c),z("set",c)):l.push(C?E[M]:x.call.bind(E[M])):p(e,n,E)),A}function S(e){return p(e,h,{configurable:!0,enumerable:!0,value:a})}return void 0!==i&&(a=i[h]),a=f(null==a?null:a),d=[],u=function(e){e&&d.push(y(e))},(v=function(t,n){for(var i=0;i<r.length;i++){var a=r[i],s=a[1],u=7&s;if((8&s)==t&&!u==n){var v=a[2],h=!!a[3],p=16&s;k(t?e:e.prototype,a,p,h?"#"+v:g(v),u,u<2?[]:t?c=c||[]:l=l||[],d,!!t,h,n,t&&h?function(t){return b(t)===e}:o)}}})(8,0),v(0,0),v(8,1),v(0,1),u(l),u(c),s=d,w||S(e),{e:s,get c(){var r=[];return w&&[S(e=k(e,[t],n,e.name,5,r)),y(r,1)]}}}(this,[],[[f,1,"value"],[_,1,"disabled"],[w,1,"danger"],[y,1,"selected"],[x,1,"selection"],[k,1,"buttonElement"]]))}static styles=p;static dependencies={[c.v]:c.O};#e=(()=>{const e=S(this,"");return C(this),e})();get value(){return this.#e}set value(e){this.#e=e}#t=(()=>{const e=z(this,!1);return E(this),e})();get disabled(){return this.#t}set disabled(e){this.#t=e}#r=(()=>{const e=O(this,!1);return M(this),e})();get danger(){return this.#r}set danger(e){this.#r=e}#n=(()=>{const e=A(this,!1);return I(this),e})();get selected(){return this.#n}set selected(e){this.#n=e}#o=(()=>{const e=P(this,"none");return T(this),e})();get selection(){return this.#o}set selection(e){this.#o=e}#i=(()=>{const e=$(this);return R(this),e})();get buttonElement(){return this.#i}set buttonElement(e){this.#i=e}get textLabel(){return(this.textContent??"").trim()}get roleType(){return"checkbox"===this.selection||"switch"===this.selection?"menuitemcheckbox":"check"===this.selection?"menuitemradio":"menuitem"}get isSelectable(){return"none"!==this.selection}focus(e){this.buttonElement?.focus(e)}commitSelectionState(){"checkbox"!==this.selection&&"switch"!==this.selection?"check"===this.selection&&(this.selected=!0):this.selected=!this.selected}select(){if(this.disabled)return;this.commitSelectionState();const e=(this.value??"").trim().length>0?this.value:this.textLabel;this.dispatchEvent(new CustomEvent("ve-dropdown-item-select",{detail:{value:e,label:this.textLabel,item:this,selection:this.selection,selected:this.selected},bubbles:!0,composed:!0}))}handleClick=e=>{e.stopPropagation(),this.select()};handleKeydown=e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),this.select())};render(){const e=this.selected&&"check"===this.selection,t="checkbox"===this.selection,r="switch"===this.selection,n=e||r,o=(0,s.H)({"ve-dropdown-item":!0,"is-selected":this.selected,[`is-selection-${this.selection}`]:!0});return i.qy`
      <button
        class=${o}
        part="button"
        type="button"
        tabindex="-1"
        role=${this.roleType}
        aria-checked=${this.isSelectable?this.selected?"true":"false":i.s6}
        ?disabled=${this.disabled}
        aria-disabled=${this.disabled?"true":"false"}
        @click=${this.handleClick}
        @keydown=${this.handleKeydown}
      >
        ${t?i.qy`<span
              class="ve-dropdown-item-checkbox"
              part="checkbox"
              aria-hidden="true"
            ></span>`:i.s6}

        <span class="ve-dropdown-item-content">
          <slot></slot>
        </span>

        ${n?i.qy`<span class="ve-dropdown-item-extra">
              <span
                class="ve-dropdown-item-check"
                aria-hidden="true"
                ?hidden=${!e}
              >
                <ve-icon .definition=${d.o}></ve-icon>
              </span>
              ${r?i.qy`<span
                    class="ve-dropdown-item-switch"
                    part="switch"
                    aria-hidden="true"
                  >
                    <span class="ve-dropdown-item-switch-thumb"></span>
                  </span>`:i.s6}
            </span>`:i.s6}
      </button>
    `}}const L=["ve-dropdown-item","ve-dropdown-sub-item"];function V(e){return e instanceof HTMLElement&&L.some(t=>e.matches(t))}function j(e,t,r){V(e)&&!e.hasAttribute("disabled")&&(r.has(e)||(r.add(e),t.push(e)))}function q(e){return(e?.assignedNodes({flatten:!0})??[]).some(e=>e.nodeType===Node.ELEMENT_NODE||e.nodeType===Node.TEXT_NODE&&(e.textContent??"").trim().length>0)}function H(e){e&&(e.focus({preventScroll:!0}),e.scrollIntoView({block:"nearest",inline:"nearest"}))}function B(e){const t=e?.assignedElements({flatten:!0})??[],r=[],n=new Set;return t.forEach(e=>{const t=V(e);j(e,r,n),t||e instanceof HTMLElement&&Array.from(e.children).forEach(e=>{j(e,r,n)})}),r}const N=[l.H6,h,i.AH`
    :host {
      display: inline-flex;
      vertical-align: middle;
      color-scheme: light;
    }

    :host([hidden]) {
      display: none;
    }

    :host([block]) {
      display: flex;
      inline-size: 100%;
    }

    :host([block]) .ve-dropdown {
      display: flex;
      inline-size: 100%;
    }

    :host([block]) .ve-dropdown-trigger {
      inline-size: 100%;
    }

    .ve-dropdown {
      position: relative;
      display: inline-flex;
      max-inline-size: 100%;
    }

    .ve-dropdown-trigger {
      display: inline-flex;
      align-items: inherit;
      justify-content: inherit;
      inline-size: fit-content;
      max-inline-size: 100%;
      outline: none;
    }

    :host(:not([disabled])) .ve-dropdown-trigger:focus-visible {
      border-radius: var(--ve-dropdown-radius);
      box-shadow: 0 0 0 var(--stroke-2)
        color-mix(in srgb, var(--ve-dropdown-trigger-focus-ring) 24%, transparent);
    }

    :host([disabled]) .ve-dropdown-trigger {
      cursor: not-allowed;
    }

    .ve-dropdown-panel {
      position: fixed;
      inset: auto;
      margin: 0;
      padding: 0;
      z-index: var(--ve-dropdown-z-index);
      box-sizing: border-box;
      min-inline-size: var(--ve-dropdown-min-width);
      max-inline-size: var(--ve-dropdown-max-width);
      border: var(--ve-dropdown-border-width) solid
        var(--ve-dropdown-border-color);
      border-radius: var(--ve-dropdown-radius);
      background: var(--ve-dropdown-background);
      box-shadow: var(--ve-dropdown-shadow);
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
      transform: var(--ve-dropdown-current-enter-transform);
      transform-origin: var(--ve-dropdown-current-transform-origin);
      transition:
        opacity var(--ve-dropdown-transition-duration)
          var(--ve-dropdown-transition-easing),
        transform var(--ve-dropdown-transition-duration)
          var(--ve-dropdown-transition-easing),
        visibility 0s linear var(--ve-dropdown-transition-duration);
      overflow: visible;
    }

    .ve-dropdown-panel.is-open {
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
      transform: none;
      transition-delay: 0s;
    }

    .ve-dropdown-panel.is-closed {
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
    }

    .ve-dropdown-panel.ve-dropdown-placement-top,
    .ve-dropdown-panel.ve-dropdown-placement-top-start,
    .ve-dropdown-panel.ve-dropdown-placement-top-end {
      --ve-dropdown-current-enter-transform: scaleY(0.9)
        translate3d(0, var(--ve-dropdown-enter-offset), 0);
      --ve-dropdown-current-transform-origin: 100% 100%;
    }

    .ve-dropdown-panel.ve-dropdown-placement-bottom,
    .ve-dropdown-panel.ve-dropdown-placement-bottom-start,
    .ve-dropdown-panel.ve-dropdown-placement-bottom-end {
      --ve-dropdown-current-enter-transform: scaleY(0.9)
        translate3d(0, calc(var(--ve-dropdown-enter-offset) * -1), 0);
      --ve-dropdown-current-transform-origin: 0% 0%;
    }

    .ve-dropdown-panel.ve-dropdown-placement-left,
    .ve-dropdown-panel.ve-dropdown-placement-left-start,
    .ve-dropdown-panel.ve-dropdown-placement-left-end,
    .ve-dropdown-panel.ve-dropdown-placement-right,
    .ve-dropdown-panel.ve-dropdown-placement-right-start,
    .ve-dropdown-panel.ve-dropdown-placement-right-end {
      --ve-dropdown-current-enter-transform: scaleY(0.9) translateZ(0);
      --ve-dropdown-current-transform-origin: 0% 0%;
    }

    .ve-dropdown-menu {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: var(--ve-dropdown-menu-gap);
      padding-block: var(--ve-dropdown-padding-block);
      padding-inline: var(--ve-dropdown-padding-inline);
      max-block-size: var(--ve-dropdown-max-height);
      overflow: auto;
      overscroll-behavior: contain;
    }

    @media (prefers-reduced-motion: reduce) {
      .ve-dropdown-panel {
        transition: none;
      }
    }

    @supports not (color: color-mix(in srgb, red, blue)) {
      :host(:not([disabled])) .ve-dropdown-trigger:focus-visible {
        box-shadow: 0 0 0 var(--stroke-2) var(--ve-dropdown-trigger-focus-ring);
      }
    }
  `];function W(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function K(e){if(Object(e)!==e)throw TypeError("right-hand side of 'in' should be an object, got "+(null!==e?typeof e:"null"));return e}function U(e,t,r){"symbol"==typeof t&&(t=(t=t.description)?"["+t+"]":"");try{Object.defineProperty(e,"name",{configurable:!0,value:r?r+" "+t:t})}catch(n){}return e}let Z,G,J,X,Y,Q,ee,te,re,ne,oe,ie,ae,se,le,ce,de,ue,ve,he,pe,ge,be,me,fe,_e,we,ye,xe,ke,Se,Ce,ze,Ee,Oe,Me,Ae,Ie,Pe,Te,$e,Re,De,Fe,Le,Ve,je,qe,He,Be,Ne;const We="ve-dropdown";let Ke=0;const Ue={fromAttribute(e){if(null===e)return"";const t=e.trim();if(!t)return"";try{const e=JSON.parse(t);if(Array.isArray(e))return e.filter(e=>"string"==typeof e);if("string"==typeof e)return e}catch{}return t},toAttribute:e=>Array.isArray(e)?e.length>0?JSON.stringify(e):null:""===e?null:e};function Ze(e){return Array.isArray(e)?[...e]:e}function Ge(e){return Array.isArray(e)?e.length>0:""!==e}function Je(e,t){return"multiple"===t?Array.isArray(e)?[...new Set(e.filter(e=>e.trim().length>0))]:e.trim().length>0?[e]:[]:Array.isArray(e)?e[0]??"":e}function Xe(e,t){return Array.isArray(e)||Array.isArray(t)?!(!Array.isArray(e)||!Array.isArray(t))&&(e.length===t.length&&e.every((e,r)=>e===t[r])):e===t}Z=(0,a.MZ)({type:String,reflect:!0,useDefault:!0}),G=(0,a.MZ)({type:String,reflect:!0,useDefault:!0}),J=(0,a.MZ)({type:String,reflect:!0,useDefault:!0}),X=(0,a.MZ)({converter:Ue}),Y=(0,a.MZ)({attribute:"default-value",converter:Ue}),Q=(0,a.MZ)({type:Boolean,reflect:!0}),ee=(0,a.MZ)({type:Boolean,attribute:"default-open"}),te=(0,a.MZ)({type:Boolean,reflect:!0}),re=(0,a.MZ)({type:Boolean,reflect:!0}),ne=(0,a.MZ)({type:Number}),oe=(0,a.wk)(),ie=(0,a.wk)(),ae=(0,a.wk)(),se=(0,a.P)(".ve-dropdown-trigger"),le=(0,a.P)(".ve-dropdown-panel"),ce=(0,a.P)('slot[name="trigger"]'),de=(0,a.P)("slot:not([name])");class Ye extends l.IB{static{({e:[ue,ve,he,pe,ge,be,me,fe,_e,we,ye,xe,ke,Se,Ce,ze,Ee,Oe,Me,Ae,Ie,Pe,Te,$e,Re,De,Fe,Le,Ve,je,qe,He,Be,Ne]}=function(e,t,r,n,o,i){var a,s,l,c,d,u,v,h=Symbol.metadata||Symbol.for("Symbol.metadata"),p=Object.defineProperty,g=Object.create,b=[g(null),g(null)],m=t.length;function f(t,r,n){return function(o,i){r&&(i=o,o=e);for(var a=0;a<t.length;a++)i=t[a].apply(o,n?[i]:[]);return n?i:o}}function _(e,t,r,n){if("function"!=typeof e&&(n||void 0!==e))throw new TypeError(t+" must "+(r||"be")+" a function"+(n?"":" or undefined"));return e}function w(e,t,r,n,o,i,l,c,d,u,v){function h(e){if(!v(e))throw new TypeError("Attempted to access private element on non-instance")}var g=[].concat(t[0]),m=t[3],w=!l,y=1===o,x=3===o,k=4===o,S=2===o;function C(t,r,n){return function(o,i){return r&&(i=o,o=e),n&&n(o),desc[t].call(o,i)}}var z={},E=[],O=x?"get":k||y?"set":"value";if(!w&&(d?(u||y?z={get:U(function(){return m(this)},n,"get"),set:function(e){t[4](this,e)}}:z[O]=m,u||U(z[O],n,S?"":O)):u||(z=Object.getOwnPropertyDescriptor(e,n)),!u&&!d)){if((s=b[+c][n])&&7!==(s^o))throw new Error("Decorating two elements with the same name ("+z[O].name+") is not supported yet");b[+c][n]=o<3?1:o}for(var M=e,A=g.length-1;A>=0;A-=r?2:1){var I=_(g[A],"A decorator","be",!0),P=r?g[A-1]:void 0,T={},$={kind:["field","accessor","method","getter","setter","class"][o],name:n,metadata:a,addInitializer:function(e,t){if(e.v)throw new TypeError("attempted to call addInitializer after decoration was finished");_(t,"An initializer","be",!0),i.push(t)}.bind(null,T)};if(w)s=I.call(P,M,$),T.v=1,_(s,"class decorators","return")&&(M=s);else if($.static=c,$.private=d,s=$.access={has:d?v.bind():function(e){return n in e}},k||(s.get=d?S?function(e){return h(e),z.value}:C("get",0,h):function(e){return e[n]}),S||x||(s.set=d?C("set",0,h):function(e,t){e[n]=t}),M=I.call(P,y?{get:z.get,set:z.set}:z[O],$),T.v=1,y){if("object"==typeof M&&M)(s=_(M.get,"accessor.get"))&&(z.get=s),(s=_(M.set,"accessor.set"))&&(z.set=s),(s=_(M.init,"accessor.init"))&&E.unshift(s);else if(void 0!==M)throw new TypeError("accessor decorators must return an object with get, set, or init properties or undefined")}else _(M,(u?"field":"method")+" decorators","return")&&(u?E.unshift(M):z[O]=M)}return o<2&&l.push(f(E,c,1),f(i,c,0)),u||w||(d?y?l.splice(-1,0,C("get",c),C("set",c)):l.push(S?z[O]:_.call.bind(z[O])):p(e,n,z)),M}function y(e){return p(e,h,{configurable:!0,enumerable:!0,value:a})}return void 0!==i&&(a=i[h]),a=g(null==a?null:a),d=[],u=function(e){e&&d.push(f(e))},(v=function(t,n){for(var i=0;i<r.length;i++){var a=r[i],s=a[1],u=7&s;if((8&s)==t&&!u==n){var v=a[2],h=!!a[3],p=16&s;w(t?e:e.prototype,a,p,h?"#"+v:W(v),u,u<2?[]:t?c=c||[]:l=l||[],d,!!t,h,n,t&&h?function(t){return K(t)===e}:o)}}})(8,0),v(0,0),v(8,1),v(0,1),u(l),u(c),s=d,m||y(e),{e:s,get c(){var r=[];return m&&[y(e=w(e,[t],n,e.name,5,r)),f(r,1)]}}}(this,[],[[Z,1,"position"],[G,1,"trigger"],[J,1,"selection"],[X,1,"value"],[Y,1,"defaultValue"],[Q,1,"open"],[ee,1,"defaultOpen"],[te,1,"disabled"],[re,1,"block"],[ne,1,"delay"],[oe,1,"innerOpen"],[ie,1,"hasMenuContent"],[ae,1,"resolvedPlacement"],[se,1,"triggerElement"],[le,1,"panelElement"],[ce,1,"triggerSlot"],[de,1,"menuSlot"]]))}static styles=N;#a=(()=>{const e=ue(this,"bottom-start");return ve(this),e})();get position(){return this.#a}set position(e){this.#a=e}#s=(()=>{const e=he(this,"hover");return pe(this),e})();get trigger(){return this.#s}set trigger(e){this.#s=e}#l=(()=>{const e=ge(this,"none");return be(this),e})();get selection(){return this.#l}set selection(e){this.#l=e}#c=(()=>{const e=me(this,"");return fe(this),e})();get value(){return this.#c}set value(e){this.#c=e}#d=(()=>{const e=_e(this,"");return we(this),e})();get defaultValue(){return this.#d}set defaultValue(e){this.#d=e}#u=(()=>{const e=ye(this,void 0);return xe(this),e})();get open(){return this.#u}set open(e){this.#u=e}#v=(()=>{const e=ke(this,!1);return Se(this),e})();get defaultOpen(){return this.#v}set defaultOpen(e){this.#v=e}#h=(()=>{const e=Ce(this,!1);return ze(this),e})();get disabled(){return this.#h}set disabled(e){this.#h=e}#p=(()=>{const e=Ee(this,!1);return Oe(this),e})();get block(){return this.#p}set block(e){this.#p=e}#g=(()=>{const e=Me(this,400);return Ae(this),e})();get delay(){return this.#g}set delay(e){this.#g=e}#b=(()=>{const e=Ie(this,!1);return Pe(this),e})();get innerOpen(){return this.#b}set innerOpen(e){this.#b=e}#m=(()=>{const e=Te(this,!1);return $e(this),e})();get hasMenuContent(){return this.#m}set hasMenuContent(e){this.#m=e}#f=(()=>{const e=Re(this,this.normalizedPosition);return De(this),e})();get resolvedPlacement(){return this.#f}set resolvedPlacement(e){this.#f=e}#_=(()=>{const e=Fe(this);return Le(this),e})();get triggerElement(){return this.#_}set triggerElement(e){this.#_=e}#w=(()=>{const e=Ve(this);return je(this),e})();get panelElement(){return this.#w}set panelElement(e){this.#w=e}#y=(()=>{const e=qe(this);return He(this),e})();get triggerSlot(){return this.#y}set triggerSlot(e){this.#y=e}#x=(()=>{const e=Be(this);return Ne(this),e})();get menuSlot(){return this.#x}set menuSlot(e){this.#x=e}panelId="ve-dropdown-panel-"+ ++Ke;openTimer=null;closeTimer=null;documentBound=!1;positionRequestId=0;contextMenuPoint=null;cleanupAutoUpdate=null;repositionScheduler=(0,u.ZH)();slottedTriggerElement=null;slottedTriggerHadDisabledAttribute=!1;suppressTriggerFocusOpen=!1;get isOpen(){return"boolean"==typeof this.open?this.open:this.innerOpen}get isControlled(){return"boolean"==typeof this.open}get canShowPanel(){return this.isOpen&&this.hasMenuContent&&!this.disabled}get normalizedTrigger(){return this.trigger}get normalizedPosition(){return this.position}get canInteract(){return!this.disabled}get referenceElement(){return this.getSlottedTriggerElement()??this.triggerElement}focus(e){const t=this.referenceElement??this.triggerElement;t?.focus(e)}restoreTriggerFocus(){this.referenceElement?(this.suppressTriggerFocusOpen="hover"===this.normalizedTrigger,H(this.referenceElement)):this.suppressTriggerFocusOpen=!1}connectedCallback(){super.connectedCallback(),this.innerOpen=this.open??this.defaultOpen,this.applyDefaultValue(),this.normalizeAndSyncSelection()}firstUpdated(){this.syncMenuContentState(),this.syncSlottedTriggerDisabledState(),this.canShowPanel&&this.updateComplete.then(()=>{this.isConnected&&this.canShowPanel&&((0,v.h)(this.panelElement),this.setupAutoUpdate(),this.scheduleUpdatePosition(),this.syncDocumentListener())})}disconnectedCallback(){this.clearDelayTimers(),this.repositionScheduler.cancel(),this.positionRequestId+=1,this.contextMenuPoint=null,(0,v.s)(this.panelElement),this.teardownAutoUpdate(),this.removeDocumentListener(),this.restoreSlottedTriggerDisabledState(),super.disconnectedCallback()}updated(e){super.updated(e),e.has("open")&&"boolean"==typeof this.open&&(this.innerOpen=this.open),e.has("defaultOpen")&&1===e.size&&"boolean"!=typeof this.open&&(this.innerOpen=this.defaultOpen),e.has("disabled")&&this.disabled&&!this.isControlled&&(this.innerOpen=!1,this.contextMenuPoint=null),(e.has("selection")||e.has("value")||e.has("defaultValue"))&&this.normalizeAndSyncSelection(),(e.has("position")||e.has("trigger"))&&this.canShowPanel&&this.scheduleUpdatePosition(),e.has("disabled")&&this.syncSlottedTriggerDisabledState(),(e.has("open")||e.has("innerOpen")||e.has("disabled"))&&!this.isOpen&&(this.closeDescendantSubItems(),this.repositionScheduler.cancel(),(0,v.s)(this.panelElement),this.teardownAutoUpdate(),this.contextMenuPoint=null),(e.has("open")||e.has("innerOpen")||e.has("trigger"))&&this.syncDocumentListener(),(e.has("open")||e.has("innerOpen"))&&this.canShowPanel&&this.updateComplete.then(()=>{this.isConnected&&this.canShowPanel&&((0,v.h)(this.panelElement),this.setupAutoUpdate(),this.scheduleUpdatePosition())})}dispatchOpenChange(e,t){this.dispatchEvent(new CustomEvent("ve-open-change",{detail:{open:e,source:t},bubbles:!0,composed:!0}))}setOpen(e,t){if((!e||!this.disabled)&&this.isOpen!==e&&(!e||this.hasMenuContent)){if(this.isControlled||(this.innerOpen=e),this.dispatchOpenChange(e,t),!e)return this.repositionScheduler.cancel(),this.positionRequestId+=1,this.contextMenuPoint=null,(0,v.s)(this.panelElement),this.teardownAutoUpdate(),void this.syncDocumentListener();this.updateComplete.then(()=>{this.isConnected&&this.canShowPanel&&((0,v.h)(this.panelElement),this.setupAutoUpdate(),this.scheduleUpdatePosition(),this.syncDocumentListener())})}}applyDefaultValue(){!Ge(this.value)&&Ge(this.defaultValue)&&(this.value=Je(this.defaultValue,this.selection))}normalizeAndSyncSelection(){const e=Je(this.value,this.selection);Xe(this.value,e)||(this.value=e),this.syncSelectionState(e)}syncSelectionState(e=this.value){if("none"===this.selection)return;const t=Array.isArray(e)?e:""===e?[]:[e],r=new Set(t),n="multiple"===this.selection?"checkbox":"check";this.getAllDropdownItems().forEach(e=>{"switch"!==e.selection&&(e.selection=n),e.selected=r.has(this.getItemValue(e))})}getAllDropdownItems(){return Array.from(this.querySelectorAll(D)).filter(e=>e instanceof F)}getItemValue(e){const t=(e.value??"").trim();return t.length>0?t:(e.textContent??"").trim()}syncMenuContentState(){this.hasMenuContent=q(this.menuSlot),this.normalizeAndSyncSelection(),this.hasMenuContent||!this.isOpen||this.isControlled||this.setOpen(!1,"api"),this.canShowPanel&&this.scheduleUpdatePosition(),this.syncDocumentListener()}getSlottedTriggerElement(){return(this.triggerSlot?.assignedElements({flatten:!0})??[]).find(e=>e instanceof HTMLElement)??null}syncSlottedTriggerDisabledState(){const e=this.getSlottedTriggerElement();if(this.slottedTriggerElement&&this.slottedTriggerElement!==e&&(this.slottedTriggerHadDisabledAttribute||(this.slottedTriggerElement.removeAttribute("disabled"),Reflect.set(this.slottedTriggerElement,"disabled",!1)),this.slottedTriggerElement=null),e){if(this.slottedTriggerElement!==e&&(this.slottedTriggerElement=e,this.slottedTriggerHadDisabledAttribute=e.hasAttribute("disabled")),this.disabled)return e.setAttribute("disabled",""),void Reflect.set(e,"disabled",!0);this.slottedTriggerHadDisabledAttribute||(e.removeAttribute("disabled"),Reflect.set(e,"disabled",!1))}}restoreSlottedTriggerDisabledState(){this.slottedTriggerElement&&(this.slottedTriggerHadDisabledAttribute||(this.slottedTriggerElement.removeAttribute("disabled"),Reflect.set(this.slottedTriggerElement,"disabled",!1)),this.slottedTriggerElement=null)}clearDelayTimers(){null!==this.openTimer&&(window.clearTimeout(this.openTimer),this.openTimer=null),null!==this.closeTimer&&(window.clearTimeout(this.closeTimer),this.closeTimer=null)}scheduleOpen(){this.clearDelayTimers(),this.delay<=0?this.setOpen(!0,"trigger"):this.openTimer=window.setTimeout(()=>{this.setOpen(!0,"trigger"),this.openTimer=null},Math.max(0,this.delay))}scheduleClose(e=this.delay){this.clearDelayTimers(),e<=0?this.setOpen(!1,"trigger"):this.closeTimer=window.setTimeout(()=>{this.setOpen(!1,"trigger"),this.closeTimer=null},Math.max(0,e))}handleTriggerMouseEnter=()=>{this.canInteract&&"hover"===this.normalizedTrigger&&this.scheduleOpen()};handleTriggerMouseLeave=e=>{if(!this.canInteract||"hover"!==this.normalizedTrigger)return;const t=e.relatedTarget;t&&this.panelElement?.contains(t)||this.scheduleClose(Math.max(this.delay,400))};handleTriggerClick=e=>{this.canInteract&&"click"===this.normalizedTrigger&&(e.stopPropagation(),this.setOpen(!this.isOpen,"trigger"))};handleTriggerContextMenu=e=>{this.canInteract&&"contextmenu"===this.normalizedTrigger&&(e.preventDefault(),e.stopPropagation(),this.contextMenuPoint={x:e.clientX,y:e.clientY},this.setOpen(!0,"contextmenu"))};handleTriggerFocusIn=()=>{this.canInteract&&"hover"===this.normalizedTrigger&&(this.suppressTriggerFocusOpen?this.suppressTriggerFocusOpen=!1:this.setOpen(!0,"trigger"))};handleTriggerFocusOut=e=>{if(!this.canInteract||"hover"!==this.normalizedTrigger)return;const t=e.relatedTarget;t&&(this.contains(t)||this.panelElement?.contains(t))||this.scheduleClose()};handlePanelMouseEnter=()=>{this.canInteract&&"hover"===this.normalizedTrigger&&this.clearDelayTimers()};handlePanelMouseLeave=e=>{if(!this.canInteract||"hover"!==this.normalizedTrigger)return;const t=e.relatedTarget;t&&this.referenceElement?.contains(t)||this.scheduleClose(Math.max(this.delay,400))};handleDocumentPointerDown=e=>{if(!this.canShowPanel||!this.canInteract)return;if("click"!==this.normalizedTrigger&&"contextmenu"!==this.normalizedTrigger)return;const t=e.composedPath();t.includes(this)||t.includes(this.referenceElement)||t.includes(this.panelElement)||this.setOpen(!1,"outside")};getMenuItems(){return B(this.menuSlot)}closeDescendantSubItems(){this.querySelectorAll("ve-dropdown-sub-item").forEach(e=>{e.open=!1})}focusFirstMenuItem(){H(this.getMenuItems()[0])}focusLastMenuItem(){H(this.getMenuItems().at(-1))}focusAdjacentMenuItem(e){const t=this.getMenuItems();if(0===t.length)return;const r=document.activeElement,n=t.find(e=>e===r||e.shadowRoot?.activeElement===r),o=n?t.indexOf(n):-1;H(t[-1===o?1===e?0:t.length-1:(o+e+t.length)%t.length])}handleKeydown=e=>{if(this.canInteract){if("ArrowDown"===e.key)return e.preventDefault(),this.canShowPanel?void this.focusAdjacentMenuItem(1):(this.setOpen(!0,"trigger"),void this.updateComplete.then(()=>{this.focusFirstMenuItem()}));if("ArrowUp"===e.key)return e.preventDefault(),this.canShowPanel?void this.focusAdjacentMenuItem(-1):(this.setOpen(!0,"trigger"),void this.updateComplete.then(()=>{this.focusLastMenuItem()}));if("Home"===e.key){if(!this.canShowPanel)return;return e.preventDefault(),void this.focusFirstMenuItem()}if("End"===e.key){if(!this.canShowPanel)return;return e.preventDefault(),void this.focusLastMenuItem()}if("Escape"===e.key){if(!this.canShowPanel)return;e.stopPropagation(),this.setOpen(!1,"escape"),this.restoreTriggerFocus()}}};emitSelectionChange(e,t,r,n){Xe(e,t)||this.dispatchEvent(new CustomEvent("ve-change",{detail:{value:Ze(e),previousValue:Ze(t),item:r,selected:n},bubbles:!0,composed:!0}))}updateSelectionValue(e){if("none"===this.selection||"switch"===e.selection)return e.selected;const t=Ze(this.value);if("single"===this.selection)return this.value=e.value,this.syncSelectionState(this.value),this.emitSelectionChange(this.value,t,e.item,!0),!0;const r=Array.isArray(this.value)?[...this.value]:""===this.value?[]:[this.value],n=new Set(r);return e.selected?n.add(e.value):n.delete(e.value),this.value=Array.from(n),this.syncSelectionState(this.value),this.emitSelectionChange(this.value,t,e.item,e.selected),e.selected}handleMenuItemSelect=e=>{e.stopPropagation();const t=this.updateSelectionValue(e.detail);this.dispatchEvent(new CustomEvent("ve-select",{detail:{value:e.detail.value,label:e.detail.label,item:e.detail.item,selection:e.detail.selection,selected:t,dropdownValue:Ze(this.value)},bubbles:!0,composed:!0}));this.canInteract&&("none"===e.detail.selection||"check"===e.detail.selection||"single"===this.selection)&&(this.setOpen(!1,"menu"),this.restoreTriggerFocus())};syncDocumentListener(){if(this.isConnected)return"click"!==this.normalizedTrigger&&"contextmenu"!==this.normalizedTrigger||!this.canShowPanel||this.documentBound?void(("click"!==this.normalizedTrigger&&"contextmenu"!==this.normalizedTrigger||!this.canShowPanel)&&this.removeDocumentListener()):(document.addEventListener("pointerdown",this.handleDocumentPointerDown,!0),void(this.documentBound=!0));this.removeDocumentListener()}removeDocumentListener(){this.documentBound&&(document.removeEventListener("pointerdown",this.handleDocumentPointerDown,!0),this.documentBound=!1)}setupAutoUpdate(){if(!this.isConnected)return;if(this.contextMenuPoint)return void this.teardownAutoUpdate();const e=this.referenceElement;this.canShowPanel&&e&&this.panelElement&&(this.teardownAutoUpdate(),this.cleanupAutoUpdate=(0,u.D9)(e,this.panelElement,()=>{this.scheduleUpdatePosition()}))}teardownAutoUpdate(){this.cleanupAutoUpdate?.(),this.cleanupAutoUpdate=null}scheduleUpdatePosition(){this.repositionScheduler.schedule(()=>{this.updatePosition()})}updateContextMenuPosition(){if(!this.panelElement||!this.contextMenuPoint)return;const e=this.panelElement.getBoundingClientRect(),t=Math.max(8,window.innerWidth-e.width-8),r=Math.max(8,window.innerHeight-e.height-8),n=Math.min(Math.max(this.contextMenuPoint.x,8),t),o=Math.min(Math.max(this.contextMenuPoint.y,8),r);this.panelElement.style.position="fixed",this.panelElement.style.left=`${n}px`,this.panelElement.style.top=`${o}px`,this.panelElement.style.visibility="visible"}async updatePosition(){const e=this.referenceElement;if(!this.canShowPanel||!this.isConnected||!this.panelElement)return;if(this.contextMenuPoint)return void this.updateContextMenuPosition();if(!e)return;const t=++this.positionRequestId,r=(0,u.gy)(this,{offsetVarName:"--ve-dropdown-offset",arrowVarName:"--ve-dropdown-arrow-size",fallbackOffset:4,fallbackArrowSize:0,arrowGap:0});this.panelElement.style.position="fixed",this.panelElement.style.top="0px",this.panelElement.style.left="0px";const n=await(0,u.VI)({reference:e,floating:this.panelElement,placement:this.normalizedPosition,distance:r,viewportPadding:8});t===this.positionRequestId&&this.canShowPanel&&this.isConnected&&(this.resolvedPlacement=n.placement,this.panelElement.style.left=`${n.x}px`,this.panelElement.style.top=`${n.y}px`,this.panelElement.style.visibility=n.hidden?"hidden":"visible")}handleMenuSlotChange=()=>{this.syncMenuContentState()};handleTriggerSlotChange=()=>{this.syncSlottedTriggerDisabledState(),this.canShowPanel&&(this.teardownAutoUpdate(),this.setupAutoUpdate(),this.scheduleUpdatePosition())};render(){const e=(0,s.H)({"ve-dropdown-panel":!0,[`ve-dropdown-placement-${this.resolvedPlacement}`]:!0,"is-open":this.canShowPanel,"is-closed":!this.canShowPanel});return i.qy`
      <span class="ve-dropdown">
        <span
          class="ve-dropdown-trigger"
          part="trigger"
          tabindex=${this.disabled?-1:0}
          aria-haspopup="menu"
          aria-expanded=${this.canShowPanel?"true":"false"}
          aria-disabled=${this.disabled?"true":"false"}
          aria-controls=${this.canShowPanel?this.panelId:i.s6}
          @mouseenter=${this.handleTriggerMouseEnter}
          @mouseleave=${this.handleTriggerMouseLeave}
          @click=${this.handleTriggerClick}
          @contextmenu=${this.handleTriggerContextMenu}
          @focusin=${this.handleTriggerFocusIn}
          @focusout=${this.handleTriggerFocusOut}
          @keydown=${this.handleKeydown}
        >
          <slot
            name="trigger"
            @slotchange=${this.handleTriggerSlotChange}
          ></slot>
        </span>

        <div
          id=${this.panelId}
          class=${e}
          part="panel"
          popover=${"manual"}
          role="menu"
          aria-hidden=${this.canShowPanel?"false":"true"}
          @mouseenter=${this.handlePanelMouseEnter}
          @mouseleave=${this.handlePanelMouseLeave}
          @keydown=${this.handleKeydown}
          @ve-dropdown-item-select=${this.handleMenuItemSelect}
        >
          <div class="ve-dropdown-menu" part="menu">
            <slot @slotchange=${this.handleMenuSlotChange}></slot>
          </div>
        </div>
      </span>
    `}}var Qe=r(76112);const et=[l.H6,h,i.AH`
    :host {
      display: block;
    }

    :host([hidden]) {
      display: none;
    }

    .ve-dropdown-group-title {
      margin-top: var(--ve-dropdown-group-title-margin-top);
      box-sizing: border-box;
      block-size: var(--ve-dropdown-group-title-height);
      padding-block: var(--ve-dropdown-group-title-padding-block);
      padding-inline: var(--ve-dropdown-group-title-padding-inline);
      color: var(--ve-dropdown-group-title-color);
      font-family: var(--font-sans);
      font-size: var(--ve-dropdown-group-title-font-size);
      font-weight: var(--ve-dropdown-group-title-font-weight);
      line-height: var(--ve-dropdown-group-title-line-height);
      text-align: left;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      pointer-events: none;
    }

    :host(:first-child) .ve-dropdown-group-title {
      margin-top: calc(
        var(--ve-dropdown-group-title-margin-top) - var(
            --ve-dropdown-padding-block
          )
      );
    }

    .ve-dropdown-group-content {
      display: flex;
      flex-direction: column;
      gap: var(--ve-dropdown-group-gap);
    }
  `],tt="ve-dropdown-group";let rt=0;class nt extends l.IB{static styles=et;titleId="ve-dropdown-group-title-"+ ++rt;titleText="";constructor(){super(),(0,Qe.m)(this)}get title(){return this.titleText}set title(e){(0,Qe.e)(this,this.titleText,e,e=>{this.titleText=e})}render(){const e=this.title?this.titleId:i.s6;return i.qy`
      ${this.title?i.qy`<div id=${this.titleId} class="ve-dropdown-group-title" part="title">${this.title}</div>`:null}
      <div
        class="ve-dropdown-group-content"
        part="content"
        role="group"
        aria-labelledby=${e}
      >
        <slot></slot>
      </div>
    `}}const ot=[l.H6,h,i.AH`
    :host {
      display: block;
      box-sizing: border-box;
      block-size: var(--ve-dropdown-divider-width);
      border: none;
      background: var(--ve-dropdown-divider-color);
      margin-block: var(--ve-dropdown-divider-margin-block);
      margin-inline: var(--ve-dropdown-divider-margin-inline);
    }

    :host([hidden]) {
      display: none;
    }
  `],it="ve-dropdown-divider";class at extends l.IB{static styles=ot;connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator"),this.setAttribute("aria-orientation","horizontal")}}const st=[l.H6,h,i.AH`
    :host {
      position: relative;
      display: block;
    }

    :host([hidden]) {
      display: none;
    }

    .ve-dropdown-sub-item-trigger {
      appearance: none;
      display: flex;
      align-items: center;
      justify-content: space-between;
      inline-size: 100%;
      min-block-size: var(--ve-dropdown-item-min-height);
      box-sizing: border-box;
      padding-block: var(--ve-dropdown-item-padding-block);
      padding-inline: var(--ve-dropdown-item-padding-inline);
      gap: var(--ve-dropdown-item-gap);
      border: none;
      border-radius: var(--ve-dropdown-item-radius);
      background: transparent;
      color: var(--ve-dropdown-item-color);
      font-family: var(--font-sans);
      font-size: var(--ve-dropdown-item-font-size);
      font-weight: var(--ve-dropdown-item-font-weight);
      line-height: var(--ve-dropdown-item-label-line-height);
      text-align: left;
      cursor: pointer;
      transition:
        background-color var(--ve-dropdown-transition-duration)
          var(--ve-dropdown-transition-easing),
        color var(--ve-dropdown-transition-duration)
          var(--ve-dropdown-transition-easing);
    }

    .ve-dropdown-sub-item-trigger:hover,
    .ve-dropdown-sub-item-trigger:focus-visible,
    :host([open]) .ve-dropdown-sub-item-trigger {
      background: var(--ve-dropdown-item-hover-bg);
    }

    .ve-dropdown-sub-item-trigger:active {
      background: var(--ve-dropdown-item-active-bg);
    }

    .ve-dropdown-sub-item-trigger:focus-visible {
      outline: none;
    }

    :host([disabled]) .ve-dropdown-sub-item-trigger,
    :host([disabled]) .ve-dropdown-sub-item-trigger:hover,
    :host([disabled]) .ve-dropdown-sub-item-trigger:focus-visible,
    :host([disabled]) .ve-dropdown-sub-item-trigger:active {
      color: var(--ve-dropdown-item-disabled-color);
      background: transparent;
      cursor: not-allowed;
      opacity: var(--ve-dropdown-disabled-opacity);
      pointer-events: none;
    }

    .ve-dropdown-sub-item-label {
      min-inline-size: 0;
      display: block;
      flex: 1;
      overflow: hidden;
      text-align: left;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .ve-dropdown-sub-item-arrow {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      inline-size: var(--ve-dropdown-sub-item-arrow-size);
      block-size: var(--ve-dropdown-sub-item-arrow-size);
      flex: none;
      color: var(--ve-dropdown-sub-item-arrow-color);
      margin-inline-start: var(--ve-dropdown-item-extra-margin-inline-start);
      transform: translateY(var(--ve-dropdown-sub-item-arrow-offset-y));
    }

    .ve-dropdown-sub-item-arrow::before {
      content: '';
      inline-size: var(--ve-dropdown-sub-item-arrow-icon-size);
      block-size: var(--ve-dropdown-sub-item-arrow-icon-size);
      border-block-start: var(--ve-dropdown-sub-item-arrow-stroke) solid
        currentColor;
      border-inline-end: var(--ve-dropdown-sub-item-arrow-stroke) solid
        currentColor;
      transform: rotate(45deg);
    }

    .ve-dropdown-sub-item-panel {
      position: fixed;
      inset: auto;
      margin: 0;
      padding: 0;
      z-index: var(--ve-dropdown-z-index);
      box-sizing: border-box;
      min-inline-size: var(--ve-dropdown-min-width);
      max-inline-size: var(--ve-dropdown-max-width);
      border: var(--ve-dropdown-border-width) solid
        var(--ve-dropdown-border-color);
      border-radius: var(--ve-dropdown-radius);
      background: var(--ve-dropdown-background);
      box-shadow: var(--ve-dropdown-shadow);
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
      transform: scaleY(0.9)
        translate3d(calc(var(--ve-dropdown-enter-offset) * -1), 0, 0);
      transform-origin: left top;
      transition:
        opacity var(--ve-dropdown-transition-duration)
          var(--ve-dropdown-transition-easing),
        transform var(--ve-dropdown-transition-duration)
          var(--ve-dropdown-transition-easing),
        visibility 0s linear var(--ve-dropdown-transition-duration);
    }

    .ve-dropdown-sub-item-panel.ve-dropdown-sub-item-placement-left,
    .ve-dropdown-sub-item-panel.ve-dropdown-sub-item-placement-left-start,
    .ve-dropdown-sub-item-panel.ve-dropdown-sub-item-placement-left-end {
      transform: scaleY(0.9) translate3d(var(--ve-dropdown-enter-offset), 0, 0);
      transform-origin: right top;
    }

    .ve-dropdown-sub-item-panel.ve-dropdown-sub-item-placement-right,
    .ve-dropdown-sub-item-panel.ve-dropdown-sub-item-placement-right-start,
    .ve-dropdown-sub-item-panel.ve-dropdown-sub-item-placement-right-end {
      transform: scaleY(0.9)
        translate3d(calc(var(--ve-dropdown-enter-offset) * -1), 0, 0);
      transform-origin: left top;
    }

    :host([open]) .ve-dropdown-sub-item-panel {
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
      transform: none;
      transition-delay: 0s;
    }

    .ve-dropdown-sub-item-menu {
      display: flex;
      flex-direction: column;
      gap: var(--ve-dropdown-menu-gap);
      padding-block: var(--ve-dropdown-padding-block);
      padding-inline: var(--ve-dropdown-padding-inline);
      max-block-size: var(--ve-dropdown-max-height);
      overflow: auto;
      overscroll-behavior: contain;
    }

    @media (prefers-reduced-motion: reduce) {
      .ve-dropdown-sub-item-panel {
        transition: none;
      }
    }
  `];function lt(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function ct(e){if(Object(e)!==e)throw TypeError("right-hand side of 'in' should be an object, got "+(null!==e?typeof e:"null"));return e}function dt(e,t,r){"symbol"==typeof t&&(t=(t=t.description)?"["+t+"]":"");try{Object.defineProperty(e,"name",{configurable:!0,value:r?r+" "+t:t})}catch(n){}return e}let ut,vt,ht,pt,gt,bt,mt,ft,_t,wt,yt,xt,kt,St,Ct,zt,Et,Ot,Mt,At,It;const Pt="ve-dropdown-sub-item";ut=(0,a.MZ)({type:String}),vt=(0,a.MZ)({type:Boolean,reflect:!0}),ht=(0,a.MZ)({type:Boolean,reflect:!0}),pt=(0,a.wk)(),gt=(0,a.P)(".ve-dropdown-sub-item-trigger"),bt=(0,a.P)(".ve-dropdown-sub-item-panel"),mt=(0,a.P)("slot:not([name])");class Tt extends l.IB{static{({e:[ft,_t,wt,yt,xt,kt,St,Ct,zt,Et,Ot,Mt,At,It]}=function(e,t,r,n,o,i){var a,s,l,c,d,u,v,h=Symbol.metadata||Symbol.for("Symbol.metadata"),p=Object.defineProperty,g=Object.create,b=[g(null),g(null)],m=t.length;function f(t,r,n){return function(o,i){r&&(i=o,o=e);for(var a=0;a<t.length;a++)i=t[a].apply(o,n?[i]:[]);return n?i:o}}function _(e,t,r,n){if("function"!=typeof e&&(n||void 0!==e))throw new TypeError(t+" must "+(r||"be")+" a function"+(n?"":" or undefined"));return e}function w(e,t,r,n,o,i,l,c,d,u,v){function h(e){if(!v(e))throw new TypeError("Attempted to access private element on non-instance")}var g=[].concat(t[0]),m=t[3],w=!l,y=1===o,x=3===o,k=4===o,S=2===o;function C(t,r,n){return function(o,i){return r&&(i=o,o=e),n&&n(o),desc[t].call(o,i)}}var z={},E=[],O=x?"get":k||y?"set":"value";if(!w&&(d?(u||y?z={get:dt(function(){return m(this)},n,"get"),set:function(e){t[4](this,e)}}:z[O]=m,u||dt(z[O],n,S?"":O)):u||(z=Object.getOwnPropertyDescriptor(e,n)),!u&&!d)){if((s=b[+c][n])&&7!==(s^o))throw new Error("Decorating two elements with the same name ("+z[O].name+") is not supported yet");b[+c][n]=o<3?1:o}for(var M=e,A=g.length-1;A>=0;A-=r?2:1){var I=_(g[A],"A decorator","be",!0),P=r?g[A-1]:void 0,T={},$={kind:["field","accessor","method","getter","setter","class"][o],name:n,metadata:a,addInitializer:function(e,t){if(e.v)throw new TypeError("attempted to call addInitializer after decoration was finished");_(t,"An initializer","be",!0),i.push(t)}.bind(null,T)};if(w)s=I.call(P,M,$),T.v=1,_(s,"class decorators","return")&&(M=s);else if($.static=c,$.private=d,s=$.access={has:d?v.bind():function(e){return n in e}},k||(s.get=d?S?function(e){return h(e),z.value}:C("get",0,h):function(e){return e[n]}),S||x||(s.set=d?C("set",0,h):function(e,t){e[n]=t}),M=I.call(P,y?{get:z.get,set:z.set}:z[O],$),T.v=1,y){if("object"==typeof M&&M)(s=_(M.get,"accessor.get"))&&(z.get=s),(s=_(M.set,"accessor.set"))&&(z.set=s),(s=_(M.init,"accessor.init"))&&E.unshift(s);else if(void 0!==M)throw new TypeError("accessor decorators must return an object with get, set, or init properties or undefined")}else _(M,(u?"field":"method")+" decorators","return")&&(u?E.unshift(M):z[O]=M)}return o<2&&l.push(f(E,c,1),f(i,c,0)),u||w||(d?y?l.splice(-1,0,C("get",c),C("set",c)):l.push(S?z[O]:_.call.bind(z[O])):p(e,n,z)),M}function y(e){return p(e,h,{configurable:!0,enumerable:!0,value:a})}return void 0!==i&&(a=i[h]),a=g(null==a?null:a),d=[],u=function(e){e&&d.push(f(e))},(v=function(t,n){for(var i=0;i<r.length;i++){var a=r[i],s=a[1],u=7&s;if((8&s)==t&&!u==n){var v=a[2],h=!!a[3],p=16&s;w(t?e:e.prototype,a,p,h?"#"+v:lt(v),u,u<2?[]:t?c=c||[]:l=l||[],d,!!t,h,n,t&&h?function(t){return ct(t)===e}:o)}}})(8,0),v(0,0),v(8,1),v(0,1),u(l),u(c),s=d,m||y(e),{e:s,get c(){var r=[];return m&&[y(e=w(e,[t],n,e.name,5,r)),f(r,1)]}}}(this,[],[[ut,1,"label"],[vt,1,"disabled"],[ht,1,"open"],[pt,1,"resolvedPlacement"],[gt,1,"triggerElement"],[bt,1,"panelElement"],[mt,1,"menuSlot"]]))}static styles=st;#k=(()=>{const e=ft(this,"");return _t(this),e})();get label(){return this.#k}set label(e){this.#k=e}#t=(()=>{const e=wt(this,!1);return yt(this),e})();get disabled(){return this.#t}set disabled(e){this.#t=e}#S=(()=>{const e=xt(this,!1);return kt(this),e})();get open(){return this.#S}set open(e){this.#S=e}#C=(()=>{const e=St(this,"right-start");return Ct(this),e})();get resolvedPlacement(){return this.#C}set resolvedPlacement(e){this.#C=e}#z=(()=>{const e=zt(this);return Et(this),e})();get triggerElement(){return this.#z}set triggerElement(e){this.#z=e}#E=(()=>{const e=Ot(this);return Mt(this),e})();get panelElement(){return this.#E}set panelElement(e){this.#E=e}#O=(()=>{const e=At(this);return It(this),e})();get menuSlot(){return this.#O}set menuSlot(e){this.#O=e}closeTimer=null;positionRequestId=0;cleanupAutoUpdate=null;repositionScheduler=(0,u.ZH)();suppressFocusOpen=!1;clearCloseTimer(){null!==this.closeTimer&&(window.clearTimeout(this.closeTimer),this.closeTimer=null)}setOpen(e){this.disabled&&e||this.open!==e&&(e&&!this.hasMenuContent()||(this.open=e))}hasMenuContent(){return q(this.menuSlot)}getMenuItems(){return B(this.menuSlot)}focus(e){this.triggerElement?.focus(e)}restoreTriggerFocus(){this.triggerElement?(this.suppressFocusOpen=!0,H(this.triggerElement)):this.suppressFocusOpen=!1}focusFirstMenuItem(){H(this.getMenuItems()[0])}focusLastMenuItem(){H(this.getMenuItems().at(-1))}focusAdjacentMenuItem(e){const t=this.getMenuItems();if(0===t.length)return;const r=document.activeElement,n=t.find(e=>e===r||e.shadowRoot?.activeElement===r),o=n?t.indexOf(n):-1;H(t[-1===o?1===e?0:t.length-1:(o+e+t.length)%t.length])}scheduleUpdatePosition(){this.repositionScheduler.schedule(()=>{this.updatePosition()})}setupAutoUpdate(){this.isConnected&&this.open&&this.triggerElement&&this.panelElement&&(this.teardownAutoUpdate(),this.cleanupAutoUpdate=(0,u.D9)(this.triggerElement,this.panelElement,()=>{this.scheduleUpdatePosition()}))}teardownAutoUpdate(){this.cleanupAutoUpdate?.(),this.cleanupAutoUpdate=null}async updatePosition(){if(!(this.open&&this.isConnected&&this.triggerElement&&this.panelElement))return;const e=++this.positionRequestId,t=(0,u.gy)(this,{offsetVarName:"--ve-dropdown-sub-item-gap",arrowVarName:"--ve-dropdown-arrow-size",fallbackOffset:4,fallbackArrowSize:0,arrowGap:0});this.panelElement.style.position="fixed",this.panelElement.style.top="0px",this.panelElement.style.left="0px";const r=await(0,u.VI)({reference:this.triggerElement,floating:this.panelElement,placement:"right-start",distance:t,viewportPadding:8});e===this.positionRequestId&&this.open&&this.isConnected&&(this.resolvedPlacement=r.placement,this.panelElement.style.left=`${r.x}px`,this.panelElement.style.top=`${r.y}px`,this.panelElement.style.visibility=r.hidden?"hidden":"visible")}handleMouseEnter=()=>{this.disabled||(this.clearCloseTimer(),this.setOpen(!0))};handleMouseLeave=()=>{this.disabled||(this.clearCloseTimer(),this.closeTimer=window.setTimeout(()=>{this.setOpen(!1),this.closeTimer=null},300))};handleFocusIn=()=>{this.disabled||(this.clearCloseTimer(),this.suppressFocusOpen?this.suppressFocusOpen=!1:this.setOpen(!0))};handleFocusOut=e=>{if(this.disabled)return;const t=e.relatedTarget;t&&this.contains(t)||this.setOpen(!1)};handleKeydown=e=>{if("ArrowRight"===e.key||"Enter"===e.key||" "===e.key)return e.preventDefault(),this.setOpen(!0),void this.updateComplete.then(()=>{this.focusFirstMenuItem()});"ArrowLeft"!==e.key&&"Escape"!==e.key||(e.preventDefault(),e.stopPropagation(),this.setOpen(!1),this.restoreTriggerFocus())};handlePanelKeydown=e=>"ArrowDown"===e.key?(e.preventDefault(),e.stopPropagation(),void this.focusAdjacentMenuItem(1)):"ArrowUp"===e.key?(e.preventDefault(),e.stopPropagation(),void this.focusAdjacentMenuItem(-1)):"Home"===e.key?(e.preventDefault(),e.stopPropagation(),void this.focusFirstMenuItem()):"End"===e.key?(e.preventDefault(),e.stopPropagation(),void this.focusLastMenuItem()):"ArrowLeft"===e.key?(e.preventDefault(),e.stopPropagation(),this.setOpen(!1),void this.restoreTriggerFocus()):void("Escape"===e.key&&(e.preventDefault(),e.stopPropagation(),this.setOpen(!1),this.restoreTriggerFocus()));updated(e){super.updated(e),e.has("disabled")&&this.disabled&&this.setOpen(!1),e.has("open")&&(this.open?this.updateComplete.then(()=>{this.isConnected&&this.open&&((0,v.h)(this.panelElement),this.setupAutoUpdate(),this.scheduleUpdatePosition())}):(this.repositionScheduler.cancel(),this.positionRequestId+=1,(0,v.s)(this.panelElement),this.teardownAutoUpdate()))}disconnectedCallback(){this.clearCloseTimer(),this.repositionScheduler.cancel(),this.positionRequestId+=1,(0,v.s)(this.panelElement),this.teardownAutoUpdate(),super.disconnectedCallback()}handleMenuSlotChange=()=>{this.hasMenuContent()?this.open&&this.scheduleUpdatePosition():this.setOpen(!1)};render(){const e=(0,s.H)({"ve-dropdown-sub-item-panel":!0,[`ve-dropdown-sub-item-placement-${this.resolvedPlacement}`]:!0});return i.qy`
      <div
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
        @focusin=${this.handleFocusIn}
        @focusout=${this.handleFocusOut}
      >
        <button
          class="ve-dropdown-sub-item-trigger"
          part="trigger"
          type="button"
          tabindex="-1"
          role="menuitem"
          aria-haspopup="menu"
          aria-expanded=${this.open?"true":"false"}
          ?disabled=${this.disabled}
          @keydown=${this.handleKeydown}
        >
          <span class="ve-dropdown-sub-item-label">
            ${(this.label??"").trim().length>0?this.label:i.qy`<slot name="label"></slot>`}
          </span>
          <span class="ve-dropdown-sub-item-arrow" aria-hidden="true"> </span>
        </button>

        <div
          class=${e}
          part="panel"
          popover=${"manual"}
          role="menu"
          aria-hidden=${this.open?"false":"true"}
          @keydown=${this.handlePanelKeydown}
        >
          <div class="ve-dropdown-sub-item-menu" part="menu">
            <slot @slotchange=${this.handleMenuSlotChange}></slot>
          </div>
        </div>
      </div>
    `}}(0,l.Xq)(We,Ye),(0,l.Xq)(D,F),(0,l.Xq)(tt,nt),(0,l.Xq)(Pt,Tt),(0,l.Xq)(it,at);var $t=r(35780),Rt=r(74410);const Dt=(0,$t.h)({tagName:We,elementClass:Ye,react:o,events:{onOpenChange:"ve-open-change",onSelect:"ve-select",onChange:"ve-change"},ownEvents:["onChange","onOpenChange"]}),Ft=(0,$t.h)({tagName:D,elementClass:F,react:o,events:{onSelect:"ve-dropdown-item-select"}}),Lt=((0,$t.h)({tagName:tt,elementClass:nt,react:o,events:{}}),(0,$t.h)({tagName:Pt,elementClass:Tt,react:o,events:{}})),Vt=((0,$t.h)({tagName:it,elementClass:at,react:o,events:{}}),n.forwardRef(({triggerNode:e,children:t,...r},o)=>n.createElement(Dt,{...r,ref:o},(0,Rt.RG)("trigger",e),t)));Vt.displayName="Dropdown";n.forwardRef(({label:e,children:t,...r},o)=>{const i=(0,Rt.Vx)(e)?String(e):void 0,a=void 0===i?e:void 0;return n.createElement(Lt,{...r,...void 0===i?{}:{label:i},ref:o},(0,Rt.RG)("label",a),t)}).displayName="DropdownSubItem"},18597(e,t,r){var n=r(53793);const o=(0,r(63568).b)(n.addIcon,"IconAdd");r.d(t,["x",0,o])},67779(e,t,r){r.d(t,{i:()=>o});var n=r(43449);const o=(0,r(63568).b)(n.o,"IconCheck")},36090(e,t,r){var n=r(64006);const o=(0,r(63568).b)(n.chevronDownMdIcon,"IconChevronDownMd");r.d(t,["W",0,o])},20137(e,t,r){var n=r(31909);const o=(0,r(63568).b)(n.chevronLeftMdIcon,"IconChevronLeftMd");r.d(t,["l",0,o])},34290(e,t,r){var n=r(74166);const o=(0,r(63568).b)(n.chevronRightMdIcon,"IconChevronRightMd");r.d(t,["q",0,o])},33905(e,t,r){var n=r(92109);const o=(0,r(63568).b)(n.copyIcon,"IconCopy");r.d(t,["b",0,o])},77781(e,t,r){var n=r(95249);const o=(0,r(63568).b)(n.documentIcon,"IconDocument");r.d(t,["F",0,o])},60706(e,t,r){var n=r(97894);const o=(0,r(63568).b)(n.moreHorizontalIcon,"IconMoreHorizontal");r.d(t,["f",0,o])},28597(e,t,r){var n=r(39769);const o=(0,r(63568).b)(n.refreshIcon,"IconRefresh");r.d(t,["H",0,o])},35652(e,t,r){var n=r(29040);const o=(0,r(63568).b)(n.searchIcon,"IconSearch");r.d(t,["C",0,o])},3101(e,t,r){var n=r(39625);const o=(0,r(63568).b)(n.successIcon,"IconSuccess");r.d(t,["l",0,o])},33900(e,t,r){r.d(t,{p:()=>Te});var n=r(30758),o=r.t(n,2),i=r(45080),a=r(67286),s=r(67463),l=r(81782),c=r(61834),d=r(94023),u=r(17400),v=r(36832);const h=i.AH`
  :host {
    --ve-input-font-family: var(--font-sans);
    --ve-input-font-weight: var(--font-weight-normal);
    --ve-input-line-height-default: var(--line-height-body);
    --ve-input-transition-duration: var(--motion-fast);
    --ve-input-transition-timing: var(--ease-standard);

    --ve-input-height-small: var(--height-small);
    --ve-input-height-default: var(--height-default);
    --ve-input-height-large: var(--height-large);

    --ve-input-font-size-small: var(--text-body-sm);
    --ve-input-font-size-default: var(--text-body);
    --ve-input-font-size-large: var(--text-body);

    --ve-input-padding-inline-small: var(--space-xxs);
    --ve-input-padding-inline-default: var(--space-xxs);
    --ve-input-padding-inline-large: var(--space-xxs);
    --ve-input-padding-block-small: var(--space-xxxs);
    --ve-input-padding-block-default: var(--space-xxxs);
    --ve-input-padding-block-large: var(--space-xxxs);

    --ve-input-radius: var(--radius-md);
    --ve-input-border-width: var(--stroke-weight-base);

    --ve-input-bg: var(--color-bg-base);
    --ve-input-bg-hover: var(--color-bg-base);
    --ve-input-bg-focus: var(--color-bg-base);

    --ve-input-border-color: var(--color-border-strong);
    --ve-input-border-color-hover: var(--color-border-interactive);
    --ve-input-border-color-focus: var(--color-border-interactive);
    --ve-input-shadow-focus-strong-color: rgb(
      from var(--color-border-interactive) r g b / 25%
    );
    --ve-input-shadow-focus-soft-color: rgb(
      from var(--color-border-interactive) r g b / 10%
    );
    --ve-input-shadow-focus:
      0 0 var(--radius-xs) calc(var(--stroke-weight-strong) * -1)
        var(--ve-input-shadow-focus-strong-color),
      0 0 var(--space-l) calc(var(--stroke-weight-strong) * -1)
        var(--ve-input-shadow-focus-soft-color);
    --ve-input-focus-ring-color: var(--ve-input-shadow-focus-strong-color);
    --ve-input-focus-shadow-size: var(--stroke-weight-bold);

    --ve-input-status-error-bg: var(--color-bg-danger-secondary);
    --ve-input-status-error-bg-hover: color-mix(
      in srgb,
      var(--ve-input-status-error-bg) var(--state-hover-subtle-ratio),
      var(--state-hover-subtle-mix)
    );
    --ve-input-status-error-border: var(--color-border-danger);
    --ve-input-status-error-border-hover: var(--color-text-danger);
    --ve-input-status-error-border-focus: var(--color-text-danger);
    --ve-input-status-error-shadow-strong-color: rgb(
      from var(--color-text-danger) r g b / 25%
    );
    --ve-input-status-error-shadow-soft-color: rgb(
      from var(--color-text-danger) r g b / 10%
    );
    --ve-input-status-error-shadow-focus:
      0 0 var(--radius-xs) calc(var(--stroke-weight-strong) * -1)
        var(--ve-input-status-error-shadow-strong-color),
      0 0 var(--space-l) calc(var(--stroke-weight-strong) * -1)
        var(--ve-input-status-error-shadow-soft-color);

    --ve-input-status-warning-bg: var(--color-bg-warning-secondary);
    --ve-input-status-warning-bg-hover: color-mix(
      in srgb,
      var(--ve-input-status-warning-bg) var(--state-hover-subtle-ratio),
      var(--state-hover-subtle-mix)
    );
    --ve-input-status-warning-border: var(--color-border-warning);
    --ve-input-status-warning-border-hover: var(--color-text-warning);
    --ve-input-status-warning-border-focus: var(--color-text-warning);
    --ve-input-status-warning-shadow-strong-color: rgb(
      from var(--color-text-warning) r g b / 25%
    );
    --ve-input-status-warning-shadow-soft-color: rgb(
      from var(--color-text-warning) r g b / 10%
    );
    --ve-input-status-warning-shadow-focus:
      0 0 var(--radius-xs) calc(var(--stroke-weight-strong) * -1)
        var(--ve-input-status-warning-shadow-strong-color),
      0 0 var(--space-l) calc(var(--stroke-weight-strong) * -1)
        var(--ve-input-status-warning-shadow-soft-color);

    --ve-input-status-success-bg: var(--color-bg-success-secondary);
    --ve-input-status-success-bg-hover: color-mix(
      in srgb,
      var(--ve-input-status-success-bg) var(--state-hover-subtle-ratio),
      var(--state-hover-subtle-mix)
    );
    --ve-input-status-success-border: var(--color-border-success);
    --ve-input-status-success-border-hover: var(--color-text-success);
    --ve-input-status-success-border-focus: var(--color-text-success);
    --ve-input-status-success-shadow-strong-color: rgb(
      from var(--color-text-success) r g b / 25%
    );
    --ve-input-status-success-shadow-soft-color: rgb(
      from var(--color-text-success) r g b / 10%
    );
    --ve-input-status-success-shadow-focus:
      0 0 var(--radius-xs) calc(var(--stroke-weight-strong) * -1)
        var(--ve-input-status-success-shadow-strong-color),
      0 0 var(--space-l) calc(var(--stroke-weight-strong) * -1)
        var(--ve-input-status-success-shadow-soft-color);

    --ve-input-disabled-bg: var(--color-bg-control);
    --ve-input-disabled-border-color: var(--color-border-default);
    --ve-input-disabled-text: var(--color-text-disable);
    --ve-input-disabled-opacity: var(--state-disabled-ratio);

    --ve-input-text-color: var(--color-text-primary);
    --ve-input-placeholder-color: var(--color-text-disable);

    --ve-input-prefix-color: var(--color-text-tertiary);
    --ve-input-suffix-color: var(--color-text-tertiary);
    --ve-input-affix-gap: var(--space-xxxs);

    --ve-input-icon-size: var(--text-caption);
    --ve-input-action-size: calc(var(--height-small) - var(--space-xxs));
    --ve-input-icon-color: var(--color-text-secondary);
    --ve-input-icon-hover-bg: color-mix(
      in srgb,
      var(--ve-input-bg) var(--state-pressed-subtle-ratio),
      var(--state-pressed-subtle-mix)
    );

    --ve-input-word-limit-color: var(--color-text-tertiary);
    --ve-input-word-limit-error-color: var(--color-text-danger);
    --ve-input-word-limit-font-size: var(--text-caption);

    --ve-input-textarea-padding-inline: var(--space-xs);
    --ve-input-textarea-padding-block: var(--space-xxxs);
    --ve-input-textarea-word-limit-offset-inline: var(--space-xs);
    --ve-input-textarea-word-limit-offset-block: var(--space-xxs);
    --ve-input-textarea-clear-offset-inline: var(--space-xs);
    --ve-input-textarea-clear-offset-block: var(--space-xs);
    --ve-input-current-height: var(--ve-input-height-default);
    --ve-input-current-font-size: var(--ve-input-font-size-default);
    --ve-input-current-line-height: var(--ve-input-line-height-default);
    --ve-input-current-padding-inline: var(--ve-input-padding-inline-default);
    --ve-input-current-padding-block: var(--ve-input-padding-block-default);
  }

  :host([size='small']) {
    --ve-input-current-height: var(--ve-input-height-small);
    --ve-input-current-font-size: var(--ve-input-font-size-small);
    --ve-input-current-padding-inline: var(--ve-input-padding-inline-small);
    --ve-input-current-padding-block: var(--ve-input-padding-block-small);
  }

  :host([size='large']) {
    --ve-input-current-height: var(--ve-input-height-large);
    --ve-input-current-font-size: var(--ve-input-font-size-large);
    --ve-input-current-padding-inline: var(--ve-input-padding-inline-large);
    --ve-input-current-padding-block: var(--ve-input-padding-block-large);
  }

  @supports not (color: color-mix(in srgb, red, blue)) {
    :host {
      --ve-input-status-error-bg-hover: var(--ve-input-status-error-bg);
      --ve-input-status-warning-bg-hover: var(--ve-input-status-warning-bg);
      --ve-input-status-success-bg-hover: var(--ve-input-status-success-bg);
      --ve-input-icon-hover-bg: var(--ve-input-bg);
    }
  }
`,p=[d.H6,h,i.AH`
    :host {
      display: inline-flex;
      inline-size: 100%;
      vertical-align: top;
      box-sizing: border-box;
    }

    :host([hidden]) {
      display: none;
    }

    .ve-input-wrapper {
      position: relative;
      display: inline-flex;
      align-items: center;
      inline-size: 100%;
      min-inline-size: 0;
      block-size: var(--ve-input-current-height);
      box-sizing: border-box;
      padding-inline: var(--ve-input-current-padding-inline);
      border: var(--ve-input-border-width) solid var(--ve-input-border-color);
      border-radius: var(--ve-input-radius);
      background: var(--ve-input-bg);
      color: var(--ve-input-text-color);
      font-family: var(--ve-input-font-family);
      font-size: var(--ve-input-current-font-size);
      font-weight: var(--ve-input-font-weight);
      line-height: var(--ve-input-current-line-height);
      transition:
        border-color var(--ve-input-transition-duration)
          var(--ve-input-transition-timing),
        background-color var(--ve-input-transition-duration)
          var(--ve-input-transition-timing),
        box-shadow var(--ve-input-transition-duration)
          var(--ve-input-transition-timing),
        color var(--ve-input-transition-duration)
          var(--ve-input-transition-timing);
    }

    .ve-input-wrapper--auto-width {
      inline-size: auto;
      max-inline-size: 100%;
      overflow: hidden;
    }

    .ve-input-wrapper:not(.ve-input-wrapper--disabled):hover {
      border-color: var(--ve-input-border-color-hover);
      background: var(--ve-input-bg-hover);
    }

    .ve-input-wrapper:not(.ve-input-wrapper--disabled):focus-within {
      border-color: var(--ve-input-border-color-focus);
      background: var(--ve-input-bg-focus);
      box-shadow: var(--ve-input-shadow-focus);
    }

    .ve-input-wrapper--error {
      background: var(--ve-input-status-error-bg);
      border-color: var(--ve-input-status-error-border);
    }

    .ve-input-wrapper--error:not(.ve-input-wrapper--disabled):hover {
      background: var(--ve-input-status-error-bg-hover);
      border-color: var(--ve-input-status-error-border-hover);
    }

    .ve-input-wrapper--error:not(.ve-input-wrapper--disabled):focus-within {
      border-color: var(--ve-input-status-error-border-focus);
      background: var(--ve-input-bg-focus);
      box-shadow: var(--ve-input-status-error-shadow-focus);
    }

    .ve-input-wrapper--warning {
      background: var(--ve-input-status-warning-bg);
      border-color: var(--ve-input-status-warning-border);
    }

    .ve-input-wrapper--warning:not(.ve-input-wrapper--disabled):hover {
      background: var(--ve-input-status-warning-bg-hover);
      border-color: var(--ve-input-status-warning-border-hover);
    }

    .ve-input-wrapper--warning:not(.ve-input-wrapper--disabled):focus-within {
      border-color: var(--ve-input-status-warning-border-focus);
      background: var(--ve-input-bg-focus);
      box-shadow: var(--ve-input-status-warning-shadow-focus);
    }

    .ve-input-wrapper--success {
      background: var(--ve-input-status-success-bg);
      border-color: var(--ve-input-status-success-border);
    }

    .ve-input-wrapper--success:not(.ve-input-wrapper--disabled):hover {
      background: var(--ve-input-status-success-bg-hover);
      border-color: var(--ve-input-status-success-border-hover);
    }

    .ve-input-wrapper--success:not(.ve-input-wrapper--disabled):focus-within {
      border-color: var(--ve-input-status-success-border-focus);
      background: var(--ve-input-bg-focus);
      box-shadow: var(--ve-input-status-success-shadow-focus);
    }

    .ve-input-wrapper--disabled,
    .ve-input-wrapper--disabled:hover,
    .ve-input-wrapper--disabled:focus-within {
      background: var(--ve-input-disabled-bg);
      border-color: var(--ve-input-disabled-border-color);
      color: var(--ve-input-disabled-text);
      box-shadow: none;
      cursor: not-allowed;
    }

    .ve-input-control {
      inline-size: 100%;
      min-inline-size: 0;
      border: none;
      outline: none;
      background: transparent;
      color: inherit;
      font: inherit;
      line-height: inherit;
      padding: 0;
      margin: 0;
      flex: 1 1 auto;
      box-sizing: border-box;
      appearance: none;
      -webkit-tap-highlight-color: transparent;
    }

    .ve-input-control::placeholder {
      color: var(--ve-input-placeholder-color);
    }

    .ve-input-control:disabled {
      color: var(--ve-input-disabled-text);
      -webkit-text-fill-color: var(--ve-input-disabled-text);
      cursor: not-allowed;
    }

    .ve-input-wrapper--disabled .ve-input-control::placeholder {
      color: var(--ve-input-disabled-text);
    }

    .ve-input-field {
      padding-block: var(--ve-input-current-padding-block);
      padding-inline: 0;
      line-height: var(--ve-input-current-line-height);
      text-overflow: ellipsis;
    }

    .ve-input-wrapper--auto-width .ve-input-field {
      flex: 1 1 auto;
      max-inline-size: 100%;
    }

    .ve-input-prefix,
    .ve-input-suffix {
      display: inline-flex;
      align-items: center;
      block-size: 100%;
      white-space: nowrap;
      color: var(--ve-input-prefix-color);
      user-select: none;
      flex: none;
    }

    .ve-input-wrapper--has-prefix > .ve-input-field {
      padding-inline-start: var(--ve-input-affix-gap);
    }

    .ve-input-suffix {
      color: var(--ve-input-suffix-color);
    }

    .ve-input-word-limit {
      font-size: var(--ve-input-word-limit-font-size);
      color: var(--ve-input-word-limit-color);
      font-variant-numeric: tabular-nums;
      padding-inline-start: var(--space-xxs);
    }

    .ve-input-word-limit--error {
      color: var(--ve-input-word-limit-error-color);
    }

    .ve-input-clear {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      inline-size: var(--ve-input-action-size);
      block-size: var(--ve-input-action-size);
      border: none;
      border-radius: var(--radius-full);
      background: transparent;
      color: var(--ve-input-icon-color);
      cursor: pointer;
      padding: 0;
      margin-inline-start: 0;
      flex: none;
      visibility: hidden;
      transition:
        color var(--ve-input-transition-duration)
          var(--ve-input-transition-timing),
        background-color var(--ve-input-transition-duration)
          var(--ve-input-transition-timing);
    }

    .ve-input-wrapper:hover .ve-input-clear,
    .ve-input-wrapper:focus-within .ve-input-clear {
      visibility: visible;
    }

    .ve-input-clear:hover,
    .ve-input-clear:focus-visible {
      background: var(--ve-input-icon-hover-bg);
    }

    .ve-input-clear:focus-visible {
      outline: none;
    }

    .ve-input-clear ve-icon {
      --ve-icon-size: var(--ve-input-icon-size);

      display: inline-flex;
      flex: none;
    }

    .ve-input-mirror {
      position: absolute;
      inset-block-start: 0;
      inset-inline-start: 0;
      white-space: pre;
      visibility: hidden;
      pointer-events: none;
      user-select: none;
      font: inherit;
      letter-spacing: inherit;
      text-transform: inherit;
      text-indent: inherit;
    }

    .ve-textarea-wrapper {
      position: relative;
      display: inline-block;
      inline-size: 100%;
      vertical-align: top;
      box-sizing: border-box;
    }

    .ve-textarea-wrapper--word-limit-outside {
      display: inline-flex;
      flex-direction: column;
      align-items: stretch;
    }

    .ve-input-textarea {
      display: block;
      inline-size: 100%;
      min-block-size: var(--ve-input-current-height);
      box-sizing: border-box;
      border: var(--ve-input-border-width) solid var(--ve-input-border-color);
      border-radius: var(--ve-input-radius);
      padding: var(--ve-input-textarea-padding-block)
        var(--ve-input-textarea-padding-inline);
      background: var(--ve-input-bg);
      color: var(--ve-input-text-color);
      font-family: var(--ve-input-font-family);
      font-size: var(--ve-input-current-font-size);
      font-weight: var(--ve-input-font-weight);
      line-height: var(--ve-input-line-height-default);
      outline: none;
      resize: vertical;
      transition:
        border-color var(--ve-input-transition-duration)
          var(--ve-input-transition-timing),
        background-color var(--ve-input-transition-duration)
          var(--ve-input-transition-timing),
        box-shadow var(--ve-input-transition-duration)
          var(--ve-input-transition-timing);
    }

    .ve-input-textarea::placeholder {
      color: var(--ve-input-placeholder-color);
    }

    .ve-input-textarea:not(:disabled):hover {
      border-color: var(--ve-input-border-color-hover);
      background: var(--ve-input-bg-hover);
    }

    .ve-input-textarea:not(:disabled):focus {
      border-color: var(--ve-input-border-color-focus);
      background: var(--ve-input-bg-focus);
      box-shadow: var(--ve-input-shadow-focus);
    }

    .ve-textarea-wrapper--error .ve-input-textarea {
      background: var(--ve-input-status-error-bg);
      border-color: var(--ve-input-status-error-border);
    }

    .ve-textarea-wrapper--error .ve-input-textarea:not(:disabled):hover {
      background: var(--ve-input-status-error-bg-hover);
      border-color: var(--ve-input-status-error-border-hover);
    }

    .ve-textarea-wrapper--error .ve-input-textarea:not(:disabled):focus {
      border-color: var(--ve-input-status-error-border-focus);
      background: var(--ve-input-bg-focus);
      box-shadow: var(--ve-input-status-error-shadow-focus);
    }

    .ve-textarea-wrapper--warning .ve-input-textarea {
      background: var(--ve-input-status-warning-bg);
      border-color: var(--ve-input-status-warning-border);
    }

    .ve-textarea-wrapper--warning .ve-input-textarea:not(:disabled):hover {
      background: var(--ve-input-status-warning-bg-hover);
      border-color: var(--ve-input-status-warning-border-hover);
    }

    .ve-textarea-wrapper--warning .ve-input-textarea:not(:disabled):focus {
      border-color: var(--ve-input-status-warning-border-focus);
      background: var(--ve-input-bg-focus);
      box-shadow: var(--ve-input-status-warning-shadow-focus);
    }

    .ve-textarea-wrapper--success .ve-input-textarea {
      background: var(--ve-input-status-success-bg);
      border-color: var(--ve-input-status-success-border);
    }

    .ve-textarea-wrapper--success .ve-input-textarea:not(:disabled):hover {
      background: var(--ve-input-status-success-bg-hover);
      border-color: var(--ve-input-status-success-border-hover);
    }

    .ve-textarea-wrapper--success .ve-input-textarea:not(:disabled):focus {
      border-color: var(--ve-input-status-success-border-focus);
      background: var(--ve-input-bg-focus);
      box-shadow: var(--ve-input-status-success-shadow-focus);
    }

    .ve-textarea-wrapper--disabled .ve-input-textarea,
    .ve-textarea-wrapper--disabled .ve-input-textarea:hover,
    .ve-textarea-wrapper--disabled .ve-input-textarea:focus {
      background: var(--ve-input-disabled-bg);
      border-color: var(--ve-input-disabled-border-color);
      color: var(--ve-input-disabled-text);
      box-shadow: none;
      cursor: not-allowed;
      resize: none;
    }

    .ve-textarea-wrapper--disabled .ve-input-textarea::placeholder {
      color: var(--ve-input-disabled-text);
    }

    .ve-textarea-wrapper--clearable .ve-input-textarea {
      padding-inline-end: calc(
        var(--ve-input-textarea-padding-inline) + var(--ve-input-action-size) +
          var(--space-xxs)
      );
    }

    .ve-input-clear--textarea {
      position: absolute;
      inset-inline-end: var(--ve-input-textarea-clear-offset-inline);
      inset-block-start: var(--ve-input-textarea-clear-offset-block);
      margin-inline-start: 0;
      display: none;
      visibility: visible;
    }

    .ve-textarea-wrapper:hover .ve-input-clear--textarea,
    .ve-textarea-wrapper:focus-within .ve-input-clear--textarea {
      display: inline-flex;
    }

    .ve-textarea-word-limit {
      position: absolute;
      inset-inline-end: var(--ve-input-textarea-word-limit-offset-inline);
      inset-block-end: var(--ve-input-textarea-word-limit-offset-block);
      font-size: var(--ve-input-word-limit-font-size);
      line-height: var(--ve-input-line-height-default);
      color: var(--ve-input-word-limit-color);
      font-variant-numeric: tabular-nums;
      user-select: none;
      white-space: nowrap;
    }

    .ve-textarea-wrapper--clearable .ve-textarea-word-limit {
      inset-inline-end: calc(
        var(--ve-input-textarea-word-limit-offset-inline) +
          var(--ve-input-action-size) + var(--space-xxs)
      );
    }

    .ve-textarea-word-limit--outside {
      position: static;
      align-self: flex-end;
      margin-block-start: var(--space-xxxs);
    }

    .ve-textarea-word-limit--error {
      color: var(--ve-input-word-limit-error-color);
    }

    @media (prefers-reduced-motion: reduce) {
      .ve-input-wrapper,
      .ve-input-textarea,
      .ve-input-clear {
        transition: none;
      }
    }
  `];function g(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function b(e){if(Object(e)!==e)throw TypeError("right-hand side of 'in' should be an object, got "+(null!==e?typeof e:"null"));return e}function m(e,t,r){"symbol"==typeof t&&(t=(t=t.description)?"["+t+"]":"");try{Object.defineProperty(e,"name",{configurable:!0,value:r?r+" "+t:t})}catch(n){}return e}let f,_,w,y,x,k,S,C,z,E,O,M,A,I,P,T,$,R,D,F,L,V,j,q,H,B,N,W,K,U,Z,G,J,X,Y,Q,ee,te,re,ne,oe,ie,ae,se,le,ce,de,ue,ve,he,pe,ge,be,me,fe,_e;const we="ve-input",ye=["aria-label","aria-labelledby","aria-describedby"];function xe(e){return"object"==typeof e&&null!==e}function ke(e){return e.nodeType===Node.ELEMENT_NODE||e.nodeType===Node.TEXT_NODE&&!!e.textContent?.trim().length}function Se(e){if("number"==typeof e&&Number.isFinite(e)&&!(e<=0))return Math.floor(e)}function Ce(e){if(void 0===e)return;if("number"==typeof e)return Number.isFinite(e)?`${e}px`:void 0;const t=e.trim();return t?/^-?\d+(\.\d+)?$/.test(t)?`${t}px`:t:void 0}const ze={fromAttribute(e){if(null===e)return;const t=e.trim();if(t){try{const e=JSON.parse(t);if("number"==typeof e)return Se(e);if(xe(e)){const t=Se(e.length);if(!t)return;return{length:t,errorOnly:!0===e.errorOnly}}}catch{}return Se(Number(t))}},toAttribute:e=>void 0===e?null:"number"==typeof e?String(e):JSON.stringify(e)},Ee={fromAttribute(e){if(null===e)return!1;const t=e.trim();if(!t||"true"===t)return!0;if("false"===t)return!1;try{const e=JSON.parse(t);if("boolean"==typeof e)return e;if(xe(e)){const t=Se(e.minRows),r=Se(e.maxRows);return{...void 0!==t?{minRows:t}:{},...void 0!==r?{maxRows:r}:{}}}}catch{}return!0},toAttribute:e=>!1===e?null:!0===e?"":JSON.stringify(e)},Oe={fromAttribute(e){if(null===e)return!1;const t=e.trim();if(!t||"true"===t)return!0;if("false"===t)return!1;try{const e=JSON.parse(t);if("boolean"==typeof e)return e;if(xe(e)){const t="number"==typeof e.minWidth||"string"==typeof e.minWidth?e.minWidth:void 0,r="number"==typeof e.maxWidth||"string"==typeof e.maxWidth?e.maxWidth:void 0;return{...void 0!==t?{minWidth:t}:{},...void 0!==r?{maxWidth:r}:{}}}}catch{}return!0},toAttribute:e=>!1===e?null:!0===e?"":JSON.stringify(e)};f=(0,c.MZ)({type:String}),_=(0,c.MZ)({type:String,attribute:"default-value"}),w=(0,c.MZ)({type:String,reflect:!0,useDefault:!0}),y=(0,c.MZ)({type:String}),x=(0,c.MZ)({type:String,reflect:!0,useDefault:!0}),k=(0,c.MZ)({type:String,reflect:!0,useDefault:!0}),S=(0,c.MZ)({type:Boolean,reflect:!0}),C=(0,c.MZ)({type:Boolean,reflect:!0}),z=(0,c.MZ)({attribute:"max-length",converter:ze}),E=(0,c.MZ)({type:String,attribute:"word-limit",reflect:!0,useDefault:!0}),O=(0,c.MZ)({type:Number,reflect:!0,useDefault:!0}),M=(0,c.MZ)({attribute:"auto-size",converter:Ee}),A=(0,c.MZ)({attribute:"auto-width",converter:Oe}),I=(0,c.P)(".ve-input-control"),P=(0,c.P)(".ve-input-mirror"),T=(0,c.P)('slot[name="prefix"]'),$=(0,c.P)('slot[name="suffix"]'),R=(0,c.wk)(),D=(0,c.wk)();class Me extends d.IB{static{({e:[F,L,V,j,q,H,B,N,W,K,U,Z,G,J,X,Y,Q,ee,te,re,ne,oe,ie,ae,se,le,ce,de,ue,ve,he,pe,ge,be,me,fe,_e]}=function(e,t,r,n,o,i){var a,s,l,c,d,u,v,h=Symbol.metadata||Symbol.for("Symbol.metadata"),p=Object.defineProperty,f=Object.create,_=[f(null),f(null)],w=t.length;function y(t,r,n){return function(o,i){r&&(i=o,o=e);for(var a=0;a<t.length;a++)i=t[a].apply(o,n?[i]:[]);return n?i:o}}function x(e,t,r,n){if("function"!=typeof e&&(n||void 0!==e))throw new TypeError(t+" must "+(r||"be")+" a function"+(n?"":" or undefined"));return e}function k(e,t,r,n,o,i,l,c,d,u,v){function h(e){if(!v(e))throw new TypeError("Attempted to access private element on non-instance")}var g=[].concat(t[0]),b=t[3],f=!l,w=1===o,k=3===o,S=4===o,C=2===o;function z(t,r,n){return function(o,i){return r&&(i=o,o=e),n&&n(o),desc[t].call(o,i)}}var E={},O=[],M=k?"get":S||w?"set":"value";if(!f&&(d?(u||w?E={get:m(function(){return b(this)},n,"get"),set:function(e){t[4](this,e)}}:E[M]=b,u||m(E[M],n,C?"":M)):u||(E=Object.getOwnPropertyDescriptor(e,n)),!u&&!d)){if((s=_[+c][n])&&7!==(s^o))throw new Error("Decorating two elements with the same name ("+E[M].name+") is not supported yet");_[+c][n]=o<3?1:o}for(var A=e,I=g.length-1;I>=0;I-=r?2:1){var P=x(g[I],"A decorator","be",!0),T=r?g[I-1]:void 0,$={},R={kind:["field","accessor","method","getter","setter","class"][o],name:n,metadata:a,addInitializer:function(e,t){if(e.v)throw new TypeError("attempted to call addInitializer after decoration was finished");x(t,"An initializer","be",!0),i.push(t)}.bind(null,$)};if(f)s=P.call(T,A,R),$.v=1,x(s,"class decorators","return")&&(A=s);else if(R.static=c,R.private=d,s=R.access={has:d?v.bind():function(e){return n in e}},S||(s.get=d?C?function(e){return h(e),E.value}:z("get",0,h):function(e){return e[n]}),C||k||(s.set=d?z("set",0,h):function(e,t){e[n]=t}),A=P.call(T,w?{get:E.get,set:E.set}:E[M],R),$.v=1,w){if("object"==typeof A&&A)(s=x(A.get,"accessor.get"))&&(E.get=s),(s=x(A.set,"accessor.set"))&&(E.set=s),(s=x(A.init,"accessor.init"))&&O.unshift(s);else if(void 0!==A)throw new TypeError("accessor decorators must return an object with get, set, or init properties or undefined")}else x(A,(u?"field":"method")+" decorators","return")&&(u?O.unshift(A):E[M]=A)}return o<2&&l.push(y(O,c,1),y(i,c,0)),u||f||(d?w?l.splice(-1,0,z("get",c),z("set",c)):l.push(C?E[M]:x.call.bind(E[M])):p(e,n,E)),A}function S(e){return p(e,h,{configurable:!0,enumerable:!0,value:a})}return void 0!==i&&(a=i[h]),a=f(null==a?null:a),d=[],u=function(e){e&&d.push(y(e))},(v=function(t,n){for(var i=0;i<r.length;i++){var a=r[i],s=a[1],u=7&s;if((8&s)==t&&!u==n){var v=a[2],h=!!a[3],p=16&s;k(t?e:e.prototype,a,p,h?"#"+v:g(v),u,u<2?[]:t?c=c||[]:l=l||[],d,!!t,h,n,t&&h?function(t){return b(t)===e}:o)}}})(8,0),v(0,0),v(8,1),v(0,1),u(l),u(c),s=d,w||S(e),{e:s,get c(){var r=[];return w&&[S(e=k(e,[t],n,e.name,5,r)),y(r,1)]}}}(this,[],[[f,4,"value"],[_,1,"defaultValue"],[w,1,"type"],[y,1,"placeholder"],[x,1,"size"],[k,1,"status"],[S,1,"disabled"],[C,1,"clearable"],[z,1,"maxLength"],[E,1,"wordLimit"],[O,1,"rows"],[M,1,"autoSize"],[A,1,"autoWidth"],[I,1,"controlElement"],[P,1,"mirrorElement"],[T,1,"prefixSlotElement"],[$,1,"suffixSlotElement"],[R,1,"hasPrefixSlot"],[D,1,"hasSuffixSlot"]]))}static styles=p;static dependencies={[u.v]:u.O};static get observedAttributes(){return[...new Set([...super.observedAttributes,...ye])]}valueState=(_e(this),"");get value(){return this.valueState}set value(e){this.valueState=e??""}#M=(()=>{const e=F(this,"");return L(this),e})();get defaultValue(){return this.#M}set defaultValue(e){this.#M=e}#A=(()=>{const e=V(this,"text");return j(this),e})();get type(){return this.#A}set type(e){this.#A=e}#I=(()=>{const e=q(this,"");return H(this),e})();get placeholder(){return this.#I}set placeholder(e){this.#I=e}#P=(()=>{const e=B(this,"default");return N(this),e})();get size(){return this.#P}set size(e){this.#P=e}#T=(()=>{const e=W(this,"default");return K(this),e})();get status(){return this.#T}set status(e){this.#T=e}#$=(()=>{const e=U(this,!1);return Z(this),e})();get disabled(){return this.#$}set disabled(e){this.#$=e}#R=(()=>{const e=G(this,!1);return J(this),e})();get clearable(){return this.#R}set clearable(e){this.#R=e}#D=(()=>{const e=X(this,void 0);return Y(this),e})();get maxLength(){return this.#D}set maxLength(e){this.#D=e}#F=(()=>{const e=Q(this,"hidden");return ee(this),e})();get wordLimit(){return this.#F}set wordLimit(e){this.#F=e}#L=(()=>{const e=te(this,2);return re(this),e})();get rows(){return this.#L}set rows(e){this.#L=e}#V=(()=>{const e=ne(this,!1);return oe(this),e})();get autoSize(){return this.#V}set autoSize(e){this.#V=e}#j=(()=>{const e=ie(this,!1);return ae(this),e})();get autoWidth(){return this.#j}set autoWidth(e){this.#j=e}#q=(()=>{const e=se(this,null);return le(this),e})();get controlElement(){return this.#q}set controlElement(e){this.#q=e}#H=(()=>{const e=ce(this,null);return de(this),e})();get mirrorElement(){return this.#H}set mirrorElement(e){this.#H=e}#B=(()=>{const e=ue(this,null);return ve(this),e})();get prefixSlotElement(){return this.#B}set prefixSlotElement(e){this.#B=e}#N=(()=>{const e=he(this,null);return pe(this),e})();get suffixSlotElement(){return this.#N}set suffixSlotElement(e){this.#N=e}#W=(()=>{const e=ge(this,!1);return be(this),e})();get hasPrefixSlot(){return this.#W}set hasPrefixSlot(e){this.#W=e}#K=(()=>{const e=me(this,!1);return fe(this),e})();get hasSuffixSlot(){return this.#K}set hasSuffixSlot(e){this.#K=e}autoWidthFrame=0;textareaAutoSizeFrame=0;cachedAutoWidthFontSignature="";lightDomObserver=null;hasInitializedDefaultValue=!1;lastCommittedValue="";isComposing=!1;lastWordCountValue="";lastWordCount=0;get controlAriaLabel(){return this.getAttribute("aria-label")??void 0}get controlAriaLabelledby(){return this.getAttribute("aria-labelledby")??void 0}get controlAriaDescribedby(){return this.getAttribute("aria-describedby")??void 0}get normalizedSize(){return"small"===this.size||"large"===this.size?this.size:"default"}get isTextarea(){return"textarea"===this.type}get resolvedMaxLengthConfig(){if("number"==typeof this.maxLength){const e=Se(this.maxLength);if(!e)return;return{length:e,errorOnly:!1}}if(xe(this.maxLength)){const e=Se(this.maxLength.length);if(!e)return;return{length:e,errorOnly:!0===this.maxLength.errorOnly}}}get wordCount(){if(this.value===this.lastWordCountValue)return this.lastWordCount;const e=(t=this.value,Array.from(t).length);var t;return this.lastWordCountValue=this.value,this.lastWordCount=e,e}get hasLengthError(){const e=this.resolvedMaxLengthConfig;return!(!e||!e.errorOnly)&&this.wordCount>e.length}get mergedStatus(){return this.hasLengthError?"error":"error"===this.status||"warning"===this.status||"success"===this.status?this.status:"default"}get hasPrefixContent(){return this.hasPrefixSlot}get hasSuffixContent(){return!this.shouldShowWordLimitInInput&&this.hasSuffixSlot}get resolvedWordLimitMode(){return this.resolvedMaxLengthConfig?this.isTextarea?this.wordLimit:"hidden"===this.wordLimit?"hidden":"inside":"hidden"}get shouldShowWordLimitInInput(){return!this.isTextarea&&"inside"===this.resolvedWordLimitMode}get shouldShowWordLimitInsideTextarea(){return this.isTextarea&&"inside"===this.resolvedWordLimitMode}get shouldShowWordLimitOutsideTextarea(){return this.isTextarea&&"outside"===this.resolvedWordLimitMode}get resolvedWordLimitText(){const e=this.resolvedMaxLengthConfig?.length;return e?`${this.wordCount}/${e}`:""}get shouldShowClearButton(){return this.clearable&&!this.disabled&&this.value.length>0}get resolvedRows(){return!Number.isFinite(this.rows)||this.rows<=0?2:Math.floor(this.rows)}get resolvedAutoWidthConfig(){return!this.autoWidth||this.isTextarea?null:!0===this.autoWidth?{minWidth:0,maxWidth:"100%"}:{minWidth:this.autoWidth.minWidth??0,maxWidth:this.autoWidth.maxWidth??"100%"}}get nativeAriaInvalid(){return"error"===this.mergedStatus?"true":void 0}focus(e){this.controlElement?.focus(e)}blur(){this.controlElement?.blur()}connectedCallback(){super.connectedCallback(),this.lightDomObserver=new MutationObserver(()=>{this.syncSlotState()}),this.lightDomObserver.observe(this,{childList:!0,subtree:!0,characterData:!0,attributes:!0,attributeFilter:["slot"]}),this.hasInitializedDefaultValue||(!this.hasAttribute("value")&&0===this.value.length&&this.defaultValue&&(this.value=this.applyMaxLengthConstraint(this.defaultValue)),this.hasInitializedDefaultValue=!0),this.lastCommittedValue=this.value}firstUpdated(e){super.firstUpdated(e),this.syncSlotState(),this.syncControlValue(),this.scheduleAutoWidthUpdate(),this.scheduleTextareaAutoSizeUpdate()}updated(e){if(super.updated(e),e.has("value")||e.has("maxLength")){const e=this.applyMaxLengthConstraint(this.value);if(e!==this.value)return void(this.value=e)}e.has("value")&&this.syncControlValue(),(e.has("value")||e.has("placeholder")||e.has("autoWidth")||e.has("size")||e.has("type"))&&this.scheduleAutoWidthUpdate(),(e.has("value")||e.has("autoSize")||e.has("rows")||e.has("type")||e.has("disabled"))&&this.scheduleTextareaAutoSizeUpdate()}disconnectedCallback(){this.lightDomObserver?.disconnect(),this.lightDomObserver=null,"u"<typeof window||(this.autoWidthFrame&&(window.cancelAnimationFrame(this.autoWidthFrame),this.autoWidthFrame=0),this.textareaAutoSizeFrame&&(window.cancelAnimationFrame(this.textareaAutoSizeFrame),this.textareaAutoSizeFrame=0)),super.disconnectedCallback()}attributeChangedCallback(e,t,r){super.attributeChangedCallback(e,t,r),t!==r&&ye.includes(e)&&this.requestUpdate()}applyMaxLengthConstraint(e){const t=this.resolvedMaxLengthConfig;return!t||t.errorOnly?e:function(e,t){const r=Array.from(e);return r.length<=t?e:r.slice(0,t).join("")}(e,t.length)}syncControlValue(){this.controlElement&&this.controlElement.value!==this.value&&(this.controlElement.value=this.value)}syncSlotState(){this.hasPrefixSlot=this.hasNamedSlotContent("prefix",this.prefixSlotElement),this.hasSuffixSlot=this.hasNamedSlotContent("suffix",this.suffixSlotElement)}hasNamedSlotContent(e,t){return!(!(r=t)||!r.assignedNodes({flatten:!0}).some(ke))||Array.from(this.childNodes).some(t=>t instanceof HTMLElement&&t.slot===e&&ke(t));var r}scheduleTextareaAutoSizeUpdate(){"u"<typeof window||(this.textareaAutoSizeFrame&&window.cancelAnimationFrame(this.textareaAutoSizeFrame),this.textareaAutoSizeFrame=window.requestAnimationFrame(()=>{this.textareaAutoSizeFrame=0,this.updateTextareaAutoSize()}))}scheduleAutoWidthUpdate(){"u"<typeof window||(this.autoWidthFrame&&window.cancelAnimationFrame(this.autoWidthFrame),this.autoWidthFrame=window.requestAnimationFrame(()=>{this.autoWidthFrame=0,this.updateAutoWidth()}))}updateTextareaAutoSize(){if(!this.isTextarea||"u"<typeof window)return;if(!(this.controlElement instanceof HTMLTextAreaElement))return;const e=this.controlElement;if(!this.autoSize)return e.style.removeProperty("overflow-y"),void e.style.removeProperty("height");e.style.height="auto";const t=window.getComputedStyle(e),r=Number.parseFloat(t.fontSize)||14,n=Number.parseFloat(t.lineHeight),o=Number.isFinite(n)?n:1.5*r,i=(Number.parseFloat(t.paddingTop)||0)+(Number.parseFloat(t.paddingBottom)||0)+(Number.parseFloat(t.borderTopWidth)||0)+(Number.parseFloat(t.borderBottomWidth)||0),a=!0===this.autoSize?void 0:this.autoSize,s=Se(a?.minRows),l=Se(a?.maxRows),c=s?s*o+i:void 0,d=l?l*o+i:void 0;let u=e.scrollHeight;void 0!==c&&(u=Math.max(u,c));let v="hidden";void 0!==d&&u>d&&(u=d,v="auto"),e.style.height=`${u}px`,e.style.overflowY=v}updateAutoWidth(){if(!this.resolvedAutoWidthConfig||"u"<typeof window||this.isTextarea)return void(this.controlElement instanceof HTMLInputElement&&(this.controlElement.style.removeProperty("width"),this.controlElement.style.removeProperty("min-width"),this.controlElement.style.removeProperty("max-width")));if(!(this.controlElement instanceof HTMLInputElement))return;if(!this.mirrorElement)return;const e=this.controlElement,t=this.mirrorElement,r=window.getComputedStyle(e),n=[r.font,r.letterSpacing,r.textIndent,r.textTransform].join("|");n!==this.cachedAutoWidthFontSignature&&(this.cachedAutoWidthFontSignature=n,t.style.font=r.font,t.style.letterSpacing=r.letterSpacing,t.style.textIndent=r.textIndent,t.style.textTransform=r.textTransform),t.textContent=this.value||this.placeholder||"\xa0";const o=Math.ceil(t.getBoundingClientRect().width+2);e.style.width=`${o}px`,e.style.minWidth="0",e.style.maxWidth="100%"}dispatchInputEvent(e){this.dispatchEvent(new CustomEvent("ve-input",{detail:e,bubbles:!0,composed:!0}))}dispatchChangeEvent(e){this.dispatchEvent(new CustomEvent("ve-change",{detail:e,bubbles:!0,composed:!0}))}handleInput(e){const t=e.target;if(!(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement))return;if(e.stopPropagation(),e.isComposing||this.isComposing)return;const r=this.applyMaxLengthConstraint(t.value);t.value!==r&&(t.value=r);const n=this.value;this.value=r,n!==r&&this.dispatchInputEvent({value:r,oldValue:n,source:"input",sourceEvent:e})}handleChange(e){const t=e.target;if(!(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement))return;e.stopPropagation();const r=this.applyMaxLengthConstraint(t.value);t.value!==r&&(t.value=r),this.value=r,this.lastCommittedValue!==r&&(this.dispatchChangeEvent({value:r,oldValue:this.lastCommittedValue,source:"input",sourceEvent:e}),this.lastCommittedValue=r)}handleClearClick(e){e.stopPropagation();const t=this.value;this.value="",this.syncControlValue(),""!==t&&this.dispatchInputEvent({value:"",oldValue:t,source:"clear",sourceEvent:e}),""!==this.lastCommittedValue&&(this.dispatchChangeEvent({value:"",oldValue:this.lastCommittedValue,source:"clear",sourceEvent:e}),this.lastCommittedValue=""),this.controlElement?.focus()}handleKeepFocusMouseDown(e){e.preventDefault()}isInteractiveEventPath(e){const t="function"==typeof e.composedPath?e.composedPath():[e.target];for(const r of t){if(r===e.currentTarget||r===this)break;if(r instanceof HTMLElement&&r.matches('a[href],button,input,textarea,select,summary,[role="button"],[role="link"],[role="menuitem"],[role="option"],[role="switch"],[role="checkbox"],[role="radio"],[role="tab"],[contenteditable=""],[contenteditable="true"],[tabindex]:not([tabindex="-1"])'))return!0}return!1}handleWrapperMouseDown(e){this.disabled||this.isInteractiveEventPath(e)||e.preventDefault()}handleWrapperClick(e){this.disabled||this.isInteractiveEventPath(e)||this.controlElement?.focus()}handleCompositionStart(){this.isComposing=!0}handleCompositionEnd(e){this.isComposing=!1;const t=e.target;if(!(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement))return;const r=this.applyMaxLengthConstraint(t.value);if(t.value===r&&this.value===r)return;const n=this.value;t.value=r,this.value=r,this.dispatchInputEvent({value:r,oldValue:n,source:"input",sourceEvent:e})}handleSlotChange(){this.syncSlotState()}renderClearButton(){return this.shouldShowClearButton?i.qy`
      <button
        class=${(0,a.H)({"ve-input-clear":!0,"ve-input-clear--textarea":this.isTextarea})}
        part="clear"
        type="button"
        tabindex=${(0,s.J)(this.disabled?"-1":void 0)}
        aria-label=${"Clear"}
        @mousedown=${this.handleKeepFocusMouseDown}
        @click=${this.handleClearClick}
      >
        <ve-icon .definition=${v.u}></ve-icon>
      </button>
    `:i.s6}renderPrefix(){return this.hasPrefixContent?i.qy`
      <span class="ve-input-prefix" part="prefix">
        <slot name="prefix" @slotchange=${this.handleSlotChange}></slot>
      </span>
    `:i.s6}renderSuffix(){return this.shouldShowWordLimitInInput?i.qy`
        <span
          class=${(0,a.H)({"ve-input-suffix":!0,"ve-input-word-limit":!0,"ve-input-word-limit--error":this.hasLengthError})}
          part="word-limit"
        >
          ${this.resolvedWordLimitText}
        </span>
      `:this.hasSuffixContent?i.qy`
      <span class="ve-input-suffix" part="suffix">
        <slot name="suffix" @slotchange=${this.handleSlotChange}></slot>
      </span>
    `:i.s6}getInputWrapperStyles(){const e={},t=this.resolvedAutoWidthConfig;if(t){e.width="auto";const r=Ce(t.minWidth),n=Ce(t.maxWidth);r&&(e.minWidth=r),n&&(e.maxWidth=n)}return e}getTextareaStyles(){const e={};return(this.autoSize||this.disabled)&&(e.resize="none"),e}renderControl(){return this.isTextarea?i.qy`
        <textarea
          class="ve-input-control ve-input-textarea"
          part="input"
          .value=${this.value}
          rows=${this.resolvedRows}
          style=${(0,l.W)(this.getTextareaStyles())}
          placeholder=${(0,s.J)(this.placeholder||void 0)}
          aria-label=${(0,s.J)(this.controlAriaLabel)}
          aria-labelledby=${(0,s.J)(this.controlAriaLabelledby)}
          aria-describedby=${(0,s.J)(this.controlAriaDescribedby)}
          aria-invalid=${(0,s.J)(this.nativeAriaInvalid)}
          ?disabled=${this.disabled}
          @input=${this.handleInput}
          @change=${this.handleChange}
          @compositionstart=${this.handleCompositionStart}
          @compositionend=${this.handleCompositionEnd}
        ></textarea>
      `:i.qy`
      <input
        class="ve-input-control ve-input-field"
        part="input"
        .value=${this.value}
        type="text"
        placeholder=${(0,s.J)(this.placeholder||void 0)}
        aria-label=${(0,s.J)(this.controlAriaLabel)}
        aria-labelledby=${(0,s.J)(this.controlAriaLabelledby)}
        aria-describedby=${(0,s.J)(this.controlAriaDescribedby)}
        aria-invalid=${(0,s.J)(this.nativeAriaInvalid)}
        ?disabled=${this.disabled}
        @input=${this.handleInput}
        @change=${this.handleChange}
        @compositionstart=${this.handleCompositionStart}
        @compositionend=${this.handleCompositionEnd}
      />
    `}render(){if(this.isTextarea){const e=(0,a.H)({"ve-textarea-wrapper":!0,[`ve-textarea-wrapper--${this.normalizedSize}`]:!0,"ve-textarea-wrapper--disabled":this.disabled,"ve-textarea-wrapper--error":"error"===this.mergedStatus,"ve-textarea-wrapper--warning":"warning"===this.mergedStatus,"ve-textarea-wrapper--success":"success"===this.mergedStatus,"ve-textarea-wrapper--word-limit-outside":this.shouldShowWordLimitOutsideTextarea,"ve-textarea-wrapper--clearable":this.clearable});return i.qy`
        <div
          class=${e}
          style=${(0,l.W)(this.getInputWrapperStyles())}
          part="wrapper"
          @mousedown=${this.handleWrapperMouseDown}
          @click=${this.handleWrapperClick}
        >
          ${this.renderControl()} ${this.renderClearButton()}
          ${this.shouldShowWordLimitInsideTextarea?i.qy`
                <span
                  class=${(0,a.H)({"ve-textarea-word-limit":!0,"ve-textarea-word-limit--error":this.hasLengthError})}
                  part="word-limit"
                >
                  ${this.resolvedWordLimitText}
                </span>
              `:i.s6}
          ${this.shouldShowWordLimitOutsideTextarea?i.qy`
                <span
                  class=${(0,a.H)({"ve-textarea-word-limit":!0,"ve-textarea-word-limit--outside":!0,"ve-textarea-word-limit--error":this.hasLengthError})}
                  part="word-limit"
                >
                  ${this.resolvedWordLimitText}
                </span>
              `:i.s6}
        </div>
      `}const e=(0,a.H)({"ve-input-wrapper":!0,[`ve-input-wrapper--${this.normalizedSize}`]:!0,"ve-input-wrapper--disabled":this.disabled,"ve-input-wrapper--error":"error"===this.mergedStatus,"ve-input-wrapper--warning":"warning"===this.mergedStatus,"ve-input-wrapper--success":"success"===this.mergedStatus,"ve-input-wrapper--auto-width":null!==this.resolvedAutoWidthConfig,"ve-input-wrapper--has-prefix":this.hasPrefixContent,"ve-input-wrapper--clearable":this.clearable});return i.qy`
      <div
        class=${e}
        style=${(0,l.W)(this.getInputWrapperStyles())}
        part="wrapper"
        @mousedown=${this.handleWrapperMouseDown}
        @click=${this.handleWrapperClick}
      >
        ${this.renderPrefix()} ${this.renderControl()}
        ${this.renderClearButton()} ${this.renderSuffix()}
        ${null!==this.resolvedAutoWidthConfig?i.qy`<span class="ve-input-mirror" aria-hidden="true"></span>`:i.s6}
      </div>
    `}}(0,d.Xq)(we,Me);var Ae=r(35780),Ie=r(74410);const Pe=(0,Ae.h)({tagName:we,elementClass:Me,react:o,events:{onInput:"ve-input",onChange:"ve-change"},ownEvents:["onChange"]}),Te=n.forwardRef(({prefix:e,suffix:t,children:r,...o},i)=>{const{value:a,...s}=o,l="value"in o?{value:a??""}:{};return n.createElement(Pe,{...s,...l,ref:i},(0,Ie.M2)([["prefix",e],["suffix",t]]),r)});Te.displayName="Input"},26882(e,t,r){r.d(t,{Q:()=>Xe});var n=r(30758),o=r.t(n,2),i=r(46140),a=r(99576),s=r(45080),l=r(67286),c=r(61834),d=r(94023),u=r(17400),v=r(40362),h=r(36832);const p=s.AH`
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
`,g=[d.H6,p,s.AH`
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
  `];function b(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function m(e){if(Object(e)!==e)throw TypeError("right-hand side of 'in' should be an object, got "+(null!==e?typeof e:"null"));return e}function f(e,t,r){"symbol"==typeof t&&(t=(t=t.description)?"["+t+"]":"");try{Object.defineProperty(e,"name",{configurable:!0,value:r?r+" "+t:t})}catch(n){}return e}let _,w,y,x,k,S,C,z,E,O,M,A,I,P,T,$,R,D,F,L,V,j,q,H,B,N,W,K,U,Z,G,J,X,Y,Q,ee,te,re,ne,oe,ie,ae,se,le,ce,de,ue,ve;const he="ve-message",pe="ve-close",ge="ve-after-close",be=["info","success","warning","error","loading"],me=3e3,fe={fromAttribute:e=>null===e||"false"!==e,toAttribute:e=>e?null:"false"};function _e(e,t){return Number.isFinite(e)&&e>=0?e:t}_=(0,c.MZ)({type:String,reflect:!0,useDefault:!0}),w=(0,c.MZ)({type:String,reflect:!0}),y=(0,c.MZ)({type:String,attribute:"message-id",reflect:!0}),x=(0,c.MZ)({type:String,reflect:!0,useDefault:!0}),k=(0,c.MZ)({attribute:"show-icon",reflect:!0,converter:fe,useDefault:!0}),S=(0,c.MZ)({type:Boolean,reflect:!0}),C=(0,c.MZ)({type:Number,reflect:!0,useDefault:!0}),z=(0,c.MZ)({type:Number,attribute:"enter-duration",reflect:!0,useDefault:!0}),E=(0,c.MZ)({type:Number,attribute:"exit-duration",reflect:!0,useDefault:!0}),O=(0,c.P)('slot[name="icon"]'),M=(0,c.P)('slot[name="close-icon"]'),A=(0,c.P)(".ve-message-content"),I=(0,c.wk)(),P=(0,c.wk)(),T=(0,c.wk)(),$=(0,c.wk)();class we extends d.IB{static{({e:[R,D,F,L,V,j,q,H,B,N,W,K,U,Z,G,J,X,Y,Q,ee,te,re,ne,oe,ie,ae,se,le,ce,de,ue,ve]}=function(e,t,r,n,o,i){var a,s,l,c,d,u,v,h=Symbol.metadata||Symbol.for("Symbol.metadata"),p=Object.defineProperty,g=Object.create,_=[g(null),g(null)],w=t.length;function y(t,r,n){return function(o,i){r&&(i=o,o=e);for(var a=0;a<t.length;a++)i=t[a].apply(o,n?[i]:[]);return n?i:o}}function x(e,t,r,n){if("function"!=typeof e&&(n||void 0!==e))throw new TypeError(t+" must "+(r||"be")+" a function"+(n?"":" or undefined"));return e}function k(e,t,r,n,o,i,l,c,d,u,v){function h(e){if(!v(e))throw new TypeError("Attempted to access private element on non-instance")}var g=[].concat(t[0]),b=t[3],m=!l,w=1===o,k=3===o,S=4===o,C=2===o;function z(t,r,n){return function(o,i){return r&&(i=o,o=e),n&&n(o),desc[t].call(o,i)}}var E={},O=[],M=k?"get":S||w?"set":"value";if(!m&&(d?(u||w?E={get:f(function(){return b(this)},n,"get"),set:function(e){t[4](this,e)}}:E[M]=b,u||f(E[M],n,C?"":M)):u||(E=Object.getOwnPropertyDescriptor(e,n)),!u&&!d)){if((s=_[+c][n])&&7!==(s^o))throw new Error("Decorating two elements with the same name ("+E[M].name+") is not supported yet");_[+c][n]=o<3?1:o}for(var A=e,I=g.length-1;I>=0;I-=r?2:1){var P=x(g[I],"A decorator","be",!0),T=r?g[I-1]:void 0,$={},R={kind:["field","accessor","method","getter","setter","class"][o],name:n,metadata:a,addInitializer:function(e,t){if(e.v)throw new TypeError("attempted to call addInitializer after decoration was finished");x(t,"An initializer","be",!0),i.push(t)}.bind(null,$)};if(m)s=P.call(T,A,R),$.v=1,x(s,"class decorators","return")&&(A=s);else if(R.static=c,R.private=d,s=R.access={has:d?v.bind():function(e){return n in e}},S||(s.get=d?C?function(e){return h(e),E.value}:z("get",0,h):function(e){return e[n]}),C||k||(s.set=d?z("set",0,h):function(e,t){e[n]=t}),A=P.call(T,w?{get:E.get,set:E.set}:E[M],R),$.v=1,w){if("object"==typeof A&&A)(s=x(A.get,"accessor.get"))&&(E.get=s),(s=x(A.set,"accessor.set"))&&(E.set=s),(s=x(A.init,"accessor.init"))&&O.unshift(s);else if(void 0!==A)throw new TypeError("accessor decorators must return an object with get, set, or init properties or undefined")}else x(A,(u?"field":"method")+" decorators","return")&&(u?O.unshift(A):E[M]=A)}return o<2&&l.push(y(O,c,1),y(i,c,0)),u||m||(d?w?l.splice(-1,0,z("get",c),z("set",c)):l.push(C?E[M]:x.call.bind(E[M])):p(e,n,E)),A}function S(e){return p(e,h,{configurable:!0,enumerable:!0,value:a})}return void 0!==i&&(a=i[h]),a=g(null==a?null:a),d=[],u=function(e){e&&d.push(y(e))},(v=function(t,n){for(var i=0;i<r.length;i++){var a=r[i],s=a[1],u=7&s;if((8&s)==t&&!u==n){var v=a[2],h=!!a[3],p=16&s;k(t?e:e.prototype,a,p,h?"#"+v:b(v),u,u<2?[]:t?c=c||[]:l=l||[],d,!!t,h,n,t&&h?function(t){return m(t)===e}:o)}}})(8,0),v(0,0),v(8,1),v(0,1),u(l),u(c),s=d,w||S(e),{e:s,get c(){var r=[];return w&&[S(e=k(e,[t],n,e.name,5,r)),y(r,1)]}}}(this,[],[[_,1,"type"],[w,1,"content"],[y,1,"messageId"],[x,1,"position"],[k,1,"showIcon"],[S,1,"closable"],[C,1,"duration"],[z,1,"enterDuration"],[E,1,"exitDuration"],[O,1,"iconSlot"],[M,1,"closeIconSlot"],[A,1,"contentElement"],[I,1,"hasIconSlot"],[P,1,"hasCloseIconSlot"],[T,1,"contentMultiline"],[$,1,"phase"]]))}static styles=g;static dependencies={[u.v]:u.O};#U=(()=>{const e=R(this,"info");return D(this),e})();get type(){return this.#U}set type(e){this.#U=e}#Z=(()=>{const e=F(this,"");return L(this),e})();get content(){return this.#Z}set content(e){this.#Z=e}#G=(()=>{const e=V(this,"");return j(this),e})();get messageId(){return this.#G}set messageId(e){this.#G=e}#J=(()=>{const e=q(this,"top");return H(this),e})();get position(){return this.#J}set position(e){this.#J=e}#X=(()=>{const e=B(this,!0);return N(this),e})();get showIcon(){return this.#X}set showIcon(e){this.#X=e}#Y=(()=>{const e=W(this,!1);return K(this),e})();get closable(){return this.#Y}set closable(e){this.#Y=e}#Q=(()=>{const e=U(this,me);return Z(this),e})();get duration(){return this.#Q}set duration(e){this.#Q=e}#ee=(()=>{const e=G(this,100);return J(this),e})();get enterDuration(){return this.#ee}set enterDuration(e){this.#ee=e}#te=(()=>{const e=X(this,300);return Y(this),e})();get exitDuration(){return this.#te}set exitDuration(e){this.#te=e}#re=(()=>{const e=Q(this,null);return ee(this),e})();get iconSlot(){return this.#re}set iconSlot(e){this.#re=e}#ne=(()=>{const e=te(this,null);return re(this),e})();get closeIconSlot(){return this.#ne}set closeIconSlot(e){this.#ne=e}#oe=(()=>{const e=ne(this,null);return oe(this),e})();get contentElement(){return this.#oe}set contentElement(e){this.#oe=e}#ie=(()=>{const e=ie(this,!1);return ae(this),e})();get hasIconSlot(){return this.#ie}set hasIconSlot(e){this.#ie=e}#ae=(()=>{const e=se(this,!1);return le(this),e})();get hasCloseIconSlot(){return this.#ae}set hasCloseIconSlot(e){this.#ae=e}#se=(()=>{const e=ce(this,!1);return de(this),e})();get contentMultiline(){return this.#se}set contentMultiline(e){this.#se=e}#le=(()=>{const e=ue(this,"entering");return ve(this),e})();get phase(){return this.#le}set phase(e){this.#le=e}autoCloseTimer=null;enterFrame=null;closeOpacityTimer=null;closeCompleteTimer=null;hovering=!1;focusWithin=!1;lightDomSlotObserver;contentResizeObserver=null;observedContentElement=null;contentMeasureFrame=null;get normalizedType(){return be.includes(this.type)?this.type:"info"}get normalizedEnterDuration(){return _e(this.enterDuration,100)}get normalizedExitDuration(){return _e(this.exitDuration,300)}get normalizedDuration(){return _e(this.duration,me)}get shouldRenderIcon(){return!!this.showIcon}get messageRole(){return"error"===this.normalizedType||"warning"===this.normalizedType?"alert":"status"}get messageAriaLive(){return"status"===this.messageRole?"polite":"assertive"}get hasIconContent(){return this.hasIconSlot||(0,v.mh)(this,"icon")}get hasCloseIconContent(){return this.hasCloseIconSlot||(0,v.mh)(this,"close-icon")}connectedCallback(){super.connectedCallback(),this.observeLightDomSlots(),this.syncSlotState(),this.applyTransitionVariables()}firstUpdated(){this.syncSlotState(),this.observeContentElement(),this.scheduleEnter(),this.startTimer()}updated(e){this.observeContentElement(),e.has("content")&&this.scheduleContentMeasure(),e.has("duration")&&"entered"===this.phase&&this.restartTimer(),(e.has("enterDuration")||e.has("exitDuration"))&&this.applyTransitionVariables()}disconnectedCallback(){this.lightDomSlotObserver?.disconnect(),this.lightDomSlotObserver=void 0,this.contentResizeObserver?.disconnect(),this.contentResizeObserver=null,this.observedContentElement=null,this.cancelContentMeasure(),this.clearTimers(),super.disconnectedCallback()}restartTimer(){this.clearAutoCloseTimer(),this.syncAutoCloseTimer()}close(e){if("leaving"===this.phase||"closed"===this.phase)return;if(this.clearAutoCloseTimer(),this.clearCloseTimers(),!this.dispatchMessageEvent(pe,e))return void this.syncAutoCloseTimer();if(this.phase="leaving","u">typeof window&&"function"==typeof window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches)return void this.finishClose(e);const t=this.scrollHeight||this.getBoundingClientRect().height;this.style.height=`${t}px`,this.style.overflow="hidden",this.style.transition="none",this.getBoundingClientRect();const r=this.normalizedEnterDuration;this.closeOpacityTimer=window.setTimeout(()=>{this.closeOpacityTimer=null,this.style.transition=`height ${this.normalizedExitDuration}ms var(--ve-message-standard-easing)`,this.style.height="0px"},r),this.closeCompleteTimer=window.setTimeout(()=>{this.closeCompleteTimer=null,this.finishClose(e)},r+this.normalizedExitDuration)}applyTransitionVariables(){this.style.setProperty("--ve-message-enter-duration",`${this.normalizedEnterDuration}ms`),this.style.setProperty("--ve-message-fade-duration",`${this.normalizedEnterDuration}ms`),this.style.setProperty("--ve-message-exit-duration",`${this.normalizedExitDuration}ms`)}scheduleEnter(){this.cancelEnterFrame(),this.phase="entering",this.enterFrame=window.requestAnimationFrame(()=>{this.enterFrame=null,"entering"===this.phase&&(this.phase="entered")})}startTimer(){if(0===this.duration||"leaving"===this.phase||"closed"===this.phase)return;if(null!==this.autoCloseTimer)return;const e=this.normalizedDuration;this.autoCloseTimer=window.setTimeout(()=>{this.autoCloseTimer=null,this.close()},e)}clearAutoCloseTimer(){null!==this.autoCloseTimer&&(window.clearTimeout(this.autoCloseTimer),this.autoCloseTimer=null)}clearCloseTimers(){null!==this.closeOpacityTimer&&(window.clearTimeout(this.closeOpacityTimer),this.closeOpacityTimer=null),null!==this.closeCompleteTimer&&(window.clearTimeout(this.closeCompleteTimer),this.closeCompleteTimer=null)}cancelEnterFrame(){null!==this.enterFrame&&(window.cancelAnimationFrame(this.enterFrame),this.enterFrame=null)}clearTimers(){this.clearAutoCloseTimer(),this.clearCloseTimers(),this.cancelEnterFrame()}syncAutoCloseTimer(){this.hovering||this.focusWithin?this.clearAutoCloseTimer():this.startTimer()}isMessageNode(e){return e instanceof Node&&(this.contains(e)||this.renderRoot.contains(e))}syncSlotState(){this.hasIconSlot=(0,v.qi)(this.iconSlot)||(0,v.mh)(this,"icon"),this.hasCloseIconSlot=(0,v.qi)(this.closeIconSlot)||(0,v.mh)(this,"close-icon")}observeContentElement(){"u"<typeof ResizeObserver?this.scheduleContentMeasure():(this.contentResizeObserver??=new ResizeObserver(()=>{this.syncContentMultiline()}),this.observedContentElement!==this.contentElement&&(this.observedContentElement&&this.contentResizeObserver.unobserve(this.observedContentElement),this.observedContentElement=this.contentElement,this.observedContentElement&&this.contentResizeObserver.observe(this.observedContentElement),this.scheduleContentMeasure()))}scheduleContentMeasure(){"u"<typeof window||"function"!=typeof window.requestAnimationFrame?this.syncContentMultiline():null===this.contentMeasureFrame&&(this.contentMeasureFrame=window.requestAnimationFrame(()=>{this.contentMeasureFrame=null,this.syncContentMultiline()}))}cancelContentMeasure(){null===this.contentMeasureFrame||"u"<typeof window||"function"!=typeof window.cancelAnimationFrame||window.cancelAnimationFrame(this.contentMeasureFrame),this.contentMeasureFrame=null}syncContentMultiline(){if(!this.contentElement||"u"<typeof getComputedStyle)return void(this.contentMultiline=!1);const e=Number.parseFloat(getComputedStyle(this.contentElement).lineHeight),t=this.contentElement.getBoundingClientRect().height,r=Number.isFinite(e)&&e>0&&t>1.5*e;this.contentMultiline!==r&&(this.contentMultiline=r)}observeLightDomSlots(){"u"<typeof MutationObserver||this.lightDomSlotObserver||(this.lightDomSlotObserver=new MutationObserver(()=>{this.syncSlotState(),this.scheduleContentMeasure()}),this.lightDomSlotObserver.observe(this,{childList:!0,subtree:!1,attributes:!0,attributeFilter:["slot"]}))}handleSlotChange(){this.syncSlotState(),this.scheduleContentMeasure()}handleMouseEnter(){this.hovering=!0,this.syncAutoCloseTimer()}handleMouseLeave(){this.hovering=!1,this.syncAutoCloseTimer()}handleFocusIn(){this.focusWithin=!0,this.syncAutoCloseTimer()}handleFocusOut(e){this.isMessageNode(e.relatedTarget)||(this.focusWithin=!1,this.syncAutoCloseTimer())}handleClose(e){this.close(e)}createCloseDetail(e){const t={type:this.normalizedType};return this.messageId&&(t.id=this.messageId),e&&(t.sourceEvent=e),t}dispatchMessageEvent(e,t){return this.dispatchEvent(new CustomEvent(e,{detail:this.createCloseDetail(t),bubbles:!0,composed:!0,cancelable:e===pe}))}finishClose(e){this.phase="closed",this.style.removeProperty("height"),this.style.removeProperty("overflow"),this.style.removeProperty("transition"),this.dispatchMessageEvent(ge,e)}renderDefaultIcon(){switch(this.normalizedType){case"success":return s.qy`
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="m7.95 12 2.7 2.7 5.4-5.4M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
            ></path>
          </svg>
        `;case"warning":return s.qy`
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M12 8v5m0 3v.1M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
            ></path>
          </svg>
        `;case"error":return s.qy`
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="m14.7 9.3-5.4 5.4m0-5.4 5.4 5.4M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
            ></path>
          </svg>
        `;case"loading":return s.qy`
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
        `;default:return s.qy`
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M12 11v5m0 5a9 9 0 1 1 0-18 9 9 0 0 1 0 18m.05-13v.1h-.1V8z"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
            ></path>
          </svg>
        `}}renderIcon(){return this.shouldRenderIcon?s.qy`
      <span class="ve-message-icon" part="icon" aria-hidden="true">
        <slot name="icon" @slotchange=${this.handleSlotChange}></slot>
        ${this.hasIconContent?s.s6:this.renderDefaultIcon()}
      </span>
    `:s.s6}renderCloseIcon(){return s.qy`
      <slot name="close-icon" @slotchange=${this.handleSlotChange}></slot>
      ${this.hasCloseIconContent?s.s6:s.qy`<ve-icon
            .definition=${h.u}
            size="var(--ve-message-close-icon-size)"
          ></ve-icon>`}
    `}render(){if("closed"===this.phase)return s.s6;const e=(0,l.H)({"ve-message":!0,[`ve-message-${this.normalizedType}`]:!0,"ve-message-multiline":this.contentMultiline,"ve-message-closable":this.closable,"ve-message-entered":"entered"===this.phase,"ve-message-leaving":"leaving"===this.phase});return s.qy`<div
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
      ${this.closable?s.qy`<button
            type="button"
            class="ve-message-close-btn"
            part="close-button"
            aria-label="Close message"
            @click=${this.handleClose}
          >
            ${this.renderCloseIcon()}
          </button>`:s.s6}
    </div>`}}(0,d.Xq)(he,we);let ye={};const xe=new WeakMap,ke=new WeakMap,Se=new WeakMap;function Ce(e){return"u">typeof Node&&e instanceof Node}function ze(e,t){var r;return{..."string"==typeof(r=t)||"function"==typeof r||Ce(r)?{content:t}:t,type:e}}function Ee(){return"u">typeof document?document.body:null}function Oe(e){return e instanceof Element?e.getAttribute("slot")??"":""}function Me(e,t){for(const r of Array.from(e.childNodes))Oe(r)===t&&r.remove()}function Ae(e,t){if(!Ce(e)){const r=document.createElement("span");return r.textContent=e,t&&(r.slot=t),r}if(!t)return e instanceof Element&&e.removeAttribute("slot"),e;if(e instanceof Element)return e.setAttribute("slot",t),e;const r=document.createElement("span");return r.slot=t,r.appendChild(e),r}function Ie(e,t,r){Me(e,t),void 0!==r&&e.appendChild(Ae(r,t))}function Pe(e){const t=ke.get(e);t&&(ke.delete(e),t())}function Te(e,t,r){e.type=t.type??"info",e.position=t.position??"top",e.messageId=t.id??r,e.duration=t.duration??me,e.showIcon=t.showIcon??!0,e.closable=t.closable??!1,e.enterDuration=100,e.exitDuration=300,function(e,t){if(Pe(e),"string"==typeof t)return Me(e,""),void(e.content=t);if(e.content="",Me(e,""),"function"!=typeof t)return void e.appendChild(Ae(t,""));const r=document.createElement("div");e.appendChild(r);const n=t(r,{element:e,close:()=>e.close()});"function"!=typeof n?"string"!=typeof n?Ce(n)&&r.appendChild(n):r.textContent=n:ke.set(e,n)}(e,t.content),Ie(e,"icon",t.icon),Ie(e,"close-icon",t.closeIcon)}function $e(e){e.holder.childElementCount>0||(e.holder.remove(),ye[e.position]===e&&delete ye[e.position])}function Re(e,t){e.messages=e.messages.filter(e=>e!==t)}function De(e){const t=function(e){const t=Ee();if(!t)return null;const r=ye[e];if(r&&r.container===t)return r;const n=document.createElement("div");!function(e,t){e.className=`ve-message-wrapper ve-message-wrapper-${t}`,e.dataset.veMessagePosition=t,e.style.width="100%",e.style.position="fixed",e.style.zIndex="var(--ve-message-z-index, var(--z-index-message, 1003))",e.style.padding="0 var(--ve-message-wrapper-padding-inline, 12px)",e.style.textAlign="center",e.style.pointerEvents="none",e.style.boxSizing="border-box",e.style.left="0","top"===t?(e.style.top="var(--ve-message-wrapper-margin-top, 40px)",e.style.bottom=""):(e.style.top="",e.style.bottom="var(--ve-message-wrapper-margin-bottom, 40px)")}(n,e),t.appendChild(n);const o={holder:n,messages:[],container:t,position:e};return ye[e]=o,o}(e.position??"top");if(!t)return()=>{};const r=e.id?function(e){for(const t of Object.values(ye)){const r=t.messages.find(t=>t.messageId===e);if(r)return{record:t,message:r}}return null}(e.id):null;if(r)return function(e,t,r){t!==r&&(Re(t,e),r.messages.push(e),Se.set(e,r),r.holder.appendChild(e),$e(t))}(r.message,r.record,t),Te(r.message,e,r.message.messageId),xe.set(r.message,e.onClose),r.message.restartTimer(),()=>r.message.close();const n=document.createElement(he),o=e.id??("u">typeof crypto&&"function"==typeof crypto.randomUUID?`ve_notice_id_${crypto.randomUUID()}`:`ve_notice_id_${Math.random().toFixed(10).slice(2)}`);return Te(n,e,o),xe.set(n,e.onClose),n.addEventListener(ge,()=>{const e=Se.get(n);e?function(e,t){Re(e,t),Se.delete(t),Pe(t),t.remove(),$e(e)}(e,n):n.remove();const t=xe.get(n);xe.delete(n),t?.()},{once:!0}),t.messages.push(n),Se.set(n,t),t.holder.appendChild(n),()=>n.close()}const Fe={info:e=>De(ze("info",e)),success:e=>De(ze("success",e)),warning:e=>De(ze("warning",e)),error:e=>De(ze("error",e)),loading:e=>De(ze("loading",e)),addInstance:e=>De(e),clear(){!function(){for(const e of Object.values(ye))for(const t of[...e.messages])t.close()}()}};var Le=r(74410);const Ve="ve-react-message-renderer",je=(0,i.a)({tagName:he,elementClass:we,react:o,events:{onClose:"ve-close",onAfterClose:"ve-after-close"}});function qe(){return"u">typeof document}function He(e){return"u">typeof Node&&e instanceof Node}function Be(e){return null!=e&&"boolean"!=typeof e}function Ne(){"u"<typeof customElements||"u"<typeof HTMLElement||customElements.get(Ve)||customElements.define(Ve,class extends HTMLElement{root;content=null;set reactContent(e){this.content=e,this.renderContent()}get reactContent(){return this.content}connectedCallback(){this.style.display||="contents",this.renderContent()}disconnectedCallback(){queueMicrotask(()=>{this.isConnected||(this.root?.unmount(),this.root=void 0)})}renderContent(){this.isConnected&&(this.root??=(0,a.H)(this),this.root.render(n.createElement(n.Fragment,null,this.content)))}})}function We(e){return Be(e)?"string"==typeof(t=e)||"number"==typeof t||"bigint"==typeof t?String(e):He(e)?e:function(e){Ne();const t=document.createElement(Ve);return t.reactContent=e,t}(e):"";var t}function Ke(e){return"string"==typeof e||"function"==typeof e||He(e)?"function"!=typeof e?e:(t,r)=>{return void 0===(n=e(t,r))||"function"==typeof n||"string"==typeof n||He(n)?n:We(n);var n}:We(e)}function Ue(e){if(Be(e))return We(e)}function Ze(e){const{content:t,icon:r,closeIcon:n,...o}=e,i={...o,content:Ke(t)},a=Ue(r),s=Ue(n);return void 0!==a&&(i.icon=a),void 0!==s&&(i.closeIcon=s),i}function Ge(e,t){if(!qe())return()=>{};const r="object"!=typeof(o=t)||null===o||Array.isArray(o)||He(o)||n.isValidElement(o)||!("content"in o)?{content:Ke(t)}:Ze(t);var o;return Fe.addInstance({...r,type:e})}const Je=n.forwardRef(({content:e,icon:t,closeIcon:r,children:o,...i},a)=>{const s=(0,Le.Vx)(e)?String(e):void 0,l=void 0===s?e:void 0;return n.createElement(je,{...i,...void 0===s?{}:{content:s},ref:a},(0,Le.M2)([["icon",t],["close-icon",r]]),l??o)}),Xe=Object.assign(Je,{info:e=>Ge("info",e),success:e=>Ge("success",e),warning:e=>Ge("warning",e),error:e=>Ge("error",e),loading:e=>Ge("loading",e),addInstance:e=>qe()?Fe.addInstance(Ze(e)):()=>{},clear(){Fe.clear()}});Xe.displayName="Message"},91574(e,t,r){r.d(t,{a:()=>De});var n=r(30758),o=r.t(n,2),i=r(45080),a=r(67286),s=r(61834),l=r(94023),c=r(444),d=r(76112),u=r(40362);const v=i.AH`
  :host {
    --ve-modal-z-index: 1000;
    --ve-modal-width: 480px;
    --ve-modal-max-width: calc(100vw - var(--space-xl));

    --ve-modal-overlay-background: rgba(16, 16, 19, 0.45);
    --ve-modal-panel-background: var(--color-bg-overlay);
    --ve-modal-panel-border-width: var(--stroke-weight-base);
    --ve-modal-panel-border-color: var(--color-border-default);
    --ve-modal-panel-radius: var(--radius-xl);
    --ve-modal-panel-shadow: var(--shadow-lg);

    --ve-modal-header-padding-block: var(--space-m);
    --ve-modal-header-padding-inline-start: var(--space-l);
    --ve-modal-header-padding-inline-end: 18px;
    --ve-modal-title-gap: var(--space-xxs);
    --ve-modal-title-color: var(--color-text-primary);
    --ve-modal-title-font-family: var(--font-sans);
    --ve-modal-title-font-size: var(--text-subsection-title);
    --ve-modal-title-font-weight: var(--font-weight-semibold);
    --ve-modal-title-line-height: var(--line-height-title);

    --ve-modal-close-button-size: 28px;
    --ve-modal-close-icon-size: var(--text-ui-strong);
    --ve-modal-close-button-radius: var(--radius-xs);
    --ve-modal-close-color: var(--color-text-primary);
    --ve-modal-close-color-hover: var(--color-icon-primary);
    --ve-modal-close-background-hover: color-mix(
      in srgb,
      var(--color-bg-secondary) var(--state-hover-subtle-ratio),
      var(--state-hover-subtle-mix)
    );
    --ve-modal-close-background-pressed: color-mix(
      in srgb,
      var(--color-bg-secondary) var(--state-pressed-subtle-ratio),
      var(--state-pressed-subtle-mix)
    );

    --ve-modal-body-padding-inline: var(--space-l);
    --ve-modal-body-color: var(--color-text-primary);
    --ve-modal-body-font-family: var(--font-sans);
    --ve-modal-body-font-size: var(--text-body);
    --ve-modal-body-line-height: var(--line-height-body);

    --ve-modal-footer-padding-block: var(--space-m);
    --ve-modal-footer-padding-inline: var(--space-l);
    --ve-modal-footer-gap: var(--space-xs);

    --ve-modal-button-height: var(--height-default);
    --ve-modal-button-min-width: 60px;
    --ve-modal-button-padding-inline: var(--space-xs);
    --ve-modal-button-radius: var(--radius-md);
    --ve-modal-button-font-family: var(--font-sans);
    --ve-modal-button-font-size: var(--text-body);
    --ve-modal-button-font-weight: var(--font-weight-normal);
    --ve-modal-button-line-height: 22px;
    --ve-modal-button-disabled-opacity: var(--state-disabled-ratio);

    --ve-modal-cancel-background: var(--color-bg-secondary);
    --ve-modal-cancel-color: var(--color-text-primary);
    --ve-modal-cancel-background-hover: color-mix(
      in srgb,
      var(--ve-modal-cancel-background) var(--state-hover-subtle-ratio),
      var(--state-hover-subtle-mix)
    );
    --ve-modal-cancel-background-pressed: color-mix(
      in srgb,
      var(--ve-modal-cancel-background) var(--state-pressed-subtle-ratio),
      var(--state-pressed-subtle-mix)
    );

    --ve-modal-ok-background: var(--color-bg-primary);
    --ve-modal-ok-color: var(--color-text-foreground);
    --ve-modal-ok-background-hover: color-mix(
      in srgb,
      var(--ve-modal-ok-background) var(--state-hover-solid-ratio),
      var(--state-hover-solid-mix)
    );
    --ve-modal-ok-background-pressed: color-mix(
      in srgb,
      var(--ve-modal-ok-background) var(--state-pressed-solid-ratio),
      var(--state-pressed-solid-mix)
    );

    --ve-modal-motion-duration: var(--motion-base);
    --ve-modal-motion-easing: var(--ease-standard);
  }

  @supports not (color: color-mix(in srgb, red, blue)) {
    :host {
      --ve-modal-close-background-hover: var(--color-bg-secondary);
      --ve-modal-close-background-pressed: var(--color-bg-secondary);
      --ve-modal-cancel-background-hover: var(--ve-modal-cancel-background);
      --ve-modal-cancel-background-pressed: var(--ve-modal-cancel-background);
      --ve-modal-ok-background-hover: var(--ve-modal-ok-background);
      --ve-modal-ok-background-pressed: var(--ve-modal-ok-background);
    }
  }
`,h=[l.H6,v,i.AH`
    :host {
      display: contents;
    }

    :host([hidden]) {
      display: none;
    }

    .ve-modal-overlay {
      position: fixed;
      inset: 0;
      z-index: var(--ve-modal-current-z-index, var(--ve-modal-z-index));
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: var(--space-xl) var(--space-s);
      background: var(--ve-modal-overlay-background);
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
      overscroll-behavior: contain;
      transition:
        opacity var(--ve-modal-motion-duration) var(--ve-modal-motion-easing),
        visibility 0s linear var(--ve-modal-motion-duration);
    }

    .ve-modal-overlay-open {
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
      transition-delay: 0s;
    }

    .ve-modal-overlay-no-mask {
      background: transparent;
    }

    .ve-modal-panel {
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      width: var(--ve-modal-current-width, var(--ve-modal-width));
      max-width: var(--ve-modal-max-width);
      max-height: calc(100vh - var(--space-xl) * 2);
      overflow: hidden;
      border: var(--ve-modal-panel-border-width) solid
        var(--ve-modal-panel-border-color);
      border-radius: var(--ve-modal-panel-radius);
      background: var(--ve-modal-panel-background);
      box-shadow: var(--ve-modal-panel-shadow);
      color: var(--ve-modal-body-color);
      font-family: var(--ve-modal-body-font-family);
      transform: translate3d(0, 8px, 0) scale(0.98);
      transition: transform var(--ve-modal-motion-duration)
        var(--ve-modal-motion-easing);
    }

    .ve-modal-overlay-open .ve-modal-panel {
      transform: translate3d(0, 0, 0) scale(1);
    }

    .ve-modal-header {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--space-s);
      width: 100%;
      padding-block: var(--ve-modal-header-padding-block);
      padding-inline: var(--ve-modal-header-padding-inline-start)
        var(--ve-modal-header-padding-inline-end);
    }

    .ve-modal-title {
      display: inline-flex;
      align-items: center;
      min-width: 0;
      gap: var(--ve-modal-title-gap);
      color: var(--ve-modal-title-color);
      font-family: var(--ve-modal-title-font-family);
      font-size: var(--ve-modal-title-font-size);
      font-weight: var(--ve-modal-title-font-weight);
      line-height: var(--ve-modal-title-line-height);
      overflow-wrap: anywhere;
    }

    .ve-modal-close-button {
      --ve-button-height-small: var(--ve-modal-close-button-size);
      --ve-button-padding-inline-small: 0px;
      --ve-button-radius-default: var(--ve-modal-close-button-radius);
      --ve-button-background-secondary: transparent;
      --ve-button-text-secondary: var(--ve-modal-close-color);

      flex: none;
      inline-size: var(--ve-modal-close-button-size);
      color: var(--ve-modal-close-color);
    }

    .ve-modal-close-button:hover,
    .ve-modal-close-button:focus-visible {
      --ve-button-background-secondary: var(--ve-modal-close-background-hover);
      --ve-button-text-secondary: var(--ve-modal-close-color-hover);
    }

    .ve-modal-close-button:active {
      --ve-button-background-secondary: var(--ve-modal-close-background-pressed);
    }

    .ve-modal-action:focus-visible {
      outline: none;
    }

    .ve-modal-close-button svg,
    .ve-modal-close-button ::slotted(*) {
      width: var(--ve-modal-close-icon-size);
      height: var(--ve-modal-close-icon-size);
      flex: none;
    }

    .ve-modal-body {
      box-sizing: border-box;
      flex: 1 1 auto;
      min-height: 0;
      overflow: auto;
      overscroll-behavior: contain;
      padding-inline: var(--ve-modal-body-padding-inline);
      color: var(--ve-modal-body-color);
      font-size: var(--ve-modal-body-font-size);
      line-height: var(--ve-modal-body-line-height);
    }

    .ve-modal-footer {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: var(--ve-modal-footer-gap);
      width: 100%;
      padding-block: var(--ve-modal-footer-padding-block);
      padding-inline: var(--ve-modal-footer-padding-inline);
    }

    .ve-modal-footer-slot {
      display: contents;
    }

    .ve-modal-action {
      appearance: none;
      box-sizing: border-box;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: var(--ve-modal-button-min-width);
      height: var(--ve-modal-button-height);
      padding-block: 0;
      padding-inline: var(--ve-modal-button-padding-inline);
      border: 0;
      border-radius: var(--ve-modal-button-radius);
      font-family: var(--ve-modal-button-font-family);
      font-size: var(--ve-modal-button-font-size);
      font-weight: var(--ve-modal-button-font-weight);
      line-height: var(--ve-modal-button-line-height);
      white-space: nowrap;
      cursor: pointer;
      transition:
        background-color var(--ve-modal-motion-duration) var(--ease-standard),
        color var(--ve-modal-motion-duration) var(--ease-standard),
        opacity var(--ve-modal-motion-duration) var(--ease-standard);
    }

    .ve-modal-action:disabled {
      opacity: var(--ve-modal-button-disabled-opacity);
      cursor: not-allowed;
    }

    .ve-modal-action-cancel {
      background: var(--ve-modal-cancel-background);
      color: var(--ve-modal-cancel-color);
    }

    .ve-modal-action-cancel:hover:not(:disabled),
    .ve-modal-action-cancel:focus-visible:not(:disabled) {
      background: var(--ve-modal-cancel-background-hover);
    }

    .ve-modal-action-cancel:active:not(:disabled) {
      background: var(--ve-modal-cancel-background-pressed);
    }

    .ve-modal-action-ok {
      background: var(--ve-modal-ok-background);
      color: var(--ve-modal-ok-color);
    }

    .ve-modal-action-ok:hover:not(:disabled),
    .ve-modal-action-ok:focus-visible:not(:disabled) {
      background: var(--ve-modal-ok-background-hover);
    }

    .ve-modal-action-ok:active:not(:disabled) {
      background: var(--ve-modal-ok-background-pressed);
    }

    @media (prefers-reduced-motion: reduce) {
      .ve-modal-overlay,
      .ve-modal-panel,
      .ve-modal-action,
      .ve-modal-close-button {
        transition: none;
      }
    }
  `];function p(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function g(e){if(Object(e)!==e)throw TypeError("right-hand side of 'in' should be an object, got "+(null!==e?typeof e:"null"));return e}function b(e,t,r){"symbol"==typeof t&&(t=(t=t.description)?"["+t+"]":"");try{Object.defineProperty(e,"name",{configurable:!0,value:r?r+" "+t:t})}catch(n){}return e}let m,f,_,w,y,x,k,S,C,z,E,O,M,A,I,P,T,$,R,D,F,L,V,j,q,H,B,N,W,K,U,Z,G,J,X,Y,Q,ee,te,re,ne,oe,ie,ae,se,le,ce,de,ue,ve,he,pe,ge,be,me,fe,_e,we,ye,xe;const ke="ve-modal",Se={fromAttribute:e=>null===e||"false"!==e,toAttribute:e=>e?null:"false"};function Ce(e){const t=e.trim();return t.endsWith("ms")?Number.parseFloat(t):t.endsWith("s")?1e3*Number.parseFloat(t):Number.parseFloat(t)||0}function ze(e){return e.split(",").map(Ce)}function Ee(e){if("u"<typeof window)return 0;const t=window.getComputedStyle(e),r=ze(t.transitionDuration),n=ze(t.transitionDelay);return r.reduce((e,t,r)=>{const o=n[r]??n[0]??0;return Math.max(e,t+o)},0)}const Oe=/(auto|scroll|overlay)/,Me=new Set(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","PageUp","PageDown","Home","End"," ","Spacebar"]);function Ae(e,t,r){const n=window.getComputedStyle(e),o=Oe.test(n.overflowY)&&e.scrollHeight>e.clientHeight,i=Oe.test(n.overflowX)&&e.scrollWidth>e.clientWidth;if(0!==r&&o){const t=e.scrollHeight-e.clientHeight;if(r<0&&e.scrollTop>0)return!0;if(r>0&&e.scrollTop<t)return!0}if(0!==t&&i){const r=e.scrollWidth-e.clientWidth;if(t<0&&e.scrollLeft>0)return!0;if(t>0&&e.scrollLeft<r)return!0}return!1}m=(0,s.MZ)({type:Boolean,reflect:!0}),f=(0,s.MZ)({type:String,reflect:!0,useDefault:!0}),_=(0,s.MZ)({reflect:!0,converter:Se,useDefault:!0}),w=(0,s.MZ)({reflect:!0,converter:Se,useDefault:!0}),y=(0,s.MZ)({attribute:"mask-closable",reflect:!0,converter:Se,useDefault:!0}),x=(0,s.MZ)({type:String,attribute:"ok-text",reflect:!0,useDefault:!0}),k=(0,s.MZ)({type:String,attribute:"cancel-text",reflect:!0,useDefault:!0}),S=(0,s.MZ)({type:Boolean,attribute:"ok-disabled",reflect:!0}),C=(0,s.MZ)({type:Boolean,attribute:"cancel-disabled",reflect:!0}),z=(0,s.MZ)({type:Boolean,attribute:"hide-footer",reflect:!0}),E=(0,s.MZ)({type:Number,attribute:"z-index",reflect:!0,useDefault:!0}),O=(0,s.MZ)({attribute:"lock-scroll",reflect:!0,converter:Se,useDefault:!0}),M=(0,s.P)('slot[name="title"]'),A=(0,s.P)('slot[name="footer"]'),I=(0,s.P)('slot[name="close-icon"]'),P=(0,s.P)(".ve-modal-overlay"),T=(0,s.P)(".ve-modal-panel"),$=(0,s.wk)(),R=(0,s.wk)(),D=(0,s.wk)();class Ie extends l.IB{static{({e:[F,L,V,j,q,H,B,N,W,K,U,Z,G,J,X,Y,Q,ee,te,re,ne,oe,ie,ae,se,le,ce,de,ue,ve,he,pe,ge,be,me,fe,_e,we,ye,xe]}=function(e,t,r,n,o,i){var a,s,l,c,d,u,v,h=Symbol.metadata||Symbol.for("Symbol.metadata"),m=Object.defineProperty,f=Object.create,_=[f(null),f(null)],w=t.length;function y(t,r,n){return function(o,i){r&&(i=o,o=e);for(var a=0;a<t.length;a++)i=t[a].apply(o,n?[i]:[]);return n?i:o}}function x(e,t,r,n){if("function"!=typeof e&&(n||void 0!==e))throw new TypeError(t+" must "+(r||"be")+" a function"+(n?"":" or undefined"));return e}function k(e,t,r,n,o,i,l,c,d,u,v){function h(e){if(!v(e))throw new TypeError("Attempted to access private element on non-instance")}var p=[].concat(t[0]),g=t[3],f=!l,w=1===o,k=3===o,S=4===o,C=2===o;function z(t,r,n){return function(o,i){return r&&(i=o,o=e),n&&n(o),desc[t].call(o,i)}}var E={},O=[],M=k?"get":S||w?"set":"value";if(!f&&(d?(u||w?E={get:b(function(){return g(this)},n,"get"),set:function(e){t[4](this,e)}}:E[M]=g,u||b(E[M],n,C?"":M)):u||(E=Object.getOwnPropertyDescriptor(e,n)),!u&&!d)){if((s=_[+c][n])&&7!==(s^o))throw new Error("Decorating two elements with the same name ("+E[M].name+") is not supported yet");_[+c][n]=o<3?1:o}for(var A=e,I=p.length-1;I>=0;I-=r?2:1){var P=x(p[I],"A decorator","be",!0),T=r?p[I-1]:void 0,$={},R={kind:["field","accessor","method","getter","setter","class"][o],name:n,metadata:a,addInitializer:function(e,t){if(e.v)throw new TypeError("attempted to call addInitializer after decoration was finished");x(t,"An initializer","be",!0),i.push(t)}.bind(null,$)};if(f)s=P.call(T,A,R),$.v=1,x(s,"class decorators","return")&&(A=s);else if(R.static=c,R.private=d,s=R.access={has:d?v.bind():function(e){return n in e}},S||(s.get=d?C?function(e){return h(e),E.value}:z("get",0,h):function(e){return e[n]}),C||k||(s.set=d?z("set",0,h):function(e,t){e[n]=t}),A=P.call(T,w?{get:E.get,set:E.set}:E[M],R),$.v=1,w){if("object"==typeof A&&A)(s=x(A.get,"accessor.get"))&&(E.get=s),(s=x(A.set,"accessor.set"))&&(E.set=s),(s=x(A.init,"accessor.init"))&&O.unshift(s);else if(void 0!==A)throw new TypeError("accessor decorators must return an object with get, set, or init properties or undefined")}else x(A,(u?"field":"method")+" decorators","return")&&(u?O.unshift(A):E[M]=A)}return o<2&&l.push(y(O,c,1),y(i,c,0)),u||f||(d?w?l.splice(-1,0,z("get",c),z("set",c)):l.push(C?E[M]:x.call.bind(E[M])):m(e,n,E)),A}function S(e){return m(e,h,{configurable:!0,enumerable:!0,value:a})}return void 0!==i&&(a=i[h]),a=f(null==a?null:a),d=[],u=function(e){e&&d.push(y(e))},(v=function(t,n){for(var i=0;i<r.length;i++){var a=r[i],s=a[1],u=7&s;if((8&s)==t&&!u==n){var v=a[2],h=!!a[3],b=16&s;k(t?e:e.prototype,a,b,h?"#"+v:p(v),u,u<2?[]:t?c=c||[]:l=l||[],d,!!t,h,n,t&&h?function(t){return g(t)===e}:o)}}})(8,0),v(0,0),v(8,1),v(0,1),u(l),u(c),s=d,w||S(e),{e:s,get c(){var r=[];return w&&[S(e=k(e,[t],n,e.name,5,r)),y(r,1)]}}}(this,[],[[m,1,"visible"],[f,1,"width"],[_,1,"closable"],[w,1,"mask"],[y,1,"maskClosable"],[x,1,"okText"],[k,1,"cancelText"],[S,1,"okDisabled"],[C,1,"cancelDisabled"],[z,1,"hideFooter"],[E,1,"zIndex"],[O,1,"lockScroll"],[M,1,"titleSlot"],[A,1,"footerSlot"],[I,1,"closeIconSlot"],[P,1,"overlayElement"],[T,1,"panelElement"],[$,1,"hasTitleSlot"],[R,1,"hasFooterSlot"],[D,1,"hasCloseIconSlot"]]))}static styles=h;static dependencies={[c.I]:c.c};#ce=(()=>{const e=F(this,!1);return L(this),e})();get visible(){return this.#ce}set visible(e){this.#ce=e}#de=(()=>{const e=V(this,"480px");return j(this),e})();get width(){return this.#de}set width(e){this.#de=e}get title(){return this.titleText}set title(e){(0,d.e)(this,this.titleText,e,e=>{this.titleText=e})}#ue=(()=>{const e=q(this,!0);return H(this),e})();get closable(){return this.#ue}set closable(e){this.#ue=e}#ve=(()=>{const e=B(this,!0);return N(this),e})();get mask(){return this.#ve}set mask(e){this.#ve=e}#he=(()=>{const e=W(this,!0);return K(this),e})();get maskClosable(){return this.#he}set maskClosable(e){this.#he=e}#pe=(()=>{const e=U(this,"\u786e\u5b9a");return Z(this),e})();get okText(){return this.#pe}set okText(e){this.#pe=e}#ge=(()=>{const e=G(this,"\u53d6\u6d88");return J(this),e})();get cancelText(){return this.#ge}set cancelText(e){this.#ge=e}#be=(()=>{const e=X(this,!1);return Y(this),e})();get okDisabled(){return this.#be}set okDisabled(e){this.#be=e}#me=(()=>{const e=Q(this,!1);return ee(this),e})();get cancelDisabled(){return this.#me}set cancelDisabled(e){this.#me=e}#fe=(()=>{const e=te(this,!1);return re(this),e})();get hideFooter(){return this.#fe}set hideFooter(e){this.#fe=e}#_e=(()=>{const e=ne(this,1e3);return oe(this),e})();get zIndex(){return this.#_e}set zIndex(e){this.#_e=e}#we=(()=>{const e=ie(this,!0);return ae(this),e})();get lockScroll(){return this.#we}set lockScroll(e){this.#we=e}#ye=(()=>{const e=se(this,null);return le(this),e})();get titleSlot(){return this.#ye}set titleSlot(e){this.#ye=e}#xe=(()=>{const e=ce(this,null);return de(this),e})();get footerSlot(){return this.#xe}set footerSlot(e){this.#xe=e}#ke=(()=>{const e=ue(this,null);return ve(this),e})();get closeIconSlot(){return this.#ke}set closeIconSlot(e){this.#ke=e}#Se=(()=>{const e=he(this,null);return pe(this),e})();get overlayElement(){return this.#Se}set overlayElement(e){this.#Se=e}#Ce=(()=>{const e=ge(this,null);return be(this),e})();get panelElement(){return this.#Ce}set panelElement(e){this.#Ce=e}#ze=(()=>{const e=me(this,!1);return fe(this),e})();get hasTitleSlot(){return this.#ze}set hasTitleSlot(e){this.#ze=e}#Ee=(()=>{const e=_e(this,!1);return we(this),e})();get hasFooterSlot(){return this.#Ee}set hasFooterSlot(e){this.#Ee=e}#Oe=(()=>{const e=ye(this,!1);return xe(this),e})();get hasCloseIconSlot(){return this.#Oe}set hasCloseIconSlot(e){this.#Oe=e}lastCloseSource="api";closeFallbackTimer=null;closeTransitionTarget=null;scrollLocked=!1;touchStartX=0;touchStartY=0;titleText="";constructor(){super(),(0,d.m)(this)}connectedCallback(){super.connectedCallback(),this.syncDocumentKeydownListener()}firstUpdated(){this.syncSlotState()}updated(e){super.updated(e),e.has("visible")?(this.syncDocumentKeydownListener(),this.visible?(this.lockScroll&&this.lockBackgroundScroll(),this.cancelAfterCloseWait()):!0===e.get("visible")&&this.waitForCloseTransition()):e.has("lockScroll")&&(this.visible&&this.lockScroll?this.lockBackgroundScroll():this.unlockBackgroundScroll())}disconnectedCallback(){this.cancelAfterCloseWait(),this.removeDocumentKeydownListener(),this.unlockBackgroundScroll(),super.disconnectedCallback()}show(){this.requestVisible(!0,"api")}hide(e="api",t){this.requestVisible(!1,e,t)}syncSlotState(){this.hasTitleSlot=(0,u.qi)(this.titleSlot)||(0,u.mh)(this,"title"),this.hasFooterSlot=(0,u.qi)(this.footerSlot)||(0,u.mh)(this,"footer"),this.hasCloseIconSlot=(0,u.qi)(this.closeIconSlot)||(0,u.mh)(this,"close-icon")}handleSlotChange=()=>{this.syncSlotState()};dispatchVisibleChange(e,t,r){return this.dispatchEvent(new CustomEvent("ve-visible-change",{detail:r?{visible:e,source:t,sourceEvent:r}:{visible:e,source:t},bubbles:!0,composed:!0,cancelable:!0}))}requestVisible(e,t,r){this.visible!==e&&this.dispatchVisibleChange(e,t,r)&&(e||(this.lastCloseSource=t),this.visible=e)}requestClose(e,t){const r=new CustomEvent("ve-close",{detail:t?{source:e,sourceEvent:t}:{source:e},bubbles:!0,composed:!0,cancelable:!0});this.dispatchEvent(r),r.defaultPrevented||this.requestVisible(!1,e,t)}dispatchAfterClose(){this.unlockBackgroundScroll(),this.dispatchEvent(new CustomEvent("ve-after-close",{detail:{source:this.lastCloseSource},bubbles:!0,composed:!0}))}waitForCloseTransition(){if(this.cancelAfterCloseWait(),"u">typeof window&&"function"==typeof window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches)return void this.dispatchAfterClose();const e=[this.overlayElement,this.panelElement].filter(e=>null!==e),t=e.reduce((e,t)=>Math.max(e,Ee(t)),0);if(t<=0)return void this.dispatchAfterClose();const r=e.find(e=>Ee(e)===t)??e[0];r?(this.closeTransitionTarget=r,r.addEventListener("transitionend",this.handleCloseTransitionEnd),this.closeFallbackTimer=window.setTimeout(()=>{this.closeFallbackTimer=null,this.finishAfterCloseWait()},t+50)):this.dispatchAfterClose()}finishAfterCloseWait(){this.visible?this.cancelAfterCloseWait():(this.cancelAfterCloseWait(),this.dispatchAfterClose())}cancelAfterCloseWait(){null!==this.closeFallbackTimer&&(window.clearTimeout(this.closeFallbackTimer),this.closeFallbackTimer=null),this.closeTransitionTarget?.removeEventListener("transitionend",this.handleCloseTransitionEnd),this.closeTransitionTarget=null}syncDocumentKeydownListener(){this.visible?document.addEventListener("keydown",this.handleDocumentKeydown):this.removeDocumentKeydownListener()}removeDocumentKeydownListener(){document.removeEventListener("keydown",this.handleDocumentKeydown)}lockBackgroundScroll(){this.scrollLocked||(this.scrollLocked=!0,this.addScrollGuard())}unlockBackgroundScroll(){this.scrollLocked&&(this.scrollLocked=!1,this.removeScrollGuard())}addScrollGuard(){document.addEventListener("wheel",this.handleDocumentWheel,{passive:!1,capture:!0}),document.addEventListener("touchstart",this.handleDocumentTouchStart,{passive:!0,capture:!0}),document.addEventListener("touchmove",this.handleDocumentTouchMove,{passive:!1,capture:!0}),document.addEventListener("keydown",this.handleDocumentScrollKeydown,{capture:!0})}removeScrollGuard(){document.removeEventListener("wheel",this.handleDocumentWheel,{capture:!0}),document.removeEventListener("touchstart",this.handleDocumentTouchStart,{capture:!0}),document.removeEventListener("touchmove",this.handleDocumentTouchMove,{capture:!0}),document.removeEventListener("keydown",this.handleDocumentScrollKeydown,{capture:!0})}handleOverlayClick=e=>{e.target===e.currentTarget&&this.maskClosable&&this.requestClose("mask",e)};isScrollConsumedInside(e,t,r){for(const n of e.composedPath())if(n instanceof HTMLElement){if(n.contains(this))return!1;if(Ae(n,t,r))return!0}return!1}handleDocumentWheel=e=>{this.isScrollConsumedInside(e,e.deltaX,e.deltaY)||e.cancelable&&e.preventDefault()};handleDocumentTouchStart=e=>{const t=e.touches[0];t&&(this.touchStartX=t.clientX,this.touchStartY=t.clientY)};handleDocumentTouchMove=e=>{const t=e.touches[0];if(!t)return;const r=this.touchStartX-t.clientX,n=this.touchStartY-t.clientY;this.isScrollConsumedInside(e,r,n)||e.cancelable&&e.preventDefault()};handleDocumentScrollKeydown=e=>{if(!Me.has(e.key))return;const t=e.target;(t===document.body||t===document.documentElement||null===t)&&e.cancelable&&e.preventDefault()};handleDocumentKeydown=e=>{this.visible&&"Escape"===e.key&&(e.stopPropagation(),this.requestClose("esc",e))};handleCloseTransitionEnd=e=>{e.target===this.closeTransitionTarget&&this.finishAfterCloseWait()};handleCloseClick=e=>{this.requestClose("close",e)};handleCancelClick=e=>{const t=new CustomEvent("ve-cancel",{detail:{source:"cancel",sourceEvent:e},bubbles:!0,composed:!0,cancelable:!0});this.dispatchEvent(t),t.defaultPrevented||this.requestVisible(!1,"cancel",e)};handleOkClick=e=>{const t=new CustomEvent("ve-ok",{detail:{source:"ok",sourceEvent:e},bubbles:!0,composed:!0,cancelable:!0});this.dispatchEvent(t),t.defaultPrevented||this.requestVisible(!1,"ok",e)};renderCloseIcon(){return i.qy`
      <slot name="close-icon" @slotchange=${this.handleSlotChange}></slot>
      ${this.hasCloseIconSlot?i.s6:i.qy`
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M18 6 6 18M6 6l12 12"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              ></path>
            </svg>
          `}
    `}renderCloseButton(){return this.closable?i.qy`
      <ve-button
        class="ve-modal-close-button"
        part="close-button"
        type="secondary"
        size="small"
        shape="default"
        aria-label="Close"
        @click=${this.handleCloseClick}
      >
        ${this.renderCloseIcon()}
      </ve-button>
    `:i.s6}renderTitle(){return i.qy`
      <div class="ve-modal-title" part="title">
        <slot name="title" @slotchange=${this.handleSlotChange}></slot>
        ${this.hasTitleSlot?i.s6:this.title}
      </div>
    `}renderFooter(){return this.hideFooter?i.s6:i.qy`
      <div class="ve-modal-footer" part="footer">
        <slot
          class="ve-modal-footer-slot"
          name="footer"
          @slotchange=${this.handleSlotChange}
        ></slot>
        ${this.hasFooterSlot?i.s6:i.qy`
              <button
                class="ve-modal-action ve-modal-action-cancel"
                part="cancel-button"
                type="button"
                ?disabled=${this.cancelDisabled}
                @click=${this.handleCancelClick}
              >
                <slot name="cancel">${this.cancelText}</slot>
              </button>
              <button
                class="ve-modal-action ve-modal-action-ok"
                part="ok-button"
                type="button"
                ?disabled=${this.okDisabled}
                @click=${this.handleOkClick}
              >
                <slot name="ok">${this.okText}</slot>
              </button>
            `}
      </div>
    `}render(){const e=(0,a.H)({"ve-modal-overlay":!0,"ve-modal-overlay-open":this.visible,"ve-modal-overlay-no-mask":!this.mask}),t=`--ve-modal-current-width:${function(e){const t=e.trim();return t.length>0?t:"480px"}(this.width)};--ve-modal-current-z-index:${this.zIndex};`;return i.qy`
      <div
        class=${e}
        part="overlay"
        style=${t}
        role="presentation"
        @click=${this.handleOverlayClick}
      >
        <section
          class="ve-modal-panel"
          part="panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.visible?"false":"true"}
          tabindex="-1"
        >
          <header class="ve-modal-header" part="header">
            ${this.renderTitle()} ${this.renderCloseButton()}
          </header>
          <div class="ve-modal-body" part="body">
            <slot></slot>
          </div>
          ${this.renderFooter()}
        </section>
      </div>
    `}}(0,l.Xq)(ke,Ie);var Pe=r(35780),Te=r(74410),$e=r(8143);const Re=(0,Pe.h)({tagName:ke,elementClass:Ie,react:o,ownEvents:["onVisibleChange","onOk","onCancel","onClose","onAfterClose"],events:{onVisibleChange:"ve-visible-change",onOk:"ve-ok",onCancel:"ve-cancel",onClose:"ve-close",onAfterClose:"ve-after-close"}});const De=n.forwardRef(({title:e,footer:t,cancel:r,ok:o,closeIcon:i,children:a,getContainer:s,...l},c)=>{const d=(0,Te.ns)(t),u=n.createElement(Re,{...l,ref:c},(0,Te.M2)([["title",e],["footer",t],["cancel",d?null:r],["ok",d?null:o],["close-icon",i]]),a),v=function(e){return"u"<typeof document||!1===e?null:"function"==typeof e?e():e??document.body}(s);return v?$e.createPortal(u,v):u});De.displayName="Modal"},47379(e,t,r){r.d(t,{d:()=>_e});var n=r(30758),o=r.t(n,2),i=r(45080),a=r(67286),s=r(67463),l=r(61834),c=r(94023),d=r(17400),u=r(53140),v=r(97894),h=r(31909),p=r(74166);const g=i.AH`
  :host {
    --ve-pagination-gap: var(--space-xxs);
    --ve-pagination-page-gap: var(--space-xxxs);
    --ve-pagination-item-size: var(--height-small);
    --ve-pagination-item-min-inline-size: var(--height-small);
    --ve-pagination-item-padding-inline: calc(var(--space-xxs) + 2px);
    --ve-pagination-item-radius: var(--radius-sm);
    --ve-pagination-font-family: var(--font-sans);
    --ve-pagination-font-size: var(--text-body);
    --ve-pagination-font-weight: var(--font-weight-normal);
    --ve-pagination-line-height: 22px;
    --ve-pagination-total-color: var(--color-text-secondary);
    --ve-pagination-text: var(--color-text-secondary);
    --ve-pagination-text-current: var(--color-text-primary);
    --ve-pagination-text-disabled: var(--color-text-disable);
    --ve-pagination-icon-color: var(--color-icon-primary);
    --ve-pagination-background: transparent;
    --ve-pagination-background-hover: var(--color-bg-surface);
    --ve-pagination-background-pressed: color-mix(
      in srgb,
      var(--ve-pagination-background-hover) var(--state-pressed-subtle-ratio),
      var(--state-pressed-subtle-mix)
    );
    --ve-pagination-background-current: var(--color-bg-muted);
    --ve-pagination-select-arrow-color: var(--color-icon-disable);
    --ve-pagination-focus-ring: var(--color-border-interactive);
    --ve-pagination-disabled-opacity: var(--state-disabled-ratio);

    --ve-pagination-size-width: fit-content;
    --ve-pagination-size-min-width: 0px;
    --ve-pagination-size-height: var(--height-small);
    --ve-pagination-transition-duration: var(--motion-fast);
    --ve-pagination-transition-timing: var(--ease-standard);
  }

  @supports not (color: color-mix(in srgb, red, blue)) {
    :host {
      --ve-pagination-background-pressed: var(--ve-pagination-background-hover);
    }
  }
`,b=[c.H6,g,i.AH`
    :host {
      display: inline-flex;
      max-inline-size: 100%;
      vertical-align: middle;
      box-sizing: border-box;
    }

    :host([hidden]) {
      display: none;
    }

    :host([disabled]) {
      cursor: not-allowed;
      color: var(--ve-pagination-text-disabled);
    }

    .ve-pagination {
      display: inline-flex;
      align-items: center;
      max-inline-size: 100%;
      gap: var(--ve-pagination-gap);
      box-sizing: border-box;
      color: var(--ve-pagination-text);
      font-family: var(--ve-pagination-font-family);
      font-size: var(--ve-pagination-font-size);
      font-weight: var(--ve-pagination-font-weight);
      line-height: var(--ve-pagination-line-height);
    }

    .ve-pagination-total {
      flex: none;
      color: var(--ve-pagination-total-color);
      white-space: nowrap;
    }

    :host([disabled]) .ve-pagination-total {
      color: var(--ve-pagination-text-disabled);
      opacity: var(--ve-pagination-disabled-opacity);
    }

    .ve-pagination-pages {
      display: inline-flex;
      align-items: center;
      flex: none;
      gap: var(--ve-pagination-page-gap);
    }

    .ve-pagination-item {
      appearance: none;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex: 0 0 auto;
      min-inline-size: var(--ve-pagination-item-min-inline-size);
      block-size: var(--ve-pagination-item-size);
      box-sizing: border-box;
      margin: 0;
      border: none;
      border-radius: var(--ve-pagination-item-radius);
      padding: 0 var(--ve-pagination-item-padding-inline);
      background: var(--ve-pagination-background);
      color: var(--ve-pagination-text);
      font: inherit;
      font-variant-numeric: tabular-nums;
      line-height: var(--ve-pagination-line-height);
      text-align: center;
      white-space: nowrap;
      cursor: pointer;
      user-select: none;
      -webkit-tap-highlight-color: transparent;
      transition:
        background-color var(--ve-pagination-transition-duration)
          var(--ve-pagination-transition-timing),
        color var(--ve-pagination-transition-duration)
          var(--ve-pagination-transition-timing),
        opacity var(--ve-pagination-transition-duration)
          var(--ve-pagination-transition-timing),
        box-shadow var(--ve-pagination-transition-duration)
          var(--ve-pagination-transition-timing);
    }

    .ve-pagination-item-icon,
    .ve-pagination-item-ellipsis {
      inline-size: var(--ve-pagination-item-size);
      min-inline-size: var(--ve-pagination-item-size);
      padding: 0;
      color: var(--ve-pagination-icon-color);
    }

    .ve-pagination-item ve-icon {
      display: inline-flex;
      flex: none;
    }

    .ve-pagination-item:not(:disabled):hover,
    .ve-pagination-item:not(:disabled):focus-visible {
      background: var(--ve-pagination-background-hover);
      color: var(--ve-pagination-text-current);
    }

    .ve-pagination-item:not(:disabled):active {
      background: var(--ve-pagination-background-pressed);
    }

    .ve-pagination-item:focus-visible {
      outline: none;
    }

    .ve-pagination-item-current {
      background: var(--ve-pagination-background-current);
      color: var(--ve-pagination-text-current);
    }

    .ve-pagination-item:disabled {
      cursor: not-allowed;
      opacity: var(--ve-pagination-disabled-opacity);
      box-shadow: none;
    }

    .ve-pagination-item-ellipsis:disabled {
      opacity: 1;
      cursor: default;
    }

    :host([disabled]) .ve-pagination-item-current,
    :host([disabled]) .ve-pagination-item-ellipsis {
      color: var(--ve-pagination-text-disabled);
    }

    :host([disabled]) .ve-pagination-item-ellipsis:disabled {
      opacity: var(--ve-pagination-disabled-opacity);
    }

    .ve-pagination-size {
      display: inline-flex;
      align-items: center;
      flex: none;
      inline-size: var(--ve-pagination-size-width);
      min-inline-size: var(--ve-pagination-size-min-width);
      block-size: var(--ve-pagination-size-height);
      box-sizing: border-box;
    }

    .ve-pagination-size-select {
      inline-size: fit-content;
      --ve-select-arrow-color: var(--ve-pagination-select-arrow-color);
    }

    @media (prefers-reduced-motion: reduce) {
      .ve-pagination-item {
        transition: none;
      }
    }
  `];function m(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function f(e){if(Object(e)!==e)throw TypeError("right-hand side of 'in' should be an object, got "+(null!==e?typeof e:"null"));return e}function _(e,t,r){"symbol"==typeof t&&(t=(t=t.description)?"["+t+"]":"");try{Object.defineProperty(e,"name",{configurable:!0,value:r?r+" "+t:t})}catch(n){}return e}let w,y,x,k,S,C,z,E,O,M,A,I,P,T,$,R,D,F,L,V,j,q,H,B,N,W,K,U,Z,G,J,X,Y,Q,ee,te,re,ne,oe,ie,ae,se,le,ce,de;const ue="ve-pagination",ve=[10,20,50,100],he={fromAttribute(e){if(null===e)return;const t=Number(e);return Number.isFinite(t)?t:void 0},toAttribute:e=>void 0===e?null:String(e)},pe={fromAttribute(e){if(null===e)return[...ve];const t=e.trim();if(!t)return[];if(t.startsWith("["))try{const e=JSON.parse(t);if(Array.isArray(e))return e.filter(ge).map(e=>Math.floor(e))}catch{return[]}return t.split(",").map(e=>Number(e.trim())).filter(ge).map(e=>Math.floor(e))},toAttribute:e=>e.length>0?e.join(","):null};function ge(e){return"number"==typeof e&&Number.isFinite(e)&&e>0}function be(e,t){return ge(e)?Math.floor(e):t}function me(e,t,r){return Math.min(Math.max(e,t),r)}w=(0,l.MZ)({converter:he}),y=(0,l.MZ)({type:Number,attribute:"default-current"}),x=(0,l.MZ)({converter:he,attribute:"page-size"}),k=(0,l.MZ)({type:Number,attribute:"default-page-size"}),S=(0,l.MZ)({type:Number}),C=(0,l.MZ)({converter:pe,attribute:"page-size-options"}),z=(0,l.MZ)({type:Boolean,attribute:"show-total",reflect:!0}),E=(0,l.MZ)({type:Boolean,attribute:"show-page-size",reflect:!0}),O=(0,l.MZ)({type:String,attribute:"total-template"}),M=(0,l.MZ)({type:Number,attribute:"buffer-size"}),A=(0,l.MZ)({type:Boolean,reflect:!0}),I=(0,l.P)(".ve-pagination-item-current"),P=(0,l.P)("button:not(:disabled)"),T=(0,l.wk)(),$=(0,l.wk)();class fe extends c.IB{static{({e:[R,D,F,L,V,j,q,H,B,N,W,K,U,Z,G,J,X,Y,Q,ee,te,re,ne,oe,ie,ae,se,le,ce,de]}=function(e,t,r,n,o,i){var a,s,l,c,d,u,v,h=Symbol.metadata||Symbol.for("Symbol.metadata"),p=Object.defineProperty,g=Object.create,b=[g(null),g(null)],w=t.length;function y(t,r,n){return function(o,i){r&&(i=o,o=e);for(var a=0;a<t.length;a++)i=t[a].apply(o,n?[i]:[]);return n?i:o}}function x(e,t,r,n){if("function"!=typeof e&&(n||void 0!==e))throw new TypeError(t+" must "+(r||"be")+" a function"+(n?"":" or undefined"));return e}function k(e,t,r,n,o,i,l,c,d,u,v){function h(e){if(!v(e))throw new TypeError("Attempted to access private element on non-instance")}var g=[].concat(t[0]),m=t[3],f=!l,w=1===o,k=3===o,S=4===o,C=2===o;function z(t,r,n){return function(o,i){return r&&(i=o,o=e),n&&n(o),desc[t].call(o,i)}}var E={},O=[],M=k?"get":S||w?"set":"value";if(!f&&(d?(u||w?E={get:_(function(){return m(this)},n,"get"),set:function(e){t[4](this,e)}}:E[M]=m,u||_(E[M],n,C?"":M)):u||(E=Object.getOwnPropertyDescriptor(e,n)),!u&&!d)){if((s=b[+c][n])&&7!==(s^o))throw new Error("Decorating two elements with the same name ("+E[M].name+") is not supported yet");b[+c][n]=o<3?1:o}for(var A=e,I=g.length-1;I>=0;I-=r?2:1){var P=x(g[I],"A decorator","be",!0),T=r?g[I-1]:void 0,$={},R={kind:["field","accessor","method","getter","setter","class"][o],name:n,metadata:a,addInitializer:function(e,t){if(e.v)throw new TypeError("attempted to call addInitializer after decoration was finished");x(t,"An initializer","be",!0),i.push(t)}.bind(null,$)};if(f)s=P.call(T,A,R),$.v=1,x(s,"class decorators","return")&&(A=s);else if(R.static=c,R.private=d,s=R.access={has:d?v.bind():function(e){return n in e}},S||(s.get=d?C?function(e){return h(e),E.value}:z("get",0,h):function(e){return e[n]}),C||k||(s.set=d?z("set",0,h):function(e,t){e[n]=t}),A=P.call(T,w?{get:E.get,set:E.set}:E[M],R),$.v=1,w){if("object"==typeof A&&A)(s=x(A.get,"accessor.get"))&&(E.get=s),(s=x(A.set,"accessor.set"))&&(E.set=s),(s=x(A.init,"accessor.init"))&&O.unshift(s);else if(void 0!==A)throw new TypeError("accessor decorators must return an object with get, set, or init properties or undefined")}else x(A,(u?"field":"method")+" decorators","return")&&(u?O.unshift(A):E[M]=A)}return o<2&&l.push(y(O,c,1),y(i,c,0)),u||f||(d?w?l.splice(-1,0,z("get",c),z("set",c)):l.push(C?E[M]:x.call.bind(E[M])):p(e,n,E)),A}function S(e){return p(e,h,{configurable:!0,enumerable:!0,value:a})}return void 0!==i&&(a=i[h]),a=g(null==a?null:a),d=[],u=function(e){e&&d.push(y(e))},(v=function(t,n){for(var i=0;i<r.length;i++){var a=r[i],s=a[1],u=7&s;if((8&s)==t&&!u==n){var v=a[2],h=!!a[3],p=16&s;k(t?e:e.prototype,a,p,h?"#"+v:m(v),u,u<2?[]:t?c=c||[]:l=l||[],d,!!t,h,n,t&&h?function(t){return f(t)===e}:o)}}})(8,0),v(0,0),v(8,1),v(0,1),u(l),u(c),s=d,w||S(e),{e:s,get c(){var r=[];return w&&[S(e=k(e,[t],n,e.name,5,r)),y(r,1)]}}}(this,[],[[w,1,"current"],[y,1,"defaultCurrent"],[x,1,"pageSize"],[k,1,"defaultPageSize"],[S,1,"total"],[C,1,"pageSizeOptions"],[z,1,"showTotal"],[E,1,"showPageSize"],[O,1,"totalTemplate"],[M,1,"bufferSize"],[A,1,"disabled"],[I,1,"currentButtonElement"],[P,1,"firstEnabledButtonElement"],[T,1,"innerCurrent"],[$,1,"innerPageSize"]]))}static styles=b;static dependencies={[d.v]:d.O,[u.q9]:u.ak,[u.Me]:u.b1};#Me=(()=>{const e=R(this,void 0);return D(this),e})();get current(){return this.#Me}set current(e){this.#Me=e}#Ae=(()=>{const e=F(this,1);return L(this),e})();get defaultCurrent(){return this.#Ae}set defaultCurrent(e){this.#Ae=e}#Ie=(()=>{const e=V(this,void 0);return j(this),e})();get pageSize(){return this.#Ie}set pageSize(e){this.#Ie=e}#Pe=(()=>{const e=q(this,10);return H(this),e})();get defaultPageSize(){return this.#Pe}set defaultPageSize(e){this.#Pe=e}#Te=(()=>{const e=B(this,0);return N(this),e})();get total(){return this.#Te}set total(e){this.#Te=e}#$e=(()=>{const e=W(this,[...ve]);return K(this),e})();get pageSizeOptions(){return this.#$e}set pageSizeOptions(e){this.#$e=e}#Re=(()=>{const e=U(this,!1);return Z(this),e})();get showTotal(){return this.#Re}set showTotal(e){this.#Re=e}#De=(()=>{const e=G(this,!1);return J(this),e})();get showPageSize(){return this.#De}set showPageSize(e){this.#De=e}#Fe=(()=>{const e=X(this,"\u5171 {total} \u9879");return Y(this),e})();get totalTemplate(){return this.#Fe}set totalTemplate(e){this.#Fe=e}#Le=(()=>{const e=Q(this,2);return ee(this),e})();get bufferSize(){return this.#Le}set bufferSize(e){this.#Le=e}#Ve=(()=>{const e=te(this,!1);return re(this),e})();get disabled(){return this.#Ve}set disabled(e){this.#Ve=e}#je=(()=>{const e=ne(this,null);return oe(this),e})();get currentButtonElement(){return this.#je}set currentButtonElement(e){this.#je=e}#qe=(()=>{const e=ie(this,null);return ae(this),e})();get firstEnabledButtonElement(){return this.#qe}set firstEnabledButtonElement(e){this.#qe=e}#He=(()=>{const e=se(this,1);return le(this),e})();get innerCurrent(){return this.#He}set innerCurrent(e){this.#He=e}#Be=(()=>{const e=ce(this,10);return de(this),e})();get innerPageSize(){return this.#Be}set innerPageSize(e){this.#Be=e}hasInitializedDefaults=!1;get isCurrentControlled(){return void 0!==this.current}get isPageSizeControlled(){return void 0!==this.pageSize}get normalizedTotal(){return Math.max(0,Math.floor(Number.isFinite(this.total)?this.total:0))}get resolvedPageSize(){return be((this.isPageSizeControlled?this.pageSize:this.innerPageSize)??10,10)}get totalPages(){return Math.max(1,Math.ceil(this.normalizedTotal/this.resolvedPageSize))}get resolvedCurrent(){return me(be((this.isCurrentControlled?this.current:this.innerCurrent)??1,1),1,this.totalPages)}get normalizedPageSizeOptions(){const e=function(e){const t=new Set,r=[];for(const n of e){if(!ge(n))continue;const e=Math.floor(n);t.has(e)||(t.add(e),r.push(e))}return r}(this.pageSizeOptions),t=this.resolvedPageSize;return e.includes(t)?e:[t,...e]}get totalText(){return this.totalTemplate.replace("{total}",String(this.normalizedTotal))}focus(e){(this.currentButtonElement??this.firstEnabledButtonElement)?.focus(e)}connectedCallback(){super.connectedCallback(),this.hasInitializedDefaults||(this.hasInitializedDefaults=!0,this.innerCurrent=be(this.defaultCurrent,1),this.innerPageSize=be(this.defaultPageSize,10))}willUpdate(e){super.willUpdate(e),!this.isCurrentControlled&&(e.has("total")||e.has("pageSize")||e.has("innerPageSize"))&&(this.innerCurrent=me(this.innerCurrent,1,this.totalPages))}addEventListener(e,t,r){super.addEventListener(e,t,r)}removeEventListener(e,t,r){super.removeEventListener(e,t,r)}emitPageChange(e,t){if(this.disabled)return;const r=this.resolvedCurrent,n=me(e,1,this.totalPages);n!==r&&(this.isCurrentControlled||(this.innerCurrent=n),this.dispatchEvent(new CustomEvent("ve-change",{bubbles:!0,composed:!0,detail:{current:n,previousCurrent:r,pageSize:this.resolvedPageSize,total:this.normalizedTotal,totalPages:this.totalPages,source:t}})))}handlePageClick(e){this.emitPageChange(e,"page")}handlePreviousClick(){this.emitPageChange(this.resolvedCurrent-1,"prev")}handleNextClick(){this.emitPageChange(this.resolvedCurrent+1,"next")}handlePageSizeChange(e){if(e.stopPropagation(),this.disabled)return;const t=e.detail.value;if(Array.isArray(t)||""===t)return;const r=be(Number(t),this.resolvedPageSize),n=this.resolvedPageSize;if(r===n)return;const o=this.resolvedCurrent,i=Math.max(1,Math.ceil(this.normalizedTotal/r)),a=me(o,1,i);this.isPageSizeControlled||(this.innerPageSize=r),this.isCurrentControlled||(this.innerCurrent=a),this.dispatchEvent(new CustomEvent("ve-page-size-change",{bubbles:!0,composed:!0,detail:{pageSize:r,previousPageSize:n,current:a,previousCurrent:o,total:this.normalizedTotal,totalPages:i}}))}renderTotal(){return this.showTotal?i.qy`
      <span class="ve-pagination-total" part="total">${this.totalText}</span>
    `:i.s6}renderIconButton(e,t,r,n,o){return i.qy`
      <button
        class="ve-pagination-item ve-pagination-item-icon"
        part="item"
        type="button"
        data-pagination-action=${e}
        aria-label=${n}
        ?disabled=${this.disabled||r}
        @click=${o}
      >
        <ve-icon .definition=${t} size="16"></ve-icon>
      </button>
    `}renderPageItem(e){if("ellipsis"===e.type)return i.qy`
        <button
          class="ve-pagination-item ve-pagination-item-ellipsis"
          part="item"
          type="button"
          tabindex="-1"
          aria-label="More pages"
          disabled
        >
          <ve-icon .definition=${v.moreHorizontalIcon} size="16"></ve-icon>
        </button>
      `;const t=e.value,r=t===this.resolvedCurrent,n={"ve-pagination-item":!0,"ve-pagination-item-page":!0,"ve-pagination-item-current":r};return i.qy`
      <button
        class=${(0,a.H)(n)}
        part="item"
        type="button"
        aria-label=${`Page ${t}`}
        aria-current=${(0,s.J)(r?"page":void 0)}
        ?disabled=${this.disabled}
        @click=${()=>this.handlePageClick(t)}
      >
        ${t}
      </button>
    `}renderPages(){const e=function(e,t,r){if(t<=1)return[{type:"page",value:1}];const n=Math.max(0,Math.floor(r));if(t<=2*n+5)return Array.from({length:t},(e,t)=>({type:"page",value:t+1}));let o=Math.max(2,e-n),i=Math.min(t-1,e+n);e<=n+2&&(o=2,i=Math.min(t-1,2*n+1)),e>=t-n-1&&(o=Math.max(2,t-2*n),i=t-1);const a=[{type:"page",value:1}];o>2&&a.push({type:"ellipsis",key:"start-ellipsis"});for(let s=o;s<=i;s+=1)a.push({type:"page",value:s});return i<t-1&&a.push({type:"ellipsis",key:"end-ellipsis"}),a.push({type:"page",value:t}),a}(this.resolvedCurrent,this.totalPages,this.bufferSize);return i.qy`
      <div class="ve-pagination-pages" part="pages">
        ${this.renderIconButton("prev",h.chevronLeftMdIcon,this.resolvedCurrent<=1,"Previous page",()=>this.handlePreviousClick())}
        ${e.map(e=>this.renderPageItem(e))}
        ${this.renderIconButton("next",p.chevronRightMdIcon,this.resolvedCurrent>=this.totalPages,"Next page",()=>this.handleNextClick())}
      </div>
    `}renderPageSizeSelect(){return this.showPageSize?i.qy`
      <span class="ve-pagination-size" part="select">
        <ve-select
          class="ve-pagination-size-select"
          aria-label="Page size"
          size="small"
          popup-match-select-width="false"
          .value=${String(this.resolvedPageSize)}
          ?disabled=${this.disabled}
          @ve-change=${this.handlePageSizeChange}
        >
          ${this.normalizedPageSizeOptions.map(e=>i.qy`
              <ve-select-item .value=${String(e)}>
                ${e}条/页
              </ve-select-item>
            `)}
        </ve-select>
      </span>
    `:i.s6}render(){return i.qy`
      <nav class="ve-pagination" part="root" aria-label="Pagination">
        ${this.renderTotal()} ${this.renderPages()}
        ${this.renderPageSizeSelect()}
      </nav>
    `}}(0,c.Xq)(ue,fe);const _e=(0,r(35780).h)({tagName:ue,elementClass:fe,react:o,events:{onChange:"ve-change",onPageSizeChange:"ve-page-size-change"},ownEvents:["onChange"]})},44996(e,t,r){r.d(t,{s:()=>le,z:()=>ce});var n=r(30758),o=r.t(n,2),i=r(45080),a=r(67286),s=r(67463),l=r(61834),c=r(30184),d=r(94023);const u=i.AH`
  :host {
    --ve-radio-font-family: var(--font-sans);
    --ve-radio-font-size: var(--text-body);
    --ve-radio-font-weight: var(--font-weight-normal);

    --ve-radio-mask-size: 16px;
    --ve-radio-mask-border-width: var(--stroke-weight-strong);
    --ve-radio-mask-border-style: solid;
    --ve-radio-mask-border-radius: var(--radius-full);

    --ve-radio-mask-color-bg: var(--color-bg-base);
    --ve-radio-mask-color-bg-checked: var(--color-bg-primary);
    --ve-radio-mask-color-bg-checked-hover: color-mix(
      in srgb,
      var(--ve-radio-mask-color-bg-checked) var(--state-hover-solid-ratio),
      var(--state-hover-solid-mix)
    );
    --ve-radio-mask-color-border: var(--color-border-strong);
    --ve-radio-mask-color-border-hover: var(--color-border-interactive);
    --ve-radio-mask-color-border-checked: transparent;

    --ve-radio-dot-size: 6px;
    --ve-radio-dot-color: var(--color-text-foreground);

    --ve-radio-text-color: var(--color-text-primary);
    --ve-radio-text-mask-spacing: var(--space-xxs);

    --ve-radio-group-gap-horizontal: var(--space-s);
    --ve-radio-group-gap-vertical: var(--space-xs);
    --ve-radio-group-line-height-vertical: 32px;

    --ve-radio-disabled-subtle-opacity: var(--state-disabled-ratio);
    --ve-radio-disabled-solid-opacity: var(--state-disabled-ratio);
    --ve-radio-focus-ring-color: color-mix(
      in srgb,
      var(--color-bg-primary) 24%,
      transparent
    );

    --ve-radio-transition-duration-fast: var(--motion-fast);
    --ve-radio-transition-duration-base: var(--motion-base);
    --ve-radio-transition-timing-linear: linear;
    --ve-radio-transition-timing-overshoot: cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  @supports not (color: color-mix(in srgb, red, blue)) {
    :host {
      --ve-radio-mask-color-bg-checked-hover: var(
        --ve-radio-mask-color-bg-checked
      );
      --ve-radio-focus-ring-color: var(--color-bg-primary);
    }
  }
`,v=[d.H6,u,i.AH`
    :host {
      display: inline-flex;
      color: var(--ve-radio-text-color);
      font-family: var(--ve-radio-font-family);
      font-size: var(--ve-radio-font-size);
      font-weight: var(--ve-radio-font-weight);
      line-height: var(--line-height-body);
      vertical-align: middle;
    }

    .ve-radio {
      position: relative;
      box-sizing: border-box;
      display: inline-flex;
      align-items: center;
      gap: var(--ve-radio-text-mask-spacing);
      color: var(--ve-radio-text-color);
      cursor: pointer;
      font: inherit;
      user-select: none;
      transition:
        color var(--ve-radio-transition-duration-fast)
          var(--ve-radio-transition-timing-linear),
        background-color var(--ve-radio-transition-duration-fast)
          var(--ve-radio-transition-timing-linear),
        border-color var(--ve-radio-transition-duration-fast)
          var(--ve-radio-transition-timing-linear),
        opacity var(--ve-radio-transition-duration-fast)
          var(--ve-radio-transition-timing-linear);
    }

    .ve-radio--disabled {
      cursor: not-allowed;
      opacity: var(--ve-radio-disabled-subtle-opacity);
    }

    .ve-radio-input {
      position: absolute;
      inline-size: 1px;
      block-size: 1px;
      margin: -1px;
      padding: 0;
      overflow: hidden;
      border: 0;
      clip: rect(0 0 0 0);
      clip-path: inset(50%);
      white-space: nowrap;
    }

    .ve-radio-indicator {
      position: relative;
      box-sizing: border-box;
      display: inline-flex;
      flex: 0 0 auto;
      align-items: center;
      justify-content: center;
      inline-size: var(--ve-radio-mask-size);
      block-size: var(--ve-radio-mask-size);
      border: var(--ve-radio-mask-border-width)
        var(--ve-radio-mask-border-style) var(--ve-radio-mask-color-border);
      border-radius: var(--ve-radio-mask-border-radius);
      background: var(--ve-radio-mask-color-bg);
      transition:
        background-color var(--ve-radio-transition-duration-fast)
          var(--ve-radio-transition-timing-linear),
        border-color var(--ve-radio-transition-duration-fast)
          var(--ve-radio-transition-timing-linear),
        box-shadow var(--ve-radio-transition-duration-fast)
          var(--ve-radio-transition-timing-linear);
    }

    .ve-radio:not(.ve-radio--disabled):not(.ve-radio--checked):hover
      .ve-radio-indicator {
      border-color: var(--ve-radio-mask-color-border-hover);
    }

    .ve-radio--checked .ve-radio-indicator {
      border-color: var(--ve-radio-mask-color-border-checked);
      background: var(--ve-radio-mask-color-bg-checked);
    }

    .ve-radio--checked:not(.ve-radio--disabled):hover .ve-radio-indicator {
      background: var(--ve-radio-mask-color-bg-checked-hover);
    }

    .ve-radio-input:focus-visible + .ve-radio-indicator {
      box-shadow: 0 0 0 3px var(--ve-radio-focus-ring-color);
    }

    .ve-radio-dot {
      position: relative;
      inline-size: var(--ve-radio-dot-size);
      block-size: var(--ve-radio-dot-size);
      border-radius: var(--radius-full);
      background: var(--ve-radio-dot-color);
      transform: scale(0);
      transition: transform var(--ve-radio-transition-duration-fast)
        var(--ve-radio-transition-timing-overshoot);
    }

    .ve-radio--checked .ve-radio-dot {
      transform: scale(1);
    }

    .ve-radio-label {
      display: inline-flex;
      align-items: center;
      min-inline-size: 0;
      line-height: 1.4;
      white-space: nowrap;
    }

    .ve-radio-input:focus-visible + .ve-radio-label,
    .ve-radio-input:focus-visible ~ .ve-radio-label {
      outline: none;
    }
  `],h=[d.H6,u,i.AH`
    :host {
      display: inline-block;
      font-family: var(--ve-radio-font-family);
      font-size: var(--ve-radio-font-size);
      line-height: var(--line-height-body);
      vertical-align: middle;
    }

    .ve-radio-group {
      display: inline-flex;
      align-items: center;
      color: var(--ve-radio-text-color);
    }

    .ve-radio-group-direction-horizontal {
      flex-direction: row;
      gap: var(--ve-radio-group-gap-horizontal);
    }

    .ve-radio-group-direction-vertical {
      flex-direction: column;
      align-items: flex-start;
      gap: var(--ve-radio-group-gap-vertical);
    }

    .ve-radio-group-direction-vertical ::slotted(ve-radio) {
      min-block-size: var(--ve-radio-group-line-height-vertical);
    }
  `];function p(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function g(e){if(Object(e)!==e)throw TypeError("right-hand side of 'in' should be an object, got "+(null!==e?typeof e:"null"));return e}function b(e,t,r){"symbol"==typeof t&&(t=(t=t.description)?"["+t+"]":"");try{Object.defineProperty(e,"name",{configurable:!0,value:r?r+" "+t:t})}catch(n){}return e}function m(e,t,r,n,o,i){var a,s,l,c,d,u,v,h=Symbol.metadata||Symbol.for("Symbol.metadata"),m=Object.defineProperty,f=Object.create,_=[f(null),f(null)],w=t.length;function y(t,r,n){return function(o,i){r&&(i=o,o=e);for(var a=0;a<t.length;a++)i=t[a].apply(o,n?[i]:[]);return n?i:o}}function x(e,t,r,n){if("function"!=typeof e&&(n||void 0!==e))throw new TypeError(t+" must "+(r||"be")+" a function"+(n?"":" or undefined"));return e}function k(e,t,r,n,o,i,l,c,d,u,v){function h(e){if(!v(e))throw new TypeError("Attempted to access private element on non-instance")}var p=[].concat(t[0]),g=t[3],f=!l,w=1===o,k=3===o,S=4===o,C=2===o;function z(t,r,n){return function(o,i){return r&&(i=o,o=e),n&&n(o),desc[t].call(o,i)}}var E={},O=[],M=k?"get":S||w?"set":"value";if(!f&&(d?(u||w?E={get:b(function(){return g(this)},n,"get"),set:function(e){t[4](this,e)}}:E[M]=g,u||b(E[M],n,C?"":M)):u||(E=Object.getOwnPropertyDescriptor(e,n)),!u&&!d)){if((s=_[+c][n])&&7!==(s^o))throw new Error("Decorating two elements with the same name ("+E[M].name+") is not supported yet");_[+c][n]=o<3?1:o}for(var A=e,I=p.length-1;I>=0;I-=r?2:1){var P=x(p[I],"A decorator","be",!0),T=r?p[I-1]:void 0,$={},R={kind:["field","accessor","method","getter","setter","class"][o],name:n,metadata:a,addInitializer:function(e,t){if(e.v)throw new TypeError("attempted to call addInitializer after decoration was finished");x(t,"An initializer","be",!0),i.push(t)}.bind(null,$)};if(f)s=P.call(T,A,R),$.v=1,x(s,"class decorators","return")&&(A=s);else if(R.static=c,R.private=d,s=R.access={has:d?v.bind():function(e){return n in e}},S||(s.get=d?C?function(e){return h(e),E.value}:z("get",0,h):function(e){return e[n]}),C||k||(s.set=d?z("set",0,h):function(e,t){e[n]=t}),A=P.call(T,w?{get:E.get,set:E.set}:E[M],R),$.v=1,w){if("object"==typeof A&&A)(s=x(A.get,"accessor.get"))&&(E.get=s),(s=x(A.set,"accessor.set"))&&(E.set=s),(s=x(A.init,"accessor.init"))&&O.unshift(s);else if(void 0!==A)throw new TypeError("accessor decorators must return an object with get, set, or init properties or undefined")}else x(A,(u?"field":"method")+" decorators","return")&&(u?O.unshift(A):E[M]=A)}return o<2&&l.push(y(O,c,1),y(i,c,0)),u||f||(d?w?l.splice(-1,0,z("get",c),z("set",c)):l.push(C?E[M]:x.call.bind(E[M])):m(e,n,E)),A}function S(e){return m(e,h,{configurable:!0,enumerable:!0,value:a})}return void 0!==i&&(a=i[h]),a=f(null==a?null:a),d=[],u=function(e){e&&d.push(y(e))},v=function(t,n){for(var i=0;i<r.length;i++){var a=r[i],s=a[1],u=7&s;if((8&s)==t&&!u==n){var v=a[2],h=!!a[3],b=16&s;k(t?e:e.prototype,a,b,h?"#"+v:p(v),u,u<2?[]:t?c=c||[]:l=l||[],d,!!t,h,n,t&&h?function(t){return g(t)===e}:o)}}},v(8,0),v(0,0),v(8,1),v(0,1),u(l),u(c),s=d,w||S(e),{e:s,get c(){var r=[];return w&&[S(e=k(e,[t],n,e.name,5,r)),y(r,1)]}}}let f,_,w,y,x,k,S,C,z,E,O,M,A,I,P,T,$,R,D,F,L,V,j,q,H,B,N,W,K,U,Z,G,J;const X="ve-radio",Y="ve-radio-group",Q=["aria-label","aria-labelledby","aria-describedby"],ee={fromAttribute:e=>e??"",toAttribute:e=>String(e)},te={fromAttribute(e){if(null===e||0===e.trim().length)return[];try{const t=JSON.parse(e);return Array.isArray(t)?t:[]}catch{return[]}},toAttribute(e){try{return JSON.stringify(e)}catch{return null}}};function re(e){return"string"==typeof e||"number"==typeof e&&Number.isFinite(e)}function ne(e){return[...new Set([...e,...Q])]}function oe(e,t){return e.getAttribute(t)??void 0}f=(0,l.MZ)({type:Boolean,reflect:!0}),_=(0,l.MZ)({type:Boolean,attribute:"default-checked"}),w=(0,l.MZ)({type:Boolean,reflect:!0}),y=(0,l.MZ)({converter:ee}),x=(0,l.wk)();class ie extends d.IB{static{({e:[k,S,C,z,E,O,M,A,I,P]}=m(this,[],[[f,1,"checked"],[_,1,"defaultChecked"],[w,1,"disabled"],[y,1,"value"],[x,1,"groupDisabled"]]))}static styles=v;static get observedAttributes(){return ne(super.observedAttributes)}#Ne=(()=>{const e=k(this,void 0);return S(this),e})();get checked(){return this.#Ne}set checked(e){this.#Ne=e}#We=(()=>{const e=C(this,!1);return z(this),e})();get defaultChecked(){return this.#We}set defaultChecked(e){this.#We=e}#Ke=(()=>{const e=E(this,!1);return O(this),e})();get disabled(){return this.#Ke}set disabled(e){this.#Ke=e}#c=(()=>{const e=M(this,"");return A(this),e})();get value(){return this.#c}set value(e){this.#c=e}#Ue=(()=>{const e=I(this,!1);return P(this),e})();get groupDisabled(){return this.#Ue}set groupDisabled(e){this.#Ue=e}hasInitializedDefaultChecked=!1;get mergedDisabled(){return this.disabled||this.groupDisabled}get inputValue(){return String(this.value)}connectedCallback(){super.connectedCallback(),this.applyDefaultChecked()}attributeChangedCallback(e,t,r){super.attributeChangedCallback(e,t,r),t!==r&&Q.includes(e)&&this.requestUpdate()}applyDefaultChecked(){this.hasInitializedDefaultChecked||(void 0===this.checked&&this.defaultChecked&&(this.checked=!0),this.hasInitializedDefaultChecked=!0)}emitVeChangeEvent(){const e={checked:!0===this.checked};re(this.value)&&String(this.value).length>0&&(e.value=this.value),this.dispatchEvent(new CustomEvent("ve-change",{detail:e,bubbles:!0,composed:!0}))}handleInputClick(e){e.stopPropagation()}handleInputChange(e){const t=e.target;t instanceof HTMLInputElement&&(e.stopPropagation(),this.mergedDisabled?t.checked=!0===this.checked:(this.checked=t.checked,this.emitVeChangeEvent()))}render(){const e=(0,a.H)({"ve-radio":!0,"ve-radio--checked":!0===this.checked,"ve-radio--disabled":this.mergedDisabled});return i.qy`
      <label class=${e} part="wrapper">
        <input
          class="ve-radio-input"
          part="input"
          type="radio"
          .checked=${!0===this.checked}
          ?disabled=${this.mergedDisabled}
          .value=${this.inputValue}
          aria-label=${(0,s.J)(oe(this,"aria-label"))}
          aria-labelledby=${(0,s.J)(oe(this,"aria-labelledby"))}
          aria-describedby=${(0,s.J)(oe(this,"aria-describedby"))}
          @click=${this.handleInputClick}
          @change=${this.handleInputChange}
        />
        <span class="ve-radio-indicator" part="indicator" aria-hidden="true">
          <span class="ve-radio-dot" part="dot"></span>
        </span>
        <span class="ve-radio-label" part="label">
          <slot></slot>
        </span>
      </label>
    `}}T=(0,l.MZ)({converter:ee,reflect:!0}),$=(0,l.MZ)({attribute:"default-value",converter:ee}),R=(0,l.MZ)({type:Boolean,reflect:!0}),D=(0,l.MZ)({type:String,reflect:!0,useDefault:!0}),F=(0,l.MZ)({converter:te}),L=(0,l.KN)({selector:X,flatten:!0});class ae extends d.IB{static{({e:[V,j,q,H,B,N,W,K,U,Z,G,J]}=m(this,[],[[T,1,"value"],[$,1,"defaultValue"],[R,1,"disabled"],[D,1,"direction"],[F,1,"options"],[L,1,"assignedRadioElements"]]))}static styles=h;static dependencies={[X]:ie};static get observedAttributes(){return ne(super.observedAttributes)}#Ze=(()=>{const e=V(this,"");return j(this),e})();get value(){return this.#Ze}set value(e){this.#Ze=e}#Ge=(()=>{const e=q(this,"");return H(this),e})();get defaultValue(){return this.#Ge}set defaultValue(e){this.#Ge=e}#h=(()=>{const e=B(this,!1);return N(this),e})();get disabled(){return this.#h}set disabled(e){this.#h=e}#Je=(()=>{const e=W(this,"horizontal");return K(this),e})();get direction(){return this.#Je}set direction(e){this.#Je=e}#Xe=(()=>{const e=U(this,[]);return Z(this),e})();get options(){return this.#Xe}set options(e){this.#Xe=e}#Ye=(()=>{const e=G(this);return J(this),e})();get assignedRadioElements(){return this.#Ye}set assignedRadioElements(e){this.#Ye=e}normalizedOptions=[];hasInitializedDefaultValue=!1;handleGroupChildChange=e=>{if(!(e instanceof CustomEvent))return;const t=this.resolveEventRadioTarget(e);if(!t)return;if(!this.isManagedRadio(t))return;e.stopPropagation();const r=t.value;re(r)&&(this.value!==r?(this.value=r,this.syncRadioStates(),this.dispatchEvent(new CustomEvent("ve-group-change",{detail:{value:this.value},bubbles:!0,composed:!0}))):this.syncRadioStates())};get hasOptions(){return this.normalizedOptions.length>0}connectedCallback(){super.connectedCallback(),this.normalizedOptions=this.normalizeOptions(this.options),this.applyDefaultValue(),this.addEventListener("ve-change",this.handleGroupChildChange)}disconnectedCallback(){this.removeEventListener("ve-change",this.handleGroupChildChange),super.disconnectedCallback()}firstUpdated(e){super.firstUpdated(e),this.syncRadioStates()}willUpdate(e){super.willUpdate(e),e.has("options")&&(this.normalizedOptions=this.normalizeOptions(this.options))}updated(e){super.updated(e),(e.has("value")||e.has("disabled")||e.has("options"))&&this.syncRadioStates()}attributeChangedCallback(e,t,r){super.attributeChangedCallback(e,t,r),t!==r&&Q.includes(e)&&this.requestUpdate()}applyDefaultValue(){this.hasInitializedDefaultValue||(0===String(this.value).length&&String(this.defaultValue).length>0&&(this.value=this.defaultValue),this.hasInitializedDefaultValue=!0)}normalizeOptions(e){if(!Array.isArray(e))return[];const t=[],r=new Set;for(const n of e){const e=this.normalizeOption(n);e&&(r.has(e.value)||(r.add(e.value),t.push(e)))}return t}normalizeOption(e){if(re(e))return{label:e,value:e,disabled:!1};if(!e||"object"!=typeof e)return null;const t=e;return re(t.value)?{label:t.label??t.value,value:t.value,disabled:!0===t.disabled}:null}getSlottedRadioChildren(){return this.assignedRadioElements.filter(e=>e instanceof ie)}getRadioChildren(){return this.hasOptions?Array.from(this.renderRoot.querySelectorAll("ve-radio[data-option-item]")):this.getSlottedRadioChildren()}syncManagedRadio(e){e.groupDisabled=this.disabled,e.checked=e.value===this.value}syncRadioStates(){for(const e of this.getRadioChildren())this.syncManagedRadio(e)}isManagedRadio(e){return this.hasOptions?e.hasAttribute("data-option-item"):e.closest(Y)===this}resolveEventRadioTarget(e){return e.target instanceof ie?e.target:e.composedPath().find(e=>e instanceof ie)}handleSlotChange(){this.syncRadioStates()}renderOptionLabel(e){return null!=(t=e.label)&&"boolean"!=typeof t&&"function"!=typeof t&&"symbol"!=typeof t?e.label:String(e.value);var t}renderOptionNodes(){return(0,c.u)(this.normalizedOptions,e=>e.value,e=>i.qy`
        <ve-radio
          data-option-item
          class="ve-radio-group-option-item"
          .value=${e.value}
          .disabled=${e.disabled}
          .groupDisabled=${this.disabled}
          .checked=${e.value===this.value}
        >
          ${this.renderOptionLabel(e)}
        </ve-radio>
      `)}render(){const e=(0,a.H)({"ve-radio-group":!0,"ve-radio-group-direction-horizontal":"horizontal"===this.direction,"ve-radio-group-direction-vertical":"vertical"===this.direction});return i.qy`
      <div
        class=${e}
        part="group"
        role="radiogroup"
        aria-label=${(0,s.J)(oe(this,"aria-label"))}
        aria-labelledby=${(0,s.J)(oe(this,"aria-labelledby"))}
        aria-describedby=${(0,s.J)(oe(this,"aria-describedby"))}
      >
        ${this.hasOptions?this.renderOptionNodes():i.qy`<slot @slotchange=${this.handleSlotChange}></slot>`}
      </div>
    `}}(0,d.Xq)(X,ie),(0,d.Xq)(Y,ae);var se=r(35780);const le=(0,se.h)({tagName:X,elementClass:ie,react:o,events:{onChange:"ve-change"},ownEvents:["onChange"]}),ce=(0,se.h)({tagName:Y,elementClass:ae,react:o,events:{onChange:"ve-group-change"},ownEvents:["onChange"]})},54386(e,t,r){r.d(t,{l6:()=>u,eb:()=>d});var n=r(30758),o=r.t(n,2),i=r(53140),a=r(94023);(0,a.Xq)(i.q9,i.ak),(0,a.Xq)(i.Me,i.b1),(0,a.Xq)(i.u5,i.rJ);var s=r(35780),l=r(74410);const c=(0,s.h)({tagName:i.q9,elementClass:i.ak,react:o,events:{onChange:"ve-change",onClear:"ve-clear",onOpenChange:"ve-open-change",onRemove:"ve-remove",onSearch:"ve-search",onInputValueChange:"ve-input-value-change"},ownEvents:["onChange","onOpenChange"]}),d=(0,s.h)({tagName:i.Me,elementClass:i.b1,react:o}),u=((0,s.h)({tagName:i.u5,elementClass:i.rJ,react:o}),n.forwardRef(({prefix:e,empty:t,children:r,...o},i)=>n.createElement(c,{...o,ref:i},(0,l.M2)([["prefix",e],["empty",t]]),r)));u.displayName="Select"},83610(e,t,r){r.d(t,{d:()=>P});var n=r(30758),o=r.t(n,2),i=r(45080),a=r(67463),s=r(61834),l=r(94023);const c=i.AH`
  :host {
    --ve-switch-track-width-small: 24px;
    --ve-switch-track-height-small: 14px;
    --ve-switch-thumb-size-small: 10px;

    --ve-switch-track-width-default: 32px;
    --ve-switch-track-height-default: 18px;
    --ve-switch-thumb-size-default: 14px;

    --ve-switch-track-width-large: 40px;
    --ve-switch-track-height-large: 22px;
    --ve-switch-thumb-size-large: 18px;

    --ve-switch-thumb-offset: 1px;
    --ve-switch-track-radius: var(--radius-full);
    --ve-switch-thumb-radius: var(--radius-full);
    --ve-switch-transition-duration: 200ms;
    --ve-switch-disabled-opacity: var(--state-disabled-ratio);

    --ve-switch-track-background-unchecked: var(--color-bg-muted);
    --ve-switch-track-background-checked: var(--color-bg-primary);
    --ve-switch-track-border-unchecked: var(--color-border-default);
    --ve-switch-track-border-checked: transparent;
    --ve-switch-track-border-width: var(--stroke-weight-strong);
    --ve-switch-thumb-background-unchecked: var(--color-white);
    --ve-switch-thumb-background-checked: var(--color-text-foreground);
    --ve-switch-thumb-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);

    --ve-switch-current-track-width: var(--ve-switch-track-width-default);
    --ve-switch-current-track-height: var(--ve-switch-track-height-default);
    --ve-switch-current-thumb-size: var(--ve-switch-thumb-size-default);
    --ve-switch-current-track-background: var(
      --ve-switch-track-background-unchecked
    );
    --ve-switch-current-track-border: var(--ve-switch-track-border-unchecked);
    --ve-switch-current-thumb-background: var(
      --ve-switch-thumb-background-unchecked
    );
    --ve-switch-current-hover-ratio: var(--state-hover-subtle-ratio);
    --ve-switch-current-hover-mix: var(--state-hover-subtle-mix);
  }

  :host([checked]) {
    --ve-switch-current-track-background: var(--ve-switch-track-background-checked);
    --ve-switch-current-track-border: var(--ve-switch-track-border-checked);
    --ve-switch-current-thumb-background: var(
      --ve-switch-thumb-background-checked
    );
    --ve-switch-current-hover-ratio: var(--state-hover-solid-ratio);
    --ve-switch-current-hover-mix: var(--state-hover-solid-mix);
  }

  :host([size='small']) {
    --ve-switch-current-track-height: var(--ve-switch-track-height-small);
    --ve-switch-current-track-width: var(--ve-switch-track-width-small);
    --ve-switch-current-thumb-size: var(--ve-switch-thumb-size-small);
  }

  :host([size='large']) {
    --ve-switch-current-track-height: var(--ve-switch-track-height-large);
    --ve-switch-current-track-width: var(--ve-switch-track-width-large);
    --ve-switch-current-thumb-size: var(--ve-switch-thumb-size-large);
  }
`,d=[l.H6,c,i.AH`
    :host {
      display: inline-flex;
      align-items: center;
      vertical-align: middle;
    }

    :host([hidden]) {
      display: none;
    }

    :host([disabled]) {
      cursor: not-allowed;
      opacity: var(--ve-switch-disabled-opacity);
    }

    .ve-switch {
      position: relative;
      display: inline-flex;
      align-items: center;
      box-sizing: border-box;
      inline-size: var(--ve-switch-current-track-width);
      block-size: var(--ve-switch-current-track-height);
      margin: 0;
      padding: 0;
      border: var(--ve-switch-track-border-width) solid
        var(--ve-switch-current-track-border);
      border-radius: var(--ve-switch-track-radius);
      background: var(--ve-switch-current-track-background);
      appearance: none;
      cursor: pointer;
      user-select: none;
      transition:
        background-color var(--ve-switch-transition-duration) ease,
        border-color var(--ve-switch-transition-duration) ease;
    }

    .ve-switch:focus-visible {
      outline: var(--stroke-weight-base) solid var(--color-text-primary);
      outline-offset: var(--stroke-weight-base);
    }

    :host([checked]) .ve-switch {
      background: var(--ve-switch-current-track-background);
      border-color: var(--ve-switch-current-track-border);
    }

    :host(:not([disabled])) .ve-switch:hover,
    :host(:not([disabled])) .ve-switch:focus-visible {
      background: color-mix(
        in srgb,
        var(--ve-switch-current-track-background)
          var(--ve-switch-current-hover-ratio),
        var(--ve-switch-current-hover-mix)
      );
    }

    :host([disabled]) .ve-switch {
      cursor: not-allowed;
      pointer-events: none;
    }

    .ve-switch-thumb {
      position: absolute;
      top: 50%;
      left: var(--ve-switch-thumb-offset);
      inline-size: var(--ve-switch-current-thumb-size);
      block-size: var(--ve-switch-current-thumb-size);
      border-radius: var(--ve-switch-thumb-radius);
      background: var(--ve-switch-current-thumb-background);
      box-shadow: var(--ve-switch-thumb-shadow);
      transform: translateY(-50%);
      transition: left var(--ve-switch-transition-duration) ease;
    }

    :host([checked]) .ve-switch-thumb {
      left: calc(
        var(--ve-switch-current-track-width) -
          var(--ve-switch-current-thumb-size) - var(--ve-switch-thumb-offset) -
          var(--ve-switch-track-border-width) -
          var(--ve-switch-track-border-width)
      );
    }

    @media (prefers-reduced-motion: reduce) {
      .ve-switch,
      .ve-switch-thumb {
        transition: none;
      }
    }

    @supports not (color: color-mix(in srgb, red, blue)) {
      :host(:not([disabled])) .ve-switch:hover {
        background: var(--ve-switch-current-track-background);
      }
    }
  `];function u(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function v(e){if(Object(e)!==e)throw TypeError("right-hand side of 'in' should be an object, got "+(null!==e?typeof e:"null"));return e}function h(e,t,r){"symbol"==typeof t&&(t=(t=t.description)?"["+t+"]":"");try{Object.defineProperty(e,"name",{configurable:!0,value:r?r+" "+t:t})}catch(n){}return e}let p,g,b,m,f,_,w,y,x,k,S,C,z,E,O;const M="ve-switch",A=["aria-label","aria-labelledby","aria-describedby"];p=(0,s.MZ)({type:Boolean,reflect:!0}),g=(0,s.MZ)({type:Boolean,attribute:"default-checked"}),b=(0,s.MZ)({type:Boolean,reflect:!0}),m=(0,s.MZ)({type:String,reflect:!0,useDefault:!0}),f=(0,s.P)(".ve-switch");class I extends l.IB{static{({e:[_,w,y,x,k,S,C,z,E,O]}=function(e,t,r,n,o,i){var a,s,l,c,d,p,g,b=Symbol.metadata||Symbol.for("Symbol.metadata"),m=Object.defineProperty,f=Object.create,_=[f(null),f(null)],w=t.length;function y(t,r,n){return function(o,i){r&&(i=o,o=e);for(var a=0;a<t.length;a++)i=t[a].apply(o,n?[i]:[]);return n?i:o}}function x(e,t,r,n){if("function"!=typeof e&&(n||void 0!==e))throw new TypeError(t+" must "+(r||"be")+" a function"+(n?"":" or undefined"));return e}function k(e,t,r,n,o,i,l,c,d,u,v){function p(e){if(!v(e))throw new TypeError("Attempted to access private element on non-instance")}var g=[].concat(t[0]),b=t[3],f=!l,w=1===o,k=3===o,S=4===o,C=2===o;function z(t,r,n){return function(o,i){return r&&(i=o,o=e),n&&n(o),desc[t].call(o,i)}}var E={},O=[],M=k?"get":S||w?"set":"value";if(!f&&(d?(u||w?E={get:h(function(){return b(this)},n,"get"),set:function(e){t[4](this,e)}}:E[M]=b,u||h(E[M],n,C?"":M)):u||(E=Object.getOwnPropertyDescriptor(e,n)),!u&&!d)){if((s=_[+c][n])&&7!==(s^o))throw new Error("Decorating two elements with the same name ("+E[M].name+") is not supported yet");_[+c][n]=o<3?1:o}for(var A=e,I=g.length-1;I>=0;I-=r?2:1){var P=x(g[I],"A decorator","be",!0),T=r?g[I-1]:void 0,$={},R={kind:["field","accessor","method","getter","setter","class"][o],name:n,metadata:a,addInitializer:function(e,t){if(e.v)throw new TypeError("attempted to call addInitializer after decoration was finished");x(t,"An initializer","be",!0),i.push(t)}.bind(null,$)};if(f)s=P.call(T,A,R),$.v=1,x(s,"class decorators","return")&&(A=s);else if(R.static=c,R.private=d,s=R.access={has:d?v.bind():function(e){return n in e}},S||(s.get=d?C?function(e){return p(e),E.value}:z("get",0,p):function(e){return e[n]}),C||k||(s.set=d?z("set",0,p):function(e,t){e[n]=t}),A=P.call(T,w?{get:E.get,set:E.set}:E[M],R),$.v=1,w){if("object"==typeof A&&A)(s=x(A.get,"accessor.get"))&&(E.get=s),(s=x(A.set,"accessor.set"))&&(E.set=s),(s=x(A.init,"accessor.init"))&&O.unshift(s);else if(void 0!==A)throw new TypeError("accessor decorators must return an object with get, set, or init properties or undefined")}else x(A,(u?"field":"method")+" decorators","return")&&(u?O.unshift(A):E[M]=A)}return o<2&&l.push(y(O,c,1),y(i,c,0)),u||f||(d?w?l.splice(-1,0,z("get",c),z("set",c)):l.push(C?E[M]:x.call.bind(E[M])):m(e,n,E)),A}function S(e){return m(e,b,{configurable:!0,enumerable:!0,value:a})}return void 0!==i&&(a=i[b]),a=f(null==a?null:a),d=[],p=function(e){e&&d.push(y(e))},(g=function(t,n){for(var i=0;i<r.length;i++){var a=r[i],s=a[1],h=7&s;if((8&s)==t&&!h==n){var p=a[2],g=!!a[3],b=16&s;k(t?e:e.prototype,a,b,g?"#"+p:u(p),h,h<2?[]:t?c=c||[]:l=l||[],d,!!t,g,n,t&&g?function(t){return v(t)===e}:o)}}})(8,0),g(0,0),g(8,1),g(0,1),p(l),p(c),s=d,w||S(e),{e:s,get c(){var r=[];return w&&[S(e=k(e,[t],n,e.name,5,r)),y(r,1)]}}}(this,[],[[p,1,"checked"],[g,1,"defaultChecked"],[b,1,"disabled"],[m,1,"size"],[f,1,"controlElement"]]))}static styles=d;static get observedAttributes(){return[...new Set([...super.observedAttributes,...A])]}#Ne=(()=>{const e=_(this,void 0);return w(this),e})();get checked(){return this.#Ne}set checked(e){this.#Ne=e}#We=(()=>{const e=y(this,!1);return x(this),e})();get defaultChecked(){return this.#We}set defaultChecked(e){this.#We=e}#Ke=(()=>{const e=k(this,!1);return S(this),e})();get disabled(){return this.#Ke}set disabled(e){this.#Ke=e}#P=(()=>{const e=C(this,"default");return z(this),e})();get size(){return this.#P}set size(e){this.#P=e}#Qe=(()=>{const e=E(this,null);return O(this),e})();get controlElement(){return this.#Qe}set controlElement(e){this.#Qe=e}get controlAriaLabel(){return this.getAttribute("aria-label")??void 0}get controlAriaLabelledby(){return this.getAttribute("aria-labelledby")??void 0}get controlAriaDescribedby(){return this.getAttribute("aria-describedby")??void 0}syncControlAccessibilityAttribute(e,t){const r=this.controlElement;r&&(null!==t?r.setAttribute(e,t):r.removeAttribute(e))}connectedCallback(){super.connectedCallback(),void 0===this.checked&&this.defaultChecked&&(this.checked=!0)}attributeChangedCallback(e,t,r){super.attributeChangedCallback(e,t,r),t!==r&&A.includes(e)&&this.syncControlAccessibilityAttribute(e,r)}click(){this.controlElement?this.controlElement.click():super.click()}emitChangeEvents(e){this.dispatchEvent(new CustomEvent("ve-change",{detail:{checked:e},bubbles:!0,composed:!0}))}setChecked(e,t=!1){this.checked!==e&&(this.checked=e,t&&this.emitChangeEvents(e))}toggleChecked(){this.disabled||this.setChecked(!0!==this.checked,!0)}render(){return i.qy`
      <button
        class="ve-switch"
        part="control track"
        type="button"
        role="switch"
        ?disabled=${this.disabled}
        .ariaChecked=${!0===this.checked?"true":"false"}
        aria-disabled=${(0,a.J)(this.disabled?"true":void 0)}
        aria-label=${(0,a.J)(this.controlAriaLabel)}
        aria-labelledby=${(0,a.J)(this.controlAriaLabelledby)}
        aria-describedby=${(0,a.J)(this.controlAriaDescribedby)}
        @click=${this.toggleChecked}
      >
        <span class="ve-switch-thumb" part="thumb"></span>
      </button>
    `}}(0,l.Xq)(M,I);const P=(0,r(35780).h)({tagName:M,elementClass:I,react:o,events:{onChange:"ve-change"},ownEvents:["onChange"]})},93030(e,t,r){r.d(t,{X:()=>ar});var n=r(30758),o=r.t(n,2);function i(e,t){return"function"==typeof e?e(t):e}function a(e,t){return r=>{t.setState(t=>({...t,[e]:i(r,t[e])}))}}function s(e){return e instanceof Function}function l(e,t){const r=[],n=e=>{e.forEach(e=>{r.push(e);const o=t(e);null!=o&&o.length&&n(o)})};return n(e),r}function c(e,t,r){let n,o=[];return i=>{let a;r.key&&r.debug&&(a=Date.now());const s=e(i);if(!(s.length!==o.length||s.some((e,t)=>o[t]!==e)))return n;let l;if(o=s,r.key&&r.debug&&(l=Date.now()),n=t(...s),null==r||null==r.onChange||r.onChange(n),r.key&&r.debug&&null!=r&&r.debug()){const e=Math.round(100*(Date.now()-a))/100,t=Math.round(100*(Date.now()-l))/100,n=t/16,o=(e,t)=>{for(e=String(e);e.length<t;)e=" "+e;return e};console.info(`%c\u23f1 ${o(t,5)} /${o(e,5)} ms`,`\n            font-size: .6rem;\n            font-weight: bold;\n            color: hsl(${Math.max(0,Math.min(120-120*n,120))}deg 100% 31%);`,null==r?void 0:r.key)}return n}}function d(e,t,r,n){return{debug:()=>{var r;return null!=(r=null==e?void 0:e.debugAll)?r:e[t]},key:!1,onChange:n}}const u="debugHeaders";function v(e,t,r){var n;let o={id:null!=(n=r.id)?n:t.id,column:t,index:r.index,isPlaceholder:!!r.isPlaceholder,placeholderId:r.placeholderId,depth:r.depth,subHeaders:[],colSpan:0,rowSpan:0,headerGroup:null,getLeafHeaders:()=>{const e=[],t=r=>{r.subHeaders&&r.subHeaders.length&&r.subHeaders.map(t),e.push(r)};return t(o),e},getContext:()=>({table:e,header:o,column:t})};return e._features.forEach(t=>{null==t.createHeader||t.createHeader(o,e)}),o}const h={createTable:e=>{e.getHeaderGroups=c(()=>[e.getAllColumns(),e.getVisibleLeafColumns(),e.getState().columnPinning.left,e.getState().columnPinning.right],(t,r,n,o)=>{var i,a;const s=null!=(i=null==n?void 0:n.map(e=>r.find(t=>t.id===e)).filter(Boolean))?i:[],l=null!=(a=null==o?void 0:o.map(e=>r.find(t=>t.id===e)).filter(Boolean))?a:[];return p(t,[...s,...r.filter(e=>!(null!=n&&n.includes(e.id)||null!=o&&o.includes(e.id))),...l],e)},d(e.options,u)),e.getCenterHeaderGroups=c(()=>[e.getAllColumns(),e.getVisibleLeafColumns(),e.getState().columnPinning.left,e.getState().columnPinning.right],(t,r,n,o)=>p(t,r=r.filter(e=>!(null!=n&&n.includes(e.id)||null!=o&&o.includes(e.id))),e,"center"),d(e.options,u)),e.getLeftHeaderGroups=c(()=>[e.getAllColumns(),e.getVisibleLeafColumns(),e.getState().columnPinning.left],(t,r,n)=>{var o;return p(t,null!=(o=null==n?void 0:n.map(e=>r.find(t=>t.id===e)).filter(Boolean))?o:[],e,"left")},d(e.options,u)),e.getRightHeaderGroups=c(()=>[e.getAllColumns(),e.getVisibleLeafColumns(),e.getState().columnPinning.right],(t,r,n)=>{var o;return p(t,null!=(o=null==n?void 0:n.map(e=>r.find(t=>t.id===e)).filter(Boolean))?o:[],e,"right")},d(e.options,u)),e.getFooterGroups=c(()=>[e.getHeaderGroups()],e=>[...e].reverse(),d(e.options,u)),e.getLeftFooterGroups=c(()=>[e.getLeftHeaderGroups()],e=>[...e].reverse(),d(e.options,u)),e.getCenterFooterGroups=c(()=>[e.getCenterHeaderGroups()],e=>[...e].reverse(),d(e.options,u)),e.getRightFooterGroups=c(()=>[e.getRightHeaderGroups()],e=>[...e].reverse(),d(e.options,u)),e.getFlatHeaders=c(()=>[e.getHeaderGroups()],e=>e.map(e=>e.headers).flat(),d(e.options,u)),e.getLeftFlatHeaders=c(()=>[e.getLeftHeaderGroups()],e=>e.map(e=>e.headers).flat(),d(e.options,u)),e.getCenterFlatHeaders=c(()=>[e.getCenterHeaderGroups()],e=>e.map(e=>e.headers).flat(),d(e.options,u)),e.getRightFlatHeaders=c(()=>[e.getRightHeaderGroups()],e=>e.map(e=>e.headers).flat(),d(e.options,u)),e.getCenterLeafHeaders=c(()=>[e.getCenterFlatHeaders()],e=>e.filter(e=>{var t;return!(null!=(t=e.subHeaders)&&t.length)}),d(e.options,u)),e.getLeftLeafHeaders=c(()=>[e.getLeftFlatHeaders()],e=>e.filter(e=>{var t;return!(null!=(t=e.subHeaders)&&t.length)}),d(e.options,u)),e.getRightLeafHeaders=c(()=>[e.getRightFlatHeaders()],e=>e.filter(e=>{var t;return!(null!=(t=e.subHeaders)&&t.length)}),d(e.options,u)),e.getLeafHeaders=c(()=>[e.getLeftHeaderGroups(),e.getCenterHeaderGroups(),e.getRightHeaderGroups()],(e,t,r)=>{var n,o,i,a,s,l;return[...null!=(n=null==(o=e[0])?void 0:o.headers)?n:[],...null!=(i=null==(a=t[0])?void 0:a.headers)?i:[],...null!=(s=null==(l=r[0])?void 0:l.headers)?s:[]].map(e=>e.getLeafHeaders()).flat()},d(e.options,u))}};function p(e,t,r,n){var o,i;let a=0;const s=function(e,t){void 0===t&&(t=1),a=Math.max(a,t),e.filter(e=>e.getIsVisible()).forEach(e=>{var r;null!=(r=e.columns)&&r.length&&s(e.columns,t+1)},0)};s(e);let l=[];const c=(e,t)=>{const o={depth:t,id:[n,`${t}`].filter(Boolean).join("_"),headers:[]},i=[];e.forEach(e=>{const a=[...i].reverse()[0];let s,l=!1;if(e.column.depth===o.depth&&e.column.parent?s=e.column.parent:(s=e.column,l=!0),a&&(null==a?void 0:a.column)===s)a.subHeaders.push(e);else{const o=v(r,s,{id:[n,t,s.id,null==e?void 0:e.id].filter(Boolean).join("_"),isPlaceholder:l,placeholderId:l?`${i.filter(e=>e.column===s).length}`:void 0,depth:t,index:i.length});o.subHeaders.push(e),i.push(o)}o.headers.push(e),e.headerGroup=o}),l.push(o),t>0&&c(i,t-1)},d=t.map((e,t)=>v(r,e,{depth:a,index:t}));c(d,a-1),l.reverse();const u=e=>e.filter(e=>e.column.getIsVisible()).map(e=>{let t=0,r=0,n=[0];e.subHeaders&&e.subHeaders.length?(n=[],u(e.subHeaders).forEach(e=>{let{colSpan:r,rowSpan:o}=e;t+=r,n.push(o)})):t=1;return r+=Math.min(...n),e.colSpan=t,e.rowSpan=r,{colSpan:t,rowSpan:r}});return u(null!=(o=null==(i=l[0])?void 0:i.headers)?o:[]),l}const g=(e,t,r,n,o,i,a)=>{let s={id:t,index:n,original:r,depth:o,parentId:a,_valuesCache:{},_uniqueValuesCache:{},getValue:t=>{if(s._valuesCache.hasOwnProperty(t))return s._valuesCache[t];const r=e.getColumn(t);return null!=r&&r.accessorFn?(s._valuesCache[t]=r.accessorFn(s.original,n),s._valuesCache[t]):void 0},getUniqueValues:t=>{if(s._uniqueValuesCache.hasOwnProperty(t))return s._uniqueValuesCache[t];const r=e.getColumn(t);return null!=r&&r.accessorFn?r.columnDef.getUniqueValues?(s._uniqueValuesCache[t]=r.columnDef.getUniqueValues(s.original,n),s._uniqueValuesCache[t]):(s._uniqueValuesCache[t]=[s.getValue(t)],s._uniqueValuesCache[t]):void 0},renderValue:t=>{var r;return null!=(r=s.getValue(t))?r:e.options.renderFallbackValue},subRows:null!=i?i:[],getLeafRows:()=>l(s.subRows,e=>e.subRows),getParentRow:()=>s.parentId?e.getRow(s.parentId,!0):void 0,getParentRows:()=>{let e=[],t=s;for(;;){const r=t.getParentRow();if(!r)break;e.push(r),t=r}return e.reverse()},getAllCells:c(()=>[e.getAllLeafColumns()],t=>t.map(t=>function(e,t,r,n){const o={id:`${t.id}_${r.id}`,row:t,column:r,getValue:()=>t.getValue(n),renderValue:()=>{var t;return null!=(t=o.getValue())?t:e.options.renderFallbackValue},getContext:c(()=>[e,r,t,o],(e,t,r,n)=>({table:e,column:t,row:r,cell:n,getValue:n.getValue,renderValue:n.renderValue}),d(e.options,"debugCells"))};return e._features.forEach(n=>{null==n.createCell||n.createCell(o,r,t,e)},{}),o}(e,s,t,t.id)),d(e.options,"debugRows")),_getAllCellsByColumnId:c(()=>[s.getAllCells()],e=>e.reduce((e,t)=>(e[t.column.id]=t,e),{}),d(e.options,"debugRows"))};for(let l=0;l<e._features.length;l++){const t=e._features[l];null==t||null==t.createRow||t.createRow(s,e)}return s},b={createColumn:(e,t)=>{e._getFacetedRowModel=t.options.getFacetedRowModel&&t.options.getFacetedRowModel(t,e.id),e.getFacetedRowModel=()=>e._getFacetedRowModel?e._getFacetedRowModel():t.getPreFilteredRowModel(),e._getFacetedUniqueValues=t.options.getFacetedUniqueValues&&t.options.getFacetedUniqueValues(t,e.id),e.getFacetedUniqueValues=()=>e._getFacetedUniqueValues?e._getFacetedUniqueValues():new Map,e._getFacetedMinMaxValues=t.options.getFacetedMinMaxValues&&t.options.getFacetedMinMaxValues(t,e.id),e.getFacetedMinMaxValues=()=>{if(e._getFacetedMinMaxValues)return e._getFacetedMinMaxValues()}}},m=(e,t,r)=>{var n,o;const i=null==r||null==(n=r.toString())?void 0:n.toLowerCase();return Boolean(null==(o=e.getValue(t))||null==(o=o.toString())||null==(o=o.toLowerCase())?void 0:o.includes(i))};m.autoRemove=e=>E(e);const f=(e,t,r)=>{var n;return Boolean(null==(n=e.getValue(t))||null==(n=n.toString())?void 0:n.includes(r))};f.autoRemove=e=>E(e);const _=(e,t,r)=>{var n;return(null==(n=e.getValue(t))||null==(n=n.toString())?void 0:n.toLowerCase())===(null==r?void 0:r.toLowerCase())};_.autoRemove=e=>E(e);const w=(e,t,r)=>{var n;return null==(n=e.getValue(t))?void 0:n.includes(r)};w.autoRemove=e=>E(e);const y=(e,t,r)=>!r.some(r=>{var n;return!(null!=(n=e.getValue(t))&&n.includes(r))});y.autoRemove=e=>E(e)||!(null!=e&&e.length);const x=(e,t,r)=>r.some(r=>{var n;return null==(n=e.getValue(t))?void 0:n.includes(r)});x.autoRemove=e=>E(e)||!(null!=e&&e.length);const k=(e,t,r)=>e.getValue(t)===r;k.autoRemove=e=>E(e);const S=(e,t,r)=>e.getValue(t)==r;S.autoRemove=e=>E(e);const C=(e,t,r)=>{let[n,o]=r;const i=e.getValue(t);return i>=n&&i<=o};C.resolveFilterValue=e=>{let[t,r]=e,n="number"!=typeof t?parseFloat(t):t,o="number"!=typeof r?parseFloat(r):r,i=null===t||Number.isNaN(n)?-1/0:n,a=null===r||Number.isNaN(o)?1/0:o;if(i>a){const e=i;i=a,a=e}return[i,a]},C.autoRemove=e=>E(e)||E(e[0])&&E(e[1]);const z={includesString:m,includesStringSensitive:f,equalsString:_,arrIncludes:w,arrIncludesAll:y,arrIncludesSome:x,equals:k,weakEquals:S,inNumberRange:C};function E(e){return null==e||""===e}const O={getDefaultColumnDef:()=>({filterFn:"auto"}),getInitialState:e=>({columnFilters:[],...e}),getDefaultOptions:e=>({onColumnFiltersChange:a("columnFilters",e),filterFromLeafRows:!1,maxLeafRowFilterDepth:100}),createColumn:(e,t)=>{e.getAutoFilterFn=()=>{const r=t.getCoreRowModel().flatRows[0],n=null==r?void 0:r.getValue(e.id);return"string"==typeof n?z.includesString:"number"==typeof n?z.inNumberRange:"boolean"==typeof n||null!==n&&"object"==typeof n?z.equals:Array.isArray(n)?z.arrIncludes:z.weakEquals},e.getFilterFn=()=>{var r,n;return s(e.columnDef.filterFn)?e.columnDef.filterFn:"auto"===e.columnDef.filterFn?e.getAutoFilterFn():null!=(r=null==(n=t.options.filterFns)?void 0:n[e.columnDef.filterFn])?r:z[e.columnDef.filterFn]},e.getCanFilter=()=>{var r,n,o;return(null==(r=e.columnDef.enableColumnFilter)||r)&&(null==(n=t.options.enableColumnFilters)||n)&&(null==(o=t.options.enableFilters)||o)&&!!e.accessorFn},e.getIsFiltered=()=>e.getFilterIndex()>-1,e.getFilterValue=()=>{var r;return null==(r=t.getState().columnFilters)||null==(r=r.find(t=>t.id===e.id))?void 0:r.value},e.getFilterIndex=()=>{var r,n;return null!=(r=null==(n=t.getState().columnFilters)?void 0:n.findIndex(t=>t.id===e.id))?r:-1},e.setFilterValue=r=>{t.setColumnFilters(t=>{const n=e.getFilterFn(),o=null==t?void 0:t.find(t=>t.id===e.id),a=i(r,o?o.value:void 0);var s;if(M(n,a,e))return null!=(s=null==t?void 0:t.filter(t=>t.id!==e.id))?s:[];const l={id:e.id,value:a};var c;return o?null!=(c=null==t?void 0:t.map(t=>t.id===e.id?l:t))?c:[]:null!=t&&t.length?[...t,l]:[l]})}},createRow:(e,t)=>{e.columnFilters={},e.columnFiltersMeta={}},createTable:e=>{e.setColumnFilters=t=>{const r=e.getAllLeafColumns();null==e.options.onColumnFiltersChange||e.options.onColumnFiltersChange(e=>{var n;return null==(n=i(t,e))?void 0:n.filter(e=>{const t=r.find(t=>t.id===e.id);if(t){if(M(t.getFilterFn(),e.value,t))return!1}return!0})})},e.resetColumnFilters=t=>{var r,n;e.setColumnFilters(t?[]:null!=(r=null==(n=e.initialState)?void 0:n.columnFilters)?r:[])},e.getPreFilteredRowModel=()=>e.getCoreRowModel(),e.getFilteredRowModel=()=>(!e._getFilteredRowModel&&e.options.getFilteredRowModel&&(e._getFilteredRowModel=e.options.getFilteredRowModel(e)),e.options.manualFiltering||!e._getFilteredRowModel?e.getPreFilteredRowModel():e._getFilteredRowModel())}};function M(e,t,r){return!(!e||!e.autoRemove)&&e.autoRemove(t,r)||void 0===t||"string"==typeof t&&!t}const A={sum:(e,t,r)=>r.reduce((t,r)=>{const n=r.getValue(e);return t+("number"==typeof n?n:0)},0),min:(e,t,r)=>{let n;return r.forEach(t=>{const r=t.getValue(e);null!=r&&(n>r||void 0===n&&r>=r)&&(n=r)}),n},max:(e,t,r)=>{let n;return r.forEach(t=>{const r=t.getValue(e);null!=r&&(n<r||void 0===n&&r>=r)&&(n=r)}),n},extent:(e,t,r)=>{let n,o;return r.forEach(t=>{const r=t.getValue(e);null!=r&&(void 0===n?r>=r&&(n=o=r):(n>r&&(n=r),o<r&&(o=r)))}),[n,o]},mean:(e,t)=>{let r=0,n=0;if(t.forEach(t=>{let o=t.getValue(e);null!=o&&(o=+o)>=o&&(++r,n+=o)}),r)return n/r},median:(e,t)=>{if(!t.length)return;const r=t.map(t=>t.getValue(e));if(n=r,!Array.isArray(n)||!n.every(e=>"number"==typeof e))return;var n;if(1===r.length)return r[0];const o=Math.floor(r.length/2),i=r.sort((e,t)=>e-t);return r.length%2!=0?i[o]:(i[o-1]+i[o])/2},unique:(e,t)=>Array.from(new Set(t.map(t=>t.getValue(e))).values()),uniqueCount:(e,t)=>new Set(t.map(t=>t.getValue(e))).size,count:(e,t)=>t.length},I={getDefaultColumnDef:()=>({aggregatedCell:e=>{var t,r;return null!=(t=null==(r=e.getValue())||null==r.toString?void 0:r.toString())?t:null},aggregationFn:"auto"}),getInitialState:e=>({grouping:[],...e}),getDefaultOptions:e=>({onGroupingChange:a("grouping",e),groupedColumnMode:"reorder"}),createColumn:(e,t)=>{e.toggleGrouping=()=>{t.setGrouping(t=>null!=t&&t.includes(e.id)?t.filter(t=>t!==e.id):[...null!=t?t:[],e.id])},e.getCanGroup=()=>{var r,n;return(null==(r=e.columnDef.enableGrouping)||r)&&(null==(n=t.options.enableGrouping)||n)&&(!!e.accessorFn||!!e.columnDef.getGroupingValue)},e.getIsGrouped=()=>{var r;return null==(r=t.getState().grouping)?void 0:r.includes(e.id)},e.getGroupedIndex=()=>{var r;return null==(r=t.getState().grouping)?void 0:r.indexOf(e.id)},e.getToggleGroupingHandler=()=>{const t=e.getCanGroup();return()=>{t&&e.toggleGrouping()}},e.getAutoAggregationFn=()=>{const r=t.getCoreRowModel().flatRows[0],n=null==r?void 0:r.getValue(e.id);return"number"==typeof n?A.sum:"[object Date]"===Object.prototype.toString.call(n)?A.extent:void 0},e.getAggregationFn=()=>{var r,n;if(!e)throw new Error;return s(e.columnDef.aggregationFn)?e.columnDef.aggregationFn:"auto"===e.columnDef.aggregationFn?e.getAutoAggregationFn():null!=(r=null==(n=t.options.aggregationFns)?void 0:n[e.columnDef.aggregationFn])?r:A[e.columnDef.aggregationFn]}},createTable:e=>{e.setGrouping=t=>null==e.options.onGroupingChange?void 0:e.options.onGroupingChange(t),e.resetGrouping=t=>{var r,n;e.setGrouping(t?[]:null!=(r=null==(n=e.initialState)?void 0:n.grouping)?r:[])},e.getPreGroupedRowModel=()=>e.getFilteredRowModel(),e.getGroupedRowModel=()=>(!e._getGroupedRowModel&&e.options.getGroupedRowModel&&(e._getGroupedRowModel=e.options.getGroupedRowModel(e)),e.options.manualGrouping||!e._getGroupedRowModel?e.getPreGroupedRowModel():e._getGroupedRowModel())},createRow:(e,t)=>{e.getIsGrouped=()=>!!e.groupingColumnId,e.getGroupingValue=r=>{if(e._groupingValuesCache.hasOwnProperty(r))return e._groupingValuesCache[r];const n=t.getColumn(r);return null!=n&&n.columnDef.getGroupingValue?(e._groupingValuesCache[r]=n.columnDef.getGroupingValue(e.original),e._groupingValuesCache[r]):e.getValue(r)},e._groupingValuesCache={}},createCell:(e,t,r,n)=>{e.getIsGrouped=()=>t.getIsGrouped()&&t.id===r.groupingColumnId,e.getIsPlaceholder=()=>!e.getIsGrouped()&&t.getIsGrouped(),e.getIsAggregated=()=>{var t;return!e.getIsGrouped()&&!e.getIsPlaceholder()&&!(null==(t=r.subRows)||!t.length)}}};const P={getInitialState:e=>({columnOrder:[],...e}),getDefaultOptions:e=>({onColumnOrderChange:a("columnOrder",e)}),createColumn:(e,t)=>{e.getIndex=c(e=>[L(t,e)],t=>t.findIndex(t=>t.id===e.id),d(t.options,"debugColumns")),e.getIsFirstColumn=r=>{var n;return(null==(n=L(t,r)[0])?void 0:n.id)===e.id},e.getIsLastColumn=r=>{var n;const o=L(t,r);return(null==(n=o[o.length-1])?void 0:n.id)===e.id}},createTable:e=>{e.setColumnOrder=t=>null==e.options.onColumnOrderChange?void 0:e.options.onColumnOrderChange(t),e.resetColumnOrder=t=>{var r;e.setColumnOrder(t?[]:null!=(r=e.initialState.columnOrder)?r:[])},e._getOrderColumnsFn=c(()=>[e.getState().columnOrder,e.getState().grouping,e.options.groupedColumnMode],(e,t,r)=>n=>{let o=[];if(null!=e&&e.length){const t=[...e],r=[...n];for(;r.length&&t.length;){const e=t.shift(),n=r.findIndex(t=>t.id===e);n>-1&&o.push(r.splice(n,1)[0])}o=[...o,...r]}else o=n;return function(e,t,r){if(null==t||!t.length||!r)return e;const n=e.filter(e=>!t.includes(e.id));return"remove"===r?n:[...t.map(t=>e.find(e=>e.id===t)).filter(Boolean),...n]}(o,t,r)},d(e.options,"debugTable"))}},T={getInitialState:e=>({columnPinning:{left:[],right:[]},...e}),getDefaultOptions:e=>({onColumnPinningChange:a("columnPinning",e)}),createColumn:(e,t)=>{e.pin=r=>{const n=e.getLeafColumns().map(e=>e.id).filter(Boolean);t.setColumnPinning(e=>{var t,o,i,a,s,l;return"right"===r?{left:(null!=(i=null==e?void 0:e.left)?i:[]).filter(e=>!(null!=n&&n.includes(e))),right:[...(null!=(a=null==e?void 0:e.right)?a:[]).filter(e=>!(null!=n&&n.includes(e))),...n]}:"left"===r?{left:[...(null!=(s=null==e?void 0:e.left)?s:[]).filter(e=>!(null!=n&&n.includes(e))),...n],right:(null!=(l=null==e?void 0:e.right)?l:[]).filter(e=>!(null!=n&&n.includes(e)))}:{left:(null!=(t=null==e?void 0:e.left)?t:[]).filter(e=>!(null!=n&&n.includes(e))),right:(null!=(o=null==e?void 0:e.right)?o:[]).filter(e=>!(null!=n&&n.includes(e)))}})},e.getCanPin=()=>e.getLeafColumns().some(e=>{var r,n,o;return(null==(r=e.columnDef.enablePinning)||r)&&(null==(n=null!=(o=t.options.enableColumnPinning)?o:t.options.enablePinning)||n)}),e.getIsPinned=()=>{const r=e.getLeafColumns().map(e=>e.id),{left:n,right:o}=t.getState().columnPinning,i=r.some(e=>null==n?void 0:n.includes(e)),a=r.some(e=>null==o?void 0:o.includes(e));return i?"left":!!a&&"right"},e.getPinnedIndex=()=>{var r,n;const o=e.getIsPinned();return o?null!=(r=null==(n=t.getState().columnPinning)||null==(n=n[o])?void 0:n.indexOf(e.id))?r:-1:0}},createRow:(e,t)=>{e.getCenterVisibleCells=c(()=>[e._getAllVisibleCells(),t.getState().columnPinning.left,t.getState().columnPinning.right],(e,t,r)=>{const n=[...null!=t?t:[],...null!=r?r:[]];return e.filter(e=>!n.includes(e.column.id))},d(t.options,"debugRows")),e.getLeftVisibleCells=c(()=>[e._getAllVisibleCells(),t.getState().columnPinning.left],(e,t)=>(null!=t?t:[]).map(t=>e.find(e=>e.column.id===t)).filter(Boolean).map(e=>({...e,position:"left"})),d(t.options,"debugRows")),e.getRightVisibleCells=c(()=>[e._getAllVisibleCells(),t.getState().columnPinning.right],(e,t)=>(null!=t?t:[]).map(t=>e.find(e=>e.column.id===t)).filter(Boolean).map(e=>({...e,position:"right"})),d(t.options,"debugRows"))},createTable:e=>{e.setColumnPinning=t=>null==e.options.onColumnPinningChange?void 0:e.options.onColumnPinningChange(t),e.resetColumnPinning=t=>{var r,n;return e.setColumnPinning(t?{left:[],right:[]}:null!=(r=null==(n=e.initialState)?void 0:n.columnPinning)?r:{left:[],right:[]})},e.getIsSomeColumnsPinned=t=>{var r;const n=e.getState().columnPinning;var o,i;return t?Boolean(null==(r=n[t])?void 0:r.length):Boolean((null==(o=n.left)?void 0:o.length)||(null==(i=n.right)?void 0:i.length))},e.getLeftLeafColumns=c(()=>[e.getAllLeafColumns(),e.getState().columnPinning.left],(e,t)=>(null!=t?t:[]).map(t=>e.find(e=>e.id===t)).filter(Boolean),d(e.options,"debugColumns")),e.getRightLeafColumns=c(()=>[e.getAllLeafColumns(),e.getState().columnPinning.right],(e,t)=>(null!=t?t:[]).map(t=>e.find(e=>e.id===t)).filter(Boolean),d(e.options,"debugColumns")),e.getCenterLeafColumns=c(()=>[e.getAllLeafColumns(),e.getState().columnPinning.left,e.getState().columnPinning.right],(e,t,r)=>{const n=[...null!=t?t:[],...null!=r?r:[]];return e.filter(e=>!n.includes(e.id))},d(e.options,"debugColumns"))}};const $={size:150,minSize:20,maxSize:Number.MAX_SAFE_INTEGER},R={getDefaultColumnDef:()=>$,getInitialState:e=>({columnSizing:{},columnSizingInfo:{startOffset:null,startSize:null,deltaOffset:null,deltaPercentage:null,isResizingColumn:!1,columnSizingStart:[]},...e}),getDefaultOptions:e=>({columnResizeMode:"onEnd",columnResizeDirection:"ltr",onColumnSizingChange:a("columnSizing",e),onColumnSizingInfoChange:a("columnSizingInfo",e)}),createColumn:(e,t)=>{e.getSize=()=>{var r,n,o;const i=t.getState().columnSizing[e.id];return Math.min(Math.max(null!=(r=e.columnDef.minSize)?r:$.minSize,null!=(n=null!=i?i:e.columnDef.size)?n:$.size),null!=(o=e.columnDef.maxSize)?o:$.maxSize)},e.getStart=c(e=>[e,L(t,e),t.getState().columnSizing],(t,r)=>r.slice(0,e.getIndex(t)).reduce((e,t)=>e+t.getSize(),0),d(t.options,"debugColumns")),e.getAfter=c(e=>[e,L(t,e),t.getState().columnSizing],(t,r)=>r.slice(e.getIndex(t)+1).reduce((e,t)=>e+t.getSize(),0),d(t.options,"debugColumns")),e.resetSize=()=>{t.setColumnSizing(t=>{let{[e.id]:r,...n}=t;return n})},e.getCanResize=()=>{var r,n;return(null==(r=e.columnDef.enableResizing)||r)&&(null==(n=t.options.enableColumnResizing)||n)},e.getIsResizing=()=>t.getState().columnSizingInfo.isResizingColumn===e.id},createHeader:(e,t)=>{e.getSize=()=>{let t=0;const r=e=>{var n;e.subHeaders.length?e.subHeaders.forEach(r):t+=null!=(n=e.column.getSize())?n:0};return r(e),t},e.getStart=()=>{if(e.index>0){const t=e.headerGroup.headers[e.index-1];return t.getStart()+t.getSize()}return 0},e.getResizeHandler=r=>{const n=t.getColumn(e.column.id),o=null==n?void 0:n.getCanResize();return i=>{if(!n||!o)return;if(null==i.persist||i.persist(),F(i)&&i.touches&&i.touches.length>1)return;const a=e.getSize(),s=e?e.getLeafHeaders().map(e=>[e.column.id,e.column.getSize()]):[[n.id,n.getSize()]],l=F(i)?Math.round(i.touches[0].clientX):i.clientX,c={},d=(e,r)=>{"number"==typeof r&&(t.setColumnSizingInfo(e=>{var n,o;const i="rtl"===t.options.columnResizeDirection?-1:1,a=(r-(null!=(n=null==e?void 0:e.startOffset)?n:0))*i,s=Math.max(a/(null!=(o=null==e?void 0:e.startSize)?o:0),-.999999);return e.columnSizingStart.forEach(e=>{let[t,r]=e;c[t]=Math.round(100*Math.max(r+r*s,0))/100}),{...e,deltaOffset:a,deltaPercentage:s}}),"onChange"!==t.options.columnResizeMode&&"end"!==e||t.setColumnSizing(e=>({...e,...c})))},u=e=>d("move",e),v=e=>{d("end",e),t.setColumnSizingInfo(e=>({...e,isResizingColumn:!1,startOffset:null,startSize:null,deltaOffset:null,deltaPercentage:null,columnSizingStart:[]}))},h=r||("undefined"!=typeof document?document:null);const p={moveHandler:e=>u(e.clientX),upHandler:e=>{null==h||h.removeEventListener("mousemove",p.moveHandler),null==h||h.removeEventListener("mouseup",p.upHandler),v(e.clientX)}},g={moveHandler:e=>(e.cancelable&&(e.preventDefault(),e.stopPropagation()),u(e.touches[0].clientX),!1),upHandler:e=>{var t;null==h||h.removeEventListener("touchmove",g.moveHandler),null==h||h.removeEventListener("touchend",g.upHandler),e.cancelable&&(e.preventDefault(),e.stopPropagation()),v(null==(t=e.touches[0])?void 0:t.clientX)}},b=!!function(){if("boolean"==typeof D)return D;let e=!1;try{const t={get passive(){return e=!0,!1}},r=()=>{};window.addEventListener("test",r,t),window.removeEventListener("test",r)}catch(t){e=!1}return D=e,D}()&&{passive:!1};F(i)?(null==h||h.addEventListener("touchmove",g.moveHandler,b),null==h||h.addEventListener("touchend",g.upHandler,b)):(null==h||h.addEventListener("mousemove",p.moveHandler,b),null==h||h.addEventListener("mouseup",p.upHandler,b)),t.setColumnSizingInfo(e=>({...e,startOffset:l,startSize:a,deltaOffset:0,deltaPercentage:0,columnSizingStart:s,isResizingColumn:n.id}))}}},createTable:e=>{e.setColumnSizing=t=>null==e.options.onColumnSizingChange?void 0:e.options.onColumnSizingChange(t),e.setColumnSizingInfo=t=>null==e.options.onColumnSizingInfoChange?void 0:e.options.onColumnSizingInfoChange(t),e.resetColumnSizing=t=>{var r;e.setColumnSizing(t?{}:null!=(r=e.initialState.columnSizing)?r:{})},e.resetHeaderSizeInfo=t=>{var r;e.setColumnSizingInfo(t?{startOffset:null,startSize:null,deltaOffset:null,deltaPercentage:null,isResizingColumn:!1,columnSizingStart:[]}:null!=(r=e.initialState.columnSizingInfo)?r:{startOffset:null,startSize:null,deltaOffset:null,deltaPercentage:null,isResizingColumn:!1,columnSizingStart:[]})},e.getTotalSize=()=>{var t,r;return null!=(t=null==(r=e.getHeaderGroups()[0])?void 0:r.headers.reduce((e,t)=>e+t.getSize(),0))?t:0},e.getLeftTotalSize=()=>{var t,r;return null!=(t=null==(r=e.getLeftHeaderGroups()[0])?void 0:r.headers.reduce((e,t)=>e+t.getSize(),0))?t:0},e.getCenterTotalSize=()=>{var t,r;return null!=(t=null==(r=e.getCenterHeaderGroups()[0])?void 0:r.headers.reduce((e,t)=>e+t.getSize(),0))?t:0},e.getRightTotalSize=()=>{var t,r;return null!=(t=null==(r=e.getRightHeaderGroups()[0])?void 0:r.headers.reduce((e,t)=>e+t.getSize(),0))?t:0}}};let D=null;function F(e){return"touchstart"===e.type}function L(e,t){return t?"center"===t?e.getCenterVisibleLeafColumns():"left"===t?e.getLeftVisibleLeafColumns():e.getRightVisibleLeafColumns():e.getVisibleLeafColumns()}const V={getInitialState:e=>({rowSelection:{},...e}),getDefaultOptions:e=>({onRowSelectionChange:a("rowSelection",e),enableRowSelection:!0,enableMultiRowSelection:!0,enableSubRowSelection:!0}),createTable:e=>{e.setRowSelection=t=>null==e.options.onRowSelectionChange?void 0:e.options.onRowSelectionChange(t),e.resetRowSelection=t=>{var r;return e.setRowSelection(t?{}:null!=(r=e.initialState.rowSelection)?r:{})},e.toggleAllRowsSelected=t=>{e.setRowSelection(r=>{t=void 0!==t?t:!e.getIsAllRowsSelected();const n={...r},o=e.getPreGroupedRowModel().flatRows;return t?o.forEach(e=>{e.getCanSelect()&&(n[e.id]=!0)}):o.forEach(e=>{delete n[e.id]}),n})},e.toggleAllPageRowsSelected=t=>e.setRowSelection(r=>{const n=void 0!==t?t:!e.getIsAllPageRowsSelected(),o={...r};return e.getRowModel().rows.forEach(t=>{j(o,t.id,n,!0,e)}),o}),e.getPreSelectedRowModel=()=>e.getCoreRowModel(),e.getSelectedRowModel=c(()=>[e.getState().rowSelection,e.getCoreRowModel()],(t,r)=>Object.keys(t).length?q(e,r):{rows:[],flatRows:[],rowsById:{}},d(e.options,"debugTable")),e.getFilteredSelectedRowModel=c(()=>[e.getState().rowSelection,e.getFilteredRowModel()],(t,r)=>Object.keys(t).length?q(e,r):{rows:[],flatRows:[],rowsById:{}},d(e.options,"debugTable")),e.getGroupedSelectedRowModel=c(()=>[e.getState().rowSelection,e.getSortedRowModel()],(t,r)=>Object.keys(t).length?q(e,r):{rows:[],flatRows:[],rowsById:{}},d(e.options,"debugTable")),e.getIsAllRowsSelected=()=>{const t=e.getFilteredRowModel().flatRows,{rowSelection:r}=e.getState();let n=Boolean(t.length&&Object.keys(r).length);return n&&t.some(e=>e.getCanSelect()&&!r[e.id])&&(n=!1),n},e.getIsAllPageRowsSelected=()=>{const t=e.getPaginationRowModel().flatRows.filter(e=>e.getCanSelect()),{rowSelection:r}=e.getState();let n=!!t.length;return n&&t.some(e=>!r[e.id])&&(n=!1),n},e.getIsSomeRowsSelected=()=>{var t;const r=Object.keys(null!=(t=e.getState().rowSelection)?t:{}).length;return r>0&&r<e.getFilteredRowModel().flatRows.length},e.getIsSomePageRowsSelected=()=>{const t=e.getPaginationRowModel().flatRows;return!e.getIsAllPageRowsSelected()&&t.filter(e=>e.getCanSelect()).some(e=>e.getIsSelected()||e.getIsSomeSelected())},e.getToggleAllRowsSelectedHandler=()=>t=>{e.toggleAllRowsSelected(t.target.checked)},e.getToggleAllPageRowsSelectedHandler=()=>t=>{e.toggleAllPageRowsSelected(t.target.checked)}},createRow:(e,t)=>{e.toggleSelected=(r,n)=>{const o=e.getIsSelected();t.setRowSelection(i=>{var a;if(r=void 0!==r?r:!o,e.getCanSelect()&&o===r)return i;const s={...i};return j(s,e.id,r,null==(a=null==n?void 0:n.selectChildren)||a,t),s})},e.getIsSelected=()=>{const{rowSelection:r}=t.getState();return H(e,r)},e.getIsSomeSelected=()=>{const{rowSelection:r}=t.getState();return"some"===B(e,r)},e.getIsAllSubRowsSelected=()=>{const{rowSelection:r}=t.getState();return"all"===B(e,r)},e.getCanSelect=()=>{var r;return"function"==typeof t.options.enableRowSelection?t.options.enableRowSelection(e):null==(r=t.options.enableRowSelection)||r},e.getCanSelectSubRows=()=>{var r;return"function"==typeof t.options.enableSubRowSelection?t.options.enableSubRowSelection(e):null==(r=t.options.enableSubRowSelection)||r},e.getCanMultiSelect=()=>{var r;return"function"==typeof t.options.enableMultiRowSelection?t.options.enableMultiRowSelection(e):null==(r=t.options.enableMultiRowSelection)||r},e.getToggleSelectedHandler=()=>{const t=e.getCanSelect();return r=>{var n;t&&e.toggleSelected(null==(n=r.target)?void 0:n.checked)}}}},j=(e,t,r,n,o)=>{var i;const a=o.getRow(t,!0);r?(a.getCanMultiSelect()||Object.keys(e).forEach(t=>delete e[t]),a.getCanSelect()&&(e[t]=!0)):delete e[t],n&&null!=(i=a.subRows)&&i.length&&a.getCanSelectSubRows()&&a.subRows.forEach(t=>j(e,t.id,r,n,o))};function q(e,t){const r=e.getState().rowSelection,n=[],o={},i=function(e,t){return e.map(e=>{var t;const a=H(e,r);if(a&&(n.push(e),o[e.id]=e),null!=(t=e.subRows)&&t.length&&(e={...e,subRows:i(e.subRows)}),a)return e}).filter(Boolean)};return{rows:i(t.rows),flatRows:n,rowsById:o}}function H(e,t){var r;return null!=(r=t[e.id])&&r}function B(e,t,r){var n;if(null==(n=e.subRows)||!n.length)return!1;let o=!0,i=!1;return e.subRows.forEach(e=>{if((!i||o)&&(e.getCanSelect()&&(H(e,t)?i=!0:o=!1),e.subRows&&e.subRows.length)){const r=B(e,t);"all"===r?i=!0:"some"===r?(i=!0,o=!1):o=!1}}),o?"all":!!i&&"some"}const N=/([0-9]+)/gm;function W(e,t){return e===t?0:e>t?1:-1}function K(e){return"number"==typeof e?isNaN(e)||e===1/0||e===-1/0?"":String(e):"string"==typeof e?e:""}function U(e,t){const r=e.split(N).filter(Boolean),n=t.split(N).filter(Boolean);for(;r.length&&n.length;){const e=r.shift(),t=n.shift(),o=parseInt(e,10),i=parseInt(t,10),a=[o,i].sort();if(isNaN(a[0])){if(e>t)return 1;if(t>e)return-1}else{if(isNaN(a[1]))return isNaN(o)?-1:1;if(o>i)return 1;if(i>o)return-1}}return r.length-n.length}const Z={alphanumeric:(e,t,r)=>U(K(e.getValue(r)).toLowerCase(),K(t.getValue(r)).toLowerCase()),alphanumericCaseSensitive:(e,t,r)=>U(K(e.getValue(r)),K(t.getValue(r))),text:(e,t,r)=>W(K(e.getValue(r)).toLowerCase(),K(t.getValue(r)).toLowerCase()),textCaseSensitive:(e,t,r)=>W(K(e.getValue(r)),K(t.getValue(r))),datetime:(e,t,r)=>{const n=e.getValue(r),o=t.getValue(r);return n>o?1:n<o?-1:0},basic:(e,t,r)=>W(e.getValue(r),t.getValue(r))},G=[h,{getInitialState:e=>({columnVisibility:{},...e}),getDefaultOptions:e=>({onColumnVisibilityChange:a("columnVisibility",e)}),createColumn:(e,t)=>{e.toggleVisibility=r=>{e.getCanHide()&&t.setColumnVisibility(t=>({...t,[e.id]:null!=r?r:!e.getIsVisible()}))},e.getIsVisible=()=>{var r,n;const o=e.columns;return null==(r=o.length?o.some(e=>e.getIsVisible()):null==(n=t.getState().columnVisibility)?void 0:n[e.id])||r},e.getCanHide=()=>{var r,n;return(null==(r=e.columnDef.enableHiding)||r)&&(null==(n=t.options.enableHiding)||n)},e.getToggleVisibilityHandler=()=>t=>{null==e.toggleVisibility||e.toggleVisibility(t.target.checked)}},createRow:(e,t)=>{e._getAllVisibleCells=c(()=>[e.getAllCells(),t.getState().columnVisibility],e=>e.filter(e=>e.column.getIsVisible()),d(t.options,"debugRows")),e.getVisibleCells=c(()=>[e.getLeftVisibleCells(),e.getCenterVisibleCells(),e.getRightVisibleCells()],(e,t,r)=>[...e,...t,...r],d(t.options,"debugRows"))},createTable:e=>{const t=(t,r)=>c(()=>[r(),r().filter(e=>e.getIsVisible()).map(e=>e.id).join("_")],e=>e.filter(e=>null==e.getIsVisible?void 0:e.getIsVisible()),d(e.options,"debugColumns"));e.getVisibleFlatColumns=t(0,()=>e.getAllFlatColumns()),e.getVisibleLeafColumns=t(0,()=>e.getAllLeafColumns()),e.getLeftVisibleLeafColumns=t(0,()=>e.getLeftLeafColumns()),e.getRightVisibleLeafColumns=t(0,()=>e.getRightLeafColumns()),e.getCenterVisibleLeafColumns=t(0,()=>e.getCenterLeafColumns()),e.setColumnVisibility=t=>null==e.options.onColumnVisibilityChange?void 0:e.options.onColumnVisibilityChange(t),e.resetColumnVisibility=t=>{var r;e.setColumnVisibility(t?{}:null!=(r=e.initialState.columnVisibility)?r:{})},e.toggleAllColumnsVisible=t=>{var r;t=null!=(r=t)?r:!e.getIsAllColumnsVisible(),e.setColumnVisibility(e.getAllLeafColumns().reduce((e,r)=>({...e,[r.id]:t||!(null!=r.getCanHide&&r.getCanHide())}),{}))},e.getIsAllColumnsVisible=()=>!e.getAllLeafColumns().some(e=>!(null!=e.getIsVisible&&e.getIsVisible())),e.getIsSomeColumnsVisible=()=>e.getAllLeafColumns().some(e=>null==e.getIsVisible?void 0:e.getIsVisible()),e.getToggleAllColumnsVisibilityHandler=()=>t=>{var r;e.toggleAllColumnsVisible(null==(r=t.target)?void 0:r.checked)}}},P,T,b,O,{createTable:e=>{e._getGlobalFacetedRowModel=e.options.getFacetedRowModel&&e.options.getFacetedRowModel(e,"__global__"),e.getGlobalFacetedRowModel=()=>e.options.manualFiltering||!e._getGlobalFacetedRowModel?e.getPreFilteredRowModel():e._getGlobalFacetedRowModel(),e._getGlobalFacetedUniqueValues=e.options.getFacetedUniqueValues&&e.options.getFacetedUniqueValues(e,"__global__"),e.getGlobalFacetedUniqueValues=()=>e._getGlobalFacetedUniqueValues?e._getGlobalFacetedUniqueValues():new Map,e._getGlobalFacetedMinMaxValues=e.options.getFacetedMinMaxValues&&e.options.getFacetedMinMaxValues(e,"__global__"),e.getGlobalFacetedMinMaxValues=()=>{if(e._getGlobalFacetedMinMaxValues)return e._getGlobalFacetedMinMaxValues()}}},{getInitialState:e=>({globalFilter:void 0,...e}),getDefaultOptions:e=>({onGlobalFilterChange:a("globalFilter",e),globalFilterFn:"auto",getColumnCanGlobalFilter:t=>{var r;const n=null==(r=e.getCoreRowModel().flatRows[0])||null==(r=r._getAllCellsByColumnId()[t.id])?void 0:r.getValue();return"string"==typeof n||"number"==typeof n}}),createColumn:(e,t)=>{e.getCanGlobalFilter=()=>{var r,n,o,i;return(null==(r=e.columnDef.enableGlobalFilter)||r)&&(null==(n=t.options.enableGlobalFilter)||n)&&(null==(o=t.options.enableFilters)||o)&&(null==(i=null==t.options.getColumnCanGlobalFilter?void 0:t.options.getColumnCanGlobalFilter(e))||i)&&!!e.accessorFn}},createTable:e=>{e.getGlobalAutoFilterFn=()=>z.includesString,e.getGlobalFilterFn=()=>{var t,r;const{globalFilterFn:n}=e.options;return s(n)?n:"auto"===n?e.getGlobalAutoFilterFn():null!=(t=null==(r=e.options.filterFns)?void 0:r[n])?t:z[n]},e.setGlobalFilter=t=>{null==e.options.onGlobalFilterChange||e.options.onGlobalFilterChange(t)},e.resetGlobalFilter=t=>{e.setGlobalFilter(t?void 0:e.initialState.globalFilter)}}},{getInitialState:e=>({sorting:[],...e}),getDefaultColumnDef:()=>({sortingFn:"auto",sortUndefined:1}),getDefaultOptions:e=>({onSortingChange:a("sorting",e),isMultiSortEvent:e=>e.shiftKey}),createColumn:(e,t)=>{e.getAutoSortingFn=()=>{const r=t.getFilteredRowModel().flatRows.slice(10);let n=!1;for(const t of r){const r=null==t?void 0:t.getValue(e.id);if("[object Date]"===Object.prototype.toString.call(r))return Z.datetime;if("string"==typeof r&&(n=!0,r.split(N).length>1))return Z.alphanumeric}return n?Z.text:Z.basic},e.getAutoSortDir=()=>{const r=t.getFilteredRowModel().flatRows[0];return"string"==typeof(null==r?void 0:r.getValue(e.id))?"asc":"desc"},e.getSortingFn=()=>{var r,n;if(!e)throw new Error;return s(e.columnDef.sortingFn)?e.columnDef.sortingFn:"auto"===e.columnDef.sortingFn?e.getAutoSortingFn():null!=(r=null==(n=t.options.sortingFns)?void 0:n[e.columnDef.sortingFn])?r:Z[e.columnDef.sortingFn]},e.toggleSorting=(r,n)=>{const o=e.getNextSortingOrder(),i=null!=r;t.setSorting(a=>{const s=null==a?void 0:a.find(t=>t.id===e.id),l=null==a?void 0:a.findIndex(t=>t.id===e.id);let c,d=[],u=i?r:"desc"===o;var v;(c=null!=a&&a.length&&e.getCanMultiSort()&&n?s?"toggle":"add":null!=a&&a.length&&l!==a.length-1?"replace":s?"toggle":"replace","toggle"===c&&(i||o||(c="remove")),"add"===c)?(d=[...a,{id:e.id,desc:u}],d.splice(0,d.length-(null!=(v=t.options.maxMultiSortColCount)?v:Number.MAX_SAFE_INTEGER))):d="toggle"===c?a.map(t=>t.id===e.id?{...t,desc:u}:t):"remove"===c?a.filter(t=>t.id!==e.id):[{id:e.id,desc:u}];return d})},e.getFirstSortDir=()=>{var r,n;return(null!=(r=null!=(n=e.columnDef.sortDescFirst)?n:t.options.sortDescFirst)?r:"desc"===e.getAutoSortDir())?"desc":"asc"},e.getNextSortingOrder=r=>{var n,o;const i=e.getFirstSortDir(),a=e.getIsSorted();return a?!!(a===i||null!=(n=t.options.enableSortingRemoval)&&!n||r&&null!=(o=t.options.enableMultiRemove)&&!o)&&("desc"===a?"asc":"desc"):i},e.getCanSort=()=>{var r,n;return(null==(r=e.columnDef.enableSorting)||r)&&(null==(n=t.options.enableSorting)||n)&&!!e.accessorFn},e.getCanMultiSort=()=>{var r,n;return null!=(r=null!=(n=e.columnDef.enableMultiSort)?n:t.options.enableMultiSort)?r:!!e.accessorFn},e.getIsSorted=()=>{var r;const n=null==(r=t.getState().sorting)?void 0:r.find(t=>t.id===e.id);return!!n&&(n.desc?"desc":"asc")},e.getSortIndex=()=>{var r,n;return null!=(r=null==(n=t.getState().sorting)?void 0:n.findIndex(t=>t.id===e.id))?r:-1},e.clearSorting=()=>{t.setSorting(t=>null!=t&&t.length?t.filter(t=>t.id!==e.id):[])},e.getToggleSortingHandler=()=>{const r=e.getCanSort();return n=>{r&&(null==n.persist||n.persist(),null==e.toggleSorting||e.toggleSorting(void 0,!!e.getCanMultiSort()&&(null==t.options.isMultiSortEvent?void 0:t.options.isMultiSortEvent(n))))}}},createTable:e=>{e.setSorting=t=>null==e.options.onSortingChange?void 0:e.options.onSortingChange(t),e.resetSorting=t=>{var r,n;e.setSorting(t?[]:null!=(r=null==(n=e.initialState)?void 0:n.sorting)?r:[])},e.getPreSortedRowModel=()=>e.getGroupedRowModel(),e.getSortedRowModel=()=>(!e._getSortedRowModel&&e.options.getSortedRowModel&&(e._getSortedRowModel=e.options.getSortedRowModel(e)),e.options.manualSorting||!e._getSortedRowModel?e.getPreSortedRowModel():e._getSortedRowModel())}},I,{getInitialState:e=>({expanded:{},...e}),getDefaultOptions:e=>({onExpandedChange:a("expanded",e),paginateExpandedRows:!0}),createTable:e=>{let t=!1,r=!1;e._autoResetExpanded=()=>{var n,o;if(t){if(null!=(n=null!=(o=e.options.autoResetAll)?o:e.options.autoResetExpanded)?n:!e.options.manualExpanding){if(r)return;r=!0,e._queue(()=>{e.resetExpanded(),r=!1})}}else e._queue(()=>{t=!0})},e.setExpanded=t=>null==e.options.onExpandedChange?void 0:e.options.onExpandedChange(t),e.toggleAllRowsExpanded=t=>{(null!=t?t:!e.getIsAllRowsExpanded())?e.setExpanded(!0):e.setExpanded({})},e.resetExpanded=t=>{var r,n;e.setExpanded(t?{}:null!=(r=null==(n=e.initialState)?void 0:n.expanded)?r:{})},e.getCanSomeRowsExpand=()=>e.getPrePaginationRowModel().flatRows.some(e=>e.getCanExpand()),e.getToggleAllRowsExpandedHandler=()=>t=>{null==t.persist||t.persist(),e.toggleAllRowsExpanded()},e.getIsSomeRowsExpanded=()=>{const t=e.getState().expanded;return!0===t||Object.values(t).some(Boolean)},e.getIsAllRowsExpanded=()=>{const t=e.getState().expanded;return"boolean"==typeof t?!0===t:!!Object.keys(t).length&&!e.getRowModel().flatRows.some(e=>!e.getIsExpanded())},e.getExpandedDepth=()=>{let t=0;return(!0===e.getState().expanded?Object.keys(e.getRowModel().rowsById):Object.keys(e.getState().expanded)).forEach(e=>{const r=e.split(".");t=Math.max(t,r.length)}),t},e.getPreExpandedRowModel=()=>e.getSortedRowModel(),e.getExpandedRowModel=()=>(!e._getExpandedRowModel&&e.options.getExpandedRowModel&&(e._getExpandedRowModel=e.options.getExpandedRowModel(e)),e.options.manualExpanding||!e._getExpandedRowModel?e.getPreExpandedRowModel():e._getExpandedRowModel())},createRow:(e,t)=>{e.toggleExpanded=r=>{t.setExpanded(n=>{var o;const i=!0===n||!(null==n||!n[e.id]);let a={};if(!0===n?Object.keys(t.getRowModel().rowsById).forEach(e=>{a[e]=!0}):a=n,r=null!=(o=r)?o:!i,!i&&r)return{...a,[e.id]:!0};if(i&&!r){const{[e.id]:t,...r}=a;return r}return n})},e.getIsExpanded=()=>{var r;const n=t.getState().expanded;return!!(null!=(r=null==t.options.getIsRowExpanded?void 0:t.options.getIsRowExpanded(e))?r:!0===n||(null==n?void 0:n[e.id]))},e.getCanExpand=()=>{var r,n,o;return null!=(r=null==t.options.getRowCanExpand?void 0:t.options.getRowCanExpand(e))?r:(null==(n=t.options.enableExpanding)||n)&&!(null==(o=e.subRows)||!o.length)},e.getIsAllParentsExpanded=()=>{let r=!0,n=e;for(;r&&n.parentId;)n=t.getRow(n.parentId,!0),r=n.getIsExpanded();return r},e.getToggleExpandedHandler=()=>{const t=e.getCanExpand();return()=>{t&&e.toggleExpanded()}}}},{getInitialState:e=>({...e,pagination:{pageIndex:0,pageSize:10,...null==e?void 0:e.pagination}}),getDefaultOptions:e=>({onPaginationChange:a("pagination",e)}),createTable:e=>{let t=!1,r=!1;e._autoResetPageIndex=()=>{var n,o;if(t){if(null!=(n=null!=(o=e.options.autoResetAll)?o:e.options.autoResetPageIndex)?n:!e.options.manualPagination){if(r)return;r=!0,e._queue(()=>{e.resetPageIndex(),r=!1})}}else e._queue(()=>{t=!0})},e.setPagination=t=>null==e.options.onPaginationChange?void 0:e.options.onPaginationChange(e=>i(t,e)),e.resetPagination=t=>{var r;e.setPagination(t?{pageIndex:0,pageSize:10}:null!=(r=e.initialState.pagination)?r:{pageIndex:0,pageSize:10})},e.setPageIndex=t=>{e.setPagination(r=>{let n=i(t,r.pageIndex);const o=void 0===e.options.pageCount||-1===e.options.pageCount?Number.MAX_SAFE_INTEGER:e.options.pageCount-1;return n=Math.max(0,Math.min(n,o)),{...r,pageIndex:n}})},e.resetPageIndex=t=>{var r,n;e.setPageIndex(t?0:null!=(r=null==(n=e.initialState)||null==(n=n.pagination)?void 0:n.pageIndex)?r:0)},e.resetPageSize=t=>{var r,n;e.setPageSize(t?10:null!=(r=null==(n=e.initialState)||null==(n=n.pagination)?void 0:n.pageSize)?r:10)},e.setPageSize=t=>{e.setPagination(e=>{const r=Math.max(1,i(t,e.pageSize)),n=e.pageSize*e.pageIndex,o=Math.floor(n/r);return{...e,pageIndex:o,pageSize:r}})},e.setPageCount=t=>e.setPagination(r=>{var n;let o=i(t,null!=(n=e.options.pageCount)?n:-1);return"number"==typeof o&&(o=Math.max(-1,o)),{...r,pageCount:o}}),e.getPageOptions=c(()=>[e.getPageCount()],e=>{let t=[];return e&&e>0&&(t=[...new Array(e)].fill(null).map((e,t)=>t)),t},d(e.options,"debugTable")),e.getCanPreviousPage=()=>e.getState().pagination.pageIndex>0,e.getCanNextPage=()=>{const{pageIndex:t}=e.getState().pagination,r=e.getPageCount();return-1===r||0!==r&&t<r-1},e.previousPage=()=>e.setPageIndex(e=>e-1),e.nextPage=()=>e.setPageIndex(e=>e+1),e.firstPage=()=>e.setPageIndex(0),e.lastPage=()=>e.setPageIndex(e.getPageCount()-1),e.getPrePaginationRowModel=()=>e.getExpandedRowModel(),e.getPaginationRowModel=()=>(!e._getPaginationRowModel&&e.options.getPaginationRowModel&&(e._getPaginationRowModel=e.options.getPaginationRowModel(e)),e.options.manualPagination||!e._getPaginationRowModel?e.getPrePaginationRowModel():e._getPaginationRowModel()),e.getPageCount=()=>{var t;return null!=(t=e.options.pageCount)?t:Math.ceil(e.getRowCount()/e.getState().pagination.pageSize)},e.getRowCount=()=>{var t;return null!=(t=e.options.rowCount)?t:e.getPrePaginationRowModel().rows.length}}},{getInitialState:e=>({rowPinning:{top:[],bottom:[]},...e}),getDefaultOptions:e=>({onRowPinningChange:a("rowPinning",e)}),createRow:(e,t)=>{e.pin=(r,n,o)=>{const i=n?e.getLeafRows().map(e=>{let{id:t}=e;return t}):[],a=o?e.getParentRows().map(e=>{let{id:t}=e;return t}):[],s=new Set([...a,e.id,...i]);t.setRowPinning(e=>{var t,n,o,i,a,l;return"bottom"===r?{top:(null!=(o=null==e?void 0:e.top)?o:[]).filter(e=>!(null!=s&&s.has(e))),bottom:[...(null!=(i=null==e?void 0:e.bottom)?i:[]).filter(e=>!(null!=s&&s.has(e))),...Array.from(s)]}:"top"===r?{top:[...(null!=(a=null==e?void 0:e.top)?a:[]).filter(e=>!(null!=s&&s.has(e))),...Array.from(s)],bottom:(null!=(l=null==e?void 0:e.bottom)?l:[]).filter(e=>!(null!=s&&s.has(e)))}:{top:(null!=(t=null==e?void 0:e.top)?t:[]).filter(e=>!(null!=s&&s.has(e))),bottom:(null!=(n=null==e?void 0:e.bottom)?n:[]).filter(e=>!(null!=s&&s.has(e)))}})},e.getCanPin=()=>{var r;const{enableRowPinning:n,enablePinning:o}=t.options;return"function"==typeof n?n(e):null==(r=null!=n?n:o)||r},e.getIsPinned=()=>{const r=[e.id],{top:n,bottom:o}=t.getState().rowPinning,i=r.some(e=>null==n?void 0:n.includes(e)),a=r.some(e=>null==o?void 0:o.includes(e));return i?"top":!!a&&"bottom"},e.getPinnedIndex=()=>{var r,n;const o=e.getIsPinned();if(!o)return-1;const i=null==(r="top"===o?t.getTopRows():t.getBottomRows())?void 0:r.map(e=>{let{id:t}=e;return t});return null!=(n=null==i?void 0:i.indexOf(e.id))?n:-1}},createTable:e=>{e.setRowPinning=t=>null==e.options.onRowPinningChange?void 0:e.options.onRowPinningChange(t),e.resetRowPinning=t=>{var r,n;return e.setRowPinning(t?{top:[],bottom:[]}:null!=(r=null==(n=e.initialState)?void 0:n.rowPinning)?r:{top:[],bottom:[]})},e.getIsSomeRowsPinned=t=>{var r;const n=e.getState().rowPinning;var o,i;return t?Boolean(null==(r=n[t])?void 0:r.length):Boolean((null==(o=n.top)?void 0:o.length)||(null==(i=n.bottom)?void 0:i.length))},e._getPinnedRows=(t,r,n)=>{var o;return(null==(o=e.options.keepPinnedRows)||o?(null!=r?r:[]).map(t=>{const r=e.getRow(t,!0);return r.getIsAllParentsExpanded()?r:null}):(null!=r?r:[]).map(e=>t.find(t=>t.id===e))).filter(Boolean).map(e=>({...e,position:n}))},e.getTopRows=c(()=>[e.getRowModel().rows,e.getState().rowPinning.top],(t,r)=>e._getPinnedRows(t,r,"top"),d(e.options,"debugRows")),e.getBottomRows=c(()=>[e.getRowModel().rows,e.getState().rowPinning.bottom],(t,r)=>e._getPinnedRows(t,r,"bottom"),d(e.options,"debugRows")),e.getCenterRows=c(()=>[e.getRowModel().rows,e.getState().rowPinning.top,e.getState().rowPinning.bottom],(e,t,r)=>{const n=new Set([...null!=t?t:[],...null!=r?r:[]]);return e.filter(e=>!n.has(e.id))},d(e.options,"debugRows"))}},V,R];function J(e){var t,r;const n=[...G,...null!=(t=e._features)?t:[]];let o={_features:n};const a=o._features.reduce((e,t)=>Object.assign(e,null==t.getDefaultOptions?void 0:t.getDefaultOptions(o)),{});let s={...null!=(r=e.initialState)?r:{}};o._features.forEach(e=>{var t;s=null!=(t=null==e.getInitialState?void 0:e.getInitialState(s))?t:s});const l=[];let u=!1;const v={_features:n,options:{...a,...e},initialState:s,_queue:e=>{l.push(e),u||(u=!0,Promise.resolve().then(()=>{for(;l.length;)l.shift()();u=!1}).catch(e=>setTimeout(()=>{throw e})))},reset:()=>{o.setState(o.initialState)},setOptions:e=>{const t=i(e,o.options);o.options=(e=>o.options.mergeOptions?o.options.mergeOptions(a,e):{...a,...e})(t)},getState:()=>o.options.state,setState:e=>{null==o.options.onStateChange||o.options.onStateChange(e)},_getRowId:(e,t,r)=>{var n;return null!=(n=null==o.options.getRowId?void 0:o.options.getRowId(e,t,r))?n:`${r?[r.id,t].join("."):t}`},getCoreRowModel:()=>(o._getCoreRowModel||(o._getCoreRowModel=o.options.getCoreRowModel(o)),o._getCoreRowModel()),getRowModel:()=>o.getPaginationRowModel(),getRow:(e,t)=>{let r=(t?o.getPrePaginationRowModel():o.getRowModel()).rowsById[e];if(!r&&(r=o.getCoreRowModel().rowsById[e],!r))throw new Error;return r},_getDefaultColumnDef:c(()=>[o.options.defaultColumn],e=>{var t;return e=null!=(t=e)?t:{},{header:e=>{const t=e.header.column.columnDef;return t.accessorKey?t.accessorKey:t.accessorFn?t.id:null},cell:e=>{var t,r;return null!=(t=null==(r=e.renderValue())||null==r.toString?void 0:r.toString())?t:null},...o._features.reduce((e,t)=>Object.assign(e,null==t.getDefaultColumnDef?void 0:t.getDefaultColumnDef()),{}),...e}},d(e,"debugColumns")),_getColumnDefs:()=>o.options.columns,getAllColumns:c(()=>[o._getColumnDefs()],e=>{const t=function(e,r,n){return void 0===n&&(n=0),e.map(e=>{const i=function(e,t,r,n){var o,i;const a={...e._getDefaultColumnDef(),...t},s=a.accessorKey;let l,u=null!=(o=null!=(i=a.id)?i:s?"function"==typeof String.prototype.replaceAll?s.replaceAll(".","_"):s.replace(/\./g,"_"):void 0)?o:"string"==typeof a.header?a.header:void 0;if(a.accessorFn?l=a.accessorFn:s&&(l=s.includes(".")?e=>{let t=e;for(const n of s.split(".")){var r;t=null==(r=t)?void 0:r[n]}return t}:e=>e[a.accessorKey]),!u)throw new Error;let v={id:`${String(u)}`,accessorFn:l,parent:n,depth:r,columnDef:a,columns:[],getFlatColumns:c(()=>[!0],()=>{var e;return[v,...null==(e=v.columns)?void 0:e.flatMap(e=>e.getFlatColumns())]},d(e.options,"debugColumns")),getLeafColumns:c(()=>[e._getOrderColumnsFn()],e=>{var t;if(null!=(t=v.columns)&&t.length){let t=v.columns.flatMap(e=>e.getLeafColumns());return e(t)}return[v]},d(e.options,"debugColumns"))};for(const c of e._features)null==c.createColumn||c.createColumn(v,e);return v}(o,e,n,r),a=e;return i.columns=a.columns?t(a.columns,i,n+1):[],i})};return t(e)},d(e,"debugColumns")),getAllFlatColumns:c(()=>[o.getAllColumns()],e=>e.flatMap(e=>e.getFlatColumns()),d(e,"debugColumns")),_getAllFlatColumnsById:c(()=>[o.getAllFlatColumns()],e=>e.reduce((e,t)=>(e[t.id]=t,e),{}),d(e,"debugColumns")),getAllLeafColumns:c(()=>[o.getAllColumns(),o._getOrderColumnsFn()],(e,t)=>t(e.flatMap(e=>e.getLeafColumns())),d(e,"debugColumns")),getColumn:e=>o._getAllFlatColumnsById()[e]};Object.assign(o,v);for(let i=0;i<o._features.length;i++){const e=o._features[i];null==e||null==e.createTable||e.createTable(o)}return o}function X(e,t){return e?"function"==typeof e?e(t):e:null}var Y=r(45080),Q=r(67286),ee=r(67463),te=r(61834),re=r(94023),ne=r(17400),oe=r(40362);const ie=Y.AH`
  :host {
    --ve-empty-gap: var(--space-s);
    --ve-empty-body-gap: var(--space-xxs);
    --ve-empty-actions-gap: var(--space-xs);

    --ve-empty-image-color: var(--color-text-disable);
    --ve-empty-illustration-shadow-color: var(--color-bg-muted);
    --ve-empty-illustration-surface-color: var(--color-bg-surface);
    --ve-empty-illustration-border-color: var(--color-border-default);
    --ve-empty-illustration-muted-color: var(--color-bg-muted);
    --ve-empty-illustration-accent-color: var(--color-text-disable);

    --ve-empty-title-font-size: var(--text-ui-strong);
    --ve-empty-title-font-weight: var(--font-weight-medium);
    --ve-empty-title-line-height: var(--line-height-body);
    --ve-empty-title-color: var(--color-text-primary);

    --ve-empty-description-font-size: var(--text-body);
    --ve-empty-description-font-weight: var(--font-weight-normal);
    --ve-empty-description-line-height: var(--line-height-body);
    --ve-empty-description-color: var(--color-text-tertiary);

    --ve-empty-font-family: var(--font-sans);
  }
`,ae=[re.H6,ie,Y.AH`
    :host {
      display: block;
      box-sizing: border-box;
      font-family: var(--ve-empty-font-family);
    }

    :host([hidden]) {
      display: none;
    }

    [hidden] {
      display: none !important;
    }

    .ve-empty {
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--ve-empty-gap);
      text-align: center;
    }

    .ve-empty-image {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      flex: none;
      max-inline-size: 100%;
      color: var(--ve-empty-image-color);
    }

    .ve-empty-default-illustration {
      display: block;
    }

    .ve-empty-image ::slotted(*) {
      display: block;
      flex: none;
      max-inline-size: 100%;
      max-block-size: 100%;
    }

    .ve-empty-body {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--ve-empty-body-gap);
      inline-size: 100%;
    }

    .ve-empty-title {
      margin: 0;
      inline-size: 100%;
      color: var(--ve-empty-title-color);
      font-size: var(--ve-empty-title-font-size);
      font-weight: var(--ve-empty-title-font-weight);
      line-height: var(--ve-empty-title-line-height);
      word-break: break-word;
    }

    .ve-empty-description {
      margin: 0;
      inline-size: 100%;
      color: var(--ve-empty-description-color);
      font-size: var(--ve-empty-description-font-size);
      font-weight: var(--ve-empty-description-font-weight);
      line-height: var(--ve-empty-description-line-height);
      word-break: break-word;
    }

    .ve-empty-actions {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: var(--ve-empty-actions-gap);
      flex-wrap: wrap;
    }

    .ve-empty-body[hidden],
    .ve-empty-title[hidden],
    .ve-empty-description[hidden],
    .ve-empty-actions[hidden] {
      display: none;
    }
  `];function se(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function le(e){if(Object(e)!==e)throw TypeError("right-hand side of 'in' should be an object, got "+(null!==e?typeof e:"null"));return e}function ce(e,t,r){"symbol"==typeof t&&(t=(t=t.description)?"["+t+"]":"");try{Object.defineProperty(e,"name",{configurable:!0,value:r?r+" "+t:t})}catch(n){}return e}let de,ue,ve,he,pe,ge,be,me,fe,_e,we,ye,xe,ke,Se,Ce,ze,Ee,Oe,Me,Ae,Ie,Pe,Te,$e,Re,De,Fe,Le,Ve;const je="ve-empty";de=(0,te.P)('slot[name="description"]'),ue=(0,te.P)('slot[name="image"]'),ve=(0,te.P)('slot[name="title"]'),he=(0,te.P)("slot:not([name])"),pe=(0,te.P)('slot[name="actions"]'),ge=(0,te.wk)(),be=(0,te.wk)(),me=(0,te.wk)(),fe=(0,te.wk)(),_e=(0,te.wk)();class qe extends re.IB{static{({e:[we,ye,xe,ke,Se,Ce,ze,Ee,Oe,Me,Ae,Ie,Pe,Te,$e,Re,De,Fe,Le,Ve]}=function(e,t,r,n,o,i){var a,s,l,c,d,u,v,h=Symbol.metadata||Symbol.for("Symbol.metadata"),p=Object.defineProperty,g=Object.create,b=[g(null),g(null)],m=t.length;function f(t,r,n){return function(o,i){r&&(i=o,o=e);for(var a=0;a<t.length;a++)i=t[a].apply(o,n?[i]:[]);return n?i:o}}function _(e,t,r,n){if("function"!=typeof e&&(n||void 0!==e))throw new TypeError(t+" must "+(r||"be")+" a function"+(n?"":" or undefined"));return e}function w(e,t,r,n,o,i,l,c,d,u,v){function h(e){if(!v(e))throw new TypeError("Attempted to access private element on non-instance")}var g=[].concat(t[0]),m=t[3],w=!l,y=1===o,x=3===o,k=4===o,S=2===o;function C(t,r,n){return function(o,i){return r&&(i=o,o=e),n&&n(o),desc[t].call(o,i)}}var z={},E=[],O=x?"get":k||y?"set":"value";if(!w&&(d?(u||y?z={get:ce(function(){return m(this)},n,"get"),set:function(e){t[4](this,e)}}:z[O]=m,u||ce(z[O],n,S?"":O)):u||(z=Object.getOwnPropertyDescriptor(e,n)),!u&&!d)){if((s=b[+c][n])&&7!==(s^o))throw new Error("Decorating two elements with the same name ("+z[O].name+") is not supported yet");b[+c][n]=o<3?1:o}for(var M=e,A=g.length-1;A>=0;A-=r?2:1){var I=_(g[A],"A decorator","be",!0),P=r?g[A-1]:void 0,T={},$={kind:["field","accessor","method","getter","setter","class"][o],name:n,metadata:a,addInitializer:function(e,t){if(e.v)throw new TypeError("attempted to call addInitializer after decoration was finished");_(t,"An initializer","be",!0),i.push(t)}.bind(null,T)};if(w)s=I.call(P,M,$),T.v=1,_(s,"class decorators","return")&&(M=s);else if($.static=c,$.private=d,s=$.access={has:d?v.bind():function(e){return n in e}},k||(s.get=d?S?function(e){return h(e),z.value}:C("get",0,h):function(e){return e[n]}),S||x||(s.set=d?C("set",0,h):function(e,t){e[n]=t}),M=I.call(P,y?{get:z.get,set:z.set}:z[O],$),T.v=1,y){if("object"==typeof M&&M)(s=_(M.get,"accessor.get"))&&(z.get=s),(s=_(M.set,"accessor.set"))&&(z.set=s),(s=_(M.init,"accessor.init"))&&E.unshift(s);else if(void 0!==M)throw new TypeError("accessor decorators must return an object with get, set, or init properties or undefined")}else _(M,(u?"field":"method")+" decorators","return")&&(u?E.unshift(M):z[O]=M)}return o<2&&l.push(f(E,c,1),f(i,c,0)),u||w||(d?y?l.splice(-1,0,C("get",c),C("set",c)):l.push(S?z[O]:_.call.bind(z[O])):p(e,n,z)),M}function y(e){return p(e,h,{configurable:!0,enumerable:!0,value:a})}return void 0!==i&&(a=i[h]),a=g(null==a?null:a),d=[],u=function(e){e&&d.push(f(e))},(v=function(t,n){for(var i=0;i<r.length;i++){var a=r[i],s=a[1],u=7&s;if((8&s)==t&&!u==n){var v=a[2],h=!!a[3],p=16&s;w(t?e:e.prototype,a,p,h?"#"+v:se(v),u,u<2?[]:t?c=c||[]:l=l||[],d,!!t,h,n,t&&h?function(t){return le(t)===e}:o)}}})(8,0),v(0,0),v(8,1),v(0,1),u(l),u(c),s=d,m||y(e),{e:s,get c(){var r=[];return m&&[y(e=w(e,[t],n,e.name,5,r)),f(r,1)]}}}(this,[],[[de,1,"descriptionSlot"],[ue,1,"imageSlot"],[ve,1,"titleSlot"],[he,1,"defaultSlot"],[pe,1,"actionsSlot"],[ge,1,"hasDescriptionSlot"],[be,1,"hasImageSlot"],[me,1,"hasTitleSlot"],[fe,1,"hasDefaultSlot"],[_e,1,"hasActionsSlot"]]))}static styles=ae;#et=(()=>{const e=we(this,null);return ye(this),e})();get descriptionSlot(){return this.#et}set descriptionSlot(e){this.#et=e}#tt=(()=>{const e=xe(this,null);return ke(this),e})();get imageSlot(){return this.#tt}set imageSlot(e){this.#tt=e}#rt=(()=>{const e=Se(this,null);return Ce(this),e})();get titleSlot(){return this.#rt}set titleSlot(e){this.#rt=e}#nt=(()=>{const e=ze(this,null);return Ee(this),e})();get defaultSlot(){return this.#nt}set defaultSlot(e){this.#nt=e}#ot=(()=>{const e=Oe(this,null);return Me(this),e})();get actionsSlot(){return this.#ot}set actionsSlot(e){this.#ot=e}#it=(()=>{const e=Ae(this,!1);return Ie(this),e})();get hasDescriptionSlot(){return this.#it}set hasDescriptionSlot(e){this.#it=e}#at=(()=>{const e=Pe(this,!1);return Te(this),e})();get hasImageSlot(){return this.#at}set hasImageSlot(e){this.#at=e}#st=(()=>{const e=$e(this,!1);return Re(this),e})();get hasTitleSlot(){return this.#st}set hasTitleSlot(e){this.#st=e}#lt=(()=>{const e=De(this,!1);return Fe(this),e})();get hasDefaultSlot(){return this.#lt}set hasDefaultSlot(e){this.#lt=e}#ct=(()=>{const e=Le(this,!1);return Ve(this),e})();get hasActionsSlot(){return this.#ct}set hasActionsSlot(e){this.#ct=e}get showDescription(){return this.hasDescriptionSlot||this.hasDefaultSlot}get showBody(){return!0}firstUpdated(e){super.firstUpdated(e),this.syncSlotState()}updated(e){super.updated(e),this.syncSlotState()}syncSlotState(){this.hasDescriptionSlot=(0,oe.qi)(this.descriptionSlot)||(0,oe.mh)(this,"description"),this.hasImageSlot=(0,oe.qi)(this.imageSlot)||(0,oe.mh)(this,"image"),this.hasTitleSlot=(0,oe.qi)(this.titleSlot)||(0,oe.mh)(this,"title"),this.hasDefaultSlot=(0,oe.qi)(this.defaultSlot),this.hasActionsSlot=(0,oe.qi)(this.actionsSlot)||(0,oe.mh)(this,"actions")}handleSlotChange(){this.syncSlotState()}renderDefaultIllustration(){return Y.JW`
      <svg
        class="ve-empty-default-illustration"
        width="184"
        height="152"
        viewBox="0 0 184 152"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="No Data"
      >
        <title>No Data</title>
        <g fill="none" fill-rule="evenodd">
          <g transform="translate(24 31.7)">
            <ellipse fill-opacity=".8" fill="var(--ve-empty-illustration-shadow-color)" cx="67.8" cy="106.9" rx="67.8" ry="12.7"></ellipse>
            <path fill="var(--ve-empty-illustration-accent-color)" d="M122 69.7 98.1 40.2a6 6 0 0 0-4.6-2.2H42.1a6 6 0 0 0-4.6 2.2l-24 29.5V85H122z"></path>
            <path fill="var(--ve-empty-illustration-surface-color)" d="M33.8 0h68a4 4 0 0 1 4 4v93.3a4 4 0 0 1-4 4h-68a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></path>
            <path fill="var(--ve-empty-illustration-muted-color)" d="M42.7 10h50.2a2 2 0 0 1 2 2v25a2 2 0 0 1-2 2H42.7a2 2 0 0 1-2-2V12a2 2 0 0 1 2-2m.2 39.8h49.8a2.3 2.3 0 1 1 0 4.5H42.9a2.3 2.3 0 0 1 0-4.5m0 11.7h49.8a2.3 2.3 0 1 1 0 4.6H42.9a2.3 2.3 0 0 1 0-4.6m79 43.5a7 7 0 0 1-6.8 5.4H20.5a7 7 0 0 1-6.7-5.4l-.2-1.8V69.7h26.3c2.9 0 5.2 2.4 5.2 5.4s2.4 5.4 5.3 5.4h34.8c2.9 0 5.3-2.4 5.3-5.4s2.3-5.4 5.2-5.4H122v33.5q0 1-.2 1.8"></path>
          </g>
          <path fill="var(--ve-empty-illustration-muted-color)" d="m149.1 33.3-6.8 2.6a1 1 0 0 1-1.3-1.2l2-6.2q-4.1-4.5-4.2-10.4c0-10 10.1-18.1 22.6-18.1S184 8.1 184 18.1s-10.1 18-22.6 18q-6.8 0-12.3-2.8"></path>
          <g fill="var(--ve-empty-illustration-surface-color)" transform="translate(149.7 15.4)">
            <circle cx="20.7" cy="3.2" r="2.8"></circle>
            <path d="M5.7 5.6H0L2.9.7zM9.3.7h5v5h-5z"></path>
          </g>
        </g>
      </svg>
    `}renderDescriptionFallback(){return Y.qy` <slot @slotchange=${this.handleSlotChange}></slot> `}render(){const e=(0,Q.H)({"ve-empty":!0,"ve-empty-with-title":!0,"ve-empty-with-description":this.showDescription,"ve-empty-with-actions":this.hasActionsSlot});return Y.qy`
      <div class=${e} part="base">
        <div class="ve-empty-image" part="image">
          <slot name="image" @slotchange=${this.handleSlotChange}></slot>
          ${this.hasImageSlot?Y.s6:this.renderDefaultIllustration()}
        </div>

        <div class="ve-empty-body" part="body" ?hidden=${!this.showBody}>
          <div class="ve-empty-title" part="title">
            <slot name="title" @slotchange=${this.handleSlotChange}></slot>
            ${this.hasTitleSlot?Y.s6:"No Data"}
          </div>

          <div
            class="ve-empty-description"
            part="description"
            ?hidden=${!this.showDescription}
          >
            <slot
              name="description"
              @slotchange=${this.handleSlotChange}
            ></slot>
            ${this.hasDescriptionSlot?Y.s6:this.renderDescriptionFallback()}
          </div>
        </div>

        <div
          class="ve-empty-actions"
          part="actions"
          ?hidden=${!this.hasActionsSlot}
        >
          <slot name="actions" @slotchange=${this.handleSlotChange}></slot>
        </div>
      </div>
    `}}var He=r(18110),Be=r(78597),Ne=r(40448);const We=1e-6;function Ke(e){return"number"==typeof e&&Number.isFinite(e)&&e>0?e:void 0}const Ue=Y.AH`
  :host {
    --ve-table-font-family: var(--font-sans);
    --ve-table-font-size: var(--text-body);
    --ve-table-font-weight-header: var(--font-weight-medium);
    --ve-table-line-height: var(--line-height-body);

    --ve-table-row-size: 48px;
    --ve-table-padding-inline: var(--space-xs);
    --ve-table-padding-block: 0px;

    --ve-table-radius: var(--radius-xl);
    --ve-table-border-width: var(--stroke-weight-base);
    --ve-table-border-color: var(--color-border-default);
    --ve-table-header-border-color: var(--color-border-default);
    --ve-table-row-border-color: var(--color-border-default);
    --ve-table-shadow: none;

    --ve-table-background: var(--color-bg-base);
    --ve-table-header-background: var(--color-bg-secondary);
    --ve-table-header-text: var(--color-text-primary);
    --ve-table-cell-text: var(--color-text-primary);
    --ve-table-cell-text-secondary: var(--color-text-secondary);
    --ve-table-empty-text: var(--color-text-tertiary);
    --ve-table-hover-background: color-mix(
      in srgb,
      var(--ve-table-background) var(--state-hover-subtle-ratio),
      var(--state-hover-subtle-mix)
    );
    --ve-table-focus-ring-width: var(--stroke-2);
    --ve-table-focus-ring-color: color-mix(
      in srgb,
      var(--color-text-accent) 24%,
      transparent
    );
    --ve-table-disabled-opacity: var(--state-disabled-ratio);
    --ve-table-transition-duration: var(--motion-fast);

    --ve-table-checkbox-size: 16px;
    --ve-table-checkbox-border-width: var(--stroke-weight-strong);
    --ve-table-checkbox-radius: var(--radius-xs);
    --ve-table-checkbox-border: var(--color-border-strong);
    --ve-table-checkbox-border-hover: var(--color-border-interactive);
    --ve-table-checkbox-selected-border: transparent;
    --ve-table-checkbox-background: transparent;
    --ve-table-checkbox-selected-background: var(--color-bg-primary);
    --ve-table-checkbox-selected-color: var(--color-text-foreground);
    --ve-table-checkbox-selected-hover-background: color-mix(
      in srgb,
      var(--ve-table-checkbox-selected-background)
        var(--state-hover-solid-ratio),
      var(--state-hover-solid-mix)
    );
    --ve-table-checkbox-icon-size: 12px;
    --ve-table-checkbox-icon-stroke-width: var(--stroke-weight-bold);
    --ve-table-sort-icon-size: 14px;
    --ve-table-control-column-size: 40px;
    --ve-table-skeleton-size: 10px;
    --ve-table-skeleton-radius: var(--radius-md);
    --ve-table-skeleton-background: linear-gradient(
      90deg,
      var(--color-bg-surface) 0%,
      color-mix(in srgb, var(--color-bg-surface) 55%, var(--color-bg-base)) 45%,
      var(--color-bg-surface) 100%
    );
    --ve-table-pin-shadow: var(--shadow-sm);
    --ve-table-pin-left-shadow:
      var(--ve-table-pin-shadow),
      8px 0 12px -12px rgb(from var(--color-text-primary) r g b / 24%);
    --ve-table-pin-right-shadow:
      var(--ve-table-pin-shadow),
      -8px 0 12px -12px rgb(from var(--color-text-primary) r g b / 24%);

    /* Runtime custom properties (internal) */
    --ve-table-pin-left-offset: 0px;
    --ve-table-pin-right-offset: 0px;
    --ve-table-scroll-x: auto;
    --ve-table-scroll-y: auto;
  }

  @supports not (color: color-mix(in srgb, red, blue)) {
    :host {
      --ve-table-hover-background: var(--ve-table-background);
      --ve-table-focus-ring-color: var(--color-text-accent);
      --ve-table-checkbox-selected-hover-background: var(
        --ve-table-checkbox-selected-background
      );
      --ve-table-skeleton-background: linear-gradient(
        90deg,
        var(--color-bg-surface) 0%,
        var(--color-bg-surface) 45%,
        var(--color-bg-surface) 100%
      );
    }
  }
`,Ze=[re.H6,Ue,Y.AH`
    :host {
      display: block;
      color: var(--ve-table-cell-text);
      font-family: var(--ve-table-font-family);
      font-size: var(--ve-table-font-size);
      line-height: var(--ve-table-line-height);
    }

    :host([hidden]) {
      display: none;
    }

    .ve-table {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: var(--space-s);
      min-inline-size: 0;
    }

    .ve-table-scroll {
      position: relative;
      overflow: auto;
      border-radius: var(--ve-table-radius);
      border: var(--ve-table-border-width) solid transparent;
      background: var(--ve-table-background);
      box-shadow: var(--ve-table-shadow);
    }

    :host([bordered]) .ve-table-scroll {
      border-color: var(--ve-table-border-color);
    }

    /* 受约束布局的参考容器：宽度由 CSS max(100%, scroll.x) 决定，与表格内容无关。 */
    .ve-table-layout-reference {
      min-inline-size: 0;
    }

    /* 控制列尺寸探针：宽度完全由 token 决定，脱离文档流，不影响表格布局。 */
    .ve-table-control-size-probe {
      position: absolute;
      inline-size: var(--ve-table-control-column-size);
      block-size: 0;
      padding: 0;
      border: 0;
      visibility: hidden;
      pointer-events: none;
    }

    .ve-table-native {
      inline-size: 100%;
      min-inline-size: 100%;
      border-collapse: separate;
      border-spacing: 0;
      table-layout: auto;
      background: var(--ve-table-background);
    }

    .ve-table-native-constrained {
      table-layout: fixed;
    }

    .ve-table-head-cell,
    .ve-table-cell,
    .ve-table-select-cell {
      box-sizing: border-box;
      block-size: var(--ve-table-row-size);
      padding: var(--ve-table-padding-block) var(--ve-table-padding-inline);
      border-block-end: var(--ve-table-border-width) solid
        var(--ve-table-row-border-color);
      text-align: left;
      vertical-align: middle;
      background: var(--ve-table-background);
      color: var(--ve-table-cell-text);
    }

    .ve-table-head-cell {
      position: sticky;
      inset-block-start: 0;
      z-index: 2;
      background: var(--ve-table-header-background);
      color: var(--ve-table-header-text);
      font-weight: var(--ve-table-font-weight-header);
      border-block-end-color: var(--ve-table-header-border-color);
    }

    .ve-table-select-cell {
      inline-size: var(
        --ve-table-control-column-size-resolved,
        var(--ve-table-control-column-size)
      );
      min-inline-size: var(
        --ve-table-control-column-size-resolved,
        var(--ve-table-control-column-size)
      );
      max-inline-size: var(
        --ve-table-control-column-size-resolved,
        var(--ve-table-control-column-size)
      );
      padding-inline: 0;
      text-align: center;
      display: table-cell;
      vertical-align: middle;
      line-height: 1;
    }

    .ve-table-cell-align-center,
    .ve-table-head-cell-align-center {
      text-align: center;
    }

    .ve-table-cell-align-right,
    .ve-table-head-cell-align-right {
      text-align: right;
    }

    :host([vertical-line]) .ve-table-head-cell,
    :host([vertical-line]) .ve-table-cell,
    :host([vertical-line]) .ve-table-select-cell {
      border-inline-end: var(--ve-table-border-width) solid
        var(--ve-table-border-color);
    }

    :host([vertical-line]) .ve-table-head-row > :last-child,
    :host([vertical-line]) .ve-table-row > :last-child {
      border-inline-end: none;
    }

    tbody tr:last-child > .ve-table-cell,
    tbody tr:last-child > .ve-table-select-cell {
      border-block-end: none;
    }

    .ve-table-row {
      transition: background-color var(--ve-table-transition-duration) ease;
    }

    :host([hover]) .ve-table-row:hover .ve-table-cell,
    :host([hover]) .ve-table-row:hover .ve-table-select-cell {
      background: var(--ve-table-hover-background);
    }

    .ve-table-selection,
    .ve-table-sort-button {
      font: inherit;
    }

    .ve-table-selection,
    .ve-table-sort-button {
      border: none;
      background: transparent;
      color: inherit;
    }

    .ve-table-sort-button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: var(--space-xxxs);
      border-radius: var(--radius-sm);
      cursor: pointer;
      transition:
        background-color var(--ve-table-transition-duration) ease,
        color var(--ve-table-transition-duration) ease,
        opacity var(--ve-table-transition-duration) ease;
    }

    .ve-table-selection {
      margin-inline: auto;
      vertical-align: middle;
    }

    .ve-table-selection {
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      inline-size: var(--ve-table-checkbox-size);
      block-size: var(--ve-table-checkbox-size);
      padding: 0;
      border: var(--ve-table-checkbox-border-width) solid
        var(--ve-table-checkbox-border);
      border-radius: var(--ve-table-checkbox-radius);
      background: var(--ve-table-checkbox-background);
      color: var(--ve-table-checkbox-selected-color);
      cursor: pointer;
      transition:
        background-color var(--ve-table-transition-duration) ease,
        border-color var(--ve-table-transition-duration) ease,
        box-shadow var(--ve-table-transition-duration) ease,
        opacity var(--ve-table-transition-duration) ease;
    }

    .ve-table-selection-checked,
    .ve-table-selection-indeterminate {
      border-color: var(--ve-table-checkbox-selected-border);
      background: var(--ve-table-checkbox-selected-background);
    }

    .ve-table-selection:hover:not(.ve-table-selection-checked):not(
        .ve-table-selection-indeterminate
      ) {
      border-color: var(--ve-table-checkbox-border-hover);
    }

    .ve-table-selection-checked:hover,
    .ve-table-selection-checked:focus-visible,
    .ve-table-selection-indeterminate:hover,
    .ve-table-selection-indeterminate:focus-visible {
      background: var(--ve-table-checkbox-selected-hover-background);
    }

    .ve-table-selection-icon {
      position: absolute;
      inset-block-start: 50%;
      inset-inline-start: 50%;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      inline-size: var(--ve-table-checkbox-icon-size);
      block-size: var(--ve-table-checkbox-icon-size);
      --ve-icon-size: var(--ve-table-checkbox-icon-size);
      opacity: 0;
      transform: translate(-50%, -50%);
      pointer-events: none;
    }

    .ve-table-selection-checked .ve-table-selection-icon-check,
    .ve-table-selection-indeterminate .ve-table-selection-icon-minus {
      opacity: 1;
    }

    .ve-table-sort-button {
      inline-size: 100%;
      justify-content: inherit;
      padding: 0;
      text-align: inherit;
    }

    .ve-table-sort-button:hover,
    .ve-table-sort-button:focus-visible {
      background: color-mix(
        in srgb,
        var(--ve-table-background) var(--state-hover-subtle-ratio),
        var(--state-hover-subtle-mix)
      );
    }

    .ve-table-sort-button:focus-visible,
    .ve-table-selection:focus-visible {
      outline: none;
    }

    .ve-table-selection:focus-visible {
      box-shadow: 0 0 0 var(--ve-table-focus-ring-width)
        var(--ve-table-focus-ring-color);
    }

    .ve-table-selection[disabled] {
      opacity: var(--ve-table-disabled-opacity);
      cursor: not-allowed;
    }

    .ve-table-header-content,
    .ve-table-cell-content,
    .ve-table-empty {
      display: inline-flex;
      align-items: center;
      gap: var(--space-xxxs);
      min-inline-size: 0;
    }

    .ve-table-header-content {
      justify-content: inherit;
      inline-size: 100%;
      overflow: hidden;
    }

    .ve-table-cell-content {
      color: inherit;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    /* 受约束布局下内容容器不得超出单元格，超出部分裁剪。 */
    .ve-table-native-constrained .ve-table-cell-content {
      max-inline-size: 100%;
    }

    /* 单行省略：普通文本使用真正支持 text-overflow 的受限块容器。 */
    .ve-table-cell-content-ellipsis {
      display: block;
    }

    /* React 自定义单元格的投影 slot，占满列内可用宽度。 */
    .ve-table-cell-content > slot {
      display: block;
      inline-size: 100%;
      min-inline-size: 0;
    }

    .ve-table-cell-content-wrap {
      white-space: normal;
      overflow-wrap: anywhere;
    }

    .ve-table-sort-indicator {
      display: inline-flex;
      inline-size: var(--ve-table-sort-icon-size);
      block-size: var(--ve-table-sort-icon-size);
      color: var(--color-text-tertiary);
      font-size: var(--ve-table-sort-icon-size);
      line-height: 1;
      flex: none;
    }

    .ve-table-sort-indicator ve-icon {
      --ve-icon-size: var(--ve-table-sort-icon-size);
      inline-size: var(--ve-table-sort-icon-size);
      block-size: var(--ve-table-sort-icon-size);
    }

    .ve-table-sort-indicator-active {
      color: var(--color-text-accent);
    }

    .ve-table-pin-left {
      position: sticky;
      inset-inline-start: var(--ve-table-pin-left-offset, 0px);
      z-index: 1;
    }

    .ve-table-pin-right {
      position: sticky;
      inset-inline-end: var(--ve-table-pin-right-offset, 0px);
      z-index: 1;
    }

    .ve-table-scroll-can-left .ve-table-pin-left {
      box-shadow: var(--ve-table-pin-left-shadow);
    }

    .ve-table-scroll-can-right .ve-table-pin-right {
      box-shadow: var(--ve-table-pin-right-shadow);
    }

    .ve-table-head-cell.ve-table-pin-left,
    .ve-table-head-cell.ve-table-pin-right {
      z-index: 3;
    }

    .ve-table-empty {
      display: flex;
      justify-content: center;
      align-items: center;
      inline-size: 100%;
      max-inline-size: 100%;
      min-inline-size: 0;
      padding: calc(var(--space-l) * 2) var(--space-m);
      color: var(--ve-table-empty-text);
      box-sizing: border-box;
    }

    .ve-table-skeleton-cell,
    .ve-table-skeleton-selection {
      display: inline-block;
      block-size: var(--ve-table-skeleton-size);
      border-radius: var(--ve-table-skeleton-radius);
      background: var(--ve-table-skeleton-background);
      background-size: 200% 100%;
      animation: ve-table-skeleton 1.4s ease-in-out infinite;
    }

    .ve-table-skeleton-cell {
      inline-size: var(--ve-table-skeleton-width, 64%);
      max-inline-size: 100%;
    }

    .ve-table-skeleton-selection {
      inline-size: var(--ve-table-checkbox-size);
      block-size: var(--ve-table-checkbox-size);
      border-radius: var(--radius-xs);
    }

    @keyframes ve-table-skeleton {
      0% {
        background-position: 100% 0;
      }

      to {
        background-position: -100% 0;
      }
    }

    @supports not (color: color-mix(in srgb, red, blue)) {
      .ve-table-sort-button:hover {
        background: var(--ve-table-background);
      }
    }
  `];function Ge(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function Je(e){if(Object(e)!==e)throw TypeError("right-hand side of 'in' should be an object, got "+(null!==e?typeof e:"null"));return e}function Xe(e,t,r){"symbol"==typeof t&&(t=(t=t.description)?"["+t+"]":"");try{Object.defineProperty(e,"name",{configurable:!0,value:r?r+" "+t:t})}catch(n){}return e}let Ye,Qe,et,tt,rt,nt,ot,it,at,st,lt,ct,dt,ut,vt,ht,pt,gt,bt,mt,ft,_t,wt,yt,xt,kt,St,Ct,zt,Et,Ot,Mt,At,It,Pt,Tt,$t,Rt,Dt,Ft,Lt,Vt,jt,qt,Ht,Bt,Nt,Wt,Kt,Ut,Zt,Gt,Jt,Xt;const Yt="ve-table",Qt=[64,42,72,54,36];Ye=(0,te.MZ)({attribute:!1}),Qe=(0,te.MZ)({attribute:!1}),et=(0,te.MZ)({type:String,attribute:"row-key"}),tt=(0,te.MZ)({type:Boolean,reflect:!0}),rt=(0,te.MZ)({type:Boolean,reflect:!0}),nt=(0,te.MZ)({type:Boolean,attribute:"vertical-line",reflect:!0}),ot=(0,te.MZ)({type:Boolean,reflect:!0}),it=(0,te.MZ)({type:Boolean,reflect:!0}),at=(0,te.MZ)({attribute:!1}),st=(0,te.wk)(),lt=(0,te.wk)(),ct=(0,te.wk)(),dt=(0,te.wk)(),ut=(0,te.wk)(),vt=(0,te.wk)(),ht=(0,te.P)(".ve-table-scroll"),pt=(0,te.P)(".ve-table-layout-reference"),gt=(0,te.P)(".ve-table-control-size-probe");class er extends re.IB{static{({e:[bt,mt,ft,_t,wt,yt,xt,kt,St,Ct,zt,Et,Ot,Mt,At,It,Pt,Tt,$t,Rt,Dt,Ft,Lt,Vt,jt,qt,Ht,Bt,Nt,Wt,Kt,Ut,Zt,Gt,Jt,Xt]}=function(e,t,r,n,o,i){var a,s,l,c,d,u,v,h=Symbol.metadata||Symbol.for("Symbol.metadata"),p=Object.defineProperty,g=Object.create,b=[g(null),g(null)],m=t.length;function f(t,r,n){return function(o,i){r&&(i=o,o=e);for(var a=0;a<t.length;a++)i=t[a].apply(o,n?[i]:[]);return n?i:o}}function _(e,t,r,n){if("function"!=typeof e&&(n||void 0!==e))throw new TypeError(t+" must "+(r||"be")+" a function"+(n?"":" or undefined"));return e}function w(e,t,r,n,o,i,l,c,d,u,v){function h(e){if(!v(e))throw new TypeError("Attempted to access private element on non-instance")}var g=[].concat(t[0]),m=t[3],w=!l,y=1===o,x=3===o,k=4===o,S=2===o;function C(t,r,n){return function(o,i){return r&&(i=o,o=e),n&&n(o),desc[t].call(o,i)}}var z={},E=[],O=x?"get":k||y?"set":"value";if(!w&&(d?(u||y?z={get:Xe(function(){return m(this)},n,"get"),set:function(e){t[4](this,e)}}:z[O]=m,u||Xe(z[O],n,S?"":O)):u||(z=Object.getOwnPropertyDescriptor(e,n)),!u&&!d)){if((s=b[+c][n])&&7!==(s^o))throw new Error("Decorating two elements with the same name ("+z[O].name+") is not supported yet");b[+c][n]=o<3?1:o}for(var M=e,A=g.length-1;A>=0;A-=r?2:1){var I=_(g[A],"A decorator","be",!0),P=r?g[A-1]:void 0,T={},$={kind:["field","accessor","method","getter","setter","class"][o],name:n,metadata:a,addInitializer:function(e,t){if(e.v)throw new TypeError("attempted to call addInitializer after decoration was finished");_(t,"An initializer","be",!0),i.push(t)}.bind(null,T)};if(w)s=I.call(P,M,$),T.v=1,_(s,"class decorators","return")&&(M=s);else if($.static=c,$.private=d,s=$.access={has:d?v.bind():function(e){return n in e}},k||(s.get=d?S?function(e){return h(e),z.value}:C("get",0,h):function(e){return e[n]}),S||x||(s.set=d?C("set",0,h):function(e,t){e[n]=t}),M=I.call(P,y?{get:z.get,set:z.set}:z[O],$),T.v=1,y){if("object"==typeof M&&M)(s=_(M.get,"accessor.get"))&&(z.get=s),(s=_(M.set,"accessor.set"))&&(z.set=s),(s=_(M.init,"accessor.init"))&&E.unshift(s);else if(void 0!==M)throw new TypeError("accessor decorators must return an object with get, set, or init properties or undefined")}else _(M,(u?"field":"method")+" decorators","return")&&(u?E.unshift(M):z[O]=M)}return o<2&&l.push(f(E,c,1),f(i,c,0)),u||w||(d?y?l.splice(-1,0,C("get",c),C("set",c)):l.push(S?z[O]:_.call.bind(z[O])):p(e,n,z)),M}function y(e){return p(e,h,{configurable:!0,enumerable:!0,value:a})}return void 0!==i&&(a=i[h]),a=g(null==a?null:a),d=[],u=function(e){e&&d.push(f(e))},(v=function(t,n){for(var i=0;i<r.length;i++){var a=r[i],s=a[1],u=7&s;if((8&s)==t&&!u==n){var v=a[2],h=!!a[3],p=16&s;w(t?e:e.prototype,a,p,h?"#"+v:Ge(v),u,u<2?[]:t?c=c||[]:l=l||[],d,!!t,h,n,t&&h?function(t){return Je(t)===e}:o)}}})(8,0),v(0,0),v(8,1),v(0,1),u(l),u(c),s=d,m||y(e),{e:s,get c(){var r=[];return m&&[y(e=w(e,[t],n,e.name,5,r)),f(r,1)]}}}(this,[],[[Ye,1,"columns"],[Qe,1,"data"],[et,1,"rowKey"],[tt,1,"loading"],[rt,1,"bordered"],[nt,1,"verticalLine"],[ot,1,"hover"],[it,1,"selectable"],[at,1,"scrollConfig"],[st,1,"sortingState"],[lt,1,"rowSelectionState"],[ct,1,"canScrollLeft"],[dt,1,"canScrollRight"],[ut,1,"layoutReferenceWidth"],[vt,1,"controlColumnWidth"],[ht,1,"scrollContainer"],[pt,1,"layoutReferenceElement"],[gt,1,"controlSizeProbeElement"]]))}static styles=Ze;static shadowRootOptions=re.YD;static dependencies={[ne.v]:ne.O,[je]:qe};#dt=(()=>{const e=bt(this,[]);return mt(this),e})();get columns(){return this.#dt}set columns(e){this.#dt=e}#ut=(()=>{const e=ft(this,[]);return _t(this),e})();get data(){return this.#ut}set data(e){this.#ut=e}#vt=(()=>{const e=wt(this,"id");return yt(this),e})();get rowKey(){return this.#vt}set rowKey(e){this.#vt=e}#ht=(()=>{const e=xt(this,!1);return kt(this),e})();get loading(){return this.#ht}set loading(e){this.#ht=e}#pt=(()=>{const e=St(this,!1);return Ct(this),e})();get bordered(){return this.#pt}set bordered(e){this.#pt=e}#gt=(()=>{const e=zt(this,!1);return Et(this),e})();get verticalLine(){return this.#gt}set verticalLine(e){this.#gt=e}#bt=(()=>{const e=Ot(this,!0);return Mt(this),e})();get hover(){return this.#bt}set hover(e){this.#bt=e}#mt=(()=>{const e=At(this,!1);return It(this),e})();get selectable(){return this.#mt}set selectable(e){this.#mt=e}#ft=(()=>{const e=Pt(this,void 0);return Tt(this),e})();get scrollConfig(){return this.#ft}set scrollConfig(e){this.#ft=e}#_t=(()=>{const e=$t(this,[]);return Rt(this),e})();get sortingState(){return this.#_t}set sortingState(e){this.#_t=e}#wt=(()=>{const e=Dt(this,{});return Ft(this),e})();get rowSelectionState(){return this.#wt}set rowSelectionState(e){this.#wt=e}#yt=(()=>{const e=Lt(this,!1);return Vt(this),e})();get canScrollLeft(){return this.#yt}set canScrollLeft(e){this.#yt=e}#xt=(()=>{const e=jt(this,!1);return qt(this),e})();get canScrollRight(){return this.#xt}set canScrollRight(e){this.#xt=e}#kt=(()=>{const e=Ht(this,0);return Bt(this),e})();get layoutReferenceWidth(){return this.#kt}set layoutReferenceWidth(e){this.#kt=e}#St=(()=>{const e=Nt(this,40);return Wt(this),e})();get controlColumnWidth(){return this.#St}set controlColumnWidth(e){this.#St=e}#Ct=(()=>{const e=Kt(this,null);return Ut(this),e})();get scrollContainer(){return this.#Ct}set scrollContainer(e){this.#Ct=e}#zt=(()=>{const e=Zt(this,null);return Gt(this),e})();get layoutReferenceElement(){return this.#zt}set layoutReferenceElement(e){this.#zt=e}#Et=(()=>{const e=Jt(this,null);return Xt(this),e})();get controlSizeProbeElement(){return this.#Et}set controlSizeProbeElement(e){this.#Et=e}cachedColumns=null;cachedColumnDefs=[];resizeObserver=null;observedLayoutReference=null;observedControlSizeProbe=null;connectedCallback(){super.connectedCallback(),this.hasUpdated&&(this.observeScrollContainer(),this.syncLayoutReferenceObservation(),this.syncControlSizeProbeObservation(),this.updateScrollShadowState())}willUpdate(e){super.willUpdate(e),e.has("data")&&this.pruneRowStates()}firstUpdated(e){super.firstUpdated(e),this.observeScrollContainer(),this.syncLayoutReferenceObservation(),this.syncControlSizeProbeObservation(),this.updateScrollShadowState()}updated(e){super.updated(e),this.syncLayoutReferenceObservation(),this.syncControlSizeProbeObservation(),(e.has("columns")||e.has("data")||e.has("loading")||e.has("scrollConfig")||e.has("selectable"))&&this.updateScrollShadowState()}disconnectedCallback(){this.resizeObserver?.disconnect(),this.resizeObserver=null,this.observedLayoutReference=null,this.observedControlSizeProbe=null,super.disconnectedCallback()}observeScrollContainer(){"u"<typeof ResizeObserver||!this.scrollContainer||this.resizeObserver||(this.resizeObserver=new ResizeObserver(()=>{this.updateScrollShadowState(),this.updateLayoutReferenceWidth(),this.updateControlColumnWidth()}),this.resizeObserver.observe(this.scrollContainer))}syncLayoutReferenceObservation(){const e=this.layoutReferenceElement;e!==this.observedLayoutReference&&(this.observedLayoutReference&&this.resizeObserver?.unobserve(this.observedLayoutReference),this.observedLayoutReference=e,e&&this.resizeObserver?.observe(e)),this.updateLayoutReferenceWidth()}updateLayoutReferenceWidth(){const e=this.layoutReferenceElement,t=e?e.clientWidth:0;t!==this.layoutReferenceWidth&&(this.layoutReferenceWidth=t)}syncControlSizeProbeObservation(){const e=this.controlSizeProbeElement;e!==this.observedControlSizeProbe&&(this.observedControlSizeProbe&&this.resizeObserver?.unobserve(this.observedControlSizeProbe),this.observedControlSizeProbe=e,e&&this.resizeObserver?.observe(e)),this.updateControlColumnWidth()}readControlColumnLayoutWidth(){const e=this.controlSizeProbeElement;if(!e||"function"!=typeof getComputedStyle)return 40;const t=Number.parseFloat(getComputedStyle(e).width);return Number.isFinite(t)&&t>0?t:40}updateControlColumnWidth(){const e=this.readControlColumnLayoutWidth();e!==this.controlColumnWidth&&(this.controlColumnWidth=e)}updateScrollShadowState(){const e=this.scrollContainer;if(!e)return this.canScrollLeft=!1,void(this.canScrollRight=!1);const t=Math.max(0,e.scrollWidth-e.clientWidth),r=Math.min(Math.max(e.scrollLeft,0),t),n=r>1,o=t-r>1;this.canScrollLeft!==n&&(this.canScrollLeft=n),this.canScrollRight!==o&&(this.canScrollRight=o)}handleScroll=()=>{this.updateScrollShadowState()};createTableInstance(){let e;return e=J({data:this.data,columns:this.buildColumnDefs(),state:{sorting:this.sortingState,rowSelection:this.rowSelectionState,columnPinning:this.buildColumnPinningState(),columnSizing:{},columnSizingInfo:{startOffset:null,startSize:null,deltaOffset:null,deltaPercentage:null,isResizingColumn:!1,columnSizingStart:[]}},getRowId:(e,t)=>this.resolveRowId(e,t),enableRowSelection:this.selectable,onSortingChange:e=>{this.sortingState=this.resolveUpdater(this.sortingState,e),this.emitSortChange()},onRowSelectionChange:t=>{this.rowSelectionState=this.resolveUpdater(this.rowSelectionState,t),this.emitSelectionChange(e)},getCoreRowModel:e=>c(()=>[e.options.data],t=>{const r={rows:[],flatRows:[],rowsById:{}},n=function(t,o,i){void 0===o&&(o=0);const a=[];for(let l=0;l<t.length;l++){const c=g(e,e._getRowId(t[l],l,i),t[l],l,o,void 0,null==i?void 0:i.id);var s;r.flatRows.push(c),r.rowsById[c.id]=c,a.push(c),e.options.getSubRows&&(c.originalSubRows=e.options.getSubRows(t[l],l),null!=(s=c.originalSubRows)&&s.length&&(c.subRows=n(c.originalSubRows,o+1,c)))}return a};return r.rows=n(t),r},d(e.options,"debugTable",0,()=>e._autoResetPageIndex())),getSortedRowModel:e=>c(()=>[e.getState().sorting,e.getPreSortedRowModel()],(t,r)=>{if(!r.rows.length||null==t||!t.length)return r;const n=e.getState().sorting,o=[],i=n.filter(t=>{var r;return null==(r=e.getColumn(t.id))?void 0:r.getCanSort()}),a={};i.forEach(t=>{const r=e.getColumn(t.id);r&&(a[t.id]={sortUndefined:r.columnDef.sortUndefined,invertSorting:r.columnDef.invertSorting,sortingFn:r.getSortingFn()})});const s=e=>{const t=e.map(e=>({...e}));return t.sort((e,t)=>{for(let n=0;n<i.length;n+=1){var r;const o=i[n],s=a[o.id],l=s.sortUndefined,c=null!=(r=null==o?void 0:o.desc)&&r;let d=0;if(l){const r=void 0===e.getValue(o.id),n=void 0===t.getValue(o.id);if(r||n){if("first"===l)return r?-1:1;if("last"===l)return r?1:-1;d=r&&n?0:r?l:-l}}if(0===d&&(d=s.sortingFn(e,t,o.id)),0!==d)return c&&(d*=-1),s.invertSorting&&(d*=-1),d}return e.index-t.index}),t.forEach(e=>{var t;o.push(e),null!=(t=e.subRows)&&t.length&&(e.subRows=s(e.subRows))}),t};return{rows:s(r.rows),flatRows:o,rowsById:r.rowsById}},d(e.options,"debugTable",0,()=>e._autoResetPageIndex())),onStateChange:()=>{},renderFallbackValue:null}),e}get isConstrainedLayout(){return this.columns.some(e=>Boolean(e.fixed)||Boolean(e.ellipsis)||function(e){return void 0!==Ke(e.width)||void 0!==Ke(e.minWidth)||void 0!==Ke(e.maxWidth)}(e))}createRenderContext(e=this.createTableInstance()){const t=[...e.getLeftVisibleLeafColumns(),...e.getCenterVisibleLeafColumns(),...e.getRightVisibleLeafColumns()],r=this.isConstrainedLayout,n=function(e,t,r=0){const n=Number.isFinite(e)?Math.max(0,e):0,o=t.map(e=>e.fixedWidth??e.minWidth);let i=n-r-o.reduce((e,t)=>e+t,0);for(;i>We;){const e=[];for(let i=0;i<t.length;i+=1){const r=t[i];null===r.fixedWidth&&o[i]<r.maxWidth-We&&e.push(i)}if(0===e.length)break;const r=i/e.length;let n=0;for(const i of e){const e=t[i],a=Math.min(o[i]+r,e.maxWidth);n+=a-o[i],o[i]=a}if(n<=We)break;i-=n}const a=[],s=[];let l=r;for(const d of o)a.push(l),l+=d;let c=0;for(let d=o.length-1;d>=0;d-=1)s[d]=c,c+=o[d];return{widths:o,leftOffsets:a,rightOffsets:s,totalWidth:l,controlWidth:r}}(r?this.layoutReferenceWidth:0,t.map(e=>function(e){const t=Math.max(80,Ke(e.minWidth)??80),r=Ke(e.maxWidth),n=void 0===r?1/0:Math.max(t,r),o=Ke(e.width)??(e.fixed?160:void 0);return{key:e.key,fixedWidth:void 0===o?null:(i=o,Math.min(Math.max(i,t),n)),minWidth:t,maxWidth:n};var i}(this.getColumnMeta(e)?.tableColumn??{key:e.id})),this.selectable?this.controlColumnWidth:0),o={table:e,leafColumns:t,constrained:r,layout:n,columnStyles:new Map,renderedColumnCount:t.length+(this.selectable?1:0)};return t.forEach((e,t)=>{o.columnStyles.set(e.id,this.getColumnCellStyle(e,o,t))}),o}resolveUpdater(e,t){return"function"==typeof t?t(e):t}resolveRowId(e,t){const r=e[this.rowKey];return String("string"==typeof r||"number"==typeof r?r:t)}getSelectedRowKeys(){return Object.entries(this.rowSelectionState).filter(([,e])=>e).map(([e])=>e)}getCurrentSortDetail(){const e=this.sortingState[0];return e?{key:e.id,direction:e.desc?"desc":"asc"}:null}emitTableEvent(e,t){this.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}emitAggregateChange(){this.emitTableEvent("ve-change",{sortState:this.getCurrentSortDetail(),selectedRowKeys:this.getSelectedRowKeys()})}emitSortChange(){const e=this.getCurrentSortDetail();this.emitTableEvent("ve-sort-change",e),this.emitAggregateChange()}emitSelectionChange(e){this.emitTableEvent("ve-selection-change",{selectedRowKeys:this.getSelectedRowKeys(),selectedRows:e.getSelectedRowModel().rows.map(e=>e.original)}),this.emitAggregateChange()}pruneRowStates(){const e=new Set(this.data.map((e,t)=>this.resolveRowId(e,t)));this.rowSelectionState=Object.fromEntries(Object.entries(this.rowSelectionState).filter(([t])=>e.has(t)))}buildColumnPinningState(){const e=[],t=[];for(const r of this.columns)"left"===r.fixed&&e.push(r.key),"right"===r.fixed&&t.push(r.key);return{left:e,right:t}}buildColumnDefs(){return this.cachedColumns===this.columns||(this.cachedColumns=this.columns,this.cachedColumnDefs=this.columns.map(e=>{const t={tableColumn:e};e.align&&(t.align=e.align),e.fixed&&(t.fixed=e.fixed),e.wrap&&(t.wrap=e.wrap);const r={id:e.key,header:()=>this.renderHeaderContent(e),cell:t=>this.renderCellContent(e,t.getValue(),t.row.original,t.row.index),enableSorting:Boolean(e.sortable),meta:t};return"number"==typeof e.width&&Object.assign(r,{size:e.width}),"number"==typeof e.minWidth&&Object.assign(r,{minSize:e.minWidth}),"number"==typeof e.maxWidth&&Object.assign(r,{maxSize:e.maxWidth}),{...r,accessorFn:t=>this.getCellValue(t,e)}})),this.cachedColumnDefs}getCellValue(e,t){return e[t.dataIndex??t.key]}renderHeaderContent(e){const t="function"==typeof e.title?e.title(e):e.title;return Y.qy`<span class="ve-table-header-content">${t}</span>`}renderCellContent(e,t,r,n){return e.render?this.wrapCellContent(e,e.render(t,r,n)):this.wrapCellContent(e,this.stringifyCellValue(t))}wrapCellContent(e,t){return Y.qy`
      <span
        class=${(0,Q.H)({"ve-table-cell-content":!0,"ve-table-cell-content-wrap":Boolean(e.wrap),"ve-table-cell-content-ellipsis":Boolean(e.ellipsis)&&!e.wrap})}
      >
        ${t??Y.s6}
      </span>
    `}stringifyCellValue(e){return null==e||""===e?"--":String(e)}getColumnMeta(e){return e.columnDef.meta}getColumnCellStyle(e,t,r){if(!t.constrained)return;const n=this.getColumnMeta(e)?.fixed;return"left"===n?`--ve-table-pin-left-offset:${t.layout.leftOffsets[r]??0}px;`:"right"===n?`--ve-table-pin-right-offset:${t.layout.rightOffsets[r]??0}px;`:void 0}renderSelectionHeader(e){const t=e.table,r=t.getIsAllRowsSelected(),n=t.getIsSomeRowsSelected()&&!r;return Y.qy`
      <th class="ve-table-head-cell ve-table-select-cell" scope="col">
        <button
          class=${(0,Q.H)({"ve-table-selection":!0,"ve-table-selection-checked":r,"ve-table-selection-indeterminate":n})}
          type="button"
          role="checkbox"
          aria-label="Select all rows"
          aria-checked=${n?"mixed":r?"true":"false"}
          @click=${()=>t.toggleAllRowsSelected(!r)}
        >
          ${this.renderSelectionIcons()}
        </button>
      </th>
    `}renderSelectionIcons(){return Y.qy`
      <svg
        class="ve-table-selection-icon ve-table-selection-icon-check"
        aria-hidden="true"
        focusable="false"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M3.25 8.1 6.35 11.2 12.75 4.8"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="var(--ve-table-checkbox-icon-stroke-width)"
        ></path>
      </svg>
      <svg
        class="ve-table-selection-icon ve-table-selection-icon-minus"
        aria-hidden="true"
        focusable="false"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M4 8h8"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-width="var(--ve-table-checkbox-icon-stroke-width)"
        ></path>
      </svg>
    `}renderHead(e){const t=e.table.getHeaderGroups();return Y.qy`
      <thead part="head">
        ${t.map(t=>Y.qy`
            <tr class="ve-table-head-row">
              ${this.selectable?this.renderSelectionHeader(e):Y.s6}
              ${t.headers.map(t=>{const r=this.getColumnMeta(t.column),n=r?.align??"left",o=r?.fixed,i=e.columnStyles.get(t.column.id),a=t.column.getCanSort(),s=t.column.getIsSorted(),l="asc"===s?"ascending":"desc"===s?"descending":"none",c="asc"===s?He.arrowUpSmIcon:"desc"===s?Be.arrowDownSmIcon:Ne.downUpIcon;return Y.qy`
                  <th
                    class=${(0,Q.H)({"ve-table-head-cell":!0,"ve-table-head-cell-align-center":"center"===n,"ve-table-head-cell-align-right":"right"===n,"ve-table-pin-left":"left"===o,"ve-table-pin-right":"right"===o})}
                    scope="col"
                    aria-sort=${l}
                    style=${(0,ee.J)(i)}
                  >
                    ${t.isPlaceholder?Y.s6:a?Y.qy`
                            <button
                              class="ve-table-sort-button"
                              type="button"
                              @click=${t.column.getToggleSortingHandler()}
                            >
                              ${X(t.column.columnDef.header,t.getContext())}
                              <span
                                class=${(0,Q.H)({"ve-table-sort-indicator":!0,"ve-table-sort-indicator-active":Boolean(s)})}
                                aria-hidden="true"
                              >
                                <ve-icon .definition=${c}></ve-icon>
                              </span>
                            </button>
                          `:X(t.column.columnDef.header,t.getContext())}
                  </th>
                `})}
            </tr>
          `)}
      </thead>
    `}renderRowSelectionCell(e){const t=e.getIsSelected(),r=e.getIsSomeSelected()&&!t;return Y.qy`
      <td class="ve-table-select-cell">
        <button
          class=${(0,Q.H)({"ve-table-selection":!0,"ve-table-selection-checked":t,"ve-table-selection-indeterminate":r})}
          type="button"
          role="checkbox"
          aria-label=${(0,ee.J)(`Select row ${e.id}`)}
          aria-checked=${r?"mixed":t?"true":"false"}
          ?disabled=${!e.getCanSelect()}
          @click=${()=>e.toggleSelected(!t)}
        >
          ${this.renderSelectionIcons()}
        </button>
      </td>
    `}renderCell(e,t){const r=this.getColumnMeta(e.column),n=r?.align??"left",o=r?.fixed,i=t.columnStyles.get(e.column.id);return Y.qy`
      <td
        class=${(0,Q.H)({"ve-table-cell":!0,"ve-table-cell-align-center":"center"===n,"ve-table-cell-align-right":"right"===n,"ve-table-pin-left":"left"===o,"ve-table-pin-right":"right"===o})}
        style=${(0,ee.J)(i)}
      >
        ${X(e.column.columnDef.cell,e.getContext())}
      </td>
    `}renderSkeletonCell(e,t,r){const n=this.getColumnMeta(e),o=n?.align??"left",i=n?.fixed,a=Qt[r%Qt.length]??64,s=[t.columnStyles.get(e.id),`--ve-table-skeleton-width:${a}%;`].filter(Boolean).join(" ");return Y.qy`
      <td
        class=${(0,Q.H)({"ve-table-cell":!0,"ve-table-cell-align-center":"center"===o,"ve-table-cell-align-right":"right"===o,"ve-table-pin-left":"left"===i,"ve-table-pin-right":"right"===i})}
        style=${s}
      >
        <span class="ve-table-skeleton-cell" aria-hidden="true"></span>
      </td>
    `}renderSkeletonRows(e){return this.loading?Array.from({length:2},(t,r)=>Y.qy`
        <tr
          class="ve-table-row ve-table-skeleton-row"
          part="row"
          aria-hidden="true"
        >
          ${this.selectable?Y.qy`
                <td class="ve-table-select-cell">
                  <span class="ve-table-skeleton-selection"></span>
                </td>
              `:Y.s6}
          ${e.leafColumns.map((t,n)=>this.renderSkeletonCell(t,e,n+r))}
        </tr>
      `):Y.s6}renderBody(e){const t=e.table.getRowModel().rows,r=Y.qy`<slot name="empty-content"
      ><ve-empty></ve-empty
    ></slot>`;return 0!==t.length||this.loading?Y.qy`
      <tbody part="body">
        ${t.map(t=>Y.qy`
            <tr
              class=${(0,Q.H)({"ve-table-row":!0})}
              part="row"
            >
              ${this.selectable?this.renderRowSelectionCell(t):Y.s6}
              ${t.getVisibleCells().map(t=>this.renderCell(t,e))}
            </tr>
          `)}
        ${this.renderSkeletonRows(e)}
      </tbody>
    `:Y.qy`
        <tbody part="body">
          <tr>
            <td
              class="ve-table-cell"
              colspan=${Math.max(1,e.renderedColumnCount)}
            >
              <div class="ve-table-empty" part="empty">${r}</div>
            </td>
          </tr>
        </tbody>
      `}normalizeScrollSize(e){if("number"==typeof e)return Number.isFinite(e)&&e>0?`${e}px`:void 0;const t=e?.trim();return t||void 0}getScrollContainerStyle(){const e=this.normalizeScrollSize(this.scrollConfig?.y);return e?`--ve-table-scroll-y:${e}; max-block-size:var(--ve-table-scroll-y);`:void 0}getLayoutReferenceStyle(){const e=this.normalizeScrollSize(this.scrollConfig?.x);return e?`--ve-table-scroll-x:${e}; inline-size:max(100%, var(--ve-table-scroll-x));`:void 0}getNativeTableStyle(e){if(e.constrained){const t=e.layout.totalWidth;return`inline-size:${t}px; min-inline-size:${t}px;`}const t=this.normalizeScrollSize(this.scrollConfig?.x);return t?`--ve-table-scroll-x:${t}; inline-size:max(100%, var(--ve-table-scroll-x)); min-inline-size:max(100%, var(--ve-table-scroll-x));`:void 0}renderColGroup(e){return Y.qy`
      <colgroup>
        ${this.selectable?Y.qy`<col
              style="inline-size: ${e.layout.controlWidth}px;"
            />`:Y.s6}
        ${e.leafColumns.map((t,r)=>Y.qy`<col
              style="inline-size: ${e.layout.widths[r]??0}px;"
            />`)}
      </colgroup>
    `}render(){const e=this.createRenderContext(),t=Y.qy`
      <table
        class=${(0,Q.H)({"ve-table-native":!0,"ve-table-native-constrained":e.constrained})}
        part="table"
        style=${(0,ee.J)(this.getNativeTableStyle(e))}
      >
        ${e.constrained?this.renderColGroup(e):Y.s6}
        ${this.renderHead(e)} ${this.renderBody(e)}
      </table>
    `;return Y.qy`
      <div
        class="ve-table"
        style=${(0,ee.J)(this.selectable?`--ve-table-control-column-size-resolved:${this.controlColumnWidth}px;`:void 0)}
      >
        ${this.selectable?Y.qy`<span
              class="ve-table-control-size-probe"
              aria-hidden="true"
            ></span>`:Y.s6}
        <div
          class=${(0,Q.H)({"ve-table-scroll":!0,"ve-table-scroll-can-left":this.canScrollLeft,"ve-table-scroll-can-right":this.canScrollRight})}
          style=${(0,ee.J)(this.getScrollContainerStyle())}
          @scroll=${this.handleScroll}
        >
          ${e.constrained?Y.qy`<div
                class="ve-table-layout-reference"
                style=${(0,ee.J)(this.getLayoutReferenceStyle())}
              >
                ${t}
              </div>`:t}
        </div>
      </div>
    `}}(0,re.Xq)(Yt,er);var tr=r(35780),rr=r(74410);const nr=(0,tr.h)({tagName:Yt,elementClass:er,react:o,events:{onChange:"ve-change",onSortChange:"ve-sort-change",onSelectionChange:"ve-selection-change"},ownEvents:["onChange"]});function or(e,t,r){const n=e?.[t];return String("string"==typeof n||"number"==typeof n?n:r)}function ir(e,t){return`ve-table-cell-${JSON.stringify([e,t])}`}const ar=n.forwardRef(({columns:e,data:t,rowKey:r,emptyContent:o,children:i,onChange:a,onSortChange:s,onSelectionChange:l,...c},d)=>{const u=r??"id",v=n.useRef(null),h=n.useMemo(()=>e?e.map(e=>e.render?{...e,render:(t,r,n)=>(e=>{const t=v.current??=new Map;let r=t.get(e);return r||(r=document.createElement("slot"),r.name=e,t.set(e,r)),r})(ir(or(r,u,n),e.key))}:e):e,[e,u]),p=n.useMemo(()=>{if(!e||!t)return[];const r=[];return t.forEach((t,n)=>{const o=or(t,u,n);for(const i of e){if(!i.render)continue;const e=t?.[i.dataIndex??i.key];r.push({slotName:ir(o,i.key),content:i.render(e,t,n),textEllipsis:Boolean(i.ellipsis)&&!i.wrap})}}),r},[e,t,u]);return n.useEffect(()=>{const e=v.current;if(!e)return;const t=new Set(p.map(e=>e.slotName));for(const r of e.keys())t.has(r)||e.delete(r)},[p]),n.createElement(nr,{...c,ref:d,...void 0!==h?{columns:h}:{},...void 0!==t?{data:t}:{},...void 0!==r?{rowKey:r}:{},...a?{onChange:a}:{},...s?{onSortChange:s}:{},...l?{onSelectionChange:l}:{}},(0,rr.RG)("empty-content",o),i,p.map(e=>{if(!(0,rr.ns)(e.content))return null;const t=e.textEllipsis&&(0,rr.Vx)(e.content);return n.createElement("div",{key:e.slotName,slot:e.slotName,style:{minWidth:0,maxWidth:"100%",boxSizing:"border-box",...t?{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}:{}}},e.content)}))});ar.displayName="Table"},99944(e,t,r){r.d(t,{m:()=>ue,t:()=>ce});var n=r(30758),o=r.t(n,2),i=r(45080),a=r(61834),s=r(67286),l=r(30184),c=r(94023),d=r(76112);function u(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function v(e){if(Object(e)!==e)throw TypeError("right-hand side of 'in' should be an object, got "+(null!==e?typeof e:"null"));return e}function h(e,t,r){"symbol"==typeof t&&(t=(t=t.description)?"["+t+"]":"");try{Object.defineProperty(e,"name",{configurable:!0,value:r?r+" "+t:t})}catch(n){}return e}let p,g,b,m,f,_,w,y,x;const k="ve-tab-pane",S="ve-tab-pane-change";p=(0,a.MZ)({type:String,reflect:!0}),g=(0,a.MZ)({type:Boolean,reflect:!0}),b=(0,a.KN)({slot:"tab",flatten:!0});class C extends c.IB{static{({e:[m,f,_,w,y,x]}=function(e,t,r,n,o,i){var a,s,l,c,d,p,g,b=Symbol.metadata||Symbol.for("Symbol.metadata"),m=Object.defineProperty,f=Object.create,_=[f(null),f(null)],w=t.length;function y(t,r,n){return function(o,i){r&&(i=o,o=e);for(var a=0;a<t.length;a++)i=t[a].apply(o,n?[i]:[]);return n?i:o}}function x(e,t,r,n){if("function"!=typeof e&&(n||void 0!==e))throw new TypeError(t+" must "+(r||"be")+" a function"+(n?"":" or undefined"));return e}function k(e,t,r,n,o,i,l,c,d,u,v){function p(e){if(!v(e))throw new TypeError("Attempted to access private element on non-instance")}var g=[].concat(t[0]),b=t[3],f=!l,w=1===o,k=3===o,S=4===o,C=2===o;function z(t,r,n){return function(o,i){return r&&(i=o,o=e),n&&n(o),desc[t].call(o,i)}}var E={},O=[],M=k?"get":S||w?"set":"value";if(!f&&(d?(u||w?E={get:h(function(){return b(this)},n,"get"),set:function(e){t[4](this,e)}}:E[M]=b,u||h(E[M],n,C?"":M)):u||(E=Object.getOwnPropertyDescriptor(e,n)),!u&&!d)){if((s=_[+c][n])&&7!==(s^o))throw new Error("Decorating two elements with the same name ("+E[M].name+") is not supported yet");_[+c][n]=o<3?1:o}for(var A=e,I=g.length-1;I>=0;I-=r?2:1){var P=x(g[I],"A decorator","be",!0),T=r?g[I-1]:void 0,$={},R={kind:["field","accessor","method","getter","setter","class"][o],name:n,metadata:a,addInitializer:function(e,t){if(e.v)throw new TypeError("attempted to call addInitializer after decoration was finished");x(t,"An initializer","be",!0),i.push(t)}.bind(null,$)};if(f)s=P.call(T,A,R),$.v=1,x(s,"class decorators","return")&&(A=s);else if(R.static=c,R.private=d,s=R.access={has:d?v.bind():function(e){return n in e}},S||(s.get=d?C?function(e){return p(e),E.value}:z("get",0,p):function(e){return e[n]}),C||k||(s.set=d?z("set",0,p):function(e,t){e[n]=t}),A=P.call(T,w?{get:E.get,set:E.set}:E[M],R),$.v=1,w){if("object"==typeof A&&A)(s=x(A.get,"accessor.get"))&&(E.get=s),(s=x(A.set,"accessor.set"))&&(E.set=s),(s=x(A.init,"accessor.init"))&&O.unshift(s);else if(void 0!==A)throw new TypeError("accessor decorators must return an object with get, set, or init properties or undefined")}else x(A,(u?"field":"method")+" decorators","return")&&(u?O.unshift(A):E[M]=A)}return o<2&&l.push(y(O,c,1),y(i,c,0)),u||f||(d?w?l.splice(-1,0,z("get",c),z("set",c)):l.push(C?E[M]:x.call.bind(E[M])):m(e,n,E)),A}function S(e){return m(e,b,{configurable:!0,enumerable:!0,value:a})}return void 0!==i&&(a=i[b]),a=f(null==a?null:a),d=[],p=function(e){e&&d.push(y(e))},(g=function(t,n){for(var i=0;i<r.length;i++){var a=r[i],s=a[1],h=7&s;if((8&s)==t&&!h==n){var p=a[2],g=!!a[3],b=16&s;k(t?e:e.prototype,a,b,g?"#"+p:u(p),h,h<2?[]:t?c=c||[]:l=l||[],d,!!t,g,n,t&&g?function(t){return v(t)===e}:o)}}})(8,0),g(0,0),g(8,1),g(0,1),p(l),p(c),s=d,w||S(e),{e:s,get c(){var r=[];return w&&[S(e=k(e,[t],n,e.name,5,r)),y(r,1)]}}}(this,[],[[p,1,"key"],[g,1,"disabled"],[b,1,"tabSlotElements"]]))}static styles=[c.H6,i.AH`
      :host {
        display: block;
      }

      :host([hidden]) {
        display: none;
      }
    `];#Ot=(()=>{const e=m(this,"");return f(this),e})();get key(){return this.#Ot}set key(e){this.#Ot=e}get title(){return this.titleText}set title(e){(0,d.e)(this,this.titleText,e,e=>{this.titleText=e})}#t=(()=>{const e=_(this,!1);return w(this),e})();get disabled(){return this.#t}set disabled(e){this.#t=e}#Mt=(()=>{const e=y(this);return x(this),e})();get tabSlotElements(){return this.#Mt}set tabSlotElements(e){this.#Mt=e}titleText="";tabContentObserver="u"<typeof MutationObserver?void 0:new MutationObserver(()=>{this.dispatchPaneChange()});constructor(){super(),(0,d.m)(this)}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this.isConnected&&this.observeTabSlotContent()})}disconnectedCallback(){this.tabContentObserver?.disconnect(),super.disconnectedCallback()}get panelId(){return`ve-tabs-panel-${this.key}`}get tabId(){return`ve-tabs-tab-${this.key}`}getTabNodes(){return this.tabSlotElements}updated(e){super.updated(e),(e.has("key")||e.has("title")||e.has("disabled"))&&this.dispatchPaneChange()}dispatchPaneChange(){this.dispatchEvent(new CustomEvent(S,{bubbles:!0,composed:!0}))}observeTabSlotContent(){if(this.tabContentObserver){this.tabContentObserver.disconnect();for(const e of this.tabSlotElements)this.tabContentObserver.observe(e,{childList:!0,subtree:!0,characterData:!0,attributes:!0})}}handleTabSlotChange=()=>{this.observeTabSlotContent(),this.dispatchPaneChange()};render(){return i.qy`
      <div hidden aria-hidden="true">
        <slot name="tab" @slotchange=${this.handleTabSlotChange}></slot>
      </div>
      <slot @slotchange=${this.dispatchPaneChange}></slot>
    `}}function z(e){return Boolean(e.key)&&!e.disabled}const E=i.AH`
  :host {
    --ve-tabs-text-color: var(--color-text-tertiary);
    --ve-tabs-font-family: var(--font-sans);
    --ve-tabs-nav-gap: var(--space-m);
    --ve-tabs-nav-padding-inline: 0px;
    --ve-tabs-nav-padding-block: 0px;
    --ve-tabs-nav-border-color: var(--color-border-default);
    --ve-tabs-nav-border-width: var(--stroke-weight-base);
    --ve-tabs-nav-background: transparent;
    --ve-tabs-nav-radius: 0px;
    --ve-tabs-layout-gap-inline: var(--space-m);
    --ve-tabs-content-padding-block: var(--space-s);
    --ve-tabs-content-padding-inline: 0px;
    --ve-tabs-pane-radius: 0px;
    --ve-tabs-pane-text-color: var(--color-text-primary);
    --ve-tabs-pane-font-size: var(--text-body);
    --ve-tabs-panels-background: transparent;

    --ve-tabs-font-weight: var(--font-weight-normal);
    --ve-tabs-font-weight-active: var(--font-weight-medium);
    --ve-tabs-focus-ring-width: var(--stroke-2);
    --ve-tabs-disabled-opacity: 1;
    --ve-tabs-transition-duration: var(--motion-base);
    --ve-tabs-transition-easing: var(--ease-standard);

    --ve-tabs-height-small: 28px;
    --ve-tabs-height-default: 32px;
    --ve-tabs-height-large: 36px;

    --ve-tabs-pipe-inner-height-small: 24px;
    --ve-tabs-pipe-inner-height-default: 28px;
    --ve-tabs-pipe-inner-height-large: 32px;

    --ve-tabs-padding-inline-small: var(--space-xxs);
    --ve-tabs-padding-inline-default: var(--space-xs);
    --ve-tabs-padding-inline-large: var(--space-xs);

    --ve-tabs-font-size-small: var(--text-body-sm);
    --ve-tabs-font-size-default: var(--text-body);
    --ve-tabs-font-size-large: var(--text-body);

    --ve-tabs-radius-line: 0px;
    --ve-tabs-radius-text: 0px;
    --ve-tabs-radius-rounded: var(--radius-lg);
    --ve-tabs-radius-capsule: var(--radius-lg);
    --ve-tabs-radius-capsule-small: 10px;

    --ve-tabs-indicator-thickness: var(--stroke-weight-bold);
    --ve-tabs-indicator-color: var(--color-border-interactive-active);

    --ve-tabs-item-text: var(--color-text-tertiary);
    --ve-tabs-item-text-hover: var(--color-text-secondary);
    --ve-tabs-item-text-active: var(--color-text-primary);
    --ve-tabs-item-text-disabled: var(--color-text-disable);

    --ve-tabs-item-background: transparent;
    --ve-tabs-item-background-hover: transparent;
    --ve-tabs-item-background-active: transparent;

    --ve-tabs-focus-ring-color: color-mix(
      in srgb,
      var(--ve-tabs-current-item-text-active) 20%,
      transparent
    );
    --ve-tabs-active-inner-border-width: var(--stroke-weight-base);
    --ve-tabs-active-inner-border-color: transparent;

    --ve-tabs-item-padding-block-line-vertical: var(--space-xxs);
    --ve-tabs-item-padding-inline-line-vertical-start: 0px;
    --ve-tabs-item-padding-inline-line-vertical-end: var(--space-xxs);

    --ve-tabs-current-height: var(--ve-tabs-height-default);
    --ve-tabs-current-padding-inline: var(--ve-tabs-padding-inline-default);
    --ve-tabs-current-font-size: var(--ve-tabs-font-size-default);
    --ve-tabs-current-radius: var(--ve-tabs-radius-line);
    --ve-tabs-current-nav-gap: var(--ve-tabs-nav-gap);
    --ve-tabs-current-nav-padding-inline: var(--ve-tabs-nav-padding-inline);
    --ve-tabs-current-nav-padding-block: var(--ve-tabs-nav-padding-block);
    --ve-tabs-current-nav-background: var(--ve-tabs-nav-background);
    --ve-tabs-current-nav-radius: var(--ve-tabs-nav-radius);
    --ve-tabs-current-nav-border-width: var(--ve-tabs-nav-border-width);
    --ve-tabs-current-item-background: var(--ve-tabs-item-background);
    --ve-tabs-current-item-background-hover: var(
      --ve-tabs-item-background-hover
    );
    --ve-tabs-current-item-background-active: var(
      --ve-tabs-item-background-active
    );
    --ve-tabs-current-item-text: var(--ve-tabs-item-text);
    --ve-tabs-current-item-text-hover: var(--ve-tabs-item-text-hover);
    --ve-tabs-current-item-text-active: var(--ve-tabs-item-text-active);
    --ve-tabs-current-item-text-disabled: var(--ve-tabs-item-text-disabled);
    --ve-tabs-current-active-inner-border-color: var(
      --ve-tabs-active-inner-border-color
    );
  }

  :host([size='small']) {
    --ve-tabs-current-height: var(--ve-tabs-height-small);
    --ve-tabs-current-padding-inline: var(--ve-tabs-padding-inline-small);
    --ve-tabs-current-font-size: var(--ve-tabs-font-size-small);
  }

  :host([size='large']) {
    --ve-tabs-current-height: var(--ve-tabs-height-large);
    --ve-tabs-current-padding-inline: var(--ve-tabs-padding-inline-large);
    --ve-tabs-current-font-size: var(--ve-tabs-font-size-large);
  }

  :host([type='text']) {
    --ve-tabs-current-nav-gap: var(--space-l);
    --ve-tabs-current-radius: var(--ve-tabs-radius-text);
    --ve-tabs-current-nav-border-width: 0px;
  }

  :host([type='rounded']) {
    --ve-tabs-current-nav-gap: var(--space-xxxs);
    --ve-tabs-current-radius: var(--ve-tabs-radius-rounded);
    --ve-tabs-current-nav-border-width: 0px;
    --ve-tabs-current-item-background-hover: var(--color-bg-surface);
    --ve-tabs-current-item-background-active: var(--color-bg-secondary);
    --ve-tabs-current-item-text-hover: var(--color-text-tertiary);
  }

  :host([type='capsule']) {
    --ve-tabs-current-nav-gap: 2px;
    --ve-tabs-current-nav-padding-inline: 2px;
    --ve-tabs-current-nav-padding-block: 2px;
    --ve-tabs-current-nav-background: var(--color-bg-surface);
    --ve-tabs-current-nav-radius: var(--radius-lg);
    --ve-tabs-current-nav-border-width: 0px;
    --ve-tabs-current-radius: var(--ve-tabs-radius-capsule);
    --ve-tabs-current-height: var(--ve-tabs-pipe-inner-height-default);
    --ve-tabs-current-item-background-active: var(--color-bg-overlay);
    --ve-tabs-current-active-inner-border-color: var(--color-bg-muted);
  }

  :host([type='capsule'][size='small']) {
    --ve-tabs-current-height: var(--ve-tabs-pipe-inner-height-small);
    --ve-tabs-current-radius: var(--ve-tabs-radius-capsule-small);
    --ve-tabs-current-nav-radius: var(--ve-tabs-radius-capsule-small);
  }

  :host([type='capsule'][size='large']) {
    --ve-tabs-current-height: var(--ve-tabs-pipe-inner-height-large);
  }

  :host([tab-position='left']),
  :host([tab-position='right']) {
    --ve-tabs-nav-gap: var(--space-xxs);
    --ve-tabs-content-padding-inline: var(--space-s);
    --ve-tabs-content-padding-block: 0px;
  }

  @supports not (color: color-mix(in srgb, red, blue)) {
    :host {
      --ve-tabs-focus-ring-color: var(--ve-tabs-current-item-text-active);
    }
  }
`,O=[c.H6,E,i.AH`
    :host {
      display: block;
      color: var(--ve-tabs-text-color);
    }

    :host([hidden]) {
      display: none;
    }

    .ve-tabs {
      display: flex;
      flex-direction: column;
      gap: 0;
      min-inline-size: 0;
      min-block-size: 0;
    }

    :host([tab-position='bottom']) .ve-tabs {
      flex-direction: column-reverse;
    }

    :host([tab-position='left']) .ve-tabs {
      flex-direction: row;
      align-items: stretch;
      gap: var(--ve-tabs-layout-gap-inline);
    }

    :host([tab-position='right']) .ve-tabs {
      flex-direction: row-reverse;
      align-items: stretch;
      gap: var(--ve-tabs-layout-gap-inline);
    }

    .ve-tabs-nav {
      position: relative;
      display: inline-flex;
      align-items: center;
      gap: var(--ve-tabs-current-nav-gap);
      min-inline-size: 0;
      inline-size: fit-content;
      max-inline-size: 100%;
      align-self: flex-start;
      padding-inline: var(--ve-tabs-current-nav-padding-inline);
      padding-block: var(--ve-tabs-current-nav-padding-block);
      border-radius: var(--ve-tabs-current-nav-radius);
      background: var(--ve-tabs-current-nav-background);
      box-sizing: border-box;
      overflow-x: auto;
      overflow-y: hidden;
      scrollbar-width: none;
    }

    .ve-tabs-nav::-webkit-scrollbar {
      display: none;
    }

    :host(:not([type]):not([tab-position])) .ve-tabs-nav,
    :host(:not([type])[tab-position='top']) .ve-tabs-nav,
    :host([type='line']:not([tab-position])) .ve-tabs-nav,
    :host([type='line'][tab-position='top']) .ve-tabs-nav {
      inline-size: 100%;
      align-self: stretch;
      border-block-end: var(--ve-tabs-current-nav-border-width) solid
        var(--ve-tabs-nav-border-color);
    }

    :host(:not([type])[tab-position='bottom']) .ve-tabs-nav,
    :host([type='line'][tab-position='bottom']) .ve-tabs-nav {
      inline-size: 100%;
      align-self: stretch;
      border-block-start: var(--ve-tabs-current-nav-border-width) solid
        var(--ve-tabs-nav-border-color);
    }

    :host([tab-position='left']) .ve-tabs-nav,
    :host([tab-position='right']) .ve-tabs-nav {
      flex-direction: column;
      align-items: stretch;
      inline-size: max-content;
      min-inline-size: 0;
      flex: none;
    }

    :host(:not([type])[tab-position='left']) .ve-tabs-nav,
    :host([type='line'][tab-position='left']) .ve-tabs-nav {
      border-inline-end: var(--ve-tabs-current-nav-border-width) solid
        var(--ve-tabs-nav-border-color);
    }

    :host(:not([type])[tab-position='right']) .ve-tabs-nav,
    :host([type='line'][tab-position='right']) .ve-tabs-nav {
      border-inline-start: var(--ve-tabs-current-nav-border-width) solid
        var(--ve-tabs-nav-border-color);
    }

    .ve-tabs-tab {
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex: none;
      min-inline-size: 0;
      max-inline-size: 200px;
      min-block-size: var(--ve-tabs-current-height);
      padding-inline: var(--ve-tabs-current-padding-inline);
      padding-block: 0;
      border: none;
      border-radius: var(--ve-tabs-current-radius);
      background: var(--ve-tabs-current-item-background);
      color: var(--ve-tabs-current-item-text);
      font-family: var(--ve-tabs-font-family);
      font-size: var(--ve-tabs-current-font-size);
      font-weight: var(--ve-tabs-font-weight);
      line-height: var(--line-height-body);
      box-shadow: none;
      cursor: pointer;
      user-select: none;
      white-space: nowrap;
      overflow: hidden;
      transition:
        background-color var(--ve-tabs-transition-duration)
          var(--ve-tabs-transition-easing),
        color var(--ve-tabs-transition-duration)
          var(--ve-tabs-transition-easing),
        opacity var(--ve-tabs-transition-duration)
          var(--ve-tabs-transition-easing),
        box-shadow var(--ve-tabs-transition-duration)
          var(--ve-tabs-transition-easing);
    }

    :host(:not([type])) .ve-tabs-tab,
    :host([type='line']) .ve-tabs-tab {
      min-block-size: var(--ve-tabs-current-height);
      padding-inline: 0;
      border-radius: 0;
      background: transparent;
    }

    :host(:not([type]):not([tab-position])) .ve-tabs-tab-content::after,
    :host(:not([type])[tab-position='top']) .ve-tabs-tab-content::after,
    :host([type='line']:not([tab-position])) .ve-tabs-tab-content::after,
    :host([type='line'][tab-position='top']) .ve-tabs-tab-content::after,
    :host(:not([type])[tab-position='bottom']) .ve-tabs-tab-content::after,
    :host([type='line'][tab-position='bottom']) .ve-tabs-tab-content::after {
      content: '';
      position: absolute;
      pointer-events: none;
      background: var(--ve-tabs-indicator-color);
      opacity: 0;
      border-radius: var(--ve-tabs-indicator-thickness);
      transition: opacity var(--ve-tabs-transition-duration)
        var(--ve-tabs-transition-easing);
    }

    :host(:not([type]):not([tab-position])) .ve-tabs-tab,
    :host(:not([type])[tab-position='top']) .ve-tabs-tab,
    :host([type='line']:not([tab-position])) .ve-tabs-tab,
    :host([type='line'][tab-position='top']) .ve-tabs-tab {
      margin-block-end: calc(var(--ve-tabs-current-nav-border-width) * -1);
    }

    :host(:not([type]):not([tab-position])) .ve-tabs-tab-content::after,
    :host(:not([type])[tab-position='top']) .ve-tabs-tab-content::after,
    :host([type='line']:not([tab-position])) .ve-tabs-tab-content::after,
    :host([type='line'][tab-position='top']) .ve-tabs-tab-content::after {
      inset-inline: 0;
      inset-block-end: 0;
      block-size: var(--ve-tabs-indicator-thickness);
    }

    :host(:not([type])[tab-position='bottom']) .ve-tabs-tab,
    :host([type='line'][tab-position='bottom']) .ve-tabs-tab {
      margin-block-start: calc(var(--ve-tabs-current-nav-border-width) * -1);
    }

    :host(:not([type])[tab-position='bottom']) .ve-tabs-tab-content::after,
    :host([type='line'][tab-position='bottom']) .ve-tabs-tab-content::after {
      inset-inline: 0;
      inset-block-start: 0;
      block-size: var(--ve-tabs-indicator-thickness);
    }

    :host(:not([type])[tab-position='left']) .ve-tabs-tab,
    :host(:not([type])[tab-position='right']) .ve-tabs-tab,
    :host([type='line'][tab-position='left']) .ve-tabs-tab,
    :host([type='line'][tab-position='right']) .ve-tabs-tab {
      inline-size: 100%;
      min-block-size: auto;
      padding-block: var(--ve-tabs-item-padding-block-line-vertical);
      justify-content: flex-start;
    }

    :host(:not([type])[tab-position='left']) .ve-tabs-tab,
    :host([type='line'][tab-position='left']) .ve-tabs-tab {
      padding-inline: var(--ve-tabs-item-padding-inline-line-vertical-start)
        var(--ve-tabs-item-padding-inline-line-vertical-end);
      margin-inline-end: calc(var(--ve-tabs-current-nav-border-width) * -1);
    }

    :host(:not([type])[tab-position='left']) .ve-tabs-tab::after,
    :host([type='line'][tab-position='left']) .ve-tabs-tab::after,
    :host(:not([type])[tab-position='right']) .ve-tabs-tab::after,
    :host([type='line'][tab-position='right']) .ve-tabs-tab::after {
      content: '';
      position: absolute;
      pointer-events: none;
      background: var(--ve-tabs-indicator-color);
      opacity: 0;
      border-radius: var(--ve-tabs-indicator-thickness);
      transition: opacity var(--ve-tabs-transition-duration)
        var(--ve-tabs-transition-easing);
    }

    :host(:not([type])[tab-position='left']) .ve-tabs-tab::after,
    :host([type='line'][tab-position='left']) .ve-tabs-tab::after {
      inset-block-start: 0;
      inset-block-end: 0;
      inset-inline-end: 0;
      inline-size: var(--ve-tabs-indicator-thickness);
    }

    :host(:not([type])[tab-position='right']) .ve-tabs-tab,
    :host([type='line'][tab-position='right']) .ve-tabs-tab {
      padding-inline: var(--ve-tabs-item-padding-inline-line-vertical-end)
        var(--ve-tabs-item-padding-inline-line-vertical-start);
      margin-inline-start: calc(var(--ve-tabs-current-nav-border-width) * -1);
    }

    :host(:not([type])[tab-position='right']) .ve-tabs-tab::after,
    :host([type='line'][tab-position='right']) .ve-tabs-tab::after {
      inset-block: 0;
      inset-inline-start: 0;
      inline-size: var(--ve-tabs-indicator-thickness);
    }

    :host([type='text']) .ve-tabs-nav {
      border: none;
    }

    :host([type='text']) .ve-tabs-tab {
      padding-inline: 0;
    }

    :host([type='rounded']) .ve-tabs-nav {
      border: none;
    }

    :host([type='capsule']) .ve-tabs-nav {
      border: none;
    }

    :host([tab-position='left']) .ve-tabs-tab,
    :host([tab-position='right']) .ve-tabs-tab {
      justify-content: flex-start;
    }

    .ve-tabs-tab:focus-visible {
      outline: none;
    }

    .ve-tabs-tab-selected {
      background: var(--ve-tabs-current-item-background-active);
      color: var(--ve-tabs-current-item-text-active);
      box-shadow: inset 0 0 0 var(--ve-tabs-active-inner-border-width)
        var(--ve-tabs-current-active-inner-border-color);
      font-weight: var(--ve-tabs-font-weight-active);
    }

    .ve-tabs-tab-selected .ve-tabs-tab-content {
      font-weight: var(--ve-tabs-font-weight-active);
    }

    :host(:not([type])) .ve-tabs-tab-selected::after,
    :host([type='line']) .ve-tabs-tab-selected::after {
      opacity: 1;
    }

    :host(:not([type]))
      .ve-tabs-tab-selected
      .ve-tabs-tab-content::after,
    :host([type='line']) .ve-tabs-tab-selected .ve-tabs-tab-content::after {
      opacity: 1;
    }

    :host(:not([type])) .ve-tabs-tab-selected,
    :host([type='line']) .ve-tabs-tab-selected {
      background: transparent;
      color: var(--ve-tabs-current-item-text-active);
      z-index: 1;
    }

    .ve-tabs-tab-disabled {
      opacity: var(--ve-tabs-disabled-opacity);
      color: var(--ve-tabs-current-item-text-disabled);
      cursor: not-allowed;
      pointer-events: none;
    }

    .ve-tabs-tab-disabled.ve-tabs-tab-selected {
      background: var(--ve-tabs-current-item-background);
      color: var(--ve-tabs-current-item-text-disabled);
      box-shadow: none;
      font-weight: var(--ve-tabs-font-weight);
    }

    :host(:not([type])) .ve-tabs-tab-disabled.ve-tabs-tab-selected::after,
    :host([type='line']) .ve-tabs-tab-disabled.ve-tabs-tab-selected::after {
      opacity: 0;
    }

    :host(:not([type]))
      .ve-tabs-tab-disabled.ve-tabs-tab-selected
      .ve-tabs-tab-content::after,
    :host([type='line'])
      .ve-tabs-tab-disabled.ve-tabs-tab-selected
      .ve-tabs-tab-content::after {
      opacity: 0;
    }

    .ve-tabs-tab:not(.ve-tabs-tab-disabled):hover,
    .ve-tabs-tab:not(.ve-tabs-tab-disabled):focus-visible {
      background: var(--ve-tabs-current-item-background-hover);
      color: var(--ve-tabs-current-item-text-hover);
    }

    .ve-tabs-tab-selected:not(.ve-tabs-tab-disabled):hover {
      background: var(--ve-tabs-current-item-background-active);
      color: var(--ve-tabs-current-item-text-active);
    }

    .ve-tabs-tab:not(.ve-tabs-tab-disabled):active {
      color: var(--ve-tabs-current-item-text-active);
    }

    .ve-tabs-tab-content {
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: var(--space-xxxs);
      min-inline-size: 0;
      max-inline-size: 200px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: inherit;
      font-weight: inherit;
    }

    :host(:not([type])) .ve-tabs-tab-content,
    :host([type='line']) .ve-tabs-tab-content {
      flex: 1 1 auto;
      padding-inline: 0;
    }

    :host(:not([type]):not([tab-position])) .ve-tabs-tab-content,
    :host(:not([type])[tab-position='top']) .ve-tabs-tab-content,
    :host([type='line']:not([tab-position])) .ve-tabs-tab-content,
    :host([type='line'][tab-position='top']) .ve-tabs-tab-content,
    :host(:not([type])[tab-position='bottom']) .ve-tabs-tab-content,
    :host([type='line'][tab-position='bottom']) .ve-tabs-tab-content {
      min-block-size: var(--ve-tabs-current-height);
    }

    .ve-tabs-panels {
      min-inline-size: 0;
      min-block-size: 0;
      flex: 1 1 auto;
      background: var(--ve-tabs-panels-background);
    }

    :host(:not([tab-position])) .ve-tabs-panels,
    :host([tab-position='top']) .ve-tabs-panels,
    :host([tab-position='bottom']) .ve-tabs-panels {
      padding-inline: 0;
    }

    ::slotted(ve-tab-pane) {
      box-sizing: border-box;
      padding-block: var(--ve-tabs-content-padding-block);
      padding-inline: var(--ve-tabs-content-padding-inline);
      border-radius: var(--ve-tabs-pane-radius);
      color: var(--ve-tabs-pane-text-color);
      font-size: var(--ve-tabs-pane-font-size);
    }
  `];function M(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function A(e){if(Object(e)!==e)throw TypeError("right-hand side of 'in' should be an object, got "+(null!==e?typeof e:"null"));return e}function I(e,t,r){"symbol"==typeof t&&(t=(t=t.description)?"["+t+"]":"");try{Object.defineProperty(e,"name",{configurable:!0,value:r?r+" "+t:t})}catch(n){}return e}let P,T,$,R,D,F,L,V,j,q,H,B,N,W,K,U,Z,G,J,X,Y,Q,ee,te,re,ne,oe;const ie="ve-tabs";P=(0,a.MZ)({type:String,attribute:"active-tab"}),T=(0,a.MZ)({type:String,attribute:"default-active-tab"}),$=(0,a.MZ)({type:String,reflect:!0,useDefault:!0}),R=(0,a.MZ)({type:String,reflect:!0,useDefault:!0}),D=(0,a.MZ)({type:String,attribute:"tab-position",reflect:!0,useDefault:!0}),F=(0,a.KN)({flatten:!0,selector:k}),L=(0,a.wk)(),V=(0,a.wk)(),j=(0,a.wk)();class ae extends c.IB{static{({e:[q,H,B,N,W,K,U,Z,G,J,X,Y,Q,ee,te,re,ne,oe]}=function(e,t,r,n,o,i){var a,s,l,c,d,u,v,h=Symbol.metadata||Symbol.for("Symbol.metadata"),p=Object.defineProperty,g=Object.create,b=[g(null),g(null)],m=t.length;function f(t,r,n){return function(o,i){r&&(i=o,o=e);for(var a=0;a<t.length;a++)i=t[a].apply(o,n?[i]:[]);return n?i:o}}function _(e,t,r,n){if("function"!=typeof e&&(n||void 0!==e))throw new TypeError(t+" must "+(r||"be")+" a function"+(n?"":" or undefined"));return e}function w(e,t,r,n,o,i,l,c,d,u,v){function h(e){if(!v(e))throw new TypeError("Attempted to access private element on non-instance")}var g=[].concat(t[0]),m=t[3],w=!l,y=1===o,x=3===o,k=4===o,S=2===o;function C(t,r,n){return function(o,i){return r&&(i=o,o=e),n&&n(o),desc[t].call(o,i)}}var z={},E=[],O=x?"get":k||y?"set":"value";if(!w&&(d?(u||y?z={get:I(function(){return m(this)},n,"get"),set:function(e){t[4](this,e)}}:z[O]=m,u||I(z[O],n,S?"":O)):u||(z=Object.getOwnPropertyDescriptor(e,n)),!u&&!d)){if((s=b[+c][n])&&7!==(s^o))throw new Error("Decorating two elements with the same name ("+z[O].name+") is not supported yet");b[+c][n]=o<3?1:o}for(var M=e,A=g.length-1;A>=0;A-=r?2:1){var P=_(g[A],"A decorator","be",!0),T=r?g[A-1]:void 0,$={},R={kind:["field","accessor","method","getter","setter","class"][o],name:n,metadata:a,addInitializer:function(e,t){if(e.v)throw new TypeError("attempted to call addInitializer after decoration was finished");_(t,"An initializer","be",!0),i.push(t)}.bind(null,$)};if(w)s=P.call(T,M,R),$.v=1,_(s,"class decorators","return")&&(M=s);else if(R.static=c,R.private=d,s=R.access={has:d?v.bind():function(e){return n in e}},k||(s.get=d?S?function(e){return h(e),z.value}:C("get",0,h):function(e){return e[n]}),S||x||(s.set=d?C("set",0,h):function(e,t){e[n]=t}),M=P.call(T,y?{get:z.get,set:z.set}:z[O],R),$.v=1,y){if("object"==typeof M&&M)(s=_(M.get,"accessor.get"))&&(z.get=s),(s=_(M.set,"accessor.set"))&&(z.set=s),(s=_(M.init,"accessor.init"))&&E.unshift(s);else if(void 0!==M)throw new TypeError("accessor decorators must return an object with get, set, or init properties or undefined")}else _(M,(u?"field":"method")+" decorators","return")&&(u?E.unshift(M):z[O]=M)}return o<2&&l.push(f(E,c,1),f(i,c,0)),u||w||(d?y?l.splice(-1,0,C("get",c),C("set",c)):l.push(S?z[O]:_.call.bind(z[O])):p(e,n,z)),M}function y(e){return p(e,h,{configurable:!0,enumerable:!0,value:a})}return void 0!==i&&(a=i[h]),a=g(null==a?null:a),d=[],u=function(e){e&&d.push(f(e))},(v=function(t,n){for(var i=0;i<r.length;i++){var a=r[i],s=a[1],u=7&s;if((8&s)==t&&!u==n){var v=a[2],h=!!a[3],p=16&s;w(t?e:e.prototype,a,p,h?"#"+v:M(v),u,u<2?[]:t?c=c||[]:l=l||[],d,!!t,h,n,t&&h?function(t){return A(t)===e}:o)}}})(8,0),v(0,0),v(8,1),v(0,1),u(l),u(c),s=d,m||y(e),{e:s,get c(){var r=[];return m&&[y(e=w(e,[t],n,e.name,5,r)),f(r,1)]}}}(this,[],[[P,1,"activeTab"],[T,1,"defaultActiveTab"],[$,1,"size"],[R,1,"type"],[D,1,"tabPosition"],[F,1,"paneElements"],[L,1,"innerActiveKey"],[V,1,"focusKey"],[j,1,"resolvedActiveKey"]]))}static styles=O;static dependencies={[k]:C};#At=(()=>{const e=q(this,void 0);return H(this),e})();get activeTab(){return this.#At}set activeTab(e){this.#At=e}#It=(()=>{const e=B(this,"");return N(this),e})();get defaultActiveTab(){return this.#It}set defaultActiveTab(e){this.#It=e}#Pt=(()=>{const e=W(this,"default");return K(this),e})();get size(){return this.#Pt}set size(e){this.#Pt=e}#Tt=(()=>{const e=U(this,"line");return Z(this),e})();get type(){return this.#Tt}set type(e){this.#Tt=e}#$t=(()=>{const e=G(this,"top");return J(this),e})();get tabPosition(){return this.#$t}set tabPosition(e){this.#$t=e}#Rt=(()=>{const e=X(this);return Y(this),e})();get paneElements(){return this.#Rt}set paneElements(e){this.#Rt=e}#Dt=(()=>{const e=Q(this,"");return ee(this),e})();get innerActiveKey(){return this.#Dt}set innerActiveKey(e){this.#Dt=e}#Ft=(()=>{const e=te(this,"");return re(this),e})();get focusKey(){return this.#Ft}set focusKey(e){this.#Ft=e}#Lt=(()=>{const e=ne(this,"");return oe(this),e})();get resolvedActiveKey(){return this.#Lt}set resolvedActiveKey(e){this.#Lt=e}paneCache=[];enabledPaneCache=[];get panes(){return this.paneCache}get enabledPanes(){return this.enabledPaneCache}get isControlled(){return"string"==typeof this.activeTab}addEventListener(e,t,r){super.addEventListener(e,t,r)}removeEventListener(e,t,r){super.removeEventListener(e,t,r)}connectedCallback(){super.connectedCallback(),this.innerActiveKey=this.defaultActiveTab,this.addEventListener(S,this.handlePaneChange)}disconnectedCallback(){this.removeEventListener(S,this.handlePaneChange),super.disconnectedCallback()}firstUpdated(){this.syncFromPaneStructure(!1)}updated(e){super.updated(e),(e.has("activeTab")||e.has("defaultActiveTab")||e.has("innerActiveKey")||e.has("resolvedActiveKey"))&&(this.syncActiveState(),this.syncPanePresentation())}handleSlotChange(){this.syncFromPaneStructure()}handlePaneChange=e=>{e.target instanceof C&&this.syncFromPaneStructure()};syncFromPaneStructure(e=!0){this.refreshPaneCache(),this.warnInvalidPanes(),this.syncActiveState(),this.syncPanePresentation(),e&&this.requestUpdate()}refreshPaneCache(){this.paneCache=[...this.paneElements],this.enabledPaneCache=this.paneCache.filter(e=>Boolean(e.key)&&!e.disabled)}warnInvalidPanes(){const e=new Set;for(const t of this.panes)t.key?e.has(t.key)?console.warn(`[${ie}] Duplicate pane key "${t.key}" detected. Keys must be unique.`,t):e.add(t.key):console.warn(`[${ie}] Each [${t.tagName.toLowerCase()}] requires a non-empty key attribute.`,t)}syncActiveState(){const e=function({panes:e,activeTab:t,defaultActiveTab:r,innerActiveKey:n,focusKey:o}){const i=e.filter(z);if(0===i.length)return{resolvedActiveKey:"",nextInnerActiveKey:"",nextFocusKey:""};const a="string"==typeof t,s=a?t??"":n,l=i.find(e=>e.key===s),c=r?i.find(e=>e.key===r):void 0,d=i[0],u=l?.key??c?.key??d?.key??"";return{resolvedActiveKey:u,nextInnerActiveKey:a?n:u,nextFocusKey:i.some(e=>e.key===o)?o:u}}({panes:this.panes,activeTab:this.activeTab,defaultActiveTab:this.defaultActiveTab,innerActiveKey:this.innerActiveKey,focusKey:this.focusKey});this.resolvedActiveKey!==e.resolvedActiveKey&&(this.resolvedActiveKey=e.resolvedActiveKey),this.innerActiveKey!==e.nextInnerActiveKey&&(this.innerActiveKey=e.nextInnerActiveKey),this.focusKey!==e.nextFocusKey&&(this.focusKey=e.nextFocusKey)}syncPanePresentation(){const e=this.resolvedActiveKey;for(const t of this.panes){const r=t.key===e&&!t.disabled;t.id=t.panelId,t.hidden=!r,t.setAttribute("role","tabpanel"),t.setAttribute("aria-labelledby",t.tabId),t.setAttribute("aria-hidden",r?"false":"true"),t.setAttribute("data-active",r?"true":"false"),t.setAttribute("part","panel")}}setActiveKey(e,t=!1){e&&this.resolvedActiveKey!==e&&(this.isControlled||(this.innerActiveKey=e,this.resolvedActiveKey=e),this.focusKey=e,t&&this.dispatchEvent(new CustomEvent("ve-change",{detail:{activeTab:e},bubbles:!0,composed:!0})))}focusTabByKey(e){this.updateComplete.then(()=>{const t=this.renderRoot.querySelector(`[data-key="${CSS.escape(e)}"]`);t?.focus()})}moveFocus(e,t){const r=this.enabledPanes;if(0===r.length)return;const n=Math.max(0,r.findIndex(t=>t.key===e)),o=r[(n+t+r.length)%r.length];o&&(this.focusKey=o.key,this.focusTabByKey(o.key))}handleTabClick(e){e.disabled||this.setActiveKey(e.key,!0)}handleTabKeydown(e,t){const r="top"===this.tabPosition||"bottom"===this.tabPosition;switch(e.key){case"ArrowRight":r&&(e.preventDefault(),this.moveFocus(t.key,1));break;case"ArrowLeft":r&&(e.preventDefault(),this.moveFocus(t.key,-1));break;case"ArrowDown":r||(e.preventDefault(),this.moveFocus(t.key,1));break;case"ArrowUp":r||(e.preventDefault(),this.moveFocus(t.key,-1));break;case"Home":{e.preventDefault();const t=this.enabledPanes[0];if(!t)return;this.focusKey=t.key,this.focusTabByKey(t.key);break}case"End":{e.preventDefault();const t=this.enabledPanes,r=t[t.length-1];if(!r)return;this.focusKey=r.key,this.focusTabByKey(r.key);break}case"Enter":case" ":e.preventDefault(),this.handleTabClick(t)}}cloneTabNode(e){const t=e.cloneNode(!0);return t instanceof Element&&t.removeAttribute("slot"),t}renderTabLabel(e){const t=e.getTabNodes();return 0===t.length?e.title:(0,l.u)(t,(t,r)=>`${e.key}-${r}`,e=>this.cloneTabNode(e))}renderTabs(){return(0,l.u)(this.panes,e=>e.key,e=>{const t=this.resolvedActiveKey===e.key,r=this.focusKey?this.focusKey===e.key:t;return i.qy`
          <button
            class=${(0,s.H)({"ve-tabs-tab":!0,"ve-tabs-tab-selected":t,"ve-tabs-tab-disabled":e.disabled})}
            part="tab"
            id=${e.tabId}
            type="button"
            role="tab"
            data-key=${e.key}
            aria-selected=${t?"true":"false"}
            aria-controls=${e.panelId}
            aria-disabled=${e.disabled?"true":"false"}
            tabindex=${r&&!e.disabled?"0":"-1"}
            @click=${()=>this.handleTabClick(e)}
            @keydown=${t=>this.handleTabKeydown(t,e)}
          >
            <span class="ve-tabs-tab-content" part="tab-content"
              >${this.renderTabLabel(e)}</span
            >
          </button>
        `})}renderPanels(){return i.qy` <slot @slotchange=${this.handleSlotChange}></slot> `}render(){return i.qy`
      <div class="ve-tabs">
        <div
          class="ve-tabs-nav"
          part="nav"
          role="tablist"
          aria-orientation=${"left"===this.tabPosition||"right"===this.tabPosition?"vertical":"horizontal"}
        >
          ${this.renderTabs()}
        </div>
        <div class="ve-tabs-panels" part="panels">${this.renderPanels()}</div>
      </div>
    `}}(0,c.Xq)(ie,ae),(0,c.Xq)(k,C);var se=r(35780),le=r(74410);const ce=(0,se.h)({tagName:ie,elementClass:ae,react:o,events:{onChange:"ve-change"},ownEvents:["onChange"]}),de=(0,se.h)({tagName:k,elementClass:C,react:o,events:{onPaneChange:"ve-tab-pane-change"},ownEvents:["onPaneChange"]}),ue=n.forwardRef(({itemKey:e,tab:t,children:r,...o},i)=>{const a=(0,le.R2)(i);return(0,le.B5)(a,e),n.createElement(de,{...o,ref:a},(0,le.RG)("tab",t),r)});ue.displayName="TabPane"},94354(e,t,r){r.d(t,{v:()=>Z});var n=r(30758),o=r.t(n,2),i=r(46140),a=r(45080),s=r(81782),l=r(61834),c=r(94023),d=r(39625),u=r(33254),v=r(53152),h=r(17400),p=r(40362);const g=a.AH`
  :host {
    --ve-tag-height: 22px;
    --ve-tag-padding-inline: calc(var(--space-xxs) - var(--stroke-weight-bold));
    --ve-tag-gap: var(--space-xxxs);
    --ve-tag-radius: var(--radius-sm);
    --ve-tag-font-family: var(--font-sans);
    --ve-tag-font-size: var(--text-caption);
    --ve-tag-font-weight: var(--font-weight-normal);
    --ve-tag-line-height: var(--line-height-body);
    --ve-tag-background: var(--color-bg-surface);
    --ve-tag-text-color: var(--color-text-secondary);
    --ve-tag-border-color: var(--color-border-default);
    --ve-tag-border-width: var(--stroke-weight-base);
    --ve-tag-icon-size: 14px;
    --ve-tag-close-size: 12px;
    --ve-tag-close-icon-size: 12px;
    --ve-tag-focus-ring-width: var(--stroke-weight-bold);
    --ve-tag-focus-ring-color: color-mix(
      in srgb,
      var(--ve-tag-current-text-color) 24%,
      transparent
    );

    --ve-tag-status-success-background: var(--color-bg-success-secondary);
    --ve-tag-status-success-text-color: var(--color-text-success);
    --ve-tag-status-success-border-color: var(--color-border-success);
    --ve-tag-status-warning-background: var(--color-bg-warning-secondary);
    --ve-tag-status-warning-text-color: var(--color-text-warning);
    --ve-tag-status-warning-border-color: var(--color-border-warning);
    --ve-tag-status-error-background: var(--color-bg-danger-secondary);
    --ve-tag-status-error-text-color: var(--color-text-danger);
    --ve-tag-status-error-border-color: var(--color-border-danger);

    --ve-tag-current-background: var(--ve-tag-background);
    --ve-tag-current-text-color: var(--ve-tag-text-color);
    --ve-tag-current-border-color: transparent;
    --ve-tag-current-close-color: var(--ve-tag-current-text-color);
  }

  :host([size='small']) {
    --ve-tag-height: 16px;
    --ve-tag-padding-inline: calc(var(--space-xxs) - var(--stroke-weight-bold));
    --ve-tag-radius: var(--radius-xs);
    --ve-tag-font-size: calc(var(--text-caption) - var(--stroke-weight-bold));
    --ve-tag-icon-size: 12px;
    --ve-tag-close-size: 10px;
    --ve-tag-close-icon-size: 10px;
  }

  :host([size='medium']) {
    --ve-tag-height: 18px;
    --ve-tag-padding-inline: calc(var(--space-xxs) - var(--stroke-weight-bold));
    --ve-tag-radius: var(--radius-xs);
    --ve-tag-font-size: calc(var(--text-caption) - var(--stroke-weight-bold));
    --ve-tag-icon-size: 12px;
    --ve-tag-close-size: 10px;
    --ve-tag-close-icon-size: 10px;
  }

  :host([size='large']) {
    --ve-tag-height: 24px;
    --ve-tag-padding-inline: var(--space-xxs);
    --ve-tag-radius: var(--radius-sm);
    --ve-tag-font-size: var(--text-body-sm);
    --ve-tag-icon-size: 14px;
    --ve-tag-close-size: 12px;
    --ve-tag-close-icon-size: 12px;
  }

  :host([bordered]) {
    --ve-tag-current-border-color: var(--ve-tag-border-color);
  }

  :host([status='success']) {
    --ve-tag-current-background: var(--ve-tag-status-success-background);
    --ve-tag-current-text-color: var(--ve-tag-status-success-text-color);
  }

  :host([status='warning']) {
    --ve-tag-current-background: var(--ve-tag-status-warning-background);
    --ve-tag-current-text-color: var(--ve-tag-status-warning-text-color);
  }

  :host([status='error']) {
    --ve-tag-current-background: var(--ve-tag-status-error-background);
    --ve-tag-current-text-color: var(--ve-tag-status-error-text-color);
  }

  :host([status='success'][bordered]) {
    --ve-tag-current-border-color: var(--ve-tag-status-success-border-color);
  }

  :host([status='warning'][bordered]) {
    --ve-tag-current-border-color: var(--ve-tag-status-warning-border-color);
  }

  :host([status='error'][bordered]) {
    --ve-tag-current-border-color: var(--ve-tag-status-error-border-color);
  }

  @supports not (color: color-mix(in srgb, red, blue)) {
    :host {
      --ve-tag-focus-ring-color: var(--ve-tag-current-text-color);
    }
  }
`,b=[c.H6,g,a.AH`
    :host {
      display: inline-flex;
      vertical-align: middle;
    }

    :host([hidden]) {
      display: none;
    }

    .ve-tag {
      display: inline-flex;
      align-items: center;
      gap: var(--ve-tag-gap);
      box-sizing: border-box;
      block-size: var(--ve-tag-height);
      max-inline-size: 100%;
      padding-inline: var(--ve-tag-padding-inline);
      border: var(--ve-tag-border-width) solid
        var(--ve-tag-current-border-color);
      border-radius: var(--ve-tag-radius);
      background: var(--ve-tag-current-background);
      color: var(--ve-tag-current-text-color);
      font-family: var(--ve-tag-font-family);
      font-size: var(--ve-tag-font-size);
      font-weight: var(--ve-tag-font-weight);
      line-height: var(--ve-tag-line-height);
      white-space: nowrap;
      overflow: hidden;
      transition:
        background-color var(--motion-fast) ease,
        border-color var(--motion-fast) ease,
        color var(--motion-fast) ease,
        box-shadow var(--motion-fast) ease;
      outline: none;
    }

    .ve-tag-control {
      display: inline-flex;
      align-items: center;
      gap: var(--ve-tag-gap);
      min-inline-size: 0;
      color: inherit;
      outline: none;
    }

    .ve-tag-icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex: none;
      inline-size: var(--ve-tag-icon-size);
      block-size: var(--ve-tag-icon-size);
      color: inherit;
      line-height: 0;
      --ve-icon-size: var(--ve-tag-icon-size);
    }

    .ve-tag-icon ::slotted(*) {
      flex: none;
      inline-size: var(--ve-tag-icon-size);
      block-size: var(--ve-tag-icon-size);
      color: inherit;
      line-height: 0;
    }


    .ve-tag-label {
      display: block;
      min-inline-size: 0;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .ve-tag-close {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex: none;
      inline-size: var(--ve-tag-close-size);
      block-size: var(--ve-tag-close-size);
      padding: 0;
      border: none;
      border-radius: var(--radius-full);
      background: transparent;
      color: var(--ve-tag-current-close-color);
      cursor: pointer;
      outline: none;
      transition:
        background-color var(--motion-fast) ease,
        box-shadow var(--motion-fast) ease;
    }

    .ve-tag-close svg {
      inline-size: var(--ve-tag-close-icon-size);
      block-size: var(--ve-tag-close-icon-size);
    }

    .ve-tag-close:hover,
    .ve-tag-close:focus-visible {
      background: color-mix(
        in srgb,
        var(--ve-tag-current-background) var(--state-hover-subtle-ratio),
        var(--state-hover-subtle-mix)
      );
    }

    .ve-tag-close:active {
      background: color-mix(
        in srgb,
        var(--ve-tag-current-background) var(--state-pressed-subtle-ratio),
        var(--state-pressed-subtle-mix)
      );
    }

    @supports not (color: color-mix(in srgb, red, blue)) {
      .ve-tag-close:hover,
      .ve-tag-close:focus-visible {
        background: var(--ve-tag-current-background);
      }

      .ve-tag-close:active {
        background: var(--ve-tag-current-background);
      }
    }
  `];function m(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function f(e){if(Object(e)!==e)throw TypeError("right-hand side of 'in' should be an object, got "+(null!==e?typeof e:"null"));return e}function _(e,t,r){"symbol"==typeof t&&(t=(t=t.description)?"["+t+"]":"");try{Object.defineProperty(e,"name",{configurable:!0,value:r?r+" "+t:t})}catch(n){}return e}let w,y,x,k,S,C,z,E,O,M,A,I,P,T,$,R,D,F,L,V,j,q,H,B;const N={success:d.successIcon,warning:u.warningIcon,error:v.errorIcon};w=(0,l.MZ)({type:String,reflect:!0}),y=(0,l.MZ)({type:String,attribute:"bg-color",reflect:!0}),x=(0,l.MZ)({type:String,reflect:!0}),k=(0,l.MZ)({type:String,reflect:!0,useDefault:!0}),S=(0,l.MZ)({type:Boolean,reflect:!0}),C=(0,l.MZ)({type:Boolean,reflect:!0}),z=(0,l.P)('slot[name="icon"]'),E=(0,l.wk)();class W extends c.IB{static{({e:[O,M,A,I,P,T,$,R,D,F,L,V,j,q,H,B]}=function(e,t,r,n,o,i){var a,s,l,c,d,u,v,h=Symbol.metadata||Symbol.for("Symbol.metadata"),p=Object.defineProperty,g=Object.create,b=[g(null),g(null)],w=t.length;function y(t,r,n){return function(o,i){r&&(i=o,o=e);for(var a=0;a<t.length;a++)i=t[a].apply(o,n?[i]:[]);return n?i:o}}function x(e,t,r,n){if("function"!=typeof e&&(n||void 0!==e))throw new TypeError(t+" must "+(r||"be")+" a function"+(n?"":" or undefined"));return e}function k(e,t,r,n,o,i,l,c,d,u,v){function h(e){if(!v(e))throw new TypeError("Attempted to access private element on non-instance")}var g=[].concat(t[0]),m=t[3],f=!l,w=1===o,k=3===o,S=4===o,C=2===o;function z(t,r,n){return function(o,i){return r&&(i=o,o=e),n&&n(o),desc[t].call(o,i)}}var E={},O=[],M=k?"get":S||w?"set":"value";if(!f&&(d?(u||w?E={get:_(function(){return m(this)},n,"get"),set:function(e){t[4](this,e)}}:E[M]=m,u||_(E[M],n,C?"":M)):u||(E=Object.getOwnPropertyDescriptor(e,n)),!u&&!d)){if((s=b[+c][n])&&7!==(s^o))throw new Error("Decorating two elements with the same name ("+E[M].name+") is not supported yet");b[+c][n]=o<3?1:o}for(var A=e,I=g.length-1;I>=0;I-=r?2:1){var P=x(g[I],"A decorator","be",!0),T=r?g[I-1]:void 0,$={},R={kind:["field","accessor","method","getter","setter","class"][o],name:n,metadata:a,addInitializer:function(e,t){if(e.v)throw new TypeError("attempted to call addInitializer after decoration was finished");x(t,"An initializer","be",!0),i.push(t)}.bind(null,$)};if(f)s=P.call(T,A,R),$.v=1,x(s,"class decorators","return")&&(A=s);else if(R.static=c,R.private=d,s=R.access={has:d?v.bind():function(e){return n in e}},S||(s.get=d?C?function(e){return h(e),E.value}:z("get",0,h):function(e){return e[n]}),C||k||(s.set=d?z("set",0,h):function(e,t){e[n]=t}),A=P.call(T,w?{get:E.get,set:E.set}:E[M],R),$.v=1,w){if("object"==typeof A&&A)(s=x(A.get,"accessor.get"))&&(E.get=s),(s=x(A.set,"accessor.set"))&&(E.set=s),(s=x(A.init,"accessor.init"))&&O.unshift(s);else if(void 0!==A)throw new TypeError("accessor decorators must return an object with get, set, or init properties or undefined")}else x(A,(u?"field":"method")+" decorators","return")&&(u?O.unshift(A):E[M]=A)}return o<2&&l.push(y(O,c,1),y(i,c,0)),u||f||(d?w?l.splice(-1,0,z("get",c),z("set",c)):l.push(C?E[M]:x.call.bind(E[M])):p(e,n,E)),A}function S(e){return p(e,h,{configurable:!0,enumerable:!0,value:a})}return void 0!==i&&(a=i[h]),a=g(null==a?null:a),d=[],u=function(e){e&&d.push(y(e))},(v=function(t,n){for(var i=0;i<r.length;i++){var a=r[i],s=a[1],u=7&s;if((8&s)==t&&!u==n){var v=a[2],h=!!a[3],p=16&s;k(t?e:e.prototype,a,p,h?"#"+v:m(v),u,u<2?[]:t?c=c||[]:l=l||[],d,!!t,h,n,t&&h?function(t){return f(t)===e}:o)}}})(8,0),v(0,0),v(8,1),v(0,1),u(l),u(c),s=d,w||S(e),{e:s,get c(){var r=[];return w&&[S(e=k(e,[t],n,e.name,5,r)),y(r,1)]}}}(this,[],[[w,1,"color"],[y,1,"bgColor"],[x,1,"status"],[k,1,"size"],[S,1,"closable"],[C,1,"bordered"],[z,1,"iconSlot"],[E,1,"hasIconSlot"]]))}static styles=b;static dependencies={[h.v]:h.O};#Vt=(()=>{const e=O(this,"");return M(this),e})();get color(){return this.#Vt}set color(e){this.#Vt=e}#jt=(()=>{const e=A(this,"");return I(this),e})();get bgColor(){return this.#jt}set bgColor(e){this.#jt=e}#qt=(()=>{const e=P(this,"");return T(this),e})();get status(){return this.#qt}set status(e){this.#qt=e}#P=(()=>{const e=$(this,"default");return R(this),e})();get size(){return this.#P}set size(e){this.#P=e}#Ht=(()=>{const e=D(this,!1);return F(this),e})();get closable(){return this.#Ht}set closable(e){this.#Ht=e}#Bt=(()=>{const e=L(this,!1);return V(this),e})();get bordered(){return this.#Bt}set bordered(e){this.#Bt=e}#Nt=(()=>{const e=j(this,null);return q(this),e})();get iconSlot(){return this.#Nt}set iconSlot(e){this.#Nt=e}#Wt=(()=>{const e=H(this,!1);return B(this),e})();get hasIconSlot(){return this.#Wt}set hasIconSlot(e){this.#Wt=e}firstUpdated(){this.syncSlotState()}get normalizedColor(){return(this.color??"").trim()}get normalizedBgColor(){return(this.bgColor??"").trim()}get customColorStyle(){const e={};return this.normalizedColor&&(e["--ve-tag-text-color"]=this.normalizedColor,e["--ve-tag-border-color"]=this.normalizedColor,e["--ve-tag-current-text-color"]=this.normalizedColor,e["--ve-tag-current-close-color"]=this.normalizedColor,this.bordered&&(e["--ve-tag-current-border-color"]=this.normalizedColor)),this.normalizedBgColor&&(e["--ve-tag-background"]=this.normalizedBgColor,e["--ve-tag-current-background"]=this.normalizedBgColor),e}get normalizedStatus(){return"success"===this.status||"warning"===this.status||"error"===this.status?this.status:""}get statusIcon(){const e=this.normalizedStatus;return e?N[e]:void 0}get shouldRenderIcon(){return Boolean(this.statusIcon)||this.hasIconSlot||(0,p.mh)(this,"icon")}syncSlotState(){this.hasIconSlot=(0,p.qi)(this.iconSlot)||(0,p.mh)(this,"icon")}handleIconSlotChange(){this.syncSlotState()}emitClose(e){return this.dispatchEvent(new CustomEvent("ve-close",{detail:{sourceEvent:e},bubbles:!0,composed:!0,cancelable:!0}))}handleCloseClick(e){e.preventDefault(),e.stopPropagation(),this.emitClose(e)}renderLabelContent(){return a.qy`<span class="ve-tag-label" part="label"><slot></slot></span>`}renderIcon(){if(!this.shouldRenderIcon)return a.s6;const e=this.statusIcon;return a.qy`
      <span class="ve-tag-icon" part="icon" aria-hidden="true">
        <slot name="icon" @slotchange=${this.handleIconSlotChange}></slot>
        ${this.hasIconSlot||!e?a.s6:a.qy`<ve-icon .definition=${e}></ve-icon>`}
      </span>
    `}renderCloseButton(){return this.closable?a.qy`
      <button
        class="ve-tag-close"
        part="close"
        type="button"
        aria-label="Close tag"
        @click=${this.handleCloseClick}
      >
        <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
          <path
            d="M4.47 4.47a.75.75 0 0 1 1.06 0L8 6.94l2.47-2.47a.75.75 0 1 1 1.06 1.06L9.06 8l2.47 2.47a.75.75 0 1 1-1.06 1.06L8 9.06l-2.47 2.47a.75.75 0 1 1-1.06-1.06L6.94 8 4.47 5.53a.75.75 0 0 1 0-1.06Z"
            fill="currentColor"
          ></path>
        </svg>
      </button>
    `:a.s6}renderControl(){return a.qy`
      <span class="ve-tag-control" part="control">
        ${this.renderIcon()}
        ${this.renderLabelContent()}
      </span>
    `}render(){return a.qy`
      <span
        class="ve-tag"
        part="container"
        style=${(0,s.W)(this.customColorStyle)}
      >
        ${this.renderControl()}
        ${this.renderCloseButton()}
      </span>
    `}}(0,c.Xq)("ve-tag",W);var K=r(74410);const U=(0,i.a)({tagName:"ve-tag",elementClass:W,react:o,events:{onClose:"ve-close"}}),Z=n.forwardRef(({icon:e,children:t,...r},o)=>n.createElement(U,{...r,ref:o},(0,K.RG)("icon",e),t));Z.displayName="Tag"},76112(e,t,r){function n(e,t,r,n){const o=null==r?"":String(r);t!==o&&(n(o),e.requestUpdate("title",t)),null!==e.getAttribute("title")&&e.removeAttribute("title")}function o(e){let t;const r=()=>{const t=e.getAttribute("title");null!==t&&(e.title=t)},n={hostConnected(){r(),t||"u"<typeof MutationObserver||(t=new MutationObserver(r),t.observe(e,{attributes:!0,attributeFilter:["title"]}))},hostDisconnected(){t?.disconnect(),t=void 0}};e.addController(n)}r.d(t,{e:()=>n,m:()=>o})},53140(e,t,r){r.d(t,{ak:()=>Ht,b1:()=>I,rJ:()=>H});var n=r(45080),o=r(61834),i=r(67286),a=r(67463),s=r(94023),l=r(17400),c=r(87907),d=r(7624),u=r(36832),v=r(93837),h=r(71093),p=r(64006),g=r(43449);function b(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function m(e){if(Object(e)!==e)throw TypeError("right-hand side of 'in' should be an object, got "+(null!==e?typeof e:"null"));return e}function f(e,t,r){"symbol"==typeof t&&(t=(t=t.description)?"["+t+"]":"");try{Object.defineProperty(e,"name",{configurable:!0,value:r?r+" "+t:t})}catch(n){}return e}let _,w,y,x,k,S,C,z,E;const O="ve-select-item",M="ve-select-options-change",A={fromAttribute:e=>null===e||"false"!==e,toAttribute:e=>e?null:"false"};_=(0,o.MZ)(),w=(0,o.MZ)({type:Boolean,reflect:!0}),y=(0,o.MZ)({converter:A});class I extends s.IB{static{({e:[x,k,S,C,z,E]}=function(e,t,r,n,o,i){var a,s,l,c,d,u,v,h=Symbol.metadata||Symbol.for("Symbol.metadata"),p=Object.defineProperty,g=Object.create,_=[g(null),g(null)],w=t.length;function y(t,r,n){return function(o,i){r&&(i=o,o=e);for(var a=0;a<t.length;a++)i=t[a].apply(o,n?[i]:[]);return n?i:o}}function x(e,t,r,n){if("function"!=typeof e&&(n||void 0!==e))throw new TypeError(t+" must "+(r||"be")+" a function"+(n?"":" or undefined"));return e}function k(e,t,r,n,o,i,l,c,d,u,v){function h(e){if(!v(e))throw new TypeError("Attempted to access private element on non-instance")}var g=[].concat(t[0]),b=t[3],m=!l,w=1===o,k=3===o,S=4===o,C=2===o;function z(t,r,n){return function(o,i){return r&&(i=o,o=e),n&&n(o),desc[t].call(o,i)}}var E={},O=[],M=k?"get":S||w?"set":"value";if(!m&&(d?(u||w?E={get:f(function(){return b(this)},n,"get"),set:function(e){t[4](this,e)}}:E[M]=b,u||f(E[M],n,C?"":M)):u||(E=Object.getOwnPropertyDescriptor(e,n)),!u&&!d)){if((s=_[+c][n])&&7!==(s^o))throw new Error("Decorating two elements with the same name ("+E[M].name+") is not supported yet");_[+c][n]=o<3?1:o}for(var A=e,I=g.length-1;I>=0;I-=r?2:1){var P=x(g[I],"A decorator","be",!0),T=r?g[I-1]:void 0,$={},R={kind:["field","accessor","method","getter","setter","class"][o],name:n,metadata:a,addInitializer:function(e,t){if(e.v)throw new TypeError("attempted to call addInitializer after decoration was finished");x(t,"An initializer","be",!0),i.push(t)}.bind(null,$)};if(m)s=P.call(T,A,R),$.v=1,x(s,"class decorators","return")&&(A=s);else if(R.static=c,R.private=d,s=R.access={has:d?v.bind():function(e){return n in e}},S||(s.get=d?C?function(e){return h(e),E.value}:z("get",0,h):function(e){return e[n]}),C||k||(s.set=d?z("set",0,h):function(e,t){e[n]=t}),A=P.call(T,w?{get:E.get,set:E.set}:E[M],R),$.v=1,w){if("object"==typeof A&&A)(s=x(A.get,"accessor.get"))&&(E.get=s),(s=x(A.set,"accessor.set"))&&(E.set=s),(s=x(A.init,"accessor.init"))&&O.unshift(s);else if(void 0!==A)throw new TypeError("accessor decorators must return an object with get, set, or init properties or undefined")}else x(A,(u?"field":"method")+" decorators","return")&&(u?O.unshift(A):E[M]=A)}return o<2&&l.push(y(O,c,1),y(i,c,0)),u||m||(d?w?l.splice(-1,0,z("get",c),z("set",c)):l.push(C?E[M]:x.call.bind(E[M])):p(e,n,E)),A}function S(e){return p(e,h,{configurable:!0,enumerable:!0,value:a})}return void 0!==i&&(a=i[h]),a=g(null==a?null:a),d=[],u=function(e){e&&d.push(y(e))},(v=function(t,n){for(var i=0;i<r.length;i++){var a=r[i],s=a[1],u=7&s;if((8&s)==t&&!u==n){var v=a[2],h=!!a[3],p=16&s;k(t?e:e.prototype,a,p,h?"#"+v:b(v),u,u<2?[]:t?c=c||[]:l=l||[],d,!!t,h,n,t&&h?function(t){return m(t)===e}:o)}}})(8,0),v(0,0),v(8,1),v(0,1),u(l),u(c),s=d,w||S(e),{e:s,get c(){var r=[];return w&&[S(e=k(e,[t],n,e.name,5,r)),y(r,1)]}}}(this,[],[[_,1,"value"],[w,1,"disabled"],[y,1,"closable"]]))}static styles=[s.H6,n.AH`
      :host {
        display: contents;
      }
    `];#e=(()=>{const e=x(this,void 0);return k(this),e})();get value(){return this.#e}set value(e){this.#e=e}#t=(()=>{const e=S(this,!1);return C(this),e})();get disabled(){return this.#t}set disabled(e){this.#t=e}#ue=(()=>{const e=z(this,!0);return E(this),e})();get closable(){return this.#ue}set closable(e){this.#ue=e}get label(){const e=this.textContent?.trim()??"";return e.length>0?e:void 0===this.value?"":String(this.value)}updated(e){super.updated(e),(e.has("value")||e.has("disabled")||e.has("closable"))&&this.dispatchOptionsChange()}dispatchOptionsChange(){this.dispatchEvent(new CustomEvent(M,{bubbles:!0,composed:!0}))}render(){return n.qy`<slot @slotchange=${this.dispatchOptionsChange}></slot>`}}function P(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function T(e){if(Object(e)!==e)throw TypeError("right-hand side of 'in' should be an object, got "+(null!==e?typeof e:"null"));return e}function $(e,t,r){"symbol"==typeof t&&(t=(t=t.description)?"["+t+"]":"");try{Object.defineProperty(e,"name",{configurable:!0,value:r?r+" "+t:t})}catch(n){}return e}let R,D,F,L,V,j;const q="ve-select-group";R=(0,o.MZ)({type:String}),D=(0,o.MZ)({type:Boolean,reflect:!0});class H extends s.IB{static{({e:[F,L,V,j]}=function(e,t,r,n,o,i){var a,s,l,c,d,u,v,h=Symbol.metadata||Symbol.for("Symbol.metadata"),p=Object.defineProperty,g=Object.create,b=[g(null),g(null)],m=t.length;function f(t,r,n){return function(o,i){r&&(i=o,o=e);for(var a=0;a<t.length;a++)i=t[a].apply(o,n?[i]:[]);return n?i:o}}function _(e,t,r,n){if("function"!=typeof e&&(n||void 0!==e))throw new TypeError(t+" must "+(r||"be")+" a function"+(n?"":" or undefined"));return e}function w(e,t,r,n,o,i,l,c,d,u,v){function h(e){if(!v(e))throw new TypeError("Attempted to access private element on non-instance")}var g=[].concat(t[0]),m=t[3],w=!l,y=1===o,x=3===o,k=4===o,S=2===o;function C(t,r,n){return function(o,i){return r&&(i=o,o=e),n&&n(o),desc[t].call(o,i)}}var z={},E=[],O=x?"get":k||y?"set":"value";if(!w&&(d?(u||y?z={get:$(function(){return m(this)},n,"get"),set:function(e){t[4](this,e)}}:z[O]=m,u||$(z[O],n,S?"":O)):u||(z=Object.getOwnPropertyDescriptor(e,n)),!u&&!d)){if((s=b[+c][n])&&7!==(s^o))throw new Error("Decorating two elements with the same name ("+z[O].name+") is not supported yet");b[+c][n]=o<3?1:o}for(var M=e,A=g.length-1;A>=0;A-=r?2:1){var I=_(g[A],"A decorator","be",!0),P=r?g[A-1]:void 0,T={},R={kind:["field","accessor","method","getter","setter","class"][o],name:n,metadata:a,addInitializer:function(e,t){if(e.v)throw new TypeError("attempted to call addInitializer after decoration was finished");_(t,"An initializer","be",!0),i.push(t)}.bind(null,T)};if(w)s=I.call(P,M,R),T.v=1,_(s,"class decorators","return")&&(M=s);else if(R.static=c,R.private=d,s=R.access={has:d?v.bind():function(e){return n in e}},k||(s.get=d?S?function(e){return h(e),z.value}:C("get",0,h):function(e){return e[n]}),S||x||(s.set=d?C("set",0,h):function(e,t){e[n]=t}),M=I.call(P,y?{get:z.get,set:z.set}:z[O],R),T.v=1,y){if("object"==typeof M&&M)(s=_(M.get,"accessor.get"))&&(z.get=s),(s=_(M.set,"accessor.set"))&&(z.set=s),(s=_(M.init,"accessor.init"))&&E.unshift(s);else if(void 0!==M)throw new TypeError("accessor decorators must return an object with get, set, or init properties or undefined")}else _(M,(u?"field":"method")+" decorators","return")&&(u?E.unshift(M):z[O]=M)}return o<2&&l.push(f(E,c,1),f(i,c,0)),u||w||(d?y?l.splice(-1,0,C("get",c),C("set",c)):l.push(S?z[O]:_.call.bind(z[O])):p(e,n,z)),M}function y(e){return p(e,h,{configurable:!0,enumerable:!0,value:a})}return void 0!==i&&(a=i[h]),a=g(null==a?null:a),d=[],u=function(e){e&&d.push(f(e))},(v=function(t,n){for(var i=0;i<r.length;i++){var a=r[i],s=a[1],u=7&s;if((8&s)==t&&!u==n){var v=a[2],h=!!a[3],p=16&s;w(t?e:e.prototype,a,p,h?"#"+v:P(v),u,u<2?[]:t?c=c||[]:l=l||[],d,!!t,h,n,t&&h?function(t){return T(t)===e}:o)}}})(8,0),v(0,0),v(8,1),v(0,1),u(l),u(c),s=d,m||y(e),{e:s,get c(){var r=[];return m&&[y(e=w(e,[t],n,e.name,5,r)),f(r,1)]}}}(this,[],[[R,1,"label"],[D,1,"disabled"]]))}static styles=[s.H6,n.AH`
      :host {
        display: contents;
      }
    `];#k=(()=>{const e=F(this,"");return L(this),e})();get label(){return this.#k}set label(e){this.#k=e}#t=(()=>{const e=V(this,!1);return j(this),e})();get disabled(){return this.#t}set disabled(e){this.#t=e}updated(e){super.updated(e),(e.has("label")||e.has("disabled"))&&this.dispatchOptionsChange()}dispatchOptionsChange(){this.dispatchEvent(new CustomEvent(M,{bubbles:!0,composed:!0}))}render(){return n.qy`<slot @slotchange=${this.dispatchOptionsChange}></slot>`}}const B=n.AH`
  :host {
    --ve-select-font-family: var(--font-sans);
    --ve-select-font-weight: var(--font-weight-normal);
    --ve-select-line-height-small: var(--line-height-body);
    --ve-select-line-height-default: var(--line-height-body);
    --ve-select-line-height-large: var(--line-height-body);

    --ve-select-font-size-small: var(--text-body-sm);
    --ve-select-font-size-default: var(--text-body);
    --ve-select-font-size-large: var(--text-body);

    --ve-select-height-small: var(--height-small);
    --ve-select-height-default: var(--height-default);
    --ve-select-height-large: var(--height-large);

    --ve-select-control-content-padding-inline: var(--space-xxs);
    --ve-select-control-multiple-tag-padding-inline-start: var(--space-xxxs);
    --ve-select-padding-inline-small: var(
      --ve-select-control-content-padding-inline
    );
    --ve-select-padding-inline-default: var(
      --ve-select-control-content-padding-inline
    );
    --ve-select-padding-inline-large: var(
      --ve-select-control-content-padding-inline
    );
    --ve-select-padding-block-small: var(--space-xxxs);
    --ve-select-padding-block-default: var(--space-xxxs);
    --ve-select-padding-block-large: var(--space-xxs);
    --ve-select-radius: var(--radius-md);
    --ve-select-border-width: var(--stroke-weight-base);
    --ve-select-control-border-width: var(--ve-select-border-width);
    --ve-select-gap: var(--space-xxxs);
    --ve-select-label-padding-inline: var(--space-xxs);
    --ve-select-label-color: var(--color-text-secondary);
    --ve-select-tag-gap: var(--space-xxxs);
    --ve-select-tag-padding-inline: calc(var(--space-xxs) - 2px);
    --ve-select-tag-height: calc(
      var(--ve-select-current-height) -
        var(--ve-select-current-control-border-width) -
        var(--ve-select-current-control-border-width) -
        var(--ve-select-current-padding-block) -
        var(--ve-select-current-padding-block)
    );
    --ve-select-tag-radius: var(--radius-sm);
    --ve-select-action-icon-size: 16px;
    --ve-select-arrow-icon-size: var(--space-s);
    --ve-select-tag-remove-size: var(--text-caption);
    --ve-select-clear-size: var(--space-s);

    --ve-select-control-background: var(--color-bg-control);
    --ve-select-control-background-hover: var(--color-bg-base);
    --ve-select-control-background-focus: var(--color-bg-base);
    --ve-select-control-background-disabled: var(--color-bg-control);
    --ve-select-control-text: var(--color-text-primary);
    --ve-select-control-text-disabled: var(--color-text-disable);
    --ve-select-control-placeholder: var(--color-text-disable);
    --ve-select-control-border-default: var(--color-border-default);
    --ve-select-control-border-hover: var(--color-border-interactive);
    --ve-select-control-border-focus: var(--color-border-interactive-active);
    --ve-select-control-border-disabled: var(--color-border-default);
    --ve-select-control-borderless-background: transparent;
    --ve-select-control-borderless-background-hover: var(--color-bg-surface);
    --ve-select-control-borderless-background-focus: transparent;
    --ve-select-control-borderless-border: transparent;
    --ve-select-focus-ring-default: var(--ve-select-control-border-focus);
    --ve-select-focus-shadow-strong-color: rgb(
      from var(--color-border-interactive) r g b / 25%
    );
    --ve-select-focus-shadow-soft-color: rgb(
      from var(--color-border-interactive) r g b / 10%
    );
    --ve-select-shadow-focus-default:
      0 0 var(--radius-xs) calc(var(--stroke-weight-strong) * -1)
        var(--ve-select-focus-shadow-strong-color),
      0 0 var(--space-l) calc(var(--stroke-weight-strong) * -1)
        var(--ve-select-focus-shadow-soft-color);
    --ve-select-status-warning-background: var(--color-bg-warning-secondary);
    --ve-select-status-warning-background-hover: color-mix(
      in srgb,
      var(--ve-select-status-warning-background) var(--state-hover-subtle-ratio),
      var(--state-hover-subtle-mix)
    );
    --ve-select-status-warning-border: var(--color-border-warning);
    --ve-select-status-warning-border-hover: var(--color-text-warning);
    --ve-select-status-warning-border-focus: var(--color-text-warning);
    --ve-select-status-warning-shadow-focus: var(
      --ve-select-shadow-focus-default
    );
    --ve-select-status-error-background: var(--color-bg-danger-secondary);
    --ve-select-status-error-background-hover: color-mix(
      in srgb,
      var(--ve-select-status-error-background) var(--state-hover-subtle-ratio),
      var(--state-hover-subtle-mix)
    );
    --ve-select-status-error-border: var(--color-border-danger);
    --ve-select-status-error-border-hover: var(--color-text-danger);
    --ve-select-status-error-border-focus: var(--color-text-danger);
    --ve-select-status-error-shadow-focus: var(
      --ve-select-shadow-focus-default
    );
    --ve-select-description-color: var(--color-text-tertiary);
    --ve-select-status-warning-description-color: var(--color-text-warning);
    --ve-select-status-error-description-color: var(--color-text-danger);
    --ve-select-feedback-font-size: var(--text-caption);
    --ve-select-feedback-line-height: var(--line-height-body);
    --ve-select-feedback-min-height: 18px;

    --ve-select-prefix-color: var(--color-text-tertiary);
    --ve-select-arrow-color: var(--color-icon-disable);
    --ve-select-clear-color: var(--color-text-tertiary);
    --ve-select-clear-hover-color: var(--color-text-secondary);
    --ve-select-clear-hover-background: var(--color-bg-muted);

    --ve-select-panel-background: var(--color-bg-overlay);
    --ve-select-panel-border-color: var(--color-border-default);
    --ve-select-panel-shadow: var(--shadow-md);
    --ve-select-panel-radius: var(--radius-lg);
    --ve-select-panel-z-index: 1000;
    --ve-select-panel-gap: var(--space-xxxs);
    --ve-select-panel-padding: var(--space-xxs);
    --ve-select-panel-max-height: 220px;

    --ve-select-option-min-height: 38px;
    --ve-select-option-padding-inline: var(--space-xxs);
    --ve-select-option-padding-block: var(--space-xxs);
    --ve-select-option-gap: var(--space-xxs);
    --ve-select-option-radius: var(--radius-md);
    --ve-select-option-text: var(--color-text-primary);
    --ve-select-option-text-disabled: var(--color-text-disable);
    --ve-select-option-hover-background: var(--color-bg-surface);
    --ve-select-option-active-background: var(
      --ve-select-option-hover-background
    );
    --ve-select-option-selected-background: transparent;
    --ve-select-option-selected-text: var(--color-text-primary);
    --ve-select-option-icon-color: var(--color-text-secondary);
    --ve-select-option-selected-icon: var(--color-text-accent);
    --ve-select-option-prefix-icon-size: var(--space-s);
    --ve-select-option-check-size: var(--space-s);
    --ve-select-option-check-border-width: var(--stroke-weight-strong);
    --ve-select-option-check-radius: var(--radius-xs);
    --ve-select-option-check-border: var(--color-border-strong);
    --ve-select-option-check-border-hover: var(--color-border-interactive);
    --ve-select-option-check-selected-border: transparent;
    --ve-select-option-check-background: transparent;
    --ve-select-option-check-selected-background: var(--color-bg-primary);
    --ve-select-option-check-selected-color: var(--color-text-foreground);
    --ve-select-option-check-selected-hover-background: color-mix(
      in srgb,
      var(--ve-select-option-check-selected-background)
        var(--state-hover-solid-ratio),
      var(--state-hover-solid-mix)
    );

    --ve-select-group-color: var(--color-text-tertiary);
    --ve-select-group-padding-inline: var(--space-xxs);
    --ve-select-group-padding-block: var(--space-xxs);

    --ve-select-tag-background: var(--color-bg-surface);
    --ve-select-tag-color: var(--color-text-secondary);
    --ve-select-tag-remove-color: var(--color-text-tertiary);
    --ve-select-tag-remove-hover-background: var(--color-bg-surface);

    --ve-select-empty-color: var(--color-text-tertiary);
    --ve-select-empty-padding: var(--space-s);
    --ve-select-loading-color: var(--color-text-tertiary);
    --ve-select-loading-spin-duration: 1200ms;
    --ve-select-disabled-opacity: var(--state-disabled-ratio);
    --ve-select-transition-duration: var(--motion-fast);
    --ve-select-transition-timing: var(--ease-standard);

    --ve-select-current-height: var(--ve-select-height-default);
    --ve-select-current-padding-inline: var(--ve-select-padding-inline-default);
    --ve-select-current-padding-block: var(--ve-select-padding-block-default);
    --ve-select-current-font-size: var(--ve-select-font-size-default);
    --ve-select-current-line-height: var(--ve-select-line-height-default);
    --ve-select-current-control-border-width: var(
      --ve-select-control-border-width
    );
    --ve-select-current-background: var(--ve-select-control-background);
    --ve-select-current-background-hover: var(
      --ve-select-control-background-hover
    );
    --ve-select-current-border-color: var(--ve-select-control-border-default);
    --ve-select-current-border-color-hover: var(
      --ve-select-control-border-hover
    );
    --ve-select-current-focus-ring-color: var(--ve-select-focus-ring-default);
    --ve-select-current-shadow-focus: var(--ve-select-shadow-focus-default);
    --ve-select-current-description-color: var(--ve-select-description-color);
  }

  :host([size='small']) {
    --ve-select-current-height: var(--ve-select-height-small);
    --ve-select-current-padding-inline: var(--ve-select-padding-inline-small);
    --ve-select-current-padding-block: var(--ve-select-padding-block-small);
    --ve-select-current-font-size: var(--ve-select-font-size-small);
    --ve-select-current-line-height: var(--ve-select-line-height-small);
  }

  :host([size='large']) {
    --ve-select-current-height: var(--ve-select-height-large);
    --ve-select-current-padding-inline: var(--ve-select-padding-inline-large);
    --ve-select-current-padding-block: var(--ve-select-padding-block-large);
    --ve-select-current-font-size: var(--ve-select-font-size-large);
    --ve-select-current-line-height: var(--ve-select-line-height-large);
  }

  :host([status='warning']) {
    --ve-select-current-background: var(--ve-select-status-warning-background);
    --ve-select-current-background-hover: var(
      --ve-select-status-warning-background-hover
    );
    --ve-select-current-border-color: var(--ve-select-status-warning-border);
    --ve-select-current-border-color-hover: var(
      --ve-select-status-warning-border-hover
    );
    --ve-select-current-focus-ring-color: var(
      --ve-select-status-warning-border-focus
    );
    --ve-select-current-shadow-focus: var(
      --ve-select-status-warning-shadow-focus
    );
    --ve-select-current-description-color: var(
      --ve-select-status-warning-description-color
    );
  }

  :host([status='error']) {
    --ve-select-current-background: var(--ve-select-status-error-background);
    --ve-select-current-background-hover: var(
      --ve-select-status-error-background-hover
    );
    --ve-select-current-border-color: var(--ve-select-status-error-border);
    --ve-select-current-border-color-hover: var(
      --ve-select-status-error-border-hover
    );
    --ve-select-current-focus-ring-color: var(
      --ve-select-status-error-border-focus
    );
    --ve-select-current-shadow-focus: var(
      --ve-select-status-error-shadow-focus
    );
    --ve-select-current-description-color: var(
      --ve-select-status-error-description-color
    );
  }

  :host([borderless]) {
    --ve-select-current-control-border-width: 0px;
    --ve-select-current-background: var(
      --ve-select-control-borderless-background
    );
    --ve-select-current-background-hover: var(
      --ve-select-control-borderless-background-hover
    );
    --ve-select-control-background-focus: var(
      --ve-select-control-borderless-background-focus
    );
    --ve-select-control-background-disabled: var(
      --ve-select-control-borderless-background
    );
    --ve-select-current-border-color: var(
      --ve-select-control-borderless-border
    );
    --ve-select-current-border-color-hover: var(
      --ve-select-control-borderless-border
    );
    --ve-select-current-focus-ring-color: var(
      --ve-select-control-borderless-border
    );
    --ve-select-current-shadow-focus: none;
    --ve-select-control-border-disabled: var(
      --ve-select-control-borderless-border
    );
  }

  @supports not (color: color-mix(in srgb, red, blue)) {
    :host {
      --ve-select-status-warning-background-hover: var(
        --ve-select-status-warning-background
      );
      --ve-select-status-error-background-hover: var(
        --ve-select-status-error-background
      );
      --ve-select-option-check-selected-hover-background: var(
        --ve-select-option-check-selected-background
      );
    }
  }
`,N=[s.H6,B,n.AH`
    :host {
      position: relative;
      display: inline-flex;
      inline-size: 100%;
      vertical-align: middle;
    }

    :host([hidden]) {
      display: none;
    }

    .ve-select {
      position: relative;
      inline-size: 100%;
    }

    .ve-select-field {
      display: flex;
      align-items: stretch;
      inline-size: 100%;
    }

    .ve-select-control {
      appearance: none;
      display: flex;
      align-items: center;
      gap: var(--ve-select-gap);
      inline-size: 100%;
      block-size: var(--ve-select-current-height);
      min-inline-size: 0;
      box-sizing: border-box;
      padding-inline: var(--ve-select-current-padding-inline);
      padding-block: var(--ve-select-current-padding-block);
      border: var(--ve-select-current-control-border-width) solid
        var(--ve-select-current-border-color);
      border-radius: var(--ve-select-radius);
      background: var(--ve-select-current-background);
      color: var(--ve-select-control-text);
      font-family: var(--ve-select-font-family);
      font-size: var(--ve-select-current-font-size);
      font-weight: var(--ve-select-font-weight);
      line-height: var(--ve-select-current-line-height);
      cursor: pointer;
      transition:
        border-color var(--ve-select-transition-duration)
          var(--ve-select-transition-timing),
        box-shadow var(--ve-select-transition-duration)
          var(--ve-select-transition-timing),
        background-color var(--ve-select-transition-duration)
          var(--ve-select-transition-timing),
        opacity var(--ve-select-transition-duration)
          var(--ve-select-transition-timing);
      overflow: hidden;
    }

    .ve-select-control-multiple,
    :host([mode='multiple']) .ve-select-label {
      block-size: auto;
      min-block-size: var(--ve-select-current-height);
    }

    .ve-select-control-filled.ve-select-control-multiple {
      padding-inline-start: var(
        --ve-select-control-multiple-tag-padding-inline-start
      );
    }

    :host([borderless]) .ve-select-control {
      inline-size: fit-content;
      max-inline-size: 100%;
    }

    .ve-select-label {
      display: inline-flex;
      align-items: center;
      flex: none;
      box-sizing: border-box;
      block-size: var(--ve-select-current-height);
      min-inline-size: 0;
      padding-inline: var(--ve-select-label-padding-inline);
      padding-block: var(--ve-select-current-padding-block);
      border: var(--ve-select-current-control-border-width) solid
        var(--ve-select-current-border-color);
      border-start-start-radius: var(--ve-select-radius);
      border-end-start-radius: var(--ve-select-radius);
      border-start-end-radius: 0;
      border-end-end-radius: 0;
      background: var(--ve-select-current-background);
      color: var(--ve-select-label-color);
      font-family: var(--ve-select-font-family);
      font-size: var(--ve-select-current-font-size);
      font-weight: var(--ve-select-font-weight);
      line-height: var(--ve-select-current-line-height);
      white-space: nowrap;
      cursor: default;
      transition:
        border-color var(--ve-select-transition-duration)
          var(--ve-select-transition-timing),
        background-color var(--ve-select-transition-duration)
          var(--ve-select-transition-timing),
        opacity var(--ve-select-transition-duration)
          var(--ve-select-transition-timing);
    }

    .ve-select-prefix.ve-select-prefix-empty {
      display: none;
    }

    .ve-select-label-text {
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .ve-select-with-label .ve-select-control {
      border-start-start-radius: 0;
      border-end-start-radius: 0;
      margin-inline-start: calc(
        var(--ve-select-current-control-border-width) * -1
      );
    }

    :host(:not([disabled])) .ve-select-control:hover {
      border-color: var(--ve-select-current-border-color-hover);
      background: var(--ve-select-current-background-hover);
    }

    :host(:not([disabled])) .ve-select-control:focus,
    :host(:not([disabled])) .ve-select-control:focus-within,
    :host([data-open='true']) .ve-select-control {
      outline: none;
      background: var(--ve-select-control-background-focus);
      border-color: var(--ve-select-current-focus-ring-color);
      box-shadow: var(--ve-select-current-shadow-focus);
    }

    :host([disabled]) .ve-select-control,
    :host([disabled]) .ve-select-label {
      color: var(--ve-select-control-text-disabled);
      background: var(--ve-select-control-background-disabled);
      border-color: var(--ve-select-control-border-disabled);
      opacity: var(--ve-select-disabled-opacity);
      cursor: not-allowed;
    }

    .ve-select-prefix,
    .ve-select-arrow,
    .ve-select-loading {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex: none;
    }

    .ve-select-prefix {
      color: var(--ve-select-prefix-color);
    }

    :host([disabled]) .ve-select-prefix {
      color: var(--ve-select-control-text-disabled);
    }

    .ve-select-arrow {
      color: var(--ve-select-arrow-color);
    }

    .ve-select-loading {
      color: var(--ve-select-loading-color);
    }

    .ve-select-arrow ve-icon,
    .ve-select-loading ve-icon,
    .ve-select-option-icon ve-icon {
      --ve-icon-size: var(--ve-select-arrow-icon-size);

      display: inline-flex;
      flex: none;
    }

    .ve-select-loading ve-icon {
      animation: ve-select-loading-spin var(--ve-select-loading-spin-duration)
        linear infinite;
    }

    .ve-select-value {
      display: flex;
      align-items: center;
      gap: var(--ve-select-tag-gap);
      min-inline-size: 0;
      flex: 1;
      flex-wrap: wrap;
    }

    :host([show-search]) .ve-select-value {
      align-self: stretch;
    }

    :host([borderless]) .ve-select-value {
      flex: 0 1 auto;
    }

    .ve-select-value-text {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .ve-select-value-text-placeholder {
      color: var(--ve-select-control-placeholder);
    }

    .ve-select-search-input {
      appearance: none;
      flex: 1 1 24px;
      min-inline-size: 24px;
      inline-size: 100%;
      padding: 0;
      border: 0;
      outline: 0;
      background: transparent;
      color: inherit;
      font: inherit;
      line-height: inherit;
    }

    .ve-select-single-search-value {
      position: relative;
      display: flex;
      align-items: center;
      align-self: stretch;
      flex: 1;
      min-inline-size: 0;
    }

    .ve-select-search-input-single {
      position: absolute;
      inset: 0;
      z-index: 1;
      min-inline-size: 0;
    }

    .ve-select-selected-value-hint {
      min-inline-size: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      pointer-events: none;
    }

    :host([data-open='true']) .ve-select-selected-value-hint,
    .ve-select-control:focus-within .ve-select-selected-value-hint {
      padding-inline-start: 2px;
      color: var(--ve-select-control-placeholder);
    }

    .ve-select-search-input::placeholder {
      color: var(--ve-select-control-placeholder);
    }

    .ve-select-search-input:disabled {
      cursor: not-allowed;
    }

    .ve-select-visually-hidden {
      position: absolute;
      inline-size: 1px;
      block-size: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }

    :host([show-search]) .ve-select-value-text-placeholder {
      display: none;
    }

    :host([show-search]) .ve-select-control {
      cursor: text;
    }

    .ve-select-tag {
      display: inline-flex;
      align-items: center;
      gap: var(--space-xxxs);
      flex: none;
      max-inline-size: 100%;
      block-size: var(--ve-select-tag-height);
      padding-inline: var(--ve-select-tag-padding-inline);
      border-radius: var(--ve-select-tag-radius);
      background: var(--ve-select-tag-background);
      color: var(--ve-select-tag-color);
      font-size: var(--text-caption);
      line-height: var(--line-height-body);
      box-sizing: border-box;
      overflow: hidden;
    }

    .ve-select-tag-label {
      min-inline-size: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .ve-select-tag-remove {
      appearance: none;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex: none;
      inline-size: var(--ve-select-tag-remove-size);
      block-size: var(--ve-select-tag-remove-size);
      border: none;
      border-radius: var(--radius-full);
      background: transparent;
      color: var(--ve-select-tag-remove-color);
      cursor: pointer;
      padding: 0;
    }

    .ve-select-tag-remove:hover,
    .ve-select-tag-remove:focus-visible {
      background: var(--ve-select-tag-remove-hover-background);
    }

    .ve-select-tag-remove:focus-visible {
      outline: none;
    }

    .ve-select-actions {
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      margin-inline-start: auto;
      flex: none;
      inline-size: var(--ve-select-clear-size);
      block-size: var(--ve-select-clear-size);
      pointer-events: auto;
    }

    :host([borderless]) .ve-select-actions {
      margin-inline-start: 0;
    }

    .ve-select-clear {
      appearance: none;
      position: absolute;
      inset: 0;
      z-index: 1;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      inline-size: 100%;
      block-size: 100%;
      border: none;
      border-radius: var(--radius-full);
      background: transparent;
      color: var(--ve-select-clear-color);
      cursor: pointer;
      opacity: 0;
      padding: 0;
      pointer-events: none;
      transform: scale(0.85);
      transition:
        opacity var(--ve-select-transition-duration)
          var(--ve-select-transition-timing),
        transform var(--ve-select-transition-duration)
          var(--ve-select-transition-timing),
        background-color var(--ve-select-transition-duration)
          var(--ve-select-transition-timing),
        color var(--ve-select-transition-duration)
          var(--ve-select-transition-timing);
    }

    :host(:not([disabled])) .ve-select-control:hover .ve-select-clear,
    :host([data-open='true']) .ve-select-clear {
      opacity: 1;
      pointer-events: auto;
      transform: scale(1);
    }

    .ve-select-clear:hover,
    .ve-select-clear:focus-visible {
      color: var(--ve-select-clear-hover-color);
      background: var(--ve-select-clear-hover-background);
    }

    .ve-select-clear:focus-visible {
      outline: none;
    }

    .ve-select-arrow,
    .ve-select-loading {
      pointer-events: none;
      transition:
        opacity var(--ve-select-transition-duration)
          var(--ve-select-transition-timing),
        transform var(--ve-select-transition-duration)
          var(--ve-select-transition-timing);
    }

    :host(:not([disabled]))
      .ve-select-control:hover
      .ve-select-clear
      + .ve-select-arrow,
    :host([data-open='true']) .ve-select-clear + .ve-select-arrow {
      opacity: 0;
      transform: scale(0.85);
    }

    .ve-select-tag-remove ve-icon,
    .ve-select-clear ve-icon {
      --ve-icon-size: var(--ve-select-action-icon-size);

      display: inline-flex;
      flex: none;
    }

    .ve-select-panel {
      position: fixed;
      inset: auto;
      top: 0;
      left: 0;
      z-index: var(--ve-select-panel-z-index);
      isolation: isolate;
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      border: var(--ve-select-border-width) solid
        var(--ve-select-panel-border-color);
      border-radius: var(--ve-select-panel-radius);
      background: var(--ve-select-panel-background);
      box-shadow: var(--ve-select-panel-shadow);
      overflow: hidden;
      outline: none;
      will-change: transform;
    }

    .ve-select-panel-inner {
      padding: var(--ve-select-panel-padding);
      max-block-size: var(--ve-select-panel-max-height);
      overflow: auto;
      overscroll-behavior: contain;
    }

    .ve-select-group {
      display: block;
    }

    .ve-select-group-label {
      display: block;
      padding-inline: var(--ve-select-group-padding-inline);
      padding-block: var(--ve-select-group-padding-block);
      color: var(--ve-select-group-color);
      font-size: var(--text-caption);
    }

    .ve-select-options,
    .ve-select-group-options {
      margin: 0;
      padding: 0;
      list-style: none;
    }

    .ve-select-group-options {
      display: block;
    }

    .ve-select-option {
      appearance: none;
      display: flex;
      align-items: center;
      justify-content: space-between;
      inline-size: 100%;
      min-block-size: var(--ve-select-option-min-height);
      box-sizing: border-box;
      gap: var(--ve-select-option-gap);
      padding-inline: var(--ve-select-option-padding-inline);
      padding-block: var(--ve-select-option-padding-block);
      border: none;
      border-radius: var(--ve-select-option-radius);
      background: transparent;
      color: var(--ve-select-option-text);
      cursor: pointer;
      font: inherit;
      text-align: left;
      transition:
        background-color var(--ve-select-transition-duration)
          var(--ve-select-transition-timing),
        color var(--ve-select-transition-duration)
          var(--ve-select-transition-timing);
    }

    .ve-select-option:hover,
    .ve-select-option:focus-visible {
      outline: none;
      background: var(--ve-select-option-hover-background);
    }

    .ve-select-option:active,
    .ve-select-option-active {
      outline: none;
      background: var(--ve-select-option-active-background);
    }

    .ve-select-option-selected {
      background: var(--ve-select-option-selected-background);
      color: var(--ve-select-option-selected-text);
      font-weight: var(--font-weight-normal);
    }

    .ve-select-option-disabled,
    .ve-select-option-disabled:hover,
    .ve-select-option-disabled:active,
    .ve-select-option-disabled:focus-visible {
      color: var(--ve-select-option-text-disabled);
      cursor: not-allowed;
      background: transparent;
      opacity: var(--ve-select-disabled-opacity);
      pointer-events: none;
    }

    .ve-select-option-label,
    .ve-select-option-content {
      min-inline-size: 0;
      flex: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .ve-select-option-content {
      display: block;
    }

    .ve-select-option-check,
    .ve-select-option-prefix,
    .ve-select-option-icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex: none;
      color: var(--ve-select-option-icon-color);
    }

    .ve-select-option-check {
      inline-size: var(--ve-select-option-check-size);
      block-size: var(--ve-select-option-check-size);
      box-sizing: border-box;
      border: var(--ve-select-option-check-border-width) solid
        var(--ve-select-option-check-border);
      border-radius: var(--ve-select-option-check-radius);
      background: var(--ve-select-option-check-background);
    }

    .ve-select-option-icon {
      inline-size: var(--ve-select-arrow-icon-size);
      block-size: var(--ve-select-arrow-icon-size);
    }

    .ve-select-option-check-selected {
      border-color: var(--ve-select-option-check-selected-border);
      background: var(--ve-select-option-check-selected-background);
      color: var(--ve-select-option-check-selected-color);
    }

    .ve-select-option:hover
      .ve-select-option-check:not(.ve-select-option-check-selected),
    .ve-select-option:focus-visible
      .ve-select-option-check:not(.ve-select-option-check-selected) {
      border-color: var(--ve-select-option-check-border-hover);
    }

    .ve-select-option:hover .ve-select-option-check-selected,
    .ve-select-option:focus-visible .ve-select-option-check-selected {
      background: var(--ve-select-option-check-selected-hover-background);
    }

    .ve-select-option-check-icon {
      display: block;
      flex: none;
      inline-size: 12px;
      block-size: 12px;
    }

    .ve-select-option-prefix ve-icon {
      --ve-icon-size: var(--ve-select-option-prefix-icon-size);

      display: inline-flex;
      flex: none;
    }

    .ve-select-option-icon-selected {
      color: var(--ve-select-option-selected-icon);
    }

    .ve-select-empty {
      padding: var(--ve-select-empty-padding);
      color: var(--ve-select-empty-color);
      text-align: center;
      font-size: var(--text-caption);
    }

    .ve-select-feedback {
      display: flex;
      flex-direction: column;
      gap: var(--ve-select-gap);
      margin-block-start: var(--ve-select-gap);
      inline-size: 100%;
      font-family: var(--ve-select-font-family);
      font-size: var(--ve-select-feedback-font-size);
      font-weight: var(--ve-select-font-weight);
      line-height: var(--ve-select-feedback-line-height);
    }

    .ve-select-description {
      min-block-size: var(--ve-select-feedback-min-height);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .ve-select-description {
      color: var(--ve-select-current-description-color);
    }

    @media (prefers-reduced-motion: reduce) {
      .ve-select-control,
      .ve-select-arrow,
      .ve-select-loading,
      .ve-select-option {
        transition: none;
        animation: none;
      }
    }

    @keyframes ve-select-loading-spin {
      to {
        transform: rotate(360deg);
      }
    }
  `];function W(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function K(e){if(Object(e)!==e)throw TypeError("right-hand side of 'in' should be an object, got "+(null!==e?typeof e:"null"));return e}function U(e,t,r){"symbol"==typeof t&&(t=(t=t.description)?"["+t+"]":"");try{Object.defineProperty(e,"name",{configurable:!0,value:r?r+" "+t:t})}catch(n){}return e}let Z,G,J,X,Y,Q,ee,te,re,ne,oe,ie,ae,se,le,ce,de,ue,ve,he,pe,ge,be,me,fe,_e,we,ye,xe,ke,Se,Ce,ze,Ee,Oe,Me,Ae,Ie,Pe,Te,$e,Re,De,Fe,Le,Ve,je,qe,He,Be,Ne,We,Ke,Ue,Ze,Ge,Je,Xe,Ye,Qe,et,tt,rt,nt,ot,it,at,st,lt,ct,dt,ut,vt,ht,pt,gt,bt,mt,ft,_t,wt,yt,xt,kt,St,Ct,zt,Et,Ot,Mt,At,It,Pt;const Tt=["aria-label","aria-labelledby","aria-describedby","aria-required","aria-invalid"],$t={fromAttribute(e){if(null===e)return"";const t=e.trim();if(!t)return"";try{const e=JSON.parse(t);if(Array.isArray(e))return e.filter(Ft);if(Ft(e))return e}catch{}return t},toAttribute:e=>Array.isArray(e)?e.length>0?JSON.stringify(e):null:""===e?null:String(e)},Rt={fromAttribute(e){if(null===e)return;if("responsive"===e)return"responsive";const t=Number(e);return Number.isFinite(t)&&t>=0?Math.floor(t):void 0},toAttribute:e=>void 0===e?null:String(e)},Dt={fromAttribute:e=>null===e||"false"!==e,toAttribute:e=>e?null:"false"};function Ft(e){return"string"==typeof e||"number"==typeof e}function Lt(e){return Array.isArray(e.options)}function Vt(e){return`${typeof e}:${String(e)}`}function jt(e,t){return Vt(e)===Vt(t)}function qt(e){if(null!==e)return"false"===e?"false":"true"}Z=(0,o.MZ)({converter:$t}),G=(0,o.MZ)({attribute:"default-value",converter:$t}),J=(0,o.MZ)({type:String}),X=(0,o.MZ)({type:String}),Y=(0,o.MZ)({type:String}),Q=(0,o.MZ)({type:String,reflect:!0,useDefault:!0}),ee=(0,o.MZ)({type:String,reflect:!0,useDefault:!0}),te=(0,o.MZ)({type:String,reflect:!0,useDefault:!0}),re=(0,o.MZ)({type:Boolean,reflect:!0}),ne=(0,o.MZ)({type:Boolean,reflect:!0}),oe=(0,o.MZ)({type:Boolean,reflect:!0}),ie=(0,o.MZ)({type:Boolean,attribute:"allow-clear",reflect:!0}),ae=(0,o.MZ)({type:Boolean,reflect:!0}),se=(0,o.MZ)({type:Boolean,attribute:"default-open"}),le=(0,o.MZ)({attribute:"max-tag-count",converter:Rt}),ce=(0,o.MZ)({attribute:"popup-match-select-width",converter:Dt}),de=(0,o.MZ)({type:String,attribute:"empty-text"}),ue=(0,o.MZ)({type:Number,attribute:"max-height"}),ve=(0,o.MZ)({type:Boolean,attribute:"show-search",reflect:!0}),he=(0,o.MZ)({type:String,attribute:"input-value"}),pe=(0,o.MZ)({attribute:!1}),ge=(0,o.MZ)({attribute:!1}),be=(0,o.P)(".ve-select-control"),me=(0,o.P)('slot[name="empty"]'),fe=(0,o.P)(".ve-select-panel"),_e=(0,o.P)(".ve-select-search-input"),we=(0,o.wk)(),ye=(0,o.wk)(),xe=(0,o.wk)(),ke=(0,o.wk)(),Se=(0,o.wk)();class Ht extends s.IB{static{({e:[Ce,ze,Ee,Oe,Me,Ae,Ie,Pe,Te,$e,Re,De,Fe,Le,Ve,je,qe,He,Be,Ne,We,Ke,Ue,Ze,Ge,Je,Xe,Ye,Qe,et,tt,rt,nt,ot,it,at,st,lt,ct,dt,ut,vt,ht,pt,gt,bt,mt,ft,_t,wt,yt,xt,kt,St,Ct,zt,Et,Ot,Mt,At,It,Pt]}=function(e,t,r,n,o,i){var a,s,l,c,d,u,v,h=Symbol.metadata||Symbol.for("Symbol.metadata"),p=Object.defineProperty,g=Object.create,b=[g(null),g(null)],m=t.length;function f(t,r,n){return function(o,i){r&&(i=o,o=e);for(var a=0;a<t.length;a++)i=t[a].apply(o,n?[i]:[]);return n?i:o}}function _(e,t,r,n){if("function"!=typeof e&&(n||void 0!==e))throw new TypeError(t+" must "+(r||"be")+" a function"+(n?"":" or undefined"));return e}function w(e,t,r,n,o,i,l,c,d,u,v){function h(e){if(!v(e))throw new TypeError("Attempted to access private element on non-instance")}var g=[].concat(t[0]),m=t[3],w=!l,y=1===o,x=3===o,k=4===o,S=2===o;function C(t,r,n){return function(o,i){return r&&(i=o,o=e),n&&n(o),desc[t].call(o,i)}}var z={},E=[],O=x?"get":k||y?"set":"value";if(!w&&(d?(u||y?z={get:U(function(){return m(this)},n,"get"),set:function(e){t[4](this,e)}}:z[O]=m,u||U(z[O],n,S?"":O)):u||(z=Object.getOwnPropertyDescriptor(e,n)),!u&&!d)){if((s=b[+c][n])&&7!==(s^o))throw new Error("Decorating two elements with the same name ("+z[O].name+") is not supported yet");b[+c][n]=o<3?1:o}for(var M=e,A=g.length-1;A>=0;A-=r?2:1){var I=_(g[A],"A decorator","be",!0),P=r?g[A-1]:void 0,T={},$={kind:["field","accessor","method","getter","setter","class"][o],name:n,metadata:a,addInitializer:function(e,t){if(e.v)throw new TypeError("attempted to call addInitializer after decoration was finished");_(t,"An initializer","be",!0),i.push(t)}.bind(null,T)};if(w)s=I.call(P,M,$),T.v=1,_(s,"class decorators","return")&&(M=s);else if($.static=c,$.private=d,s=$.access={has:d?v.bind():function(e){return n in e}},k||(s.get=d?S?function(e){return h(e),z.value}:C("get",0,h):function(e){return e[n]}),S||x||(s.set=d?C("set",0,h):function(e,t){e[n]=t}),M=I.call(P,y?{get:z.get,set:z.set}:z[O],$),T.v=1,y){if("object"==typeof M&&M)(s=_(M.get,"accessor.get"))&&(z.get=s),(s=_(M.set,"accessor.set"))&&(z.set=s),(s=_(M.init,"accessor.init"))&&E.unshift(s);else if(void 0!==M)throw new TypeError("accessor decorators must return an object with get, set, or init properties or undefined")}else _(M,(u?"field":"method")+" decorators","return")&&(u?E.unshift(M):z[O]=M)}return o<2&&l.push(f(E,c,1),f(i,c,0)),u||w||(d?y?l.splice(-1,0,C("get",c),C("set",c)):l.push(S?z[O]:_.call.bind(z[O])):p(e,n,z)),M}function y(e){return p(e,h,{configurable:!0,enumerable:!0,value:a})}return void 0!==i&&(a=i[h]),a=g(null==a?null:a),d=[],u=function(e){e&&d.push(f(e))},(v=function(t,n){for(var i=0;i<r.length;i++){var a=r[i],s=a[1],u=7&s;if((8&s)==t&&!u==n){var v=a[2],h=!!a[3],p=16&s;w(t?e:e.prototype,a,p,h?"#"+v:W(v),u,u<2?[]:t?c=c||[]:l=l||[],d,!!t,h,n,t&&h?function(t){return K(t)===e}:o)}}})(8,0),v(0,0),v(8,1),v(0,1),u(l),u(c),s=d,m||y(e),{e:s,get c(){var r=[];return m&&[y(e=w(e,[t],n,e.name,5,r)),f(r,1)]}}}(this,[],[[Z,1,"value"],[G,1,"defaultValue"],[J,1,"placeholder"],[X,1,"label"],[Y,1,"description"],[Q,1,"mode"],[ee,1,"size"],[te,1,"status"],[re,1,"borderless"],[ne,1,"disabled"],[oe,1,"loading"],[ie,1,"allowClear"],[ae,1,"open"],[se,1,"defaultOpen"],[le,1,"maxTagCount"],[ce,1,"popupMatchSelectWidth"],[de,1,"emptyText"],[ue,1,"maxHeight"],[ve,1,"showSearch"],[he,1,"inputValue"],[pe,1,"filterOption"],[ge,1,"renderFormat"],[be,1,"controlElement"],[me,1,"emptySlot"],[fe,1,"panelElement"],[_e,1,"searchInputElement"],[we,1,"normalizedOptions"],[ye,1,"activeOptionKey"],[xe,1,"panelPlacement"],[ke,1,"innerOpen"],[Se,1,"hasPrefixSlot"]]))}static styles=N;static get observedAttributes(){return[...new Set([...super.observedAttributes,...Tt])]}static dependencies={[l.v]:l.O,[O]:I,[q]:H};#e=(()=>{const e=Ce(this,"");return ze(this),e})();get value(){return this.#e}set value(e){this.#e=e}#Kt=(()=>{const e=Ee(this,"");return Oe(this),e})();get defaultValue(){return this.#Kt}set defaultValue(e){this.#Kt=e}#I=(()=>{const e=Me(this,"Please select");return Ae(this),e})();get placeholder(){return this.#I}set placeholder(e){this.#I=e}#Ut=(()=>{const e=Ie(this,"");return Pe(this),e})();get label(){return this.#Ut}set label(e){this.#Ut=e}#Zt=(()=>{const e=Te(this,"");return $e(this),e})();get description(){return this.#Zt}set description(e){this.#Zt=e}#Gt=(()=>{const e=Re(this,"single");return De(this),e})();get mode(){return this.#Gt}set mode(e){this.#Gt=e}#Jt=(()=>{const e=Fe(this,"default");return Le(this),e})();get size(){return this.#Jt}set size(e){this.#Jt=e}#Xt=(()=>{const e=Ve(this,"default");return je(this),e})();get status(){return this.#Xt}set status(e){this.#Xt=e}#Yt=(()=>{const e=qe(this,!1);return He(this),e})();get borderless(){return this.#Yt}set borderless(e){this.#Yt=e}#Qt=(()=>{const e=Be(this,!1);return Ne(this),e})();get disabled(){return this.#Qt}set disabled(e){this.#Qt=e}#er=(()=>{const e=We(this,!1);return Ke(this),e})();get loading(){return this.#er}set loading(e){this.#er=e}#tr=(()=>{const e=Ue(this,!1);return Ze(this),e})();get allowClear(){return this.#tr}set allowClear(e){this.#tr=e}#rr=(()=>{const e=Ge(this,void 0);return Je(this),e})();get open(){return this.#rr}set open(e){this.#rr=e}#nr=(()=>{const e=Xe(this,!1);return Ye(this),e})();get defaultOpen(){return this.#nr}set defaultOpen(e){this.#nr=e}#or=(()=>{const e=Qe(this,void 0);return et(this),e})();get maxTagCount(){return this.#or}set maxTagCount(e){this.#or=e}#ir=(()=>{const e=tt(this,!0);return rt(this),e})();get popupMatchSelectWidth(){return this.#ir}set popupMatchSelectWidth(e){this.#ir=e}#ar=(()=>{const e=nt(this,"No data");return ot(this),e})();get emptyText(){return this.#ar}set emptyText(e){this.#ar=e}#sr=(()=>{const e=it(this,220);return at(this),e})();get maxHeight(){return this.#sr}set maxHeight(e){this.#sr=e}#lr=(()=>{const e=st(this,!1);return lt(this),e})();get showSearch(){return this.#lr}set showSearch(e){this.#lr=e}#cr=(()=>{const e=ct(this,"");return dt(this),e})();get inputValue(){return this.#cr}set inputValue(e){this.#cr=e}#dr=(()=>{const e=ut(this,void 0);return vt(this),e})();get filterOption(){return this.#dr}set filterOption(e){this.#dr=e}#ur=(()=>{const e=ht(this,void 0);return pt(this),e})();get renderFormat(){return this.#ur}set renderFormat(e){this.#ur=e}#vr=(()=>{const e=gt(this,null);return bt(this),e})();get controlElement(){return this.#vr}set controlElement(e){this.#vr=e}#hr=(()=>{const e=mt(this,null);return ft(this),e})();get emptySlot(){return this.#hr}set emptySlot(e){this.#hr=e}#pr=(()=>{const e=_t(this,null);return wt(this),e})();get panelElement(){return this.#pr}set panelElement(e){this.#pr=e}#gr=(()=>{const e=yt(this,null);return xt(this),e})();get searchInputElement(){return this.#gr}set searchInputElement(e){this.#gr=e}#br=(()=>{const e=kt(this,[]);return St(this),e})();get normalizedOptions(){return this.#br}set normalizedOptions(e){this.#br=e}#mr=(()=>{const e=Ct(this,"");return zt(this),e})();get activeOptionKey(){return this.#mr}set activeOptionKey(e){this.#mr=e}#fr=(()=>{const e=Et(this,"bottom-start");return Ot(this),e})();get panelPlacement(){return this.#fr}set panelPlacement(e){this.#fr=e}#_r=(()=>{const e=Mt(this,!1);return At(this),e})();get innerOpen(){return this.#_r}set innerOpen(e){this.#_r=e}#wr=(()=>{const e=It(this,!1);return Pt(this),e})();get hasPrefixSlot(){return this.#wr}set hasPrefixSlot(e){this.#wr=e}hasInitializedDefaultValue=!1;openChangeReason="api";repositionScheduler=(0,c.ZH)();positionRequestId=0;cleanupAutoUpdate=null;listboxId="";descriptionId="";selectionDescriptionId="";wasOpen=!1;flatOptions=[];enabledOptions=[];optionByKey=new Map;filteredOptions=[];filteredEnabledOptions=[];selectedOptionsCache=[];selectedOptionKeySet=new Set;lastScrolledActiveOptionKey="";ignoreNextControlClick=!1;optionContentSlotId=0;optionContentSlotByElement=new WeakMap;optionContentSlotByKey=new Map;constructor(){super(),this.listboxId=`ve-select-listbox-${Math.random().toString(36).slice(2)}`,this.descriptionId=`ve-select-description-${Math.random().toString(36).slice(2)}`,this.selectionDescriptionId=`ve-select-selection-${Math.random().toString(36).slice(2)}`}addEventListener(e,t,r){super.addEventListener(e,t,r)}removeEventListener(e,t,r){super.removeEventListener(e,t,r)}handleDocumentPointerDown=e=>{this.isOpen&&!e.composedPath().includes(this)&&this.setOpen(!1,"outside")};handleDocumentKeydown=e=>{this.isOpen&&"Escape"===e.key&&(e.stopPropagation(),this.setOpen(!1,"escape"),this.focus())};handleOptionsSourceChange=()=>{this.refreshOptions(),this.refreshFilteredOptions(),this.isOpen&&(this.ensureActiveOption(),this.scheduleUpdatePosition())};get isMultiple(){return"multiple"===this.mode}get isOpen(){return"boolean"==typeof this.open?this.open:this.innerOpen}get isOpenControlled(){return"boolean"==typeof this.open}get normalizedMode(){return"multiple"===this.mode?"multiple":"single"}get shouldShowClear(){return!(!this.allowClear||this.disabled||this.loading)&&(this.isMultipleValue(this.value)?this.value.length>0:""!==this.value)}get hasLeadingLabel(){return(this.label??"").trim().length>0}get hasDescriptionFeedback(){return(this.description??"").trim().length>0}get isFilled(){return this.hasValue(this.value)}get activeOptionId(){return this.activeOptionKey?this.getOptionId(this.activeOptionKey):void 0}get controlAriaLabel(){return this.getAttribute("aria-label")??void 0}get controlAriaLabelledby(){return this.getAttribute("aria-labelledby")??void 0}get controlAriaDescribedby(){const e=[this.getAttribute("aria-describedby"),this.showSearch&&this.getSelectedOptions().length>0?this.selectionDescriptionId:void 0,this.hasDescriptionFeedback?this.descriptionId:void 0].filter(e=>"string"==typeof e&&e.length>0);return e.length>0?e.join(" "):void 0}get controlAriaRequired(){return qt(this.getAttribute("aria-required"))}get controlAriaInvalid(){return qt(this.getAttribute("aria-invalid"))??("error"===this.status?"true":void 0)}getOptionFromKey(e){return e?this.optionByKey.get(e):void 0}focus(e){this.showSearch?this.searchInputElement?.focus(e):this.controlElement?.focus(e)}blur(){this.showSearch?this.searchInputElement?.blur():this.controlElement?.blur()}show(){this.setOpen(!0,"api")}hide(){this.setOpen(!1,"api")}firstUpdated(e){super.firstUpdated(e),this.handleOptionsSourceChange(),this.applyDefaultValueIfNeeded(),this.isOpen&&(this.installGlobalListeners(),this.activateInitialOption())}willUpdate(e){if(super.willUpdate(e),e.has("mode")){const e=this.normalizedMode;this.mode!==e&&(this.mode=e)}if(e.has("mode")||e.has("value")){const e=this.normalizeValueForMode(this.value);t=this.value,r=e,(Array.isArray(t)||Array.isArray(r)?Array.isArray(t)&&Array.isArray(r)&&t.length===r.length&&t.every((e,t)=>jt(e,r[t])):t===r)||(this.value=e)}var t,r;(e.has("mode")||e.has("value"))&&this.syncSelectedOptions(),(e.has("inputValue")||e.has("showSearch")||e.has("filterOption"))&&(this.refreshFilteredOptions(),this.ensureActiveOption())}updated(e){if(super.updated(e),e.has("disabled")&&this.disabled&&this.isOpen)return void this.setOpen(!1,"api");e.has("open")&&"boolean"==typeof this.open&&(this.innerOpen=this.open),e.has("defaultOpen")&&1===e.size&&!this.isOpenControlled&&(this.innerOpen=this.defaultOpen);const t=e.has("innerOpen");(e.has("open")||t)&&(this.toggleAttribute("data-open",this.isOpen),this.handleOpenChanged()),this.isOpen&&e.has("value")&&(this.ensureActiveOption(),this.scheduleUpdatePosition()),this.isOpen&&(e.has("popupMatchSelectWidth")||e.has("mode"))&&this.scheduleUpdatePosition(),this.isOpen&&this.activeOptionKey&&this.activeOptionKey!==this.lastScrolledActiveOptionKey&&(this.scrollActiveOptionIntoView(),this.lastScrolledActiveOptionKey=this.activeOptionKey),this.isOpen&&""!==this.activeOptionKey||(this.lastScrolledActiveOptionKey="")}connectedCallback(){super.connectedCallback(),this.innerOpen=this.open??this.defaultOpen,super.addEventListener(M,this.handleOptionsSourceChange)}attributeChangedCallback(e,t,r){super.attributeChangedCallback(e,t,r),t!==r&&Tt.includes(e)&&this.requestUpdate()}disconnectedCallback(){super.removeEventListener(M,this.handleOptionsSourceChange),this.removeGlobalListeners(),this.repositionScheduler.cancel(),this.positionRequestId+=1,this.teardownAutoUpdate(),super.disconnectedCallback()}isMultipleValue(e){return Array.isArray(e)}normalizeValueForMode(e){return this.isMultiple?Array.isArray(e)?e:""===e?[]:[e]:Array.isArray(e)?e[0]??"":e}applyDefaultValueIfNeeded(){this.hasInitializedDefaultValue||(this.hasInitializedDefaultValue=!0,!this.hasValue(this.value)&&this.hasValue(this.defaultValue)&&(this.value=this.normalizeValueForMode(this.defaultValue)))}hasValue(e){return Array.isArray(e)?e.length>0:""!==e}installGlobalListeners(){document.addEventListener("pointerdown",this.handleDocumentPointerDown),document.addEventListener("keydown",this.handleDocumentKeydown)}removeGlobalListeners(){document.removeEventListener("pointerdown",this.handleDocumentPointerDown),document.removeEventListener("keydown",this.handleDocumentKeydown)}normalizeItemElement(e,t=!1,r=!1){const n=e.value;if(!Ft(n))return null;const o={label:e.label||String(n),value:n,disabled:t||e.disabled,closable:e.closable};if(r){const t=this.getOptionContentSlotName(e);this.optionContentSlotByKey.set(Vt(n),t),e.slot!==t&&(e.slot=t)}return o}getOptionContentSlotName(e){const t=this.optionContentSlotByElement.get(e);if(t)return t;const r=`${this.listboxId}-option-content-${this.optionContentSlotId++}`;return this.optionContentSlotByElement.set(e,r),r}normalizeOptions(){const e=[];for(const t of Array.from(this.children)){if(t instanceof I){const r=this.normalizeItemElement(t,!1,!0);r&&e.push(r);continue}if(t instanceof H){const r=Array.from(t.children).filter(e=>e instanceof I).map(e=>this.normalizeItemElement(e,t.disabled)).filter(e=>null!==e);r.length>0&&e.push({label:(t.label??"").trim().length>0?t.label:"Group",disabled:t.disabled,options:r})}}return e}refreshOptions(){this.optionContentSlotByKey=new Map,this.normalizedOptions=this.normalizeOptions(),this.flatOptions=this.flattenOptions(this.normalizedOptions),this.enabledOptions=this.flatOptions.filter(({option:e})=>!e.disabled),this.optionByKey=new Map(this.flatOptions.map(({key:e,option:t})=>[e,t])),this.syncSelectedOptions()}flattenOptions(e){const t=[];for(const r of e){const e=Lt(r)?r.options:[r];for(const r of e)t.push({option:r,key:Vt(r.value)})}return t}refreshFilteredOptions(){this.filteredOptions=this.computeFilteredOptions(),this.filteredEnabledOptions=this.flattenOptions(this.filteredOptions).filter(({option:e})=>!e.disabled)}computeFilteredOptions(){if(!this.showSearch)return this.normalizedOptions;const e=this.inputValue.trim().toLowerCase();if(!this.filterOption&&0===e.length)return this.normalizedOptions;const t=t=>this.filterOption?this.filterOption(this.inputValue,t):t.label.toLowerCase().includes(e)||String(t.value).toLowerCase().includes(e);return this.normalizedOptions.flatMap(e=>{if(!Lt(e))return t(e)?[e]:[];const r=e.options.filter(t);return r.length>0?[{...e,options:r}]:[]})}findOptionByValue(e){return this.optionByKey.get(Vt(e))}getSelectedOptions(){return this.selectedOptionsCache}syncSelectedOptions(){const e=Array.isArray(this.value)?this.value.map(e=>this.findOptionByValue(e)).filter(e=>void 0!==e):""===this.value?[]:(()=>{const e=this.findOptionByValue(this.value);return e?[e]:[]})();this.selectedOptionsCache=e,this.selectedOptionKeySet=new Set(e.map(e=>Vt(e.value)))}getSelectedOptionsFromValue(e){if(Array.isArray(e))return e.map(e=>this.findOptionByValue(e)).filter(e=>void 0!==e);if(""===e)return[];const t=this.findOptionByValue(e);return t?[t]:[]}setOpen(e,t){e&&this.disabled||this.isOpen!==e&&(this.openChangeReason=t,this.isOpenControlled||(this.innerOpen=e),this.emitOpenChange(e,t))}handleOpenChanged(){const e=this.isOpen;this.wasOpen&&!e&&this.showSearch&&""!==this.inputValue&&this.updateInputValue("","optionListHide"),this.wasOpen=e,e&&!this.disabled?(this.installGlobalListeners(),this.activateInitialOption(),this.updateComplete.then(()=>{this.isConnected&&this.isOpen&&!this.disabled&&((0,d.h)(this.panelElement),this.setupAutoUpdate(),this.scheduleUpdatePosition())})):((0,d.s)(this.panelElement),this.removeGlobalListeners(),this.repositionScheduler.cancel(),this.positionRequestId+=1,this.teardownAutoUpdate(),this.activeOptionKey=""),this.openChangeReason="api"}emit(e,t){this.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}emitChange(e){this.emit("ve-change",{value:Array.isArray(this.value)?[...this.value]:this.value,option:e})}emitClear(e){this.emit("ve-clear",{value:e})}emitOpenChange(e,t){this.emit("ve-open-change",{open:e,reason:t})}emitRemove(e){this.emit("ve-remove",{value:e.value,option:e})}updateInputValue(e,t){this.inputValue!==e&&(this.inputValue=e,this.emit("ve-input-value-change",{inputValue:e,reason:t}),"manual"===t&&this.emit("ve-search",{inputValue:e,reason:t}))}selectOption(e){if(!(e.disabled||this.disabled||this.loading)){if(this.isMultiple){const t=Array.isArray(this.value)?[...this.value]:[];if(t.some(t=>jt(t,e.value))){const r=t.filter(t=>!jt(t,e.value));return this.value=r,this.emitRemove(e),this.emitChange(this.getSelectedOptionsFromValue(r)),void(this.showSearch&&this.updateInputValue("","optionChecked"))}const r=[...t,e.value];return this.value=r,this.emitChange(this.getSelectedOptionsFromValue(r)),void(this.showSearch&&this.updateInputValue("","optionChecked"))}if(!Array.isArray(this.value)&&""!==this.value&&jt(this.value,e.value))return this.showSearch&&this.updateInputValue("","optionChecked"),this.setOpen(!1,"select"),void(this.showSearch&&this.blur());this.value=e.value,this.emitChange(e),this.showSearch&&this.updateInputValue("","optionChecked"),this.setOpen(!1,"select"),this.showSearch&&this.blur()}}clearValue(e){if(e?.preventDefault(),e?.stopPropagation(),this.disabled||this.loading)return;const t=this.isMultiple?[]:"";this.value=t,this.showSearch&&this.updateInputValue("","clear"),this.emitClear(t),this.emitChange(void 0)}removeValue(e,t){if(t.preventDefault(),t.stopPropagation(),!this.isMultiple||!Array.isArray(this.value)||this.disabled||this.loading)return;const r=this.value.filter(t=>!jt(t,e.value));this.value=r,this.emitRemove(e),this.emitChange(this.getSelectedOptionsFromValue(r))}handleClearPointerDown=e=>{e.preventDefault(),e.stopPropagation()};isEmbeddedActionTarget(e){return e instanceof Element&&null!==e.closest(".ve-select-clear, .ve-select-tag-remove")}handleControlPointerDown=e=>{0!==e.button||this.disabled||this.isEmbeddedActionTarget(e.target)||(this.showSearch&&e.target===this.searchInputElement?this.setOpen(!0,"trigger"):(e.preventDefault(),this.ignoreNextControlClick=!0,this.focus(),this.setOpen(!this.isOpen,"trigger")))};handleControlClick(){this.ignoreNextControlClick?this.ignoreNextControlClick=!1:this.disabled||this.setOpen(!this.isOpen,"trigger")}handleControlKeydown(e){this.disabled||e.target!==this.controlElement||this.handleNavigationKeydown(e)}handleSearchInput=e=>{const t=e.currentTarget;this.updateInputValue(t.value,"manual"),this.setOpen(!0,"trigger")};handleSearchKeydown=e=>{e.isComposing||229===e.keyCode||" "===e.key||"Home"===e.key||"End"===e.key||this.handleNavigationKeydown(e)};handleSearchClick=e=>{e.stopPropagation(),this.setOpen(!0,"trigger")};handleNavigationKeydown(e){switch(e.key){case"Enter":e.preventDefault(),this.handleEnterKey();break;case" ":this.isOpen&&e.target!==this.controlElement||(e.preventDefault(),this.setOpen(!0,"trigger"));break;case"ArrowDown":e.preventDefault(),this.setOpen(!0,"trigger"),this.moveActiveOption(1);break;case"ArrowUp":e.preventDefault(),this.setOpen(!0,"trigger"),this.moveActiveOption(-1);break;case"Home":this.isOpen&&(e.preventDefault(),this.activateBoundaryOption("first"));break;case"End":this.isOpen&&(e.preventDefault(),this.activateBoundaryOption("last"));break;case"Escape":this.isOpen&&(e.preventDefault(),this.setOpen(!1,"escape"))}}handleEnterKey(){if(!this.isOpen)return void this.setOpen(!0,"trigger");const e=this.activeOptionKey?this.optionByKey.get(this.activeOptionKey):void 0;e&&this.selectOption(e)}activateInitialOption(){const e=this.getSelectedOptions()[0],t=e?Vt(e.value):"",r=this.filteredEnabledOptions.find(({key:e})=>e===t);this.activeOptionKey=r?.key??this.filteredEnabledOptions[0]?.key??""}ensureActiveOption(){this.filteredEnabledOptions.some(({key:e})=>e===this.activeOptionKey)||(this.activeOptionKey=this.filteredEnabledOptions[0]?.key??"")}moveActiveOption(e){if(0===this.filteredEnabledOptions.length)return void(this.activeOptionKey="");const t=this.filteredEnabledOptions.findIndex(({key:e})=>e===this.activeOptionKey),r=((t>=0?t:e>0?-1:0)+e+this.filteredEnabledOptions.length)%this.filteredEnabledOptions.length;this.activeOptionKey=this.filteredEnabledOptions[r]?.key??""}activateBoundaryOption(e){this.activeOptionKey="first"===e?this.filteredEnabledOptions[0]?.key??"":this.filteredEnabledOptions.at(-1)?.key??""}setupAutoUpdate(){this.isConnected&&this.isOpen&&this.controlElement&&this.panelElement&&(this.teardownAutoUpdate(),this.cleanupAutoUpdate=(0,c.D9)(this.controlElement,this.panelElement,()=>this.scheduleUpdatePosition()))}teardownAutoUpdate(){this.cleanupAutoUpdate?.(),this.cleanupAutoUpdate=null}scheduleUpdatePosition(){this.repositionScheduler.schedule(()=>{this.updatePosition()})}async updatePosition(){if(!(this.isOpen&&this.isConnected&&this.controlElement&&this.panelElement))return;const e=++this.positionRequestId,t=this.controlElement,r=window.visualViewport?.width??document.documentElement.clientWidth,n=Math.max(0,r-16);if(this.popupMatchSelectWidth){const e=t.getBoundingClientRect(),r=this.isMultiple?"--ve-select-option-check-size":"--ve-select-arrow-icon-size";Object.assign(this.panelElement.style,{width:"max-content",minWidth:`${Math.min(e.width,n)}px`,maxWidth:`min(${n}px, calc(${e.width}px + var(${r}) + var(--ve-select-option-gap)))`})}else Object.assign(this.panelElement.style,{width:"max-content",minWidth:"",maxWidth:`${n}px`});const o=window.getComputedStyle(this),i=Number.parseFloat(o.getPropertyValue("--ve-select-panel-gap"))||4,a=await(0,c.VI)({reference:t,floating:this.panelElement,placement:"bottom-start",distance:i,viewportPadding:8});e===this.positionRequestId&&this.isOpen&&this.isConnected&&this.panelElement&&(this.panelPlacement=a.placement,Object.assign(this.panelElement.style,{left:"0",top:"0",transform:`translate3d(${Math.round(a.x)}px, ${Math.round(a.y)}px, 0)`}))}getOptionId(e){return`${this.listboxId}-option-${CSS.escape(e)}`}isSelected(e){return this.selectedOptionKeySet.has(Vt(e.value))}scrollActiveOptionIntoView(){if(!this.activeOptionKey||!this.panelElement)return;const e=this.panelElement.querySelector(`#${CSS.escape(this.getOptionId(this.activeOptionKey))}`);e?.scrollIntoView({block:"nearest"})}handleTagRemoveClick=e=>{const t=this.getOptionFromKey(e.currentTarget?.dataset.optionKey);t&&this.removeValue(t,e)};handleClearClick=e=>{this.clearValue(e)};handleOptionMouseDown=e=>{e.preventDefault()};handleOptionPointerMove=e=>{const t=e.currentTarget?.dataset.optionKey,r=this.getOptionFromKey(t);t&&r&&!r.disabled&&(this.activeOptionKey=t)};handleOptionClick=e=>{const t=this.getOptionFromKey(e.currentTarget?.dataset.optionKey);t&&this.selectOption(t)};handlePrefixSlotChange=e=>{const t=e.currentTarget,r=(t?.assignedNodes({flatten:!0}).filter(e=>e.nodeType!==Node.TEXT_NODE||(e.textContent?.trim().length??0)>0).length??0)>0;this.hasPrefixSlot=r};renderLabel(){const e=(this.label??"").trim();return e?n.qy`
      <span class="ve-select-label" part="label">
        <span class="ve-select-label-text">${e}</span>
      </span>
    `:n.s6}renderPrefix(){return n.qy`<span
      class=${(0,i.H)({"ve-select-prefix":!0,"ve-select-prefix-empty":!this.hasPrefixSlot})}
      ><slot name="prefix" @slotchange=${this.handlePrefixSlotChange}></slot
    ></span>`}renderTag(e){const t=!1!==e.closable&&!this.disabled&&!this.loading;return n.qy`
      <span class="ve-select-tag">
        <span class="ve-select-tag-label">${e.label}</span>
        ${t?n.qy`<button
              class="ve-select-tag-remove"
              type="button"
              aria-label=${`Remove ${e.label}`}
              data-option-key=${Vt(e.value)}
              @click=${this.handleTagRemoveClick}
            >
              <ve-icon .definition=${u.u}></ve-icon>
            </button>`:n.s6}
      </span>
    `}renderMultipleValue(){const e=this.getSelectedOptions();if(0===e.length)return n.qy`<span
        class="ve-select-value-text ve-select-value-text-placeholder"
        >${this.placeholder}</span
      >`;let t=e,r=0;return"number"==typeof this.maxTagCount&&(t=e.slice(0,this.maxTagCount),r=Math.max(e.length-t.length,0)),n.qy`
      ${t.map(e=>this.renderTag(e))}
      ${r>0?n.qy`<span class="ve-select-tag">+${r}</span>`:n.s6}
    `}getSingleValueDisplayText(e){const t=this.renderFormat?.(e);return"string"==typeof t?t:e.label}renderSingleValue(){const e=this.getSelectedOptions()[0];return e?n.qy`<span class="ve-select-value-text"
      >${this.getSingleValueDisplayText(e)}</span
    >`:n.qy`<span
        class="ve-select-value-text ve-select-value-text-placeholder"
        >${this.placeholder}</span
      >`}renderSelectionDescription(){if(!this.showSearch)return n.s6;const e=this.getSelectedOptions();return 0===e.length?n.s6:n.qy`<span
      class="ve-select-visually-hidden"
      id=${this.selectionDescriptionId}
      >Selected: ${e.map(e=>e.label).join(", ")}</span
    >`}renderSearchInput(){if(!this.showSearch)return n.s6;const e=this.getSelectedOptions().length>0;return n.qy`<input
      class=${(0,i.H)({"ve-select-search-input":!0,"ve-select-search-input-single":!this.isMultiple})}
      type="text"
      role="combobox"
      autocomplete="off"
      .value=${this.inputValue}
      placeholder=${e?"":this.placeholder}
      ?disabled=${this.disabled}
      aria-haspopup="listbox"
      aria-controls=${(0,a.J)(this.isOpen?this.listboxId:void 0)}
      aria-activedescendant=${(0,a.J)(this.isOpen?this.activeOptionId:void 0)}
      aria-expanded=${this.isOpen?"true":"false"}
      aria-busy=${this.loading?"true":"false"}
      aria-label=${(0,a.J)(this.controlAriaLabel)}
      aria-labelledby=${(0,a.J)(this.controlAriaLabelledby)}
      aria-describedby=${(0,a.J)(this.controlAriaDescribedby)}
      aria-required=${(0,a.J)(this.controlAriaRequired)}
      aria-invalid=${(0,a.J)(this.controlAriaInvalid)}
      @input=${this.handleSearchInput}
      @keydown=${this.handleSearchKeydown}
      @click=${this.handleSearchClick}
    />`}renderSingleSearchValue(){const e=this.getSelectedOptions()[0],t=e&&0===this.inputValue.length;return n.qy`
      <span class="ve-select-single-search-value">
        ${t?n.qy`<span class="ve-select-selected-value-hint" aria-hidden="true"
              >${this.getSingleValueDisplayText(e)}</span
            >`:n.s6}
        ${this.renderSearchInput()}
      </span>
    `}renderValue(){return this.showSearch&&!this.isMultiple?n.qy`<span class="ve-select-value"
        >${this.renderSingleSearchValue()}</span
      >`:n.qy`<span class="ve-select-value"
      >${this.isMultiple?this.renderMultipleValue():this.renderSingleValue()}
      ${this.renderSearchInput()}</span
    >`}renderActions(){return n.qy`
      <span class="ve-select-actions">
        ${this.shouldShowClear?n.qy`<button
              class="ve-select-clear"
              part="clear"
              type="button"
              aria-label="Clear selection"
              @pointerdown=${this.handleClearPointerDown}
              @click=${this.handleClearClick}
            >
              <ve-icon .definition=${u.u}></ve-icon>
            </button>`:n.s6}
        ${this.loading?n.qy`<span class="ve-select-loading" aria-hidden="true"
              ><ve-icon .definition=${v.o}></ve-icon
            ></span>`:n.qy`<span class="ve-select-arrow" aria-hidden="true"
              ><ve-icon
                .definition=${this.isOpen?h.chevronUpMdIcon:p.chevronDownMdIcon}
              ></ve-icon
            ></span>`}
      </span>
    `}renderOptionCheckIcon(){return n.qy`
      <svg
        class="ve-select-option-check-icon"
        aria-hidden="true"
        focusable="false"
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
      >
        <path
          d="M2 6l3 3 5-5"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    `}renderOptionContent(e){const t=this.optionContentSlotByKey.get(Vt(e.value));return t?n.qy`
        <span class="ve-select-option-content">
          <slot name=${t}></slot>
        </span>
      `:n.qy`<span class="ve-select-option-label">${e.label}</span>`}renderOption(e){const t=this.isSelected(e),r=Vt(e.value),o=r===this.activeOptionKey;return n.qy`
      <li role="presentation">
        <button
          id=${this.getOptionId(r)}
          class=${(0,i.H)({"ve-select-option":!0,"ve-select-option-active":o,"ve-select-option-selected":t,"ve-select-option-disabled":!0===e.disabled})}
          data-option-key=${r}
          part="option"
          type="button"
          role="option"
          tabindex="-1"
          aria-selected=${t?"true":"false"}
          ?disabled=${!0===e.disabled}
          @mousedown=${this.handleOptionMouseDown}
          @pointermove=${this.handleOptionPointerMove}
          @click=${this.handleOptionClick}
        >
          ${this.isMultiple?n.qy`<span
                class=${(0,i.H)({"ve-select-option-check":!0,"ve-select-option-check-selected":t})}
                aria-hidden="true"
              >
                ${t?this.renderOptionCheckIcon():n.s6}
              </span>`:n.s6}
          ${this.renderOptionContent(e)}
          ${this.isMultiple?n.s6:n.qy`<span
                class="ve-select-option-icon ve-select-option-icon-selected"
                aria-hidden="true"
                >${t?n.qy`<ve-icon .definition=${g.o}></ve-icon>`:n.s6}</span
              >`}
        </button>
      </li>
    `}renderFeedback(){const e=(this.description??"").trim();return e?n.qy`
      <div class="ve-select-feedback">
        <div
          class="ve-select-description"
          id=${this.descriptionId}
          part="description"
        >
          ${e}
        </div>
      </div>
    `:n.s6}renderOptionsList(e){return this.loading?n.qy`<div class="ve-select-empty ve-select-empty-loading">
        Loading...
      </div>`:0===e.length?this.renderEmpty():n.qy`
      <div class="ve-select-panel-inner">
        <ul
          class="ve-select-options"
          id=${this.listboxId}
          role="listbox"
          aria-multiselectable=${(0,a.J)(this.isMultiple?"true":void 0)}
        >
          ${e.map(e=>Lt(e)?n.qy`
              <li class="ve-select-group" role="presentation">
                <span class="ve-select-group-label">${e.label}</span>
                <ul
                  class="ve-select-group-options"
                  role="group"
                  aria-label=${e.label}
                >
                  ${e.options.map(e=>this.renderOption(e))}
                </ul>
              </li>
            `:this.renderOption(e))}
        </ul>
      </div>
    `}renderEmpty(){const e=(this.emptySlot?.assignedNodes({flatten:!0}).length??0)>0;return n.qy`
      <div class="ve-select-empty">
        ${e?n.qy`<slot name="empty"></slot>`:this.emptyText}
      </div>
    `}renderPanel(){return this.isOpen?n.qy`
      <div
        class="ve-select-panel"
        part="panel"
        popover=${"manual"}
        data-placement=${this.panelPlacement}
        style=${`--ve-select-panel-max-height: ${this.maxHeight}px;`}
      >
        ${this.renderOptionsList(this.filteredOptions)}
      </div>
    `:n.s6}render(){return n.qy`
      <div
        class=${(0,i.H)({"ve-select":!0,"ve-select-with-label":this.hasLeadingLabel,"ve-select-with-feedback":this.hasDescriptionFeedback})}
      >
        <div hidden aria-hidden="true">
          <slot @slotchange=${this.handleOptionsSourceChange}></slot>
        </div>
        <div class="ve-select-field">
          ${this.renderLabel()}
          <div
            class=${(0,i.H)({"ve-select-control":!0,"ve-select-control-filled":this.isFilled,"ve-select-control-multiple":this.isMultiple})}
            part="control"
            tabindex=${this.disabled||this.showSearch?"-1":"0"}
            role=${(0,a.J)(this.showSearch?void 0:"combobox")}
            aria-haspopup=${(0,a.J)(this.showSearch?void 0:"listbox")}
            aria-controls=${(0,a.J)(!this.showSearch&&this.isOpen?this.listboxId:void 0)}
            aria-activedescendant=${(0,a.J)(!this.showSearch&&this.isOpen?this.activeOptionId:void 0)}
            aria-expanded=${(0,a.J)(this.showSearch?void 0:this.isOpen?"true":"false")}
            aria-disabled=${this.disabled?"true":"false"}
            aria-busy=${(0,a.J)(this.showSearch?void 0:this.loading?"true":"false")}
            aria-label=${(0,a.J)(this.showSearch?void 0:this.controlAriaLabel)}
            aria-labelledby=${(0,a.J)(this.showSearch?void 0:this.controlAriaLabelledby)}
            aria-describedby=${(0,a.J)(this.showSearch?void 0:this.controlAriaDescribedby)}
            aria-required=${(0,a.J)(this.showSearch?void 0:this.controlAriaRequired)}
            aria-invalid=${(0,a.J)(this.showSearch?void 0:this.controlAriaInvalid)}
            @pointerdown=${this.handleControlPointerDown}
            @click=${this.handleControlClick}
            @keydown=${this.handleControlKeydown}
          >
            ${this.renderPrefix()} ${this.renderValue()} ${this.renderActions()}
            ${this.renderSelectionDescription()}
          </div>
        </div>
        ${this.renderFeedback()} ${this.renderPanel()}
      </div>
    `}}r.d(t,["Me",0,O,"q9",0,"ve-select","u5",0,q])},444(e,t,r){r.d(t,{c:()=>le});var n=r(45080),o=r(67463),i=r(61834),a=r(94023),s=r(17400),l=r(40362),c=r(93837);const d=n.AH`
  :host {
    --ve-button-gap: var(--space-xxxs);

    --ve-button-height-small: var(--height-small);
    --ve-button-height-default: var(--height-default);
    --ve-button-height-large: var(--height-large);

    --ve-button-padding-inline-small: var(--space-xxs);
    --ve-button-padding-inline-default: var(--space-xs);
    --ve-button-padding-inline-large: var(--space-xs);

    --ve-button-radius-default: var(--radius-md);
    --ve-button-radius-round: var(--radius-full);
    --ve-button-radius-circle: var(--radius-full);

    --ve-button-font-size-small: var(--text-body-sm);
    --ve-button-font-size-default: var(--text-body);
    --ve-button-font-size-large: var(--text-body);
    --ve-button-font-weight: var(--font-weight-normal);

    --ve-button-background-primary: var(--color-bg-primary);
    --ve-button-text-primary: var(--color-text-foreground);
    --ve-button-border-primary: transparent;

    --ve-button-background-secondary: var(--color-bg-secondary);
    --ve-button-text-secondary: var(--color-text-primary);
    --ve-button-border-secondary: transparent;

    --ve-button-background-outline: transparent;
    --ve-button-text-outline: var(--color-text-primary);
    --ve-button-border-outline: var(--color-border-strong);
    --ve-button-border-outline-hover: var(--color-border-interactive);
    --ve-button-border-outline-pressed: var(--color-border-interactive-active);

    --ve-button-background-text: transparent;
    --ve-button-text-text: var(--color-text-accent);
    --ve-button-border-text: transparent;

    --ve-button-status-surface-success: var(--color-bg-success);
    --ve-button-status-surface-warning: var(--color-bg-warning);
    --ve-button-status-surface-danger: var(--color-bg-danger);

    --ve-button-status-surface-secondary-success: var(
      --color-bg-success-secondary
    );
    --ve-button-status-surface-secondary-warning: var(
      --color-bg-warning-secondary
    );
    --ve-button-status-surface-secondary-danger: var(
      --color-bg-danger-secondary
    );

    --ve-button-status-text-success: var(--color-text-success);
    --ve-button-status-text-warning: var(--color-text-warning);
    --ve-button-status-text-danger: var(--color-text-danger);

    --ve-button-status-border-success: var(--color-border-success);
    --ve-button-status-border-warning: var(--color-border-warning);
    --ve-button-status-border-danger: var(--color-border-danger);

    /* 默认与 ve-icon 自身尺寸（1.15em）保持一致；基于 host 计算的
       绝对字号做缩放，保证 light DOM 中的图标包裹层也能解析到正确值 */
    --ve-button-icon-size: calc(var(--ve-button-current-font-size) * 1.15);
    --ve-button-loading-icon-size: var(--ve-button-current-font-size);
    --ve-button-disabled-opacity: var(--state-disabled-ratio);
    --ve-button-press-transform: translateY(0.4px) scale(0.995);

    --ve-button-current-height: var(--ve-button-height-default);
    --ve-button-current-padding-inline: var(--ve-button-padding-inline-default);
    --ve-button-current-radius: var(--ve-button-radius-default);
    --ve-button-current-font-size: var(--ve-button-font-size-default);

    --ve-button-current-background: var(--ve-button-background-primary);
    --ve-button-current-background-hover: color-mix(
      in srgb,
      var(--ve-button-current-background) var(--ve-button-current-hover-ratio),
      var(--ve-button-current-hover-mix)
    );
    --ve-button-current-background-pressed: color-mix(
      in srgb,
      var(--ve-button-current-background) var(--ve-button-current-pressed-ratio),
      var(--ve-button-current-pressed-mix)
    );
    --ve-button-current-text: var(--ve-button-text-primary);
    --ve-button-current-text-hover: var(--ve-button-current-text);
    --ve-button-current-text-pressed: var(--ve-button-current-text);
    --ve-button-current-border: var(--ve-button-border-primary);
    --ve-button-current-border-hover: color-mix(
      in srgb,
      var(--ve-button-current-border) var(--ve-button-current-hover-ratio),
      var(--ve-button-current-hover-mix)
    );
    --ve-button-current-border-pressed: color-mix(
      in srgb,
      var(--ve-button-current-border) var(--ve-button-current-pressed-ratio),
      var(--ve-button-current-pressed-mix)
    );
    --ve-button-current-border-width: 0px;

    --ve-button-current-hover-ratio: var(--state-hover-solid-ratio);
    --ve-button-current-hover-mix: var(--state-hover-solid-mix);
    --ve-button-current-pressed-ratio: var(--state-pressed-solid-ratio);
    --ve-button-current-pressed-mix: var(--state-pressed-solid-mix);

    --ve-button-current-status-surface: transparent;
    --ve-button-current-status-surface-secondary: transparent;
    --ve-button-current-status-text: currentColor;
    --ve-button-current-status-border: currentColor;
  }

  :host([type='secondary']) {
    --ve-button-current-background: var(--ve-button-background-secondary);
    --ve-button-current-text: var(--ve-button-text-secondary);
    --ve-button-current-border: var(--ve-button-border-secondary);
    --ve-button-current-border-width: 0px;

    --ve-button-current-hover-ratio: var(--state-hover-subtle-ratio);
    --ve-button-current-hover-mix: var(--state-hover-subtle-mix);
    --ve-button-current-pressed-ratio: var(--state-pressed-subtle-ratio);
    --ve-button-current-pressed-mix: var(--state-pressed-subtle-mix);
  }

  :host([type='outline']),
  :host([type='outline-filled']) {
    --ve-button-current-background: var(--ve-button-background-outline);
    --ve-button-current-text: var(--ve-button-text-outline);
    --ve-button-current-border: var(--ve-button-border-outline);
    --ve-button-current-border-hover: var(--ve-button-border-outline-hover);
    --ve-button-current-border-pressed: var(--ve-button-border-outline-pressed);
    --ve-button-current-border-width: var(--stroke-weight-base);

    --ve-button-current-hover-ratio: var(--state-hover-subtle-ratio);
    --ve-button-current-hover-mix: var(--state-hover-subtle-mix);
    --ve-button-current-pressed-ratio: var(--state-pressed-subtle-ratio);
    --ve-button-current-pressed-mix: var(--state-pressed-subtle-mix);
  }

  :host([type='outline']) {
    --ve-button-current-background-hover: var(--ve-button-current-background);
    --ve-button-current-background-pressed: var(
      --ve-button-current-background
    );
  }

  :host([type='outline-filled']) {
    --ve-button-current-border-hover: var(--ve-button-current-border);
    --ve-button-current-border-pressed: var(--ve-button-current-border);
  }

  :host([type='text']) {
    --ve-button-current-background: var(--ve-button-background-text);
    --ve-button-current-text: var(--ve-button-text-text);
    --ve-button-current-border: var(--ve-button-border-text);
    --ve-button-current-border-width: 0px;

    --ve-button-current-hover-ratio: var(--state-hover-subtle-ratio);
    --ve-button-current-hover-mix: var(--state-hover-subtle-mix);
    --ve-button-current-pressed-ratio: var(--state-pressed-subtle-ratio);
    --ve-button-current-pressed-mix: var(--state-pressed-subtle-mix);
  }

  :host([size='small']) {
    --ve-button-current-height: var(--ve-button-height-small);
    --ve-button-current-padding-inline: var(--ve-button-padding-inline-small);
    --ve-button-current-font-size: var(--ve-button-font-size-small);
  }

  :host([size='large']) {
    --ve-button-current-height: var(--ve-button-height-large);
    --ve-button-current-padding-inline: var(--ve-button-padding-inline-large);
    --ve-button-current-font-size: var(--ve-button-font-size-large);
  }

  :host([shape='round']) {
    --ve-button-current-radius: var(--ve-button-radius-round);
  }

  :host([shape='circle']) {
    --ve-button-current-radius: var(--ve-button-radius-circle);
    --ve-button-current-padding-inline: 0px;
  }

  :host([status='success']) {
    --ve-button-current-status-surface: var(--ve-button-status-surface-success);
    --ve-button-current-status-surface-secondary: var(
      --ve-button-status-surface-secondary-success
    );
    --ve-button-current-status-text: var(--ve-button-status-text-success);
    --ve-button-current-status-border: var(--ve-button-status-border-success);
  }

  :host([status='warning']) {
    --ve-button-current-status-surface: var(--ve-button-status-surface-warning);
    --ve-button-current-status-surface-secondary: var(
      --ve-button-status-surface-secondary-warning
    );
    --ve-button-current-status-text: var(--ve-button-status-text-warning);
    --ve-button-current-status-border: var(--ve-button-status-border-warning);
  }

  :host([status='danger']) {
    --ve-button-current-status-surface: var(--ve-button-status-surface-danger);
    --ve-button-current-status-surface-secondary: var(
      --ve-button-status-surface-secondary-danger
    );
    --ve-button-current-status-text: var(--ve-button-status-text-danger);
    --ve-button-current-status-border: var(--ve-button-status-border-danger);
  }

  :host([status='success'][type='primary']),
  :host([status='warning'][type='primary']),
  :host([status='danger'][type='primary']) {
    --ve-button-current-background: var(--ve-button-current-status-surface);
    --ve-button-current-text: var(--ve-button-text-primary);
  }

  :host([status='success'][type='secondary']),
  :host([status='warning'][type='secondary']),
  :host([status='danger'][type='secondary']) {
    --ve-button-current-background: var(
      --ve-button-current-status-surface-secondary
    );
    --ve-button-current-text: var(--ve-button-current-status-text);
  }

  :host([status='success'][type='outline']),
  :host([status='warning'][type='outline']),
  :host([status='danger'][type='outline']),
  :host([status='success'][type='outline-filled']),
  :host([status='warning'][type='outline-filled']),
  :host([status='danger'][type='outline-filled']) {
    --ve-button-current-text: var(--ve-button-current-status-text);
    --ve-button-current-border: var(--ve-button-current-status-border);
    --ve-button-current-text-hover: var(--ve-button-current-status-text);
    --ve-button-current-text-pressed: color-mix(
      in srgb,
      var(--ve-button-current-status-text)
        var(--ve-button-current-pressed-ratio),
      var(--ve-button-current-pressed-mix)
    );
    --ve-button-current-border-hover: var(--ve-button-current-text-hover);
    --ve-button-current-border-pressed: color-mix(
      in srgb,
      var(--ve-button-current-status-border)
        var(--ve-button-current-pressed-ratio),
      var(--ve-button-current-pressed-mix)
    );
  }

  :host([status='success'][type='outline-filled']),
  :host([status='warning'][type='outline-filled']),
  :host([status='danger'][type='outline-filled']) {
    --ve-button-current-border-hover: var(--ve-button-current-border);
    --ve-button-current-border-pressed: var(--ve-button-current-border);
    --ve-button-current-background-hover: color-mix(
      in srgb,
      var(--ve-button-current-status-surface-secondary)
        var(--ve-button-current-hover-ratio),
      var(--ve-button-current-hover-mix)
    );
    --ve-button-current-background-pressed: color-mix(
      in srgb,
      var(--ve-button-current-status-surface-secondary)
        var(--ve-button-current-pressed-ratio),
      var(--ve-button-current-pressed-mix)
    );
  }

  :host([status='success'][type='text']),
  :host([status='warning'][type='text']),
  :host([status='danger'][type='text']) {
    --ve-button-current-background-hover: color-mix(
      in srgb,
      var(--ve-button-current-status-surface-secondary)
        var(--ve-button-current-hover-ratio),
      var(--ve-button-current-hover-mix)
    );
    --ve-button-current-background-pressed: color-mix(
      in srgb,
      var(--ve-button-current-status-surface-secondary)
        var(--ve-button-current-pressed-ratio),
      var(--ve-button-current-pressed-mix)
    );
    --ve-button-current-text: var(--ve-button-current-status-text);
  }

  @supports not (color: color-mix(in srgb, red, blue)) {
    :host {
      --ve-button-current-background-hover: var(--ve-button-current-background);
      --ve-button-current-background-pressed: var(
        --ve-button-current-background
      );
      --ve-button-current-border-hover: var(--ve-button-current-border);
      --ve-button-current-border-pressed: var(--ve-button-current-border);
    }

    :host([status='success'][type='outline']),
    :host([status='warning'][type='outline']),
    :host([status='danger'][type='outline']),
    :host([status='success'][type='outline-filled']),
    :host([status='warning'][type='outline-filled']),
    :host([status='danger'][type='outline-filled']) {
      --ve-button-current-text-pressed: var(--ve-button-current-status-text);
      --ve-button-current-border-pressed: var(
        --ve-button-current-status-border
      );
    }

    :host([status='success'][type='outline-filled']),
    :host([status='warning'][type='outline-filled']),
    :host([status='danger'][type='outline-filled']) {
      --ve-button-current-background-hover: var(
        --ve-button-current-status-surface-secondary
      );
      --ve-button-current-background-pressed: var(
        --ve-button-current-status-surface-secondary
      );
    }

    :host([status='success'][type='text']),
    :host([status='warning'][type='text']),
    :host([status='danger'][type='text']) {
      --ve-button-current-background-hover: var(
        --ve-button-current-status-surface-secondary
      );
      --ve-button-current-background-pressed: var(
        --ve-button-current-status-surface-secondary
      );
    }
  }
`,u=[a.H6,d,n.AH`
    :host {
      display: inline-flex;
      vertical-align: middle;
    }

    :host([hidden]) {
      display: none;
    }

    :host([disabled]) {
      cursor: not-allowed;
    }

    :host([loading]) {
      cursor: wait;
    }

    :host([long]) {
      display: flex;
      width: 100%;
    }

    .ve-btn {
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: var(--ve-button-gap);
      appearance: none;
      box-sizing: border-box;
      margin: 0;
      min-inline-size: fit-content;
      block-size: var(--ve-button-current-height);
      padding-block: 0;
      padding-inline: var(--ve-button-current-padding-inline);
      border-style: solid;
      border-width: var(--ve-button-current-border-width);
      border-color: var(--ve-button-current-border);
      border-radius: var(--ve-button-current-radius);
      background: var(--ve-button-current-background);
      color: var(--ve-button-current-text);
      font-family: var(--font-sans);
      font-size: var(--ve-button-current-font-size);
      font-weight: var(--ve-button-font-weight);
      line-height: 1;
      text-align: center;
      text-decoration: none;
      white-space: nowrap;
      user-select: none;
      cursor: pointer;
      transition:
        background-color 160ms ease,
        border-color 160ms ease,
        color 160ms ease,
        transform 90ms ease-out,
        opacity 160ms ease,
        box-shadow 160ms ease;
    }

    :host([long]) .ve-btn {
      width: 100%;
    }

    .ve-btn--compact {
      inline-size: var(--ve-button-current-height);
      min-inline-size: var(--ve-button-current-height);
      padding-inline: 0;
    }

    :host([shape='circle']) .ve-btn {
      inline-size: var(--ve-button-current-height);
    }

    .ve-btn:focus-visible {
      outline: none;
    }

    :host(:not([disabled]):not([loading])) .ve-btn:hover,
    :host(:not([disabled]):not([loading])) .ve-btn:focus-visible {
      background: var(--ve-button-current-background-hover);
      border-color: var(--ve-button-current-border-hover);
      color: var(--ve-button-current-text-hover);
    }

    :host(:not([disabled]):not([loading])) .ve-btn:active {
      background: var(--ve-button-current-background-pressed);
      border-color: var(--ve-button-current-border-pressed);
      color: var(--ve-button-current-text-pressed);
      transform: var(--ve-button-press-transform);
    }

    :host([disabled]) .ve-btn {
      opacity: var(--ve-button-disabled-opacity);
      cursor: not-allowed;
      pointer-events: none;
    }

    :host([loading]) .ve-btn {
      cursor: wait;
      pointer-events: none;
    }

    .ve-btn-content {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: var(--ve-button-gap);
    }

    .ve-btn-icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex: none;
      line-height: 0;
      /* 通过 -override 钩子把图标尺寸继承式地下发给插槽内（含包裹层内）
         的 ve-icon；ve-icon 自身 :host 声明会阻断直接继承 --ve-icon-size */
      --ve-icon-size-override: var(--ve-button-icon-size);
    }

    /* 与 .ve-btn-icon 的 display 规则优先级持平，需显式兜底 hidden 行为 */
    .ve-btn-icon[hidden] {
      display: none;
    }

    .ve-btn-icon ::slotted(*) {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex: none;
    }

    .ve-btn-icon ::slotted(svg),
    .ve-btn-icon ::slotted(img) {
      inline-size: var(--ve-button-icon-size);
      block-size: var(--ve-button-icon-size);
      color: inherit;
    }

    .ve-btn-loading-icon {
      --ve-icon-size: var(--ve-button-loading-icon-size);

      animation: ve-button-spin 0.8s linear infinite;
      flex: none;
    }

    @keyframes ve-button-spin {
      to {
        transform: rotate(360deg);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .ve-btn {
        transition: none;
      }

      .ve-btn-loading-icon {
        animation: none;
      }
    }

  `];function v(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function h(e){if(Object(e)!==e)throw TypeError("right-hand side of 'in' should be an object, got "+(null!==e?typeof e:"null"));return e}function p(e,t,r){"symbol"==typeof t&&(t=(t=t.description)?"["+t+"]":"");try{Object.defineProperty(e,"name",{configurable:!0,value:r?r+" "+t:t})}catch(n){}return e}let g,b,m,f,_,w,y,x,k,S,C,z,E,O,M,A,I,P,T,$,R,D,F,L,V,j,q,H,B,N,W,K,U,Z,G,J,X,Y,Q,ee,te,re,ne,oe,ie;const ae=["aria-label","aria-labelledby","aria-describedby"],se=/^[^\p{L}\p{N}\p{Script=Han}]{1,2}$/u;g=(0,i.MZ)({type:String,reflect:!0,useDefault:!0}),b=(0,i.MZ)({type:String,reflect:!0,useDefault:!0}),m=(0,i.MZ)({type:String,reflect:!0,useDefault:!0}),f=(0,i.MZ)({type:String,reflect:!0,useDefault:!0}),_=(0,i.MZ)({type:Boolean,reflect:!0}),w=(0,i.MZ)({type:Boolean,reflect:!0}),y=(0,i.MZ)({type:Boolean,reflect:!0}),x=(0,i.MZ)({type:String}),k=(0,i.MZ)({type:String}),S=(0,i.P)(".ve-btn"),C=(0,i.P)(".ve-btn-content"),z=(0,i.P)("slot:not([name])"),E=(0,i.P)('slot[name="icon"]'),O=(0,i.wk)(),M=(0,i.wk)();class le extends a.IB{static{({e:[A,I,P,T,$,R,D,F,L,V,j,q,H,B,N,W,K,U,Z,G,J,X,Y,Q,ee,te,re,ne,oe,ie]}=function(e,t,r,n,o,i){var a,s,l,c,d,u,g,b=Symbol.metadata||Symbol.for("Symbol.metadata"),m=Object.defineProperty,f=Object.create,_=[f(null),f(null)],w=t.length;function y(t,r,n){return function(o,i){r&&(i=o,o=e);for(var a=0;a<t.length;a++)i=t[a].apply(o,n?[i]:[]);return n?i:o}}function x(e,t,r,n){if("function"!=typeof e&&(n||void 0!==e))throw new TypeError(t+" must "+(r||"be")+" a function"+(n?"":" or undefined"));return e}function k(e,t,r,n,o,i,l,c,d,u,v){function h(e){if(!v(e))throw new TypeError("Attempted to access private element on non-instance")}var g=[].concat(t[0]),b=t[3],f=!l,w=1===o,k=3===o,S=4===o,C=2===o;function z(t,r,n){return function(o,i){return r&&(i=o,o=e),n&&n(o),desc[t].call(o,i)}}var E={},O=[],M=k?"get":S||w?"set":"value";if(!f&&(d?(u||w?E={get:p(function(){return b(this)},n,"get"),set:function(e){t[4](this,e)}}:E[M]=b,u||p(E[M],n,C?"":M)):u||(E=Object.getOwnPropertyDescriptor(e,n)),!u&&!d)){if((s=_[+c][n])&&7!==(s^o))throw new Error("Decorating two elements with the same name ("+E[M].name+") is not supported yet");_[+c][n]=o<3?1:o}for(var A=e,I=g.length-1;I>=0;I-=r?2:1){var P=x(g[I],"A decorator","be",!0),T=r?g[I-1]:void 0,$={},R={kind:["field","accessor","method","getter","setter","class"][o],name:n,metadata:a,addInitializer:function(e,t){if(e.v)throw new TypeError("attempted to call addInitializer after decoration was finished");x(t,"An initializer","be",!0),i.push(t)}.bind(null,$)};if(f)s=P.call(T,A,R),$.v=1,x(s,"class decorators","return")&&(A=s);else if(R.static=c,R.private=d,s=R.access={has:d?v.bind():function(e){return n in e}},S||(s.get=d?C?function(e){return h(e),E.value}:z("get",0,h):function(e){return e[n]}),C||k||(s.set=d?z("set",0,h):function(e,t){e[n]=t}),A=P.call(T,w?{get:E.get,set:E.set}:E[M],R),$.v=1,w){if("object"==typeof A&&A)(s=x(A.get,"accessor.get"))&&(E.get=s),(s=x(A.set,"accessor.set"))&&(E.set=s),(s=x(A.init,"accessor.init"))&&O.unshift(s);else if(void 0!==A)throw new TypeError("accessor decorators must return an object with get, set, or init properties or undefined")}else x(A,(u?"field":"method")+" decorators","return")&&(u?O.unshift(A):E[M]=A)}return o<2&&l.push(y(O,c,1),y(i,c,0)),u||f||(d?w?l.splice(-1,0,z("get",c),z("set",c)):l.push(C?E[M]:x.call.bind(E[M])):m(e,n,E)),A}function S(e){return m(e,b,{configurable:!0,enumerable:!0,value:a})}return void 0!==i&&(a=i[b]),a=f(null==a?null:a),d=[],u=function(e){e&&d.push(y(e))},(g=function(t,n){for(var i=0;i<r.length;i++){var a=r[i],s=a[1],u=7&s;if((8&s)==t&&!u==n){var p=a[2],g=!!a[3],b=16&s;k(t?e:e.prototype,a,b,g?"#"+p:v(p),u,u<2?[]:t?c=c||[]:l=l||[],d,!!t,g,n,t&&g?function(t){return h(t)===e}:o)}}})(8,0),g(0,0),g(8,1),g(0,1),u(l),u(c),s=d,w||S(e),{e:s,get c(){var r=[];return w&&[S(e=k(e,[t],n,e.name,5,r)),y(r,1)]}}}(this,[],[[g,1,"type"],[b,1,"size"],[m,1,"shape"],[f,1,"status"],[_,1,"disabled"],[w,1,"loading"],[y,1,"long"],[x,1,"href"],[k,1,"target"],[S,1,"controlElement"],[C,1,"contentElement"],[z,1,"defaultSlot"],[E,1,"iconSlot"],[O,1,"compact"],[M,1,"hasIconSlot"]]))}static styles=u;static dependencies={[s.v]:s.O};static get observedAttributes(){return[...new Set([...super.observedAttributes,...ae])]}#U=(()=>{const e=A(this,"primary");return I(this),e})();get type(){return this.#U}set type(e){this.#U=e}#yr=(()=>{const e=P(this,"default");return T(this),e})();get size(){return this.#yr}set size(e){this.#yr=e}#xr=(()=>{const e=$(this,"default");return R(this),e})();get shape(){return this.#xr}set shape(e){this.#xr=e}#kr=(()=>{const e=D(this,"default");return F(this),e})();get status(){return this.#kr}set status(e){this.#kr=e}#Sr=(()=>{const e=L(this,!1);return V(this),e})();get disabled(){return this.#Sr}set disabled(e){this.#Sr=e}#Cr=(()=>{const e=j(this,!1);return q(this),e})();get loading(){return this.#Cr}set loading(e){this.#Cr=e}#zr=(()=>{const e=H(this,!1);return B(this),e})();get long(){return this.#zr}set long(e){this.#zr=e}#Er=(()=>{const e=N(this,"");return W(this),e})();get href(){return this.#Er}set href(e){this.#Er=e}#Or=(()=>{const e=K(this,"_self");return U(this),e})();get target(){return this.#Or}set target(e){this.#Or=e}#Mr=(()=>{const e=Z(this,null);return G(this),e})();get controlElement(){return this.#Mr}set controlElement(e){this.#Mr=e}#Ar=(()=>{const e=J(this,null);return X(this),e})();get contentElement(){return this.#Ar}set contentElement(e){this.#Ar=e}#Ir=(()=>{const e=Y(this,null);return Q(this),e})();get defaultSlot(){return this.#Ir}set defaultSlot(e){this.#Ir=e}#Pr=(()=>{const e=ee(this,null);return te(this),e})();get iconSlot(){return this.#Pr}set iconSlot(e){this.#Pr=e}#Tr=(()=>{const e=re(this,!1);return ne(this),e})();get compact(){return this.#Tr}set compact(e){this.#Tr=e}#$r=(()=>{const e=oe(this,!1);return ie(this),e})();get hasIconSlot(){return this.#$r}set hasIconSlot(e){this.#$r=e}contentResizeObserver=null;observedContentElement=null;constructor(){super(),this.addEventListener("click",this.handleHostClick,{capture:!0})}get isLinkMode(){return(this.href??"").trim().length>0}get isUnavailable(){return this.disabled||this.loading}get showCustomIcon(){return!this.loading&&(this.hasIconSlot||(0,l.mh)(this,"icon"))}get controlAriaLabel(){return this.getAttribute("aria-label")??void 0}get controlAriaLabelledby(){return this.getAttribute("aria-labelledby")??void 0}get controlAriaDescribedby(){return this.getAttribute("aria-describedby")??void 0}focus(e){this.controlElement?.focus(e)}click(){this.isUnavailable||this.controlElement?.click()}firstUpdated(e){super.firstUpdated(e),this.contentResizeObserver=new ResizeObserver(()=>{this.syncCompactState()}),this.observeContentElement(),this.syncIconSlotState(),this.syncCompactState()}updated(e){super.updated(e),this.observeContentElement(),this.syncCompactState()}disconnectedCallback(){this.contentResizeObserver?.disconnect(),this.observedContentElement=null,super.disconnectedCallback()}attributeChangedCallback(e,t,r){super.attributeChangedCallback(e,t,r),t!==r&&ae.includes(e)&&this.requestUpdate()}handleHostClick(e){this.isUnavailable&&(e.preventDefault(),e.stopImmediatePropagation())}handleClick(e){this.isUnavailable&&(e.preventDefault(),e.stopPropagation())}handleSlotChange(){this.syncCompactState()}handleIconSlotChange(){this.syncIconSlotState(),this.syncCompactState()}syncIconSlotState(){this.hasIconSlot=(0,l.qi)(this.iconSlot)||(0,l.mh)(this,"icon")}observeContentElement(){this.contentResizeObserver&&this.observedContentElement!==this.contentElement&&(this.observedContentElement&&this.contentResizeObserver.unobserve(this.observedContentElement),this.contentElement&&this.contentResizeObserver.observe(this.contentElement),this.observedContentElement=this.contentElement)}syncCompactState(){this.compact=this.shouldRenderCompactSquare()}shouldRenderCompactSquare(){if("default"!==this.shape||this.long||this.loading)return!1;const e=this.controlElement,t=this.contentElement;if(!e||!t||!this.hasCompactContent())return!1;const r=t.getBoundingClientRect().width,n=e.getBoundingClientRect().height;return r>0&&n>0&&r<=n}hasCompactContent(){const e=[...this.showCustomIcon?this.iconSlot?.assignedNodes({flatten:!0})??[]:[],...this.defaultSlot?.assignedNodes({flatten:!0})??[]].filter(e=>e.nodeType===Node.TEXT_NODE?(e.textContent?.trim().length??0)>0:e.nodeType===Node.ELEMENT_NODE);return e.length>0&&e.every(e=>this.isCompactContentNode(e))}isCompactContentNode(e){if(e.nodeType===Node.TEXT_NODE)return this.isCompactText(e.textContent??"");if(e.nodeType!==Node.ELEMENT_NODE)return!1;const t=e,r=t.textContent?.trim()??"",n=t.tagName.toLowerCase(),o="svg"===n||"img"===n||n.includes("icon");if("true"===t.getAttribute("aria-hidden")||"presentation"===t.getAttribute("role")||t.getAttribute("role"),o&&0===r.length)return!0;if(0===r.length){const e=Array.from(t.children),r=1===e.length?e[0]:void 0;return void 0!==r&&this.isCompactContentNode(r)}return this.isCompactText(r)}isCompactText(e){return se.test(e.trim())}renderIcon(){return n.qy`
      <span class="ve-btn-icon" part="icon" ?hidden=${!this.showCustomIcon}>
        <slot name="icon" @slotchange=${this.handleIconSlotChange}></slot>
      </span>
    `}renderContent(){return n.qy`
      ${this.loading?n.qy`<ve-icon
            class="ve-btn-loading-icon"
            part="spinner"
            .definition=${c.o}
          ></ve-icon>`:n.s6}
      <span class="ve-btn-content" part="content">
        ${this.renderIcon()}
        <slot @slotchange=${this.handleSlotChange}></slot>
      </span>
    `}render(){const e=this.compact?"ve-btn ve-btn--compact":"ve-btn";return this.isLinkMode?n.qy`
        <a
          class=${e}
          part="control"
          href=${(0,o.J)(this.isUnavailable?void 0:this.href)}
          target=${(0,o.J)(this.isUnavailable?void 0:this.target)}
          rel=${(0,o.J)(this.isUnavailable||"_blank"!==this.target?void 0:"noreferrer noopener")}
          aria-label=${(0,o.J)(this.controlAriaLabel)}
          aria-labelledby=${(0,o.J)(this.controlAriaLabelledby)}
          aria-describedby=${(0,o.J)(this.controlAriaDescribedby)}
          aria-disabled=${(0,o.J)(this.isUnavailable?"true":void 0)}
          aria-busy=${(0,o.J)(this.loading?"true":void 0)}
          tabindex=${(0,o.J)(this.isUnavailable?"-1":void 0)}
          @click=${this.handleClick}
        >
          ${this.renderContent()}
        </a>
      `:n.qy`
      <button
        class=${e}
        part="control"
        type="button"
        ?disabled=${this.isUnavailable}
        aria-label=${(0,o.J)(this.controlAriaLabel)}
        aria-labelledby=${(0,o.J)(this.controlAriaLabelledby)}
        aria-describedby=${(0,o.J)(this.controlAriaDescribedby)}
        aria-busy=${(0,o.J)(this.loading?"true":void 0)}
        @click=${this.handleClick}
      >
        ${this.renderContent()}
      </button>
    `}}r.d(t,["I",0,"ve-button"])},43449(e,t,r){r.d(t,{check_namespaceObject:()=>a});var n=r(36300),o=r(24913),i=r(86913),a={};n.Q.r(a),n.Q.d(a,{checkIcon:()=>s});const s={name:"check",svg:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 6 9 17l-5-5"/></svg>\n'};(0,o.W)(),(0,i.pU)(s),r.d(t,["o",0,s])},36832(e,t,r){r.d(t,{close_namespaceObject:()=>a});var n=r(36300),o=r(24913),i=r(86913),a={};n.Q.r(a),n.Q.d(a,{closeIcon:()=>s});const s={name:"close",svg:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 5 5 19M5 5l14 14"/></svg>\n'};(0,o.W)(),(0,i.pU)(s),r.d(t,["u",0,s])},53793(e,t,r){r.r(t);var n=r(24913),o=r(86913);const i={name:"add",svg:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4v16m-8-8h16"/></svg>\n'};(0,n.W)(),(0,o.pU)(i),r.d(t,["addIcon",0,i])},78597(e,t,r){r.r(t);var n=r(24913),o=r(86913);const i={name:"arrow-down-sm",svg:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 7v10m-4-4 4 4 4-4"/></svg>\n'};(0,n.W)(),(0,o.pU)(i),r.d(t,["arrowDownSmIcon",0,i])},18110(e,t,r){r.r(t);var n=r(24913),o=r(86913);const i={name:"arrow-up-sm",svg:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 17V7m4 4-4-4-4 4"/></svg>\n'};(0,n.W)(),(0,o.pU)(i),r.d(t,["arrowUpSmIcon",0,i])},64006(e,t,r){r.r(t);var n=r(24913),o=r(86913);const i={name:"chevron-down-md",svg:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m19 9-7 7-7-7"/></svg>\n'};(0,n.W)(),(0,o.pU)(i),r.d(t,["chevronDownMdIcon",0,i])},31909(e,t,r){r.r(t);var n=r(24913),o=r(86913);const i={name:"chevron-left-md",svg:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m15 19-7-7 7-7"/></svg>\n'};(0,n.W)(),(0,o.pU)(i),r.d(t,["chevronLeftMdIcon",0,i])},74166(e,t,r){r.r(t);var n=r(24913),o=r(86913);const i={name:"chevron-right-md",svg:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m9 5 7 7-7 7"/></svg>\n'};(0,n.W)(),(0,o.pU)(i),r.d(t,["chevronRightMdIcon",0,i])},71093(e,t,r){r.r(t);var n=r(24913),o=r(86913);const i={name:"chevron-up-md",svg:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m5 16 7-7 7 7"/></svg>\n'};(0,n.W)(),(0,o.pU)(i),r.d(t,["chevronUpMdIcon",0,i])},92109(e,t,r){r.r(t);var n=r(24913),o=r(86913);const i={name:"copy",svg:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.75 7.75v-2a2 2 0 0 1 2-2h8.5a2 2 0 0 1 2 2v8.51a2 2 0 0 1-2 2h-2M3.75 9.75v8.5a2 2 0 0 0 2 2h8.5a2 2 0 0 0 2-2v-8.5a2 2 0 0 0-2-2h-8.5a2 2 0 0 0-2 2"/></svg>\n'};(0,n.W)(),(0,o.pU)(i),r.d(t,["copyIcon",0,i])},95249(e,t,r){r.r(t);var n=r(24913),o=r(86913);const i={name:"document",svg:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 17h6m-6-3h6M13 3H8.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C5 4.52 5 5.08 5 6.2v11.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h7.606c1.118 0 1.677 0 2.104-.218.377-.192.683-.498.875-.874.218-.428.218-.986.218-2.104V9.326L18.999 9M13 3c.286.003.466.014.638.055.204.05.4.13.579.24.202.124.375.297.72.643l3.126 3.125c.346.346.518.518.642.72q.165.271.24.578c.04.173.051.354.054.639M13 3v2.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h2.802"/></svg>\n'};(0,n.W)(),(0,o.pU)(i),r.d(t,["documentIcon",0,i])},40448(e,t,r){r.r(t);var n=r(24913),o=r(86913);const i={name:"down-up",svg:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m5 16 3 3 3-3m-3 3V5m11 3-3-3-3 3m3-3v14"/></svg>\n'};(0,n.W)(),(0,o.pU)(i),r.d(t,["downUpIcon",0,i])},53152(e,t,r){r.r(t);var n=r(24913),o=r(86913);const i={name:"error",svg:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m14.7 9.3-5.4 5.4m0-5.4 5.4 5.4M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0"/></svg>\n'};(0,n.W)(),(0,o.pU)(i),r.d(t,["errorIcon",0,i])},97894(e,t,r){r.r(t);var n=r(24913),o=r(86913);const i={name:"more-horizontal",svg:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M5.01 10.2a1.8 1.8 0 0 1 1.8 1.8v.01a1.8 1.8 0 0 1-1.8 1.8H5a1.8 1.8 0 0 1-1.8-1.8V12A1.8 1.8 0 0 1 5 10.2zm7 0a1.8 1.8 0 0 1 1.8 1.8v.01a1.8 1.8 0 0 1-1.8 1.8H12a1.8 1.8 0 0 1-1.8-1.8V12a1.8 1.8 0 0 1 1.8-1.8zm7 0a1.8 1.8 0 0 1 1.8 1.8v.01a1.8 1.8 0 0 1-1.8 1.8H19a1.8 1.8 0 0 1-1.8-1.8V12a1.8 1.8 0 0 1 1.8-1.8z"/></svg>\n'};(0,n.W)(),(0,o.pU)(i),r.d(t,["moreHorizontalIcon",0,i])},39769(e,t,r){r.r(t);var n=r(24913),o=r(86913);const i={name:"refresh",svg:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.5 7.009c-1.821-2.055-3.704-3.259-6.521-3.259a8.25 8.25 0 1 0 7.78 11M19.25 4v4h-4"/></svg>\n'};(0,n.W)(),(0,o.pU)(i),r.d(t,["refreshIcon",0,i])},29040(e,t,r){r.r(t);var n=r(24913),o=r(86913);const i={name:"search",svg:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m21 21-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314"/></svg>\n'};(0,n.W)(),(0,o.pU)(i),r.d(t,["searchIcon",0,i])},39625(e,t,r){r.r(t);var n=r(24913),o=r(86913);const i={name:"success",svg:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m7.95 12 2.7 2.7 5.4-5.4M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0"/></svg>\n'};(0,n.W)(),(0,o.pU)(i),r.d(t,["successIcon",0,i])},33254(e,t,r){r.r(t);var n=r(24913),o=r(86913);const i={name:"warning",svg:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 9v4m-7.686 2.2c-.917 1.575-1.376 2.363-1.307 3.01.06.563.358 1.075.82 1.408.53.382 1.447.382 3.28.382h9.786c1.833 0 2.75 0 3.28-.382.462-.333.76-.845.82-1.409.069-.646-.39-1.434-1.307-3.01l-4.89-8.4c-.918-1.574-1.377-2.362-1.976-2.626a2.03 2.03 0 0 0-1.64 0c-.6.264-1.058 1.052-1.974 2.625zm7.737.8v.1h-.101V16z"/></svg>\n'};(0,n.W)(),(0,o.pU)(i),r.d(t,["warningIcon",0,i])},30184(e,t,r){r.d(t,{u:()=>p});var n=r(60496),o=r(43356);const{I:i}=n.ge,a=e=>e,s=()=>document.createComment(""),l=(e,t,r)=>{const n=e._$AA.parentNode,o=void 0===t?e._$AB:t._$AA;if(void 0===r){const t=n.insertBefore(s(),o),a=n.insertBefore(s(),o);r=new i(t,a,e,e.options)}else{const t=r._$AB.nextSibling,i=r._$AM,s=i!==e;if(s){let t;r._$AQ?.(e),r._$AM=e,void 0!==r._$AP&&(t=e._$AU)!==i._$AU&&r._$AP(t)}if(t!==o||s){let e=r._$AA;for(;e!==t;){const t=a(e).nextSibling;a(n).insertBefore(e,o),e=t}}}return r},c=(e,t,r=e)=>(e._$AI(t,r),e),d={},u=(e,t=d)=>e._$AH=t,v=e=>{e._$AR(),e._$AA.remove()},h=(e,t,r)=>{const n=new Map;for(let o=t;o<=r;o++)n.set(e[o],o);return n},p=(0,o.u$)(class extends o.WL{constructor(e){if(super(e),e.type!==o.OA.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,r){let n;void 0===r?r=t:void 0!==t&&(n=t);const o=[],i=[];let a=0;for(const s of e)o[a]=n?n(s,a):a,i[a]=r(s,a),a++;return{values:i,keys:o}}render(e,t,r){return this.dt(e,t,r).values}update(e,[t,r,o]){const i=e._$AH,{values:a,keys:s}=this.dt(t,r,o);if(!Array.isArray(i))return this.ut=s,a;const d=this.ut??=[],p=[];let g,b,m=0,f=i.length-1,_=0,w=a.length-1;for(;m<=f&&_<=w;)if(null===i[m])m++;else if(null===i[f])f--;else if(d[m]===s[_])p[_]=c(i[m],a[_]),m++,_++;else if(d[f]===s[w])p[w]=c(i[f],a[w]),f--,w--;else if(d[m]===s[w])p[w]=c(i[m],a[w]),l(e,p[w+1],i[m]),m++,w--;else if(d[f]===s[_])p[_]=c(i[f],a[_]),l(e,i[m],i[f]),f--,_++;else if(void 0===g&&(g=h(s,_,w),b=h(d,m,f)),g.has(d[m]))if(g.has(d[f])){const t=b.get(s[_]),r=void 0!==t?i[t]:null;if(null===r){const t=l(e,i[m]);c(t,a[_]),p[_]=t}else p[_]=c(r,a[_]),l(e,i[m],r),i[t]=null;_++}else v(i[f]),f--;else v(i[m]),m++;for(;_<=w;){const t=l(e,p[w+1]);c(t,a[_]),p[_++]=t}for(;m<=f;){const e=i[m++];null!==e&&v(e)}return this.ut=s,u(e,p),n.c0}})},81782(e,t,r){r.d(t,{W:()=>s});var n=r(60496),o=r(43356);const i="important",a=" !"+i,s=(0,o.u$)(class extends o.WL{constructor(e){if(super(e),e.type!==o.OA.ATTRIBUTE||"style"!==e.name||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,r)=>{const n=e[r];return null==n?t:t+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(e,[t]){const{style:r}=e.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(t)),this.render(t);for(const n of this.ft)null==t[n]&&(this.ft.delete(n),n.includes("-")?r.removeProperty(n):r[n]=null);for(const n in t){const e=t[n];if(null!=e){this.ft.add(n);const t="string"==typeof e&&e.endsWith(a);n.includes("-")||t?r.setProperty(n,t?e.slice(0,-11):e,t?i:""):r[n]=e}}return n.c0}})}}]);