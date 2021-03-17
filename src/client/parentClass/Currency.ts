export class Currency {
  market: string;
  title: string;
  rates: number;
  constructor(market, title, rates) {
    this.market = market;
    this.title = title;
    this.rates = rates;
  }
  result() {
    return {
      market: this.market,
      title: this.title,
      rates: this.rates,
    };
  }
}
