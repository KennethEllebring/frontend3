import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8000",
});

export const getBlogs = async () => {
  const response = await api.get("/blogs");
  return response.data;
};
