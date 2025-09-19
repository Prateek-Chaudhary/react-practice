import { useEffect, useState } from "react";
import CurrencyInputOutput from "./components/CurrencyInputOutput";
import "./styles/_reset.scss";
import "./styles/App.scss";

function App() {

  let [fromAmount, setFromAmount] = useState();
  let [toAmount, setToAmount] = useState();
  let [from, setFrom] = useState("USD");
  let [to, setTo] = useState("INR");
  let [currencyListWithValue, setCurrencyListWithValue] = useState({});
  let [currencyList, setCurrencyList] = useState([]);

  useEffect(() => {
    fetch(`https://open.er-api.com/v6/latest/${from}`)
      .then((res) => res.json())
      .then((res) => setCurrencyListWithValue(res.rates));
  }, [from]);

  useEffect(() => {
    setCurrencyList(Object.keys(currencyListWithValue));
  }, [currencyListWithValue]);

  let onFromAmountChange = (money) => {
    setFromAmount(money);
  }

  let onToAmountChange = (money) => {
    setToAmount(money);
  }

  let onFromCurrencyChange = (currency) => {
    setFrom(currency);
  }

  let onToCurrencyChange = (currency) => {
    setTo(currency);
  }

  let calculateAns = () => {
    let toValue = Number(currencyListWithValue[to]);
    let ans = toValue * Number(fromAmount);
    setToAmount(ans);
  }

  return (
    <>
      <div className="mainBox">
        <div className="heading">
          <p>Currency Converter</p>
        </div>
        <div className="converter">
          <div className="fromBox">
            <CurrencyInputOutput
              amount={fromAmount === undefined ? "" : fromAmount}
              onAmountChange={onFromAmountChange}
              onCurrencyChange={onFromCurrencyChange}
              label={"From"}
              currency={from}
              currencyList={currencyList}
            />
          </div>
          <div className="exchangeBox">
            <span>Exchange</span>
          </div>
          <div className="toBox">
            <CurrencyInputOutput
              amount={toAmount === undefined ? "" : toAmount}
              onAmountChange={onToAmountChange}
              onCurrencyChange={onToCurrencyChange}
              onlyRead={true}
              label={"To"}
              currency={to}
              currencyList={currencyList}
            />
          </div>
        </div>
        <div className="calculateButton">
          <button className="calcBtn" onClick={calculateAns}>Calculate</button>
        </div>
      </div>
    </>
  );
}

export default App;

// "https://open.er-api.com/v6/latest/USD";