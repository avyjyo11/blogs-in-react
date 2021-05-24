import axios from "axios";

const jsonPlaceholder = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

jsonPlaceholder.interceptors.response.use((response) => response?.data);

export default jsonPlaceholder;
