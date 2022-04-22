import { products } from '../products';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = products;
  genCat: string | undefined;

  onClick(cat: string): void {
    this.genCat = cat;
  }
  likes(product: any){
    if (!product.flaglike){
      product.likes += 1;
      product.flaglike = true;
    }
    else{
      product.likes -= 1;
      product.flaglike = false;
    }
  }

  share() {
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
