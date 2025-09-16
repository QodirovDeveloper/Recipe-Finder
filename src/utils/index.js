import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://68c0cd820b196b9ce1c51279.mockapi.io/recipes",
});