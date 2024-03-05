'use client'
import Link from 'next/link';
import { useState } from 'react';
import { CiSearch } from 'react-icons/ci';

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  return (
    <header className="sticky top-0 bg-white py-4 w-full">
      <div className="w-full">
        <nav className="container mx-auto flex justify-between items-center">
          <ul className="flex justify-start space-x-6 lg:space-x-12">
            <li className="mr-6">
              <Link legacyBehavior href="/">
                <a href='/' className="text-black hover:text-gray-300 ml-8">Home</a>
              </Link>
            </li>
          </ul>
          <ul className="flex justify-end space-x-6 lg:space-x-12">
            <li className="mr-6">
              <Link legacyBehavior href="/newsignup">
                <a className="text-black hover:text-gray-300">Schedule Appointment</a>
              </Link>
            </li>
            <li className="mr-6">
              <Link legacyBehavior href="/newsignup">
                <a className="text-black hover:text-gray-300">Rent Rooms</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/aboutus">
                <a className="text-black hover:text-gray-300">About</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/signin">
                <a className="text-black hover:text-gray-300">Sign In</a>
              </Link>
            </li>
            <li className=''>
              <Link legacyBehavior href="/newsignup">
                <a className="text-black hover:text-gray-300">Sign Up</a>
              </Link>
            </li>
            <li>
              <button
                aria-label="search"
                onClick={toggleSearch}
                className="text-black hover:text-gray-300 focus:outline-none mr-12"
              >
                <CiSearch />
              </button>
              {isSearchOpen && (
          <input
              type="text"
              placeholder="Search"
              className="border border-gray-300 px-3 py-1 rounded-md focus:outline-none mr-4"
            />
         
        )}
            </li>
          </ul>
        </nav>
        
      </div>
    </header>
  );
};

export default Header;
