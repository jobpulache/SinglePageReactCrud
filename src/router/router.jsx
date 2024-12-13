import { Children } from 'react';
import {createBrowserRouter}from 'react-router-dom';
import Layout from '../components/layout';

export const router = createBrowserRouter({
    path: '/',
    element: <Layout/>,
    children:[
        {
            path: '/',
            element: <home/>
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