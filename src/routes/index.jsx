import { Link, createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Header from "../components/Header";
import Skills2 from "../components/Skills2";
import About from "../components/About";
 
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
                path: "/about",
                element: <About />,
            },

            {
                path: "/skills",
                element: <Skills2 />,
            },
            {
                path: "/education",
                element: <Projects />
            },
            {
                path: "/experience",
                element: <Projects />
            },
            {
                path: "/projects",
                element: <Projects />
            },
            {
                path: "/resume",
                element: (<>the page of resume address</>)
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
