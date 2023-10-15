import React from 'react';
import Cards from './Cards';
import LeftCard from './LeftCard';
import Banner from './Banner';


const Home = () => {
    return (
        <div className='w-[90%] mx-auto min-h-screen'>
            {/* <Banner /> */}
            <div className='mt-8'>
                <hr className='border-t-[1px] border-black'>
                </hr>
                <p className='bg-[#FF0000] px-4  w-28 h-7  mx-auto -mt-3 italic uppercase font-bold text-lg text-white'>
                    FEATURED
                </p>
            </div>
            <Cards></Cards>
            <div className='mt-8'>
                <hr className='border-t-[1px] border-black'>
                </hr>
                <p className='bg-[#FF0000] px-4  w-36 h-7  mx-auto -mt-3 italic uppercase font-bold text-lg text-white'>
                    MORE NEWS
                </p>
            </div>
            <LeftCard />
        </div>
    );
};

export default Home;