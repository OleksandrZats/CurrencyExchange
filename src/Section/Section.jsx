import CurrencyInput from "../CurrencyInput/CurrencyInput";
import CurrencyBlock from "../CurrencyBlock/CurrencyBlock";
import "./Section.css";

const Section = ({
  currency = {},
  handler = () => {},
  type = "",
  loading = false,
}) => {
  return (
    <div className="section">
      <CurrencyInput
        type={type}
        handler={handler}
        currency={currency}
        loading={loading}
      />
      <CurrencyBlock currency={currency} handler={handler} type={type} />
    </div>
  );
};

export default Section;
