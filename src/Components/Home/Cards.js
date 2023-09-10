import React from 'react';
import img1 from '../../../src/assests/img-1.png'
import img2 from '../../../src/assests/img-2.jpeg'
import img3 from '../../../src/assests/img-3.jpg'
import img4 from '../../../src/assests/img-4.jpg'
import img5 from '../../../src/assests/img-5.jpg'
import img6 from '../../../src/assests/img-6.jpg'


const Cards = () => {
    return (
        <div className='my-5'>
            <div className='grid md:grid-cols-2 gap-7'>
                <div
                    style={{
                        background: `linear-gradient(180deg, rgba(0, 0, 0, 0.171) 0%, rgba(0, 0, 0, 0.268) 100%), url(${img1})`,
                        backgroundSize: 'cover', // You can adjust this based on your needs
                        // Set the width of the div
                        height: '350px', // Set the height of the div
                    }}
                >
                    <div className='w-[90%] mx-auto mt-[200px]'>
                    <div className='flex items-center gap-2 '>
                        <p className='font-semibold text-red-600'>
                            Music
                        </p>
                       <p className='text-white'>/</p>
                        <p className='text-white'>
                            2 days ago
                        </p>
                      
                    </div>
                    <p className='text-white text-lg md:text-3xl font-semibold Oswald'>
                        Introducing B-Squared: The Dynamic Duo Unveils Debut Single “Do-Over”
                        </p>

                    </div>



                </div>
                <div
                    style={{
                        background: `linear-gradient(180deg, rgba(0, 0, 0, 0.171) 0%, rgba(0, 0, 0, 0.268) 100%), url(${img2})`,
                        backgroundSize: 'cover', // You can adjust this based on your needs
                        // Set the width of the div
                        height: '350px', // Set the height of the div
                    }}
                >
                    <div className='w-[90%] mx-auto mt-[200px]'>
                    <div className='flex items-center gap-2 '>
                        <p className='font-semibold text-red-600'>
                            Music
                        </p>
                       <p className='text-white'>/</p>
                        <p className='text-white'>
                            2 days ago
                        </p>
                      
                    </div>
                    <p className='text-white text-lg md:text-3xl font-semibold Oswald'>
                        Introducing B-Squared: The Dynamic Duo Unveils Debut Single “Do-Over”
                        </p>

                    </div>


                </div>

            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 mt-[28px] gap-7'>
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
                    </div>

                </div>
               


            </div>
        </div>
    );
};

export default Cards;