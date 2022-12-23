import React from 'react'

const Sovtech = () => {
  return (
    <div id='sovtech' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>SovTech</p>
                <h2 className='py-4'>Why SovTech?</h2>
                <p className='py-2 text-gray-600'>
                   I am very passionate about technology and business and being able to merge those two and work for an organization that have the same core values, excites me.
                   
                   
                </p>
                
                <p className='py-2 text-gray-600'>
                   I have always thoroughly enjoyed finding ways to solve problems and create new ideas and at SovTech clients come to solve a problem and/or bring life to an idea.
                </p>
                <p className='py-2 text-gray-600'>
                   Engineering creative solutions which grow our clients’ and our own business in an environment which encourages achievement, but values authenticity and a team spirit means I can leverage 
                   and hone my skills and learn from not only my colleagues,but from our clients as well.
                </p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <img className='rounded-xl' src='https://assets-global.website-files.com/634e4fc81c2f186c7ec880a7/634e4fc81c2f186c00c8838c_SovTech-Offices-Johannesburg-p-500.png' alt='/' />
            </div>
        </div>
    </div>
  )
}

export default Sovtech