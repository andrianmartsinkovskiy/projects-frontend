import axios from "axios";

const axiosAuthorized = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

axiosAuthorized.interceptors.request.use((req) => {
  const token = localStorage.getItem("Authorization");

  // @ts-ignore
  req.headers = {
    ...req.headers,
    Authorization: `Token ${token}`,
  };

  return req;
});

export { axiosAuthorized };