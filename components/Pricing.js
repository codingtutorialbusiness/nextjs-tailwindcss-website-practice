import React from 'react'
import SectionHeading from './SectionHeading'
import SinglePrice from './SinglePrice'
// import { Element } from 'react-scroll'

const Pricing = () => {
  return (
    <div name="price" className='bg-slate-100'>
        <div className="container mx-auto py-36 px-8">
            <SectionHeading title="Pricing Table" />
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
              <SinglePrice 
                plan="Starter" 
                price="$99"
                featureOne="1 Website"
                featureTwo="1 Free Domain"
                featureThree="1 Year Hosting"
                featureFour="No live editor" 
              />
              <SinglePrice 
                plan="Standerd" 
                price="$299"
                featureOne="3 Website"
                featureTwo="3 Free Domain"
                featureThree="3 Year Hosting"
                featureFour="Live editor" 
              />
              <SinglePrice 
                plan="Premium" 
                price="$999"
                featureOne="Unlimited Website"
                featureTwo="10 Free Domain"
                featureThree="10 Year Hosting"
                featureFour="Live editor" 
              />
            </div>
        </div>
    </div>
  )
}

export default Pricing