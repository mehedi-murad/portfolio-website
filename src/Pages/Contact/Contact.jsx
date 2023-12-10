import { FaGripLinesVertical, FaMailBulk, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import './Contact.css'


const Contact = () => {
    return (
        <div className="contactHeader max-w-7xl mx-auto py-10">
            <div className="flex gap-6 items-center text-gray-400 justify-center">
                <FaGripLinesVertical />
                <h1 className="text-xl font-semibold">Contact with me</h1>
            </div>
            <h1 className=" text-center text-4xl font-bold mt-10">I WANT TO HEAR FROM YOU</h1>
            <div className="flex flex-col md:flex-row items-center justify-evenly gap-8 p-20">
                <div className="md:w-2/3 mx-auto">
                    <form className="space-y-4 w-full">
                        <input type="text" placeholder="Your Name" className="input input-bordered input-warning  w-full" /> <br />
                        <div className="flex gap-4">
                            <input type="text" placeholder="Your Email" className="input input-bordered input-warning  w-full" />
                            <input type="text" placeholder="Your Phone" className="input input-bordered input-warning  w-full" /> 
                        </div>
                        <input type="text" placeholder="Subject" className="input input-bordered input-warning  w-full" /> <br />
                    
                        <textarea className="textarea textarea-warning w-full" placeholder="Your Message"></textarea>
                        <input
                         className="bg-gray-600 px-4 py-2 text-white font-semibold rounded-lg mt-10 btn-block"
                        type="submit"
                    />
                    </form>
                </div>

                <div className="space-y-4">
                    <div className="flex items-center gap-4">
                        <div className="bg-[#E76A18] hover:bg-gray-500 hover:text-white p-4 text-2xl rounded-md text-white">
                            <FaMapMarkerAlt />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold">Address</h2>
                            <p className="text-gray-500">Eastern Housing, Mirpur, 12</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="bg-[#E76A18] hover:bg-gray-500 hover:text-white p-4 text-2xl rounded-md text-white">
                            <FaPhoneAlt></FaPhoneAlt>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold">Phone</h2>
                            <p className="text-gray-500">+880 - 1615 834 393</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="bg-[#E76A18] hover:bg-gray-500 hover:text-white p-4 text-2xl rounded-md text-white">
                            <FaMailBulk></FaMailBulk>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold">Email</h2>
                            <p className="text-gray-500">mehedimurad08@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;