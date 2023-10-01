import React from 'react';
import img1 from '../../../src/assests/img-1.png'
import img2 from '../../../src/assests/img-2.jpeg'
import img3 from '../../../src/assests/img-3.jpg'
import img4 from '../../../src/assests/img-4.jpg'
import img5 from '../../../src/assests/img-5.jpg'
import img6 from '../../../src/assests/img-6.jpg'

const LeftCard = () => {
    return (
        <div className='md:flex gap-10'>
            <div className='grid md:grid-cols-2 gap-7 mt-5 md:w-2/3'>
                <div>
                    <img src={img1} className='w-full' />
                    <div className='my-2'>
                        <div className='flex items-center gap-3  text-xs font-bold text-gray-600'>
                            <p>
                                MUSIC
                            </p>
                            <p>
                                /
                            </p>
                            <p>
                                3 days ago
                            </p>
                        </div>
                        <h1 className='text-lg md:text-xl font-semibold Oswald'>
                            Chow Lee Shares A Glimpse of His Life With “Chow Lee’s Life” Video
                        </h1>
                        <p className='text-[#555] text-lg leading-[1.4] mt-[10px]'>A month after dropping his track “Intentional,” Vedo has unveiled another fresh single, “Split.” Co-produced by Cubeatz (known for their work with Drake and Future) and...</p>
                    </div>
                </div>
                <div>
                    <img src={img2} className='w-full' />
                    <div className='my-2'>
                        <div className='flex items-center gap-3  text-xs font-bold text-gray-600'>
                            <p>
                                MUSIC
                            </p>
                            <p>
                                /
                            </p>
                            <p>
                                3 days ago
                            </p>
                        </div>
                        <h1 className='text-lg md:text-xl font-semibold Oswald'>
                            Chow Lee Shares A Glimpse of His Life With “Chow Lee’s Life” Video
                        </h1>
                        <p className='text-[#555] text-lg leading-[1.4] mt-[10px]'>A month after dropping his track “Intentional,” Vedo has unveiled another fresh single, “Split.” Co-produced by Cubeatz (known for their work with Drake and Future) and...</p>
                    </div>
                </div>
                <div>
                    <img src={img3} className='w-full' />
                    <div className='my-2'>
                        <div className='flex items-center gap-3  text-xs font-bold text-gray-600'>
                            <p>
                                MUSIC
                            </p>
                            <p>
                                /
                            </p>
                            <p>
                                3 days ago
                            </p>
                        </div>
                        <h1 className='text-lg md:text-xl font-semibold Oswald'>
                            Chow Lee Shares A Glimpse of His Life With “Chow Lee’s Life” Video
                        </h1>
                        <p className='text-[#555] text-lg leading-[1.4] mt-[10px]'>A month after dropping his track “Intentional,” Vedo has unveiled another fresh single, “Split.” Co-produced by Cubeatz (known for their work with Drake and Future) and...</p>
                    </div>
                </div>
                <div>
                    <img src={img4} className='w-full' />
                    <div className='my-2'>
                        <div className='flex items-center gap-3  text-xs font-bold text-gray-600'>
                            <p>
                                MUSIC
                            </p>
                            <p>
                                /
                            </p>
                            <p>
                                3 days ago
                            </p>
                        </div>
                        <h1 className='text-lg md:text-xl font-semibold Oswald'>
                            Chow Lee Shares A Glimpse of His Life With “Chow Lee’s Life” Video
                        </h1>
                        <p className='text-[#555] text-lg leading-[1.4] mt-[10px]'>A month after dropping his track “Intentional,” Vedo has unveiled another fresh single, “Split.” Co-produced by Cubeatz (known for their work with Drake and Future) and...</p>
                    </div>
                </div>
                <div>
                    <img src={img5} className='w-full' />
                    <div className='my-2'>
                        <div className='flex items-center gap-3  text-xs font-bold text-gray-600'>
                            <p>
                                MUSIC
                            </p>
                            <p>
                                /
                            </p>
                            <p>
                                3 days ago
                            </p>
                        </div>
                        <h1 className='text-lg md:text-xl font-semibold Oswald'>
                            Chow Lee Shares A Glimpse of His Life With “Chow Lee’s Life” Video
                        </h1>
                        <p className='text-[#555] text-lg leading-[1.4] mt-[10px]'>A month after dropping his track “Intentional,” Vedo has unveiled another fresh single, “Split.” Co-produced by Cubeatz (known for their work with Drake and Future) and...</p>
                    </div>
                </div>
                <div>
                    <img src={img6} className='w-full' />
                    <div className='my-2'>
                        <div className='flex items-center gap-3  text-xs font-bold text-gray-600'>
                            <p>
                                MUSIC
                            </p>
                            <p>
                                /
                            </p>
                            <p>
                                3 days ago
                            </p>
                        </div>
                        <h1 className='text-lg md:text-xl font-semibold Oswald'>
                            Chow Lee Shares A Glimpse of His Life With “Chow Lee’s Life” Video
                        </h1>
                        <p className='text-[#555] text-lg leading-[1.4] mt-[10px]'>A month after dropping his track “Intentional,” Vedo has unveiled another fresh single, “Split.” Co-produced by Cubeatz (known for their work with Drake and Future) and...</p>
                    </div>
                </div>
            </div>
            <div className='my-5 md:w-1/3'>
                <div className='flex items-center gap-3'>
                    <input type="search" className='border outline-none w-80 p-1 border-black' placeholder='Find a post' />
                    <p className='bg-[#F0F0F0] border-1 border-[#939393] cursor-pointer px-3 py-2'>
                        <svg class="svg-icon search-icon" aria-labelledby="title desc" role="img" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 19.9 19.7">
                            <title id="title">Search Icon</title>
                            <desc id="desc">A magnifying glass icon.</desc>
                            <g class="search-path" fill="none" stroke="#000">
                                <path stroke-linecap="square" d="M18.5 18.3l-5.4-5.4" />
                                <circle cx="8" cy="8" r="7" />
                            </g>
                        </svg>
                    </p>
                </div>
                <div className='space-y-7 mt-5'>
                    <div className='flex gap-3'>
                        <img src={img1} alt="" className='w-28 object-cover' />
                        <div>
                            <p className='text-xs'><span className='font-bold text-[#777780] text-base'>Music /</span> 4 hours ago</p>
                            <h1 className='font-bold text-lg'>Sexyy Red Releases New Single 'No Panties'</h1>
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <img src={img2} alt="" className='w-28 object-cover' />
                        <div>
                            <p className='text-xs'><span className='font-bold text-[#777780] text-base'>Music /</span> 4 hours ago</p>
                            <h1 className='font-bold text-lg'>Sexyy Red Releases New Single 'No Panties'</h1>
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <img src={img3} alt="" className='w-28 object-cover' />
                        <div>
                            <p className='text-xs'><span className='font-bold text-[#777780] text-base'>Music /</span> 4 hours ago</p>
                            <h1 className='font-bold text-lg'>Sexyy Red Releases New Single 'No Panties'</h1>
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <img src={img4} alt="" className='w-28 object-cover' />
                        <div>
                            <p className='text-xs'><span className='font-bold text-[#777780] text-base'>Music /</span> 4 hours ago</p>
                            <h1 className='font-bold text-lg'>Sexyy Red Releases New Single 'No Panties'</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftCard;