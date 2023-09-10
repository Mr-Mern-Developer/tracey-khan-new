import React from 'react';
import SideDrawer from './SideDrawer';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { BsInstagram, BsYoutube } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import logo from "../../../src/assests/logo.png"
import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <div>

            {/* tobar start  */}
            <div className='bg-[#000000]  py-5 '>
                <div className='flex w-[90%] mx-auto bg-black '>
                    <div className='  flex w-[43%]   '>
                        <div className='text-white flex items-center gap-3  text-xl'>
                            <FaFacebookF className='w-9 h-9 bg-[rgba(255,255,255,.15)] rounded-full p-2' />
                            <FaTwitter className='w-9 h-9 bg-[rgba(255,255,255,.15)] rounded-full p-2' />
                            <BsInstagram className='w-9 h-9 bg-[rgba(255,255,255,.15)] rounded-full p-2' />
                            <BsYoutube className='w-9 h-9 bg-[rgba(255,255,255,.15)] rounded-full p-2' />

                        </div>

                    </div>
                    <div className=' flex justify-center'>
                        <img src={logo}>
                        </img>

                    </div>
                </div>


            </div>

            {/* topbar end */}

            {/* navbar start */}
            <div className='w-[90%] mx-auto mt-2 flex items-center justify-between'>
                <div>
                    <SideDrawer></SideDrawer>
                </div>
                <div>
                    <ul className='flex gap-4 uppercase font-bold '>
                        <Link to='/' className='hover:text-red-600'>
                            Musics
                        </Link>
                        <Link to='/' className='hover:text-red-600'>
                            News
                        </Link>
                        <Link to='/' className='hover:text-red-600'>
                            Videos
                        </Link>
                        <Link to='/' className='hover:text-red-600'>
                            Reviews
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