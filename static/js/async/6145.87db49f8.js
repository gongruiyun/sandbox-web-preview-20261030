"use strict";(self.webpackChunksandbox_web=self.webpackChunksandbox_web||[]).push([[6145],{72484(e,t,i){i.d(t,{A:()=>p});var n=i(30758),r=i(34069),s=i(97500),o=i.n(s),a=function(){return a=Object.assign||function(e){for(var t,i=1,n=arguments.length;i<n;i++)for(var r in t=arguments[i])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},a.apply(this,arguments)},l=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(i[n[r]]=e[n[r]])}return i},c=(0,n.forwardRef)(function(e){var t=e.type,i=void 0===t?"text":t,s=e.className,c=l(e,["type","className"]);return n.createElement(r.A,a({type:i},c,{className:o()("paas-ui-text-button",s)}))});c.__BYTE_BUTTON=!0,c.displayName="TextButton";const p=c},65112(e,t,i){i.d(t,{t:()=>q});var n=i(30758),r=i.t(n,2),s=i(46140),o=i(45080),a=i(67463),l=i(67286),c=i(61834),p=i(94023),v=i(17400),u=i(40362),f=i(93837);const h=o.AH`
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
`,d=[p.H6,h,o.AH`
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
  `];function g(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var n=i.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function m(e){if(Object(e)!==e)throw TypeError("right-hand side of 'in' should be an object, got "+(null!==e?typeof e:"null"));return e}function y(e,t,i){"symbol"==typeof t&&(t=(t=t.description)?"["+t+"]":"");try{Object.defineProperty(e,"name",{configurable:!0,value:i?i+" "+t:t})}catch(n){}return e}let b,z,_,x,w,O,j,S,T,k,A,E;const $="ve-spin",D=new Set(["small","default","large"]),P=new Set(["horizontal","vertical"]),R={fromAttribute:e=>null===e||"false"!==e,toAttribute:e=>e?null:"false"};b=(0,c.MZ)({type:String,reflect:!0,useDefault:!0}),z=(0,c.MZ)({type:String,reflect:!0,useDefault:!0}),_=(0,c.MZ)({attribute:"auto-rotate",reflect:!0,converter:R,useDefault:!0}),x=(0,c.MZ)({type:String});class I extends p.IB{static{({e:[w,O,j,S,T,k,A,E]}=function(e,t,i,n,r,s){var o,a,l,c,p,v,u,f=Symbol.metadata||Symbol.for("Symbol.metadata"),h=Object.defineProperty,d=Object.create,b=[d(null),d(null)],z=t.length;function _(t,i,n){return function(r,s){i&&(s=r,r=e);for(var o=0;o<t.length;o++)s=t[o].apply(r,n?[s]:[]);return n?s:r}}function x(e,t,i,n){if("function"!=typeof e&&(n||void 0!==e))throw new TypeError(t+" must "+(i||"be")+" a function"+(n?"":" or undefined"));return e}function w(e,t,i,n,r,s,l,c,p,v,u){function f(e){if(!u(e))throw new TypeError("Attempted to access private element on non-instance")}var d=[].concat(t[0]),g=t[3],m=!l,z=1===r,w=3===r,O=4===r,j=2===r;function S(t,i,n){return function(r,s){return i&&(s=r,r=e),n&&n(r),desc[t].call(r,s)}}var T={},k=[],A=w?"get":O||z?"set":"value";if(!m&&(p?(v||z?T={get:y(function(){return g(this)},n,"get"),set:function(e){t[4](this,e)}}:T[A]=g,v||y(T[A],n,j?"":A)):v||(T=Object.getOwnPropertyDescriptor(e,n)),!v&&!p)){if((a=b[+c][n])&&7!==(a^r))throw new Error("Decorating two elements with the same name ("+T[A].name+") is not supported yet");b[+c][n]=r<3?1:r}for(var E=e,$=d.length-1;$>=0;$-=i?2:1){var D=x(d[$],"A decorator","be",!0),P=i?d[$-1]:void 0,R={},I={kind:["field","accessor","method","getter","setter","class"][r],name:n,metadata:o,addInitializer:function(e,t){if(e.v)throw new TypeError("attempted to call addInitializer after decoration was finished");x(t,"An initializer","be",!0),s.push(t)}.bind(null,R)};if(m)a=D.call(P,E,I),R.v=1,x(a,"class decorators","return")&&(E=a);else if(I.static=c,I.private=p,a=I.access={has:p?u.bind():function(e){return n in e}},O||(a.get=p?j?function(e){return f(e),T.value}:S("get",0,f):function(e){return e[n]}),j||w||(a.set=p?S("set",0,f):function(e,t){e[n]=t}),E=D.call(P,z?{get:T.get,set:T.set}:T[A],I),R.v=1,z){if("object"==typeof E&&E)(a=x(E.get,"accessor.get"))&&(T.get=a),(a=x(E.set,"accessor.set"))&&(T.set=a),(a=x(E.init,"accessor.init"))&&k.unshift(a);else if(void 0!==E)throw new TypeError("accessor decorators must return an object with get, set, or init properties or undefined")}else x(E,(v?"field":"method")+" decorators","return")&&(v?k.unshift(E):T[A]=E)}return r<2&&l.push(_(k,c,1),_(s,c,0)),v||m||(p?z?l.splice(-1,0,S("get",c),S("set",c)):l.push(j?T[A]:x.call.bind(T[A])):h(e,n,T)),E}function O(e){return h(e,f,{configurable:!0,enumerable:!0,value:o})}return void 0!==s&&(o=s[f]),o=d(null==o?null:o),p=[],v=function(e){e&&p.push(_(e))},(u=function(t,n){for(var s=0;s<i.length;s++){var o=i[s],a=o[1],v=7&a;if((8&a)==t&&!v==n){var u=o[2],f=!!o[3],h=16&a;w(t?e:e.prototype,o,h,f?"#"+u:g(u),v,v<2?[]:t?c=c||[]:l=l||[],p,!!t,f,n,t&&f?function(t){return m(t)===e}:r)}}})(8,0),u(0,0),u(8,1),u(0,1),v(l),v(c),a=p,z||O(e),{e:a,get c(){var i=[];return z&&[O(e=w(e,[t],n,e.name,5,i)),_(i,1)]}}}(this,[],[[b,1,"size"],[z,1,"direction"],[_,1,"autoRotate"],[x,1,"tip"]]))}static styles=d;static dependencies={[v.v]:v.O};#e=(()=>{const e=w(this,"default");return O(this),e})();get size(){return this.#e}set size(e){this.#e=e}#t=(()=>{const e=j(this,"horizontal");return S(this),e})();get direction(){return this.#t}set direction(e){this.#t=e}#i=(()=>{const e=T(this,!0);return k(this),e})();get autoRotate(){return this.#i}set autoRotate(e){this.#i=e}#n=(()=>{const e=A(this,"");return E(this),e})();get tip(){return this.#n}set tip(e){this.#n=e}get normalizedSize(){return D.has(this.size)?this.size:"default"}get normalizedDirection(){return P.has(this.direction)?this.direction:"horizontal"}get hasCustomIcon(){return(0,u.mh)(this,"icon")}get hasTip(){return(this.tip??"").trim().length>0}get statusAriaLabel(){if(!this.hasTip)return this.getAttribute("aria-label")??"Loading"}handleSlotChange(){this.requestUpdate()}renderDefaultIcon(){return o.qy`<ve-icon
      class="ve-spin-default-icon"
      .definition=${f.o}
    ></ve-icon>`}render(){const e=(0,l.H)({"ve-spin":!0,[`ve-spin-${this.normalizedSize}`]:!0,[`ve-spin-${this.normalizedDirection}`]:!0,"ve-spin-icon-only":!this.hasTip}),t=(0,l.H)({"ve-spin-icon":!0,"ve-spin-icon-rotating":this.autoRotate});return o.qy`
      <div
        class=${e}
        part="base"
        role="status"
        aria-live="polite"
        aria-busy="true"
        aria-label=${(0,a.J)(this.statusAriaLabel)}
      >
        <span class=${t} part="icon">
          <span class="ve-spin-icon-graphic" part="icon-graphic">
            <slot name="icon" @slotchange=${this.handleSlotChange}></slot>
            ${this.hasCustomIcon?o.s6:this.renderDefaultIcon()}
          </span>
        </span>

        ${this.hasTip?o.qy`<span class="ve-spin-tip" part="tip">${this.tip}</span>`:o.s6}
      </div>
    `}}(0,p.Xq)($,I);var N=i(74410);const C=(0,s.a)({tagName:$,elementClass:I,react:r}),q=n.forwardRef(({icon:e,...t},i)=>n.createElement(C,{...t,ref:i},(0,N.M2)([["icon",e]])));q.displayName="Spin"}}]);