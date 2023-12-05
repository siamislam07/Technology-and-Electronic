import { AuthContext } from "../provide/AuthProvider";
import { useContext, useState } from "react";
import { updateProfile } from "firebase/auth";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import Swal from "sweetalert2";


const Register = () => {
    const { createUser, googleSignIn, githubSignIn } = useContext(AuthContext)
    const [error, setError] = useState('')
    const [succes, setSuccess] = useState('')
    const navigate = useNavigate()



    const handleRegister = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const url = form.get('url')
        const email = form.get('email')
        const password = form.get('password')
        //console.log('click');
        if (password.length < 6) {
            setError('Password should be at least 6 characters or longer')
            return
        }
        else if (!/[A-Z]/.test(password)) {
            setError('Password should have at least one upper case');
            return
        }
        else if (!/[^a-zA-Z0-9._-]/.test(password)) {
            setError('Password should have at least one special character');
            return
        }

        setError('')
        setSuccess('')

        createUser(email, password)
            .then(result => {


                // update name
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: url
                })
                    .then()
                    .catch()
                    setSuccess(Swal.fire({
                        icon: 'success',
                        title: 'Great',
                        text: 'You have Login successfully',
                        
                    }))
                    
                    navigate('/')
                e.target.reset()
            })
            .catch(error => {

                setError(error.message)
                e.target.reset()
            })

    }

    const handleGoogleRegister = () => {
        googleSignIn()
            .then(result => {
                navigate('/')
                setSuccess(Swal.fire({
                    icon: 'success',
                    title: 'Great',
                    text: 'You have Login successfully',

                }))
            })
            .catch(error => {
                    //console.log(error);
                setError(error.message)
            })
    }

    const handleGitSignIn = () => {
        githubSignIn()
            .then(result => {
                navigate('/')
                setSuccess(Swal.fire({
                    icon: 'success',
                    title: 'Great',
                    text: 'You have Login successfully',

                }))
            })
            .catch(error => {

                setError(error.message)
            })
    }
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
            <div className="hidden sm:block">
                <img className="w-full h-full object-cover" src="https://i.ibb.co/yqxLjP1/3378583-496162-PI1-SED-61.jpg" alt="" />
            </div>

            <div className="bg-gray-800 flex flex-col justify-center items-center">
                <form onSubmit={handleRegister} className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg">
                    <h2 className="text-4xl dark:text-white font-bold text-center">Register</h2>
                    <div className="flex flex-col text-gray-400 py-2">
                        <label >User Name</label>
                        <input className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type="name" name="name" id="" required />
                    </div>
                    <div className="flex flex-col text-gray-400 py-2">
                        <label >E-mail</label>
                        <input className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type="email" name="email" id="" required />
                    </div>
                    <div className="flex flex-col text-gray-400 py-2">
                        <label>Password</label>
                        <input className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type="password" name="password" id="" required/>
                    </div>
                    <div className="flex flex-col text-gray-400 py-2">
                        <label>PhotoUrl</label>
                        <input className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type="url" name="url" id="" />
                    </div>
                    {
                        error && <p className="text-white text-xl border border-red-300 w-3/5 mx-auto">{error}</p>
                    }
                    {
                        succes && { succes }
                    }
                    <div className="flex justify-between text-gray-400 py-2">
                        <p className="flex items-center" ><input className="mr-2" type="checkbox" id="c" />Remember Me</p>
                    </div>
                    <button className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg ">Register</button>
                    <p className="text-gray-400">Already Have an Account <Link to='/login'><span className="underline text-slate-300">Login</span></Link></p>
                    <p className="text-center text-2xl text-gray-400 font-light py-2">----or----</p>
                    
                </form>
                <div className=" mt-2  min-w-full md:min-w-full lg:min-w-[400px] space-y-3 ">
                    <div>
                        <button onClick={handleGoogleRegister} className="btn w-full  btn-square btn-outline border-blue-800 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
                            <FcGoogle className="text-2xl" />
                        </button>
                    </div>
                    <div>
                        <button onClick={handleGitSignIn} className="btn w-full btn-square btn-outline bg-slate-600 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
                            <BsGithub className="text-2xl" />
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;