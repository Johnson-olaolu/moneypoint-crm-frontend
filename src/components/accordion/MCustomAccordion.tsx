import React from "react";
import { IFaq } from "../../interfaces/category.interface";

interface IMCustomAccordion {
  category: string;
  subCategories: string[];
  faqs: IFaq[];
}

const MCustomAccordion: React.FC<IMCustomAccordion> = (props) => {
  const { category, faqs, subCategories } = props;
  const showDropdown = (e: React.MouseEvent<HTMLDivElement>) => {
    const nextDiv = e.currentTarget.nextElementSibling;
    if (e.currentTarget.classList.contains("body-hidden")) {
      nextDiv?.classList.remove("hidden");
      e.currentTarget.classList.remove("body-hidden");
    } else {
      nextDiv?.classList.add("hidden");
      e.currentTarget.classList.add("body-hidden");
    }
  };

  return (
    <div className="accordion text-left">
      <div className="accordion-wrapper bg-white shadow-md rounded-md p-4">
        <div className="accordion-title flex justify-between items-center cursor-pointer body-hidden" onClick={showDropdown}>
          <h4 className=" flex items-center text-gray-800 font-medium capitalize">
            <svg className=" mr-4" width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="3" cy="3" r="3" fill="#0361F0" />
            </svg>
            {category} FAQs
          </h4>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-moneypoint-blue"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <div className="accordion-body px-8 mt-4 hidden space-y-4">
          {subCategories.map((subcategory) => (
            <div className=" accordion-subtitle">
              <div
                className="accordion-subtitle-title flex justify-between items-center bg-blue-50 px-4 py-3 rounded-md cursor-pointer body-hidden"
                onClick={showDropdown}
              >
                <h5 className=" flex items-center text-gray-800 font-medium capitalize">{subcategory}</h5>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-moneypoint-blue"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              {faqs
                .filter((faq) => faq.category.title === category && faq.subCategory === subcategory)
                .map((faq) => (
                  <div className="accordion-subtitle-body pl-4 py-4 hidden">
                    <h6 className=" text-sm text-gray-800 ">{faq.question}</h6>
                    <p className="mt-5 text-sm font-light text-gray-600">
                      {faq.solution}
                    </p>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MCustomAccordion;
