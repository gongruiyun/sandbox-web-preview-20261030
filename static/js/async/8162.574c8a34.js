"use strict";(self.webpackChunksandbox_web=self.webpackChunksandbox_web||[]).push([[8162],{67779(e,t,i){i.d(t,{i:()=>a});var r=i(43449);const a=(0,i(63568).b)(r.o,"IconCheck")},44996(e,t,i){i.d(t,{s:()=>de,z:()=>le});var r=i(30758),a=i.t(r,2),o=i(45080),n=i(67286),s=i(67463),d=i(61834),l=i(30184),c=i(94023);const v=o.AH`
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
`,u=[c.H6,v,o.AH`
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
  `],h=[c.H6,v,o.AH`
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
  `];function p(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function b(e){if(Object(e)!==e)throw TypeError("right-hand side of 'in' should be an object, got "+(null!==e?typeof e:"null"));return e}function g(e,t,i){"symbol"==typeof t&&(t=(t=t.description)?"["+t+"]":"");try{Object.defineProperty(e,"name",{configurable:!0,value:i?i+" "+t:t})}catch(r){}return e}function f(e,t,i,r,a,o){var n,s,d,l,c,v,u,h=Symbol.metadata||Symbol.for("Symbol.metadata"),f=Object.defineProperty,_=Object.create,m=[_(null),_(null)],k=t.length;function y(t,i,r){return function(a,o){i&&(o=a,a=e);for(var n=0;n<t.length;n++)o=t[n].apply(a,r?[o]:[]);return r?o:a}}function C(e,t,i,r){if("function"!=typeof e&&(r||void 0!==e))throw new TypeError(t+" must "+(i||"be")+" a function"+(r?"":" or undefined"));return e}function w(e,t,i,r,a,o,d,l,c,v,u){function h(e){if(!u(e))throw new TypeError("Attempted to access private element on non-instance")}var p=[].concat(t[0]),b=t[3],_=!d,k=1===a,w=3===a,z=4===a,x=2===a;function E(t,i,r){return function(a,o){return i&&(o=a,a=e),r&&r(a),desc[t].call(a,o)}}var S={},D=[],O=w?"get":z||k?"set":"value";if(!_&&(c?(v||k?S={get:g(function(){return b(this)},r,"get"),set:function(e){t[4](this,e)}}:S[O]=b,v||g(S[O],r,x?"":O)):v||(S=Object.getOwnPropertyDescriptor(e,r)),!v&&!c)){if((s=m[+l][r])&&7!==(s^a))throw new Error("Decorating two elements with the same name ("+S[O].name+") is not supported yet");m[+l][r]=a<3?1:a}for(var R=e,A=p.length-1;A>=0;A-=i?2:1){var $=C(p[A],"A decorator","be",!0),V=i?p[A-1]:void 0,I={},M={kind:["field","accessor","method","getter","setter","class"][a],name:r,metadata:n,addInitializer:function(e,t){if(e.v)throw new TypeError("attempted to call addInitializer after decoration was finished");C(t,"An initializer","be",!0),o.push(t)}.bind(null,I)};if(_)s=$.call(V,R,M),I.v=1,C(s,"class decorators","return")&&(R=s);else if(M.static=l,M.private=c,s=M.access={has:c?u.bind():function(e){return r in e}},z||(s.get=c?x?function(e){return h(e),S.value}:E("get",0,h):function(e){return e[r]}),x||w||(s.set=c?E("set",0,h):function(e,t){e[r]=t}),R=$.call(V,k?{get:S.get,set:S.set}:S[O],M),I.v=1,k){if("object"==typeof R&&R)(s=C(R.get,"accessor.get"))&&(S.get=s),(s=C(R.set,"accessor.set"))&&(S.set=s),(s=C(R.init,"accessor.init"))&&D.unshift(s);else if(void 0!==R)throw new TypeError("accessor decorators must return an object with get, set, or init properties or undefined")}else C(R,(v?"field":"method")+" decorators","return")&&(v?D.unshift(R):S[O]=R)}return a<2&&d.push(y(D,l,1),y(o,l,0)),v||_||(c?k?d.splice(-1,0,E("get",l),E("set",l)):d.push(x?S[O]:C.call.bind(S[O])):f(e,r,S)),R}function z(e){return f(e,h,{configurable:!0,enumerable:!0,value:n})}return void 0!==o&&(n=o[h]),n=_(null==n?null:n),c=[],v=function(e){e&&c.push(y(e))},u=function(t,r){for(var o=0;o<i.length;o++){var n=i[o],s=n[1],v=7&s;if((8&s)==t&&!v==r){var u=n[2],h=!!n[3],g=16&s;w(t?e:e.prototype,n,g,h?"#"+u:p(u),v,v<2?[]:t?l=l||[]:d=d||[],c,!!t,h,r,t&&h?function(t){return b(t)===e}:a)}}},u(8,0),u(0,0),u(8,1),u(0,1),v(d),v(l),s=c,k||z(e),{e:s,get c(){var i=[];return k&&[z(e=w(e,[t],r,e.name,5,i)),y(i,1)]}}}let _,m,k,y,C,w,z,x,E,S,D,O,R,A,$,V,I,M,j,q,N,P,T,Z,H,J,B,U,L,G,X,F,K;const Q="ve-radio",W="ve-radio-group",Y=["aria-label","aria-labelledby","aria-describedby"],ee={fromAttribute:e=>e??"",toAttribute:e=>String(e)},te={fromAttribute(e){if(null===e||0===e.trim().length)return[];try{const t=JSON.parse(e);return Array.isArray(t)?t:[]}catch{return[]}},toAttribute(e){try{return JSON.stringify(e)}catch{return null}}};function ie(e){return"string"==typeof e||"number"==typeof e&&Number.isFinite(e)}function re(e){return[...new Set([...e,...Y])]}function ae(e,t){return e.getAttribute(t)??void 0}_=(0,d.MZ)({type:Boolean,reflect:!0}),m=(0,d.MZ)({type:Boolean,attribute:"default-checked"}),k=(0,d.MZ)({type:Boolean,reflect:!0}),y=(0,d.MZ)({converter:ee}),C=(0,d.wk)();class oe extends c.IB{static{({e:[w,z,x,E,S,D,O,R,A,$]}=f(this,[],[[_,1,"checked"],[m,1,"defaultChecked"],[k,1,"disabled"],[y,1,"value"],[C,1,"groupDisabled"]]))}static styles=u;static get observedAttributes(){return re(super.observedAttributes)}#e=(()=>{const e=w(this,void 0);return z(this),e})();get checked(){return this.#e}set checked(e){this.#e=e}#t=(()=>{const e=x(this,!1);return E(this),e})();get defaultChecked(){return this.#t}set defaultChecked(e){this.#t=e}#i=(()=>{const e=S(this,!1);return D(this),e})();get disabled(){return this.#i}set disabled(e){this.#i=e}#r=(()=>{const e=O(this,"");return R(this),e})();get value(){return this.#r}set value(e){this.#r=e}#a=(()=>{const e=A(this,!1);return $(this),e})();get groupDisabled(){return this.#a}set groupDisabled(e){this.#a=e}hasInitializedDefaultChecked=!1;get mergedDisabled(){return this.disabled||this.groupDisabled}get inputValue(){return String(this.value)}connectedCallback(){super.connectedCallback(),this.applyDefaultChecked()}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),t!==i&&Y.includes(e)&&this.requestUpdate()}applyDefaultChecked(){this.hasInitializedDefaultChecked||(void 0===this.checked&&this.defaultChecked&&(this.checked=!0),this.hasInitializedDefaultChecked=!0)}emitVeChangeEvent(){const e={checked:!0===this.checked};ie(this.value)&&String(this.value).length>0&&(e.value=this.value),this.dispatchEvent(new CustomEvent("ve-change",{detail:e,bubbles:!0,composed:!0}))}handleInputClick(e){e.stopPropagation()}handleInputChange(e){const t=e.target;t instanceof HTMLInputElement&&(e.stopPropagation(),this.mergedDisabled?t.checked=!0===this.checked:(this.checked=t.checked,this.emitVeChangeEvent()))}render(){const e=(0,n.H)({"ve-radio":!0,"ve-radio--checked":!0===this.checked,"ve-radio--disabled":this.mergedDisabled});return o.qy`
      <label class=${e} part="wrapper">
        <input
          class="ve-radio-input"
          part="input"
          type="radio"
          .checked=${!0===this.checked}
          ?disabled=${this.mergedDisabled}
          .value=${this.inputValue}
          aria-label=${(0,s.J)(ae(this,"aria-label"))}
          aria-labelledby=${(0,s.J)(ae(this,"aria-labelledby"))}
          aria-describedby=${(0,s.J)(ae(this,"aria-describedby"))}
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
    `}}V=(0,d.MZ)({converter:ee,reflect:!0}),I=(0,d.MZ)({attribute:"default-value",converter:ee}),M=(0,d.MZ)({type:Boolean,reflect:!0}),j=(0,d.MZ)({type:String,reflect:!0,useDefault:!0}),q=(0,d.MZ)({converter:te}),N=(0,d.KN)({selector:Q,flatten:!0});class ne extends c.IB{static{({e:[P,T,Z,H,J,B,U,L,G,X,F,K]}=f(this,[],[[V,1,"value"],[I,1,"defaultValue"],[M,1,"disabled"],[j,1,"direction"],[q,1,"options"],[N,1,"assignedRadioElements"]]))}static styles=h;static dependencies={[Q]:oe};static get observedAttributes(){return re(super.observedAttributes)}#o=(()=>{const e=P(this,"");return T(this),e})();get value(){return this.#o}set value(e){this.#o=e}#n=(()=>{const e=Z(this,"");return H(this),e})();get defaultValue(){return this.#n}set defaultValue(e){this.#n=e}#s=(()=>{const e=J(this,!1);return B(this),e})();get disabled(){return this.#s}set disabled(e){this.#s=e}#d=(()=>{const e=U(this,"horizontal");return L(this),e})();get direction(){return this.#d}set direction(e){this.#d=e}#l=(()=>{const e=G(this,[]);return X(this),e})();get options(){return this.#l}set options(e){this.#l=e}#c=(()=>{const e=F(this);return K(this),e})();get assignedRadioElements(){return this.#c}set assignedRadioElements(e){this.#c=e}normalizedOptions=[];hasInitializedDefaultValue=!1;handleGroupChildChange=e=>{if(!(e instanceof CustomEvent))return;const t=this.resolveEventRadioTarget(e);if(!t)return;if(!this.isManagedRadio(t))return;e.stopPropagation();const i=t.value;ie(i)&&(this.value!==i?(this.value=i,this.syncRadioStates(),this.dispatchEvent(new CustomEvent("ve-group-change",{detail:{value:this.value},bubbles:!0,composed:!0}))):this.syncRadioStates())};get hasOptions(){return this.normalizedOptions.length>0}connectedCallback(){super.connectedCallback(),this.normalizedOptions=this.normalizeOptions(this.options),this.applyDefaultValue(),this.addEventListener("ve-change",this.handleGroupChildChange)}disconnectedCallback(){this.removeEventListener("ve-change",this.handleGroupChildChange),super.disconnectedCallback()}firstUpdated(e){super.firstUpdated(e),this.syncRadioStates()}willUpdate(e){super.willUpdate(e),e.has("options")&&(this.normalizedOptions=this.normalizeOptions(this.options))}updated(e){super.updated(e),(e.has("value")||e.has("disabled")||e.has("options"))&&this.syncRadioStates()}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),t!==i&&Y.includes(e)&&this.requestUpdate()}applyDefaultValue(){this.hasInitializedDefaultValue||(0===String(this.value).length&&String(this.defaultValue).length>0&&(this.value=this.defaultValue),this.hasInitializedDefaultValue=!0)}normalizeOptions(e){if(!Array.isArray(e))return[];const t=[],i=new Set;for(const r of e){const e=this.normalizeOption(r);e&&(i.has(e.value)||(i.add(e.value),t.push(e)))}return t}normalizeOption(e){if(ie(e))return{label:e,value:e,disabled:!1};if(!e||"object"!=typeof e)return null;const t=e;return ie(t.value)?{label:t.label??t.value,value:t.value,disabled:!0===t.disabled}:null}getSlottedRadioChildren(){return this.assignedRadioElements.filter(e=>e instanceof oe)}getRadioChildren(){return this.hasOptions?Array.from(this.renderRoot.querySelectorAll("ve-radio[data-option-item]")):this.getSlottedRadioChildren()}syncManagedRadio(e){e.groupDisabled=this.disabled,e.checked=e.value===this.value}syncRadioStates(){for(const e of this.getRadioChildren())this.syncManagedRadio(e)}isManagedRadio(e){return this.hasOptions?e.hasAttribute("data-option-item"):e.closest(W)===this}resolveEventRadioTarget(e){return e.target instanceof oe?e.target:e.composedPath().find(e=>e instanceof oe)}handleSlotChange(){this.syncRadioStates()}renderOptionLabel(e){return null!=(t=e.label)&&"boolean"!=typeof t&&"function"!=typeof t&&"symbol"!=typeof t?e.label:String(e.value);var t}renderOptionNodes(){return(0,l.u)(this.normalizedOptions,e=>e.value,e=>o.qy`
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
      `)}render(){const e=(0,n.H)({"ve-radio-group":!0,"ve-radio-group-direction-horizontal":"horizontal"===this.direction,"ve-radio-group-direction-vertical":"vertical"===this.direction});return o.qy`
      <div
        class=${e}
        part="group"
        role="radiogroup"
        aria-label=${(0,s.J)(ae(this,"aria-label"))}
        aria-labelledby=${(0,s.J)(ae(this,"aria-labelledby"))}
        aria-describedby=${(0,s.J)(ae(this,"aria-describedby"))}
      >
        ${this.hasOptions?this.renderOptionNodes():o.qy`<slot @slotchange=${this.handleSlotChange}></slot>`}
      </div>
    `}}(0,c.Xq)(Q,oe),(0,c.Xq)(W,ne);var se=i(35780);const de=(0,se.h)({tagName:Q,elementClass:oe,react:a,events:{onChange:"ve-change"},ownEvents:["onChange"]}),le=(0,se.h)({tagName:W,elementClass:ne,react:a,events:{onChange:"ve-group-change"},ownEvents:["onChange"]})}}]);