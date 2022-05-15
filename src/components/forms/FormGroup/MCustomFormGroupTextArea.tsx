import React from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

interface IMCustomFormGroupTextArea {
  ref: React.Ref<HTMLTextAreaElement>;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  name: string;
  errorMsg?: string | null;
  isRequired: boolean;
}
const MCustomFormGroupTextArea: React.FC<IMCustomFormGroupTextArea> = React.forwardRef((props, ref) => {
  const { placeholder, value, onChange, onBlur, name, errorMsg, isRequired } = props;
  return (
    <div className=" text-left">
      <textarea
        className=" w-full p-4 text-sm h-28  placeholder:text-gray-300 focus-visible:outline-none 
        text-gray-800 resize-none rounded border border-blue-200 -mb-2"
        value={value}
        name={name}
        id=""
        placeholder={placeholder}
        ref={ref}
        onChange={onChange}
        onBlur={onBlur}
      ></textarea>
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

export default MCustomFormGroupTextArea;
