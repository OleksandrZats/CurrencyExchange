import "./CurrencyButton.css";

const CurrencyButton = ({ type = "", currency = {} }) => {
  let buttonType =
    type === "small" ? "currency-button small" : "currency-button";
  return <button className={buttonType}>{currency.sign}</button>;
};

export default CurrencyButton;
