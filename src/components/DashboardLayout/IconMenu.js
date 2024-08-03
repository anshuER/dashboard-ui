import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { CiSettings } from 'react-icons/ci';
import { IoIosNotificationsOutline } from 'react-icons/io';

const IconButtonWrapper = ({ children }) => {
  return (
    <button
      type='button'
      className='flex items-center justify-center  bg-gray-600 rounded-full h-8 w-8'
    >
      {children}
    </button>
  );
};

const IconMenu = () => {
  return (
    <div className='flex gap-4'>
      <IconButtonWrapper>
        <AiOutlineMail className='h-5 w-5 text-white' />
      </IconButtonWrapper>
      <IconButtonWrapper>
        <CiSettings className='h-5 w-5 text-white' />
      </IconButtonWrapper>
      <IconButtonWrapper>
        <IoIosNotificationsOutline className='h-5 w-5 text-white' />
      </IconButtonWrapper>
      <IconButtonWrapper>
        <span className='sr-only'>Open user menu</span>
        <img
          class='lg:w-8 lg:h-8 h-7 w-7 rounded-full'
          src='https://flowbite.com/docs/images/people/profile-picture-5.jpg'
          alt='Rounded avatar'
        />
      </IconButtonWrapper>
    </div>
  );
};

export default IconMenu;
