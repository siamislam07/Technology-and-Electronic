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
import UpdateProduct from './components/UpdateProduct/UpdateProduct.jsx';

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
        path: '/details/:brandName',
        element: <PrivateRoute><CardDetails></CardDetails></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/product')
      },
      {
        path: '/updateProduct/:id',
        element:<UpdateProduct></UpdateProduct>,
        loader: ({params})=> fetch(`http://localhost:5000/product/${params.id}`)
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
