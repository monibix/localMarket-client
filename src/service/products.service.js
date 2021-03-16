import axios from 'axios';

const productsApi = axios.create({
    baseURL: `${process.env.REACT_APP_API}/products`,
    withCredentials: true,
})

export const createProduct = (product) => productsApi.post("/add", product)

export const getMyProducts = () => productsApi.get("/myProducts")

export const getMyProduct = (productId) => productsApi.get(`/${productId}`)

export const editProduct = (productId, body) => productsApi.put(`/${productId}`, body)

export const deleteProduct = (productId) => productsApi.delete(`/${productId}`)

export const uploadProductImage = (file) => productsApi.post("/upload", file)

//export const getProductsByCategory = (category) => productsApi.get(`/category?category=${category}`)

//export const getProductByCategory = (productId) => productsApi.get(`/category?category=joyeria/${productId}`)