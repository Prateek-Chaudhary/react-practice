import { useId } from "react";
import CurrencyCss from "./CurrencyInputOutput.module.scss";

export default function CurrencyInputOutput({
  amount,
  onAmountChange,
  currency,
  onCurrencyChange,
  label,
  currencyList = [],
  onlyRead = false,
  className,
}) {
  let labelId = useId();

  return (
    <>
      <div className={CurrencyCss.currencyBox}>
        <div className={CurrencyCss.conversionTag}>
          <label htmlFor={labelId}>{label}</label>
        </div>
        <div className={CurrencyCss.conversion}>
          <input
            value={amount}
            id={labelId}
            type="text"
            name="currencyValue"
            className={CurrencyCss.currencyValue}
            onChange={(e) => onAmountChange(e.target.value)}
            readOnly={onlyRead}
          />
          <select
            name="currencies"
            id={CurrencyCss.currencyList}
            value={currency}
            onChange={(e) => onCurrencyChange(e.target.value)}
          >
            {currencyList.map((currencyName) => {
              return (
                <option value={currencyName} key={currencyName}>
                  {currencyName}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </>
  );
}
