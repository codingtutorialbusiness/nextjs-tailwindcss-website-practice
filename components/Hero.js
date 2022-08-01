import React from 'react'
import Link from 'next/link'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import { Element } from 'react-scroll';

const Hero = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
 
  return (
    <div name="home">
        <Slider {...settings}>
            <div>
            <div 
            className="single-slider z-10 w-auto h-screen bg-cover flex items-center relative before:absolute before:bg-black before:w-full before:h-full before:opacity-50 before:-z-10" 
            style={{backgroundImage: `url(../images/header/slider-1.jpg)`}}>
            <div className="container mx-auto">
                <div className='px-8 sm:px-0'>
                    <h1 className='lg:text-7xl lg:leading-normal text-4xl leading-normal md:text-5xl font-bold text-white uppercase tracking-wide mb-4 md:leading-normal'>Welcome to our <br /> website. Journey begin. </h1>
                    <p className='text-white text-lg'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit velit hic asperiores aperiam expedita consectetur earum voluptate minus? Lorem ipsum dolor, <br /> sit amet consectetur adipisicing elit. Cum id illo, ratione ab temporibus consectetur?</p>
                    <Link href="/learmore">
                        <a className='my-8 inline-block bg-white text-black px-8 py-3 text-md font-medium hover:bg-blue-800 duration-300 hover:text-white uppercase tracking-widest'>Learn More</a>
                    </Link>
                </div>
            </div>
        </div>
            </div>
        <div>
        <div 
            className="single-slider z-10 w-auto h-screen bg-cover flex items-center relative before:absolute before:bg-black before:w-full before:h-full before:opacity-50 before:-z-10" 
            style={{backgroundImage: `url(../images/header/slider-1.jpg)`}}>
            <div className="container mx-auto">
                <div>
                    <h1 className='text-7xl font-bold leading-normal text-white uppercase tracking-wide'>Super fast service <br /> you can accept from us. </h1>
                    <p className='text-white text-lg'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit velit hic asperiores aperiam expedita consectetur earum voluptate minus? Lorem ipsum dolor, <br /> sit amet consectetur adipisicing elit. Cum id illo, ratione ab temporibus consectetur?</p>
                    <Link href="/learmore">
                        <a className='my-8 inline-block bg-white text-black px-8 py-3 text-md font-medium hover:bg-blue-800 duration-300 hover:text-white uppercase tracking-widest'>Learn More</a>
                    </Link>
                </div>
            </div>
        </div>
        </div>
        <div>
        <div 
            className="single-slider z-10 w-auto h-screen bg-cover flex items-center relative before:absolute before:bg-black before:w-full before:h-full before:opacity-50 before:-z-10" 
            style={{backgroundImage: `url(../images/header/slider-1.jpg)`}}>
            <div className="container mx-auto">
                <div>
                    <h1 className='text-7xl font-bold leading-normal text-white uppercase tracking-wide'>We offer best <br /> service in this field </h1>
                    <p className='text-white text-lg'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit velit hic asperiores aperiam expedita consectetur earum voluptate minus? Lorem ipsum dolor, <br /> sit amet consectetur adipisicing elit. Cum id illo, ratione ab temporibus consectetur?</p>
                    <Link href="/learmore">
                        <a className='my-8 inline-block bg-white text-black px-8 py-3 text-md font-medium hover:bg-blue-800 duration-300 hover:text-white uppercase tracking-widest'>Learn More</a>
                    </Link>
                </div>
            </div>
        </div>
        </div>
        </Slider>
    </div>
  )
}

export default Hero