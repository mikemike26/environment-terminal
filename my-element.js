/**
 * @license
 * Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

import {LitElement, html, css} from 'lit-element';
import 'xterm';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class EnvTerminal extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        border: solid 1px gray;
        padding: 16px;
        max-width: 800px;
      }
    `;
  }

  static get properties() {
    return {
      /**
       * The name to say "Hello" to.
       */
      name: {type: String},

      /**
       * The number of times the button has been clicked.
       */
      url: {type: String},
    };
  }

  constructor() {
    super();
    this.name = 'World';
    this.count = 0;
  }

  get terminal() {
    return this.shadowRoot.getElementById('terminal');
  }

  firstUpdated() {
    this.term = new Terminal();
    this.term.open(this.terminal);
    this.term.write('Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ');
  }

  render() {
    return html`
      <link rel="stylesheet" href="../node_modules/xterm/css/xterm.css">
      <div>
        <div id="terminal"></div>
        <p>${this.url}</p>
      </div>
    `;
  }
}

window.customElements.define('env-terminal', EnvTerminal);
