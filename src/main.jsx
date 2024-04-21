import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import User from './Components/User.jsx';
import Update from './Components/Update.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    
  },
  {
    path:'/user',
    element:<User></User>,
    loader:()=>fetch('http://localhost:5000/user')

  },
  {
    path:'/user/:id',
    element:<Update></Update>,
    loader:({params})=>fetch(`http://localhost:5000/user/${params.id}`)
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
