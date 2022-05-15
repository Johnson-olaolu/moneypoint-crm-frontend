import * as Yup from 'yup'
export const ticketRefFormSchema = Yup.object().shape({
    ticketRef : Yup.string().min(30, "ticketRef must be a minimum of 30 characters").required("Please Enter Valid Ticket Ref")
})


export const registerTicketFormSchema= Yup.object().shape({
    title : Yup.string().required(" Ticket title is required "),
    description : Yup.string().required(" Ticket description is required "),
    email: Yup.string().email().required(" User Email is required"),
    categoryId : Yup.number().required(" Please Select a Category"),
    subCategory : Yup.string().required(" Please Select a Sub-Category"),
    agentEmail: Yup.string().email()
})