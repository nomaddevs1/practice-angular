import { Component } from '@angular/core';

@Component({
  selector: '.warnings',
  template: ` <p>
    <strong>Warning:</strong>
  </p>`,
  styles: [
    `
      p {
        color: red;
        background-color: mistyrose;
        border: 1px solid red;
        padding: 2px;
      }
    `,
  ],
})
export class WarningsComponent {}
