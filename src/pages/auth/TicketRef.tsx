import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import MCustomInput from "../../components/forms/MCustomInput";
import MCustomSubmit from "../../components/forms/MCustomSubmit";



const TicketRef = () => {
  const [formData, setFormData] = useState({
    ticketRef: "",
  });
  const [errMsg, setErrMsg] = useState(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <section className=" min-h-screen moneypoint-blue-gradient flex justify-center items-center">
      <form className=" text-center max-w-xl mx-auto">
        <h2 className=" text-white text-5xl font-medium">Issue Details</h2>
        <p className=" text-white text-3xl mt-12 mb-20">Enter your Issue ID to view the updates about your issue</p>
        <div className=" space-y-40">
          <MCustomInput
          name="ticketRef"
          value={formData.ticketRef}
          errorMsg={errMsg}
          placeholder="Input Code"
          onChange={handleChange}
          label="Enter Issue ID here"
          ref={inputRef}
          type = "text"
        />
        <MCustomSubmit text="Next"/>
        </div>
        <Link to="/" className=" text-white mt-5 flex items-center gap-x-2 justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
          </svg>
          Return Home
        </Link>
      </form>
    </section>
  );
};

export default TicketRef;
