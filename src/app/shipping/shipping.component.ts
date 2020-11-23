import { Component, OnInit } from '@angular/core';
import { Shipping } from 'src/assets/shipping';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css'],
})
export class ShippingComponent implements OnInit {
  shippingCosts: Shipping[] | undefined;
  constructor(private cartService: CartService) {}
  ngOnInit() {
    this.shippingCosts = this.cartService.getShippingPrices();
  }
}
