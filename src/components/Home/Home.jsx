import Aos from "aos";
import { useEffect } from "react";
import Brands from "./CardDetails";
import Footer from "../Footer/Footer";
// import { TypeAnimation } from "react-type-animation";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import 'aos/dist/aos.css';
import { Link, useLoaderData } from "react-router-dom";
import { BsTypeH1 } from "react-icons/bs";
// import Faq from "./Faq";
import question from '../../assets/question/questions-186_256.gif'

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
                        <Link key={company.id} to={`/details/${company.brandName}`}>
                            <div className="mx-auto md:mx-auto lg:mx-auto" data-aos="fade-right">
                                <div className="card gap-5 items-center mx-auto md:mx-auto lg:mx-auto  w-[400px] h-[200px] p-3 lg:card-side   no-underline border rounded hover:border-primary/30 hover:shadow-sm hover:shadow-primary/10 group">
                                    <img className="w-16 h-12  duration-200 group-hover:scale-110 " src={company?.company_logo} alt="Album" />
                                    <div className="space-y-0 md:space-y-0 lg:space-y-5" >
                                        <h2 className="card-title  text-neutral-900 duration-200 group-hover:text-blue-400" >{company?.brandName}</h2>
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


            {/* FAQ section */}

            <div className="mb-24">
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:gap-24 lg:flex-row">
                        <img src={question} className="w-3/4 lg:max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <div className="collapse collapse-arrow bg-base-200">
                                <input type="radio" name="my-accordion-2" checked="checked" />
                                <div className="collapse-title text-xl font-medium">
                                    What is ElectroTech Hub, and what do you offer?
                                </div>
                                <div className="collapse-content">
                                    <p>ElectroTech Hub is your premier destination for all things technology and electronics. We offer a wide range of resources, insights, and information about the latest advancements in the tech world, including articles, reviews, guides, and more.</p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow bg-base-200">
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title text-xl font-medium">
                                    How can I stay updated on the latest tech trends?
                                </div>
                                <div className="collapse-content">
                                    <p>You can stay informed about the latest tech trends by regularly visiting our website, subscribing to our newsletter, and following us on social media platforms. We curate and publish up-to-date content on emerging technologies and innovations. </p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow bg-base-200">
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title text-xl font-medium">
                                    Can I submit my tech-related content to ElectroTech Hub?
                                </div>
                                <div className="collapse-content">
                                    <p>Yes</p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow bg-base-200">
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title text-xl font-medium">
                                    Are the product reviews on ElectroTech Hub unbiased?
                                </div>
                                <div className="collapse-content">
                                    <p> Yes, we take pride in providing objective and unbiased product reviews. Our goal is to offer honest assessments and recommendations to help you make informed decisions when choosing tech products.</p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow bg-base-200">
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title text-xl font-medium">
                                    Is my personal information safe when I use your website?
                                </div>
                                <div className="collapse-content">
                                    <p>Yes, we take your privacy and data security seriously. We have robust privacy measures in place to protect your personal information. Please refer to our Privacy Policy for more details on how we handle your data.</p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow bg-base-200">
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title text-xl font-medium">
                                    Can I advertise or partner with ElectroTech Hub?
                                </div>
                                <div className="collapse-content">
                                    <p>We are open to advertising and partnership opportunities. Please reach out to us through the provided contact information to discuss potential collaborations and advertising options. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* seo section */}
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img data-aos="fade-left" src="https://i.ibb.co/WDLFhC7/bohemian-man-with-his-arms-crossed-removebg-preview.png" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-6xl font-bold">Company CEO</h1>
                        <p className="py-6 text-3xl">When someone tells you it can’t be done, it’s more a reflection of their limitations, not yours!</p>
                    </div>
                </div>
            </div>
            {/* <Faq></Faq> */}
            <Footer></Footer>
        </div>
    );
};

export default Home;