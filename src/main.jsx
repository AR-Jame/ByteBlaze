import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Home from './Components/Home';
import Blogs from './Components/Blogs';
import Bookmarks from './Components/Bookmarks';
import BlogDetails from './Components/BlogDetails';
import AuthContext from './AuthContext/AuthContext';
import Register from './Components/Register';
import Login from './Components/Login';
import PrivateRoute from './Components/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/blogs",
        element: <Blogs />,
        loader: () => fetch("https://dev.to/api/articles?per_page=20?per_page&top=7")
      },
      {
        path: "/bookmarks",
        element: <PrivateRoute><Bookmarks /></PrivateRoute>
      },
      {
        path: `/blog/:id`,
        element: <BlogDetails />,
        loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`)
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/login",
        element: <Login />
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContext>
      <RouterProvider router={router} />
    </AuthContext>
  </StrictMode>,
)
