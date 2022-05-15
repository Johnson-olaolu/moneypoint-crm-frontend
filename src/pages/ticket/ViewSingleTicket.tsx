import React, { useEffect, useState } from "react";
import { QueryKey, useMutation, useQuery, useQueryClient } from "react-query";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import MCustumSelect from "../../components/forms/MCustomSelect";
import TicketStatusTypes from "../../components/statusTypes/TicketStatusTypes";
import { iTicket } from "../../interfaces/ticket.interface";
import { db } from "../../services/firebase.service";
import { ticketService } from "../../services/ticket.service";
import TicketChat from "./components/TicketChat";

const ViewSingleTicket = () => {
  const { ticketRef } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [ticketData, setTicketData] = useState<iTicket>()
  useEffect(() => {
    
    setTicketData( queryClient.getQueryData("ticket"))
    // console.log(queryClient.getQueryData("ticket"));
  }, [queryClient])

  const ticketQuery = useQuery(["ticket", ticketRef], () => ticketService.getTicketByRef(ticketRef!));

  useEffect(() => {
    if(ticketQuery.isSuccess) {
      setTicketData(ticketQuery.data);
    }
  }, [ticketQuery])

  const closeTicketMutation = useMutation( async ( ticketId : number)=> {
    return await ticketService.closeTicket(ticketId)
  }, {
    onSuccess : ( data ) => {
      setTicketData(data)
    }
  })


  return (
    <section className=" py-12  moneypoint-blue-gradient min-h-screen" >
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-end">
        <Link to="/" ><img src={require("../../assets/icons/monie-point-logo.svg").default} alt="" /></Link> 
        </div>
        <div className="p-10  rounded-lg bg-moneypoint-light-blue">
          <h2 className=" text-gray-800 font-medium text-2xl mb-6"> Issue #{ticketRef}</h2>
          <div className=" bg-white rounded-lg shadow-sm px-5 py-6">
            <div className=" flex border-b border-gray-300">
              <div className=" space-y-1 pb-4  grow">
                <h4 className=" text-lg text-gray-800 font-medium">{ticketData?.title}</h4>
                <span className=" text-sm text-gray-400">Opened 16 hours ago</span>
              </div>
              <div className="space-y-1 pl-4 pb-4 border-l w-80 shrink-0">
                <label className=" text-lg text-gray-800 font-medium">Customer Support</label>
                <span className="text-sm text-gray-400 block"> {ticketData?.assigned ?  `${ticketData.assigned.user.firstName} ${ticketData.assigned.user.lastName}` : "Assigned"} </span>
              </div>
            </div>
            <div className="flex">
              <div className=" space-y-1 pt-4 pr-4  grow">
              <TicketChat ticketRef={ticketData?.ticketRef!} />
              </div>
              <div className="space-y-5 pl-4 pt-4 border-l w-80 shrink-0">
                <div className=" space-y-2">
                  <span className=" text-xs text-gray-600 uppercase  block">Issue Status</span>
                  <TicketStatusTypes status={ticketData?.status!} />
                </div>
                <div className=" space-y-2">
                  <span className=" text-xs text-gray-600 uppercase  block">Issue category</span>
                  <p className=" text-lg text-gray-800 font-medium">{ticketData?.category.title}</p>
                </div>
                <div className=" space-y-2">
                  <span className=" text-xs text-gray-600 uppercase  block">Attached Files</span>
                  <div className="">Attached Image div</div>
                </div>
                <div className="space-y-2">
                  <button onClick={() => { closeTicketMutation.mutateAsync(ticketData?.id!)}} className=" rounded bg-moneypoint-red text-white w-full h-12 font-medium capitalize">Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViewSingleTicket;
