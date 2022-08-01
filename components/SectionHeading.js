import React from 'react'

const SectionHeading = (props) => {
  return (
    <div className='grid grid-cols-1 mb-20 text-center'>
        <h2 className='text-4xl font-bold mb-5 text-slate-800'>{props.title}</h2>
        <p className='text-lg text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga perferendis ut quod?</p>
    </div>
  )
}

export default SectionHeading