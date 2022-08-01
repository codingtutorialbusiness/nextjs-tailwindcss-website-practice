import React from 'react'
import CountUp from 'react-countup'
import {FaUserAlt, FaBriefcase, FaCode} from 'react-icons/fa';

const Counter = () => {
  return (
    <div className='bg-slate-100'>
        <div className="container mx-auto py-36 px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
                <div className="text-center">
                    <div className='inline-block text-2xl border-2 border-slate-800 rounded-full p-6 text-slate-800'>
                        <FaUserAlt />
                    </div>
                    <h3 className='font-light text-4xl tracking-wide text-slate-800 my-8'>Clients</h3>
                    <CountUp className='text-7xl text-slate-800 font-bold' end={200} />
                </div>
                <div className="text-center">
                    <div className='inline-block text-2xl border-2 border-slate-800 rounded-full p-6 text-slate-800'>
                        <FaBriefcase />
                    </div>
                    <h3 className='font-light text-4xl tracking-wide text-slate-800 my-8'>Projects</h3>
                    <CountUp className='text-7xl text-slate-800 font-bold' end={990} />
                </div>
                <div className="text-center">
                    <div className='inline-block text-2xl border-2 border-slate-800 rounded-full p-6 text-slate-800'>
                        <FaCode />
                    </div>
                    <h3 className='font-light text-4xl tracking-wide text-slate-800 my-8'>Code</h3>
                    <CountUp  className='text-7xl text-slate-800 font-bold'end={9900} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Counter