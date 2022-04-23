import React from "react";

const MCustomInput = () => {
  return (
    <div className=" text-left">
      {/* error message */}
      <span className="pb-2 text-moneypoint-red text-sm px-4">Error</span>
      <div className=" pt-2 pb-4 px-4 bg-white rounded">
        <label htmlFor="mcustumInput" className=" text-sm text-money-point-alt-blue mb-2">
          label
        </label>
        <input
          type="text"
          className="w-full border-l border-money-point-alt-blue pl-1 placeholder:font-light text-2xl focus-visible:outline-0 
 placeholder:text-gray-200 text-gray-800 "
          placeholder="test"
        />
      </div>
    </div>
  );
};

export default MCustomInput;
