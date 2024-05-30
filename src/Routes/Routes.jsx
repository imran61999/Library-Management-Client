import { createBrowserRouter, } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Error from "../Pages/Error/Error";
import AddBook from "../Pages/AddBook/AddBook";
import AllBook from "../Pages/AllBook/AllBook";
import Update from "../Pages/Update/Update";
import SameCategory from "../Pages/SameCategory/SameCategory";
import Details from "../Pages/Details/Details";
import BorrowedBooks from "../Pages/BorowedBooks/BorrowedBooks";
import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute";
import Dashboard from "../Layout/Dashboard";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/addBook',
          element:<PrivateRoute><AddBook></AddBook></PrivateRoute>,
          loader:()=> fetch('http://localhost:5000/books')
        },
        {
          path:'/allBook',
          element:<PrivateRoute><AllBook></AllBook></PrivateRoute>
        },
        {
          path:'/update/:id',
          element: <Update></Update>,
          loader: ({params})=>fetch(`http://localhost:5000/updateBook/${params.id}`)
        },
        {
          path:'/sameCategory/:category',
          element:<SameCategory></SameCategory>,
          loader: ({params})=>fetch(`http://localhost:5000/sameCategory/${params.category}`)
        },
        {
          path:'/details/:id',
          element:<PrivateRoute><Details></Details></PrivateRoute>,
          // loader: ({params})=>fetch(`http://localhost:5000/details/${params.id}`)
        },
        {
          path:'/borrowedBooks',
          element:<PrivateRoute><BorrowedBooks></BorrowedBooks></PrivateRoute>
        }
      ]
    },
    {
      path:"/dashboard",
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:'borrowedBooks',
          element:<BorrowedBooks></BorrowedBooks>
        },
        {
          path:'addBook',
          element:<AddBook></AddBook>
        }
      ]
    }
  ]);
  