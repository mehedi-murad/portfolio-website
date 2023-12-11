import { Helmet } from "react-helmet-async";
import profile from "../../assets/photo.jpg";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Footer/Footer";
import './About.css'
const About = () => {
  return (
    <div>
      <Helmet>
        <title>Mehedi's Portfolio | About</title>
      </Helmet>
      <Navbar></Navbar>
      <div className="about">
        <h1>About</h1>
      </div>
      <div className="aboutBG">
      <div className="max-w-7xl mx-auto py-20 px-8 text-white bg-gray-700">
        <div className="flex justify-center items-center gap-8 mb-5">
          <div>
            <img
              className="rounded-full w-28 border-orange-400 border-4"
              src={profile}
              alt=""
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold">Mehedi Hasan Murad</h2>
            <h2 className="">
              MERN Stack Developer (Specialized in Front-End)
            </h2>
            <p className="font-semibold">mehedimurad08@gmail.com</p>
          </div>
        </div>
        <div className="divider divider-accent"></div>
        <div className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold">About Me</h2>
            <p className=" mt-5">
              Hello there! 👋 I'm <span className="font-bold">Mehedi Hasan Murad</span>, a passionate and creative
              web developer based in Dhaka, bangladesh. With a strong background
              in Front-end Development, I specialize in turning ideas into
              powerful and user-friendly websites.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">What I Do</h2>
            <p className=" mt-5">
              I thrive on turning complex problems into simple, beautiful, and
              intuitive designs. My focus is on creating seamless and responsive
              user experiences, employing the latest technologies to bring
              innovative ideas to life.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">My Skills</h2>
            <p className=" mt-5">
              Front-end Development: I excel in crafting dynamic, user-centric
              interfaces using HTML, CSS, and JavaScript. I'm well-versed in
              tailwindCSS and ReactJS.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Back-end Development</h2>
            <p className=" mt-5">
              
              I have experience working with MERN, ensuring robust and scalable
              web applications.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Database Management</h2>
            <p className=" mt-5">
              
              For database i'm using MongoDb platform.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Collaboration</h2>
            <p className=" mt-5">
            
              I am a firm believer in the power of teamwork. I enjoy
              collaborating with designers, UX/UI specialists, and other
              developers to bring comprehensive solutions to the table.
            </p>
          </div>

          <div>
            <p>
              My journey in web development began through Programming Hero. Over
              the years, I have had the opportunity to work on diverse projects,
              honing my skills and learning from every challenge encountered.{" "}
              <br />
              <br />
              I'm always open to new projects and collaborations. Whether you
              have a specific project in mind or just want to say hi, feel free
              to email here - <span className="font-bold text-orange-500">mehedimurad08@gmail.com</span>
            </p>
          </div>
          <p>Thanks for stopping by!</p>
        </div>
      </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default About;
