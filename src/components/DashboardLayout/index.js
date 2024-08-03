import React from 'react';

import Header from './Header';
import Sidebar from './Sidebar';

const DashBoardLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Sidebar />
      <div className='p-5 mt-14 flex flex-col gap-6 md:ml-14 h-full bg-white dark:bg-black'>
        <p className='text-2xl font-bold text-white'>Dashboard</p>
        <div className='flex flex-col lg:gap-8 gap-6'>{children}</div>
      </div>
    </>
  );
};

export default DashBoardLayout;
