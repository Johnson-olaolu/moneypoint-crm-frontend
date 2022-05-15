import { AxiosError } from "axios";
import { iTicket } from "../interfaces/ticket.interface";
import { ticketStatusTypes } from "../utils/constants";
import axiosService from "./axios.service";

const createNewTicket = (payload: {
  title: string;
  description: string;
  email: string;
  categoryId: number;
  subCategory: string;
  agentEmail?: string;
}) : Promise<iTicket> => {
    return axiosService.post("/ticket", payload)
        .then(res => {
            return res.data
        })
        .catch(err => {
            return Promise.reject(err)         
        })
};

const getTicketByRef = (ticketRef: string): Promise<iTicket> => {
  return axiosService.get(`/ticket/ref/${ticketRef}`)
    .then(res => {
      return res.data
    })
    .catch((err)=> {
      return Promise.reject(err)
    })
}

const sendNewMessage  = (payload : { userId? : string, message : string, ticketRef : string  , sentAt : Date }) => {
  const {message, ticketRef, userId , sentAt} = payload
  return axiosService.post(`/ticket/message/${ticketRef}` , {message, userId, sentAt})
      .then(res => {
          return res.data
      })
      .catch(err => {
          console.error(err)
      })
}

const closeTicket = ( ticketId : number) : Promise<iTicket> => {
  const status = ticketStatusTypes.CLOSED 
  return axiosService.post(`/ticket/status/${ticketId}`, {status})
      .then(res => {
        return res.data
      })
      .catch(err => {
        console.error(err)
        return Promise.reject()
      })
}

export const ticketService = {
  createNewTicket,
  getTicketByRef,
  sendNewMessage,
  closeTicket
};
