import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Components/Home/Home';
import Blog from './Components/Blog/Blog';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs';
import Statistics from './Components/Statistics/Statistics';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path:"/",
        element: <Statistics></Statistics>,
        loader: () => fetch('fakeData.json')
      },
      {
        path:"/appliedJobs",
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path:"/blog",
        element:<Blog></Blog>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
