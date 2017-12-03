import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: ` <ul>
      <li><a [routerLink] = "['/Product']">Product</a></li>
      <li><a [routerLink] = "['/Inventory']">Inventory</a></li>
    <li><a [routerLink] = "['/productlist']">productlist</a></li>
   </ul>
   <router-outlet></router-outlet>`,
})
@Component ({
   selector: 'my-app',
   template: '<product-form></product-form>'
})
export class AppComponent  { name = 'Angular'; }
