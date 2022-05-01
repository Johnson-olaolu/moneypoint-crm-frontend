import { ticketStatusTypes } from "../utils/constants"

export interface iTicketData {
    title : string
    description : string
    status : ticketStatusTypes,
    email : string,
    category : string,
    ticketRef : string,
    agentEmail? : string,
    createdAt : Date,
    UpdatedAt : Date, 
}

