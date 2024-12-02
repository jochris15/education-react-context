import { createBrowserRouter, redirect } from "react-router-dom";
import LoginPage from "../views/LoginPage"
import HomePage from '../views/HomePage'
import AddProductPage from "../views/AddProductPage";
import DetailPage from "../views/DetailPage";
import BaseLayout from "../views/BaseLayout";
import Toastify from 'toastify-js'

const router = createBrowserRouter([
    {
        path: "/login",
        element: <LoginPage />,
        loader: () => {
            if (localStorage.access_token) {
                Toastify({
                    text: "You already logged in",
                    duration: 3000,
                    newWindow: true,
                    close: true,
                    gravity: "bottom", // `top` or `bottom`
                    position: "right", // `left`, `center` or `right`
                    stopOnFocus: true, // Prevents dismissing of toast on hover
                    style: {
                        background: "#F87171",
                        color: "#000000"
                    }
                }).showToast();
                return redirect('/')
            }

            return null
        }
    },
    {
        element: <BaseLayout />,
        loader: () => {
            if (!localStorage.access_token) {
                Toastify({
                    text: "Please log in first",
                    duration: 3000,
                    newWindow: true,
                    close: true,
                    gravity: "bottom", // `top` or `bottom`
                    position: "right", // `left`, `center` or `right`
                    stopOnFocus: true, // Prevents dismissing of toast on hover
                    style: {
                        background: "#F87171",
                        color: "#000000"
                    }
                }).showToast();
                return redirect('/login')
            }

            return null
        },
        children: [
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "/add",
                element: <AddProductPage />
            },
            {
                path: "/detail/:id",
                element: <DetailPage />
            }
        ]
    },
]);

export default router