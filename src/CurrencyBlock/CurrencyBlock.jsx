import CurrencyButton from "../CurrencyButton/CurrencyButton";
import "./CurrencyBlock.css";
import CURRENCY from "../constants";

const CurrencyBlock = ({ currency, handler = () => {}, type = "" }) => {
  return (
    <div className="currency-selector">
      <CurrencyButton currency={currency} />
      <ul className="currency-block">
        {CURRENCY.map((cur) => (
          <li
            className="currency-block-item"
            key={cur.name}
            onClick={() => handler({ ...cur, value: currency.value })}
          >
            <CurrencyButton
              currency={{ ...cur, value: currency.value }}
              type="small"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CurrencyBlock;
