

const Contact = () => {
    return (
        <div>
            <h2>I WANT TO HEAR FROM YOU</h2>
            <div className="flex items-center justify-center">
                <div>
                    <form className="space-y-4">
                        <input type="text" placeholder="Your Name" className="input input-bordered input-warning w-full max-w-xs" /> <br />
                        <input type="text" placeholder="Your Email" className="input input-bordered input-warning w-full max-w-xs" /><br />
                        <input type="text" placeholder="Your Phone" className="input input-bordered input-warning w-full max-w-xs" /> <br />
                        <input type="text" placeholder="Subject" className="input input-bordered input-warning w-full max-w-xs" /> <br />
                    
                        <textarea className="textarea textarea-warning" placeholder="Your Message"></textarea>
                    </form>
                </div>

                <div>
                    
                </div>
            </div>
        </div>
    );
};

export default Contact;