import React from "react";
import { Link, useNavigate } from "react-router-dom";

const HomePage: React.FC = (): JSX.Element => {
	const navigate = useNavigate()
  return (
    <section className=" min-h-screen moneypoint-blue-gradient flex justify-center items-center">
      <div className=" text-center">
        <img src={require("../../assets/images/logo1.svg").default} alt="" className=" h-32 mx-auto" />
        <div className=" mt-12 grid grid-cols-2 gap-10">
          <div onClick={ () => {navigate("/auth/login")}} className=" h-56 w-96 bg-white rounded-lg flex items-center justify-center shadow-sm cursor-pointer hover:shadow-lg">
            <div className=" text-center space-y-3">
              <img src={require("../../assets/icons/view-issues-icon.svg").default} alt="" className=" mx-auto h-16" />
              <span className="font-medium text-moneypoint-blue  block">View your Issues</span>
            </div>
          </div>
		  <div onClick={ () => {navigate("/auth/register")}} className=" h-56 w-96 bg-white rounded-lg flex items-center justify-center shadow-sm cursor-pointer hover:shadow-lg">
            <div className=" text-center space-y-3">
              <img src={require("../../assets/icons/create-issue-icon.svg").default} alt="" className=" mx-auto h-16" />
              <span className="font-medium text-moneypoint-blue  block">Create an Issue</span>
            </div>
          </div>
        </div>
		<div className=" text-center mt-8">
			<Link to ="/login" className=" text-white">Signup / Login as an Agent</Link>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
