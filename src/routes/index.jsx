import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Header from "../components/Header";
import Skills from "../components/Skills"
import Projects from "../components/Projects"
export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <h3> Page Note Found 🙄 ... </h3>,
        children: [
            {
                path: "/",
                element: <Header />,
            },

            {
                path: "/Skills",
                element: <Skills />,
            },
            {
                path: "/Projects",
                element: <Projects />
                  
                ,
            },

        ],
    },
    //   {
    //     path: "/login",
    //     element: <LoginFormTabs />,
    //     errorElement: <h3 className="block mx-auto mt-10"> Page Note Found 🙄 ... </h3>,
    //     children: [
    //       {
    //         path: "/login",
    //         element: <LoginFormTabs />,
    //       },
    //     ],
    //   },
]);