import "./CurrencyInput.css";
import { useState } from "react";
const CurrencyInput = ({
  type = "",
  currency = {},
  handler = () => {},
  loading = false,
}) => {
  const hendleInput = (e) => {
    handler({ ...currency, value: e.target.value.replace(/[^0-9.]/g, "") });
  };
  return (
    <input
      type="text"
      className="currency-input"
      value={loading ? "Loading ..." : currency.value || ""}
      onChange={hendleInput}
      disabled={type === "to" ? true : false}
    />
  );
};

export default CurrencyInput;
