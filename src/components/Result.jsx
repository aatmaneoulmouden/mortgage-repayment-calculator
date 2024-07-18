const Result = () => {
  return (
    <div className="result bg-neutral-slate-900 rounded-es-[48px] p-8 text-neutral-white w-[444px] flex justify-center items-center">
      <div className="content text-center">
        <img src="./illustration-empty.svg" alt="Results shown here" className="w-36 mx-auto" />
        <h2 className="text-xl font-bold my-2">Results shown here</h2>
        <p className="text-sm text-neutral-slate-300">
          Complete the form and click “calculate repayments” to see what your
          monthly repayments would be.
        </p>
      </div>
    </div>
  );
};

export default Result;
