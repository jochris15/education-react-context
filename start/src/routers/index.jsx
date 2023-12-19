import { createBrowserRouter, redirect } from "react-router-dom";
import LoginPage from '../views/LoginPage'
import BaseLayout from '../views/BaseLayout'
import HomePage from '../views/HomePage'
import DetailPage from '../views/DetailPage'
import AddPage from '../views/AddPage'
import EditPage from '../views/EditPage'
import Swal from 'sweetalert2'

const url = 'https://phase2-aio.vercel.app'

const router = createBrowserRouter([
    {
        path: "/login",
        element: <LoginPage url={url} />,
        loader: () => {
            if (localStorage.access_token) {
                Swal.fire({
                    title: 'Ngapain cuk?????',
                    icon: 'question'
                });
                return redirect('/')
            }

            return null
        },
    },
    {
        element: <BaseLayout />,
        loader: () => {
            if (!localStorage.access_token) {
                Swal.fire({
                    title: 'login cuk!!',
                    icon: 'warning'
                });
                return redirect('/login')
            }

            return null
        },
        children: [
            {
                path: "/",
                element: <HomePage url={url} />
            },
            {
                path: "/detail/:id",
                element: <DetailPage url={url} />
            },
            {
                path: "/add",
                element: <AddPage url={url} />
            },
            {
                path: "/edit/:id",
                element: <EditPage url={url} />
            },
        ]
    }
]);

export default router