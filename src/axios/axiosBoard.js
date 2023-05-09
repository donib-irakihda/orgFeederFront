import axios from "axios";

const baseURL = "http://localhost:8000/orgFeeder/api/";

const api = axios.create({
  baseURL: baseURL,
});

export const createBoard = async (data) =>
  api.post("board/create-board", data, {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

export const getBoard = async (id) =>
  api.get(`board/get-board/org/${id}`, {
    headers: {
      "Content-type": "application/json",
    },
  });

export const getPosts = async (id) =>
  api.get(`post/get-post/board/${id}`, {
    headers: {
      "Content-type": "application/json",
    },
  });

export const createPost = async (data) =>
  api.post("post/create-post", data, {
    headers: {
      "Content-type": "application/json",
    },
  });

export default api;
