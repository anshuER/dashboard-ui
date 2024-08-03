import React from 'react';
import { CiSearch } from 'react-icons/ci';

const SearchField = () => {
  return (
    <div className='h-8 md:flex hidden w-96 items-center border border-gray-300  bg-gray-600 rounded-lg overflow-hidden'>
      <span className='pl-3 text-gray-500'>
        <CiSearch className='text-white' />
      </span>
      <input
        type='text'
        className='w-full text-sm py-2 px-4 outline-none  bg-gray-600'
        placeholder='Search...'
      />
    </div>
  );
};

export default SearchField;
