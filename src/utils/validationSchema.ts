import * as Yup from 'yup'
export const ticketRefFormSchema = Yup.object().shape({
    ticketRef : Yup.string().min(30, "ticketRef must be a minimum of 30 characters").required("Please Enter Valid Ticket Ref")
})
