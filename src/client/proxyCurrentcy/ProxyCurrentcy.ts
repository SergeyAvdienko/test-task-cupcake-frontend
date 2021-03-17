import { FactoryCurrency } from '../currentcy/FactoryCurrency';

function validateValueCurrentcy(value: number) {
  if (value && value > 0 && value !== NaN) return true;
  return false;
}

export const ProxyCurrentcy = new Proxy(FactoryCurrency, {
  construct(target: any, apply: Array<any>) {
    if (!validateValueCurrentcy(apply[2])) apply[2] = 0;
    return new target(...apply);
  },
});
