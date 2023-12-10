import { FaLayerGroup } from "react-icons/fa";


const Ui = () => {
    return (
        <div className="px-20 py-10">
            <div>
                <img className="rounded-lg" src="https://i.ibb.co/HtH8qBR/5757453-scaled.jpg" alt="" />
            </div>  
            <h2 className="text-xl font-semibold text-gray-400 mt-5">UI/UX Design</h2>
            <h2 className="text-5xl font-bold my-5 text-white">Design isn’t finished until somebody is using it.</h2>
            <p className=" text-justify text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo mollitia cupiditate nisi hic impedit? Eveniet repellendus animi sunt minima! Non distinctio blanditiis dignissimos, aut odit consectetur maxime quisquam nobis doloremque laborum vitae autem provident deleniti fugit necessitatibus quam sed sit nostrum illum harum expedita et ducimus. Maxime sed optio possimus esse deserunt beatae earum magni sunt? Minima, molestias. Animi asperiores earum iste ad vitae architecto tempora, ut veniam, officia eos quos sequi aperiam facilis, nostrum blanditiis. Voluptas rem recusandae, expedita impedit reiciendis quae animi exercitationem libero dolorum modi quidem odio maiores. Facere minima voluptatibus dolorem voluptates odio impedit iure minus? <br /> <br />
            
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus porro officia ab ipsa animi mollitia nam ex. Provident cumque incidunt sed sequi ad dolor reiciendis quos. Quaerat aut, consectetur sapiente fugiat magni provident dolorem. Nihil natus reiciendis porro animi assumenda quia, itaque atque laborum. Fuga et laudantium rerum temporibus quaerat pariatur sapiente ut deserunt tempora? Unde quam enim nemo maiores molestias corporis, beatae voluptates obcaecati in veniam numquam, eaque hic deserunt dolores! Modi, quisquam perferendis! <br /> <br />

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe suscipit pariatur voluptatibus eius eligendi architecto, iusto vel temporibus tempora provident nemo culpa quos deserunt perferendis adipisci unde est labore dolores reprehenderit! Deleniti sapiente aliquam id.
            </p>

            <h2 className="text-5xl font-bold my-10 text-center text-white">Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
                <div className="bg-[#151724] h-[550px] p-10 text-center space-y-4 rounded-3xl">
                    <div className="flex items-center justify-center text-3xl">
                        <FaLayerGroup />
                    </div>
                    <h2 className="text-2xl font-bold">Starter</h2>
                    <div className="space-y-2">
                        <p>1. Lorem ipsum dolor sit</p>
                        <p>2. Lorem ipsum dolor sit</p>
                        <p>3. Lorem ipsum dolor sit</p>
                        <p>4. Lorem ipsum dolor sit</p>
                        <p>5. Lorem ipsum dolor sit</p>
                    </div>
                    <div className="divider divider-warning"></div>
                    <div className="space-y-8">
                        <h2 className="text-center text-6xl font-bold">$38/<span className="text-xl">month</span></h2>
                        <button className="btn bg-[#E76A18] border-none">BUY NOW</button>
                    </div>
                </div>
                <div className="bg-[#151724] h-[550px] p-10 text-center space-y-4 rounded-3xl">
                    <div className="flex items-center justify-center text-3xl">
                        <FaLayerGroup />
                    </div>
                    <h2 className="text-2xl font-bold">Premium</h2>
                    <div className="space-y-2">
                        <p>1. Lorem ipsum dolor sit</p>
                        <p>2. Lorem ipsum dolor sit</p>
                        <p>3. Lorem ipsum dolor sit</p>
                        <p>4. Lorem ipsum dolor sit</p>
                        <p>5. Lorem ipsum dolor sit</p>
                    </div>
                    <div className="divider divider-warning"></div>
                    <div className="space-y-8">
                        <h2 className="text-center text-6xl font-bold">$58/<span className="text-xl">month</span></h2>
                        <button className="btn bg-[#E76A18] border-none">BUY NOW</button>
                    </div>
                </div>
                <div className="bg-[#151724] h-[550px] p-10 text-center space-y-4 rounded-3xl">
                    <div className="flex items-center justify-center text-3xl">
                        <FaLayerGroup />
                    </div>
                    <h2 className="text-2xl font-bold">Unlimited</h2>
                    <div className="space-y-2">
                        <p>1. Lorem ipsum dolor sit</p>
                        <p>2. Lorem ipsum dolor sit</p>
                        <p>3. Lorem ipsum dolor sit</p>
                        <p>4. Lorem ipsum dolor sit</p>
                        <p>5. Lorem ipsum dolor sit</p>
                    </div>
                    <div className="divider divider-warning"></div>
                    <div className="space-y-8">
                        <h2 className="text-center text-6xl font-bold">$88/<span className="text-xl">month</span></h2>
                        <button className="btn bg-[#E76A18] border-none">BUY NOW</button>
                    </div>
                </div>
                
            </div>


        </div>
    );
};

export default Ui;