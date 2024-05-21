import { createBrowserRouter } from "react-router-dom";
import BaseLayout from '../views/BaseLayout'
import HomePage from '../views/HomePage'

const router = createBrowserRouter([
    {
        element: <BaseLayout />,
        children: [
            {
                path: "/",
                element: <HomePage />
            }
        ]
    }
]);

export default router