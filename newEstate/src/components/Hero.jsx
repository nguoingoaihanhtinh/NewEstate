import React from 'react'
import Search from './Search'


function Hero() {
  return (
    <div className="bg-[url('/house.jpg')] bg-cover bg-no-repeat justify-center flex flex-col items-center p-10 py-10 gap-6 h-[1000px] 
    bg-[#eef0fc]" >
        <h1 className='text-lg'>Find houses for sale and for rent nearby</h1>
        <h1 className='text-[60px] font-bold'>Find your dream house</h1>
        <Search />
    
    </div>
  )
}

export default Hero