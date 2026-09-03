

const BASE_URL = "http://localhost:3001";

export const GetAll = async () => {
  const response = await fetch(`${BASE_URL}/products`, {
    cache: 'no-store' 
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return await response.json();
};

//#region  Post Product
export const Post = async (body) => {
  const res = await fetch(`${BASE_URL}/products`,{
    method:'POST',
    
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(body)

  })
  if(!res.ok){
    throw new Error("خطای درج محصول")
  }
return await res.json()
}
//#endregion
