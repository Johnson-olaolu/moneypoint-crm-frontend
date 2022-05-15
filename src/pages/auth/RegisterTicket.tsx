import { AxiosError } from "axios";
import { Formik, useFormik } from "formik";
import React, { useEffect, useRef, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import MCustomModalWrapper from "../../components/modals/MCustomModalWrapper"
import MCustomFormGroupFileUpload from "../../components/forms/FormGroup/MCustomFormGroupFileUpload";
import MCustomFromGroupInput from "../../components/forms/FormGroup/MCustomFormGroupInput";
import MCustomFormGroupSubmit from "../../components/forms/FormGroup/MCustomFormGroupSubmit";
import MCustomFormGroupTextArea from "../../components/forms/FormGroup/MCustomFormGroupTextArea";
import MCustumFormGroupSelect from "../../components/forms/FormGroup/MCustumFormGroupSelect";
import { ICategory } from "../../interfaces/category.interface";
import { categoryService } from "../../services/category.service";
import { ticketService } from "../../services/ticket.service";
import { registerTicketFormSchema } from "../../utils/validationSchema";
import MCustomModalElement from "../../components/modals/MCustomModalElement";
import { iTicket } from "../../interfaces/ticket.interface";

interface IRegisterTicketForm {
  title: string;
  description: string;
  email: string;
  categoryId: number ;
  subCategory: string;
  agentEmail: string;
}

const RegisterTicket = () => {
  // const queryClient = useQueryClient();
  const navigate = useNavigate()
  const categoryQuery = useQuery("categories", categoryService.getAllCategories);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false)
  const [ticketData, setTicketData] = useState<iTicket>()

  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    if (categoryQuery.isSuccess) {
      setCategories(categoryQuery.data);
    }
  }, [categoryQuery]);

  const createTicketMutation = useMutation(
    (newTicket: { title: string; description: string; email: string; categoryId: number; subCategory: string; agentEmail?: string }) => {
      return ticketService.createNewTicket(newTicket);
    }, {
      onSuccess : (data) => {
        setTicketData(data)
        setShowConfirmationModal(true)
      },
      onError : (err : AxiosError) => {
        formik.setFieldError("agentEmail" , err.response?.data.message)
      }
    }
  );


  const inputRef = useRef<HTMLInputElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const initialValues: IRegisterTicketForm = { title: "", description: "", categoryId:0, subCategory: "", email: "" , agentEmail : ""};
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema : registerTicketFormSchema,
    onSubmit: (values) => {
      for (const key in values) {
        if (values[key as keyof IRegisterTicketForm] === '') {
          delete values[key as keyof IRegisterTicketForm];
        }
      }
      createTicketMutation.mutate(values)
    },
  });

  const onSelect = (name: string, value: any) => {
    formik.setFieldValue(name, value)
  };

  const closeCreateTicket = () => {
    setTimeout(() => {
      navigate(`/auth/ticket-ref`)
    }, 250);
  }
  
  return (
    <>
    <section className=" min-h-screen moneypoint-blue-gradient py-12 ">
      <div className="max-w-5xl mx-auto ">
        <Link to={"/"}>
        <img className=" h-20 mx-auto" src= {require("../../assets/icons/monie-point-logo.svg").default} alt="" />
        </Link>
      </div>
      <form onSubmit={formik.handleSubmit} className=" rounded-sm bg-blue-100  text-center py-14 px-20 max-w-5xl mx-auto">
        <h2 className=" text-2xl text-gray-800 font-medium">Create a Ticket</h2>
        <div className="mt-10 space-y-4">
          <MCustomFromGroupInput
            name="title"
            isRequired={true}
            onChange={formik.handleChange}
            onBlur = {formik.handleBlur}
            placeholder="Enter Title"
            value={formik.values.title}
            ref={inputRef}
            errorMsg={formik.errors.title && formik.touched.title ? formik.errors.title : null}
            type="text"
          />
          <MCustomFormGroupTextArea
            name="description"
            isRequired={true}
            onChange={formik.handleChange}
            onBlur = {formik.handleBlur}
            placeholder="Enter Description"
            ref={textAreaRef}
            value={formik.values.description}
            errorMsg={formik.errors.description && formik.touched.description ? formik.errors.description : null}
          />
          <MCustumFormGroupSelect
            name="categoryId"
            data={categories.map((category: ICategory) => ({ name: category.title, value: category.id }))}
            onSelect={onSelect}
            onBlur = {formik.handleBlur}
            placeholder="Select A Category"
            value={formik.values.categoryId}
            isRequired={true}
            errorMsg={formik.errors.categoryId && formik.touched.categoryId ? formik.errors.categoryId : null}
          />
          <MCustumFormGroupSelect
            name="subCategory"
            data={categories
              .find((category: ICategory) => category.id === formik.values.categoryId)!
              ?.subCategories.map((category: string) => ({ name: category, value: category }))}
            onSelect={onSelect}
            onBlur = {formik.handleBlur}
            placeholder="Select A Sub-Category"
            value={formik.values.subCategory}
            isRequired={true}
            errorMsg={formik.errors.subCategory && formik.touched.subCategory ? formik.errors.subCategory : null}
          />
          <MCustomFromGroupInput
            name="email"
            isRequired={true}
            onChange={formik.handleChange}
            onBlur = {formik.handleBlur}
            placeholder="Enter Email Address"
            value={formik.values.email}
            ref={inputRef}
            type="email"
            errorMsg={formik.errors.email && formik.touched.email ? formik.errors.email : null}
          />
          <MCustomFromGroupInput
            name="agentEmail"
            isRequired={false}
            onChange={formik.handleChange}
            onBlur = {formik.handleBlur}
            placeholder="Enter Agent Email"
            value={formik.values.agentEmail}
            ref={inputRef}
            type="text"
            errorMsg={formik.errors.agentEmail && formik.touched.agentEmail ? formik.errors.agentEmail : null}
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
    <MCustomModalWrapper onClose={() => {}} showModal = {showConfirmationModal}>
      <MCustomModalElement
        isSuccess  = {true}
        onClose = {closeCreateTicket}
        onCloseText= "Ok Thanks"
        text={`Check you email ${ticketData?.email} for your issue details and follow up`}
        title="Issue registered successfully"
       />
    </MCustomModalWrapper>
    </>
    
  );
};

export default RegisterTicket;
