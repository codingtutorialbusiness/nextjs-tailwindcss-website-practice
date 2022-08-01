import React from 'react'
import BlogData from './blogData';
import SectionHeading from './SectionHeading';
// import { Element } from 'react-scroll';

const Blog = () => {
  return (
    <div name="blog">
        <div className="container mx-auto px-8 py-36">
            <SectionHeading title="News Update" />
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
              {BlogData.map(singleBlog => (
                <div className='rounded-lg shadow-lg' key={singleBlog.id}>
                  <img className='rounded-t-lg' src={singleBlog.imgUrl} alt="Single Blog" />
                  <div className='p-6'>
                    <h3 className='font-bold text-2xl text-slate-800 mb-3'>{singleBlog.title}</h3>
                    <p className='text-gray-600 text-lg font-normal'>{singleBlog.content}</p>
                    <a className='text-blue-600 duration-300 hover:text-blue-700 text-lg font-semibold mt-3 inline-block relative after:absolute after:left-0 after:-bottom-[10px] after:h-1 after:w-0 after:bg-blue-600 after:duration-300 hover:after:w-full' href="/">Read More...</a>
                  </div>
                </div>
              ))}
            </div>
        </div>
    </div>
  )
}

export default Blog