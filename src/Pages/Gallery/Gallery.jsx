import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './Gallery.css'
import Aos from "aos"
import "aos/dist/aos.css"

const Gallery = () => {
    const [allImage, setAllImage] = useState([])
    const [webImage, setWebImage] = useState([])
    const [uiImage, setUiImage] = useState([])
    const [graphicImage, setGraphicImage] = useState([])

    useEffect(() => {
        fetch('https://mehedi-portfolio-three.vercel.app')
        .then(res => res.json())
        .then(data => {
            setAllImage(data)
        })
    },[])

    useEffect(() => {
        fetch('https://mehedi-portfolio-three.vercel.app/web')
        .then(res => res.json())
        .then(data => {
            setWebImage(data)
        })
    },[])

    useEffect(() => {
        fetch('https://mehedi-portfolio-three.vercel.app/ui')
        .then(res => res.json())
        .then(data => {
            setUiImage(data)
        })
    },[])

    useEffect(() => {
        fetch('https://mehedi-portfolio-three.vercel.app/graphic')
        .then(res => res.json())
        .then(data => {
            setGraphicImage(data)
        })
    },[])

    useEffect(()=>{
        Aos.init({duration:2000})
    },[])

    return (
        <div className='bg-gray-100 py-20 galleryBg'>
            <h1 className='text-4xl font-bold text-center'>Portfolio Gallery</h1>
            <div className='max-w-7xl mx-auto py-10'>
            <Tabs className="font-semibold">
                <TabList>
                    <Tab>All</Tab>
                    <Tab>Web Design</Tab>
                    <Tab>UI/UX Design</Tab>
                    <Tab>Graphic Design</Tab>
                    <Tab>Logo Design</Tab>
                </TabList>

                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-20'>
                        {
                            allImage.map(image  =>
                                <div data-aos="fade-right" key={image._id} className='container'>
                                    <img className='h-48 w-[100%] rounded-lg image' src={image.image} alt="" />
                                    <div class="overlay">{image.title}</div>
                                </div>
                                )
                        }
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-20'>
                        {
                            webImage.map(image  =>
                                <div data-aos="fade-up" key={image._id} className='container'>
                                    <img className='h-48 w-[100%] rounded-lg image' src={image.image} alt="" />
                                    <div class="overlay">{image.title}</div>
                                </div>
                                )
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-20'>
                        {
                            uiImage.map(image  =>
                                <div data-aos="zoom-in" key={image._id} className='container'>
                                    <img className='h-48 w-[100%] rounded-lg image' src={image.image} alt="" />
                                    <div class="overlay">{image.title}</div>
                                </div>
                                )
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-20'>
                        {
                            graphicImage.map(image  =>
                                <div data-aos="zoom-out" key={image._id} className='container'>
                                    <img className='h-48 w-[100%] rounded-lg image' src={image.image} alt="" />
                                    <div class="overlay">{image.title}</div>
                                </div>
                                )
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div data-aos="fade-up" className='p-20'>
                        <h2 className='text-center font-bold text-2xl'>No content Found yet!</h2>
                    </div>
                </TabPanel>
            </Tabs>
        </div>
        </div>
    );
};

export default Gallery;