import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/ErrorPage.jsx';
import AddProduct from './components/AddProduct/AddProduct.jsx';
import MyCart from './components/MyCart/MyCart.jsx';
import Login from './components/Login&Register/Login.jsx';
import AuthProvider from './components/provide/AuthProvider.jsx';
import Register from './components/Login&Register/Register.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:'/addProduct',
        element: <AddProduct></AddProduct>
      },
      {
        path:'/myCart',
        element:<MyCart></MyCart>,

      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
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
