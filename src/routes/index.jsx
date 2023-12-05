import { Link, createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../components/Home";
import Skills2 from "../components/Skills2";
import About from "../components/About";
import Contact from "../components/Contact";
 
import Projects from "../components/Projects"
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
                element: <Skills2 />,
            },
            {
                path: "/education",
                element: <Projects />
            },
            {
                path: "/contact",
                element: <Contact />
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
