import { redirect } from "react-router-dom";

export async function NewProductAction({request}){
    const formData = await request.formData();
    const productData = Object.fromEntries(formData.entries());
    await fetch('http://localhost:5173/products', {
        method: 'POST',
        body: JSON.stringify(productData),
        headers:{
            'content-type': 'application/json',
        }
    })
    alert('Insert product sucessful');
    return redirect('products');
}