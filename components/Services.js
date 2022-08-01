import React from 'react';
import {FaReact, FaAppleAlt, FaFeatherAlt} from 'react-icons/fa';
// import { Element } from 'react-scroll';

const Services = () => {
    return (
            <div name="service" className="container mx-auto py-36 p-8">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                    <div className="bg-slate-50 p-16 shadow-md hover:shadow-lg duration-300 ease-in">
                        <div className='bg-blue-800 inline-block p-4 rounded-full mb-4'>
                            <FaReact className='text-white w-4 h-4' />
                        </div>
                        <h3 className='text-2xl font-semibold text-slate-800 mb-4'>Webdesign Service</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur itaque iusto minima!</p>
                    </div>
                    <div className="bg-slate-50 p-16 shadow-md hover:shadow-lg duration-300 ease-in">
                        <div className='bg-blue-800 inline-block p-4 rounded-full mb-4'>
                            <FaAppleAlt className='text-white w-4 h-4' />
                        </div>
                        <h3 className='text-2xl font-semibold text-slate-800 mb-4'>App Development</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur itaque iusto minima!</p>
                    </div>
                    <div className="bg-slate-50 p-16 shadow-md hover:shadow-lg duration-300 ease-in">
                        <div className='bg-blue-800 inline-block p-4 rounded-full mb-4'>
                            <FaFeatherAlt className='text-white w-4 h-4' />
                        </div>
                        <h3 className='text-2xl font-semibold text-slate-800 mb-4'>UI Design Service</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur itaque iusto minima!</p>
                    </div>

                </div>
            </div>
    );
}

export default Services;