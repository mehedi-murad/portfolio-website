import { FaGripLinesVertical, FaMailBulk, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import './Contact.css'
import Swal from "sweetalert2";
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";

const Contact = () => {
    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const subject = form.subject.value;
        const desc = form.desc.value;
        const contactinfo = {name, email, phone, subject, desc}

        fetch('https://mehedi-portfolio-three.vercel.app/contact',{
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(contactinfo)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.insertedId){
                form.reset()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your Info has been Submitted",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    return (
        <div className="contactHeader max-w-7xl mx-auto py-10">
            <div className="flex gap-6 items-center text-gray-400 justify-center">
                <FaGripLinesVertical />
                <h1 className="text-xl font-semibold">Contact with me</h1>
            </div>
            <h1 className=" text-center text-4xl font-bold mt-10">I WANT TO HEAR FROM YOU</h1>
            <div className="flex flex-col md:flex-row items-center justify-evenly gap-8 p-20">
                <div data-aos="fade-right" className="md:w-2/3 mx-auto">
                    <form onSubmit={handleSubmit} className="space-y-4 w-full">
                        <input type="text" name="name" placeholder="Your Name" className="input input-bordered input-warning  w-full" required /> <br />
                        <div className="flex gap-4">
                            <input type="text" placeholder="Your Email" name="email" className="input input-bordered input-warning  w-full" required/>
                            <input type="text" placeholder="Your Phone" name="phone" className="input input-bordered input-warning  w-full" required /> 
                        </div>
                        <input type="text" placeholder="Subject" name="subject" className="input input-bordered input-warning  w-full" required /> <br />
                    
                        <textarea className="textarea textarea-warning w-full" name="desc" placeholder="Your Message" required></textarea>
                        <input
                         className="bg-gray-600 px-4 py-2 text-white font-semibold rounded-lg mt-10 btn-block"
                        type="submit"
                    />
                    </form>
                </div>

                <div data-aos="fade-left" className="space-y-4">
                    <div className="flex items-center gap-4">
                        <div className="bg-[#E76A18] hover:bg-gray-500 hover:text-white p-4 text-2xl rounded-md text-white">
                            <FaMapMarkerAlt />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold">Address</h2>
                            <p className="">Eastern Housing, Mirpur, 12</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="bg-[#E76A18] hover:bg-gray-500 hover:text-white p-4 text-2xl rounded-md text-white">
                            <FaPhoneAlt></FaPhoneAlt>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold">Phone</h2>
                            <p className="">+880 - 1615 834 393</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="bg-[#E76A18] hover:bg-gray-500 hover:text-white p-4 text-2xl rounded-md text-white">
                            <FaMailBulk></FaMailBulk>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold">Email</h2>
                            <p className="">mehedimurad08@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;