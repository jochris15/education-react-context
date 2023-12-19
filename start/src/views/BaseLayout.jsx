import { Outlet } from "react-router-dom";
import Nav from '../components/Nav'


export default function BaseLayout() {
    return (
        <div className="px-20">
            <Nav />
            <Outlet />
        </div>
    )
}