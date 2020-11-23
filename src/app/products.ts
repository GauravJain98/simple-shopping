export const products = [
  {
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
  },
  {
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
  },
  {
    name: 'Phone Standard',
    price: 299,
    description: '',
  },
];
export class Product {
  //field
  name: string;
  description: string;
  price: number;

  //constructor
  constructor(name: string, description: string, price: number) {
    this.name = name;
    this.description = description;
    this.price = price;
  }
}
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
