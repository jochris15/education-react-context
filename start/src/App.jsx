import { RouterProvider } from "react-router-dom";
import router from "./router";

export default function App() {
    return (
        <>
            <div className="p-5">
                <RouterProvider router={router} />
            </div >
        </>
    )
}