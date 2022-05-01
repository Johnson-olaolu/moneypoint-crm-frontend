import axiosService from "./axios.service";

const getCategories = () => {
  return axiosService.get("/category")
  .then((res) => {
      return res.data
  })
  .catch((err) => {
      return err
  })
};

export const categoriesService = {
    getCategories
}
