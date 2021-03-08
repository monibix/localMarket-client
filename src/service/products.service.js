import axios from 'axios';

const productsApi = axios.create({
    baseURL: `${process.env.REACT_APP_API}/products`,
    withCredentials: true,
})

export const createProduct = (user) => productsApi.post("/add", user)