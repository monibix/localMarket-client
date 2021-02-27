import axios from "axios";

const authApi = axios.create({
  baseURL: "http://localhost:4000/auth",
});

export const login = (user) => authApi.post("/login", user);

export const signup = (user) => authApi.post("/signup", user);
