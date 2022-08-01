import React from 'react'
import Link from 'next/link'
// import { Element } from 'react-scroll'

const About = () => {
  return (
    <div name="about" className='bg-slate-100'>
        <div className="container mx-auto py-36 px-8">
            <div className="grid lg:grid-cols-2 items-center">
                <div className="pr-20 mb-10 lg:mb-0">
                    <h2 className='sm:text-6xl text-4xl font-bold mb-5 text-slate-800'>About Us</h2>
                    <p className='text-lg mb-3 text-slate-600 font-normal'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae quo expedita quibusdam dolorem. Eos iusto nostrum, delectus autem placeat possimus in maiores sint quasi quis quo facere repellat, nobis dolor!</p>
                    <p className='text-lg mb-3 text-slate-600 font-normal'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae quo expedita quibusdam dolorem. Eos iusto nostrum, delectus autem placeat possimus in maiores sint quasi quis quo facere repellat, nobis dolor!</p>
                    <Link href="/">
                        <a className='text-md bg-blue-600 text-white px-7 py-3 inline-block mt-5 hover:bg-blue-700 duration-300 ease-in'>
                            Learn More
                        </a>
                    </Link>
                </div>
                <div className="">
                    <div className='about-img'>
                        <img src="/images/about/about.jpg" alt="About" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About