import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import Aos from "aos"
import "aos/dist/aos.css"

const Blog = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/blogs')
        .then(res => res.json())
        .then(data => {
            setBlogs(data)
        })
    },[])

    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    return (
        <div className="bg-gray-100 p-5 md:p-20">
            <h2 className="text-4xl uppercase font-bold text-center my-20">Blogs</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 ld:grid-cols-4 gap-4 max-w-7xl mx-auto mb-10">
            {
                blogs.map(blog => 
                    <div data-aos="flip-up" key={blog._id} className="card md:w-96 bg-base-100 shadow-xl">
                        <figure><img data-aos="zoom-in-up" className="h-56" src={blog.image} alt="tech image" /></figure>
                        <div className="card-body">
                            <h2 className="card-title font-bold text-xl">{blog.title.slice(0,50)}</h2>
                            {/* <p>{blog.details.slice(0,150)}</p> */}
                            <div className="card-actions flex items-center justify-start text-orange-500">
                                <h2 className="font-bold">Read More</h2>
                                <FaArrowRight></FaArrowRight>
                            </div>
                        </div>
                    </div>
                    )
            }
            </div>
        </div>
    );
};

export default Blog;