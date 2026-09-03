import { useEffect, useState } from "react"
import { GetAll } from "../service/CategoryService";

export const useCategory = () => {

    const [categories, setCategories] = useState([]);

useEffect(()=>{
        const fetchData = async () => {
        try {
            const res = await GetAll();
            setCategories(res);
        } catch (error) {
            console.log(error)
        }
    }
    fetchData()
},[])

    return {categories}

}