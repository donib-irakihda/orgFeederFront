import axios from "axios";

const baseURL = "http://localhost:8000/orgFeeder/api/";

const api = axios.create({
  baseURL: baseURL,
});

export const signup = async (data) =>
  api.post("user/register", data, {
    headers: {
      "Content-type": "application/json",
    },
  });

export const login = async (data) =>
  api.post("user/login", data, {
    headers: {
      "Content-type": "application/json",
    },
  });

export default api;
