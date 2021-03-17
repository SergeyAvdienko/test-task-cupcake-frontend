import { ProxyCurrentcy } from '../proxyCurrentcy/ProxyCurrentcy';

export class Market {
  name: string;
  date: string;
  timestamp: number;
  rates: Array<any>;
  constructor(objectAPI: any) {
    this.name = objectAPI.name;
    this.date = objectAPI.date;
    this.timestamp = objectAPI.timestamp;
    this.rates = this.ratesMap(objectAPI.rates);
  }
  ratesMap(rates) {
    const arr = [];
    Object.keys(rates).forEach((currentcyKey) => {
      const key = currentcyKey;
      const value = rates[key];
      arr.push(new ProxyCurrentcy(this.name, key, value).create());
    });
    return arr;
  }
  result() {
    return this;
  }
}
