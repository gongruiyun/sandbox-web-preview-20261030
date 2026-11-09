"use strict";(self.webpackChunksandbox_web=self.webpackChunksandbox_web||[]).push([[3716,6758,6971,7367],{6758(e,n,t){t.r(n),t.d(n,{default:()=>En});var o=t(30758),r=t.t(o,2),a=t(10931),s=t(47031),l=t(91285),i=t(88875),c=t(99944),d=t(54386),v=t(46140),h=t(45080),p=t(67286),u=t(61834),x=t(94023),b=t(3716),g=t(26971),m=t(33254),f=t(53152),y=t(17400),j=t(40362),_=t(36832);const S=h.AH`
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
`,w=[x.H6,S,h.AH`
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
  `];function I(e){var n=function(e,n){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var o=t.call(e,n||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"==typeof n?n:String(n)}function A(e){if(Object(e)!==e)throw TypeError("right-hand side of 'in' should be an object, got "+(null!==e?typeof e:"null"));return e}function k(e,n,t){"symbol"==typeof n&&(n=(n=n.description)?"["+n+"]":"");try{Object.defineProperty(e,"name",{configurable:!0,value:t?t+" "+n:n})}catch(o){}return e}let C,N,E,P,K,$,z,D,O,R,B,W,T,M,U,L,V,F;const G="ve-alert",Y={neutral:b.infoIcon,info:b.infoIcon,success:g.checkCircleIcon,warning:m.warningIcon,error:f.errorIcon},H={fromAttribute:e=>null===e||"false"!==e,toAttribute:e=>e?null:"false"},q={fromAttribute:e=>null!==e&&"false"!==e,toAttribute:e=>e?"":null};C=(0,u.MZ)({type:String,reflect:!0,useDefault:!0}),N=(0,u.MZ)({attribute:"show-icon",reflect:!0,converter:H,useDefault:!0}),E=(0,u.MZ)({attribute:"closable",reflect:!0,converter:q,useDefault:!0}),P=(0,u.wk)(),K=(0,u.P)('slot[name="icon"]'),$=(0,u.wk)();class J extends x.IB{static{({e:[z,D,O,R,B,W,T,M,U,L,V,F]}=function(e,n,t,o,r,a){var s,l,i,c,d,v,h,p=Symbol.metadata||Symbol.for("Symbol.metadata"),u=Object.defineProperty,x=Object.create,b=[x(null),x(null)],g=n.length;function m(n,t,o){return function(r,a){t&&(a=r,r=e);for(var s=0;s<n.length;s++)a=n[s].apply(r,o?[a]:[]);return o?a:r}}function f(e,n,t,o){if("function"!=typeof e&&(o||void 0!==e))throw new TypeError(n+" must "+(t||"be")+" a function"+(o?"":" or undefined"));return e}function y(e,n,t,o,r,a,i,c,d,v,h){function p(e){if(!h(e))throw new TypeError("Attempted to access private element on non-instance")}var x=[].concat(n[0]),g=n[3],y=!i,j=1===r,_=3===r,S=4===r,w=2===r;function I(n,t,o){return function(r,a){return t&&(a=r,r=e),o&&o(r),desc[n].call(r,a)}}var A={},C=[],N=_?"get":S||j?"set":"value";if(!y&&(d?(v||j?A={get:k(function(){return g(this)},o,"get"),set:function(e){n[4](this,e)}}:A[N]=g,v||k(A[N],o,w?"":N)):v||(A=Object.getOwnPropertyDescriptor(e,o)),!v&&!d)){if((l=b[+c][o])&&7!==(l^r))throw new Error("Decorating two elements with the same name ("+A[N].name+") is not supported yet");b[+c][o]=r<3?1:r}for(var E=e,P=x.length-1;P>=0;P-=t?2:1){var K=f(x[P],"A decorator","be",!0),$=t?x[P-1]:void 0,z={},D={kind:["field","accessor","method","getter","setter","class"][r],name:o,metadata:s,addInitializer:function(e,n){if(e.v)throw new TypeError("attempted to call addInitializer after decoration was finished");f(n,"An initializer","be",!0),a.push(n)}.bind(null,z)};if(y)l=K.call($,E,D),z.v=1,f(l,"class decorators","return")&&(E=l);else if(D.static=c,D.private=d,l=D.access={has:d?h.bind():function(e){return o in e}},S||(l.get=d?w?function(e){return p(e),A.value}:I("get",0,p):function(e){return e[o]}),w||_||(l.set=d?I("set",0,p):function(e,n){e[o]=n}),E=K.call($,j?{get:A.get,set:A.set}:A[N],D),z.v=1,j){if("object"==typeof E&&E)(l=f(E.get,"accessor.get"))&&(A.get=l),(l=f(E.set,"accessor.set"))&&(A.set=l),(l=f(E.init,"accessor.init"))&&C.unshift(l);else if(void 0!==E)throw new TypeError("accessor decorators must return an object with get, set, or init properties or undefined")}else f(E,(v?"field":"method")+" decorators","return")&&(v?C.unshift(E):A[N]=E)}return r<2&&i.push(m(C,c,1),m(a,c,0)),v||y||(d?j?i.splice(-1,0,I("get",c),I("set",c)):i.push(w?A[N]:f.call.bind(A[N])):u(e,o,A)),E}function j(e){return u(e,p,{configurable:!0,enumerable:!0,value:s})}return void 0!==a&&(s=a[p]),s=x(null==s?null:s),d=[],v=function(e){e&&d.push(m(e))},(h=function(n,o){for(var a=0;a<t.length;a++){var s=t[a],l=s[1],v=7&l;if((8&l)==n&&!v==o){var h=s[2],p=!!s[3],u=16&l;y(n?e:e.prototype,s,u,p?"#"+h:I(h),v,v<2?[]:n?c=c||[]:i=i||[],d,!!n,p,o,n&&p?function(n){return A(n)===e}:r)}}})(8,0),h(0,0),h(8,1),h(0,1),v(i),v(c),l=d,g||j(e),{e:l,get c(){var t=[];return g&&[j(e=y(e,[n],o,e.name,5,t)),m(t,1)]}}}(this,[],[[C,1,"type"],[N,1,"showIcon"],[E,1,"closable"],[P,1,"closed"],[K,1,"iconSlot"],[$,1,"hasIconSlot"]]))}static shadowRootOptions=x.YD;static styles=w;static dependencies={[y.v]:y.O};#e=(()=>{const e=z(this,"neutral");return D(this),e})();get type(){return this.#e}set type(e){this.#e=e}#n=(()=>{const e=O(this,!0);return R(this),e})();get showIcon(){return this.#n}set showIcon(e){this.#n=e}#t=(()=>{const e=B(this,!1);return W(this),e})();get closable(){return this.#t}set closable(e){this.#t=e}#o=(()=>{const e=T(this,!1);return M(this),e})();get closed(){return this.#o}set closed(e){this.#o=e}#r=(()=>{const e=U(this,null);return L(this),e})();get iconSlot(){return this.#r}set iconSlot(e){this.#r=e}#a=(()=>{const e=V(this,!1);return F(this),e})();get hasIconSlot(){return this.#a}set hasIconSlot(e){this.#a=e}firstUpdated(){this.syncSlotState()}syncSlotState(){this.hasIconSlot=(0,j.qi)(this.iconSlot)||(0,j.mh)(this,"icon"),this.syncSlottedIconSize()}syncSlottedIconSize(){const e=this.iconSlot?.assignedElements({flatten:!0}).filter(e=>e.localName===y.v);e?.forEach(e=>{""===`${e.getAttribute("size")??""}`.trim()&&""===`${e.size??""}`.trim()&&(e.size="var(--ve-alert-font-size-icon)")})}handleSlotChange(){this.syncSlotState()}handleCloseClick(e){this.dispatchEvent(new CustomEvent("ve-close",{detail:{sourceEvent:e},bubbles:!0,composed:!0,cancelable:!0}))&&(this.closed=!0)}renderDefaultIcon(){const e=Y[this.type]??Y.info;return h.qy`<ve-icon
      .definition=${e}
      size="var(--ve-alert-font-size-icon)"
    ></ve-icon>`}renderIcon(){return this.showIcon?h.qy`
      <div class="ve-alert-icon-wrapper" part="icon" aria-hidden="true">
        <slot name="icon" @slotchange=${this.handleSlotChange}></slot>
        ${this.hasIconSlot?h.s6:this.renderDefaultIcon()}
      </div>
    `:h.s6}renderCloseButton(){return this.closable?h.qy`
      <button
        class="ve-alert-close-button"
        part="close-button"
        type="button"
        aria-label="Close"
        @click=${this.handleCloseClick}
      >
        <ve-icon .definition=${_.u} size="var(--ve-alert-close-icon-size)"></ve-icon>
      </button>
    `:h.s6}render(){if(this.closed)return h.s6;const e=(0,p.H)({"ve-alert":!0,[`ve-alert-${this.type}`]:!0,"ve-alert-closable":this.closable});return h.qy`
      <div class=${e} part="alert" role="alert">
        <div class="ve-alert-main">
          ${this.renderIcon()}
          <div class="ve-alert-content" part="content">
            <slot></slot>
          </div>
        </div>
        ${this.renderCloseButton()}
      </div>
    `}}(0,x.Xq)(G,J);var X=t(74410);const Z=(0,v.a)({tagName:G,elementClass:J,react:r,events:{onClose:"ve-close"}}),Q=o.forwardRef(({icon:e,children:n,...t},r)=>o.createElement(Z,{...t,ref:r},(0,X.RG)("icon",e),n));Q.displayName="Alert";var ee=t(91574),ne=t(33900),te=t(44996),oe=t(93030),re=t(33905),ae=t(77781),se=t(27367);const le=(0,t(63568).b)(se.chevronRightSmIcon,"IconChevronRightSm");var ie=t(67779),ce=t(86070);const de=e=>(0,ce.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,fill:"none",viewBox:"0 0 32 32",...e,children:[(0,ce.jsx)("path",{fill:"#00ACD7",fillRule:"evenodd",d:"M18.118 14.044c-.377.106-.76.213-1.202.333-.216.061-.265.075-.466-.17-.241-.288-.418-.474-.756-.643-1.013-.526-1.994-.373-2.911.254-1.094.745-1.657 1.846-1.64 3.219.015 1.355.9 2.473 2.17 2.66 1.094.152 2.011-.255 2.735-1.119.144-.186.273-.39.434-.626h-3.104c-.338 0-.418-.22-.306-.509.21-.525.596-1.406.82-1.846.049-.102.162-.271.403-.271h5.175c.233-.776.61-1.51 1.113-2.203 1.174-1.627 2.59-2.474 4.503-2.83 1.64-.305 3.185-.135 4.584.864 1.27.915 2.058 2.152 2.268 3.778.273 2.287-.354 4.151-1.85 5.744-1.061 1.135-2.364 1.846-3.86 2.168-.285.056-.57.082-.851.108q-.22.02-.435.045c-1.464-.034-2.799-.475-3.925-1.491a5.36 5.36 0 0 1-1.608-2.639q-.282.601-.675 1.148c-1.158 1.61-2.67 2.61-4.584 2.88-1.576.22-3.04-.101-4.326-1.117-1.19-.95-1.866-2.203-2.043-3.762-.209-1.846.306-3.507 1.367-4.964 1.142-1.575 2.654-2.575 4.503-2.93 1.512-.289 2.96-.102 4.262.83.853.592 1.464 1.406 1.866 2.388.096.153.032.238-.16.288-.564.151-1.029.281-1.501.413m10.64 1.93.011.181c-.08 1.457-.772 2.541-2.042 3.236-.853.458-1.737.508-2.622.102-1.158-.542-1.769-1.88-1.48-3.202.355-1.593 1.32-2.592 2.815-2.948 1.528-.373 2.992.576 3.281 2.253.023.12.03.24.037.378",clipRule:"evenodd"}),(0,ce.jsx)("path",{fill:"#00ACD7",d:"M2.445 13.852c-.033.05-.016.084.048.084l4.79.017c.048 0 .128-.05.16-.101l.274-.44c.032-.052.016-.102-.048-.102h-4.71c-.064 0-.144.034-.177.084zM.016 15.41c-.032.051-.016.085.048.085l6.575-.017c.065 0 .129-.034.145-.102l.129-.406c.016-.051-.016-.102-.08-.102H.53c-.065 0-.145.034-.177.085zM3.908 16.952c-.032.05-.016.102.048.102l2.474.017c.048 0 .113-.051.113-.119l.032-.407c0-.067-.032-.118-.097-.118H4.294c-.064 0-.129.05-.16.102z"})]}),ve=e=>(0,ce.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,fill:"none",viewBox:"0 0 32 32",...e,children:[(0,ce.jsx)("path",{fill:"#E76F00",d:"M16.05 8.44C22.636 3.327 19.255 0 19.255 0c.503 5.287-5.443 6.536-7.037 10.17-1.088 2.479.744 4.65 3.828 7.385-.273-.606-.693-1.194-1.119-1.79-1.452-2.034-2.964-4.152 1.121-7.324"}),(0,ce.jsx)("path",{fill:"#E76F00",d:"M17.101 18.677s1.982-1.6.412-3.376c-5.32-6.03 5.82-8.765 5.82-8.765-6.802 3.277-5.786 5.221-4.077 7.584 1.83 2.534-2.155 4.557-2.155 4.557"}),(0,ce.jsx)("path",{fill:"#5382A1",d:"M22.937 23.446c6.105-3.12 3.282-6.118 1.312-5.714-.483.099-.698.184-.698.184s.18-.276.522-.396c3.898-1.347 6.895 3.975-1.259 6.083 0 0 .095-.083.123-.157M10.233 19.497c-3.82-.502 2.095-1.883 2.095-1.883s-2.297-.152-5.122 1.19c-3.34 1.59 8.262 2.312 14.268.759.624-.42 1.487-.783 1.487-.783s-2.457.431-4.905.634c-2.995.247-6.21.295-7.823.083M11.686 22.476c-2.13-.217-.735-1.232-.735-1.232-5.512 1.799 3.067 3.839 10.769 1.624-.819-.284-1.34-.803-1.34-.803-3.764.713-5.939.69-8.694.41M12.615 25.7c-2.129-.241-.886-.953-.886-.953-5.003 1.375 3.044 4.215 9.414 1.53-1.043-.398-1.79-.859-1.79-.859-2.842.529-4.16.57-6.739.281"}),(0,ce.jsx)("path",{fill:"#5382A1",d:"M25.939 27.339s.92.745-1.014 1.322c-3.677 1.096-15.304 1.426-18.534.044-1.161-.497 1.016-1.186 1.701-1.33.714-.153 1.123-.125 1.123-.125-1.292-.894-8.347 1.757-3.584 2.516 12.988 2.071 23.677-.933 20.308-2.427"}),(0,ce.jsx)("path",{fill:"#5382A1",d:"M28 28.968c-.213 2.727-9.212 3.3-15.073 2.931-3.823-.24-4.589-.843-4.6-.852 3.659.593 9.828.701 14.83-.224C27.59 30.002 28 28.968 28 28.968"})]}),he=e=>(0,ce.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,fill:"none",viewBox:"0 0 32 32",...e,children:[(0,ce.jsx)("path",{fill:"url(#python_svg__a)",fillRule:"evenodd",d:"M13.016 2C10.82 2 9.038 3.725 9.038 5.852v2.667h6.886v.74H5.978C3.781 9.26 2 10.984 2 13.111v5.778c0 2.127 1.781 3.852 3.978 3.852h2.295v-3.26c0-2.127 1.781-3.851 3.978-3.851h7.345c1.859 0 3.366-1.46 3.366-3.26V5.852C22.962 3.725 21.18 2 18.984 2zm-.918 4.74c.76 0 1.377-.596 1.377-1.333 0-.736-.616-1.333-1.377-1.333-.76 0-1.377.597-1.377 1.333 0 .737.617 1.334 1.377 1.334",clipRule:"evenodd"}),(0,ce.jsx)("path",{fill:"url(#python_svg__b)",fillRule:"evenodd",d:"M18.984 30c2.197 0 3.978-1.724 3.978-3.852v-2.666h-6.885v-.741h9.945c2.197 0 3.978-1.725 3.978-3.852V13.11c0-2.127-1.781-3.852-3.978-3.852h-2.295v3.26c0 2.127-1.781 3.851-3.978 3.851h-7.345c-1.859 0-3.366 1.46-3.366 3.26v6.518c0 2.128 1.781 3.852 3.978 3.852zm.918-4.74c-.76 0-1.377.596-1.377 1.333 0 .736.616 1.333 1.377 1.333.76 0 1.377-.597 1.377-1.333 0-.737-.617-1.334-1.377-1.334",clipRule:"evenodd"}),(0,ce.jsxs)("defs",{children:[(0,ce.jsxs)("linearGradient",{id:"python_svg__a",x1:12.481,x2:12.481,y1:2,y2:22.741,gradientUnits:"userSpaceOnUse",children:[(0,ce.jsx)("stop",{stopColor:"#327EBD"}),(0,ce.jsx)("stop",{offset:1,stopColor:"#1565A7"})]}),(0,ce.jsxs)("linearGradient",{id:"python_svg__b",x1:19.519,x2:19.519,y1:9.259,y2:30,gradientUnits:"userSpaceOnUse",children:[(0,ce.jsx)("stop",{stopColor:"#FFDA4B"}),(0,ce.jsx)("stop",{offset:1,stopColor:"#F9C600"})]})]})]});var pe=t(5919);const ue="page-sb97JX",xe="pageHeader-tx1VTx",be="accessTabs-GzWqbX",ge="pageBody-cY4bHc",me="sectionIntro-VxOWty",fe="nativeControls-gflM5J",ye="segmentedControl-nfpLop",je="segmentedOptionActive-TgEf1W",_e="segmentedOptionContent-ypR9Ca",Se="segmentedOptionIcon-nQW3nd",we="configurationPanel-WHAzj4",Ie="configurationTitle-AVypo3",Ae="configurationGrid-uRD9Zg",ke="configurationItem-ZIA7d2",Ce="copyValue-UIIpIw",Ne="inlineCopyButton-WGNDHx",Ee="keySelect-R4ZhXZ",Pe="emptyKey-krauEo",Ke="configurationActions-FjeqYL",$e="authenticationActions-jJFRHP",ze="primaryButton-QeIZ4I",De="steps-_SgSvX",Oe="stepCard-MdLebc",Re="stepHeader-jW3uh7",Be="stepNumber-YObBtR",We="stepHeading-RJ9kpc",Te="stepControls-rsyf3C",Me="stepAction-c7ZEjb",Ue="codeBlock-RAw9Xu",Le="codeToolbar-B8zeAj",Ve="iconButton-oxBJz7",Fe="codeContent-e34h3M",Ge="codeLine-Hg7JBW",Ye="codeLineNumber-cVW3iM",He="codeSource-__rP5s",qe="codeComment-zBqxVk",Je="codeString-MkMPTE",Xe="codeKeyword-xsIy7h",Ze="codeCall-F4RdPg",Qe="authenticationAlert-thNFF2",en="authenticationAlertContent-FRJOjp",nn="authenticationCopy-sVQt0A",tn="sdkWarning-EmYTrj",on="sdkWarningContent-GTxaae",rn="modalFooter-oPGhp0",an="keyForm-jJs7dn",sn="keyFormField-UsuGJG",ln="createdKeyResult-HKGG6B",cn="successIcon-BtvS6W",dn="secretValue-wZFr_e",vn="manageKeys-LdNolS",hn="manageKeysHeader-k88Byc",pn="keyNameCell-Qmny9W",un="keyWorkspaceCell-HCi8SQ",xn="dangerAction-mevUAf",bn="keyTable-k8O2Z5",gn="keyTableEmpty-oV6CHN",mn="keyTablePagination-y4OAV5",fn="https://api.cloudsandbox-e2b.cn-beijing.volcapi.com",yn="https://www.volcengine.com/docs/",jn=[{id:"key-agent-production",name:"agent-production",secret:"e2b_7pN3mK8qR4vX82d5",workspaceId:"default",scope:"\u6c99\u7bb1\u8bfb\u5199",createdAt:"2026/10/28 11:24",expiresAt:"2027/01/26 11:24",lastUsedAt:"2026/11/01 16:24"},{id:"key-ci-release",name:"ci-release",secret:"e2b_9zL2dF5hQ8sP42b1",workspaceId:"production",scope:"\u6c99\u7bb1\u7ba1\u7406",createdAt:"2026/10/12 09:40",expiresAt:"\u957f\u671f\u6709\u6548",lastUsedAt:"2026/10/31 20:08"}],_n=e=>`${e.slice(0,4)}${"*".repeat(12)}${e.slice(-4)}`,Sn=async(e,n="\u5df2\u590d\u5236")=>{try{await navigator.clipboard.writeText(e),s.A.success(n)}catch{s.A.error("\u590d\u5236\u5931\u8d25\uff0c\u8bf7\u9009\u4e2d\u5185\u5bb9\u624b\u52a8\u590d\u5236")}},wn=new Set(["async","await","const","def","delete","export","from","func","go","if","import","new","package","print","return","var"]),In=/("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`|#.*$|\/\/.*$|\b[A-Za-z_][A-Za-z0-9_]*\b)/g,An=e=>{const n=[];let t=0;return e.replace(In,(o,r)=>{r>t&&n.push(e.slice(t,r));const a=o.startsWith("#")||o.startsWith("//")?qe:o.startsWith('"')||o.startsWith("'")||o.startsWith("`")?Je:wn.has(o)?Xe:"("===e[r+o.length]?Ze:void 0;return n.push(a?(0,ce.jsx)("span",{className:a,children:o},`${r}-${o}`):o),t=r+o.length,o}),t<e.length&&n.push(e.slice(t)),n.length?n:"\u200b"};function kn({code:e,title:n}){const t=e.split("\n");return(0,ce.jsxs)("div",{className:Ue,children:[(0,ce.jsxs)("div",{className:Le,children:[(0,ce.jsx)("span",{children:n}),(0,ce.jsx)(i.$,{className:Ve,type:"text",icon:(0,ce.jsx)(re.b,{size:16}),"aria-label":`\u590d\u5236${n}`,onClick:()=>{Sn(e,"\u4ee3\u7801\u5df2\u590d\u5236")}})]}),(0,ce.jsx)("pre",{className:Fe,tabIndex:0,"aria-label":n,children:(0,ce.jsx)("code",{children:t.map((e,n)=>(0,ce.jsxs)("span",{className:Ge,children:[(0,ce.jsx)("span",{className:Ye,"aria-hidden":!0,children:n+1}),(0,ce.jsx)("span",{className:He,children:An(e)})]},`${n}-${e}`))})})]})}function Cn({number:e,title:n,description:t,code:o,codeTitle:r,language:a,action:s,controls:l}){return(0,ce.jsxs)("section",{className:Oe,children:[(0,ce.jsxs)("header",{className:Re,children:[(0,ce.jsxs)("span",{className:Be,children:["STEP ",e]}),(0,ce.jsxs)("div",{className:We,children:[(0,ce.jsx)("h2",{children:n}),(0,ce.jsx)("p",{children:t}),l&&(0,ce.jsx)("div",{className:Te,children:l})]}),s&&(0,ce.jsx)("div",{className:Me,children:s})]}),(0,ce.jsx)(kn,{code:o,title:r,language:a})]})}function Nn({value:e,options:n,label:t,onChange:o}){return(0,ce.jsx)("div",{className:ye,role:"radiogroup","aria-label":t,children:n.map(n=>(0,ce.jsx)("button",{className:e===n.value?je:void 0,type:"button",role:"radio","aria-checked":e===n.value,onClick:()=>o(n.value),children:(0,ce.jsxs)("span",{className:_e,children:[n.icon,(0,ce.jsx)("span",{children:n.label})]})},n.value))})}function En({workspaces:e,activeWorkspaceId:n}){const t=(0,a.W6)(),r=(0,a.zy)(),v=(0,o.useMemo)(()=>new URLSearchParams(r.search),[r.search]),[h,p]=(0,o.useState)("native"===v.get("mode")?"native":"e2b"),[u,x]=(0,o.useState)("sdk"===v.get("native")?"sdk":"openapi"),[b,g]=(0,o.useState)("javascript"===v.get("lang")?"javascript":"python"),[m,f]=(0,o.useState)("golang"===v.get("lang")||"java"===v.get("lang")?v.get("lang"):"python"),[y,j]=(0,o.useState)(jn),[_,S]=(0,o.useState)(jn[0].id),[w,I]=(0,o.useState)({current:1,pageSize:10}),[A,k]=(0,o.useState)(!1),[C,N]=(0,o.useState)(!1),[E,P]=(0,o.useState)(""),[K,$]=(0,o.useState)(""),[z,D]=(0,o.useState)(n||"default"),[O,R]=(0,o.useState)("\u6c99\u7bb1\u8bfb\u5199"),[B,W]=(0,o.useState)("90 \u5929"),T=e.find(e=>e.id===n)||e.find(e=>e.isDefault)||e[0],M=T?.id||"default",U=T?.name||"\u9ed8\u8ba4\u7a7a\u95f4",L=(0,o.useMemo)(()=>new Map(e.map(e=>[e.id,e])),[e]),V=y.find(e=>e.id===_)||y[0],F=(0,o.useMemo)(()=>{const e=(w.current-1)*w.pageSize;return y.slice(e,e+w.pageSize)},[y,w]);(0,o.useEffect)(()=>{const e=Math.max(1,Math.ceil(y.length/w.pageSize));w.current>e&&I(n=>({...n,current:e}))},[y.length,w]);const G=e=>{const n=new URLSearchParams(r.search);Object.entries(e).forEach(([e,t])=>{t?n.set(e,t):n.delete(e)}),t.replace({pathname:r.pathname,search:n.toString()})},Y=()=>{k(!1),P(""),$(""),D(M),R("\u6c99\u7bb1\u8bfb\u5199"),W("90 \u5929")},H=()=>{D(M),k(!0)},q=[{key:"name",title:"\u540d\u79f0",minWidth:136,render:(e,n)=>(0,ce.jsxs)("div",{className:pn,children:[(0,ce.jsx)("strong",{children:n.name}),(0,ce.jsx)("span",{children:_n(n.secret)})]})},{key:"workspaceId",title:"\u5de5\u4f5c\u7a7a\u95f4",minWidth:160,render:(e,n)=>{const t=L.get(n.workspaceId);return(0,ce.jsxs)("div",{className:un,children:[(0,ce.jsx)("span",{children:t?.name||"\u672a\u77e5\u5de5\u4f5c\u7a7a\u95f4"}),(0,ce.jsx)("small",{children:n.workspaceId})]})}},{key:"scope",title:"\u6743\u9650\u8303\u56f4",minWidth:100,render:(e,n)=>n.scope},{key:"createdAt",title:"\u521b\u5efa\u65f6\u95f4",minWidth:140,render:(e,n)=>n.createdAt},{key:"expiresAt",title:"\u5230\u671f\u65f6\u95f4",minWidth:140,render:(e,n)=>n.expiresAt},{key:"lastUsedAt",title:"\u6700\u540e\u4f7f\u7528\u65f6\u95f4",minWidth:140,render:(e,n)=>n.lastUsedAt},{key:"action",title:"\u64cd\u4f5c",width:72,render:(e,n)=>(0,ce.jsx)("button",{className:xn,type:"button",onClick:()=>(e=>{l.Ay.confirm({title:"\u786e\u5b9a\u5220\u9664 API Key\uff1f",content:`\u5220\u9664 ${e.name} \u540e\uff0c\u4f7f\u7528\u8be5 Key \u7684\u8c03\u7528\u5c06\u7acb\u5373\u5931\u8d25\uff0c\u4e14\u65e0\u6cd5\u6062\u590d\u3002`,okButtonProps:{status:"danger"},onOk:()=>{j(n=>{const t=n.filter(n=>n.id!==e.id);return e.id===_&&S(t[0]?.id||""),t}),s.A.success("API Key \u5df2\u5220\u9664")}})})(n),children:"\u5220\u9664"})}],J=(0,o.useMemo)(()=>"javascript"===b?{install:`npm install @e2b/code-interpreter\nexport E2B_API_URL=${fn}\nexport E2B_API_KEY="<YOUR_E2B_API_KEY>"\nexport CLOUDSANDBOX_WORKSPACE_ID="${M}"`,create:'import { Sandbox } from "@e2b/code-interpreter";\n\nconst sandbox = await Sandbox.create("code-interpreter@v12", {\n  apiKey: process.env.E2B_API_KEY,\n  metadata: { workspace_id: process.env.CLOUDSANDBOX_WORKSPACE_ID },\n});\n\nconst result = await sandbox.commands.run("node --version");\nconsole.log(result.stdout);\n\nconst host = sandbox.getHost(3000);\nconsole.log(host);',lifecycle:"const sandboxId = sandbox.sandboxId;\nconsole.log(sandboxId);\n\nawait sandbox.kill();\n\n// \u6682\u505c\u3001\u6062\u590d\u548c\u5feb\u7167\u7b49\u6269\u5c55\u80fd\u529b\u8bf7\u4f7f\u7528 Cloud Sandbox \u539f\u751f API / SDK"}:{install:`pip install e2b\nexport E2B_API_URL=${fn}\nexport E2B_API_KEY="<YOUR_E2B_API_KEY>"\nexport CLOUDSANDBOX_WORKSPACE_ID="${M}"\n\nfrom e2b import Sandbox`,create:'sandbox = Sandbox.create(\n    template="code-interpreter@v12",\n    api_key=os.environ["E2B_API_KEY"],\n    metadata={"workspace_id": os.environ["CLOUDSANDBOX_WORKSPACE_ID"]},\n)\n\nresult = sandbox.commands.run("python -V && echo hello")\nprint(result.stdout)\n\nhost = sandbox.get_host(3000)\nprint(host)',lifecycle:"sandbox_id = sandbox.sandbox_id\nprint(sandbox_id)\n\nsandbox.kill()\n\n# \u6682\u505c\u3001\u6062\u590d\u548c\u5feb\u7167\u7b49\u6269\u5c55\u80fd\u529b\u8bf7\u4f7f\u7528 Cloud Sandbox \u539f\u751f API / SDK"},[b,M]),X=(0,o.useMemo)(()=>({create:`POST https://open.volcengineapi.com/?Action=CreateSandbox&Version=2024-06-06\nContent-Type: application/json\n\n{\n  "WorkspaceId": "${M}",\n  "TemplateId": "tpl-code-interpreter",\n  "Revision": "v12",\n  "CpuMilli": 2000,\n  "MemoryMiB": 4096\n}`,access:`# \u67e5\u8be2\u5b9e\u4f8b\u5e76\u83b7\u53d6\u8bbf\u95ee\u5730\u5740\nPOST https://open.volcengineapi.com/?Action=DescribeSandbox&Version=2024-06-06\n{ "WorkspaceId": "${M}", "SandboxId": "sbx-7f83b1c2" }\n\n# \u4f7f\u7528\u8fd4\u56de\u7684 PublicAccessAddress \u8bbf\u95ee\u5b9e\u4f8b\ncurl "https://sbx-7f83b1c2.cloudsandbox-cn-beijing.volceapi.com/v1/sandbox" \\\n  -H "x-cloudsandbox-instance-name: agent-sandbox-01"\n\n# \u79c1\u7f51\u573a\u666f\u4f7f\u7528\u8fd4\u56de\u7684 PrivateAccessAddress`,lifecycle:`# \u6682\u505c\u5b9e\u4f8b\nPOST ...?Action=PauseSandbox&Version=2024-06-06\n{ "WorkspaceId": "${M}", "SandboxId": "sbx-7f83b1c2" }\n\n# \u6062\u590d\u5b9e\u4f8b\nPOST ...?Action=ResumeSandbox&Version=2024-06-06\n{ "WorkspaceId": "${M}", "SandboxId": "sbx-7f83b1c2" }\n\n# \u5220\u9664\u5b9e\u4f8b\nPOST ...?Action=DeleteSandbox&Version=2024-06-06\n{ "WorkspaceId": "${M}", "SandboxId": "sbx-7f83b1c2" }`}),[M]),Z=(0,o.useMemo)(()=>"golang"===m?{install:'go get github.com/volcengine/cloudsandbox-go\n\nclient := cloudsandbox.NewClient(\n  cloudsandbox.WithRegion("cn-beijing"),\n  cloudsandbox.WithAccessKey(os.Getenv("VOLCENGINE_ACCESS_KEY")),\n  cloudsandbox.WithSecretKey(os.Getenv("VOLCENGINE_SECRET_KEY")),\n)',access:`detail, err := client.DescribeSandbox(ctx, &cloudsandbox.DescribeSandboxInput{\n  WorkspaceID: "${M}",\n  SandboxID: sandboxID,\n})\nif err != nil { return err }\n\nfmt.Println(detail.PublicAccessAddress)\nfmt.Println(detail.PrivateAccessAddress)`,lifecycle:`client.PauseSandbox(ctx, "${M}", sandboxID)\nclient.ResumeSandbox(ctx, "${M}", sandboxID)\nclient.DeleteSandbox(ctx, "${M}", sandboxID)`}:"java"===m?{install:'implementation("com.volcengine:cloudsandbox-sdk:1.0.0")\n\nCloudSandboxClient client = CloudSandboxClient.builder()\n    .region("cn-beijing")\n    .accessKey(System.getenv("VOLCENGINE_ACCESS_KEY"))\n    .secretKey(System.getenv("VOLCENGINE_SECRET_KEY"))\n    .build();',access:`DescribeSandboxResponse detail = client.describeSandbox(\n    "${M}",\n    sandboxId\n);\n\nSystem.out.println(detail.getPublicAccessAddress());\nSystem.out.println(detail.getPrivateAccessAddress());`,lifecycle:`client.pauseSandbox("${M}", sandboxId);\nclient.resumeSandbox("${M}", sandboxId);\nclient.deleteSandbox("${M}", sandboxId);`}:{install:`pip install volcengine-cloudsandbox\n\nfrom volcengine.cloudsandbox import CloudSandboxClient\nfrom volcengine.cloudsandbox.models import CreateSandboxRequest\n\nclient = CloudSandboxClient(\n    region="cn-beijing",\n    ak=os.environ["VOLCENGINE_ACCESS_KEY"],\n    sk=os.environ["VOLCENGINE_SECRET_KEY"],\n)\n\nrequest = CreateSandboxRequest(\n    workspace_id="${M}",\n    template_id="tpl-code-interpreter",\n    revision="v12",\n)\nsandbox = client.create_sandbox(request)`,access:`detail = client.describe_sandbox(\n    workspace_id="${M}",\n    sandbox_id=sandbox.sandbox_id,\n)\n\nprint(detail.public_access_address)\nprint(detail.private_access_address)\n\nresult = client.execute_command(\n    workspace_id="${M}",\n    sandbox_id=sandbox.sandbox_id,\n    command="python -V",\n)`,lifecycle:`client.pause_sandbox(\n    workspace_id="${M}",\n    sandbox_id=sandbox.sandbox_id,\n)\nclient.resume_sandbox(\n    workspace_id="${M}",\n    sandbox_id=sandbox.sandbox_id,\n)\nclient.delete_sandbox(\n    workspace_id="${M}",\n    sandbox_id=sandbox.sandbox_id,\n)`},[m,M]);return(0,ce.jsxs)("div",{className:ue,children:[(0,ce.jsxs)("header",{className:xe,children:[(0,ce.jsx)("h1",{children:"API \u63a5\u5165"}),(0,ce.jsx)(i.$,{type:"outline",icon:(0,ce.jsx)(ae.F,{size:16}),onClick:()=>window.open(yn,"_blank","noopener,noreferrer"),children:"\u67e5\u770b\u5b8c\u6574\u6307\u5357"})]}),(0,ce.jsxs)(c.t,{className:be,type:"line",size:"default",activeTab:h,onChange:e=>{return n=e.detail.activeTab,p(n),void G({mode:n,native:"native"===n?u:void 0,lang:"e2b"===n?b:"sdk"===u?m:void 0});var n},children:[(0,ce.jsx)(c.m,{itemKey:"e2b",title:"E2B \u517c\u5bb9 SDK"}),(0,ce.jsx)(c.m,{itemKey:"native",title:"\u539f\u751f API \u63a5\u5165"})]}),(0,ce.jsx)("div",{className:ge,children:"e2b"===h?(0,ce.jsxs)(ce.Fragment,{children:[(0,ce.jsxs)("div",{className:me,children:[(0,ce.jsx)("p",{children:"\u4f7f\u7528 E2B \u5b98\u65b9 SDK\uff0c\u901a\u8fc7 Cloud Sandbox \u517c\u5bb9\u7aef\u70b9\u521b\u5efa\u3001\u8bbf\u95ee\u548c\u5173\u95ed\u6c99\u7bb1\u3002"}),(0,ce.jsx)(Nn,{value:b,label:"E2B SDK \u8bed\u8a00",options:[{value:"python",label:"Python",icon:(0,ce.jsx)(he,{className:Se,"aria-hidden":!0})},{value:"javascript",label:"Java",icon:(0,ce.jsx)(ve,{className:Se,"aria-hidden":!0})}],onChange:e=>{g(e),G({mode:"e2b",native:void 0,lang:e})}})]}),(0,ce.jsxs)("section",{className:we,children:[(0,ce.jsx)("div",{className:Ie,children:"\u63a5\u5165\u914d\u7f6e"}),(0,ce.jsxs)("div",{className:Ae,children:[(0,ce.jsxs)("div",{className:ke,children:[(0,ce.jsx)("span",{children:"E2B API URL"}),(0,ce.jsxs)("div",{className:Ce,children:[(0,ce.jsx)("code",{children:fn}),(0,ce.jsx)(i.$,{className:Ne,type:"text",icon:(0,ce.jsx)(re.b,{size:16}),"aria-label":"\u590d\u5236 E2B API URL",onClick:()=>{Sn(fn,"E2B API URL \u5df2\u590d\u5236")}})]})]}),(0,ce.jsxs)("div",{className:ke,children:[(0,ce.jsx)("span",{children:"E2B API Key"}),V?(0,ce.jsxs)(ce.Fragment,{children:[(0,ce.jsx)(d.l6,{className:Ee,value:V.id,onChange:e=>S(String(e.detail.value)),children:y.map(e=>(0,ce.jsxs)(d.eb,{value:e.id,children:[e.name," \xb7 ",_n(e.secret)]},e.id))}),(0,ce.jsxs)("small",{children:[V.scope," \xb7 \u5230\u671f\u65f6\u95f4 ",V.expiresAt]})]}):(0,ce.jsx)("span",{className:Pe,children:"\u6682\u65e0\u53ef\u7528 Key\uff0c\u8bf7\u5148\u521b\u5efa"})]}),(0,ce.jsxs)("div",{className:Ke,children:[(0,ce.jsx)(i.$,{className:ze,type:"primary","aria-label":"\u521b\u5efa API Key",onClick:H,children:"\u521b\u5efa Key"}),(0,ce.jsx)(i.$,{type:"outline",onClick:()=>N(!0),children:"\u7ba1\u7406 Key"}),(0,ce.jsx)(i.$,{className:Ne,type:"outline",icon:(0,ce.jsx)(re.b,{size:16}),"aria-label":"\u590d\u5236\u73af\u5883\u53d8\u91cf",onClick:()=>{Sn(`export E2B_API_URL=${fn}\nexport E2B_API_KEY="<YOUR_E2B_API_KEY>"\nexport CLOUDSANDBOX_WORKSPACE_ID="${M}"`,"\u73af\u5883\u53d8\u91cf\u5df2\u590d\u5236")}})]})]})]}),(0,ce.jsxs)("div",{className:De,children:[(0,ce.jsx)(Cn,{number:1,title:"\u5b89\u88c5\u4e0e\u521d\u59cb\u5316",description:`\u5b89\u88c5 E2B SDK\uff0c\u914d\u7f6e\u517c\u5bb9\u7aef\u70b9\u3001API Key \u4e0e\u5f53\u524d Workspace\uff08${U}\uff09\u3002`,code:J.install,codeTitle:"python"===b?"\u672c\u5730\u7ec8\u7aef \xb7 Shell / Python":"\u672c\u5730\u7ec8\u7aef \xb7 Shell",language:b}),(0,ce.jsx)(Cn,{number:2,title:"\u521b\u5efa\u5e76\u8bbf\u95ee Sandbox",description:"\u9009\u62e9 Template / Revision\uff0c\u5728\u76ee\u6807 Workspace \u4e2d\u521b\u5efa\u5b9e\u4f8b\u5e76\u6267\u884c\u547d\u4ee4\u3002",code:J.create,codeTitle:"python"===b?"sandbox.py \xb7 Python":"sandbox.mjs \xb7 JavaScript",language:b}),(0,ce.jsx)(Cn,{number:3,title:"\u7ba1\u7406\u5b9e\u4f8b\u751f\u547d\u5468\u671f",description:"\u67e5\u8be2\u5b9e\u4f8b\u4fe1\u606f\uff0c\u6309\u9700\u5173\u95ed\u5b9e\u4f8b\uff1b\u6682\u505c\u3001\u6062\u590d\u7b49\u5e73\u53f0\u6269\u5c55\u80fd\u529b\u53ef\u8c03\u7528\u539f\u751f API\u3002",code:J.lifecycle,codeTitle:"python"===b?"lifecycle.py \xb7 Python":"lifecycle.mjs \xb7 JavaScript",language:b})]})]}):(0,ce.jsxs)(ce.Fragment,{children:[(0,ce.jsxs)("div",{className:fe,children:[(0,ce.jsx)("p",{children:"\u4f7f\u7528 AK/SK \u6216 STS \u8c03\u7528 Cloud Sandbox Open API\uff0c\u5e76\u901a\u8fc7 IAM \u7ba1\u7406\u8bbf\u95ee\u6743\u9650\u3002"}),(0,ce.jsx)(Nn,{value:u,label:"\u539f\u751f API \u8c03\u7528\u65b9\u5f0f",options:[{value:"openapi",label:"Open API"},{value:"sdk",label:"\u706b\u5c71\u5f15\u64ce SDK"}],onChange:e=>{x(e),G({mode:"native",native:e,lang:"sdk"===e?m:void 0})}})]}),"openapi"===u?(0,ce.jsxs)(ce.Fragment,{children:[(0,ce.jsx)(Q,{className:Qe,type:"info",children:(0,ce.jsxs)("div",{className:en,children:[(0,ce.jsxs)("div",{className:nn,children:[(0,ce.jsx)("strong",{children:"\u8ba4\u8bc1\u65b9\u5f0f"}),(0,ce.jsx)("span",{children:"AK/SK \xb7 STS \u4e34\u65f6\u51ed\u8bc1 \xb7 IAM \u5b50\u7528\u6237\u6216\u89d2\u8272"})]}),(0,ce.jsxs)("div",{className:$e,children:[(0,ce.jsx)(i.$,{type:"text",size:"small",onClick:()=>window.open("https://console.volcengine.com/iam/identity","_blank","noopener,noreferrer"),children:"\u524d\u5f80\u8bbf\u95ee\u63a7\u5236"}),(0,ce.jsx)(i.$,{type:"text",size:"small",onClick:()=>window.open("https://console.volcengine.com/iam/policy","_blank","noopener,noreferrer"),children:"\u67e5\u770b\u6743\u9650\u7b56\u7565"})]})]})}),(0,ce.jsxs)("div",{className:De,children:[(0,ce.jsx)(Cn,{number:1,title:"\u521b\u5efa Sandbox",description:`\u8bf7\u6c42\u4e2d\u4f7f\u7528 WorkspaceId \u6307\u5b9a\u5de5\u4f5c\u7a7a\u95f4\uff08${U}\uff09\u3002`,code:X.create,codeTitle:"CreateSandbox \xb7 REST API",language:"json",action:(0,ce.jsxs)(i.$,{type:"outline",onClick:()=>window.open("https://api.volcengine.com/api-explorer/","_blank","noopener,noreferrer"),children:["\u524d\u5f80 API Explorer \u8c03\u8bd5",(0,ce.jsx)(le,{size:16})]})}),(0,ce.jsx)(Cn,{number:2,title:"\u8bbf\u95ee Sandbox",description:"\u4f7f\u7528\u5b9e\u4f8b\u8bbf\u95ee\u5730\u5740\u63a5\u5165\u8fd0\u884c\u73af\u5883\uff1b\u652f\u6301\u516c\u7f51\u5730\u5740\u6216\u79c1\u7f51\u5730\u5740\u3002",code:X.access,codeTitle:"DescribeSandbox / \u8bbf\u95ee\u5b9e\u4f8b",language:"shell"}),(0,ce.jsx)(Cn,{number:3,title:"\u7ba1\u7406\u5b9e\u4f8b\u751f\u547d\u5468\u671f",description:"\u6309\u72b6\u6001\u8c03\u7528\u6682\u505c\u3001\u6062\u590d\u6216\u5220\u9664\u63a5\u53e3\uff0c\u8bf7\u6c42\u643a\u5e26 WorkspaceId \u4e0e SandboxId\u3002",code:X.lifecycle,codeTitle:"\u751f\u547d\u5468\u671f API",language:"json"})]})]}):(0,ce.jsxs)(ce.Fragment,{children:[(0,ce.jsx)(Q,{className:tn,type:"warning",children:(0,ce.jsxs)("div",{className:on,children:[(0,ce.jsx)("span",{children:"\u8c03\u7528\u524d\u8bf7\u5b89\u88c5 Cloud Sandbox SDK\uff0c\u5e76\u5347\u7ea7\u5230\u6700\u65b0\u7248\u672c\u3002"}),(0,ce.jsx)(i.$,{type:"text",size:"small",onClick:()=>window.open(yn,"_blank","noopener,noreferrer"),children:"SDK \u6307\u5357"})]})}),(0,ce.jsxs)("div",{className:De,children:[(0,ce.jsx)(Cn,{number:1,title:"\u5b89\u88c5\u4e0e\u521b\u5efa Sandbox",description:`\u521d\u59cb\u5316 cloudsandbox \u5ba2\u6237\u7aef\uff0c\u4f7f\u7528 WorkspaceId\uff08${M}\uff09\u521b\u5efa\u5b9e\u4f8b\u3002`,code:Z.install,codeTitle:"\u521b\u5efa\u5b9e\u4f8b \xb7 "+("python"===m?"Python":"golang"===m?"Golang":"Java"),language:m,controls:(0,ce.jsx)(Nn,{value:m,label:"\u706b\u5c71\u5f15\u64ce SDK \u8bed\u8a00",options:[{value:"python",label:"Python",icon:(0,ce.jsx)(he,{className:Se,"aria-hidden":!0})},{value:"golang",label:"Golang",icon:(0,ce.jsx)(de,{className:Se,"aria-hidden":!0})},{value:"java",label:"Java",icon:(0,ce.jsx)(ve,{className:Se,"aria-hidden":!0})}],onChange:e=>{f(e),G({mode:"native",native:"sdk",lang:e})}})}),(0,ce.jsx)(Cn,{number:2,title:"\u8bbf\u95ee Sandbox",description:"\u67e5\u8be2\u5b9e\u4f8b\u8bbf\u95ee\u5730\u5740\uff0c\u5e76\u8c03\u7528 Cloud Sandbox \u6570\u636e\u9762\u3002",code:Z.access,codeTitle:"\u8bbf\u95ee\u5b9e\u4f8b \xb7 "+("python"===m?"Python":"golang"===m?"Golang":"Java"),language:m}),(0,ce.jsx)(Cn,{number:3,title:"\u7ba1\u7406\u5b9e\u4f8b\u751f\u547d\u5468\u671f",description:"\u540c\u6b65\u6216\u5f02\u6b65\u8c03\u7528\u6682\u505c\u3001\u6062\u590d\u548c\u5220\u9664\u63a5\u53e3\u3002",code:Z.lifecycle,codeTitle:"\u751f\u547d\u5468\u671f \xb7 "+("python"===m?"Python":"golang"===m?"Golang":"Java"),language:m})]})]})]})}),(0,ce.jsx)(ee.a,{visible:A,width:"640px",maskClosable:!1,title:E?"API Key \u521b\u5efa\u6210\u529f":"\u521b\u5efa API Key",onClose:Y,footer:E?(0,ce.jsx)(i.$,{className:ze,type:"primary",onClick:Y,children:"\u5b8c\u6210"}):(0,ce.jsxs)("div",{className:rn,children:[(0,ce.jsx)(i.$,{type:"outline",onClick:Y,children:"\u53d6\u6d88"}),(0,ce.jsx)(i.$,{className:ze,type:"primary",onClick:()=>{const e=K.trim();if(!e)return void s.A.error("\u8bf7\u8f93\u5165 Key \u540d\u79f0");if(!L.has(z))return void s.A.error("\u8bf7\u9009\u62e9\u5de5\u4f5c\u7a7a\u95f4");const n=`e2b_${Math.random().toString(36).slice(2,18).padEnd(16,"x")}`,t={id:`key-${Date.now()}`,name:e,secret:n,workspaceId:z,scope:O,createdAt:"2026/11/01 16:30",expiresAt:"\u957f\u671f\u6709\u6548"===B?"\u957f\u671f\u6709\u6548":"2027/01/30 16:30",lastUsedAt:"-"};j(e=>[t,...e]),I(e=>({...e,current:1})),S(t.id),P(n),s.A.success("API Key \u521b\u5efa\u6210\u529f")},children:"\u521b\u5efa"})]}),children:E?(0,ce.jsxs)("div",{className:ln,children:[(0,ce.jsx)("div",{className:cn,children:(0,ce.jsx)(ie.i,{size:16})}),(0,ce.jsxs)("div",{children:[(0,ce.jsx)("strong",{children:"\u8bf7\u7acb\u5373\u4fdd\u5b58 API Key"}),(0,ce.jsx)("p",{children:"\u660e\u6587\u4ec5\u5728\u521b\u5efa\u6210\u529f\u540e\u5c55\u793a\u4e00\u6b21\uff0c\u5173\u95ed\u7a97\u53e3\u540e\u65e0\u6cd5\u518d\u6b21\u67e5\u770b\u3002"})]}),(0,ce.jsxs)("div",{className:dn,children:[(0,ce.jsx)("code",{children:E}),(0,ce.jsx)(i.$,{type:"outline",icon:(0,ce.jsx)(re.b,{size:16}),onClick:()=>{Sn(E,"API Key \u5df2\u590d\u5236")},children:"\u590d\u5236"})]})]}):(0,ce.jsxs)("div",{className:an,children:[(0,ce.jsxs)("label",{children:[(0,ce.jsx)("span",{children:"\u5de5\u4f5c\u7a7a\u95f4"}),(0,ce.jsx)(d.l6,{value:z,onChange:e=>D(String(e.detail.value)),children:e.map(e=>(0,ce.jsx)(d.eb,{value:e.id,children:e.name},e.id))})]}),(0,ce.jsxs)("label",{children:[(0,ce.jsx)("span",{children:"Key \u540d\u79f0"}),(0,ce.jsx)(ne.p,{value:K,placeholder:"\u4f8b\u5982 agent-production",onInput:e=>$(e.detail.value)})]}),(0,ce.jsxs)("div",{className:sn,children:[(0,ce.jsx)("span",{children:"\u6743\u9650\u8303\u56f4"}),(0,ce.jsxs)(te.z,{value:O,onChange:e=>R(String(e.detail.value)),children:[(0,ce.jsx)(te.s,{value:"\u6c99\u7bb1\u8bfb\u5199",children:"\u6c99\u7bb1\u8bfb\u5199"}),(0,ce.jsx)(te.s,{value:"\u6c99\u7bb1\u7ba1\u7406",children:"\u6c99\u7bb1\u7ba1\u7406"}),(0,ce.jsx)(te.s,{value:"\u53ea\u8bfb\u8bbf\u95ee",children:"\u53ea\u8bfb\u8bbf\u95ee"})]})]}),(0,ce.jsxs)("div",{className:sn,children:[(0,ce.jsx)("span",{children:"\u6709\u6548\u671f"}),(0,ce.jsxs)(te.z,{value:B,onChange:e=>W(String(e.detail.value)),children:[(0,ce.jsx)(te.s,{value:"30 \u5929",children:"30 \u5929"}),(0,ce.jsx)(te.s,{value:"90 \u5929",children:"90 \u5929"}),(0,ce.jsx)(te.s,{value:"\u957f\u671f\u6709\u6548",children:"\u957f\u671f\u6709\u6548"})]})]})]})}),(0,ce.jsx)(ee.a,{visible:C,width:"min(1100px, calc(100vw - 96px))",title:"\u7ba1\u7406 API Key",hideFooter:!0,onClose:()=>N(!1),children:(0,ce.jsxs)("div",{className:vn,children:[(0,ce.jsxs)("div",{className:hn,children:[(0,ce.jsx)("p",{children:"Key \u660e\u6587\u4e0d\u4f1a\u518d\u6b21\u5c55\u793a\u3002\u5220\u9664\u524d\u8bf7\u786e\u8ba4\u5df2\u5b8c\u6210\u8c03\u7528\u65b9\u8fc1\u79fb\u3002"}),(0,ce.jsx)(i.$,{className:ze,type:"primary","aria-label":"\u521b\u5efa API Key",onClick:()=>{N(!1),H()},children:"\u521b\u5efa Key"})]}),(0,ce.jsx)(oe.X,{className:bn,rowKey:"id",bordered:!0,columns:q,data:F,scrollConfig:{x:1040},emptyContent:(0,ce.jsx)("div",{className:gn,children:"\u6682\u65e0 API Key"})}),(0,ce.jsx)("div",{className:mn,children:(0,ce.jsx)(pe.A,{current:w.current,pageSize:w.pageSize,total:y.length,onChange:I})})]})})]})}},26971(e,n,t){t.r(n);var o=t(24913),r=t(86913);const a={name:"check-circle",svg:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m7.95 12 2.7 2.7 5.4-5.4M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0"/></svg>\n'};(0,o.W)(),(0,r.pU)(a),t.d(n,["checkCircleIcon",0,a])},27367(e,n,t){t.r(n);var o=t(24913),r=t(86913);const a={name:"chevron-right-sm",svg:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m10 8 4 4-4 4"/></svg>\n'};(0,o.W)(),(0,r.pU)(a),t.d(n,["chevronRightSmIcon",0,a])},3716(e,n,t){t.r(n);var o=t(24913),r=t(86913);const a={name:"info",svg:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 11v5m0 5a9 9 0 1 1 0-18 9 9 0 0 1 0 18m.05-13v.1h-.1V8z"/></svg>\n'};(0,o.W)(),(0,r.pU)(a),t.d(n,["infoIcon",0,a])}}]);