import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../components/Home";
import Skills from "../components/Skills";
import About from "../components/About";
import Portfolio from "../components/Portfolio"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <h3> Page Note Found 🙄 ... </h3>,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },

            {
                path: "/skills",
                element: <Skills />,
            },
            {
                path: "/portfolio",
                element: <Portfolio />
            },
            {
                path: "/resume",
                element: (<>the page of resume address</>)
            },

        ],
    },

]);
