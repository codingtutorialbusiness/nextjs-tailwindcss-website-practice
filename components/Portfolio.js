import React from 'react'
import imageList from './portfolioData';
import SectionHeading from './SectionHeading';
import {FaSearch} from 'react-icons/fa';

const Portfolio = () => {
  return (
      <div className="container mx-auto py-36 px-8">
          <SectionHeading title="Our Portfolio" />
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            {imageList.map(imageUrl => (
              <div className='relative overflow-hidden group' key={imageUrl.id}>
                <img src={imageUrl.img} alt="Portfolio" />
                <div className='absolute w-full h-full duration-300 -translate-y-full group-hover:translate-y-0 top-0 left-0 flex items-center justify-center bg-blue-600'>
                  <div>
                    <a className='text-4xl text-white' href="#">
                      <FaSearch />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
      </div>
  )
}

export default Portfolio