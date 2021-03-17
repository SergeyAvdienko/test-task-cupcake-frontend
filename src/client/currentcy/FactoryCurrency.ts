import { Currency } from '../parentClass/Currency';

class RUB extends Currency {
  constructor(market, title, value) {
    super(market, title, value);
  }
}

class USD extends Currency {
  constructor(market, title, value) {
    super(market, title, value);
  }
}

class EUR extends Currency {
  constructor(market, title, value) {
    super(market, title, value);
  }
}

class CUPCAKE extends Currency {
  constructor(market, title, value) {
    super(market, title, value);
  }
}

export class FactoryCurrency {
  list: any;
  market: string;
  title: string;
  value: number;
  constructor(market, title, value) {
    this.market = market;
    this.title = title;
    this.value = value;
    this.list = {
      RUB: RUB,
      USD: USD,
      EUR: EUR,
      CUPCAKE: CUPCAKE,
    };
  }
  create() {
    const fc = this.list[`${this.title}`];
    return new fc(this.market, this.title, this.value).result();
  }
}
