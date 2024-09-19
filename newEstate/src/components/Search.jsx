import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { FaSearch } from "react-icons/fa";
import Data from '@/shared/Data';


function Search() {
  return (
    <div className='p-2 md:p-4 bg-white rounded-md md:rounded-full flex-col md:flex md:flex-row gap-10
    px-5 items-center w-[60%] '>
        <Select>
        <SelectTrigger className="font-semibold outline-none md:border-none w-full shadow-none text-lg">
            <SelectValue placeholder="PropertyType" />
        </SelectTrigger>
        <SelectContent className='bg-white'>
            {Data.PropertyType.map((maker,index)=>(
                <SelectItem value={maker.name}>{maker.name}</SelectItem>
            ))}
        </SelectContent>
        </Select>
        <Separator orientation="vertical" className="hidden md:block bg-slate-300"/>
        <Select>
         <SelectTrigger className="font-semibold outline-none md:border-none w-full shadow-none text-lg">
            <SelectValue placeholder="Price" />
        </SelectTrigger>
        <SelectContent className='bg-white'>
        {Data.Price.map((maker,index)=>(
                <SelectItem value={maker.amount}>{maker.amount}</SelectItem>
            ))}
        </SelectContent>
        </Select>


        <Separator orientation="vertical" className="hidden md:block bg-slate-300"/>
        <Select>
         <SelectTrigger className="font-semibold outline-none md:border-none w-full shadow-none text-lg">
            <SelectValue placeholder="Size" />
        </SelectTrigger>
        <SelectContent className='bg-white'>
        {Data.Size.map((maker,index)=>(
                <SelectItem value={maker.size}>{maker.size}</SelectItem>
            ))}
        </SelectContent>
        </Select>
        <div>
        <FaSearch className='text-5xl text-white bg-primary rounded-full p-3 hover:scale-105 transition-all cursor-pointer'/>
        </div>
        
    </div>
  )
}

export default Search