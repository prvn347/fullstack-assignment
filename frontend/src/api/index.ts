import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;
console.log(BASE_URL);
export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export const getCards = async () => {
  try {
    const resp = await axiosInstance.get("/cards");
    return resp;
  } catch (error) {
    throw new Error("Something went wrong while getting cards" + error);
  }
};
