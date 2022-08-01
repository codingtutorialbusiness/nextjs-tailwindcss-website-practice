import React from 'react'
import SectionHeading from './SectionHeading'
import TestimonialList from './testimonialData';
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';

const Testimonials = () => {
  return (
    <div>
        <div className="container mx-auto px-8 py-36">
          <SectionHeading title="Client's Testimonial" />
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            {TestimonialList.map(testimonial => (
              <div className='text-center relative p-8 rounded-lg shadow-lg bg-teal-50' key={testimonial.id}>
                <FaQuoteLeft className='text-3xl text-gray-300 absolute top-3 left-3' />
                <img className='inline-block rounded-full mb-3 w-[70px] h-[70px] object-cover' src={testimonial.imgUrl} alt="Testimonial Author" />
                <h4 className='font-bold uppercase mb-2 text-slate-800'>{testimonial.author}</h4>
                <h5 className='font-semibold uppercase text-md tracking-wide mb-2 text-slate-800'>{testimonial.position}</h5>
                <p className='text-lg mb-2 text-gray-600'>{testimonial.text}</p>
                <FaQuoteRight className="text-3xl text-gray-300 absolute bottom-3 right-3" />
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default Testimonials