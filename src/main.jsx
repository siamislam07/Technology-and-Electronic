import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/Errorpage/ErrorPage.jsx';
import AddProduct from './components/AddProduct/AddProduct.jsx';
import MyCart from './components/MyCart/MyCart.jsx';
import Login from './components/Login&Register/Login.jsx';
import AuthProvider from './components/provide/AuthProvider.jsx';
import Register from './components/Login&Register/Register.jsx';
import Home from './components/Home/Home.jsx';
import PrivateRoute from './components/privateRoute/PrivateRoute.jsx';
import CardDetails from './components/Home/CardDetails.jsx';
import Item from './components/item/item.jsx';
import Update2 from './components/update/Update2.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/data.json')
      },
      {
        path: '/addProduct',
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path: '/myCart',
        element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
        loader:() => fetch('https://b8a10-brandshop-server-side-siamislam07-mudx9vqxa.vercel.app/cart/')
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/update/:id',
        element: <PrivateRoute><Update2/></PrivateRoute>,
        loader: ({params}) => fetch(`https://b8a10-brandshop-server-side-siamislam07-mudx9vqxa.vercel.app/product/${params?.id}`)
      },
      {
        path: '/details/:brandName',
        element: <PrivateRoute><CardDetails></CardDetails></PrivateRoute>,
        loader: () => fetch('https://b8a10-brandshop-server-side-siamislam07-mudx9vqxa.vercel.app/product')
      },
      {
        path:'/item/:id',
        element: <PrivateRoute><Item></Item></PrivateRoute>,
        loader: (object) =>fetch(`https://b8a10-brandshop-server-side-siamislam07-mudx9vqxa.vercel.app/product/${object.params.id}`)
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
