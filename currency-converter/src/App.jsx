import { useEffect, useState } from "react";
import CurrencyInputOutput from "./components/CurrencyInputOutput";
import "./styles/_reset.scss";
import "./styles/App.scss";

function App() {

  let [amount, setAmount] = useState(0);
  let [from, setFrom] = useState("INR");
  let [to, setTo] = useState("USD");
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

  return (
    <>
      <div className="mainBox">
        <div className="heading">
          <p>Currency Converter</p>
        </div>
        <div className="converter">
          <div className="fromBox">
            <CurrencyInputOutput
              amount={amount}
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
              amount={amount}
              label={"To"}
              currency={to}
              currencyList={currencyList}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

// "https://open.er-api.com/v6/latest/USD";