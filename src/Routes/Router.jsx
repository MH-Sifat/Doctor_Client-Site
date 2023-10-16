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
import AdminRoute from "./AdminRoute/AdminRoute";
import AddDoctor from "../components/DashBoard/AddDoctor/AddDoctor";
import ManageDoctors from "../components/DashBoard/ManageDoctors/ManageDoctors";
import AddNewDoctor from "../components/DashBoard/AddNewDoctor/AddNewDoctor";
import Payment from "../components/DashBoard/Payment/Payment";

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
                path: '/dashboard/allUsers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/addDoctor',
                element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute>
            },
            {
                path: '/dashboard/addNewDoctor',
                element: <AdminRoute><AddNewDoctor></AddNewDoctor></AdminRoute>
            },
            {
                path: '/dashboard/ManageDoctors',
                element: <AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>
            },
            {
                path: '/dashboard/payment/:id',
                loader: ({ params }) => fetch(`https://final-project-server-xi.vercel.app/bookings/${params.id}`),
                element: <Payment></Payment>
            }
        ]
    }
])

export default router;