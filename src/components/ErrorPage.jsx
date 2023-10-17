import gif from '../assets/404/404.gif'
import { Link } from "react-router-dom";
const ErrorPage = () => {
    return (
        <div >

            <img className=' mx-auto ' src={gif} alt="" />
            <div className='flex items-center justify-center'>
                <Link to='/'><button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Back to Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;