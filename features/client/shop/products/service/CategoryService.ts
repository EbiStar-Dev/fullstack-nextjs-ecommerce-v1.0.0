const BASE_URL = "http://localhost:3001";

export const GetAll=async()=>{
const res = fetch(`${BASE_URL}/categories`);
return (await res).json();
}