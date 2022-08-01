import React from 'react'
import Link from 'next/link'

const SinglePrice = (props) => {
  return (
    <div className='text-center py-20 px-6 bg-white shadow-lg rounded-lg'>
        <h5 className='text-slate-800 text-lg font-semibold uppercase tracking-wide mb-4'>{props.plan}</h5>
        <h2 className='text-6xl font-black mb-10 text-slate-800'>{props.price}</h2>
        <ul>
            <li className='text-lg text-gray-600 font-semibold my-3'>{props.featureOne}</li>
            <li className='text-lg text-gray-600 font-semibold my-3'>{props.featureTwo}</li>
            <li className='text-lg text-gray-600 font-semibold my-3'>{props.featureThree}</li>
            <li className='text-lg text-gray-600 font-semibold my-3'>{props.featureFour}</li>
        </ul>
        <Link className='bg-blue-600 text-white py-3 px-8 rounded-md inline-block mt-12 duration-300 hover:bg-blue-700' href="#">Buy Now</Link>
    </div>
  )
}

export default SinglePrice