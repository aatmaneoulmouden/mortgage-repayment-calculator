import React, { useId } from "react";

const Form = () => {
  const id = useId();
  return (
    <div className="form bg-neutral-white p-8">
      <div className="heading flex justify-between items-center mb-7">
        <h1 className="text-xl font-bold text-neutral-slate-900">Mortgage Calculator</h1>
        <button className="text-neutral-slate-700 underline">Clear All</button>
      </div>
      <form action="">
        <div className="input-wrapper">
          <label htmlFor={`${id}-mortgage-amount`} className="input-label">
            Mortgage Amount
          </label>
          <div className="input-container">
            <span className="input-tag">£</span>
            <input type="text" id={`${id}-mortgage-amount`} className="input" />
          </div>
        </div>
        <div className="two-inputs flex w-[380px] gap-4">
          <div className="input-wrapper">
            <label htmlFor={`${id}-mortgage-term`} className="input-label">
              Mortgage Term
            </label>
            <div className="input-container">
              <input type="text" id={`${id}-mortgage-term`} className="input" />
              <span className="input-tag">years</span>
            </div>
          </div>
          <div className="input-wrapper">
            <label htmlFor={`${id}-interest-rate`} className="input-label">
              Interest Rate
            </label>
            <div className="input-container">
              <input type="text" id={`${id}-interest-rate`} className="input" />
              <span className="input-tag">%</span>
            </div>
          </div>
        </div>
        <div className="input-wrapper">
          <label
            htmlFor={`${id}-mortgage-type-repayment`}
            className="input-label"
          >
            Mortgage Type
          </label>
          <div className="radio-input-container mb-3">
            <input
              type="radio"
              id={`${id}-mortgage-type-repayment`}
              name="mortgage-type"
              className="radio-input"
            />
            <label htmlFor={`${id}-mortgage-type-repayment`}>Repayment</label>
          </div>
          <div className="radio-input-container">
            <input
              type="radio"
              id={`${id}-mortgage-type-interest`}
              name="mortgage-type"
              className="radio-input"
            />
            <label htmlFor={`${id}-mortgage-type-interest`}>Interest Only</label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
