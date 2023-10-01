import React from 'react';
import img2 from '../../../src/assests/banner.webp'

const Banner = () => {
    return (
        <div className='mb-28 mt-16 md:my-16 md:flex bg-[#2994AE] max-h-[400px]'>
            <div className='md:w-2/5 py-10 flex items-center justify-center flex-col text-white'>
                <p className='text-base leading-normal font-normal break-words mb-4'>(832) 232-3333 * (832) AM THANH</p>
                <h1 className="mt-4 mb-2 text-2xl font-bold">ONE MEDIA COMPANY</h1>
                <p className="mb-4">Let's Make A Fabulous Noise!</p>
                <button className="px-4 py-2 bg-white text-black rounded text-lg font-medium">CONTACT US</button>
            </div>
            <img src={img2} alt="" className='md:w-[60%] object-cover' />
        </div>
    );
};

export default Banner;