import axiosService from "./axios.service";

const createNewTicket = (payload: {
  title: string;
  description: string;
  email: string;
  categoryId: number;
  subCategory: string;
  agentEmail?: string;
}) => {
    return axiosService.post("/ticket", payload)
        .then(res => {
            return res.data
        })
        .catch(err => {
            return err
        })
};

export const ticketService = {
  createNewTicket,
};
