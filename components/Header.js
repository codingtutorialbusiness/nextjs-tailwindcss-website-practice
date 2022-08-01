import React, {useState, useEffect} from 'react'
// import Link from 'next/link'
import { Link } from 'react-scroll'
// import Image from 'next/image';
import {FaBars, FaTimes} from 'react-icons/fa';

const Header = () => {
  const [menuVal, setmenuVal] = useState(false);

  const handleClick = () => {setmenuVal(!menuVal)};

  return (
    <header className='h-20 items-center flex sticky top-0 left-0 w-full z-30 bg-black'>
        <div className="container mx-auto grid grid-cols-2 px-4 items-center">
            <div>
                <Link to="/" href='/' className='inline-block'>
                  <img src="/images/logo-black.png" width="50px" height="50px" alt="/" />
                </Link>
            </div>
            <div className='flex justify-end'>
              <nav className='hidden lg:block'>
                <ul className='flex space-x-10'>
                  <li className="cursor-pointer hover:text-blue-500 duration-300 ease-in text-lg text-white font-medium">
                    <Link to="home" smooth={true} duration={500}>
                      Home
                    </Link>
                  </li>
                  <li className="cursor-pointer hover:text-blue-500 duration-300 ease-in text-lg text-white font-medium">
                    <Link to="service" smooth={true} duration={500}>
                      Service
                    </Link>
                  </li>
                  <li className="cursor-pointer hover:text-blue-500 duration-300 ease-in text-lg text-white font-medium">
                    <Link to="about" smooth={true} duration={500}>
                      About
                    </Link>
                  </li>
                  <li className="cursor-pointer hover:text-blue-500 duration-300 ease-in text-lg text-white font-medium">
                    <Link to="price" smooth={true} duration={500}>
                      Price
                    </Link>
                  </li>
                  <li className="cursor-pointer hover:text-blue-500 duration-300 ease-in text-lg text-white font-medium">
                    <Link to="blog" smooth={true} duration={500}>
                      Blog
                    </Link>
                  </li>
                </ul>
              </nav>
              <Link to="#" onClick={handleClick} className="inline-block lg:hidden text-white text-3xl" href="#">
                <FaBars />
              </Link>
              <div className={`fixed bg-slate-900 p-8 flex items-center right-0 duration-300 top-0 w-1/2 min-h-screen ${menuVal ? 'translate-x-0' : 'translate-x-full'}`}>
                <Link to="#" onClick={handleClick} className="absolute top-8 left-8 text-3xl text-white" href="#"><FaTimes /></Link>
                <ul>
                  <li className='my-5'><Link to="#" className='text-lg text-white' href="#">Home</Link></li>
                  <li className='my-5'><Link to="#" className='text-lg text-white' href="#">About</Link></li>
                  <li className='my-5'><Link to="#" className='text-lg text-white' href="#">Service</Link></li>
                  <li className='my-5'><Link to="#" className='text-lg text-white' href="#">Price</Link></li>
                  <li className='my-5'><Link to="#" className='text-lg text-white' href="#">Footer</Link></li>
                </ul>
              </div>
            </div>
        </div>
    </header>
  )
}

export default Header