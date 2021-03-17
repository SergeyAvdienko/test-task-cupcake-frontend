import { Market } from '../parentClass/Market';
import { Subject } from './Observer';

export const stream = new Subject();

class Calculate {
  RUBCUPCAKE: number;
  USDCUPCAKE: number;
  EURCUPCAKE: number;
  RUBUSD: number;
  RUBEUR: number;
  EURUSD: number;
  constructor(rates: Array<any>) {
    this.RUBCUPCAKE = this.RUBCUPCAKECalculate(rates);
    this.USDCUPCAKE = this.USDCUPCAKECalculate(rates);
    this.EURCUPCAKE = this.EURCUPCAKECalculate(rates);
    this.RUBUSD = this.RUBUSDCalculate(rates);
    this.RUBEUR = this.RUBEURCalculate(rates);
    this.EURUSD = this.EURUSDCalculate(rates);
  }
  RUBCUPCAKECalculate(rates) {
    let RC = 0;
    rates.forEach((curr) => {
      if (curr.rates && curr.title === 'RUB')
        RC = Math.round(parseFloat(curr.rates) * 100) / 100 / 1;
    });
    return RC;
  }
  USDCUPCAKECalculate(rates) {
    let UC = 0;
    rates.forEach((curr) => {
      if (curr.rates && curr.title === 'USD')
        UC = Math.round(parseFloat(curr.rates) * 100) / 100 / 1;
    });
    return UC;
  }
  EURCUPCAKECalculate(rates) {
    let EC = 0;
    rates.forEach((curr) => {
      if (curr.rates && curr.title === 'EUR')
        EC = Math.round(parseFloat(curr.rates) * 100) / 100 / 1;
    });
    return EC;
  }
  RUBUSDCalculate(rates) {
    let R = 0;
    let U = 0;
    rates.forEach((curr) => {
      if (curr.rates && curr.title === 'RUB')
        R = Math.round(parseFloat(curr.rates) * 100) / 100;
      if (curr.rates && curr.title === 'USD')
        U = Math.round(parseFloat(curr.rates) * 100) / 100;
    });
    const RU = R / U;
    return R && U ? Number(RU.toFixed(2)) : 0;
  }
  RUBEURCalculate(rates) {
    let R = 0;
    let E = 0;
    rates.forEach((curr) => {
      if (curr.rates && curr.title === 'RUB')
        R = Math.round(parseFloat(curr.rates) * 100) / 100;
      if (curr.rates && curr.title === 'EUR')
        E = Math.round(parseFloat(curr.rates) * 100) / 100;
    });
    const RE = R / E;
    return R && E ? Number(RE.toFixed(2)) : 0;
  }
  EURUSDCalculate(rates) {
    let E = 0;
    let U = 0;
    rates.forEach((curr) => {
      if (curr.rates && curr.title === 'EUR')
        E = Math.round(parseFloat(curr.rates) * 100) / 100;
      if (curr.rates && curr.title === 'USD')
        U = Math.round(parseFloat(curr.rates) * 100) / 100;
    });
    const EU = E / U;
    return E && U ? Number(EU.toFixed(2)) : 0;
  }
}

export class StoreMarket {
  market: any;
  name: string;
  calculateRates: any;
  constructor(name, market = undefined) {
    this.name = name;
    this.calculateRates = {};
    this.market = market;
  }
  create(market: any) {
    this.market = market;
    this.calculateRates = new Calculate(this.market.rates);
    stream.fire();
    return;
  }
  getRates() {
    return this.market.rates;
  }
  async updateMarket(market: any) {
    for (let index = 0; index < this.market.rates.length; index++) {
      const oldMarket =
        Math.round(parseFloat(this.market.rates[index].rates) * 100) / 100;
      const newMarket =
        Math.round(parseFloat(market.rates[index].rates) * 100) / 100;
      if (newMarket && oldMarket !== newMarket) {
        let response = await fetch(`/${this.name}/poll`);
        if (response.status === 200) {
          response = JSON.parse(await response.text());
          this.market = new Market(response);
          this.market['name'] = this.name;
          this.calculateRates = new Calculate(this.market.rates);
          stream.fire();
        } else {
          return;
        }
      }
    }
  }
}
