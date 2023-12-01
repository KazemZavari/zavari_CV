import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";


const MainLayout = () => {
    return (
        <>
<Navbar />
            <div>
            
                <Outlet />
            </div>


        </>
    );
};

export default MainLayout;
