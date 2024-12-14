export async function ProductsDetailsLoader(params){
    const response = await fetch('http://localhost:5173/products/'+params.id);
    const resData = await response.json();
    return resData;
}