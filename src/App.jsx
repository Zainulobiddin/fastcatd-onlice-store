import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./components/layout/layout"
import Home from "./pages/home/home"
import Contact from "./pages/contact/contact"
import About from "./pages/about/about"
import SignUp from "./pages/sign-up/sign-up"
import LogIn from "./pages/log-in/log-in"
import AllProducts from "./pages/all-products/all-products"
import Wishlist from "./pages/wishlist/wishlist"
import Info from "./components/info/info"
import Card from "./components/card/card"
import Checkout from "./components/checkout/checkout"
import MyAccount from "./components/my-account/my-account"
import CategoryByID from "./components/categoty-by-id/categoryByID"

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/contact',
          element: <Contact/>
        },
        {
          path: '/about',
          element: <About/>
        },
        {
          path: '/sign-up',
          element: <SignUp/>
        },
        {
          path: '/log-in',
          element: <LogIn/>
        },
        {
          path: '/all-products',
          element: <AllProducts/>
        },
        {
          path: '/wishlist',
          element: <Wishlist/>
        },
        {
          path: '/products/:id',
          element: <Info/>
        },
        {
          path: '/card',
          element: <Card/>
        },
        {
          path: '/checkout',
          element: <Checkout/>
        },
        {
          path: '/my-account',
          element: <MyAccount/>
        },
        {
          path: '/category-by-id/:id',
          element: <CategoryByID/>
        },
      ]
    }
  ])
  return <RouterProvider router={router} />
}
