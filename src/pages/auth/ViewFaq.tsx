import React from "react";
import { useQuery, useQueryClient } from "react-query";
import { Link } from "react-router-dom";
import MCustomAccordion from "../../components/accordion/MCustomAccordion";
import { categoryService } from "../../services/category.service";

const ViewFaq = () => {
  const queryClient = useQueryClient()
  const { data} = useQuery("categories", categoryService.getAllFaq)
  console.log(data);

  return (
    <section className=" min-h-screen moneypoint-blue-gradient py-12 ">
      <div className=" rounded-sm bg-blue-100  text-center py-14 px-20 max-w-5xl mx-auto">
        <h2 className=" text-2xl text-gray-800 font-medium">Frequently asked Questions</h2>
        <div className="mt-10">
          <MCustomAccordion />
        </div>
        <Link to="/auth/register-ticket" className=" mt-5 inline-block mx-auto  px-4 py-3 bg-moneypoint-blue text-white text-sm rounded shadow ">
                Create A Ticket
        </Link>
      </div>
      <Link to="/" className=" text-white mt-5 flex items-center gap-x-2 justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
          </svg>
          Return Home
        </Link>
    </section>
  );
};

export default ViewFaq;
