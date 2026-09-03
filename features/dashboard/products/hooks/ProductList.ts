
import { useEffect, useState } from "react"
import { GetAll } from "../services/ProductService";

export const useProduct=()=>{
const [products,setProducts] = useState([]);
const [loading,setLoading] = useState(true);

useEffect(()=>{
const fetchData =async()=>{
  try {
  const res = await GetAll();
  setProducts(res.reverse());
  console.log("داده دریاقت شد!");
  setLoading(false)
} catch (error) {
  console.log("داده ای یاقت نشد !",error)
}}
fetchData()
},[]);
const formatPrice = (price: number) => {
  return price.toLocaleString("fa-IR");
};
return {products,loading,formatPrice}
}