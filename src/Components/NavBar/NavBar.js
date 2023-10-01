import React, { useState } from 'react';
import SideDrawer from './SideDrawer';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { BsYoutube } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineInstagram } from 'react-icons/ai';
import logo from "../../../src/assests/logo.png"
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);

    return (
        <div className='mb-3'>

            {/* tobar start  */}
            <div className='bg-[#000000]  py-2 '>
                <div className='flex w-[90%] mx-auto bg-black '>
                    <div className='  flex w-[43%]   '>
                        <div className='text-white flex items-center gap-3  text-2xl'>
                            <FaFacebookF className='w-9 h-9 bg-[rgba(255,255,255,.15)] rounded-full p-2 hover:bg-[#3B5997]' />
                            <FaTwitter className='w-9 h-9 bg-[rgba(255,255,255,.15)] rounded-full p-2 hover:bg-[#00ACED]' />
                            <AiOutlineInstagram className='w-9 h-9 bg-[rgba(255,255,255,.15)] rounded-full p-2 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500' />
                            <BsYoutube className='w-9 h-9 bg-[rgba(255,255,255,.15)] rounded-full p-2 hover:bg-red-600' />

                        </div>

                    </div>
                    <Link to='/'>
                        <div className=' flex justify-center'>
                            <img src={logo}>
                            </img>

                        </div>
                    </Link>
                </div>


            </div>

            {/* topbar end */}

            {/* navbar start */}
            <div className='w-[90%] mx-auto my-4 flex items-center justify-center'>
                <ul className='flex gap-4 uppercase font-bold items-center'>
                    <Link to='/' className='hover:text-red-600'>
                        Blog
                    </Link>
                    <Link onClick={() => setIsOpen(!isOpen)} className='hover:text-red-600 flex items-center relative'>
                        Fashion
                        <svg
                            className="-mr-1 ml-2 h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                        {isOpen && (
                            <div
                                className="absolute right-0 top-4 z-10 mt-2 w-56 rounded-md ring-1 ring-opacity-30 shadow-lg bg-white"
                            >
                                <div className="py-1">
                                    <Link
                                        to="/"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                    >
                                        Clothing
                                    </Link>
                                    <Link
                                        to="/"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                    >
                                        Shoes
                                    </Link>
                                    <Link
                                        to="/"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                    >
                                        Handbags
                                    </Link>
                                    <Link
                                        to="/"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                    >
                                        Accessories
                                    </Link>
                                </div>
                            </div>
                        )}
                    </Link>
                    <Link onClick={() => setIsOpen2(!isOpen2)} className='hover:text-red-600 flex items-center relative'>
                        Fragrance
                        <svg
                            className="-mr-1 ml-2 h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                        {isOpen2 && (
                            <div
                                className="absolute right-0 top-4 z-10 mt-2 w-56 rounded-md ring-1 ring-opacity-30 shadow-lg bg-white"
                            >
                                <div className="py-1">
                                    <Link
                                        to="/"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                    >
                                        Man
                                    </Link>
                                    <Link
                                        to="/"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                    >
                                        Women
                                    </Link>
                                    <Link
                                        to="/"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                    >
                                        Unisex
                                    </Link>
                                </div>
                            </div>
                        )}
                    </Link>
                    <Link onClick={() => setIsOpen3(!isOpen3)} className='hover:text-red-600 flex items-center relative'>
                        Watches
                        <svg
                            className="-mr-1 ml-2 h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                        {isOpen3 && (
                            <div
                                className="absolute right-0 top-4 z-10 mt-2 w-56 rounded-md ring-1 ring-opacity-30 shadow-lg bg-white"
                            >
                                <div className="py-1">
                                    <Link
                                        to="/"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                    >
                                        Man
                                    </Link>
                                    <Link
                                        to="/"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                    >
                                        Women
                                    </Link>
                                    <Link
                                        to="/"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                    >
                                        Unisex
                                    </Link>
                                </div>
                            </div>
                        )}
                    </Link>
                </ul>
            </div>

            {/* navbar end  */}

        </div>
    );
};

export default NavBar;