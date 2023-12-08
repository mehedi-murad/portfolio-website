import './Skills.css'

const Skills = () => {
    return (
        <div className="max-w-7xl mx-auto skills py-28">
            <h1 className="font-bold text-4xl text-center">My Skills</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-10">
            <div className="bg-[#FFF3EA] p-8 rounded-lg">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold">HTML</h2>
                    <p className="font-semibold">90%</p>
                </div>
                <progress className="progress progress-info w-56" value="90" max="100"></progress>
            </div>
            <div className="bg-[#FFF3EA] p-8 rounded-lg">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold">CSS</h2>
                    <p className="font-semibold">75%</p>
                </div>
                <progress className="progress progress-info w-56" value="75" max="100"></progress>
            </div>
            <div className="bg-[#FFF3EA] p-8 rounded-lg">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold">Tailwind CSS</h2>
                    <p className="font-semibold">80%</p>
                </div>
                <progress className="progress progress-info w-56" value="80" max="100"></progress>
            </div>
            <div className="bg-[#FFF3EA] p-8 rounded-lg">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold">Java Script</h2>
                    <p className="font-semibold">60%</p>
                </div>
                <progress className="progress progress-info w-56" value="60" max="100"></progress>
            </div>
            <div className="bg-[#FFF3EA] p-8 rounded-lg">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold">React Js</h2>
                    <p className="font-semibold">55%</p>
                </div>
                <progress className="progress progress-info w-56" value="55" max="100"></progress>
            </div>
            <div className="bg-[#FFF3EA] p-8 rounded-lg">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold">Mongo DB (Basic Level)</h2>
                    <p className="font-semibold">30%</p>
                </div>
                <progress className="progress progress-info w-56" value="30" max="100"></progress>
            </div>
            <div className="bg-[#FFF3EA] p-8 rounded-lg">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold">Firebase (Basic Level)</h2>
                    <p className="font-semibold">30%</p>
                </div>
                <progress className="progress progress-info w-56" value="30" max="100"></progress>
            </div>
        </div>
        </div>
    );
};

export default Skills;