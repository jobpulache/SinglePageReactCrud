import {createBrowserRouter}from 'react-router-dom';
import Layout from '../components/layout';
import Home from '../pages/Home';
import Products from '../pages/Products';
import FormNewProduct from '../components/FormNewProduct';
import ProductDetails from '../components/ProductDetails';
import { productsLoader } from '../services/loaders/ProductsLoader';
import { ProductsDetailsLoader } from '../services/loaders/ProductDetailsLoader';
import {NewProductAction} from '../services/actions/NewProductAction';

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
                {path: '/products/:id', element: <ProductDetails/>, loader:ProductsDetailsLoader}
            ]
        },
        {
            path: '/*',
            element: <NotFound/>
        },
    ]
})