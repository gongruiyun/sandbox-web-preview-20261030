"use strict";(self.webpackChunksandbox_web=self.webpackChunksandbox_web||[]).push([[6764],{72484(e,t,i){i.d(t,{A:()=>h});var r=i(30758),n=i(34069),o=i(97500),a=i.n(o),s=function(){return s=Object.assign||function(e){for(var t,i=1,r=arguments.length;i<r;i++)for(var n in t=arguments[i])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},s.apply(this,arguments)},c=function(e,t){var i={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(i[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(i[r[n]]=e[r[n]])}return i},l=(0,r.forwardRef)(function(e){var t=e.type,i=void 0===t?"text":t,o=e.className,l=c(e,["type","className"]);return r.createElement(n.A,s({type:i},l,{className:a()("paas-ui-text-button",o)}))});l.__BYTE_BUTTON=!0,l.displayName="TextButton";const h=l},30528(e,t,i){i.d(t,{S:()=>pe});var r=i(30758),n=i.t(r,2),o=i(45080),a=i(67286),s=i(67463),c=i(61834),l=i(94023);const h=o.AH`
  :host {
    --ve-checkbox-font-family: var(--font-sans);
    --ve-checkbox-font-size: var(--text-body);

    --ve-checkbox-mask-border-width: var(--stroke-weight-strong);
    --ve-checkbox-mask-border-style: solid;
    --ve-checkbox-mask-border-radius: var(--radius-xs);

    --ve-checkbox-mask-size: 16px;
    --ve-checkbox-mask-surface-size: var(--ve-checkbox-mask-size);
    --ve-checkbox-offset-inline-start: calc(
      (var(--ve-checkbox-mask-surface-size) - var(--ve-checkbox-mask-size)) / 2
    );

    --ve-checkbox-mask-color-bg: var(--color-bg-base);
    --ve-checkbox-mask-color-bg-checked: var(--color-bg-primary);
    --ve-checkbox-mask-color-bg-disabled: var(--color-bg-muted);

    --ve-checkbox-mask-color-border: var(--color-border-strong);
    --ve-checkbox-mask-color-border-hover: var(--color-border-interactive);
    --ve-checkbox-mask-color-border-checked: transparent;
    --ve-checkbox-mask-color-border-disabled: var(--color-border-default);

    --ve-checkbox-text-color: var(--color-text-primary);

    --ve-checkbox-group-gap: var(--space-s);
    --ve-checkbox-text-mask-spacing: var(--space-xxs);
    --ve-checkbox-group-line-height-vertical: 32px;

    --ve-checkbox-check-icon-size: 12px;
    --ve-checkbox-check-icon-color: var(--color-text-foreground);

    --ve-checkbox-indeterminate-width: 10px;
    --ve-checkbox-indeterminate-height: 2px;
    --ve-checkbox-indeterminate-color: var(--color-text-foreground);

    --ve-checkbox-checked-hover-ratio: var(--state-hover-solid-ratio);
    --ve-checkbox-checked-hover-mix: var(--state-hover-solid-mix);
    --ve-checkbox-disabled-opacity: var(--state-disabled-ratio);
    --ve-checkbox-focus-ring-color: color-mix(
      in srgb,
      var(--color-bg-primary) 24%,
      transparent
    );

    --ve-checkbox-transition-duration-fast: var(--motion-fast);
    --ve-checkbox-transition-duration-base: var(--motion-base);
    --ve-checkbox-transition-timing-linear: linear;
    --ve-checkbox-transition-timing-overshoot: cubic-bezier(
      0.34,
      1.56,
      0.64,
      1
    );
  }

  @supports not (color: color-mix(in srgb, red, blue)) {
    :host {
      --ve-checkbox-focus-ring-color: var(--color-bg-primary);
    }
  }
`,d=[l.H6,h,o.AH`
    :host {
      display: inline-flex;
      align-items: center;
      vertical-align: middle;
      color: var(--ve-checkbox-text-color);
      font-size: var(--ve-checkbox-font-size);
      font-family: var(--ve-checkbox-font-family);
      user-select: none;
    }

    :host([hidden]) {
      display: none;
    }

    .ve-checkbox {
      position: relative;
      display: inline-flex;
      align-items: center;
      box-sizing: border-box;
      cursor: pointer;
      padding-inline-start: var(--ve-checkbox-offset-inline-start);
      color: var(--ve-checkbox-text-color);
      font-size: var(--ve-checkbox-font-size);
      font-family: var(--ve-checkbox-font-family);
      line-height: 1.4;
      user-select: none;
      min-inline-size: 0;
    }

    .ve-checkbox-input {
      position: absolute;
      inset-block-start: 0;
      inset-inline-start: 0;
      inline-size: var(--ve-checkbox-mask-surface-size);
      block-size: var(--ve-checkbox-mask-surface-size);
      margin: 0;
      opacity: 0;
      cursor: inherit;
    }

    .ve-checkbox-text {
      color: var(--ve-checkbox-text-color);
      margin-inline-start: var(--ve-checkbox-text-mask-spacing);
      min-inline-size: 0;
      line-height: 1.4;
      overflow-wrap: anywhere;
    }

    .ve-checkbox-text--hidden {
      display: none;
    }

    .ve-checkbox-icon-hover {
      position: relative;
      inset-block-start: 0;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      inline-size: var(--ve-checkbox-mask-surface-size);
      block-size: var(--ve-checkbox-mask-surface-size);
      line-height: 1;
      vertical-align: middle;
      cursor: inherit;
    }

    .ve-checkbox-mask {
      position: relative;
      box-sizing: border-box;
      inline-size: var(--ve-checkbox-mask-size);
      block-size: var(--ve-checkbox-mask-size);
      border: var(--ve-checkbox-mask-border-width)
        var(--ve-checkbox-mask-border-style)
        var(--ve-checkbox-mask-color-border);
      border-radius: var(--ve-checkbox-mask-border-radius);
      background-color: var(--ve-checkbox-mask-color-bg);
      user-select: none;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      transition:
        background-color var(--ve-checkbox-transition-duration-fast)
          var(--ve-checkbox-transition-timing-linear),
        border-color var(--ve-checkbox-transition-duration-fast)
          var(--ve-checkbox-transition-timing-linear);
    }

    .ve-checkbox-mask-icon {
      position: relative;
      display: none;
      align-items: center;
      justify-content: center;
      inline-size: var(--ve-checkbox-check-icon-size);
      block-size: var(--ve-checkbox-check-icon-size);
      margin: 0 auto;
      color: var(--ve-checkbox-check-icon-color);
      line-height: 0;
    }

    .ve-checkbox-mask-icon-default {
      inline-size: 100%;
      block-size: 100%;
    }

    .ve-checkbox-indeterminate-mark {
      position: absolute;
      inset-block-start: 50%;
      inset-inline-start: 50%;
      display: block;
      inline-size: var(--ve-checkbox-indeterminate-width);
      block-size: var(--ve-checkbox-indeterminate-height);
      border-radius: var(--radius-full);
      background: var(--ve-checkbox-indeterminate-color);
      transform: translate(-50%, -50%);
      visibility: hidden;
    }

    .ve-checkbox-input:focus-visible
      + .ve-checkbox-icon-hover
      .ve-checkbox-mask {
      box-shadow: 0 0 0 2px var(--ve-checkbox-focus-ring-color);
    }

    .ve-checkbox:not(.ve-checkbox--disabled):not(.ve-checkbox--checked):not(
        .ve-checkbox--indeterminate
      ):hover
      .ve-checkbox-mask {
      border-color: var(--ve-checkbox-mask-color-border-hover);
    }

    .ve-checkbox--checked .ve-checkbox-mask {
      border-color: var(--ve-checkbox-mask-color-border-checked);
      background-color: var(--ve-checkbox-mask-color-bg-checked);
    }

    .ve-checkbox--checked .ve-checkbox-mask-icon {
      display: inline-flex;
    }

    .ve-checkbox--indeterminate .ve-checkbox-mask {
      border-color: var(--ve-checkbox-mask-color-border-checked);
      background-color: var(--ve-checkbox-mask-color-bg-checked);
    }

    .ve-checkbox--indeterminate .ve-checkbox-mask-icon {
      display: none;
    }

    .ve-checkbox--indeterminate .ve-checkbox-indeterminate-mark {
      visibility: visible;
    }

    .ve-checkbox--checked:not(.ve-checkbox--disabled):hover .ve-checkbox-mask,
    .ve-checkbox--indeterminate:not(.ve-checkbox--disabled):hover
      .ve-checkbox-mask {
      background-color: color-mix(
        in srgb,
        var(--ve-checkbox-mask-color-bg-checked)
          var(--ve-checkbox-checked-hover-ratio),
        var(--ve-checkbox-checked-hover-mix)
      );
    }

    .ve-checkbox--disabled {
      cursor: not-allowed;
      opacity: var(--ve-checkbox-disabled-opacity);
    }

    .ve-checkbox--disabled:hover .ve-checkbox-mask {
      border-color: var(--ve-checkbox-mask-color-border-disabled);
    }

    .ve-checkbox--checked:hover .ve-checkbox-mask,
    .ve-checkbox--indeterminate:hover .ve-checkbox-mask {
      border-color: var(--ve-checkbox-mask-color-border-checked);
    }

    .ve-checkbox--disabled .ve-checkbox-mask {
      border-color: var(--ve-checkbox-mask-color-border-disabled);
      background-color: var(--ve-checkbox-mask-color-bg-disabled);
    }

    .ve-checkbox--disabled.ve-checkbox--checked .ve-checkbox-mask,
    .ve-checkbox--disabled.ve-checkbox--checked:hover .ve-checkbox-mask,
    .ve-checkbox--disabled.ve-checkbox--indeterminate .ve-checkbox-mask,
    .ve-checkbox--disabled.ve-checkbox--indeterminate:hover .ve-checkbox-mask {
      border-color: var(--ve-checkbox-mask-color-border-disabled);
      background-color: var(--ve-checkbox-mask-color-bg-disabled);
    }

    @media (prefers-reduced-motion: reduce) {
      .ve-checkbox-mask,
      .ve-checkbox-mask-icon,
      .ve-checkbox-indeterminate-mark {
        transition: none;
      }
    }

    @supports not (color: color-mix(in srgb, red, blue)) {
      .ve-checkbox--checked:not(.ve-checkbox--disabled):hover .ve-checkbox-mask,
      .ve-checkbox--indeterminate:not(.ve-checkbox--disabled):hover
        .ve-checkbox-mask {
        background-color: var(--ve-checkbox-mask-color-bg-checked);
      }
    }
  `],v=[l.H6,h,o.AH`
    :host {
      display: inline-block;
      vertical-align: middle;
    }

    :host([hidden]) {
      display: none;
    }

    .ve-checkbox-group {
      display: inline-block;
    }

    .ve-checkbox-group-direction-horizontal ::slotted(ve-checkbox),
    .ve-checkbox-group-direction-horizontal .ve-checkbox-group-option-item {
      margin-inline-end: var(--ve-checkbox-group-gap);
    }

    .ve-checkbox-group-direction-vertical ::slotted(ve-checkbox),
    .ve-checkbox-group-direction-vertical .ve-checkbox-group-option-item {
      display: block;
      margin-inline-end: 0;
      line-height: var(--ve-checkbox-group-line-height-vertical);
    }
  `];function u(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function b(e){if(Object(e)!==e)throw TypeError("right-hand side of 'in' should be an object, got "+(null!==e?typeof e:"null"));return e}function p(e,t,i){"symbol"==typeof t&&(t=(t=t.description)?"["+t+"]":"");try{Object.defineProperty(e,"name",{configurable:!0,value:i?i+" "+t:t})}catch(r){}return e}function k(e,t,i,r,n,o){var a,s,c,l,h,d,v,k=Symbol.metadata||Symbol.for("Symbol.metadata"),f=Object.defineProperty,g=Object.create,m=[g(null),g(null)],x=t.length;function _(t,i,r){return function(n,o){i&&(o=n,n=e);for(var a=0;a<t.length;a++)o=t[a].apply(n,r?[o]:[]);return r?o:n}}function y(e,t,i,r){if("function"!=typeof e&&(r||void 0!==e))throw new TypeError(t+" must "+(i||"be")+" a function"+(r?"":" or undefined"));return e}function z(e,t,i,r,n,o,c,l,h,d,v){function u(e){if(!v(e))throw new TypeError("Attempted to access private element on non-instance")}var b=[].concat(t[0]),k=t[3],g=!c,x=1===n,z=3===n,C=4===n,w=2===n;function S(t,i,r){return function(n,o){return i&&(o=n,n=e),r&&r(n),desc[t].call(n,o)}}var A={},O=[],E=z?"get":C||x?"set":"value";if(!g&&(h?(d||x?A={get:p(function(){return k(this)},r,"get"),set:function(e){t[4](this,e)}}:A[E]=k,d||p(A[E],r,w?"":E)):d||(A=Object.getOwnPropertyDescriptor(e,r)),!d&&!h)){if((s=m[+l][r])&&7!==(s^n))throw new Error("Decorating two elements with the same name ("+A[E].name+") is not supported yet");m[+l][r]=n<3?1:n}for(var D=e,$=b.length-1;$>=0;$-=i?2:1){var j=y(b[$],"A decorator","be",!0),I=i?b[$-1]:void 0,L={},N={kind:["field","accessor","method","getter","setter","class"][n],name:r,metadata:a,addInitializer:function(e,t){if(e.v)throw new TypeError("attempted to call addInitializer after decoration was finished");y(t,"An initializer","be",!0),o.push(t)}.bind(null,L)};if(g)s=j.call(I,D,N),L.v=1,y(s,"class decorators","return")&&(D=s);else if(N.static=l,N.private=h,s=N.access={has:h?v.bind():function(e){return r in e}},C||(s.get=h?w?function(e){return u(e),A.value}:S("get",0,u):function(e){return e[r]}),w||z||(s.set=h?S("set",0,u):function(e,t){e[r]=t}),D=j.call(I,x?{get:A.get,set:A.set}:A[E],N),L.v=1,x){if("object"==typeof D&&D)(s=y(D.get,"accessor.get"))&&(A.get=s),(s=y(D.set,"accessor.set"))&&(A.set=s),(s=y(D.init,"accessor.init"))&&O.unshift(s);else if(void 0!==D)throw new TypeError("accessor decorators must return an object with get, set, or init properties or undefined")}else y(D,(d?"field":"method")+" decorators","return")&&(d?O.unshift(D):A[E]=D)}return n<2&&c.push(_(O,l,1),_(o,l,0)),d||g||(h?x?c.splice(-1,0,S("get",l),S("set",l)):c.push(w?A[E]:y.call.bind(A[E])):f(e,r,A)),D}function C(e){return f(e,k,{configurable:!0,enumerable:!0,value:a})}return void 0!==o&&(a=o[k]),a=g(null==a?null:a),h=[],d=function(e){e&&h.push(_(e))},v=function(t,r){for(var o=0;o<i.length;o++){var a=i[o],s=a[1],d=7&s;if((8&s)==t&&!d==r){var v=a[2],p=!!a[3],k=16&s;z(t?e:e.prototype,a,k,p?"#"+v:u(v),d,d<2?[]:t?l=l||[]:c=c||[],h,!!t,p,r,t&&p?function(t){return b(t)===e}:n)}}},v(8,0),v(0,0),v(8,1),v(0,1),d(c),d(l),s=h,x||C(e),{e:s,get c(){var i=[];return x&&[C(e=z(e,[t],r,e.name,5,i)),_(i,1)]}}}let f,g,m,x,_,y,z,C,w,S,A,O,E,D,$,j,I,L,N,T,V,M,P,q,H,Z,B,J,R,U,X,G,F,Y,K,Q,W,ee,te,ie,re,ne;const oe="ve-checkbox",ae="ve-checkbox-group",se=["aria-label","aria-labelledby","aria-describedby"],ce={fromAttribute:e=>e??"",toAttribute:e=>String(e)},le={fromAttribute(e){if(null===e||0===e.trim().length)return[];try{const t=JSON.parse(e);return Array.isArray(t)?t.filter(e=>de(e)):[]}catch{return e.split(",").map(e=>e.trim()).filter(e=>e.length>0)}},toAttribute:e=>0===e.length?"[]":JSON.stringify(e)},he={fromAttribute(e){if(null===e||0===e.trim().length)return[];try{const t=JSON.parse(e);return Array.isArray(t)?t:[]}catch{return[]}},toAttribute(e){try{return JSON.stringify(e)}catch{return null}}};function de(e){return"string"==typeof e||"number"==typeof e}f=(0,c.MZ)({type:Boolean,reflect:!0}),g=(0,c.MZ)({type:Boolean,attribute:"default-checked"}),m=(0,c.MZ)({type:Boolean,reflect:!0}),x=(0,c.MZ)({type:Boolean,reflect:!0}),_=(0,c.MZ)({converter:ce}),y=(0,c.MZ)({attribute:!1}),z=(0,c.P)(".ve-checkbox-input"),C=(0,c.P)("slot:not([name])"),w=(0,c.wk)();class ve extends l.IB{static{({e:[S,A,O,E,D,$,j,I,L,N,T,V,M,P,q,H,Z,B]}=k(this,[],[[f,1,"checked"],[g,1,"defaultChecked"],[m,1,"indeterminate"],[x,1,"disabled"],[_,1,"value"],[y,1,"groupDisabled"],[z,1,"inputElement"],[C,1,"defaultSlot"],[w,1,"hasLabel"]]))}static styles=d;static get observedAttributes(){return[...new Set([...super.observedAttributes,...se])]}#e=(()=>{const e=S(this,void 0);return A(this),e})();get checked(){return this.#e}set checked(e){this.#e=e}#t=(()=>{const e=O(this,!1);return E(this),e})();get defaultChecked(){return this.#t}set defaultChecked(e){this.#t=e}#i=(()=>{const e=D(this,!1);return $(this),e})();get indeterminate(){return this.#i}set indeterminate(e){this.#i=e}#r=(()=>{const e=j(this,!1);return I(this),e})();get disabled(){return this.#r}set disabled(e){this.#r=e}#n=(()=>{const e=L(this,"");return N(this),e})();get value(){return this.#n}set value(e){this.#n=e}#o=(()=>{const e=T(this,!1);return V(this),e})();get groupDisabled(){return this.#o}set groupDisabled(e){this.#o=e}#a=(()=>{const e=M(this,null);return P(this),e})();get inputElement(){return this.#a}set inputElement(e){this.#a=e}#s=(()=>{const e=q(this,null);return H(this),e})();get defaultSlot(){return this.#s}set defaultSlot(e){this.#s=e}#c=(()=>{const e=Z(this,!1);return B(this),e})();get hasLabel(){return this.#c}set hasLabel(e){this.#c=e}hasInitializedDefaultChecked=!1;get mergedDisabled(){return this.disabled||this.groupDisabled}get inputValue(){return String(this.value)}get inputAriaLabel(){return this.getAttribute("aria-label")??void 0}get inputAriaLabelledby(){return this.getAttribute("aria-labelledby")??void 0}get inputAriaDescribedby(){return this.getAttribute("aria-describedby")??void 0}connectedCallback(){super.connectedCallback(),this.applyDefaultChecked()}firstUpdated(e){super.firstUpdated(e),this.syncNativeIndeterminateState(),this.syncLabelState()}updated(e){super.updated(e),this.syncNativeIndeterminateState()}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),t!==i&&se.includes(e)&&this.requestUpdate()}applyDefaultChecked(){this.hasInitializedDefaultChecked||(void 0===this.checked&&this.defaultChecked&&(this.checked=!0),this.hasInitializedDefaultChecked=!0)}syncNativeIndeterminateState(){this.inputElement&&(this.inputElement.indeterminate=this.indeterminate)}syncLabelState(){this.defaultSlot?this.hasLabel=this.defaultSlot.assignedNodes({flatten:!0}).some(e=>function(e){return e.nodeType===Node.ELEMENT_NODE||e.nodeType===Node.TEXT_NODE&&!!e.textContent?.trim().length}(e)):this.hasLabel=!1}emitVeChangeEvent(){const e={checked:!0===this.checked},t=this.value;("number"==typeof t||"string"==typeof t&&t.length>0)&&(e.value=t),this.dispatchEvent(new CustomEvent("ve-change",{detail:e,bubbles:!0,composed:!0}))}handleInputClick(e){e.stopPropagation()}handleInputEvent(e){e.stopPropagation()}handleInputChange(e){const t=e.target;t instanceof HTMLInputElement&&(e.stopPropagation(),this.mergedDisabled?t.checked=!0===this.checked:(this.checked=t.checked,this.indeterminate&&(this.indeterminate=!1),this.emitVeChangeEvent()))}handleDefaultSlotChange(){this.syncLabelState()}renderCheckedIcon(){return o.qy`
      <svg
        class="ve-checkbox-mask-icon-default"
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
    `}render(){const e=(0,a.H)({"ve-checkbox":!0,"ve-checkbox--checked":!0===this.checked,"ve-checkbox--indeterminate":this.indeterminate,"ve-checkbox--disabled":this.mergedDisabled}),t=(0,a.H)({"ve-checkbox-icon-hover":!0}),i=(0,a.H)({"ve-checkbox-text":!0,"ve-checkbox-text--hidden":!this.hasLabel});return o.qy`
      <label class=${e} part="wrapper">
        <input
          class="ve-checkbox-input"
          part="input"
          type="checkbox"
          .checked=${!0===this.checked}
          value=${this.inputValue}
          ?disabled=${this.mergedDisabled}
          aria-label=${(0,s.J)(this.inputAriaLabel)}
          aria-labelledby=${(0,s.J)(this.inputAriaLabelledby)}
          aria-describedby=${(0,s.J)(this.inputAriaDescribedby)}
          @click=${this.handleInputClick}
          @input=${this.handleInputEvent}
          @change=${this.handleInputChange}
        />

        <span class=${t} aria-hidden="true">
          <span class="ve-checkbox-mask" part="mask">
            <span class="ve-checkbox-mask-icon">
              ${this.renderCheckedIcon()}
            </span>
            <span class="ve-checkbox-indeterminate-mark"></span>
          </span>
        </span>

        <span class=${i} part="text">
          <slot @slotchange=${this.handleDefaultSlotChange}></slot>
        </span>
      </label>
    `}}J=(0,c.MZ)({attribute:!1}),R=(0,c.MZ)({attribute:"default-value",converter:le}),U=(0,c.MZ)({type:Boolean,reflect:!0}),X=(0,c.MZ)({type:String,reflect:!0,useDefault:!0}),G=(0,c.MZ)({converter:he});class ue extends l.IB{static{({e:[F,Y,K,Q,W,ee,te,ie,re,ne]}=k(this,[],[[J,1,"value"],[R,1,"defaultValue"],[U,1,"disabled"],[X,1,"direction"],[G,1,"options"]]))}static styles=v;static dependencies={[oe]:ve};static get observedAttributes(){return[...new Set([...super.observedAttributes,...se])]}#l=(()=>{const e=F(this,[]);return Y(this),e})();get value(){return this.#l}set value(e){this.#l=e}#h=(()=>{const e=K(this,[]);return Q(this),e})();get defaultValue(){return this.#h}set defaultValue(e){this.#h=e}#d=(()=>{const e=W(this,!1);return ee(this),e})();get disabled(){return this.#d}set disabled(e){this.#d=e}#v=(()=>{const e=te(this,"horizontal");return ie(this),e})();get direction(){return this.#v}set direction(e){this.#v=e}#u=(()=>{const e=re(this,[]);return ne(this),e})();get options(){return this.#u}set options(e){this.#u=e}normalizedOptions=[];hasInitializedDefaultValue=!1;slottedCheckboxChildren=[];handleGroupChildChange=e=>{if(!(e instanceof CustomEvent))return;const t=this.resolveEventCheckboxTarget(e);if(!t)return;if(!this.isManagedCheckbox(t))return;const i=t.value;if(!de(i)||"number"==typeof i&&!Number.isFinite(i))return;e.stopPropagation();const r=Boolean(e.detail?.checked),n=this.normalizeValueArray(this.value);let o=n;r?n.includes(i)||(o=[...n,i]):o=n.filter(e=>e!==i),this.value=o,this.syncCheckboxStates();const a={value:this.filterAvailableValues(o),checked:r};a.changedValue=i,this.dispatchEvent(new CustomEvent("ve-group-change",{detail:a,bubbles:!0,composed:!0}))};get hasOptions(){return this.normalizedOptions.length>0}get groupAriaLabel(){return this.getAttribute("aria-label")??void 0}get groupAriaLabelledby(){return this.getAttribute("aria-labelledby")??void 0}get groupAriaDescribedby(){return this.getAttribute("aria-describedby")??void 0}connectedCallback(){super.connectedCallback(),this.normalizedOptions=this.normalizeOptions(this.options),this.applyDefaultValue(),this.addEventListener("ve-change",this.handleGroupChildChange)}disconnectedCallback(){this.removeEventListener("ve-change",this.handleGroupChildChange),super.disconnectedCallback()}firstUpdated(e){super.firstUpdated(e),this.refreshSlottedCheckboxChildren(),this.syncCheckboxStates()}willUpdate(e){super.willUpdate(e),e.has("options")&&(this.normalizedOptions=this.normalizeOptions(this.options))}updated(e){super.updated(e),e.has("options")&&!this.hasOptions&&this.refreshSlottedCheckboxChildren(),(e.has("value")||e.has("disabled")||e.has("options"))&&this.syncCheckboxStates()}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),t!==i&&se.includes(e)&&this.requestUpdate()}applyDefaultValue(){if(this.hasInitializedDefaultValue)return;const e=this.normalizeValueArray(this.value),t=this.normalizeValueArray(this.defaultValue);0===e.length&&t.length>0?this.value=t:this.isSameValueArray(this.value,e)||(this.value=e),this.hasInitializedDefaultValue=!0}normalizeValueArray(e){if(!Array.isArray(e))return[];const t=[],i=new Set;for(const r of e)de(r)&&("number"!=typeof r||Number.isFinite(r))&&(i.has(r)||(i.add(r),t.push(r)));return t}normalizeOptions(e){if(!Array.isArray(e))return[];const t=[],i=new Set;for(const r of e){const e=this.normalizeOption(r);e&&(i.has(e.value)||(i.add(e.value),t.push(e)))}return t}normalizeOption(e){if(de(e))return{label:e,value:e,disabled:!1};if(!e||"object"!=typeof e)return null;const t=e;return de(t.value)?{label:t.label??t.value,value:t.value,disabled:!0===t.disabled}:null}collectSlottedCheckboxChildren(){const e=new Set;for(const t of this.querySelectorAll(oe))t instanceof ve&&t.closest(ae)===this&&e.add(t);return[...e]}refreshSlottedCheckboxChildren(){this.slottedCheckboxChildren=this.collectSlottedCheckboxChildren()}getSlottedCheckboxChildren(){return this.slottedCheckboxChildren}getCheckboxChildren(){return this.hasOptions?Array.from(this.renderRoot.querySelectorAll("ve-checkbox[data-option-item]")):this.getSlottedCheckboxChildren()}filterAvailableValues(e){if(this.hasOptions){const t=new Set(this.normalizedOptions.map(e=>e.value));return e.filter(e=>t.has(e))}const t=new Set(this.getCheckboxChildren().map(e=>e.value));return e.filter(e=>t.has(e))}syncCheckboxStates(){const e=this.normalizeValueArray(this.value);if(!this.isSameValueArray(this.value,e))return void(this.value=e);if(this.hasOptions)return;const t=new Set(e);for(const i of this.getCheckboxChildren())i.groupDisabled=this.disabled,i.checked=t.has(i.value),i.indeterminate=!1}isSameValueArray(e,t){return Array.isArray(e)?e.length===t.length&&e.every((e,i)=>e===t[i]):0===t.length}resolveEventCheckboxTarget(e){const t=e.composedPath()[0];return t instanceof Element&&t.localName===oe?t:void 0}isManagedCheckbox(e){return this.hasOptions?e.hasAttribute("data-option-item"):e.closest(ae)===this}handleSlotChange(){this.refreshSlottedCheckboxChildren(),this.syncCheckboxStates()}renderOptionLabel(e){return null!=(t=e.label)&&"boolean"!=typeof t&&"function"!=typeof t&&"symbol"!=typeof t?e.label:String(e.value);var t}renderOptionNodes(){const e=new Set(this.normalizeValueArray(this.value));return this.normalizedOptions.map(t=>o.qy`
        <ve-checkbox
          data-option-item
          class="ve-checkbox-group-option-item"
          .value=${t.value}
          .disabled=${t.disabled}
          .groupDisabled=${this.disabled}
          .checked=${e.has(t.value)}
          .indeterminate=${!1}
          >${this.renderOptionLabel(t)}</ve-checkbox
        >
      `)}render(){const e=(0,a.H)({"ve-checkbox-group":!0,"ve-checkbox-group--vertical":"vertical"===this.direction,"ve-checkbox-group-direction-horizontal":"horizontal"===this.direction,"ve-checkbox-group-direction-vertical":"vertical"===this.direction});return o.qy`
      <div
        class=${e}
        part="group"
        role="group"
        aria-label=${(0,s.J)(this.groupAriaLabel)}
        aria-labelledby=${(0,s.J)(this.groupAriaLabelledby)}
        aria-describedby=${(0,s.J)(this.groupAriaDescribedby)}
      >
        ${this.hasOptions?this.renderOptionNodes():o.qy`<slot @slotchange=${this.handleSlotChange}></slot>`}
      </div>
    `}}(0,l.Xq)(oe,ve),(0,l.Xq)(ae,ue);var be=i(35780);const pe=(0,be.h)({tagName:oe,elementClass:ve,react:n,events:{onChange:"ve-change"},ownEvents:["onChange"]});(0,be.h)({tagName:ae,elementClass:ue,react:n,events:{onChange:"ve-group-change"},ownEvents:["onChange"]})},65112(e,t,i){i.d(t,{t:()=>M});var r=i(30758),n=i.t(r,2),o=i(46140),a=i(45080),s=i(67463),c=i(67286),l=i(61834),h=i(94023),d=i(17400),v=i(40362),u=i(93837);const b=a.AH`
  :host {
    --ve-spin-gap-horizontal: var(--space-xxxs);
    --ve-spin-gap-vertical: var(--space-xxs);

    --ve-spin-icon-color: var(--color-icon-secondary);

    --ve-spin-small-icon-size: 14px;
    --ve-spin-default-icon-size: 16px;
    --ve-spin-large-icon-size: 20px;

    --ve-spin-small-font-size: var(--text-caption);
    --ve-spin-default-font-size: var(--text-body-sm);
    --ve-spin-large-font-size: var(--text-body);

    --ve-spin-small-line-height: var(--line-height-body);
    --ve-spin-default-line-height: var(--line-height-body);
    --ve-spin-large-line-height: var(--line-height-body);

    --ve-spin-text-color: var(--color-text-tertiary);
    --ve-spin-font-family: var(--font-sans);
    --ve-spin-font-weight: var(--font-weight-normal);
    --ve-spin-animation-duration: 0.8s;

    --ve-spin-current-icon-size: var(--ve-spin-default-icon-size);
    --ve-spin-current-font-size: var(--ve-spin-default-font-size);
    --ve-spin-current-line-height: var(--ve-spin-default-line-height);
  }

  :host([size='small']) {
    --ve-spin-current-icon-size: var(--ve-spin-small-icon-size);
    --ve-spin-current-font-size: var(--ve-spin-small-font-size);
    --ve-spin-current-line-height: var(--ve-spin-small-line-height);
  }

  :host([size='large']) {
    --ve-spin-current-icon-size: var(--ve-spin-large-icon-size);
    --ve-spin-current-font-size: var(--ve-spin-large-font-size);
    --ve-spin-current-line-height: var(--ve-spin-large-line-height);
  }
`,p=[h.H6,b,a.AH`
    :host {
      display: inline-flex;
      box-sizing: border-box;
      max-inline-size: 100%;
      color: var(--ve-spin-text-color);
      font-family: var(--ve-spin-font-family);
      vertical-align: middle;
    }

    :host([hidden]) {
      display: none;
    }

    .ve-spin {
      box-sizing: border-box;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      max-inline-size: 100%;
      min-inline-size: 0;
      color: var(--ve-spin-text-color);
    }

    .ve-spin-horizontal {
      flex-direction: row;
      gap: var(--ve-spin-gap-horizontal);
    }

    .ve-spin-vertical {
      flex-direction: column;
      gap: var(--ve-spin-gap-vertical);
      text-align: center;
    }

    .ve-spin-icon-only {
      gap: 0;
    }

    .ve-spin-icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex: none;
      inline-size: var(--ve-spin-current-icon-size);
      block-size: var(--ve-spin-current-icon-size);
      color: var(--ve-spin-icon-color);
      font-size: var(--ve-spin-current-icon-size);
      line-height: 0;
    }

    .ve-spin-icon-graphic {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex: none;
      transform-origin: center;
    }

    .ve-spin-icon-rotating .ve-spin-icon-graphic {
      animation: ve-spin-rotate var(--ve-spin-animation-duration) linear
        infinite;
    }

    .ve-spin-icon ::slotted(*) {
      display: block;
      flex: none;
      color: inherit;
      line-height: 1;
    }

    .ve-spin-icon ::slotted(ve-icon) {
      inline-size: var(--ve-spin-current-icon-size);
      block-size: var(--ve-spin-current-icon-size);
      --ve-icon-size: var(--ve-spin-current-icon-size);
    }

    .ve-spin-default-icon {
      display: inline-flex;
      inline-size: var(--ve-spin-current-icon-size);
      block-size: var(--ve-spin-current-icon-size);
    }

    .ve-spin-tip {
      min-inline-size: 0;
      color: var(--ve-spin-text-color);
      font-size: var(--ve-spin-current-font-size);
      font-weight: var(--ve-spin-font-weight);
      line-height: var(--ve-spin-current-line-height);
      letter-spacing: var(--letter-spacing-normal);
      overflow-wrap: anywhere;
      word-break: break-word;
    }

    @keyframes ve-spin-rotate {
      to {
        transform: rotate(360deg);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .ve-spin-icon-rotating .ve-spin-icon-graphic {
        animation-duration: 1.6s;
      }
    }
  `];function k(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function f(e){if(Object(e)!==e)throw TypeError("right-hand side of 'in' should be an object, got "+(null!==e?typeof e:"null"));return e}function g(e,t,i){"symbol"==typeof t&&(t=(t=t.description)?"["+t+"]":"");try{Object.defineProperty(e,"name",{configurable:!0,value:i?i+" "+t:t})}catch(r){}return e}let m,x,_,y,z,C,w,S,A,O,E,D;const $="ve-spin",j=new Set(["small","default","large"]),I=new Set(["horizontal","vertical"]),L={fromAttribute:e=>null===e||"false"!==e,toAttribute:e=>e?null:"false"};m=(0,l.MZ)({type:String,reflect:!0,useDefault:!0}),x=(0,l.MZ)({type:String,reflect:!0,useDefault:!0}),_=(0,l.MZ)({attribute:"auto-rotate",reflect:!0,converter:L,useDefault:!0}),y=(0,l.MZ)({type:String});class N extends h.IB{static{({e:[z,C,w,S,A,O,E,D]}=function(e,t,i,r,n,o){var a,s,c,l,h,d,v,u=Symbol.metadata||Symbol.for("Symbol.metadata"),b=Object.defineProperty,p=Object.create,m=[p(null),p(null)],x=t.length;function _(t,i,r){return function(n,o){i&&(o=n,n=e);for(var a=0;a<t.length;a++)o=t[a].apply(n,r?[o]:[]);return r?o:n}}function y(e,t,i,r){if("function"!=typeof e&&(r||void 0!==e))throw new TypeError(t+" must "+(i||"be")+" a function"+(r?"":" or undefined"));return e}function z(e,t,i,r,n,o,c,l,h,d,v){function u(e){if(!v(e))throw new TypeError("Attempted to access private element on non-instance")}var p=[].concat(t[0]),k=t[3],f=!c,x=1===n,z=3===n,C=4===n,w=2===n;function S(t,i,r){return function(n,o){return i&&(o=n,n=e),r&&r(n),desc[t].call(n,o)}}var A={},O=[],E=z?"get":C||x?"set":"value";if(!f&&(h?(d||x?A={get:g(function(){return k(this)},r,"get"),set:function(e){t[4](this,e)}}:A[E]=k,d||g(A[E],r,w?"":E)):d||(A=Object.getOwnPropertyDescriptor(e,r)),!d&&!h)){if((s=m[+l][r])&&7!==(s^n))throw new Error("Decorating two elements with the same name ("+A[E].name+") is not supported yet");m[+l][r]=n<3?1:n}for(var D=e,$=p.length-1;$>=0;$-=i?2:1){var j=y(p[$],"A decorator","be",!0),I=i?p[$-1]:void 0,L={},N={kind:["field","accessor","method","getter","setter","class"][n],name:r,metadata:a,addInitializer:function(e,t){if(e.v)throw new TypeError("attempted to call addInitializer after decoration was finished");y(t,"An initializer","be",!0),o.push(t)}.bind(null,L)};if(f)s=j.call(I,D,N),L.v=1,y(s,"class decorators","return")&&(D=s);else if(N.static=l,N.private=h,s=N.access={has:h?v.bind():function(e){return r in e}},C||(s.get=h?w?function(e){return u(e),A.value}:S("get",0,u):function(e){return e[r]}),w||z||(s.set=h?S("set",0,u):function(e,t){e[r]=t}),D=j.call(I,x?{get:A.get,set:A.set}:A[E],N),L.v=1,x){if("object"==typeof D&&D)(s=y(D.get,"accessor.get"))&&(A.get=s),(s=y(D.set,"accessor.set"))&&(A.set=s),(s=y(D.init,"accessor.init"))&&O.unshift(s);else if(void 0!==D)throw new TypeError("accessor decorators must return an object with get, set, or init properties or undefined")}else y(D,(d?"field":"method")+" decorators","return")&&(d?O.unshift(D):A[E]=D)}return n<2&&c.push(_(O,l,1),_(o,l,0)),d||f||(h?x?c.splice(-1,0,S("get",l),S("set",l)):c.push(w?A[E]:y.call.bind(A[E])):b(e,r,A)),D}function C(e){return b(e,u,{configurable:!0,enumerable:!0,value:a})}return void 0!==o&&(a=o[u]),a=p(null==a?null:a),h=[],d=function(e){e&&h.push(_(e))},(v=function(t,r){for(var o=0;o<i.length;o++){var a=i[o],s=a[1],d=7&s;if((8&s)==t&&!d==r){var v=a[2],u=!!a[3],b=16&s;z(t?e:e.prototype,a,b,u?"#"+v:k(v),d,d<2?[]:t?l=l||[]:c=c||[],h,!!t,u,r,t&&u?function(t){return f(t)===e}:n)}}})(8,0),v(0,0),v(8,1),v(0,1),d(c),d(l),s=h,x||C(e),{e:s,get c(){var i=[];return x&&[C(e=z(e,[t],r,e.name,5,i)),_(i,1)]}}}(this,[],[[m,1,"size"],[x,1,"direction"],[_,1,"autoRotate"],[y,1,"tip"]]))}static styles=p;static dependencies={[d.v]:d.O};#b=(()=>{const e=z(this,"default");return C(this),e})();get size(){return this.#b}set size(e){this.#b=e}#p=(()=>{const e=w(this,"horizontal");return S(this),e})();get direction(){return this.#p}set direction(e){this.#p=e}#k=(()=>{const e=A(this,!0);return O(this),e})();get autoRotate(){return this.#k}set autoRotate(e){this.#k=e}#f=(()=>{const e=E(this,"");return D(this),e})();get tip(){return this.#f}set tip(e){this.#f=e}get normalizedSize(){return j.has(this.size)?this.size:"default"}get normalizedDirection(){return I.has(this.direction)?this.direction:"horizontal"}get hasCustomIcon(){return(0,v.mh)(this,"icon")}get hasTip(){return(this.tip??"").trim().length>0}get statusAriaLabel(){if(!this.hasTip)return this.getAttribute("aria-label")??"Loading"}handleSlotChange(){this.requestUpdate()}renderDefaultIcon(){return a.qy`<ve-icon
      class="ve-spin-default-icon"
      .definition=${u.o}
    ></ve-icon>`}render(){const e=(0,c.H)({"ve-spin":!0,[`ve-spin-${this.normalizedSize}`]:!0,[`ve-spin-${this.normalizedDirection}`]:!0,"ve-spin-icon-only":!this.hasTip}),t=(0,c.H)({"ve-spin-icon":!0,"ve-spin-icon-rotating":this.autoRotate});return a.qy`
      <div
        class=${e}
        part="base"
        role="status"
        aria-live="polite"
        aria-busy="true"
        aria-label=${(0,s.J)(this.statusAriaLabel)}
      >
        <span class=${t} part="icon">
          <span class="ve-spin-icon-graphic" part="icon-graphic">
            <slot name="icon" @slotchange=${this.handleSlotChange}></slot>
            ${this.hasCustomIcon?a.s6:this.renderDefaultIcon()}
          </span>
        </span>

        ${this.hasTip?a.qy`<span class="ve-spin-tip" part="tip">${this.tip}</span>`:a.s6}
      </div>
    `}}(0,h.Xq)($,N);var T=i(74410);const V=(0,o.a)({tagName:$,elementClass:N,react:n}),M=r.forwardRef(({icon:e,...t},i)=>r.createElement(V,{...t,ref:i},(0,T.M2)([["icon",e]])));M.displayName="Spin"}}]);