import Form from "./Form";
import Result from "./Result";

const Calculator = () => {
  return (
    <div className="calculator grid grid-cols-2 bg-neutral-white rounded-2xl shadow-main overflow-hidden">
      <Form />
      <Result />
    </div>
  );
};

export default Calculator;
