import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ViewSingleTicket from "./ViewSingleTicket";


const TicketRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/:ticketRef" element ={<ViewSingleTicket/>} />
        <Route path="/*" element ={<Navigate to="/404"/>} />
      </Routes>
    </>
  );
};

export default TicketRoutes;
