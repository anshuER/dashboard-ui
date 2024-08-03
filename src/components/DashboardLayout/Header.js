import React, { useState } from 'react';
import { Menu, MenuItem, IconButton } from '@mui/material';
import { IoMenuSharp } from 'react-icons/io5';

import IconMenu from './IconMenu';
import SearchField from './SearchField';

const menuItems = ['Home', 'Chart', 'Saved Item', 'Wallet', 'Bag', 'Log Out'];

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className='fixed top-0 z-50 h-14 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700'>
      <div className='px-3 py-3 lg:px-5 lg:pl-3'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center justify-start rtl:justify-end'>
            <IconButton
              edge='start'
              color='inherit'
              aria-label='menu'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleMenuOpen}
              className='text-gray-500 dark:text-gray-400 !ml-[1px]  md:!hidden'
            >
              <IoMenuSharp className='text-white' />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={open}
              onClose={handleMenuClose}
            >
              {menuItems.map((item) => (
                <MenuItem key={item} onClick={handleMenuClose}>
                  {item}
                </MenuItem>
              ))}
            </Menu>
            <a href='https://flowbite.com' className='flex ms-2 md:me-4'>
              <img
                src='https://flowbite.com/docs/images/logo.svg'
                className='h-8 me-3'
                alt='FlowBite Logo'
              />
            </a>
            <SearchField />
          </div>
          <div className='flex items-center'>
            <div className='flex items-center ms-3'>
              <IconMenu />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
