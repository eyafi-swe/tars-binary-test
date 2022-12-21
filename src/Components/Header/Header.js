import React, { useState } from 'react';
import logo from '../../Assets/5.png';
import search from '../../Assets/SEARCH.png';
import shoppingbag from '../../Assets/shopping-bag.png';
import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/solid'
import Link from '../Link/Link';
import './Header.css';

const Header = () => {

    const [open, setOpen] = useState(false);


    // Navbar routes
    const routs = [
        { id: 1, name: "Defense Projects", path: "/defenseprojects" },
        { id: 2, name: "Engineering School", path: "/engineeringschool" },
        { id: 3, name: "Engineering Volunteers", path: "/engineeringvolunteers" },
        { id: 4, name: "Director Notes", path: "/directornotes" },
        { id: 5, name: "Administration", path: "/administration" },
        { id: 6, name: "Board Members", path: "/broadmembers" },
        { id: 7, name: "Event", path: "/event" },
        { id: 8, name: "Gallery", path: "/gallery" },
        { id: 9, name: "Document", path: "/document" },
        { id: 10, name: "About", path: "/about" },
    ]

    return (

        <div className='navbarContainer h-16'>

            <nav className='lg:w-11/12 md:w-full   mx-auto flex justify-between items-center'>

                <div className='w-11/12 md:w-max md:mx-0  mx-auto flex justify-between items-center'>

                    <div className="h-6 w-6 text-white md:hidden mr-2" onClick={() => setOpen(!open)}>
                        {
                            open ? <XMarkIcon /> : <Bars2Icon />
                        }
                    </div>

                    <img src={logo} alt="Logo" className='tarsLogo h-16' />

                    <div className='md:hidden '>
                        <img src={shoppingbag} alt="Shopping Bag Icon" className='h-7' />
                    </div>

                </div>

                <div className={`navItems  text-white text-sm   md:flex md:w-max md:py-0 w-screen py-4   absolute md:static md:duration-75 duration-700 ease-in ${open ? 'top-16' : 'top-[-1200px]'}`}>

                    <div className='md:hidden flex justify-center w-full border-b border-gray-500 py-2 px-2'>

                        <div className='border-gray-500 border w-full flex items-center rounded-lg px-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            <input type="text" placeholder='Search tarsbinary.net' className="input bg-transparent input-sm w-full " />
                        </div>
                    </div>

                    {
                        routs.map(rout => <Link key={rout.id} rout={rout}></Link>)
                    }

                </div>

                <div className='md:flex  hidden'>
                    <div className=''>
                        <img src={search} alt="Search Icon" className='h-7 text-gray-300 searchIcon' />
                    </div>

                    <div className='ml-2'>
                        <img src={shoppingbag} alt="Shopping Bag Icon" className='h-7 bagIcon' />
                    </div>
                </div>

            </nav>

        </div>

    );
};

export default Header;