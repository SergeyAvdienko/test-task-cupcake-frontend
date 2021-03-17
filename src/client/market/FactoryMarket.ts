import { Market } from '../parentClass/Market';

class First extends Market {
  constructor(objectAPI: any) {
    super(objectAPI);
  }
}

class Second extends Market {
  constructor(objectAPI: any) {
    super(objectAPI);
  }
}

class Third extends Market {
  constructor(objectAPI: any) {
    super(objectAPI);
  }
}

export class FactoryMarket {
  list: any;
  objectAPI: any;
  constructor(objectAPI) {
    this.objectAPI = objectAPI;
    this.list = {
      first: First,
      second: Second,
      third: Third,
    };
  }
  create() {
    if (!this.objectAPI.name) return {};
    const fm = this.list[`${this.objectAPI.name}`];
    return new fm(this.objectAPI).result();
  }
}
