import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

import { Product, products } from '../products';
// import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  cart: CartService | undefined;
  constructor(private route: ActivatedRoute, private cartService: CartService) {
    this.cart = cartService;
  }
  addToCart(product: Product) {
    this.cart?.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      if (params.get('productId') != null) {
        this.product = products[+params.get('productId')!];
      }
    });
  }
}
