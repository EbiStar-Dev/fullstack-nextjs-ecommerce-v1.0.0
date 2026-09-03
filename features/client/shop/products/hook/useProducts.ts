
import { useEffect, useState } from "react"
import { GetAll } from "../service/ProductService";

export const useProducts=()=>{
const [products,setProducts] = useState([]);
const [loading,setLoading] = useState(true);

useEffect(()=>{
const fetchData =async()=>{
  try {
  const res = await GetAll();
  setProducts(res);
  console.log("داده دریاقت شد!");
  setLoading(false)
} catch (error) {
  console.log("داده ای یاقت نشد !",error)
}}
fetchData()
},[]);
return {products,loading}
}