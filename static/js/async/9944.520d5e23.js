/*! For license information please see 9944.520d5e23.js.LICENSE.txt */
"use strict";(self.webpackChunksandbox_web=self.webpackChunksandbox_web||[]).push([[9944],{99944(t,e,a){a.d(e,{m:()=>lt,t:()=>vt});var n=a(30758),i=a.t(n,2),s=a(45080),r=a(61834),o=a(67286),b=a(30184),v=a(94023),c=a(76112);function l(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var a=t[Symbol.toPrimitive];if(void 0!==a){var n=a.call(t,e||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}function d(t){if(Object(t)!==t)throw TypeError("right-hand side of 'in' should be an object, got "+(null!==t?typeof t:"null"));return t}function u(t,e,a){"symbol"==typeof e&&(e=(e=e.description)?"["+e+"]":"");try{Object.defineProperty(t,"name",{configurable:!0,value:a?a+" "+e:e})}catch(n){}return t}let p,h,f,y,g,m,_,k,x;const w="ve-tab-pane",A="ve-tab-pane-change";p=(0,r.MZ)({type:String,reflect:!0}),h=(0,r.MZ)({type:Boolean,reflect:!0}),f=(0,r.KN)({slot:"tab",flatten:!0});class K extends v.IB{static{({e:[y,g,m,_,k,x]}=function(t,e,a,n,i,s){var r,o,b,v,c,p,h,f=Symbol.metadata||Symbol.for("Symbol.metadata"),y=Object.defineProperty,g=Object.create,m=[g(null),g(null)],_=e.length;function k(e,a,n){return function(i,s){a&&(s=i,i=t);for(var r=0;r<e.length;r++)s=e[r].apply(i,n?[s]:[]);return n?s:i}}function x(t,e,a,n){if("function"!=typeof t&&(n||void 0!==t))throw new TypeError(e+" must "+(a||"be")+" a function"+(n?"":" or undefined"));return t}function w(t,e,a,n,i,s,b,v,c,l,d){function p(t){if(!d(t))throw new TypeError("Attempted to access private element on non-instance")}var h=[].concat(e[0]),f=e[3],g=!b,_=1===i,w=3===i,A=4===i,K=2===i;function T(e,a,n){return function(i,s){return a&&(s=i,i=t),n&&n(i),desc[e].call(i,s)}}var C={},z=[],P=w?"get":A||_?"set":"value";if(!g&&(c?(l||_?C={get:u(function(){return f(this)},n,"get"),set:function(t){e[4](this,t)}}:C[P]=f,l||u(C[P],n,K?"":P)):l||(C=Object.getOwnPropertyDescriptor(t,n)),!l&&!c)){if((o=m[+v][n])&&7!==(o^i))throw new Error("Decorating two elements with the same name ("+C[P].name+") is not supported yet");m[+v][n]=i<3?1:i}for(var E=t,S=h.length-1;S>=0;S-=a?2:1){var $=x(h[S],"A decorator","be",!0),j=a?h[S-1]:void 0,I={},O={kind:["field","accessor","method","getter","setter","class"][i],name:n,metadata:r,addInitializer:function(t,e){if(t.v)throw new TypeError("attempted to call addInitializer after decoration was finished");x(e,"An initializer","be",!0),s.push(e)}.bind(null,I)};if(g)o=$.call(j,E,O),I.v=1,x(o,"class decorators","return")&&(E=o);else if(O.static=v,O.private=c,o=O.access={has:c?d.bind():function(t){return n in t}},A||(o.get=c?K?function(t){return p(t),C.value}:T("get",0,p):function(t){return t[n]}),K||w||(o.set=c?T("set",0,p):function(t,e){t[n]=e}),E=$.call(j,_?{get:C.get,set:C.set}:C[P],O),I.v=1,_){if("object"==typeof E&&E)(o=x(E.get,"accessor.get"))&&(C.get=o),(o=x(E.set,"accessor.set"))&&(C.set=o),(o=x(E.init,"accessor.init"))&&z.unshift(o);else if(void 0!==E)throw new TypeError("accessor decorators must return an object with get, set, or init properties or undefined")}else x(E,(l?"field":"method")+" decorators","return")&&(l?z.unshift(E):C[P]=E)}return i<2&&b.push(k(z,v,1),k(s,v,0)),l||g||(c?_?b.splice(-1,0,T("get",v),T("set",v)):b.push(K?C[P]:x.call.bind(C[P])):y(t,n,C)),E}function A(t){return y(t,f,{configurable:!0,enumerable:!0,value:r})}return void 0!==s&&(r=s[f]),r=g(null==r?null:r),c=[],p=function(t){t&&c.push(k(t))},(h=function(e,n){for(var s=0;s<a.length;s++){var r=a[s],o=r[1],u=7&o;if((8&o)==e&&!u==n){var p=r[2],h=!!r[3],f=16&o;w(e?t:t.prototype,r,f,h?"#"+p:l(p),u,u<2?[]:e?v=v||[]:b=b||[],c,!!e,h,n,e&&h?function(e){return d(e)===t}:i)}}})(8,0),h(0,0),h(8,1),h(0,1),p(b),p(v),o=c,_||A(t),{e:o,get c(){var a=[];return _&&[A(t=w(t,[e],n,t.name,5,a)),k(a,1)]}}}(this,[],[[p,1,"key"],[h,1,"disabled"],[f,1,"tabSlotElements"]]))}static styles=[v.H6,s.AH`
      :host {
        display: block;
      }

      :host([hidden]) {
        display: none;
      }
    `];#t=(()=>{const t=y(this,"");return g(this),t})();get key(){return this.#t}set key(t){this.#t=t}get title(){return this.titleText}set title(t){(0,c.e)(this,this.titleText,t,t=>{this.titleText=t})}#e=(()=>{const t=m(this,!1);return _(this),t})();get disabled(){return this.#e}set disabled(t){this.#e=t}#a=(()=>{const t=k(this);return x(this),t})();get tabSlotElements(){return this.#a}set tabSlotElements(t){this.#a=t}titleText="";tabContentObserver="u"<typeof MutationObserver?void 0:new MutationObserver(()=>{this.dispatchPaneChange()});constructor(){super(),(0,c.m)(this)}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this.isConnected&&this.observeTabSlotContent()})}disconnectedCallback(){this.tabContentObserver?.disconnect(),super.disconnectedCallback()}get panelId(){return`ve-tabs-panel-${this.key}`}get tabId(){return`ve-tabs-tab-${this.key}`}getTabNodes(){return this.tabSlotElements}updated(t){super.updated(t),(t.has("key")||t.has("title")||t.has("disabled"))&&this.dispatchPaneChange()}dispatchPaneChange(){this.dispatchEvent(new CustomEvent(A,{bubbles:!0,composed:!0}))}observeTabSlotContent(){if(this.tabContentObserver){this.tabContentObserver.disconnect();for(const t of this.tabSlotElements)this.tabContentObserver.observe(t,{childList:!0,subtree:!0,characterData:!0,attributes:!0})}}handleTabSlotChange=()=>{this.observeTabSlotContent(),this.dispatchPaneChange()};render(){return s.qy`
      <div hidden aria-hidden="true">
        <slot name="tab" @slotchange=${this.handleTabSlotChange}></slot>
      </div>
      <slot @slotchange=${this.dispatchPaneChange}></slot>
    `}}function T(t){return Boolean(t.key)&&!t.disabled}const C=s.AH`
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
`,z=[v.H6,C,s.AH`
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
  `];function P(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var a=t[Symbol.toPrimitive];if(void 0!==a){var n=a.call(t,e||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}function E(t){if(Object(t)!==t)throw TypeError("right-hand side of 'in' should be an object, got "+(null!==t?typeof t:"null"));return t}function S(t,e,a){"symbol"==typeof e&&(e=(e=e.description)?"["+e+"]":"");try{Object.defineProperty(t,"name",{configurable:!0,value:a?a+" "+e:e})}catch(n){}return t}let $,j,I,O,D,B,N,F,L,M,q,H,Z,R,U,X,G,Q,W,J,V,Y,tt,et,at,nt,it;const st="ve-tabs";$=(0,r.MZ)({type:String,attribute:"active-tab"}),j=(0,r.MZ)({type:String,attribute:"default-active-tab"}),I=(0,r.MZ)({type:String,reflect:!0,useDefault:!0}),O=(0,r.MZ)({type:String,reflect:!0,useDefault:!0}),D=(0,r.MZ)({type:String,attribute:"tab-position",reflect:!0,useDefault:!0}),B=(0,r.KN)({flatten:!0,selector:w}),N=(0,r.wk)(),F=(0,r.wk)(),L=(0,r.wk)();class rt extends v.IB{static{({e:[M,q,H,Z,R,U,X,G,Q,W,J,V,Y,tt,et,at,nt,it]}=function(t,e,a,n,i,s){var r,o,b,v,c,l,d,u=Symbol.metadata||Symbol.for("Symbol.metadata"),p=Object.defineProperty,h=Object.create,f=[h(null),h(null)],y=e.length;function g(e,a,n){return function(i,s){a&&(s=i,i=t);for(var r=0;r<e.length;r++)s=e[r].apply(i,n?[s]:[]);return n?s:i}}function m(t,e,a,n){if("function"!=typeof t&&(n||void 0!==t))throw new TypeError(e+" must "+(a||"be")+" a function"+(n?"":" or undefined"));return t}function _(t,e,a,n,i,s,b,v,c,l,d){function u(t){if(!d(t))throw new TypeError("Attempted to access private element on non-instance")}var h=[].concat(e[0]),y=e[3],_=!b,k=1===i,x=3===i,w=4===i,A=2===i;function K(e,a,n){return function(i,s){return a&&(s=i,i=t),n&&n(i),desc[e].call(i,s)}}var T={},C=[],z=x?"get":w||k?"set":"value";if(!_&&(c?(l||k?T={get:S(function(){return y(this)},n,"get"),set:function(t){e[4](this,t)}}:T[z]=y,l||S(T[z],n,A?"":z)):l||(T=Object.getOwnPropertyDescriptor(t,n)),!l&&!c)){if((o=f[+v][n])&&7!==(o^i))throw new Error("Decorating two elements with the same name ("+T[z].name+") is not supported yet");f[+v][n]=i<3?1:i}for(var P=t,E=h.length-1;E>=0;E-=a?2:1){var $=m(h[E],"A decorator","be",!0),j=a?h[E-1]:void 0,I={},O={kind:["field","accessor","method","getter","setter","class"][i],name:n,metadata:r,addInitializer:function(t,e){if(t.v)throw new TypeError("attempted to call addInitializer after decoration was finished");m(e,"An initializer","be",!0),s.push(e)}.bind(null,I)};if(_)o=$.call(j,P,O),I.v=1,m(o,"class decorators","return")&&(P=o);else if(O.static=v,O.private=c,o=O.access={has:c?d.bind():function(t){return n in t}},w||(o.get=c?A?function(t){return u(t),T.value}:K("get",0,u):function(t){return t[n]}),A||x||(o.set=c?K("set",0,u):function(t,e){t[n]=e}),P=$.call(j,k?{get:T.get,set:T.set}:T[z],O),I.v=1,k){if("object"==typeof P&&P)(o=m(P.get,"accessor.get"))&&(T.get=o),(o=m(P.set,"accessor.set"))&&(T.set=o),(o=m(P.init,"accessor.init"))&&C.unshift(o);else if(void 0!==P)throw new TypeError("accessor decorators must return an object with get, set, or init properties or undefined")}else m(P,(l?"field":"method")+" decorators","return")&&(l?C.unshift(P):T[z]=P)}return i<2&&b.push(g(C,v,1),g(s,v,0)),l||_||(c?k?b.splice(-1,0,K("get",v),K("set",v)):b.push(A?T[z]:m.call.bind(T[z])):p(t,n,T)),P}function k(t){return p(t,u,{configurable:!0,enumerable:!0,value:r})}return void 0!==s&&(r=s[u]),r=h(null==r?null:r),c=[],l=function(t){t&&c.push(g(t))},(d=function(e,n){for(var s=0;s<a.length;s++){var r=a[s],o=r[1],l=7&o;if((8&o)==e&&!l==n){var d=r[2],u=!!r[3],p=16&o;_(e?t:t.prototype,r,p,u?"#"+d:P(d),l,l<2?[]:e?v=v||[]:b=b||[],c,!!e,u,n,e&&u?function(e){return E(e)===t}:i)}}})(8,0),d(0,0),d(8,1),d(0,1),l(b),l(v),o=c,y||k(t),{e:o,get c(){var a=[];return y&&[k(t=_(t,[e],n,t.name,5,a)),g(a,1)]}}}(this,[],[[$,1,"activeTab"],[j,1,"defaultActiveTab"],[I,1,"size"],[O,1,"type"],[D,1,"tabPosition"],[B,1,"paneElements"],[N,1,"innerActiveKey"],[F,1,"focusKey"],[L,1,"resolvedActiveKey"]]))}static styles=z;static dependencies={[w]:K};#n=(()=>{const t=M(this,void 0);return q(this),t})();get activeTab(){return this.#n}set activeTab(t){this.#n=t}#i=(()=>{const t=H(this,"");return Z(this),t})();get defaultActiveTab(){return this.#i}set defaultActiveTab(t){this.#i=t}#s=(()=>{const t=R(this,"default");return U(this),t})();get size(){return this.#s}set size(t){this.#s=t}#r=(()=>{const t=X(this,"line");return G(this),t})();get type(){return this.#r}set type(t){this.#r=t}#o=(()=>{const t=Q(this,"top");return W(this),t})();get tabPosition(){return this.#o}set tabPosition(t){this.#o=t}#b=(()=>{const t=J(this);return V(this),t})();get paneElements(){return this.#b}set paneElements(t){this.#b=t}#v=(()=>{const t=Y(this,"");return tt(this),t})();get innerActiveKey(){return this.#v}set innerActiveKey(t){this.#v=t}#c=(()=>{const t=et(this,"");return at(this),t})();get focusKey(){return this.#c}set focusKey(t){this.#c=t}#l=(()=>{const t=nt(this,"");return it(this),t})();get resolvedActiveKey(){return this.#l}set resolvedActiveKey(t){this.#l=t}paneCache=[];enabledPaneCache=[];get panes(){return this.paneCache}get enabledPanes(){return this.enabledPaneCache}get isControlled(){return"string"==typeof this.activeTab}addEventListener(t,e,a){super.addEventListener(t,e,a)}removeEventListener(t,e,a){super.removeEventListener(t,e,a)}connectedCallback(){super.connectedCallback(),this.innerActiveKey=this.defaultActiveTab,this.addEventListener(A,this.handlePaneChange)}disconnectedCallback(){this.removeEventListener(A,this.handlePaneChange),super.disconnectedCallback()}firstUpdated(){this.syncFromPaneStructure(!1)}updated(t){super.updated(t),(t.has("activeTab")||t.has("defaultActiveTab")||t.has("innerActiveKey")||t.has("resolvedActiveKey"))&&(this.syncActiveState(),this.syncPanePresentation())}handleSlotChange(){this.syncFromPaneStructure()}handlePaneChange=t=>{t.target instanceof K&&this.syncFromPaneStructure()};syncFromPaneStructure(t=!0){this.refreshPaneCache(),this.warnInvalidPanes(),this.syncActiveState(),this.syncPanePresentation(),t&&this.requestUpdate()}refreshPaneCache(){this.paneCache=[...this.paneElements],this.enabledPaneCache=this.paneCache.filter(t=>Boolean(t.key)&&!t.disabled)}warnInvalidPanes(){const t=new Set;for(const e of this.panes)e.key?t.has(e.key)?console.warn(`[${st}] Duplicate pane key "${e.key}" detected. Keys must be unique.`,e):t.add(e.key):console.warn(`[${st}] Each [${e.tagName.toLowerCase()}] requires a non-empty key attribute.`,e)}syncActiveState(){const t=function({panes:t,activeTab:e,defaultActiveTab:a,innerActiveKey:n,focusKey:i}){const s=t.filter(T);if(0===s.length)return{resolvedActiveKey:"",nextInnerActiveKey:"",nextFocusKey:""};const r="string"==typeof e,o=r?e??"":n,b=s.find(t=>t.key===o),v=a?s.find(t=>t.key===a):void 0,c=s[0],l=b?.key??v?.key??c?.key??"";return{resolvedActiveKey:l,nextInnerActiveKey:r?n:l,nextFocusKey:s.some(t=>t.key===i)?i:l}}({panes:this.panes,activeTab:this.activeTab,defaultActiveTab:this.defaultActiveTab,innerActiveKey:this.innerActiveKey,focusKey:this.focusKey});this.resolvedActiveKey!==t.resolvedActiveKey&&(this.resolvedActiveKey=t.resolvedActiveKey),this.innerActiveKey!==t.nextInnerActiveKey&&(this.innerActiveKey=t.nextInnerActiveKey),this.focusKey!==t.nextFocusKey&&(this.focusKey=t.nextFocusKey)}syncPanePresentation(){const t=this.resolvedActiveKey;for(const e of this.panes){const a=e.key===t&&!e.disabled;e.id=e.panelId,e.hidden=!a,e.setAttribute("role","tabpanel"),e.setAttribute("aria-labelledby",e.tabId),e.setAttribute("aria-hidden",a?"false":"true"),e.setAttribute("data-active",a?"true":"false"),e.setAttribute("part","panel")}}setActiveKey(t,e=!1){t&&this.resolvedActiveKey!==t&&(this.isControlled||(this.innerActiveKey=t,this.resolvedActiveKey=t),this.focusKey=t,e&&this.dispatchEvent(new CustomEvent("ve-change",{detail:{activeTab:t},bubbles:!0,composed:!0})))}focusTabByKey(t){this.updateComplete.then(()=>{const e=this.renderRoot.querySelector(`[data-key="${CSS.escape(t)}"]`);e?.focus()})}moveFocus(t,e){const a=this.enabledPanes;if(0===a.length)return;const n=Math.max(0,a.findIndex(e=>e.key===t)),i=a[(n+e+a.length)%a.length];i&&(this.focusKey=i.key,this.focusTabByKey(i.key))}handleTabClick(t){t.disabled||this.setActiveKey(t.key,!0)}handleTabKeydown(t,e){const a="top"===this.tabPosition||"bottom"===this.tabPosition;switch(t.key){case"ArrowRight":a&&(t.preventDefault(),this.moveFocus(e.key,1));break;case"ArrowLeft":a&&(t.preventDefault(),this.moveFocus(e.key,-1));break;case"ArrowDown":a||(t.preventDefault(),this.moveFocus(e.key,1));break;case"ArrowUp":a||(t.preventDefault(),this.moveFocus(e.key,-1));break;case"Home":{t.preventDefault();const e=this.enabledPanes[0];if(!e)return;this.focusKey=e.key,this.focusTabByKey(e.key);break}case"End":{t.preventDefault();const e=this.enabledPanes,a=e[e.length-1];if(!a)return;this.focusKey=a.key,this.focusTabByKey(a.key);break}case"Enter":case" ":t.preventDefault(),this.handleTabClick(e)}}cloneTabNode(t){const e=t.cloneNode(!0);return e instanceof Element&&e.removeAttribute("slot"),e}renderTabLabel(t){const e=t.getTabNodes();return 0===e.length?t.title:(0,b.u)(e,(e,a)=>`${t.key}-${a}`,t=>this.cloneTabNode(t))}renderTabs(){return(0,b.u)(this.panes,t=>t.key,t=>{const e=this.resolvedActiveKey===t.key,a=this.focusKey?this.focusKey===t.key:e;return s.qy`
          <button
            class=${(0,o.H)({"ve-tabs-tab":!0,"ve-tabs-tab-selected":e,"ve-tabs-tab-disabled":t.disabled})}
            part="tab"
            id=${t.tabId}
            type="button"
            role="tab"
            data-key=${t.key}
            aria-selected=${e?"true":"false"}
            aria-controls=${t.panelId}
            aria-disabled=${t.disabled?"true":"false"}
            tabindex=${a&&!t.disabled?"0":"-1"}
            @click=${()=>this.handleTabClick(t)}
            @keydown=${e=>this.handleTabKeydown(e,t)}
          >
            <span class="ve-tabs-tab-content" part="tab-content"
              >${this.renderTabLabel(t)}</span
            >
          </button>
        `})}renderPanels(){return s.qy` <slot @slotchange=${this.handleSlotChange}></slot> `}render(){return s.qy`
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
    `}}(0,v.Xq)(st,rt),(0,v.Xq)(w,K);var ot=a(35780),bt=a(74410);const vt=(0,ot.h)({tagName:st,elementClass:rt,react:i,events:{onChange:"ve-change"},ownEvents:["onChange"]}),ct=(0,ot.h)({tagName:w,elementClass:K,react:i,events:{onPaneChange:"ve-tab-pane-change"},ownEvents:["onPaneChange"]}),lt=n.forwardRef(({itemKey:t,tab:e,children:a,...i},s)=>{const r=(0,bt.R2)(s);return(0,bt.B5)(r,t),n.createElement(ct,{...i,ref:r},(0,bt.RG)("tab",e),a)});lt.displayName="TabPane"},30184(t,e,a){a.d(e,{u:()=>p});var n=a(60496),i=a(43356);const{I:s}=n.ge,r=t=>t,o=()=>document.createComment(""),b=(t,e,a)=>{const n=t._$AA.parentNode,i=void 0===e?t._$AB:e._$AA;if(void 0===a){const e=n.insertBefore(o(),i),r=n.insertBefore(o(),i);a=new s(e,r,t,t.options)}else{const e=a._$AB.nextSibling,s=a._$AM,o=s!==t;if(o){let e;a._$AQ?.(t),a._$AM=t,void 0!==a._$AP&&(e=t._$AU)!==s._$AU&&a._$AP(e)}if(e!==i||o){let t=a._$AA;for(;t!==e;){const e=r(t).nextSibling;r(n).insertBefore(t,i),t=e}}}return a},v=(t,e,a=t)=>(t._$AI(e,a),t),c={},l=(t,e=c)=>t._$AH=e,d=t=>{t._$AR(),t._$AA.remove()},u=(t,e,a)=>{const n=new Map;for(let i=e;i<=a;i++)n.set(t[i],i);return n},p=(0,i.u$)(class extends i.WL{constructor(t){if(super(t),t.type!==i.OA.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,a){let n;void 0===a?a=e:void 0!==e&&(n=e);const i=[],s=[];let r=0;for(const o of t)i[r]=n?n(o,r):r,s[r]=a(o,r),r++;return{values:s,keys:i}}render(t,e,a){return this.dt(t,e,a).values}update(t,[e,a,i]){const s=t._$AH,{values:r,keys:o}=this.dt(e,a,i);if(!Array.isArray(s))return this.ut=o,r;const c=this.ut??=[],p=[];let h,f,y=0,g=s.length-1,m=0,_=r.length-1;for(;y<=g&&m<=_;)if(null===s[y])y++;else if(null===s[g])g--;else if(c[y]===o[m])p[m]=v(s[y],r[m]),y++,m++;else if(c[g]===o[_])p[_]=v(s[g],r[_]),g--,_--;else if(c[y]===o[_])p[_]=v(s[y],r[_]),b(t,p[_+1],s[y]),y++,_--;else if(c[g]===o[m])p[m]=v(s[g],r[m]),b(t,s[y],s[g]),g--,m++;else if(void 0===h&&(h=u(o,m,_),f=u(c,y,g)),h.has(c[y]))if(h.has(c[g])){const e=f.get(o[m]),a=void 0!==e?s[e]:null;if(null===a){const e=b(t,s[y]);v(e,r[m]),p[m]=e}else p[m]=v(a,r[m]),b(t,s[y],a),s[e]=null;m++}else d(s[g]),g--;else d(s[y]),y++;for(;m<=_;){const e=b(t,p[_+1]);v(e,r[m]),p[m++]=e}for(;y<=g;){const t=s[y++];null!==t&&d(t)}return this.ut=o,l(t,p),n.c0}})}}]);