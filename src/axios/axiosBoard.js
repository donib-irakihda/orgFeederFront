import axios from "axios";

const baseURL = "http://localhost:8000/orgFeeder/api/";

const api = axios.create({
  baseURL: baseURL,
});

export const createPost = async (data) =>
  api.post("post/create-post", data, {
    headers: {
      "Content-type": "application/json",
    },
  });

export const getPosts = async (id) =>
  api.get(`/post/get-post/board/${id}`, {
    headers: {
      "Content-type": "application/json",
    },
  });
export default api;
