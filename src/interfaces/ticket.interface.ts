import { ticketStatusTypes } from "../utils/constants"
import { ICategory } from "./category.interface"
import { ICustomerSupport } from "./customer-support.interface"

export interface iTicket {
    id : number
    title : string
    description : string
    status : ticketStatusTypes
    email : string
    assigned : ICustomerSupport
    escalated : false
    category: ICategory 
    subCategory? : string
    ticketRef : string,
    agentEmail? : string
    createdAt : Date
    UpdatedAt : Date
}


