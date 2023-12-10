import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import HireMe from "../HireMe/HireMe";
import ContactForm from "../Contact/ContactForm";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/hireMe',
                element: <HireMe></HireMe>
            },
            {
                path: '/contactForm',
                element: <ContactForm></ContactForm>
            }
        ]
    }
])

export default Routes;