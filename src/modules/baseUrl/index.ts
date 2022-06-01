import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:5555/",
});

export default api;
