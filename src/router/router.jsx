import { Children } from 'react';
import {createBrowserRouter}from 'react-router-dom';
import Layout from '../components/layout';
import Home from '../pages/Home';
import Products from '../pages/Products';
import FormNewProduct from '../components/FormNewProduct';
import ProductDetails from '../components/ProductDetails';

export const router = createBrowserRouter({
    path: '/',
    element: <Layout/>,
    children:[
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/products',
            element:<Products/>,
            loader: productsLoader,
            children: [
                { path: '/products/create-product', element: <FormNewProduct/>, action: <NewProductAction/>},
                {path: '/products/:id', element: <ProductDetails/>, loader:ProductDetailsLoader}
            ]
        }
    ]
})