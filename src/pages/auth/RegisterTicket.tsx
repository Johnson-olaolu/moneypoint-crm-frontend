import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import MCustomFormGroupFileUpload from "../../components/forms/FormGroup/MCustomFormGroupFileUpload";
import MCustomFromGroupInput from "../../components/forms/FormGroup/MCustomFormGroupInput";
import MCustomFormGroupSubmit from "../../components/forms/FormGroup/MCustomFormGroupSubmit";
import MCustomFormGroupTextArea from "../../components/forms/FormGroup/MCustomFormGroupTextArea";
import MCustumFormGroupSelect from "../../components/forms/FormGroup/MCustumFormGroupSelect";

const customData = [
  { name: "category1", value: "category1" },
  { name: "category2", value: "category2" },
  { name: "category3", value: "category3" },
  { name: "category4", value: "category4" },
];

const RegisterTicket = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    subCategory: "",
    email: "",
    agentUsername: "",
  });

  const inputRef = useRef<HTMLInputElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSelect = (name: string, value: any) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <section className=" min-h-screen moneypoint-blue-gradient py-12 ">
      {/* <div className="max-w-5xl mx-auto ">
        <img className=" h-20 mx-auto" src= {require("../../assets/icons/monie-point-logo.svg").default} alt="" />
      </div> */}
      <form className=" rounded-sm bg-blue-100  text-center py-14 px-20 max-w-5xl mx-auto">
        <h2 className=" text-2xl text-gray-800 font-medium">Create a Ticket</h2>
        <div className="mt-10 space-y-4">
          <MCustomFromGroupInput
            name="title"
            isRequired={true}
            onChange={handleChange}
            placeholder="Enter Title"
            value={formData.title}
            ref={inputRef}
            type="text"
          />
          <MCustomFormGroupTextArea
            name="description"
            isRequired={true}
            onChange={handleChange}
            placeholder="Enter Description"
            ref={textAreaRef}
            value={formData.description}
          />
          <MCustumFormGroupSelect
            name="category"
            data={customData}
            onSelect={onSelect}
            placeholder="Select A Category"
            value={formData.category}
            isRequired={true}
          />
          <MCustumFormGroupSelect
            name="subCategory"
            data={customData}
            onSelect={onSelect}
            placeholder="Select A Sub-Category"
            value={formData.category}
            isRequired={true}
          />
          <MCustomFromGroupInput
            name="email"
            isRequired={true}
            onChange={handleChange}
            placeholder="Enter Email Address"
            value={formData.title}
            ref={inputRef}
            type="email"
          />
          <MCustomFromGroupInput
            name="agentUsername"
            isRequired={false}
            onChange={handleChange}
            placeholder="Enter Agent Username"
            value={formData.title}
            ref={inputRef}
            type="text"
          />

          <MCustomFormGroupFileUpload isRequired={false} name="file" />
          <MCustomFormGroupSubmit onClick={() => {}} />
        </div>
        <Link to="/auth/view-faq" className=" text-moneypoint-blue mt-5 flex items-center gap-x-2 justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
          </svg>
          View Faqs
        </Link>
      </form>
      <Link to="/" className=" text-white mt-5 flex items-center gap-x-2 justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
          </svg>
          Return Home
        </Link>
    </section>
  );
};

export default RegisterTicket;
