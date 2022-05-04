import { ticketStatusTypes } from "../utils/constants"
import { ICategory } from "./category.interface"

export interface iTicket {
    title : string
    description : string
    status : ticketStatusTypes
    email : string
    category: ICategory | string
    subCategory? : string
    ticketRef : string,
    agentEmail? : string
    createdAt : Date
    UpdatedAt : Date
}


