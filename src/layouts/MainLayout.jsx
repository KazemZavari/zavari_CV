import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import React from "react";
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
