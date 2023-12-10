import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import HireMe from "../HireMe/HireMe";
import ContactForm from "../Contact/ContactForm";
import ServiceDetails from "../Service Details/ServiceDetails";
import Web from "../Service Details/Web/Web";
import Ui from "../Service Details/Ui/Ui";
import Graphic from "../Service Details/Graphic/Graphic";

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
    },
    {
        path: 'serviceDetails',
        element: <ServiceDetails></ServiceDetails>,
        children:[
            {
                path: 'web',
                element: <Web></Web>
            },
            {
                path: 'ui',
                element:<Ui></Ui>
            },
            {
                path: 'graphic',
                element:<Graphic></Graphic>
            }
        ]
    }
])

export default Routes;