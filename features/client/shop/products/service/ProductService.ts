

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
