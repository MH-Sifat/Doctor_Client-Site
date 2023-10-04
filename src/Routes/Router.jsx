import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Appointment from "../components/Appointment/Appointment";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import DashBoard from "../components/DashBoard/DashBoard";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import DashBoardLayout from "../Layout/DashBoardLayout";
import AllUsers from "../components/DashBoard/AllUsers/AllUsers";
import MyAppointment from "../components/DashBoard/MyAppointment/MyAppointment";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/appointment',
                element: <PrivateRoute><Appointment></Appointment></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointment></MyAppointment>
            },
        {
            path:'/dashboard/allUsers',
            element:<AllUsers></AllUsers>
        }
        ]
    }
])

export default router;