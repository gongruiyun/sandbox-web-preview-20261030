"use strict";(self.webpackChunksandbox_web=self.webpackChunksandbox_web||[]).push([[543,4846,5156,6309,6396,7367,8897,9758],{21776(e,t,r){r.d(t,{l:()=>Vt});var a=r(30758),i=r.t(a,2),n=r(45080),o=r(67286),s=r(67463),l=r(61834),c=r(94023),d=r(17400),p=r(87907),v=r(7624),u=r(36832),h=r(93837),g=r(543),k=r(5156),b=r(27367);const f=n.AH`
  :host {
    --ve-date-picker-font-family: var(--font-sans);
    --ve-date-picker-font-weight: var(--font-weight-normal);
    --ve-date-picker-line-height: var(--line-height-body);
    --ve-date-picker-font-size-small: var(--text-body-sm);
    --ve-date-picker-font-size-default: var(--text-body);
    --ve-date-picker-font-size-large: var(--text-body);
    --ve-date-picker-cell-font-size: var(--text-body-sm);
    --ve-date-picker-height-small: var(--height-small);
    --ve-date-picker-height-default: var(--height-default);
    --ve-date-picker-height-large: var(--height-large);
    --ve-date-picker-padding-inline-small: var(--space-xxs);
    --ve-date-picker-padding-inline-default: var(--space-xxs);
    --ve-date-picker-padding-inline-large: var(--space-xs);
    --ve-date-picker-padding-block: var(--space-xxxs);
    --ve-date-picker-radius: var(--radius-md);
    --ve-date-picker-border-width: var(--stroke-weight-base);
    --ve-date-picker-gap: var(--space-xxxs);
    --ve-date-picker-label-padding-inline: var(--space-xxs);
    --ve-date-picker-label-color: var(--color-text-secondary);
    --ve-date-picker-control-background: var(--color-bg-control);
    --ve-date-picker-control-background-hover: var(--color-bg-base);
    --ve-date-picker-control-background-focus: var(--color-bg-base);
    --ve-date-picker-control-background-disabled: var(--color-bg-control);
    --ve-date-picker-control-text: var(--color-text-primary);
    --ve-date-picker-control-text-disabled: var(--color-text-disable);
    --ve-date-picker-control-placeholder: var(--color-text-disable);
    --ve-date-picker-control-border-default: var(--color-border-default);
    --ve-date-picker-control-border-hover: var(--color-border-interactive);
    --ve-date-picker-control-border-focus: var(
      --color-border-interactive-active
    );
    --ve-date-picker-control-border-disabled: var(--color-border-default);
    --ve-date-picker-focus-shadow-color: rgb(
      from var(--color-border-interactive) r g b / 18%
    );
    --ve-date-picker-shadow-focus: 0 0 0 var(--stroke-weight-bold)
      var(--ve-date-picker-focus-shadow-color);
    --ve-date-picker-status-warning-background: var(
      --color-bg-warning-secondary
    );
    --ve-date-picker-status-warning-background-hover: color-mix(
      in srgb,
      var(--ve-date-picker-status-warning-background)
        var(--state-hover-subtle-ratio),
      var(--state-hover-subtle-mix)
    );
    --ve-date-picker-status-warning-border: var(--color-border-warning);
    --ve-date-picker-status-warning-border-hover: var(--color-text-warning);
    --ve-date-picker-status-warning-border-focus: var(--color-text-warning);
    --ve-date-picker-status-warning-shadow-color: rgb(
      from var(--color-border-warning) r g b / 18%
    );
    --ve-date-picker-status-error-background: var(--color-bg-danger-secondary);
    --ve-date-picker-status-error-background-hover: color-mix(
      in srgb,
      var(--ve-date-picker-status-error-background)
        var(--state-hover-subtle-ratio),
      var(--state-hover-subtle-mix)
    );
    --ve-date-picker-status-error-border: var(--color-border-danger);
    --ve-date-picker-status-error-border-hover: var(--color-text-danger);
    --ve-date-picker-status-error-border-focus: var(--color-text-danger);
    --ve-date-picker-status-error-shadow-color: rgb(
      from var(--color-border-danger) r g b / 18%
    );
    --ve-date-picker-description-color: var(--color-text-tertiary);
    --ve-date-picker-status-warning-description-color: var(
      --color-text-warning
    );
    --ve-date-picker-status-error-description-color: var(--color-text-danger);
    --ve-date-picker-feedback-font-size: var(--text-caption);
    --ve-date-picker-feedback-line-height: var(--line-height-body);
    --ve-date-picker-prefix-color: var(--color-text-secondary);
    --ve-date-picker-arrow-color: var(--color-text-disable);
    --ve-date-picker-arrow-filled-color: var(--color-text-primary);
    --ve-date-picker-clear-color: var(--color-text-tertiary);
    --ve-date-picker-clear-hover-color: var(--color-text-secondary);
    --ve-date-picker-clear-hover-background: var(--color-bg-muted);
    --ve-date-picker-icon-size: 16px;
    --ve-date-picker-clear-size: var(--space-s);
    --ve-date-picker-panel-background: var(--color-bg-overlay);
    --ve-date-picker-panel-border-color: var(--color-border-default);
    --ve-date-picker-panel-shadow: var(--shadow-md);
    --ve-date-picker-panel-radius: var(--radius-lg);
    --ve-date-picker-panel-z-index: 1000;
    --ve-date-picker-popup-gap: var(--space-xxxs);
    --ve-date-picker-panel-gap: 2px;
    --ve-date-picker-panel-padding-block: var(--space-s);
    --ve-date-picker-panel-padding-inline: var(--space-s);
    --ve-date-picker-panel-padding-inline-end-range: calc(
      var(--space-s) + var(--space-xxxs)
    );
    --ve-date-picker-panel-width: 270px;
    --ve-date-picker-panel-range-width: 536px;
    --ve-date-picker-panel-width-with-shortcuts: 388px;
    --ve-date-picker-panel-range-width-with-shortcuts: 646px;
    --ve-date-picker-panel-header-height: 32px;
    --ve-date-picker-navigation-size: var(--height-small);
    --ve-date-picker-panel-divider-color: var(--color-border-default);
    --ve-date-picker-weekday-text: var(--color-text-primary);
    --ve-date-picker-cell-size: 32px;
    --ve-date-picker-cell-radius: var(--radius-sm);
    --ve-date-picker-cell-text: var(--color-text-primary);
    --ve-date-picker-cell-muted-text: var(--color-text-secondary);
    --ve-date-picker-cell-disabled-text: var(--color-text-disable);
    --ve-date-picker-cell-hover-background: var(--color-bg-surface);
    --ve-date-picker-cell-active-background: color-mix(
      in srgb,
      var(--color-bg-overlay) var(--state-pressed-subtle-ratio),
      var(--state-pressed-subtle-mix)
    );
    --ve-date-picker-cell-selected-background: var(--color-bg-primary);
    --ve-date-picker-cell-selected-text: var(--color-text-foreground);
    --ve-date-picker-cell-range-background: var(--color-bg-secondary);
    --ve-date-picker-cell-range-inset: 3px;
    --ve-date-picker-cell-today-dot-offset: 1px;
    --ve-date-picker-cell-today-dot: var(--color-text-primary);
    --ve-date-picker-cell-selected-today-dot: var(--color-text-foreground);
    --ve-date-picker-footer-height: 34px;
    --ve-date-picker-footer-text: var(--color-text-accent);
    --ve-date-picker-footer-hover-background: var(--color-bg-muted);
    --ve-date-picker-shortcut-width: 90px;
    --ve-date-picker-shortcut-text: var(--color-text-secondary);
    --ve-date-picker-shortcut-hover-background: var(--color-bg-muted);
    --ve-date-picker-shortcut-selected-background: var(--color-bg-muted);
    --ve-date-picker-shortcut-selected-text: var(--color-text-primary);
    --ve-date-picker-time-select-background: var(--color-bg-control);
    --ve-date-picker-time-select-border: var(--color-border-default);
    --ve-date-picker-loading-color: var(--color-text-tertiary);
    --ve-date-picker-disabled-opacity: var(--state-disabled-ratio);
    --ve-date-picker-transition-duration: var(--motion-fast);
    --ve-date-picker-transition-timing: var(--ease-standard);

    --ve-date-picker-current-height: var(--ve-date-picker-height-default);
    --ve-date-picker-current-padding-inline: var(
      --ve-date-picker-padding-inline-default
    );
    --ve-date-picker-current-font-size: var(--ve-date-picker-font-size-default);
    --ve-date-picker-current-background: var(
      --ve-date-picker-control-background
    );
    --ve-date-picker-current-background-hover: var(
      --ve-date-picker-control-background-hover
    );
    --ve-date-picker-current-border-color: var(
      --ve-date-picker-control-border-default
    );
    --ve-date-picker-current-border-color-hover: var(
      --ve-date-picker-control-border-hover
    );
    --ve-date-picker-current-focus-ring-color: var(
      --ve-date-picker-control-border-focus
    );
    --ve-date-picker-current-description-color: var(
      --ve-date-picker-description-color
    );
    --ve-date-picker-current-arrow-color: var(--ve-date-picker-arrow-color);
  }

  :host([size='small']) {
    --ve-date-picker-current-height: var(--ve-date-picker-height-small);
    --ve-date-picker-current-padding-inline: var(
      --ve-date-picker-padding-inline-small
    );
    --ve-date-picker-current-font-size: var(--ve-date-picker-font-size-small);
  }

  :host([size='large']) {
    --ve-date-picker-current-height: var(--ve-date-picker-height-large);
    --ve-date-picker-current-padding-inline: var(
      --ve-date-picker-padding-inline-large
    );
    --ve-date-picker-current-font-size: var(--ve-date-picker-font-size-large);
  }

  :host([status='warning']) {
    --ve-date-picker-current-background: var(
      --ve-date-picker-status-warning-background
    );
    --ve-date-picker-current-background-hover: var(
      --ve-date-picker-status-warning-background-hover
    );
    --ve-date-picker-current-border-color: var(
      --ve-date-picker-status-warning-border
    );
    --ve-date-picker-current-border-color-hover: var(
      --ve-date-picker-status-warning-border-hover
    );
    --ve-date-picker-current-focus-ring-color: var(
      --ve-date-picker-status-warning-border-focus
    );
    --ve-date-picker-current-description-color: var(
      --ve-date-picker-status-warning-description-color
    );
    --ve-date-picker-focus-shadow-color: var(
      --ve-date-picker-status-warning-shadow-color
    );
  }

  :host([status='error']) {
    --ve-date-picker-current-background: var(
      --ve-date-picker-status-error-background
    );
    --ve-date-picker-current-background-hover: var(
      --ve-date-picker-status-error-background-hover
    );
    --ve-date-picker-current-border-color: var(
      --ve-date-picker-status-error-border
    );
    --ve-date-picker-current-border-color-hover: var(
      --ve-date-picker-status-error-border-hover
    );
    --ve-date-picker-current-focus-ring-color: var(
      --ve-date-picker-status-error-border-focus
    );
    --ve-date-picker-current-description-color: var(
      --ve-date-picker-status-error-description-color
    );
    --ve-date-picker-focus-shadow-color: var(
      --ve-date-picker-status-error-shadow-color
    );
  }

  @supports not (color: color-mix(in srgb, red, blue)) {
    :host {
      --ve-date-picker-status-warning-background-hover: var(
        --ve-date-picker-status-warning-background
      );
      --ve-date-picker-status-error-background-hover: var(
        --ve-date-picker-status-error-background
      );
      --ve-date-picker-cell-active-background: var(--color-bg-overlay);
    }
  }
`,m=[c.H6,f,n.AH`
    :host {
      position: relative;
      display: inline-flex;
      inline-size: 100%;
      vertical-align: middle;
    }

    :host([hidden]) {
      display: none;
    }

    .ve-date-picker {
      position: relative;
      inline-size: 100%;
    }

    .ve-date-picker-field {
      display: flex;
      align-items: stretch;
      inline-size: 100%;
    }

    .ve-date-picker-control {
      appearance: none;
      display: flex;
      align-items: center;
      gap: var(--ve-date-picker-gap);
      inline-size: 100%;
      block-size: var(--ve-date-picker-current-height);
      min-inline-size: 0;
      box-sizing: border-box;
      padding-inline: var(--ve-date-picker-current-padding-inline);
      padding-block: var(--ve-date-picker-padding-block);
      border: var(--ve-date-picker-border-width) solid
        var(--ve-date-picker-current-border-color);
      border-radius: var(--ve-date-picker-radius);
      background: var(--ve-date-picker-current-background);
      color: var(--ve-date-picker-control-text);
      font-family: var(--ve-date-picker-font-family);
      font-size: var(--ve-date-picker-current-font-size);
      font-weight: var(--ve-date-picker-font-weight);
      line-height: var(--ve-date-picker-line-height);
      cursor: pointer;
      transition:
        border-color var(--ve-date-picker-transition-duration)
          var(--ve-date-picker-transition-timing),
        box-shadow var(--ve-date-picker-transition-duration)
          var(--ve-date-picker-transition-timing),
        background-color var(--ve-date-picker-transition-duration)
          var(--ve-date-picker-transition-timing),
        opacity var(--ve-date-picker-transition-duration)
          var(--ve-date-picker-transition-timing);
      overflow: hidden;
    }

    .ve-date-picker-label {
      display: inline-flex;
      align-items: center;
      flex: none;
      box-sizing: border-box;
      block-size: var(--ve-date-picker-current-height);
      min-inline-size: 0;
      padding-inline: var(--ve-date-picker-label-padding-inline);
      padding-block: var(--ve-date-picker-padding-block);
      border: var(--ve-date-picker-border-width) solid
        var(--ve-date-picker-current-border-color);
      border-start-start-radius: var(--ve-date-picker-radius);
      border-end-start-radius: var(--ve-date-picker-radius);
      border-start-end-radius: 0;
      border-end-end-radius: 0;
      background: var(--ve-date-picker-current-background);
      color: var(--ve-date-picker-label-color);
      font-family: var(--ve-date-picker-font-family);
      font-size: var(--ve-date-picker-current-font-size);
      font-weight: var(--ve-date-picker-font-weight);
      line-height: var(--ve-date-picker-line-height);
      white-space: nowrap;
      cursor: default;
      transition:
        border-color var(--ve-date-picker-transition-duration)
          var(--ve-date-picker-transition-timing),
        background-color var(--ve-date-picker-transition-duration)
          var(--ve-date-picker-transition-timing),
        opacity var(--ve-date-picker-transition-duration)
          var(--ve-date-picker-transition-timing);
    }

    .ve-date-picker-with-label .ve-date-picker-control {
      border-start-start-radius: 0;
      border-end-start-radius: 0;
      margin-inline-start: calc(var(--ve-date-picker-border-width) * -1);
    }

    .ve-date-picker-label-text,
    .ve-date-picker-value {
      min-inline-size: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .ve-date-picker-value {
      flex: 1;
      text-align: start;
    }

    .ve-date-picker-range-value {
      display: inline-flex;
      align-items: center;
      gap: var(--space-xxxs);
      flex: 1;
      min-inline-size: 0;
    }

    .ve-date-picker-range-segment {
      min-inline-size: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      border-radius: var(--radius-sm);
      padding-inline: var(--space-xxxs);
    }

    .ve-date-picker-range-segment-active {
      background: var(--color-bg-muted);
      color: var(--ve-date-picker-control-text);
    }

    .ve-date-picker-range-segment-placeholder {
      color: var(--ve-date-picker-control-placeholder);
    }

    .ve-date-picker-range-separator {
      flex: none;
      color: var(--color-text-secondary);
      white-space: nowrap;
    }

    .ve-date-picker-value-placeholder {
      color: var(--ve-date-picker-control-placeholder);
    }

    .ve-date-picker-prefix,
    .ve-date-picker-arrow,
    .ve-date-picker-loading {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex: none;
    }

    .ve-date-picker-prefix {
      color: var(--ve-date-picker-prefix-color);
    }

    .ve-date-picker-prefix-empty {
      display: none;
    }

    .ve-date-picker-arrow {
      color: var(--ve-date-picker-arrow-color);
      transition: transform var(--ve-date-picker-transition-duration)
        var(--ve-date-picker-transition-timing);
    }

    .ve-date-picker-control-filled .ve-date-picker-arrow {
      color: var(--ve-date-picker-arrow-filled-color);
    }

    .ve-date-picker-loading {
      color: var(--ve-date-picker-loading-color);
    }

    .ve-date-picker-prefix ve-icon,
    .ve-date-picker-arrow ve-icon,
    .ve-date-picker-loading ve-icon,
    .ve-date-picker-clear ve-icon,
    .ve-date-picker-navigation ve-icon {
      --ve-icon-size: var(--ve-date-picker-icon-size);

      display: inline-flex;
      flex: none;
    }

    .ve-date-picker-loading ve-icon {
      animation: ve-date-picker-loading-spin var(--motion-slow) linear infinite;
    }

    .ve-date-picker-actions {
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      inline-size: var(--ve-date-picker-icon-size);
      block-size: var(--ve-date-picker-icon-size);
      margin-inline-start: auto;
      flex: none;
      pointer-events: auto;
    }

    .ve-date-picker-clear,
    .ve-date-picker-navigation {
      appearance: none;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 0;
      border: none;
      background: transparent;
      font: inherit;
      cursor: pointer;
    }

    .ve-date-picker-clear,
    .ve-date-picker-navigation {
      border-radius: var(--radius-sm);
      color: var(--ve-date-picker-clear-color);
    }

    .ve-date-picker-clear {
      position: absolute;
      inset: 0;
      z-index: 1;
      inline-size: var(--ve-date-picker-clear-size);
      block-size: var(--ve-date-picker-clear-size);
      opacity: 0;
      transform: scale(0.88);
      pointer-events: none;
      transition:
        opacity var(--ve-date-picker-transition-duration)
          var(--ve-date-picker-transition-timing),
        transform var(--ve-date-picker-transition-duration)
          var(--ve-date-picker-transition-timing),
        background-color var(--ve-date-picker-transition-duration)
          var(--ve-date-picker-transition-timing);
    }

    .ve-date-picker-navigation {
      inline-size: var(--ve-date-picker-navigation-size);
      block-size: var(--ve-date-picker-navigation-size);
    }

    .ve-date-picker-arrow,
    .ve-date-picker-loading {
      pointer-events: none;
      transition:
        opacity var(--ve-date-picker-transition-duration)
          var(--ve-date-picker-transition-timing),
        transform var(--ve-date-picker-transition-duration)
          var(--ve-date-picker-transition-timing),
        color var(--ve-date-picker-transition-duration)
          var(--ve-date-picker-transition-timing);
    }

    :host([allow-clear]:not([disabled]):not([loading]))
      .ve-date-picker-control:hover
      .ve-date-picker-clear {
      opacity: 1;
      transform: scale(1);
      pointer-events: auto;
    }

    :host([allow-clear]:not([disabled]):not([loading]))
      .ve-date-picker-control:hover
      .ve-date-picker-arrow {
      opacity: 0;
      transform: scale(0.88);
    }

    .ve-date-picker-clear:hover,
    .ve-date-picker-clear:focus-visible,
    .ve-date-picker-navigation:hover,
    .ve-date-picker-navigation:focus-visible {
      background: var(--ve-date-picker-clear-hover-background);
      color: var(--ve-date-picker-clear-hover-color);
    }

    .ve-date-picker-clear:focus-visible,
    .ve-date-picker-navigation:focus-visible {
      outline: none;
    }

    :host(:not([disabled])) .ve-date-picker-control:hover {
      border-color: var(--ve-date-picker-current-border-color-hover);
      background: var(--ve-date-picker-current-background-hover);
    }

    :host(:not([disabled])) .ve-date-picker-control:focus,
    :host([open]) .ve-date-picker-control {
      outline: none;
      background: var(--ve-date-picker-control-background-focus);
      border-color: var(--ve-date-picker-current-focus-ring-color);
      box-shadow: var(--ve-date-picker-shadow-focus);
    }

    :host([open]) .ve-date-picker-label {
      background: var(--ve-date-picker-control-background-focus);
      border-color: var(--ve-date-picker-current-focus-ring-color);
    }

    :host([disabled]) .ve-date-picker-control,
    :host([disabled]) .ve-date-picker-label {
      color: var(--ve-date-picker-control-text-disabled);
      background: var(--ve-date-picker-control-background-disabled);
      border-color: var(--ve-date-picker-control-border-disabled);
      opacity: var(--ve-date-picker-disabled-opacity);
      cursor: not-allowed;
    }

    .ve-date-picker-description {
      min-block-size: calc(
        var(--ve-date-picker-feedback-font-size) *
          var(--ve-date-picker-feedback-line-height)
      );
      margin-block-start: var(--space-xxxs);
      color: var(--ve-date-picker-current-description-color);
      font-family: var(--ve-date-picker-font-family);
      font-size: var(--ve-date-picker-feedback-font-size);
      line-height: var(--ve-date-picker-feedback-line-height);
    }

    .ve-date-picker-panel {
      position: fixed;
      inset: auto;
      inset-block-start: 0;
      inset-inline-start: 0;
      z-index: var(--ve-date-picker-panel-z-index);
      box-sizing: border-box;
      inline-size: var(--ve-date-picker-panel-width);
      margin: 0;
      padding-block: var(--ve-date-picker-panel-padding-block);
      padding-inline: var(--ve-date-picker-panel-padding-inline);
      border: var(--ve-date-picker-border-width) solid
        var(--ve-date-picker-panel-border-color);
      border-radius: var(--ve-date-picker-panel-radius);
      background: var(--ve-date-picker-panel-background);
      box-shadow: var(--ve-date-picker-panel-shadow);
      font-family: var(--ve-date-picker-font-family);
      font-size: var(--ve-date-picker-cell-font-size);
      line-height: var(--ve-date-picker-line-height);
      color: var(--ve-date-picker-cell-text);
    }

    :host([range]) .ve-date-picker-panel {
      inline-size: var(--ve-date-picker-panel-range-width);
      padding-inline-end: var(--ve-date-picker-panel-padding-inline-end-range);
    }

    .ve-date-picker-panel-with-left-shortcuts {
      display: flex;
      gap: var(--space-s);
      inline-size: max-content;
    }

    :host([range]) .ve-date-picker-panel-with-left-shortcuts {
      inline-size: max-content;
    }

    .ve-date-picker-panel-main {
      flex: 1;
      min-inline-size: 0;
    }

    .ve-date-picker-panel-with-left-shortcuts .ve-date-picker-panel-main {
      flex: none;
      inline-size: var(--ve-date-picker-panel-width);
    }

    :host([range])
      .ve-date-picker-panel-with-left-shortcuts
      .ve-date-picker-panel-main {
      inline-size: var(--ve-date-picker-panel-range-width);
    }

    .ve-date-picker-calendar-group {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: var(--space-l);
    }

    .ve-date-picker-calendar {
      min-inline-size: 0;
    }

    .ve-date-picker-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      block-size: var(--ve-date-picker-panel-header-height);
      gap: var(--ve-date-picker-panel-gap);
      margin-block-end: var(--space-xxxs);
    }

    .ve-date-picker-header-label {
      min-inline-size: 0;
      text-align: start;
      color: var(--ve-date-picker-cell-text);
      font-weight: var(--font-weight-medium);
      font-size: var(--text-body);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .ve-date-picker-navigation-group {
      display: flex;
      align-items: center;
      flex-shrink: 0;
      gap: var(--ve-date-picker-panel-gap);
    }

    .ve-date-picker-weekdays,
    .ve-date-picker-grid {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: var(--ve-date-picker-panel-gap);
    }

    .ve-date-picker-weekdays {
      margin-block-end: 2px;
      color: var(--ve-date-picker-weekday-text);
      font-size: var(--text-caption);
    }

    .ve-date-picker-weekday {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      block-size: var(--ve-date-picker-cell-size);
      font-weight: var(--font-weight-normal);
    }

    .ve-date-picker-cell {
      appearance: none;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      position: relative;
      inline-size: 100%;
      block-size: var(--ve-date-picker-cell-size);
      box-sizing: border-box;
      padding: 0;
      border: var(--ve-date-picker-border-width) solid transparent;
      border-radius: var(--ve-date-picker-cell-radius);
      background: transparent;
      color: var(--ve-date-picker-cell-text);
      font: inherit;
      cursor: pointer;
      transition:
        background-color var(--ve-date-picker-transition-duration)
          var(--ve-date-picker-transition-timing),
        border-color var(--ve-date-picker-transition-duration)
          var(--ve-date-picker-transition-timing),
        color var(--ve-date-picker-transition-duration)
          var(--ve-date-picker-transition-timing),
        opacity var(--ve-date-picker-transition-duration)
          var(--ve-date-picker-transition-timing);
    }

    .ve-date-picker-cell-label {
      position: relative;
      z-index: 1;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      inline-size: calc(
        var(--ve-date-picker-cell-size) - var(
            --ve-date-picker-cell-range-inset
          ) *
          2
      );
      block-size: calc(
        var(--ve-date-picker-cell-size) - var(
            --ve-date-picker-cell-range-inset
          ) *
          2
      );
      border-radius: var(--radius-full);
    }

    .ve-date-picker-cell:hover,
    .ve-date-picker-cell:focus {
      outline: none;
    }

    .ve-date-picker-cell:hover .ve-date-picker-cell-label,
    .ve-date-picker-cell:focus .ve-date-picker-cell-label {
      background: var(--ve-date-picker-cell-hover-background);
    }

    .ve-date-picker-cell:active .ve-date-picker-cell-label {
      background: var(--ve-date-picker-cell-active-background);
    }

    .ve-date-picker-cell-outside {
      color: var(--ve-date-picker-cell-muted-text);
    }

    .ve-date-picker-cell-today .ve-date-picker-cell-label::after {
      content: '';
      position: absolute;
      inset-block-end: var(--ve-date-picker-cell-today-dot-offset);
      inset-inline-start: 50%;
      inline-size: 4px;
      block-size: 4px;
      border-radius: var(--radius-full);
      background: var(--ve-date-picker-cell-today-dot);
      transform: translateX(-50%);
    }

    .ve-date-picker-cell-in-range:not(.ve-date-picker-cell-selected) {
      background: var(--ve-date-picker-cell-range-background);
    }

    .ve-date-picker-grid-range {
      column-gap: 0;
      row-gap: var(--space-xxxs);
    }

    .ve-date-picker-grid-range .ve-date-picker-cell {
      border-radius: 0;
    }

    .ve-date-picker-grid-range .ve-date-picker-cell-in-range,
    .ve-date-picker-grid-range .ve-date-picker-cell-range-start,
    .ve-date-picker-grid-range .ve-date-picker-cell-range-end {
      background: var(--ve-date-picker-cell-range-background);
    }

    .ve-date-picker-grid-range .ve-date-picker-cell-range-start {
      border-start-start-radius: var(--radius-full);
      border-end-start-radius: var(--radius-full);
    }

    .ve-date-picker-grid-range .ve-date-picker-cell-range-end {
      border-start-end-radius: var(--radius-full);
      border-end-end-radius: var(--radius-full);
    }

    .ve-date-picker-grid-range
      .ve-date-picker-cell-range-start.ve-date-picker-cell-range-end {
      border-radius: var(--radius-full);
    }

    .ve-date-picker-cell-selected {
      border-radius: var(--radius-full);
      color: var(--ve-date-picker-cell-selected-text);
      font-weight: var(--font-weight-normal);
    }

    .ve-date-picker-cell-selected .ve-date-picker-cell-label {
      background: var(--ve-date-picker-cell-selected-background);
    }

    .ve-date-picker-cell-selected.ve-date-picker-cell-today
      .ve-date-picker-cell-label::after {
      background: var(--ve-date-picker-cell-selected-today-dot);
    }

    .ve-date-picker-cell-selected:hover,
    .ve-date-picker-cell-selected:focus,
    .ve-date-picker-cell-selected:active {
      background: transparent;
      color: var(--ve-date-picker-cell-selected-text);
    }

    .ve-date-picker-cell-selected:hover .ve-date-picker-cell-label,
    .ve-date-picker-cell-selected:focus .ve-date-picker-cell-label,
    .ve-date-picker-cell-selected:active .ve-date-picker-cell-label {
      background: var(--ve-date-picker-cell-selected-background);
    }

    .ve-date-picker-cell-disabled {
      color: var(--ve-date-picker-cell-disabled-text);
      cursor: not-allowed;
    }

    .ve-date-picker-grid-range .ve-date-picker-cell-outside {
      color: transparent;
      pointer-events: none;
    }

    .ve-date-picker-grid-range
      .ve-date-picker-cell-outside
      .ve-date-picker-cell-label::after {
      display: none;
    }

    .ve-date-picker-cell-disabled:hover .ve-date-picker-cell-label,
    .ve-date-picker-cell-disabled:focus .ve-date-picker-cell-label,
    .ve-date-picker-cell-disabled:active .ve-date-picker-cell-label {
      background: transparent;
    }

    .ve-date-picker-shortcuts {
      display: flex;
      gap: var(--space-xxxs);
      padding-block-start: var(--space-xxs);
      margin-block-start: var(--space-xxs);
      border-block-start: var(--ve-date-picker-border-width) solid
        var(--ve-date-picker-panel-divider-color);
    }

    .ve-date-picker-panel-with-left-shortcuts .ve-date-picker-shortcuts {
      flex: none;
      flex-direction: column;
      inline-size: max-content;
      min-inline-size: var(--ve-date-picker-shortcut-width);
      padding-block-start: 0;
      padding-inline-end: var(--space-s);
      margin-block-start: 0;
      border-block-start: none;
      border-inline-end: var(--ve-date-picker-border-width) solid
        var(--ve-date-picker-panel-divider-color);
    }

    .ve-date-picker-shortcut {
      appearance: none;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: none;
      background: transparent;
      font: inherit;
      cursor: pointer;
      min-block-size: 28px;
      padding-inline: 0;
      border-radius: var(--radius-md);
      color: var(--ve-date-picker-shortcut-text);
      font-weight: var(--font-weight-medium);
      min-inline-size: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .ve-date-picker-shortcut {
      font-weight: var(--font-weight-normal);
    }

    .ve-date-picker-shortcut-label {
      inline-size: 100%;
      min-inline-size: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      text-align: center;
    }

    .ve-date-picker-shortcut-selected {
      background: var(--ve-date-picker-shortcut-selected-background);
      color: var(--ve-date-picker-shortcut-selected-text);
      font-weight: var(--font-weight-normal);
    }

    .ve-date-picker-panel-with-left-shortcuts .ve-date-picker-shortcut {
      align-self: stretch;
      box-sizing: border-box;
      inline-size: 100%;
      justify-content: center;
      text-align: center;
      padding-inline: var(--space-xxxs);
    }

    .ve-date-picker-shortcut:hover,
    .ve-date-picker-shortcut:focus {
      outline: none;
      background: var(--ve-date-picker-shortcut-hover-background);
    }

    .ve-date-picker-shortcut-selected:hover,
    .ve-date-picker-shortcut-selected:focus {
      background: var(--ve-date-picker-shortcut-selected-background);
      color: var(--ve-date-picker-shortcut-selected-text);
    }

    @keyframes ve-date-picker-loading-spin {
      to {
        transform: rotate(360deg);
      }
    }
  `];function _(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t||"default");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function w(e){if(Object(e)!==e)throw TypeError("right-hand side of 'in' should be an object, got "+(null!==e?typeof e:"null"));return e}function y(e,t,r){"symbol"==typeof t&&(t=(t=t.description)?"["+t+"]":"");try{Object.defineProperty(e,"name",{configurable:!0,value:r?r+" "+t:t})}catch(a){}return e}let x,z,V,S,D,$,E,P,C,M,R,I,A,U,H,q,Y,j,L,K,O,B,N,Z,F,T,W,G,J,X,Q,ee,te,re,ae,ie,ne,oe,se,le,ce,de,pe,ve,ue,he,ge,ke,be,fe,me,_e,we,ye,xe,ze,Ve,Se,De,$e,Ee,Pe,Ce,Me,Re,Ie,Ae,Ue,He,qe,Ye,je,Le,Ke,Oe,Be,Ne,Ze,Fe,Te,We,Ge,Je,Xe,Qe,et,tt,rt,at,it;const nt="ve-date-picker",ot=["aria-label","aria-labelledby","aria-describedby","aria-required","aria-invalid"],st=["\u65e5","\u4e00","\u4e8c","\u4e09","\u56db","\u4e94","\u516d"],lt={fromAttribute:e=>null===e||"false"!==e,toAttribute:e=>e?null:"false"};function ct(e){if(null!==e)return"false"===e?"false":"true"}function dt(e){return String(e).padStart(2,"0")}function pt(e){return new Date(e.year,e.month-1,e.day)}function vt(){const e=new Date;return{year:e.getFullYear(),month:e.getMonth()+1,day:e.getDate()}}function ut(e,{days:t=0,months:r=0,years:a=0}){const i=pt(e);return i.setFullYear(i.getFullYear()+a),i.setMonth(i.getMonth()+r),i.setDate(i.getDate()+t),{year:i.getFullYear(),month:i.getMonth()+1,day:i.getDate()}}function ht(e){return 1e4*e.year+100*e.month+e.day}function gt(e,t){return void 0!==e&&void 0!==t&&e.year===t.year&&e.month===t.month&&e.day===t.day}function kt(e){const t=e.trim().split(/\s+/)[0]??"";if(!t)return;let r,a,i;const n=/^(\d{4})([-/])(\d{1,2})\2(\d{1,2})$/.exec(t);if(n)r=Number(n[1]),a=Number(n[3]),i=Number(n[4]);else{const e=/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.exec(t);if(!e)return;a=Number(e[1]),i=Number(e[2]),r=Number(e[3])}const o={year:r,month:a,day:i};return function(e){const t=pt(e);return t.getFullYear()===e.year&&t.getMonth()===e.month-1&&t.getDate()===e.day}(o)?o:void 0}function bt(e,t){const r=String(e.year).padStart(4,"0"),a=dt(e.month),i=dt(e.day);return t.replace("YYYY",r).replace("MM",a).replace("DD",i)||`${r}-${a}-${i}`}function ft(e,t,r){const a=new Date(e,t-1+r,1);return{year:a.getFullYear(),month:a.getMonth()+1}}function mt(e){const t=e.trim();if(!t)return;const r=_t(t);if(r)return{parts:r};const a=kt(t);return a?{parts:a}:void 0}function _t(e){const t=e.trim().toLowerCase();if(!t)return;if("today"===t)return vt();if("yesterday"===t)return ut(vt(),{days:-1});if("tomorrow"===t)return ut(vt(),{days:1});const r=/^([+-]?\d+)([dwmy])$/.exec(t);if(!r)return;const a=Number(r[1]),i=r[2];return ut(vt(),"d"===i?{days:a}:"w"===i?{days:7*a}:"m"===i?{months:a}:{years:a})}x=(0,l.MZ)({type:String}),z=(0,l.MZ)({type:String,attribute:"default-value"}),V=(0,l.MZ)({type:String}),S=(0,l.MZ)({type:String}),D=(0,l.MZ)({type:String}),$=(0,l.MZ)({type:String,reflect:!0,useDefault:!0}),E=(0,l.MZ)({type:String,reflect:!0,useDefault:!0}),P=(0,l.MZ)({type:String,reflect:!0,useDefault:!0}),C=(0,l.MZ)({type:Boolean,reflect:!0}),M=(0,l.MZ)({type:Boolean,reflect:!0}),R=(0,l.MZ)({type:Boolean,reflect:!0}),I=(0,l.MZ)({type:Boolean,attribute:"allow-clear",reflect:!0}),A=(0,l.MZ)({type:Boolean,reflect:!0}),U=(0,l.MZ)({type:String}),H=(0,l.MZ)({type:String}),q=(0,l.MZ)({type:String,attribute:"disabled-date"}),Y=(0,l.MZ)({type:String}),j=(0,l.MZ)({type:String,attribute:"shortcut-placement",reflect:!0}),L=(0,l.MZ)({type:String,attribute:"default-picker-value"}),K=(0,l.MZ)({type:String,attribute:"picker-value"}),O=(0,l.MZ)({type:String}),B=(0,l.MZ)({attribute:"popup-match-select-width",converter:lt}),N=(0,l.P)(".ve-date-picker-control"),Z=(0,l.P)(".ve-date-picker-field"),F=(0,l.P)(".ve-date-picker-panel"),T=(0,l.wk)(),W=(0,l.wk)(),G=(0,l.wk)(),J=(0,l.wk)(),X=(0,l.wk)();class wt extends c.IB{static{({e:[Q,ee,te,re,ae,ie,ne,oe,se,le,ce,de,pe,ve,ue,he,ge,ke,be,fe,me,_e,we,ye,xe,ze,Ve,Se,De,$e,Ee,Pe,Ce,Me,Re,Ie,Ae,Ue,He,qe,Ye,je,Le,Ke,Oe,Be,Ne,Ze,Fe,Te,We,Ge,Je,Xe,Qe,et,tt,rt,at,it]}=function(e,t,r,a,i,n){var o,s,l,c,d,p,v,u=Symbol.metadata||Symbol.for("Symbol.metadata"),h=Object.defineProperty,g=Object.create,k=[g(null),g(null)],b=t.length;function f(t,r,a){return function(i,n){r&&(n=i,i=e);for(var o=0;o<t.length;o++)n=t[o].apply(i,a?[n]:[]);return a?n:i}}function m(e,t,r,a){if("function"!=typeof e&&(a||void 0!==e))throw new TypeError(t+" must "+(r||"be")+" a function"+(a?"":" or undefined"));return e}function x(e,t,r,a,i,n,l,c,d,p,v){function u(e){if(!v(e))throw new TypeError("Attempted to access private element on non-instance")}var g=[].concat(t[0]),b=t[3],_=!l,w=1===i,x=3===i,z=4===i,V=2===i;function S(t,r,a){return function(i,n){return r&&(n=i,i=e),a&&a(i),desc[t].call(i,n)}}var D={},$=[],E=x?"get":z||w?"set":"value";if(!_&&(d?(p||w?D={get:y(function(){return b(this)},a,"get"),set:function(e){t[4](this,e)}}:D[E]=b,p||y(D[E],a,V?"":E)):p||(D=Object.getOwnPropertyDescriptor(e,a)),!p&&!d)){if((s=k[+c][a])&&7!==(s^i))throw new Error("Decorating two elements with the same name ("+D[E].name+") is not supported yet");k[+c][a]=i<3?1:i}for(var P=e,C=g.length-1;C>=0;C-=r?2:1){var M=m(g[C],"A decorator","be",!0),R=r?g[C-1]:void 0,I={},A={kind:["field","accessor","method","getter","setter","class"][i],name:a,metadata:o,addInitializer:function(e,t){if(e.v)throw new TypeError("attempted to call addInitializer after decoration was finished");m(t,"An initializer","be",!0),n.push(t)}.bind(null,I)};if(_)s=M.call(R,P,A),I.v=1,m(s,"class decorators","return")&&(P=s);else if(A.static=c,A.private=d,s=A.access={has:d?v.bind():function(e){return a in e}},z||(s.get=d?V?function(e){return u(e),D.value}:S("get",0,u):function(e){return e[a]}),V||x||(s.set=d?S("set",0,u):function(e,t){e[a]=t}),P=M.call(R,w?{get:D.get,set:D.set}:D[E],A),I.v=1,w){if("object"==typeof P&&P)(s=m(P.get,"accessor.get"))&&(D.get=s),(s=m(P.set,"accessor.set"))&&(D.set=s),(s=m(P.init,"accessor.init"))&&$.unshift(s);else if(void 0!==P)throw new TypeError("accessor decorators must return an object with get, set, or init properties or undefined")}else m(P,(p?"field":"method")+" decorators","return")&&(p?$.unshift(P):D[E]=P)}return i<2&&l.push(f($,c,1),f(n,c,0)),p||_||(d?w?l.splice(-1,0,S("get",c),S("set",c)):l.push(V?D[E]:m.call.bind(D[E])):h(e,a,D)),P}function z(e){return h(e,u,{configurable:!0,enumerable:!0,value:o})}return void 0!==n&&(o=n[u]),o=g(null==o?null:o),d=[],p=function(e){e&&d.push(f(e))},(v=function(t,a){for(var n=0;n<r.length;n++){var o=r[n],s=o[1],p=7&s;if((8&s)==t&&!p==a){var v=o[2],u=!!o[3],h=16&s;x(t?e:e.prototype,o,h,u?"#"+v:_(v),p,p<2?[]:t?c=c||[]:l=l||[],d,!!t,u,a,t&&u?function(t){return w(t)===e}:i)}}})(8,0),v(0,0),v(8,1),v(0,1),p(l),p(c),s=d,b||z(e),{e:s,get c(){var r=[];return b&&[z(e=x(e,[t],a,e.name,5,r)),f(r,1)]}}}(this,[],[[x,1,"value"],[z,1,"defaultValue"],[V,1,"placeholder"],[S,1,"label"],[D,1,"description"],[$,1,"format"],[E,1,"size"],[P,1,"status"],[C,1,"disabled"],[M,1,"range"],[R,1,"loading"],[I,1,"allowClear"],[A,1,"open"],[U,1,"min"],[H,1,"max"],[q,1,"disabledDate"],[Y,1,"shortcuts"],[j,1,"shortcutPlacement"],[L,1,"defaultPickerValue"],[K,1,"pickerValue"],[O,1,"separator"],[B,1,"popupMatchSelectWidth"],[N,1,"controlElement"],[Z,1,"fieldElement"],[F,1,"panelElement"],[T,1,"panelPlacement"],[W,1,"hasPrefixSlot"],[G,1,"viewYear"],[J,1,"viewMonth"],[X,1,"activeRangeEnd"]]))}static styles=m;static get observedAttributes(){return[...new Set([...super.observedAttributes,...ot])]}static dependencies={[d.v]:d.O};#e=(()=>{const e=Q(this,"");return ee(this),e})();get value(){return this.#e}set value(e){this.#e=e}#t=(()=>{const e=te(this,"");return re(this),e})();get defaultValue(){return this.#t}set defaultValue(e){this.#t=e}#r=(()=>{const e=ae(this,"\u9009\u62e9\u65e5\u671f");return ie(this),e})();get placeholder(){return this.#r}set placeholder(e){this.#r=e}#a=(()=>{const e=ne(this,"");return oe(this),e})();get label(){return this.#a}set label(e){this.#a=e}#i=(()=>{const e=se(this,"");return le(this),e})();get description(){return this.#i}set description(e){this.#i=e}#n=(()=>{const e=ce(this,"");return de(this),e})();get format(){return this.#n}set format(e){this.#n=e}#o=(()=>{const e=pe(this,"default");return ve(this),e})();get size(){return this.#o}set size(e){this.#o=e}#s=(()=>{const e=ue(this,"default");return he(this),e})();get status(){return this.#s}set status(e){this.#s=e}#l=(()=>{const e=ge(this,!1);return ke(this),e})();get disabled(){return this.#l}set disabled(e){this.#l=e}#c=(()=>{const e=be(this,!1);return fe(this),e})();get range(){return this.#c}set range(e){this.#c=e}#d=(()=>{const e=me(this,!1);return _e(this),e})();get loading(){return this.#d}set loading(e){this.#d=e}#p=(()=>{const e=we(this,!1);return ye(this),e})();get allowClear(){return this.#p}set allowClear(e){this.#p=e}#v=(()=>{const e=xe(this,!1);return ze(this),e})();get open(){return this.#v}set open(e){this.#v=e}#u=(()=>{const e=Ve(this,"");return Se(this),e})();get min(){return this.#u}set min(e){this.#u=e}#h=(()=>{const e=De(this,"");return $e(this),e})();get max(){return this.#h}set max(e){this.#h=e}#g=(()=>{const e=Ee(this,"");return Pe(this),e})();get disabledDate(){return this.#g}set disabledDate(e){this.#g=e}#k=(()=>{const e=Ce(this,"");return Me(this),e})();get shortcuts(){return this.#k}set shortcuts(e){this.#k=e}#b=(()=>{const e=Re(this,"bottom");return Ie(this),e})();get shortcutPlacement(){return this.#b}set shortcutPlacement(e){this.#b=e}#f=(()=>{const e=Ae(this,"");return Ue(this),e})();get defaultPickerValue(){return this.#f}set defaultPickerValue(e){this.#f=e}#m=(()=>{const e=He(this,"");return qe(this),e})();get pickerValue(){return this.#m}set pickerValue(e){this.#m=e}#_=(()=>{const e=Ye(this," - ");return je(this),e})();get separator(){return this.#_}set separator(e){this.#_=e}#w=(()=>{const e=Le(this,!1);return Ke(this),e})();get popupMatchSelectWidth(){return this.#w}set popupMatchSelectWidth(e){this.#w=e}#y=(()=>{const e=Oe(this,null);return Be(this),e})();get controlElement(){return this.#y}set controlElement(e){this.#y=e}#x=(()=>{const e=Ne(this,null);return Ze(this),e})();get fieldElement(){return this.#x}set fieldElement(e){this.#x=e}#z=(()=>{const e=Fe(this,null);return Te(this),e})();get panelElement(){return this.#z}set panelElement(e){this.#z=e}#V=(()=>{const e=We(this,"bottom-start");return Ge(this),e})();get panelPlacement(){return this.#V}set panelPlacement(e){this.#V=e}#S=(()=>{const e=Je(this,!1);return Xe(this),e})();get hasPrefixSlot(){return this.#S}set hasPrefixSlot(e){this.#S=e}#D=(()=>{const e=Qe(this,vt().year);return et(this),e})();get viewYear(){return this.#D}set viewYear(e){this.#D=e}#$=(()=>{const e=tt(this,vt().month);return rt(this),e})();get viewMonth(){return this.#$}set viewMonth(e){this.#$=e}#E=(()=>{const e=at(this,"start");return it(this),e})();get activeRangeEnd(){return this.#E}set activeRangeEnd(e){this.#E=e}hasInitializedDefaultValue=!1;hasInitializedDefaultPickerValue=!1;visibilityReason="api";repositionScheduler=(0,p.ZH)();positionRequestId=0;cleanupAutoUpdate=null;gridId="";descriptionId="";constructor(){super(),this.gridId=`ve-date-picker-grid-${Math.random().toString(36).slice(2)}`,this.descriptionId=`ve-date-picker-description-${Math.random().toString(36).slice(2)}`}addEventListener(e,t,r){super.addEventListener(e,t,r)}removeEventListener(e,t,r){super.removeEventListener(e,t,r)}handleDocumentPointerDown=e=>{this.open&&!e.composedPath().includes(this)&&this.setOpen(!1,"outside")};handleDocumentKeydown=e=>{this.open&&"Escape"===e.key&&(e.stopPropagation(),this.setOpen(!1,"escape"),this.focus())};get normalizedFormat(){return(this.format??"").trim()||"YYYY-MM-DD"}get normalizedValue(){return this.value??""}get normalizedPickerValue(){return this.pickerValue??""}get parsedValue(){return mt(this.primaryValue)}get parsedRangeValue(){const[e="",t=""]=this.rangeValues;return[mt(e),mt(t)]}get rangeStartValue(){return this.rangeValues[0]??""}get rangeEndValue(){return this.rangeValues[1]??""}get primaryValue(){return this.range?this.rangeValues[0]??"":this.normalizedValue}get rangeValues(){return this.normalizedValue.split(",").map(e=>e.trim()).filter(e=>e.length>0).slice(0,2)}get displayValue(){if(this.range)return this.rangeStartValue||this.rangeEndValue?`${this.rangeStartValue}${this.separator}${this.rangeEndValue}`:"";const e=this.parsedValue;return e?bt(e.parts,this.normalizedFormat):""}get hasDisplayValue(){return this.range?Boolean(this.formattedRangeStartValue||this.formattedRangeEndValue):Boolean(this.displayValue)}get formattedRangeStartValue(){const e=this.parsedRangeValue[0];return e?bt(e.parts,this.normalizedFormat):""}get formattedRangeEndValue(){const e=this.parsedRangeValue[1];return e?bt(e.parts,this.normalizedFormat):""}get minDateKey(){const e=kt(this.min);return e?ht(e):void 0}get maxDateKey(){const e=kt(this.max);return e?ht(e):void 0}get parsedShortcuts(){const e=(this.shortcuts??"").trim();if(!e)return[];try{const t=JSON.parse(e);if(Array.isArray(t))return t.map(e=>{if("object"!=typeof e||null===e)return;const t=e,r=t.label??t.text,a=t.value,i=t.endValue??t.end;return"string"==typeof r&&"string"==typeof a?this.createResolvedShortcut("string"==typeof r?r:"",a,"string"==typeof i?i:void 0):void 0}).filter(e=>void 0!==e)}catch{}return e.split(";").map(e=>{const[t="",r=""]=e.split(":"),[a="",i=""]=r.split(",");return this.createResolvedShortcut(t.trim(),a.trim(),i.trim()||void 0)}).filter(e=>void 0!==e)}get shouldShowClear(){return this.allowClear&&!this.disabled&&!this.loading&&""!==this.value}get hasLeadingLabel(){return(this.label??"").trim().length>0}get hasDescriptionFeedback(){return(this.description??"").trim().length>0}createResolvedShortcut(e,t,r){const a=this.normalizeShortcutValue(t);if(!e||!a)return;const i=r?this.normalizeShortcutValue(r):"";return i?r?{label:e,value:t,endValue:r,resolvedValue:a,resolvedEndValue:i}:{label:e,value:t,resolvedValue:a,resolvedEndValue:i}:{label:e,value:t,resolvedValue:a}}normalizeShortcutValue(e){const t=_t(e);return t?bt(t,this.normalizedFormat):this.normalizeSingleValue(e)}isShortcutSelected(e){return this.range?this.rangeValues[0]===e.resolvedValue&&(this.rangeValues[1]??"")===(e.resolvedEndValue??""):this.value===e.resolvedValue}get controlAriaLabel(){return this.getAttribute("aria-label")??void 0}get controlAriaLabelledby(){return this.getAttribute("aria-labelledby")??void 0}get controlAriaDescribedby(){const e=[this.getAttribute("aria-describedby"),this.hasDescriptionFeedback?this.descriptionId:void 0].filter(e=>"string"==typeof e&&e.length>0);return e.length>0?e.join(" "):void 0}get controlAriaRequired(){return ct(this.getAttribute("aria-required"))}get controlAriaInvalid(){return ct(this.getAttribute("aria-invalid"))??("error"===this.status?"true":void 0)}focus(e){this.controlElement?.focus(e)}blur(){this.controlElement?.blur()}show(){this.setOpen(!0,"api")}hide(){this.setOpen(!1,"api")}firstUpdated(e){super.firstUpdated(e),this.applyDefaultValueIfNeeded(),this.applyDefaultPickerValueIfNeeded(),this.syncViewToSelectedDate(),this.open&&this.installGlobalListeners()}willUpdate(e){if(super.willUpdate(e),e.has("value")||e.has("format")||e.has("range")){const e=this.normalizeValue(this.normalizedValue);this.value!==e&&(this.value=e)}if(e.has("shortcutPlacement")){const e="left"===this.shortcutPlacement?"left":"bottom";this.shortcutPlacement!==e&&(this.shortcutPlacement=e)}e.has("pickerValue")&&this.syncViewToPickerValue()}updated(e){super.updated(e),e.has("disabled")&&this.disabled&&this.open?this.setOpen(!1,"api"):(e.has("open")&&this.handleOpenChanged(),e.has("value")&&this.parsedValue&&this.syncViewToSelectedDate(),this.open&&this.scheduleUpdatePosition())}attributeChangedCallback(e,t,r){super.attributeChangedCallback(e,t,r),t!==r&&ot.includes(e)&&this.requestUpdate()}disconnectedCallback(){this.removeGlobalListeners(),this.repositionScheduler.cancel(),this.positionRequestId+=1,this.teardownAutoUpdate(),super.disconnectedCallback()}applyDefaultValueIfNeeded(){this.hasInitializedDefaultValue||(this.hasInitializedDefaultValue=!0,!this.value&&this.defaultValue&&(this.value=this.normalizeValue(this.defaultValue)))}applyDefaultPickerValueIfNeeded(){this.hasInitializedDefaultPickerValue||(this.hasInitializedDefaultPickerValue=!0,this.syncViewToPickerValue(this.defaultPickerValue))}normalizeValue(e){const t=e??"";return this.range?t.split(",").map(e=>this.normalizeSingleValue(e)).filter(e=>e.length>0).slice(0,2).join(","):this.normalizeSingleValue(t)}normalizeSingleValue(e){const t=mt(e);return t?bt(t.parts,this.normalizedFormat):""}syncViewToSelectedDate(){const e=(this.range?this.parsedRangeValue[0]?.parts:this.parsedValue?.parts)??vt();this.viewYear=e.year,this.viewMonth=e.month}syncViewToOpenDate(){const e=mt(this.normalizedPickerValue||this.defaultPickerValue),t=this.range?this.parsedRangeValue[0]?.parts:this.parsedValue?.parts,r=e?.parts??t??vt();this.viewYear=r.year,this.viewMonth=r.month}syncViewToPickerValue(e=this.normalizedPickerValue){const t=mt(e);t&&(this.viewYear=t.parts.year,this.viewMonth=t.parts.month)}getUnitKey(e){return ht(e)}getDisabledRuleKey(e){const t=mt(e);return t?this.getUnitKey(t.parts):void 0}isDateDisabled(e){const t=this.getUnitKey(e),r=this.getDisabledRuleKey(this.min),a=this.getDisabledRuleKey(this.max),i=this.isDateDisabledByRules(e);return void 0!==r&&t<r||void 0!==a&&t>a||void 0!==r&&void 0!==a&&r>a||i}isDateDisabledByRules(e){const t=(this.disabledDate??"").trim();if(!t)return!1;const r=this.getUnitKey(e);return t.split(";").some(e=>{const[t="",a=""]=e.split(":"),i=a.split(",").map(e=>this.getDisabledRuleKey(e.trim())).filter(e=>void 0!==e);return"before"===t.trim()?void 0!==i[0]&&r<i[0]:"after"===t.trim()?void 0!==i[0]&&r>i[0]:("dates"===t.trim()||"values"===t.trim())&&i.includes(r)})}isPartsSelected(e){const t=this.range?this.parsedRangeValue:[this.parsedValue],r=this.getUnitKey(e);return t.some(e=>void 0!==e&&this.getUnitKey(e.parts)===r)}isPartsInRange(e){if(!this.range)return!1;const[t,r]=this.parsedRangeValue;if(!t||!r)return!1;const a=this.getUnitKey(e),i=this.getUnitKey(t.parts),n=this.getUnitKey(r.parts);return a>=Math.min(i,n)&&a<=Math.max(i,n)}createDateCells(e=this.viewYear,t=this.viewMonth){const r=new Date(e,t-1,1).getDay(),a=new Date(e,t,0).getDate(),i=7*Math.ceil((r+a)/7),n=new Date(e,t-1,1-r),o=vt(),[s,l]=this.parsedRangeValue,c=s?this.getUnitKey(s.parts):void 0,d=l?this.getUnitKey(l.parts):void 0,p=[];for(let v=0;v<i;v+=1){const e=new Date(n.getFullYear(),n.getMonth(),n.getDate()+v),r={year:e.getFullYear(),month:e.getMonth()+1,day:e.getDate()},a=r.month!==t;p.push({value:bt(r,this.normalizedFormat),date:e,parts:r,label:this.range&&a?"":String(r.day),outside:a,today:gt(r,o),selected:(!a||!this.range)&&this.isPartsSelected(r),inRange:(!a||!this.range)&&this.isPartsInRange(r),disabled:this.isDateDisabled(r)||this.range&&a,rangeStart:!(a&&this.range||void 0===c||this.getUnitKey(r)!==c),rangeEnd:!(a&&this.range||void 0===d||this.getUnitKey(r)!==d)})}return p}selectDate(e,t){if(this.disabled||this.loading||this.isDateDisabled(e))return;const r=bt(e,this.normalizedFormat);this.range?this.selectRangeValue(r,t):(this.value=r,this.emitChange(e,t),this.setOpen(!1,"select"))}selectRangeValue(e,t){const r=this.rangeValues;if("start"===this.activeRangeEnd||0===r.length)return this.value=e,void(this.activeRangeEnd="end");const a=[r[0]??e,e],[i,n]=a.map(e=>mt(e));i&&n&&this.getUnitKey(i.parts)>this.getUnitKey(n.parts)&&a.reverse(),this.value=a.join(","),this.activeRangeEnd="start",this.emitChange(this.parsedRangeValue,t),this.setOpen(!1,"select")}clearValue(e){if(e?.preventDefault(),e?.stopPropagation(),this.disabled||this.loading||""===this.normalizedValue)return;const t={value:"",date:this.range?[]:null,source:"clear"};this.value="",this.activeRangeEnd="start",this.dispatchEvent(new CustomEvent("ve-clear",{detail:{value:""},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("ve-change",{detail:t,bubbles:!0,composed:!0}))}emitChange(e,t){const r=Array.isArray(e)?e.map(e=>e?.parts).filter(e=>void 0!==e).map(e=>pt(e)):pt(e);this.dispatchEvent(new CustomEvent("ve-change",{detail:{value:this.value,date:r,source:t},bubbles:!0,composed:!0}))}setOpen(e,t){(this.disabled||this.loading)&&(e=!1),this.open!==e&&(this.visibilityReason=t,this.open=e)}handleOpenChanged(){this.open?(this.syncViewToOpenDate(),this.installGlobalListeners(),this.updateComplete.then(()=>{this.isConnected&&this.open&&!this.disabled&&!this.loading&&((0,v.h)(this.panelElement),this.setupAutoUpdate(),this.scheduleUpdatePosition())})):((0,v.s)(this.panelElement),this.removeGlobalListeners(),this.repositionScheduler.cancel(),this.positionRequestId+=1,this.teardownAutoUpdate()),this.dispatchEvent(new CustomEvent("ve-visible-change",{detail:{open:this.open,reason:this.visibilityReason},bubbles:!0,composed:!0}))}installGlobalListeners(){document.addEventListener("pointerdown",this.handleDocumentPointerDown),document.addEventListener("keydown",this.handleDocumentKeydown)}removeGlobalListeners(){document.removeEventListener("pointerdown",this.handleDocumentPointerDown),document.removeEventListener("keydown",this.handleDocumentKeydown)}setupAutoUpdate(){this.isConnected&&this.open&&this.controlElement&&this.panelElement&&(this.teardownAutoUpdate(),this.cleanupAutoUpdate=(0,p.D9)(this.fieldElement??this.controlElement,this.panelElement,()=>this.scheduleUpdatePosition()))}teardownAutoUpdate(){this.cleanupAutoUpdate?.(),this.cleanupAutoUpdate=null}scheduleUpdatePosition(){this.repositionScheduler.schedule(()=>{this.updatePosition()})}async updatePosition(){if(!(this.open&&this.isConnected&&this.controlElement&&this.panelElement))return;const e=++this.positionRequestId,t=this.fieldElement??this.controlElement;if(this.popupMatchSelectWidth){const e=t.getBoundingClientRect();this.panelElement.style.minWidth=`${e.width}px`}else this.panelElement.style.minWidth="";const r=window.getComputedStyle(this),a=Number.parseFloat(r.getPropertyValue("--ve-date-picker-popup-gap"))||4,i=await(0,p.VI)({reference:t,floating:this.panelElement,placement:"bottom-start",distance:a});e===this.positionRequestId&&this.open&&this.isConnected&&this.panelElement&&(this.panelPlacement=i.placement,Object.assign(this.panelElement.style,{left:"0",top:"0",transform:`translate3d(${Math.round(i.x)}px, ${Math.round(i.y)}px, 0)`}))}handleControlClick=()=>{this.disabled||this.setOpen(!this.open,"trigger")};handleControlKeydown=e=>{if(!this.disabled&&e.target===this.controlElement)switch(e.key){case"Enter":case" ":case"ArrowDown":e.preventDefault(),this.setOpen(!0,"trigger");break;case"Escape":this.open&&(e.preventDefault(),this.setOpen(!1,"escape"))}};handlePrefixSlotChange=e=>{const t=e.currentTarget;this.hasPrefixSlot=(t?.assignedNodes({flatten:!0}).filter(e=>e.nodeType!==Node.TEXT_NODE||(e.textContent?.trim().length??0)>0).length??0)>0};handleClearClick=e=>{this.clearValue(e)};handleClearPointerDown=e=>{e.preventDefault(),e.stopPropagation()};createRangeSegmentClickHandler(e){return t=>{t.stopPropagation(),this.disabled||(this.activeRangeEnd=e,this.setOpen(!0,"trigger"))}}createCellClickHandler(e){return()=>this.selectDate(e.parts,"select")}createCellKeydownHandler(e){return t=>{"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),this.selectDate(e.parts,"select"))}}createMonthNavigationHandler(e){return()=>{const t=ft(this.viewYear,this.viewMonth,e);this.viewYear=t.year,this.viewMonth=t.month}}createShortcutClickHandler(e){return()=>{const t=e.resolvedValue,r=e.resolvedEndValue??"";t&&(this.value=this.range&&r?`${t},${r}`:t,this.activeRangeEnd="start",this.range?this.emitChange(this.parsedRangeValue,"shortcut"):this.parsedValue&&this.emitChange(this.parsedValue.parts,"shortcut"),this.setOpen(!1,"select"))}}renderLabel(){const e=(this.label??"").trim();return e?n.qy`
      <span class="ve-date-picker-label" part="label">
        <span class="ve-date-picker-label-text">${e}</span>
      </span>
    `:n.s6}renderPrefix(){return n.qy`<span
      class=${(0,o.H)({"ve-date-picker-prefix":!0,"ve-date-picker-prefix-empty":!this.hasPrefixSlot})}
      ><slot name="prefix" @slotchange=${this.handlePrefixSlotChange}></slot
    ></span>`}renderValue(){if(this.range){const e=this.formattedRangeStartValue,t=this.formattedRangeEndValue;return Boolean(e||t)?n.qy`
        <span class="ve-date-picker-range-value">
          <span
            class=${(0,o.H)({"ve-date-picker-range-segment":!0,"ve-date-picker-range-segment-active":this.open&&"start"===this.activeRangeEnd,"ve-date-picker-range-segment-placeholder":!e})}
            @click=${this.createRangeSegmentClickHandler("start")}
          >
            ${e||"\u5f00\u59cb\u65e5\u671f"}
          </span>
          <span class="ve-date-picker-range-separator">${this.separator}</span>
          <span
            class=${(0,o.H)({"ve-date-picker-range-segment":!0,"ve-date-picker-range-segment-active":this.open&&"end"===this.activeRangeEnd,"ve-date-picker-range-segment-placeholder":!t})}
            @click=${this.createRangeSegmentClickHandler("end")}
          >
            ${t||"\u7ed3\u675f\u65e5\u671f"}
          </span>
        </span>
      `:n.qy`<span
          class="ve-date-picker-value ve-date-picker-value-placeholder"
          >${this.placeholder}</span
        >`}const e=this.displayValue;return n.qy`<span
      class=${(0,o.H)({"ve-date-picker-value":!0,"ve-date-picker-value-placeholder":!e})}
      >${e||this.placeholder}</span
    >`}renderActions(){return n.qy`
      <span class="ve-date-picker-actions">
        ${this.shouldShowClear?n.qy`<button
              class="ve-date-picker-clear"
              part="clear"
              type="button"
              aria-label="Clear"
              @pointerdown=${this.handleClearPointerDown}
              @click=${this.handleClearClick}
            >
              <ve-icon .definition=${u.u}></ve-icon>
            </button>`:n.s6}
        ${this.loading?n.qy`<span class="ve-date-picker-loading" aria-hidden="true">
              <ve-icon .definition=${h.o}></ve-icon>
            </span>`:n.qy`<span class="ve-date-picker-arrow" aria-hidden="true">
              <ve-icon .definition=${g.dateCalendarIcon}></ve-icon>
            </span>`}
      </span>
    `}renderPanelHeader(e=this.viewYear,t=this.viewMonth){const r=`${e}\u5e74${dt(t)}\u6708`;return n.qy`
      <div class="ve-date-picker-header">
        <span class="ve-date-picker-header-label"> ${r} </span>
        <div class="ve-date-picker-navigation-group">
          <button
            class="ve-date-picker-navigation"
            type="button"
            aria-label="Previous month"
            @click=${this.createMonthNavigationHandler(-1)}
          >
            <ve-icon .definition=${k.chevronLeftSmIcon}></ve-icon>
          </button>
          <button
            class="ve-date-picker-navigation"
            type="button"
            aria-label="Next month"
            @click=${this.createMonthNavigationHandler(1)}
          >
            <ve-icon .definition=${b.chevronRightSmIcon}></ve-icon>
          </button>
        </div>
      </div>
    `}renderWeekdays(){return n.qy`<div class="ve-date-picker-weekdays" aria-hidden="true">
      ${st.map(e=>n.qy`<span class="ve-date-picker-weekday">${e}</span>`)}
    </div>`}renderGrid(e=this.viewYear,t=this.viewMonth,r=this.gridId){const a=this.createDateCells(e,t);return n.qy`
      <div
        id=${r}
        class=${(0,o.H)({"ve-date-picker-grid":!0,"ve-date-picker-grid-range":this.range})}
        role="grid"
      >
        ${a.map(e=>n.qy`<button
            class=${(0,o.H)({"ve-date-picker-cell":!0,"ve-date-picker-cell-outside":e.outside,"ve-date-picker-cell-today":e.today,"ve-date-picker-cell-selected":e.selected,"ve-date-picker-cell-in-range":e.inRange,"ve-date-picker-cell-disabled":e.disabled,"ve-date-picker-cell-range-start":e.rangeStart,"ve-date-picker-cell-range-end":e.rangeEnd})}
            part="cell"
            type="button"
            role="gridcell"
            aria-label=${e.value}
            aria-selected=${e.selected?"true":"false"}
            aria-disabled=${e.disabled?"true":"false"}
            title=${e.label?e.value:""}
            ?disabled=${e.disabled}
            @click=${this.createCellClickHandler(e)}
            @keydown=${this.createCellKeydownHandler(e)}
          >
            <span class="ve-date-picker-cell-label">${e.label}</span>
          </button>`)}
      </div>
    `}renderCalendar(e=this.viewYear,t=this.viewMonth,r=this.gridId){return n.qy`
      <div class="ve-date-picker-calendar">
        ${this.renderPanelHeader(e,t)} ${this.renderWeekdays()}
        ${this.renderGrid(e,t,r)}
      </div>
    `}renderShortcuts(){const e=this.parsedShortcuts;return 0===e.length?n.s6:n.qy`<div class="ve-date-picker-shortcuts">
      ${e.map(e=>n.qy`<button
            class=${(0,o.H)({"ve-date-picker-shortcut":!0,"ve-date-picker-shortcut-selected":this.isShortcutSelected(e)})}
            type="button"
            title=${e.label}
            aria-pressed=${this.isShortcutSelected(e)?"true":"false"}
            @click=${this.createShortcutClickHandler(e)}
          >
            <span class="ve-date-picker-shortcut-label">${e.label}</span>
          </button>`)}
    </div>`}renderPanel(){return this.open?n.qy`
      <div
        class=${(0,o.H)({"ve-date-picker-panel":!0,"ve-date-picker-panel-with-left-shortcuts":"left"===this.shortcutPlacement&&this.parsedShortcuts.length>0})}
        part="panel"
        role="dialog"
        popover=${"manual"}
        data-placement=${this.panelPlacement}
      >
        ${"left"===this.shortcutPlacement?this.renderShortcuts():n.s6}
        <div class="ve-date-picker-panel-main">
          ${this.range?n.qy`<div class="ve-date-picker-calendar-group">
                ${this.renderCalendar(this.viewYear,this.viewMonth,this.gridId)}
                ${(()=>{const e=ft(this.viewYear,this.viewMonth,1);return this.renderCalendar(e.year,e.month,`${this.gridId}-end`)})()}
              </div>`:this.renderCalendar()}
          ${"bottom"===this.shortcutPlacement?this.renderShortcuts():n.s6}
        </div>
      </div>
    `:n.s6}renderDescription(){const e=(this.description??"").trim();return e?n.qy`<div
      id=${this.descriptionId}
      class="ve-date-picker-description"
      part="description"
    >
      ${e}
    </div>`:n.s6}render(){return n.qy`
      <div
        class=${(0,o.H)({"ve-date-picker":!0,"ve-date-picker-with-label":this.hasLeadingLabel})}
      >
        <div class="ve-date-picker-field">
          ${this.renderLabel()}
          <div
            class=${(0,o.H)({"ve-date-picker-control":!0,"ve-date-picker-control-filled":this.hasDisplayValue})}
            part="control"
            role="combobox"
            tabindex=${this.disabled?"-1":"0"}
            aria-haspopup="dialog"
            aria-expanded=${this.open?"true":"false"}
            aria-controls=${(0,s.J)(this.open?this.gridId:void 0)}
            aria-label=${(0,s.J)(this.controlAriaLabel)}
            aria-labelledby=${(0,s.J)(this.controlAriaLabelledby)}
            aria-describedby=${(0,s.J)(this.controlAriaDescribedby)}
            aria-required=${(0,s.J)(this.controlAriaRequired)}
            aria-invalid=${(0,s.J)(this.controlAriaInvalid)}
            @click=${this.handleControlClick}
            @keydown=${this.handleControlKeydown}
          >
            ${this.renderPrefix()} ${this.renderValue()} ${this.renderActions()}
          </div>
        </div>
        ${this.renderDescription()}
      </div>
      ${this.renderPanel()}
    `}}(0,c.Xq)(nt,wt);var yt=r(35780),xt=r(74410);const zt=(0,yt.h)({tagName:nt,elementClass:wt,react:i,events:{onChange:"ve-change",onClear:"ve-clear",onVisibleChange:"ve-visible-change"},ownEvents:["onChange"]}),Vt=a.forwardRef(({prefix:e,children:t,...r},i)=>a.createElement(zt,{...r,ref:i},(0,xt.RG)("prefix",e),t));Vt.displayName="DatePicker"},96729(e,t,r){var a=r(16309);const i=(0,r(63568).b)(a.bellIcon,"IconBell");r.d(t,["p",0,i])},38962(e,t,r){var a=r(54846);const i=(0,r(63568).b)(a.fullScreenIcon,"IconFullScreen");r.d(t,["R",0,i])},73434(e,t,r){var a=r(59758);const i=(0,r(63568).b)(a.linkBreakIcon,"IconLinkBreak");r.d(t,["b",0,i])},57160(e,t,r){var a=r(6396);const i=(0,r(63568).b)(a.linkIcon,"IconLink");r.d(t,["A",0,i])},16309(e,t,r){r.r(t);var a=r(24913),i=r(86913);const n={name:"bell",svg:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 17v1a3 3 0 1 1-6 0v-1m6 0H9m6 0h3.59c.383 0 .575 0 .73-.052a1 1 0 0 0 .627-.628c.053-.156.053-.348.053-.734 0-.169 0-.253-.014-.334a1 1 0 0 0-.173-.42c-.048-.067-.108-.127-.227-.246l-.39-.39a.67.67 0 0 1-.196-.474V10a7 7 0 1 0-14 0v3.722a.67.67 0 0 1-.196.474l-.39.39c-.12.12-.179.179-.226.245a1 1 0 0 0-.175.421c-.013.08-.013.165-.013.334 0 .386 0 .578.052.734a1 1 0 0 0 .629.628c.155.052.346.052.729.052H9"/></svg>\n'};(0,a.W)(),(0,i.pU)(n),r.d(t,["bellIcon",0,n])},5156(e,t,r){r.r(t);var a=r(24913),i=r(86913);const n={name:"chevron-left-sm",svg:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m14 16-4-4 4-4"/></svg>\n'};(0,a.W)(),(0,i.pU)(n),r.d(t,["chevronLeftSmIcon",0,n])},27367(e,t,r){r.r(t);var a=r(24913),i=r(86913);const n={name:"chevron-right-sm",svg:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m10 8 4 4-4 4"/></svg>\n'};(0,a.W)(),(0,i.pU)(n),r.d(t,["chevronRightSmIcon",0,n])},543(e,t,r){r.r(t);var a=r(24913),i=r(86913);const n={name:"date-calendar",svg:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 4h2m-6 .002c-1.165.007-1.831.051-2.362.307a2.92 2.92 0 0 0-1.311 1.238C3 6.153 3 6.947 3 8.533v7.934c0 1.587 0 2.38.327 2.986.288.533.747.966 1.311 1.238C5.28 21 6.12 21 7.8 21h8.4c1.68 0 2.52 0 3.162-.309a2.92 2.92 0 0 0 1.311-1.238c.327-.606.327-1.4.327-2.986V8.533c0-1.586 0-2.38-.327-2.986a2.92 2.92 0 0 0-1.311-1.238c-.53-.256-1.197-.3-2.362-.307M3.75 9.25h16.5M9 2.5v3m6-3v3"/></svg>\n'};(0,a.W)(),(0,i.pU)(n),r.d(t,["dateCalendarIcon",0,n])},54846(e,t,r){r.r(t);var a=r(24913),i=r(86913);const n={name:"full-screen",svg:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.495 20H4v-4.514M15.505 20H20v-4.514M15.505 4H20v4.514M8.495 4H4v4.514"/></svg>\n'};(0,a.W)(),(0,i.pU)(n),r.d(t,["fullScreenIcon",0,n])},59758(e,t,r){r.r(t);var a=r(24913),i=r(86913);const n={name:"link-break",svg:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.5 21v-2.25m2.25-2.25H21M6.431 11.205l-1.59 1.59a4.5 4.5 0 0 0 6.363 6.365l1.592-1.592M5.25 7.5H3M7.5 3v2.25m3.705 1.182 1.59-1.591a4.5 4.5 0 1 1 6.364 6.363l-1.591 1.592"/></svg>\n'};(0,a.W)(),(0,i.pU)(n),r.d(t,["linkBreakIcon",0,n])},6396(e,t,r){r.r(t);var a=r(24913),i=r(86913);const n={name:"link",svg:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m8.622 15.379 6.757-6.757m-9.29 2.534-1.69 1.689a4.777 4.777 0 1 0 6.757 6.756l1.688-1.69M11.155 6.089l1.69-1.689a4.777 4.777 0 0 1 6.756 6.757l-1.689 1.688"/></svg>\n'};(0,a.W)(),(0,i.pU)(n),r.d(t,["linkIcon",0,n])}}]);