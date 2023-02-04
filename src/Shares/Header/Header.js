import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillPeopleFill } from 'react-icons/bs';
import { FiLogIn } from 'react-icons/fi';
import { FaShoppingCart } from 'react-icons/fa';
const Header = () => {
    return (
        <div className="navbar bg-base-100 py-4 px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/dashboard">Dashboard</Link></li>
                        <Link to="/register" className="btn btn-outline btn-xs w-20 h-10 my-4"><BsFillPeopleFill />Register</Link>

                        <Link to="/login" className="btn btn-outline btn-xs w-20 h-10 "><FiLogIn /> Login</Link>

                        <Link to="/cart" className="btn btn-outline btn-xs w-20 h-10 my-4"><FaShoppingCart /> Cart</Link>
                    </ul>
                </div>


                <Link to="/" className="btn btn-ghost normal-case text-2xl font-bold">GlassDoor</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About </Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                </ul>
            </div>

            <div className="navbar-end hidden lg:flex">
                <Link to="/register" className="btn btn-outline "><BsFillPeopleFill />Register</Link>
                <Link to="/login" className="btn btn-outline mx-2"><FiLogIn /> Login</Link>
                <Link to="/cart" className="btn btn-outline"><FaShoppingCart /> Cart</Link>
            </div>

        </div>
    );
};

export default Header;