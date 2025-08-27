import React from 'react'
import Carousel from '../Carousel'

export default function ParrotCard() {
    return (
        <div className='bg-transparent lg:bg-blue-950 rounded-xl w-full lg:w-3/4 mx-auto py-8 lg:shadow-lg'>
            <div className="card-title text-center mb-2">
                <h2 className='text-4xl text-white font-bold'>Tools for every operation</h2>
            </div>
            <div className="card-texts font-museo text-sm">
                <p className='text-gray-400 flex flex-col items-center '>
                    <span className='my-4'>Choose between 600+ tools for every kind of Red and Blue team operation.</span>
                    <span className='w-full lg:w-3/4 mx-auto'>
                        Parrot Security provides a huge arsenal of tools, utilities and libraries
                        that IT and security professionals can use to test and assess the security
                        of their assets in a reliable, compliant and reproducible way. From information
                        gathering to the final report.</span>
                    <span >
                         The Parrot system gets you covered with the most
                        flexible environment.
                    </span>
                </p>
            </div>
            <Carousel />
            <div className="btn-group text-white flex flex-col gap-10 items-center ">
                <div className="btn-group-title">
                    <h3 className='text-center text-2xl'>Explore over 600+ tools</h3>                    
                </div>
                <div className="flex gap-3 ">
                        <button className='nav-btn'>Download</button>
                        <button className='nav-btn transparent-btn'>Documentation</button>
                </div>
            </div>
        </div>
    )
}
