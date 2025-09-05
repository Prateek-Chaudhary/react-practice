import { useEffect, useState } from "react";
import CurrencyCss from "./CurrencyInputOutput.module.scss";

export default function CurrencyInputOutput({ boxType }) {
  let [currencyList, setCurrencyList] = useState(["inr", "usd"]);

  useEffect(() => {}, []);

  return (
    <>
      <div className={CurrencyCss.currencyBox}>
        <div className={CurrencyCss.conversionTag}>
          <span>{boxType}</span>
        </div>
        <div className={CurrencyCss.conversion}>
          <input
            type="text"
            name="currencyValue"
            id={CurrencyCss.currencyValue}
          />
          <select name="currencies" id={CurrencyCss.currencyList}>
            {currencyList.map((currencyName) => {
              return (
                <option value={currencyName} key={currencyName}>
                  {currencyName.toUpperCase()}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </>
  );
}
