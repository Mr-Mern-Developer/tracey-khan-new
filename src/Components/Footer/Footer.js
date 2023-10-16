import React from 'react';
import logo from '../../../src/assests/logo.png'
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { AiOutlineInstagram } from 'react-icons/ai';
import { BsYoutube } from 'react-icons/bs';

const Footer = () => {
    return (
        <div className='bg-gray-100'>
            <div className=' pt-8 pb-3'>
                <Link to='/'>
                    <div className='flex justify-center items-center'>
                        <img src={logo} alt='logo' className='w-56 h-28 ' />
                    </div>
                </Link>
            </div>
            <div className='text-white flex items-center justify-center gap-4  text-2xl '>
                 <a href="https://www.facebook.com/1on1withtraceykhan?mibextid=LQQJ4d" target='_blank'>
                            <FaFacebookF className='w-9 h-9  rounded-full p-2 bg-[#3B5997]' />
                            </a>
                            <a href="https://twitter.com/" target='_blank'><FaTwitter className='w-9 h-9 rounded-full p-2 bg-[#00ACED]' /></a>
                            <a href="https://www.instagram.com/1on1withtraceykhan/?igshid=MzRlODBiNWFlZA%3D%3D" target='_blank'> <AiOutlineInstagram className='w-9 h-9 rounded-full p-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500' /></a>
                            <a href="https://www.youtube.com/@traceykhan5344?feature=shared" target='_blank'><BsYoutube className='w-9 h-9  rounded-full p-2 bg-red-600' /></a>

            </div>
            <div>
                <ul className='flex text-gray-700 gap-3 justify-center items-center my-5 tracking-tight font-medium'>
                    <Link to='/' className=''>
                    PRIVACY POLICY 
                    </Link>
                    <Link to='/' className=''>
                    TERMS OF USE 
                    </Link>
                    <Link to='/' className=''>
                    CONTACT US
                    </Link>
                    <Link to='/' className=''>
                    ADVERTISE WITH US
                    </Link>
                </ul>
            </div>
            <div className='bg-[#000000] py-8'>
                <small className='flex justify-center items-center font-medium text-gray-300 tracking-wide'>Copyright © 2023 Tracey Khan</small>
            </div>

        </div>
    );
};

export default Footer;