"use strict";(self.webpackChunksandbox_web=self.webpackChunksandbox_web||[]).push([[2313,3716,6971],{72313(e,t,r){r.d(t,{F:()=>V});var o=r(30758),n=r.t(o,2),a=r(46140),l=r(45080),i=r(67286),c=r(61834),s=r(94023),v=r(3716),d=r(26971),u=r(33254),h=r(53152),f=r(17400),g=r(40362),p=r(36832);const b=l.AH`
  :host {
    --ve-alert-border-width: var(--stroke-weight-base);
    --ve-alert-border-radius: var(--radius-lg);
    --ve-alert-gap: var(--space-s);
    --ve-alert-content-gap: var(--space-xxs);
    --ve-alert-line-height: var(--line-height-body);

    --ve-alert-padding-horizontal: var(--space-s);
    --ve-alert-padding-vertical: var(--space-xs);

    --ve-alert-font-family: var(--font-sans);
    --ve-alert-font-size-text-content: var(--text-body);
    --ve-alert-font-size-icon: var(--text-subsection-title);
    --ve-alert-icon-align-self: flex-start;
    --ve-alert-close-button-padding: var(--space-xxxs);
    --ve-alert-close-button-radius: var(--radius-xs);
    --ve-alert-close-icon-size: var(--text-body);
    --ve-alert-close-color: var(--color-icon-secondary);
    --ve-alert-close-color-hover: var(--color-icon-primary);

    --ve-alert-neutral-color-bg: var(--color-bg-secondary);
    --ve-alert-neutral-color-border: var(--color-border-default);
    --ve-alert-neutral-color-icon: var(--color-icon-primary);
    --ve-alert-neutral-color-text-content: var(--color-text-primary);

    --ve-alert-info-color-bg: var(--color-bg-info-secondary);
    --ve-alert-info-color-border: var(--color-border-info);
    --ve-alert-info-color-icon: var(--color-text-info);
    --ve-alert-info-color-text-content: var(--color-text-info);

    --ve-alert-warning-color-bg: var(--color-bg-warning-secondary);
    --ve-alert-warning-color-border: var(--color-border-warning);
    --ve-alert-warning-color-icon: var(--color-text-warning);
    --ve-alert-warning-color-text-content: var(--color-text-warning);

    --ve-alert-error-color-bg: var(--color-bg-danger-secondary);
    --ve-alert-error-color-border: var(--color-border-danger);
    --ve-alert-error-color-icon: var(--color-text-danger);
    --ve-alert-error-color-text-content: var(--color-text-danger);

    --ve-alert-success-color-bg: var(--color-bg-success-secondary);
    --ve-alert-success-color-border: var(--color-border-success);
    --ve-alert-success-color-icon: var(--color-text-success);
    --ve-alert-success-color-text-content: var(--color-text-success);
  }
`,_=[s.H6,b,l.AH`
    :host {
      display: block;
      box-sizing: border-box;
      width: 100%;
    }

    :host([hidden]) {
      display: none;
    }

    .ve-alert {
      box-sizing: border-box;
      border: var(--ve-alert-border-width) solid transparent;
      border-radius: var(--ve-alert-border-radius);
      padding: var(--ve-alert-padding-vertical)
        var(--ve-alert-padding-horizontal);
      font-family: var(--ve-alert-font-family);
      font-size: var(--ve-alert-font-size-text-content);
      overflow: hidden;
      display: flex;
      gap: var(--ve-alert-gap);
      width: 100%;
      text-align: left;
      align-items: flex-start;
      line-height: var(--ve-alert-line-height);
    }

    .ve-alert-neutral {
      border-color: var(--ve-alert-neutral-color-border);
      background-color: var(--ve-alert-neutral-color-bg);
    }

    .ve-alert-info {
      border-color: var(--ve-alert-info-color-border);
      background-color: var(--ve-alert-info-color-bg);
    }

    .ve-alert-success {
      border-color: var(--ve-alert-success-color-border);
      background-color: var(--ve-alert-success-color-bg);
    }

    .ve-alert-warning {
      border-color: var(--ve-alert-warning-color-border);
      background-color: var(--ve-alert-warning-color-bg);
    }

    .ve-alert-error {
      border-color: var(--ve-alert-error-color-border);
      background-color: var(--ve-alert-error-color-bg);
    }

    .ve-alert-main {
      display: flex;
      flex: 1 1 auto;
      gap: var(--ve-alert-content-gap);
      align-items: flex-start;
      min-width: 0;
    }

    .ve-alert-content {
      flex: 1 1 auto;
      min-width: 0;
      font-size: var(--ve-alert-font-size-text-content);
      line-height: var(--ve-alert-line-height);
      word-break: break-word;
    }

    .ve-alert-neutral .ve-alert-content {
      color: var(--ve-alert-neutral-color-text-content);
    }

    .ve-alert-info .ve-alert-content {
      color: var(--ve-alert-info-color-text-content);
    }

    .ve-alert-success .ve-alert-content {
      color: var(--ve-alert-success-color-text-content);
    }

    .ve-alert-warning .ve-alert-content {
      color: var(--ve-alert-warning-color-text-content);
    }

    .ve-alert-error .ve-alert-content {
      color: var(--ve-alert-error-color-text-content);
    }

    .ve-alert-icon-wrapper {
      align-self: var(--ve-alert-icon-align-self);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex: none;
      width: var(--ve-alert-font-size-icon);
      height: calc(
        var(--ve-alert-font-size-text-content) * var(--ve-alert-line-height)
      );
      line-height: 1;
    }

    .ve-alert-icon-wrapper ve-icon,
    .ve-alert-icon-wrapper svg,
    .ve-alert-icon-wrapper ::slotted(svg) {
      font-size: var(--ve-alert-font-size-icon);
      width: 1em;
      height: 1em;
      color: inherit;
      flex: none;
    }

    .ve-alert-icon-wrapper ::slotted(*) {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      max-width: 100%;
      max-height: 100%;
      line-height: 1;
      flex: none;
    }

    .ve-alert-neutral .ve-alert-icon-wrapper {
      color: var(--ve-alert-neutral-color-icon);
    }

    .ve-alert-info .ve-alert-icon-wrapper {
      color: var(--ve-alert-info-color-icon);
    }

    .ve-alert-success .ve-alert-icon-wrapper {
      color: var(--ve-alert-success-color-icon);
    }

    .ve-alert-warning .ve-alert-icon-wrapper {
      color: var(--ve-alert-warning-color-icon);
    }

    .ve-alert-error .ve-alert-icon-wrapper {
      color: var(--ve-alert-error-color-icon);
    }

    .ve-alert-close-button {
      display: inline-flex;
      flex: none;
      align-items: center;
      justify-content: center;
      padding: var(--ve-alert-close-button-padding);
      border: 0;
      border-radius: var(--ve-alert-close-button-radius);
      background: transparent;
      color: var(--ve-alert-close-color);
      line-height: 1;
      cursor: pointer;
    }

    .ve-alert-close-button:hover,
    .ve-alert-close-button:focus-visible {
      color: var(--ve-alert-close-color-hover);
    }

    .ve-alert-close-button:focus-visible {
      outline: none;
    }

    .ve-alert-close-button ve-icon,
    .ve-alert-close-button svg {
      width: var(--ve-alert-close-icon-size);
      height: var(--ve-alert-close-icon-size);
      color: inherit;
      flex: none;
    }

    :host([dir='rtl']) .ve-alert,
    :host-context([dir='rtl']) .ve-alert {
      direction: rtl;
      text-align: right;
    }
  `];function w(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function y(e){if(Object(e)!==e)throw TypeError("right-hand side of 'in' should be an object, got "+(null!==e?typeof e:"null"));return e}function m(e,t,r){"symbol"==typeof t&&(t=(t=t.description)?"["+t+"]":"");try{Object.defineProperty(e,"name",{configurable:!0,value:r?r+" "+t:t})}catch(o){}return e}let x,S,k,z,I,C,j,E,A,$,D,O,q,P,T,B,M,H;const N="ve-alert",R={neutral:v.infoIcon,info:v.infoIcon,success:d.checkCircleIcon,warning:u.warningIcon,error:h.errorIcon},U={fromAttribute:e=>null===e||"false"!==e,toAttribute:e=>e?null:"false"},Z={fromAttribute:e=>null!==e&&"false"!==e,toAttribute:e=>e?"":null};x=(0,c.MZ)({type:String,reflect:!0,useDefault:!0}),S=(0,c.MZ)({attribute:"show-icon",reflect:!0,converter:U,useDefault:!0}),k=(0,c.MZ)({attribute:"closable",reflect:!0,converter:Z,useDefault:!0}),z=(0,c.wk)(),I=(0,c.P)('slot[name="icon"]'),C=(0,c.wk)();class W extends s.IB{static{({e:[j,E,A,$,D,O,q,P,T,B,M,H]}=function(e,t,r,o,n,a){var l,i,c,s,v,d,u,h=Symbol.metadata||Symbol.for("Symbol.metadata"),f=Object.defineProperty,g=Object.create,p=[g(null),g(null)],b=t.length;function _(t,r,o){return function(n,a){r&&(a=n,n=e);for(var l=0;l<t.length;l++)a=t[l].apply(n,o?[a]:[]);return o?a:n}}function x(e,t,r,o){if("function"!=typeof e&&(o||void 0!==e))throw new TypeError(t+" must "+(r||"be")+" a function"+(o?"":" or undefined"));return e}function S(e,t,r,o,n,a,c,s,v,d,u){function h(e){if(!u(e))throw new TypeError("Attempted to access private element on non-instance")}var g=[].concat(t[0]),b=t[3],w=!c,y=1===n,S=3===n,k=4===n,z=2===n;function I(t,r,o){return function(n,a){return r&&(a=n,n=e),o&&o(n),desc[t].call(n,a)}}var C={},j=[],E=S?"get":k||y?"set":"value";if(!w&&(v?(d||y?C={get:m(function(){return b(this)},o,"get"),set:function(e){t[4](this,e)}}:C[E]=b,d||m(C[E],o,z?"":E)):d||(C=Object.getOwnPropertyDescriptor(e,o)),!d&&!v)){if((i=p[+s][o])&&7!==(i^n))throw new Error("Decorating two elements with the same name ("+C[E].name+") is not supported yet");p[+s][o]=n<3?1:n}for(var A=e,$=g.length-1;$>=0;$-=r?2:1){var D=x(g[$],"A decorator","be",!0),O=r?g[$-1]:void 0,q={},P={kind:["field","accessor","method","getter","setter","class"][n],name:o,metadata:l,addInitializer:function(e,t){if(e.v)throw new TypeError("attempted to call addInitializer after decoration was finished");x(t,"An initializer","be",!0),a.push(t)}.bind(null,q)};if(w)i=D.call(O,A,P),q.v=1,x(i,"class decorators","return")&&(A=i);else if(P.static=s,P.private=v,i=P.access={has:v?u.bind():function(e){return o in e}},k||(i.get=v?z?function(e){return h(e),C.value}:I("get",0,h):function(e){return e[o]}),z||S||(i.set=v?I("set",0,h):function(e,t){e[o]=t}),A=D.call(O,y?{get:C.get,set:C.set}:C[E],P),q.v=1,y){if("object"==typeof A&&A)(i=x(A.get,"accessor.get"))&&(C.get=i),(i=x(A.set,"accessor.set"))&&(C.set=i),(i=x(A.init,"accessor.init"))&&j.unshift(i);else if(void 0!==A)throw new TypeError("accessor decorators must return an object with get, set, or init properties or undefined")}else x(A,(d?"field":"method")+" decorators","return")&&(d?j.unshift(A):C[E]=A)}return n<2&&c.push(_(j,s,1),_(a,s,0)),d||w||(v?y?c.splice(-1,0,I("get",s),I("set",s)):c.push(z?C[E]:x.call.bind(C[E])):f(e,o,C)),A}function k(e){return f(e,h,{configurable:!0,enumerable:!0,value:l})}return void 0!==a&&(l=a[h]),l=g(null==l?null:l),v=[],d=function(e){e&&v.push(_(e))},(u=function(t,o){for(var a=0;a<r.length;a++){var l=r[a],i=l[1],d=7&i;if((8&i)==t&&!d==o){var u=l[2],h=!!l[3],f=16&i;S(t?e:e.prototype,l,f,h?"#"+u:w(u),d,d<2?[]:t?s=s||[]:c=c||[],v,!!t,h,o,t&&h?function(t){return y(t)===e}:n)}}})(8,0),u(0,0),u(8,1),u(0,1),d(c),d(s),i=v,b||k(e),{e:i,get c(){var r=[];return b&&[k(e=S(e,[t],o,e.name,5,r)),_(r,1)]}}}(this,[],[[x,1,"type"],[S,1,"showIcon"],[k,1,"closable"],[z,1,"closed"],[I,1,"iconSlot"],[C,1,"hasIconSlot"]]))}static shadowRootOptions=s.YD;static styles=_;static dependencies={[f.v]:f.O};#e=(()=>{const e=j(this,"neutral");return E(this),e})();get type(){return this.#e}set type(e){this.#e=e}#t=(()=>{const e=A(this,!0);return $(this),e})();get showIcon(){return this.#t}set showIcon(e){this.#t=e}#r=(()=>{const e=D(this,!1);return O(this),e})();get closable(){return this.#r}set closable(e){this.#r=e}#o=(()=>{const e=q(this,!1);return P(this),e})();get closed(){return this.#o}set closed(e){this.#o=e}#n=(()=>{const e=T(this,null);return B(this),e})();get iconSlot(){return this.#n}set iconSlot(e){this.#n=e}#a=(()=>{const e=M(this,!1);return H(this),e})();get hasIconSlot(){return this.#a}set hasIconSlot(e){this.#a=e}firstUpdated(){this.syncSlotState()}syncSlotState(){this.hasIconSlot=(0,g.qi)(this.iconSlot)||(0,g.mh)(this,"icon"),this.syncSlottedIconSize()}syncSlottedIconSize(){const e=this.iconSlot?.assignedElements({flatten:!0}).filter(e=>e.localName===f.v);e?.forEach(e=>{""===`${e.getAttribute("size")??""}`.trim()&&""===`${e.size??""}`.trim()&&(e.size="var(--ve-alert-font-size-icon)")})}handleSlotChange(){this.syncSlotState()}handleCloseClick(e){this.dispatchEvent(new CustomEvent("ve-close",{detail:{sourceEvent:e},bubbles:!0,composed:!0,cancelable:!0}))&&(this.closed=!0)}renderDefaultIcon(){const e=R[this.type]??R.info;return l.qy`<ve-icon
      .definition=${e}
      size="var(--ve-alert-font-size-icon)"
    ></ve-icon>`}renderIcon(){return this.showIcon?l.qy`
      <div class="ve-alert-icon-wrapper" part="icon" aria-hidden="true">
        <slot name="icon" @slotchange=${this.handleSlotChange}></slot>
        ${this.hasIconSlot?l.s6:this.renderDefaultIcon()}
      </div>
    `:l.s6}renderCloseButton(){return this.closable?l.qy`
      <button
        class="ve-alert-close-button"
        part="close-button"
        type="button"
        aria-label="Close"
        @click=${this.handleCloseClick}
      >
        <ve-icon .definition=${p.u} size="var(--ve-alert-close-icon-size)"></ve-icon>
      </button>
    `:l.s6}render(){if(this.closed)return l.s6;const e=(0,i.H)({"ve-alert":!0,[`ve-alert-${this.type}`]:!0,"ve-alert-closable":this.closable});return l.qy`
      <div class=${e} part="alert" role="alert">
        <div class="ve-alert-main">
          ${this.renderIcon()}
          <div class="ve-alert-content" part="content">
            <slot></slot>
          </div>
        </div>
        ${this.renderCloseButton()}
      </div>
    `}}(0,s.Xq)(N,W);var F=r(74410);const G=(0,a.a)({tagName:N,elementClass:W,react:n,events:{onClose:"ve-close"}}),V=o.forwardRef(({icon:e,children:t,...r},n)=>o.createElement(G,{...r,ref:n},(0,F.RG)("icon",e),t));V.displayName="Alert"},26971(e,t,r){r.r(t);var o=r(24913),n=r(86913);const a={name:"check-circle",svg:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m7.95 12 2.7 2.7 5.4-5.4M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0"/></svg>\n'};(0,o.W)(),(0,n.pU)(a),r.d(t,["checkCircleIcon",0,a])},3716(e,t,r){r.r(t);var o=r(24913),n=r(86913);const a={name:"info",svg:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 11v5m0 5a9 9 0 1 1 0-18 9 9 0 0 1 0 18m.05-13v.1h-.1V8z"/></svg>\n'};(0,o.W)(),(0,n.pU)(a),r.d(t,["infoIcon",0,a])}}]);