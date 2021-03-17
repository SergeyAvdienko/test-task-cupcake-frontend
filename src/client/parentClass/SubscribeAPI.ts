import { ProxyMarket } from '../proxyMarket/ProxyMarket';

export class Subscribe {
  async send(path, options, timeout) {
    return Promise.race([
      (await fetch(path, options)).text(),
      new Promise((_, reject) =>
        setTimeout(
          () => reject(this.subscribe(path, options, timeout)),
          timeout,
        ),
      ),
    ]);
  }
  async subscribe(path, options = {}, timeout = 2000) {
    const response = this.send(path, options, timeout);
    response
      .then((res: string) => {
        try {
          res = JSON.parse(res);
          const pattern = new RegExp('[^a-zA-Z0-9]+', 'g');
          const copyPath = path;
          res['name'] = copyPath.replace(pattern, '');
          new ProxyMarket(res);
        } catch (error) {
          console.log('Ошибка парсинга данных');
        }
      })
      .catch(() => {
        console.log('Ошибка запроса данных API');
      })
      .finally(() => this.send(path, options, timeout));
  }
}
