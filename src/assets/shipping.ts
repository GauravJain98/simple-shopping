export class Shipping {
  type: string;
  price: number;
  constructor(type: string, price: number) {
    this.type = type;
    this.price = price;
  }
}
export const shipping: Shipping[] = [
  new Shipping('Overnight', 25.99),
  new Shipping('2-Day', 9.99),
  new Shipping('Postal', 2.99),
];
