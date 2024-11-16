import axios from "axios";
import { BASE_URL } from "../const/data";

const request = axios.create({
  baseURL: BASE_URL,
});

request.interceptors.response.use(
  (request) => request,
  (error) => {
    // if (error.response.status === 401) {
    //     console.log('auth');
    // } else if (error.response.status === 500) {
    //     console.log('server');
    // } else {
    //     console.log(error.response.data.message);
    // }
    return Promise.reject(error);
  }
);

export default request;
