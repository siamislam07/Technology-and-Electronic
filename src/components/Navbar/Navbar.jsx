import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provide/AuthProvider";
import { useContext } from "react";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)


    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }

    const navLinks = <>
        <li><NavLink to='/' className='btn btn-outline btn-default pt-4 border-b-red-800 border-neutral transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none'>Home</NavLink></li>

        {
            user && <>
                <li><NavLink to='/addProduct' className="btn btn-outline btn-default pt-4 border-b-lime-600  border-neutral transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none ">Add Product </NavLink></li>
                <li><NavLink to='/myCart' className="btn btn-outline btn-default pt-4 border-b-lime-600  border-neutral transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none ">My Cart </NavLink></li>
            </>
        }
        {
            user ? '' : <>
                <li><NavLink to='/login' className="btn btn-outline btn-default pt-2 border-b-amber-600 border-neutral normal-case text-lg  transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none  ">Login </NavLink></li>
                <li><NavLink to='/register' className="btn btn-outline btn-default pt-2 border-b-amber-300 border-neutral normal-case text-lg  transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none ">Create Account</NavLink></li>
            </>
        }

        {
            user ?
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={user?.photoURL ? user.photoURL : 'https://i.ibb.co/wC75hKV/user.png'} />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-64">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">{user?.displayName ? user?.displayName : user?.email}</span>
                            </a>
                        </li>

                        <li><a onClick={handleLogOut} className="">Logout</a></li>
                    </ul>
                </div>
                : ''
        }
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>

                <div className="avatar hidden sm:block">
                    <div className="w-24 rounded-full  ">
                        <img className="" src="https://i.ibb.co/2ksTTdj/21077504-6387627-removebg-preview.png" />
                    </div>
                </div>

                <Link className="btn btn-ghost normal-case text-base md:text-xl lg:text-xl ">Technology and Electronics</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-4">
                    {navLinks}
                </ul>
            </div>

        </div>
    );
};

export default Navbar;