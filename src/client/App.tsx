import * as React from 'react';
import { render } from 'react-dom';
import { Subscribe } from './parentClass/SubscribeAPI';
import { Cell } from '../client/Table/Td';
import { Observer } from '../client/parentClass/Observer';
import { stream } from '../client/parentClass/Store';

new Subscribe().subscribe('/first', {}, 1000);
new Subscribe().subscribe('/second', {}, 1000);
new Subscribe().subscribe('/third', {}, 1000);

function App() {
  // row RUB/CUPCAKE
  const [firstMarketRUBCUPCAKE, setFirstMarketRUBCUPCAKE] = React.useState(0);
  stream.subscribe(
    new Observer(setFirstMarketRUBCUPCAKE, {
      market: 'first',
      value: 'RUBCUPCAKE',
    }),
  );
  const [secondMarketRUBCUPCAKE, setSecondMarketRUBCUPCAKE] = React.useState(0);
  stream.subscribe(
    new Observer(setSecondMarketRUBCUPCAKE, {
      market: 'second',
      value: 'RUBCUPCAKE',
    }),
  );
  const [thirdMarketRUBCUPCAKE, setThirdMarketRUBCUPCAKE] = React.useState(0);
  stream.subscribe(
    new Observer(setThirdMarketRUBCUPCAKE, {
      market: 'third',
      value: 'RUBCUPCAKE',
    }),
  );
  // row USD/CUPCAKE
  const [firstMarketUSDCUPCAKE, setFirstMarketUSDCUPCAKE] = React.useState(0);
  stream.subscribe(
    new Observer(setFirstMarketUSDCUPCAKE, {
      market: 'first',
      value: 'USDCUPCAKE',
    }),
  );
  const [secondMarketUSDCUPCAKE, setSecondMarketUSDCUPCAKE] = React.useState(0);
  stream.subscribe(
    new Observer(setSecondMarketUSDCUPCAKE, {
      market: 'second',
      value: 'USDCUPCAKE',
    }),
  );
  const [thirdMarketUSDCUPCAKE, setThirdMarketUSDCUPCAKE] = React.useState(0);
  stream.subscribe(
    new Observer(setThirdMarketUSDCUPCAKE, {
      market: 'third',
      value: 'USDCUPCAKE',
    }),
  );
  // row EUR/CUPCAKE
  const [firstMarketEURCUPCAKE, setFirstMarketEURCUPCAKE] = React.useState(0);
  stream.subscribe(
    new Observer(setFirstMarketEURCUPCAKE, {
      market: 'first',
      value: 'EURCUPCAKE',
    }),
  );
  const [secondMarketEURCUPCAKE, setSecondMarketEURCUPCAKE] = React.useState(0);
  stream.subscribe(
    new Observer(setSecondMarketEURCUPCAKE, {
      market: 'second',
      value: 'EURCUPCAKE',
    }),
  );
  const [thirdMarketEURCUPCAKE, setThirdMarketEURCUPCAKE] = React.useState(0);
  stream.subscribe(
    new Observer(setThirdMarketEURCUPCAKE, {
      market: 'third',
      value: 'EURCUPCAKE',
    }),
  );
  // row RUB/USD
  const [firstMarketRUBUSD, setFirstMarketRUBUSD] = React.useState(0);
  stream.subscribe(
    new Observer(setFirstMarketRUBUSD, {
      market: 'first',
      value: 'RUBUSD',
    }),
  );
  const [secondMarketRUBUSD, setSecondMarketRUBUSD] = React.useState(0);
  stream.subscribe(
    new Observer(setSecondMarketRUBUSD, {
      market: 'second',
      value: 'RUBUSD',
    }),
  );
  const [thirdMarketRUBUSD, setThirdMarketRUBUSD] = React.useState(0);
  stream.subscribe(
    new Observer(setThirdMarketRUBUSD, {
      market: 'third',
      value: 'RUBUSD',
    }),
  );
  // row RUB/EUR
  const [firstMarketRUBEUR, setFirstMarketRUBEUR] = React.useState(0);
  stream.subscribe(
    new Observer(setFirstMarketRUBEUR, {
      market: 'first',
      value: 'RUBEUR',
    }),
  );
  const [secondMarketRUBEUR, setSecondMarketRUBEUR] = React.useState(0);
  stream.subscribe(
    new Observer(setSecondMarketRUBEUR, {
      market: 'second',
      value: 'RUBEUR',
    }),
  );
  const [thirdMarketRUBEUR, setThirdMarketRUBEUR] = React.useState(0);
  stream.subscribe(
    new Observer(setThirdMarketRUBEUR, {
      market: 'third',
      value: 'RUBEUR',
    }),
  );
  // row EUR/USD
  const [firstMarketEURUSD, setFirstMarketEURUSD] = React.useState(0);
  stream.subscribe(
    new Observer(setFirstMarketEURUSD, {
      market: 'first',
      value: 'EURUSD',
    }),
  );
  const [secondMarketEURUSD, setSecondMarketEURUSD] = React.useState(0);
  stream.subscribe(
    new Observer(setSecondMarketEURUSD, {
      market: 'second',
      value: 'EURUSD',
    }),
  );
  const [thirdMarketEURUSD, setThirdMarketEURUSD] = React.useState(0);
  stream.subscribe(
    new Observer(setThirdMarketEURUSD, {
      market: 'third',
      value: 'EURUSD',
    }),
  );
  return (
    <div className="section">
      <div className="row">
        <div className="col s1"></div>
        <div className="col s10">
          <div className="section">
            <h4>
              Тестовое задание на позицию фронтенд разработчика в комманду
              cupcake development
            </h4>
          </div>
          <div className="divider"></div>
          <div className="section">
            <table className="centered">
              <thead>
                <tr>
                  <th>Pair name/market</th>
                  <th>First</th>
                  <th>Second</th>
                  <th>Third</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>RUB/CUPCAKE</td>
                  <Cell value={firstMarketRUBCUPCAKE} />
                  <Cell value={secondMarketRUBCUPCAKE} />
                  <Cell value={thirdMarketRUBCUPCAKE} />
                </tr>
                <tr>
                  <td>USD/CUPCAKE</td>
                  <Cell value={firstMarketUSDCUPCAKE} />
                  <Cell value={secondMarketUSDCUPCAKE} />
                  <Cell value={thirdMarketUSDCUPCAKE} />
                </tr>
                <tr>
                  <td>EUR/CUPCAKE</td>
                  <Cell value={firstMarketEURCUPCAKE} />
                  <Cell value={secondMarketEURCUPCAKE} />
                  <Cell value={thirdMarketEURCUPCAKE} />
                </tr>
                <tr>
                  <td>RUB/USD</td>
                  <Cell value={firstMarketRUBUSD} />
                  <Cell value={secondMarketRUBUSD} />
                  <Cell value={thirdMarketRUBUSD} />
                </tr>
                <tr>
                  <td>RUB/EUR</td>
                  <Cell value={firstMarketRUBEUR} />
                  <Cell value={secondMarketRUBEUR} />
                  <Cell value={thirdMarketRUBEUR} />
                </tr>
                <tr>
                  <td>EUR/USD</td>
                  <Cell value={firstMarketEURUSD} />
                  <Cell value={secondMarketEURUSD} />
                  <Cell value={thirdMarketEURUSD} />
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col s1"></div>
      </div>
    </div>
  );
}

render(<App />, document.getElementById('root'));
