"use strict";(self.webpackChunksandbox_web=self.webpackChunksandbox_web||[]).push([[528],{30528(e,t,i){i.d(t,{S:()=>ke});var r=i(30758),o=i.t(r,2),a=i(45080),c=i(67286),n=i(67463),s=i(61834),l=i(94023);const h=a.AH`
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
`,d=[l.H6,h,a.AH`
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
  `],b=[l.H6,h,a.AH`
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
  `];function v(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function u(e){if(Object(e)!==e)throw TypeError("right-hand side of 'in' should be an object, got "+(null!==e?typeof e:"null"));return e}function k(e,t,i){"symbol"==typeof t&&(t=(t=t.description)?"["+t+"]":"");try{Object.defineProperty(e,"name",{configurable:!0,value:i?i+" "+t:t})}catch(r){}return e}function p(e,t,i,r,o,a){var c,n,s,l,h,d,b,p=Symbol.metadata||Symbol.for("Symbol.metadata"),m=Object.defineProperty,x=Object.create,g=[x(null),x(null)],f=t.length;function _(t,i,r){return function(o,a){i&&(a=o,o=e);for(var c=0;c<t.length;c++)a=t[c].apply(o,r?[a]:[]);return r?a:o}}function y(e,t,i,r){if("function"!=typeof e&&(r||void 0!==e))throw new TypeError(t+" must "+(i||"be")+" a function"+(r?"":" or undefined"));return e}function C(e,t,i,r,o,a,s,l,h,d,b){function v(e){if(!b(e))throw new TypeError("Attempted to access private element on non-instance")}var u=[].concat(t[0]),p=t[3],x=!s,f=1===o,C=3===o,z=4===o,S=2===o;function A(t,i,r){return function(o,a){return i&&(a=o,o=e),r&&r(o),desc[t].call(o,a)}}var w={},E=[],D=C?"get":z||f?"set":"value";if(!x&&(h?(d||f?w={get:k(function(){return p(this)},r,"get"),set:function(e){t[4](this,e)}}:w[D]=p,d||k(w[D],r,S?"":D)):d||(w=Object.getOwnPropertyDescriptor(e,r)),!d&&!h)){if((n=g[+l][r])&&7!==(n^o))throw new Error("Decorating two elements with the same name ("+w[D].name+") is not supported yet");g[+l][r]=o<3?1:o}for(var O=e,V=u.length-1;V>=0;V-=i?2:1){var L=y(u[V],"A decorator","be",!0),$=i?u[V-1]:void 0,I={},N={kind:["field","accessor","method","getter","setter","class"][o],name:r,metadata:c,addInitializer:function(e,t){if(e.v)throw new TypeError("attempted to call addInitializer after decoration was finished");y(t,"An initializer","be",!0),a.push(t)}.bind(null,I)};if(x)n=L.call($,O,N),I.v=1,y(n,"class decorators","return")&&(O=n);else if(N.static=l,N.private=h,n=N.access={has:h?b.bind():function(e){return r in e}},z||(n.get=h?S?function(e){return v(e),w.value}:A("get",0,v):function(e){return e[r]}),S||C||(n.set=h?A("set",0,v):function(e,t){e[r]=t}),O=L.call($,f?{get:w.get,set:w.set}:w[D],N),I.v=1,f){if("object"==typeof O&&O)(n=y(O.get,"accessor.get"))&&(w.get=n),(n=y(O.set,"accessor.set"))&&(w.set=n),(n=y(O.init,"accessor.init"))&&E.unshift(n);else if(void 0!==O)throw new TypeError("accessor decorators must return an object with get, set, or init properties or undefined")}else y(O,(d?"field":"method")+" decorators","return")&&(d?E.unshift(O):w[D]=O)}return o<2&&s.push(_(E,l,1),_(a,l,0)),d||x||(h?f?s.splice(-1,0,A("get",l),A("set",l)):s.push(S?w[D]:y.call.bind(w[D])):m(e,r,w)),O}function z(e){return m(e,p,{configurable:!0,enumerable:!0,value:c})}return void 0!==a&&(c=a[p]),c=x(null==c?null:c),h=[],d=function(e){e&&h.push(_(e))},b=function(t,r){for(var a=0;a<i.length;a++){var c=i[a],n=c[1],d=7&n;if((8&n)==t&&!d==r){var b=c[2],k=!!c[3],p=16&n;C(t?e:e.prototype,c,p,k?"#"+b:v(b),d,d<2?[]:t?l=l||[]:s=s||[],h,!!t,k,r,t&&k?function(t){return u(t)===e}:o)}}},b(8,0),b(0,0),b(8,1),b(0,1),d(s),d(l),n=h,f||z(e),{e:n,get c(){var i=[];return f&&[z(e=C(e,[t],r,e.name,5,i)),_(i,1)]}}}let m,x,g,f,_,y,C,z,S,A,w,E,D,O,V,L,$,I,N,M,j,T,P,q,Z,H,J,B,U,G,X,F,R,K,Q,W,Y,ee,te,ie,re,oe;const ae="ve-checkbox",ce="ve-checkbox-group",ne=["aria-label","aria-labelledby","aria-describedby"],se={fromAttribute:e=>e??"",toAttribute:e=>String(e)},le={fromAttribute(e){if(null===e||0===e.trim().length)return[];try{const t=JSON.parse(e);return Array.isArray(t)?t.filter(e=>de(e)):[]}catch{return e.split(",").map(e=>e.trim()).filter(e=>e.length>0)}},toAttribute:e=>0===e.length?"[]":JSON.stringify(e)},he={fromAttribute(e){if(null===e||0===e.trim().length)return[];try{const t=JSON.parse(e);return Array.isArray(t)?t:[]}catch{return[]}},toAttribute(e){try{return JSON.stringify(e)}catch{return null}}};function de(e){return"string"==typeof e||"number"==typeof e}m=(0,s.MZ)({type:Boolean,reflect:!0}),x=(0,s.MZ)({type:Boolean,attribute:"default-checked"}),g=(0,s.MZ)({type:Boolean,reflect:!0}),f=(0,s.MZ)({type:Boolean,reflect:!0}),_=(0,s.MZ)({converter:se}),y=(0,s.MZ)({attribute:!1}),C=(0,s.P)(".ve-checkbox-input"),z=(0,s.P)("slot:not([name])"),S=(0,s.wk)();class be extends l.IB{static{({e:[A,w,E,D,O,V,L,$,I,N,M,j,T,P,q,Z,H,J]}=p(this,[],[[m,1,"checked"],[x,1,"defaultChecked"],[g,1,"indeterminate"],[f,1,"disabled"],[_,1,"value"],[y,1,"groupDisabled"],[C,1,"inputElement"],[z,1,"defaultSlot"],[S,1,"hasLabel"]]))}static styles=d;static get observedAttributes(){return[...new Set([...super.observedAttributes,...ne])]}#e=(()=>{const e=A(this,void 0);return w(this),e})();get checked(){return this.#e}set checked(e){this.#e=e}#t=(()=>{const e=E(this,!1);return D(this),e})();get defaultChecked(){return this.#t}set defaultChecked(e){this.#t=e}#i=(()=>{const e=O(this,!1);return V(this),e})();get indeterminate(){return this.#i}set indeterminate(e){this.#i=e}#r=(()=>{const e=L(this,!1);return $(this),e})();get disabled(){return this.#r}set disabled(e){this.#r=e}#o=(()=>{const e=I(this,"");return N(this),e})();get value(){return this.#o}set value(e){this.#o=e}#a=(()=>{const e=M(this,!1);return j(this),e})();get groupDisabled(){return this.#a}set groupDisabled(e){this.#a=e}#c=(()=>{const e=T(this,null);return P(this),e})();get inputElement(){return this.#c}set inputElement(e){this.#c=e}#n=(()=>{const e=q(this,null);return Z(this),e})();get defaultSlot(){return this.#n}set defaultSlot(e){this.#n=e}#s=(()=>{const e=H(this,!1);return J(this),e})();get hasLabel(){return this.#s}set hasLabel(e){this.#s=e}hasInitializedDefaultChecked=!1;get mergedDisabled(){return this.disabled||this.groupDisabled}get inputValue(){return String(this.value)}get inputAriaLabel(){return this.getAttribute("aria-label")??void 0}get inputAriaLabelledby(){return this.getAttribute("aria-labelledby")??void 0}get inputAriaDescribedby(){return this.getAttribute("aria-describedby")??void 0}connectedCallback(){super.connectedCallback(),this.applyDefaultChecked()}firstUpdated(e){super.firstUpdated(e),this.syncNativeIndeterminateState(),this.syncLabelState()}updated(e){super.updated(e),this.syncNativeIndeterminateState()}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),t!==i&&ne.includes(e)&&this.requestUpdate()}applyDefaultChecked(){this.hasInitializedDefaultChecked||(void 0===this.checked&&this.defaultChecked&&(this.checked=!0),this.hasInitializedDefaultChecked=!0)}syncNativeIndeterminateState(){this.inputElement&&(this.inputElement.indeterminate=this.indeterminate)}syncLabelState(){this.defaultSlot?this.hasLabel=this.defaultSlot.assignedNodes({flatten:!0}).some(e=>function(e){return e.nodeType===Node.ELEMENT_NODE||e.nodeType===Node.TEXT_NODE&&!!e.textContent?.trim().length}(e)):this.hasLabel=!1}emitVeChangeEvent(){const e={checked:!0===this.checked},t=this.value;("number"==typeof t||"string"==typeof t&&t.length>0)&&(e.value=t),this.dispatchEvent(new CustomEvent("ve-change",{detail:e,bubbles:!0,composed:!0}))}handleInputClick(e){e.stopPropagation()}handleInputEvent(e){e.stopPropagation()}handleInputChange(e){const t=e.target;t instanceof HTMLInputElement&&(e.stopPropagation(),this.mergedDisabled?t.checked=!0===this.checked:(this.checked=t.checked,this.indeterminate&&(this.indeterminate=!1),this.emitVeChangeEvent()))}handleDefaultSlotChange(){this.syncLabelState()}renderCheckedIcon(){return a.qy`
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
    `}render(){const e=(0,c.H)({"ve-checkbox":!0,"ve-checkbox--checked":!0===this.checked,"ve-checkbox--indeterminate":this.indeterminate,"ve-checkbox--disabled":this.mergedDisabled}),t=(0,c.H)({"ve-checkbox-icon-hover":!0}),i=(0,c.H)({"ve-checkbox-text":!0,"ve-checkbox-text--hidden":!this.hasLabel});return a.qy`
      <label class=${e} part="wrapper">
        <input
          class="ve-checkbox-input"
          part="input"
          type="checkbox"
          .checked=${!0===this.checked}
          value=${this.inputValue}
          ?disabled=${this.mergedDisabled}
          aria-label=${(0,n.J)(this.inputAriaLabel)}
          aria-labelledby=${(0,n.J)(this.inputAriaLabelledby)}
          aria-describedby=${(0,n.J)(this.inputAriaDescribedby)}
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
    `}}B=(0,s.MZ)({attribute:!1}),U=(0,s.MZ)({attribute:"default-value",converter:le}),G=(0,s.MZ)({type:Boolean,reflect:!0}),X=(0,s.MZ)({type:String,reflect:!0,useDefault:!0}),F=(0,s.MZ)({converter:he});class ve extends l.IB{static{({e:[R,K,Q,W,Y,ee,te,ie,re,oe]}=p(this,[],[[B,1,"value"],[U,1,"defaultValue"],[G,1,"disabled"],[X,1,"direction"],[F,1,"options"]]))}static styles=b;static dependencies={[ae]:be};static get observedAttributes(){return[...new Set([...super.observedAttributes,...ne])]}#l=(()=>{const e=R(this,[]);return K(this),e})();get value(){return this.#l}set value(e){this.#l=e}#h=(()=>{const e=Q(this,[]);return W(this),e})();get defaultValue(){return this.#h}set defaultValue(e){this.#h=e}#d=(()=>{const e=Y(this,!1);return ee(this),e})();get disabled(){return this.#d}set disabled(e){this.#d=e}#b=(()=>{const e=te(this,"horizontal");return ie(this),e})();get direction(){return this.#b}set direction(e){this.#b=e}#v=(()=>{const e=re(this,[]);return oe(this),e})();get options(){return this.#v}set options(e){this.#v=e}normalizedOptions=[];hasInitializedDefaultValue=!1;slottedCheckboxChildren=[];handleGroupChildChange=e=>{if(!(e instanceof CustomEvent))return;const t=this.resolveEventCheckboxTarget(e);if(!t)return;if(!this.isManagedCheckbox(t))return;const i=t.value;if(!de(i)||"number"==typeof i&&!Number.isFinite(i))return;e.stopPropagation();const r=Boolean(e.detail?.checked),o=this.normalizeValueArray(this.value);let a=o;r?o.includes(i)||(a=[...o,i]):a=o.filter(e=>e!==i),this.value=a,this.syncCheckboxStates();const c={value:this.filterAvailableValues(a),checked:r};c.changedValue=i,this.dispatchEvent(new CustomEvent("ve-group-change",{detail:c,bubbles:!0,composed:!0}))};get hasOptions(){return this.normalizedOptions.length>0}get groupAriaLabel(){return this.getAttribute("aria-label")??void 0}get groupAriaLabelledby(){return this.getAttribute("aria-labelledby")??void 0}get groupAriaDescribedby(){return this.getAttribute("aria-describedby")??void 0}connectedCallback(){super.connectedCallback(),this.normalizedOptions=this.normalizeOptions(this.options),this.applyDefaultValue(),this.addEventListener("ve-change",this.handleGroupChildChange)}disconnectedCallback(){this.removeEventListener("ve-change",this.handleGroupChildChange),super.disconnectedCallback()}firstUpdated(e){super.firstUpdated(e),this.refreshSlottedCheckboxChildren(),this.syncCheckboxStates()}willUpdate(e){super.willUpdate(e),e.has("options")&&(this.normalizedOptions=this.normalizeOptions(this.options))}updated(e){super.updated(e),e.has("options")&&!this.hasOptions&&this.refreshSlottedCheckboxChildren(),(e.has("value")||e.has("disabled")||e.has("options"))&&this.syncCheckboxStates()}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),t!==i&&ne.includes(e)&&this.requestUpdate()}applyDefaultValue(){if(this.hasInitializedDefaultValue)return;const e=this.normalizeValueArray(this.value),t=this.normalizeValueArray(this.defaultValue);0===e.length&&t.length>0?this.value=t:this.isSameValueArray(this.value,e)||(this.value=e),this.hasInitializedDefaultValue=!0}normalizeValueArray(e){if(!Array.isArray(e))return[];const t=[],i=new Set;for(const r of e)de(r)&&("number"!=typeof r||Number.isFinite(r))&&(i.has(r)||(i.add(r),t.push(r)));return t}normalizeOptions(e){if(!Array.isArray(e))return[];const t=[],i=new Set;for(const r of e){const e=this.normalizeOption(r);e&&(i.has(e.value)||(i.add(e.value),t.push(e)))}return t}normalizeOption(e){if(de(e))return{label:e,value:e,disabled:!1};if(!e||"object"!=typeof e)return null;const t=e;return de(t.value)?{label:t.label??t.value,value:t.value,disabled:!0===t.disabled}:null}collectSlottedCheckboxChildren(){const e=new Set;for(const t of this.querySelectorAll(ae))t instanceof be&&t.closest(ce)===this&&e.add(t);return[...e]}refreshSlottedCheckboxChildren(){this.slottedCheckboxChildren=this.collectSlottedCheckboxChildren()}getSlottedCheckboxChildren(){return this.slottedCheckboxChildren}getCheckboxChildren(){return this.hasOptions?Array.from(this.renderRoot.querySelectorAll("ve-checkbox[data-option-item]")):this.getSlottedCheckboxChildren()}filterAvailableValues(e){if(this.hasOptions){const t=new Set(this.normalizedOptions.map(e=>e.value));return e.filter(e=>t.has(e))}const t=new Set(this.getCheckboxChildren().map(e=>e.value));return e.filter(e=>t.has(e))}syncCheckboxStates(){const e=this.normalizeValueArray(this.value);if(!this.isSameValueArray(this.value,e))return void(this.value=e);if(this.hasOptions)return;const t=new Set(e);for(const i of this.getCheckboxChildren())i.groupDisabled=this.disabled,i.checked=t.has(i.value),i.indeterminate=!1}isSameValueArray(e,t){return Array.isArray(e)?e.length===t.length&&e.every((e,i)=>e===t[i]):0===t.length}resolveEventCheckboxTarget(e){const t=e.composedPath()[0];return t instanceof Element&&t.localName===ae?t:void 0}isManagedCheckbox(e){return this.hasOptions?e.hasAttribute("data-option-item"):e.closest(ce)===this}handleSlotChange(){this.refreshSlottedCheckboxChildren(),this.syncCheckboxStates()}renderOptionLabel(e){return null!=(t=e.label)&&"boolean"!=typeof t&&"function"!=typeof t&&"symbol"!=typeof t?e.label:String(e.value);var t}renderOptionNodes(){const e=new Set(this.normalizeValueArray(this.value));return this.normalizedOptions.map(t=>a.qy`
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
      `)}render(){const e=(0,c.H)({"ve-checkbox-group":!0,"ve-checkbox-group--vertical":"vertical"===this.direction,"ve-checkbox-group-direction-horizontal":"horizontal"===this.direction,"ve-checkbox-group-direction-vertical":"vertical"===this.direction});return a.qy`
      <div
        class=${e}
        part="group"
        role="group"
        aria-label=${(0,n.J)(this.groupAriaLabel)}
        aria-labelledby=${(0,n.J)(this.groupAriaLabelledby)}
        aria-describedby=${(0,n.J)(this.groupAriaDescribedby)}
      >
        ${this.hasOptions?this.renderOptionNodes():a.qy`<slot @slotchange=${this.handleSlotChange}></slot>`}
      </div>
    `}}(0,l.Xq)(ae,be),(0,l.Xq)(ce,ve);var ue=i(35780);const ke=(0,ue.h)({tagName:ae,elementClass:be,react:o,events:{onChange:"ve-change"},ownEvents:["onChange"]});(0,ue.h)({tagName:ce,elementClass:ve,react:o,events:{onChange:"ve-group-change"},ownEvents:["onChange"]})}}]);