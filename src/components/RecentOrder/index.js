import React from 'react';
import OrderTable from './OrderTable';

const RecentOrder = () => {
  return (
    <div className='md:col-span-2 overflow-scroll  h-[500px] bg-gray-800 rounded-lg p-4 flex flex-col gap-4'>
      <p className='text-xl font-bold text-white'>Recent Orders</p>
      <OrderTable />
    </div>
  );
};

export default RecentOrder;
