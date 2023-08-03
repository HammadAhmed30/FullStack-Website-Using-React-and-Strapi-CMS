import axios from "axios";
import { intense } from "./axiosCreate";

export const fetchAllProducts = async () => {
    const products = intense.get("/api/products?populate=*")
    return (await products).data
}
export const fetchParticularProductUsingId = async (id) => {
    const products = intense.get("/api/products/"+id+"?populate=*")
    return products
}
export const fetchProductsOfCategory = async (category) => {
    const products = intense.get("/api/categories/"+category+"?populate=*")
    return products
}
export const getCategoriesData = async () => {
    const response =  intense.get("/api/categories?populate=*")
    return (await response).data
}
