import CurrencyInputOutput from "./components/CurrencyInputOutput";
import "./styles/_reset.scss";
import "./styles/App.scss";

function App() {
  return (
    <>
      <div className="mainBox">
        <div className="heading">
          <p>Currency Converter</p>
        </div>
        <div className="converter">
          <div className="fromBox">
            <CurrencyInputOutput boxType={"From"} />
          </div>
          <div className="exchangeBox">
            <span>Exchange</span>
          </div>
          <div className="toBox">
            <CurrencyInputOutput boxType={"To"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
