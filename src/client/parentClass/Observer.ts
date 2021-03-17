import {
  firstMarket,
  secondMarket,
  thirdMarket,
} from '../proxyMarket/ProxyMarket';

export class Subject {
  observers: any[];
  constructor() {
    this.observers = [];
  }
  subscribe(observer) {
    this.observers.push(observer);
  }
  unsubscribe(observer) {
    this.observers = this.observers.filter((obs) => {
      obs !== observer;
    });
  }
  fire() {
    this.observers.forEach((observer) => {
      observer.update();
    });
  }
}

class MinimumValue {
  value = 0;
  setMinimumValue(value: number) {
    this.value = value;
  }
  getMinimumValue() {
    return this.value;
  }
}

export const minVal = new MinimumValue();

export class Observer {
  increment: number;
  state: any;
  initial: any;
  market: any;
  constructor(state, initial) {
    this.state = state;
    this.initial = initial;
    this.market = null;
    this.increment = 0;
  }
  searchMinimumValue() {
    minVal.setMinimumValue(0);
    // first
    Object.keys(firstMarket.calculateRates).forEach((key) => {
      if (
        (firstMarket.calculateRates[`${key}`] && !minVal.getMinimumValue()) ||
        (firstMarket.calculateRates[`${key}`] &&
          minVal.getMinimumValue() > firstMarket.calculateRates[`${key}`])
      )
        minVal.setMinimumValue(firstMarket.calculateRates[`${key}`]);
    });
    // second
    Object.keys(secondMarket.calculateRates).forEach((key) => {
      if (
        (secondMarket.calculateRates[`${key}`] && !minVal.getMinimumValue()) ||
        (secondMarket.calculateRates[`${key}`] &&
          minVal.getMinimumValue() > secondMarket.calculateRates[`${key}`])
      )
        minVal.setMinimumValue(secondMarket.calculateRates[`${key}`]);
    });
    // third
    Object.keys(thirdMarket.calculateRates).forEach((key) => {
      if (
        (thirdMarket.calculateRates[`${key}`] && !minVal.getMinimumValue()) ||
        (thirdMarket.calculateRates[`${key}`] &&
          minVal.getMinimumValue() > thirdMarket.calculateRates[`${key}`])
      )
        minVal.setMinimumValue(thirdMarket.calculateRates[`${key}`]);
    });
  }
  async update() {
    this.increment++;
    if (this.increment > 16) this.increment = 1;
    if (this.increment === 1) await this.searchMinimumValue();

    if (this.initial.market === 'first')
      this.market = firstMarket.calculateRates;
    if (this.initial.market === 'second')
      this.market = secondMarket.calculateRates;
    if (this.initial.market === 'third')
      this.market = thirdMarket.calculateRates;

    this.state(this.market[`${this.initial.value}`]);
  }
}
