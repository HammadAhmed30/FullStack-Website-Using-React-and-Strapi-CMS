import axios from "axios";
import { intense } from "./axiosCreate";

export const fetchAllProducts = async () => {
    const products = intense.get("/api/products?populate=*")
    return (await products).data
}
export const fetchParticularProductUsingId = async (id) => {
    const products = intense.get(`/api/products/${id}?populate=*`)
    return (await products)
}
export const fetchProductsOfCategory = async (name) => {
    const products = intense.get(`/api/categories/${name}`)
    return (await products)
}
export const getCategoriesData = async () => {
    const response =  intense.get("/api/categories?populate=*")
    return (await response).data
}
export const makingCustomRequests = async (url) => {
    const response =  intense.get(url)
    return (await response)
}
