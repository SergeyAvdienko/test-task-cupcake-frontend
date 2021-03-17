import { FactoryMarket } from '../market/FactoryMarket';
import { StoreMarket } from '../parentClass/Store';

export const firstMarket = new StoreMarket('first');
export const secondMarket = new StoreMarket('second');
export const thirdMarket = new StoreMarket('third');

const marketArray = [firstMarket, secondMarket, thirdMarket];

export const ProxyMarket = new Proxy(FactoryMarket, {
  construct(target: any, apply: Array<any>) {
    const market = new target(...apply).create();
    for (let index = 0; index < marketArray.length; index++) {
      const elementMarketArray = marketArray[index];
      if (
        market.name === elementMarketArray.name &&
        !elementMarketArray.market
      ) {
        // createSection
        elementMarketArray.create(Object.assign({}, market));
        return {};
      } else if (
        market.name === elementMarketArray.name &&
        elementMarketArray.market
      ) {
        // updateSection
        elementMarketArray.updateMarket(Object.assign({}, market));
        return {};
      }
    }
  },
});
