import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import MainLayout from "../Layouts/MainLayout";
import Wishlist from "../Pages/Wishlist";
import ProductDetails from "../Pages/ProductDetails";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement:<ErrorPage />,
        hydrateFallbackElement: <p>Loading...</p>,
        children:[
            {
                index:true,
                loader:()=> fetch('./data.json'),
                element: <Home />
            },
            {
                path: '/products',
                element: <Products />
            },
            {
                path: '/wishlist',
                element: <Wishlist />
            },
            {
                path: '/product/:id',
                element: <ProductDetails />
            },

        ]
    },
// {
//     path:'*',
//     element:<ErrorPage />,
// }

])

export default router