import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";
import BottomFooter from "../Footer/BottomFooter";
import Footer from "../Footer/Footer";
import Gallery from "../Gallery/Gallery";
import Services from "../Services/Services";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import Skills from "../Skills/Skills";
import Testimonial from "../Testimonial/Testimonial";
import './Home.css'


const Home = () => {
    return (
        <div>
            <div className="homeBG min-h-screen">
                <Navbar></Navbar>
                <Header></Header>
            </div>
            <Services></Services>
            <Gallery></Gallery>
            <Skills></Skills>
            <Blog></Blog>
            <Testimonial></Testimonial>
            <Contact></Contact>
            <Footer></Footer>
            <BottomFooter></BottomFooter>
        </div>
    );
};

export default Home;