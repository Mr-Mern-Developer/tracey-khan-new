import React, { useState } from 'react';
import { TbListTree } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const SideDrawer = () => {

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div>
       <div className={`drawer ${drawerOpen ? 'open' : ''} `}>
      <input
        id="my-drawer"
        type="checkbox"
        className="drawer-toggle"
        checked={drawerOpen}
        onChange={toggleDrawer}
      />
      <div className="drawer-content">
        <label htmlFor="my-drawer" className="text-3xl text-black hover:text-red-600">
          <TbListTree />
        </label>
      </div>
      <div className="drawer-side  z-50">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-black text-gray-100 relative text-lg">
          <Link to='/' className='pt-12'>
            Music
          </Link>
          <hr className='mt-2 border-t-[.5px] border-gray-300'/>
          <Link to='/' className='mt-2'>
            News
          </Link>
          <hr className='mt-2 border-t-[.5px] border-gray-300'/>
          <Link to='/' className='mt-2'>
            Videos
          </Link>
          <hr className='mt-2 border-t-[.5px] border-gray-300'/>
          <Link to='/' className='mt-2'>
          Reviews
          </Link>
          <hr className='mt-2 border-t-[.5px] border-gray-300'/>
       
          <div className=''><button onClick={toggleDrawer} className="text-white mt-4  absolute right-6 top-0 w-9 h-9 bg-[rgba(255,255,255,.15)] rounded-full p-2 text-xl flex items-center justify-center"> x </button></div>
        </ul>
        {/* Add a close button here */}
        
      </div>
    </div>
    </div>
  );
};

export default SideDrawer;