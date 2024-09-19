import Data from '@/shared/Data'
import React from 'react'

function Category() {
  return (
    <div className='mt-20'>
        <h1 className='font-bold text-xl text-center mb-6'>Browse by type</h1>
        <div className='grid items-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 px-20 justify-center' >
            {Data.PropertyType.map((type,index)=>(
                <div className='border rounded-xl p-3 items-center justify-center flex-col hover:shadow-2xl cursor-pointer'>
                    <img src={type.icon} width={60} height={60}/>
                    <h1>{type.name}</h1>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Category