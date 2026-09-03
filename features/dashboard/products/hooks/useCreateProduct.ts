import { useEffect, useState } from "react"
import { Post } from "../services/ProductService"
import { imageOptimizer } from "next/dist/server/image-optimizer"

export const useCreateProduct = () => {
    const [product, setproduct] = useState({})
    const [slug, setSlug] = useState("")
    const [ChangeInput, setChangeInput] = useState({})

    const handleChange = (e) => {
        setChangeInput({ ...ChangeInput, [e.target.name]: e.target.value })
    }
    const SubmitForm = (e) => {
        e.preventDefault();
        Post(ChangeInput)
        console.log("ok")
    }
useEffect(()=>{
    const image =()=>{
        const img = ChangeInput["image"];
        console.log(img)
        sessionStorage.setItem("image" ,img)
    }
    image()
    setSlug(localStorage.getItem("image"))
},[ChangeInput["image"]])

    

    return { handleChange,SubmitForm,slug }
}