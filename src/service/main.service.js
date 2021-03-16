import axios from 'axios';

const mainApi = axios.create({
    baseURL: `${process.env.REACT_APP_API}`,
    withCredentials: true,
})

export const getProductsByCategory = (category) => mainApi.get(`/category?category=${category}`)

export const getProductByCategory = (productId) => mainApi.get(`/category/${productId}`)

export const getSellerDetails = (sellerId) => mainApi.get(`/seller/${sellerId}`)

export const getSearchProducts = (search) => mainApi.get(`/query?query=${search}`)