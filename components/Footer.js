import React from 'react'
import {FaFacebookF, FaTwitter, FaInstagram} from 'react-icons/fa';


const Footer = () => {
  return (
    <div className='bg-slate-900'>
        <div className="container mx-auto py-36 px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
              <div className='mb-8 md:mb-0 text-center md:text-left'>
                <p className='text-white text-lg'>All Rights Reserved &copy; Learncodetuts</p>
              </div>
              <div className='flex md:justify-end justify-center'>
                <ul>
                  <li className='inline-block'><a className='text-white duration-300 hover:text-blue-600 text-lg' href="#"><FaFacebookF /></a></li>
                  <li className='inline-block ml-5'><a className='text-white duration-300 hover:text-blue-600 text-lg' href="#"><FaTwitter /></a></li>
                  <li className='inline-block ml-5'><a className='text-white duration-300 hover:text-blue-600 text-lg' href="#"><FaInstagram /></a></li>
                </ul>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Footer