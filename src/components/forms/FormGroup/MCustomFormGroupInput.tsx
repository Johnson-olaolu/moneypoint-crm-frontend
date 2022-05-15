import React from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

interface IMCustomFromGroupInput {
  ref: React.Ref<HTMLInputElement>;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  errorMsg?: string | null;
  isRequired: boolean;
  type: string;
}
const MCustomFromGroupInput: React.FC<IMCustomFromGroupInput> = React.forwardRef((props, ref) => {
  const { placeholder, value, onChange, onBlur, name, errorMsg, isRequired, type } = props;
  return (
    <div className=" text-left">
      <input
        className=" w-full p-4 text-sm  rounded placeholder:text-gray-300 focus-visible:outline-none 
        text-gray-800 border-blue-200 border"
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        type={type}
        ref={ref}
      />
      <p className=" text-xs mt-1 ">
        {/* <span className=" text-gray-400  font-light"> {isRequired ? "(Required)" : "(Optional)"}</span> */}
        {errorMsg && (
          <span className=" text-moneypoint-red flex gap-2 items-center">
            {" "}
            <HiOutlineExclamationCircle className="" /> {errorMsg}
          </span>
        )}
      </p>
    </div>
  );
});

export default MCustomFromGroupInput;
