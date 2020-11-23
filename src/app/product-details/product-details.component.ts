import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';
// import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  constructor(
    private route: ActivatedRoute // private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      if (params.get('productId') != null) {
        this.product = products[+params.get('productId')!];
      }
    });
  }
}
