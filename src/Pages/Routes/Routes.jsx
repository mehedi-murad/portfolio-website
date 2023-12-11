import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import HireMe from "../HireMe/HireMe";
import ContactForm from "../Contact/ContactForm";
import ServiceDetails from "../Service Details/ServiceDetails";
import Web from "../Service Details/Web/Web";
import Ui from "../Service Details/Ui/Ui";
import Graphic from "../Service Details/Graphic/Graphic";
import Services from "../Services/Services";
import BlogForum from "../Blog/BlogForum";
import About from "../About/About";
import Resume from "../Resume/Resume";
import BlogDetails from "../Blog/BlogDetails";

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
            },
            {
                path: '/services',
                element:<Services></Services>
            },
            {
                path: '/blogForum',
                element:<BlogForum></BlogForum>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/resume',
                element:<Resume></Resume>
            },
            {
                path: '/blogDetails/:id',
                element: <BlogDetails></BlogDetails>,
                loader: ({params}) => fetch(`https://mehedi-portfolio-three.vercel.app/blogs/${params.id}`)
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