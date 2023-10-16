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
            <div className='bg-gray-100  py-2 '>
                <div className='flex w-[90%] mx-auto bg-gray-100 '>
                    <div className='  flex w-[43%]   '>
                        <div className='text-white flex items-center gap-3  text-2xl'>
                            <a href="https://www.facebook.com/1on1withtraceykhan?mibextid=LQQJ4d" target='_blank'>
                                <FaFacebookF className='w-9 h-9  rounded-full p-2 bg-[#3B5997]' />
                            </a>
                            <a href="https://twitter.com/" target='_blank'><FaTwitter className='w-9 h-9 rounded-full p-2 bg-[#00ACED]' /></a>
                            <a href="https://www.instagram.com/1on1withtraceykhan/?igshid=MzRlODBiNWFlZA%3D%3D" target='_blank'> <AiOutlineInstagram className='w-9 h-9 rounded-full p-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500' /></a>
                            <a href="https://www.youtube.com/@traceykhan5344?feature=shared" target='_blank'><BsYoutube className='w-9 h-9  rounded-full p-2 bg-red-600' /></a>


                        </div>

                    </div>
                    <Link to='/'>
                        <div className=' flex justify-center w-64 h-28'>
                            <img src={logo}>
                            </img>

                        </div>
                    </Link>
                </div>


            </div>

            {/* topbar end */}

            {/* navbar start */}
            <div className='w-[90%] mx-auto mt-2 flex items-center justify-between '>
                <div>
                    <SideDrawer></SideDrawer>
                </div>
                <div>
                    <ul className='flex gap-4 uppercase font-bold '>
                        <Link to='/' className='hover:text-red-600'>
                            Entertainment News

                        </Link>
                        <Link to='/' className='hover:text-red-600'>
                            One Blog

                        </Link>
                       
                        <div class="relative group z-10">
      <button class="bg-transparent hover:text-red-600 uppercase">Fashion</button>
      <ul class="absolute hidden  bg-white shadow-md w-44 py-2  group-hover:block -left-8">
        <li><Link to='/' class="block px-4 py-2 text-gray-800 hover:bg-blue-100 text-center">Clothing</Link></li>
        <li><Link to='/' class="block px-4 py-2 text-gray-800 hover:bg-blue-100 text-center">Shoes</Link></li>
        <li><Link to='/' class="block px-4 py-2 text-gray-800 hover:bg-blue-100 text-center">Handbags</Link></li>
        <li><Link to='/' class="block px-4 py-2 text-gray-800 hover:bg-blue-100 text-center">Accessories</Link></li>
        <li><Link to='/' class="block px-4 py-2 text-gray-800 hover:bg-blue-100 text-center">Fragrances</Link></li>
      
      </ul>
    </div>
                        <Link to='/' className='hover:text-red-600'>
                            Watches

                        </Link>
                        <Link to='/' className='hover:text-red-600'>

                            Videos


                        </Link>
                        <Link to='/' className='hover:text-red-600'>

                            Media/PR Services


                        </Link>

                    </ul>

                </div>

                <div>
                    <BiSearch className='text-black text-2xl' />
                </div>
            </div>

            {/* navbar end  */}

        </div>
    );
};

export default NavBar;