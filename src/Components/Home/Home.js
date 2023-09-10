import React from 'react';
import './Home.css';
import Cards from './Cards';


const Home = () => {
    return (
        <div className='w-[90%] mx-auto min-h-screen'>
            <div
                className=" relative  bg-cover bg-center text-center home-banner"

            >
            </div>
            <div className='mt-8'>
                <hr className='border-t-[1px] border-black'>
                </hr>
                <p className='bg-[#FF0000] px-4  w-28 h-7  mx-auto -mt-3 italic uppercase font-bold text-lg text-white'>
                FEATURED
                </p>
            </div>
            <Cards></Cards>
        </div>
    );
}; 

export default Home;