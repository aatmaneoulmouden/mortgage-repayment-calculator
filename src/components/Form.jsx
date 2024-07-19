import { useId } from "react";

const Form = () => {
  const id = useId();
  return (
    <div className="form bg-neutral-white p-8">
      <div className="heading flex justify-between items-center mb-7">
        <h1 className="text-xl font-bold">Mortgage Calculator</h1>
        <button className="text-neutral-slate-700 underline text-sm hover:text-neutral-slate-900">
          Clear All
        </button>
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
            <label htmlFor={`${id}-mortgage-type-interest`}>
              Interest Only
            </label>
          </div>
        </div>
        <button className="flex items-center gap-3 font-bold bg-primary-lime rounded-full py-3 px-5 border-none hover:bg-primary-lime/60">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              fill="#133041"
              d="M18.75 2.25H5.25a1.5 1.5 0 0 0-1.5 1.5v16.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V3.75a1.5 1.5 0 0 0-1.5-1.5Zm-10.5 16.5a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm0-3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25ZM12 18.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25ZM12 15a1.125 1.125 0 1 1 0-2.25A1.125 1.125 0 0 1 12 15Zm3.75 3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm0-3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm1.5-5.25a.75.75 0 0 1-.75.75h-9a.75.75 0 0 1-.75-.75V6a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 .75.75v3.75Z"
            />
          </svg>
          Calculate Repayments
        </button>
      </form>
    </div>
  );
};

export default Form;
