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
import JobDetails from './Components/JobDetails/JobDetails';
import MainHome from './Components/MainHome/MainHome';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path:"/",
        element: <MainHome></MainHome>,
        loader: () => fetch('fakeData.json')
      },
      {
        path:"/Statistics",
        element:<Statistics></Statistics>
      },
      {
        path:"/appliedJobs",
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path:"/blog",
        element:<Blog></Blog>
      },
      {
        path:"/jobDetails",
        element:<JobDetails></JobDetails>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
