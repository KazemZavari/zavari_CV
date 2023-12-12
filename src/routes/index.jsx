import { Link, createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../components/Home";
import Skills from "../components/Skills";
import About from "../components/About";
// import Contact from "../components/Contact";
// import Projects from "../components/Projects"
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
            // {
            //     path: "/contact",
            //     element: <Contact />
            // },

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
