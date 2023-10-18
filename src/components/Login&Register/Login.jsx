import { useContext, useState } from "react";
import { AuthContext } from "../provide/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";

const Login = () => {
    const [error, setError] = useState('')
    const [succes, setSuccess] = useState('')

    const { signIn, googleSignIn, githubSignIn } = useContext(AuthContext)

    const navigate = useNavigate()
    const handleLogin = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')

        signIn(email, password)
            .then(result => {
                navigate('/')
                setSuccess(Swal.fire({
                    icon: 'success',
                    title: 'Great',
                    text: 'You Login successfully',

                }))
                e.target.reset()
            })
            .catch(error => {

                setError(error.message)
                e.target.reset()
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                
                setSuccess(Swal.fire({
                    icon: 'success',
                    title: 'Great',
                    text: 'You Login successfully',
                    
                }))
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                
                setError(error.message)
            })
    }

    const handleGitSignIn = () => {
        githubSignIn()
            .then(result => {
                setSuccess(Swal.fire({
                    icon: 'success',
                    title: 'Great',
                    text: 'You Login successfully',
                    
                }))
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                
                setError(error.message)
            })
    }
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
            <div className="hidden sm:block">
                <img className="w-full h-full object-cover" src="https://i.ibb.co/ZJXQS0B/completed-task-outline.png" alt="" />
                {/* <img className="w-full h-full object-cover" src="https://i.ibb.co/hZ2CCM8/undraw-welcome-cats-thqn.png" alt="" /> */}
            </div>

            <div className=" flex flex-col justify-center items-center">
                <form onSubmit={handleLogin} className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg">
                    <h2 className="text-4xl dark:text-white font-bold text-center">SIGN IN</h2>
                    <div className="flex flex-col text-gray-400 py-2">
                        <label >E-mail</label>
                        <input className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type="email" name="email" id="" />
                    </div>
                    <div className="flex flex-col text-gray-400 py-2">
                        <label>Password</label>
                        <input className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type="password" name="password" id="" />
                    </div>


                    <div className="flex justify-between text-gray-400 py-2">
                        <p className="flex items-center"><input className="mr-2" type="checkbox" id="" />Remember Me</p>
                    </div>
                    <button className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg ">Sign In</button>
                    <p className="text-gray-400">Don't Have an Account <Link to='/register'><span className="underline text-slate-300">Register</span></Link></p>
                    <p className="text-center text-2xl text-gray-400 font-light py-2">----or----</p>
                </form>
                <div className=" mt-2  min-w-full md:min-w-full lg:min-w-[400px] space-y-3 ">
                    <div>
                        <button onClick={handleGoogleSignIn}  className="btn w-full btn-square btn-outline border-blue-800 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
                            <FcGoogle className="text-2xl" />
                        </button>
                    </div>
                    <div>
                        <button onClick={handleGitSignIn}  className="btn w-full btn-square btn-outline  transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
                            <BsGithub className="text-2xl" />
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;