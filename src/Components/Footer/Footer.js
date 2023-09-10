import React from 'react';
import logo from '../../../src/assests/logo.png'
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { AiOutlineInstagram } from 'react-icons/ai';
import { BsYoutube } from 'react-icons/bs';

const Footer = () => {
    return (
        <div className='bg-[#111111]'>
            <div className=' pt-8 pb-3'>
                <Link to='/'>
                    <div className='flex justify-center items-center'>
                        <img src={logo} alt='logo' className='w-28 h-24' />
                    </div>
                </Link>
            </div>
            <div className='text-white flex items-center gap-4  text-2xl bg-[#111111] justify-center'>
                <FaFacebookF className='w-9 h-9 bg-[rgba(255,255,255,.15)] rounded-full p-2 hover:bg-[#3B5997]' />
                <FaTwitter className='w-9 h-9 bg-[rgba(255,255,255,.15)] rounded-full p-2 hover:bg-[#00ACED]' />
                <AiOutlineInstagram className='w-9 h-9 bg-[rgba(255,255,255,.15)] rounded-full p-2 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500' />
                <BsYoutube className='w-9 h-9 bg-[rgba(255,255,255,.15)] rounded-full p-2 hover:bg-red-600' />

            </div>
            <div>
                <ul className='flex text-gray-300 gap-3 justify-center items-center my-5 tracking-tight font-medium'>
                    <Link to='/' className='hover:text-white'>
                    PRIVACY POLICY 
                    </Link>
                    <Link to='/' className='hover:text-white'>
                    TERMS OF USE 
                    </Link>
                    <Link to='/' className='hover:text-white'>
                    CONTACT US
                    </Link>
                    <Link to='/' className='hover:text-white'>
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