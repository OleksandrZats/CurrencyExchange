import Section from "./Section/Section";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [currencyFrom, setCurrencyFrom] = useState({
    name: "usd",
    sign: "$",
    value: "",
  });
  const [currencyTo, setCurrencyTo] = useState({
    name: "uah",
    sign: "₴",
    value: "",
  });

  const [exchangeRate, setExchangeRate] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchExchangeRate(currencyFrom, currencyTo);
  }, [currencyFrom, currencyTo.name]);

  useEffect(() => {
    setCurrencyTo({
      ...currencyTo,
      value: currencyFrom.value * exchangeRate,
    });
  }, [currencyFrom, exchangeRate]);

  async function fetchExchangeRate(from, to) {
    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const url = `https://2024-03-06.currency-api.pages.dev/v1/currencies/${currencyFrom.name}.json`;

    try {
      const response = await fetch(url);
      const result = await response.text();

      setExchangeRate(JSON.parse(result)[currencyFrom.name][currencyTo.name]);
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  }
  return (
    <div>
      <Section currency={currencyFrom} handler={setCurrencyFrom} type="from" />
      <Section
        currency={currencyTo}
        handler={setCurrencyTo}
        type="to"
        loading={loading}
      />
    </div>
  );
}

export default App;
