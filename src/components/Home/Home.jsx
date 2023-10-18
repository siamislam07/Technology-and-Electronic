import Aos from "aos";
import { useEffect } from "react";
import Brands from "./CardDetails";
import Footer from "../Footer/Footer";
import { TypeAnimation } from "react-type-animation";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Link, useLoaderData } from "react-router-dom";
import { BsTypeH1 } from "react-icons/bs";

const Home = () => {

    const company = useLoaderData()
    // console.log(companys);

    const [text] = useTypewriter({
        words: ['ElectroTech Hub: Navigating Tomorrow Innovations ', 'Creating Tech Marvels for a Connected World ', 'Pioneering the Future of Electronics', 'Innovating Tech Solutions for Tomorrow'],
        loop: {},

    })


    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/cydJQ5p/banner.jpg)' }}>
                <div className="hero-overlay bg-opacity-70"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="text-3xl text-white max-w-md md:max-w-lg lg:max-w-5xl sm:max-w-sm space-y-10 leading-relaxed font-serif" data-aos="zoom-out">


                        <span className="font-bold text-orange-500">
                            {text}
                        </span>
                        <Cursor cursorColor='red' cursorStyle='<' />


                        <p className="mb-5 text-xl">ElectroTech Hub: A Place Where Curiosity and Innovation Converge, Paving the Way for Cutting-Edge Technology. We are dedicated to Unveiling Tomorrow's Innovations, and Pioneering the Path to a Brighter Tech Future, Creating a World where Boundaries Are Pushed and Possibilities Are Endless. Join Us on This Exciting Journey into the Heart of the Tech Revolution!</p>

                    </div>
                </div>
            </div>
            <h2 className="text-4xl text-center font-bold mt-10 mb-10">Our Brands </h2>

            <div className=" max-w-[1300px] mx-auto md:mx-auto lg:mx-auto grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-2 gap-24 justify-center items-center mb-10 ">
                {
                    company.map(company => (
                        <Link key={company.id} to='/details'>
                            <div  className="mx-auto md:mx-auto lg:mx-auto">
                                <div className="card gap-5 items-center mx-auto md:mx-auto lg:mx-auto  w-[400px] h-[200px] p-3 lg:card-side   no-underline border rounded hover:border-primary/30 hover:shadow-sm hover:shadow-primary/10 group">
                                    <img className="w-16 h-12  duration-200 group-hover:scale-110 " src={company?.company_logo} alt="Album" />
                                    <div className="space-y-0 md:space-y-0 lg:space-y-5">
                                        <h2 className="card-title  text-neutral-900 duration-200 group-hover:text-blue-400">{company?.company_name}</h2>
                                        <p>{company?.description}</p>
                                        <div className="card-actions justify-start">
                                            <button className=" border-b-2 border-dotted text-neutral-600 group-hover:text-blue-400 underline decoration-neutral-300 group-hover:decoration-primary-300">Learn More</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;