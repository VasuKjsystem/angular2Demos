import { Component } from '@angular/core';
import { Product } from './products';

@Component ({
   selector: 'product-form',
   templateUrl: './productform.component.html'
})

export class ProductFormComponent {
    clicked() {
   console.log("data")
  }
}