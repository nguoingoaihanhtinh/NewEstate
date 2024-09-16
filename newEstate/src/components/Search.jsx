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

function Search() {
  return (
    <div className='p-2 md:p-4 bg-white rounded-md md:rounded-full flex-col md:flex md:flex-row gap-10
    px-5 items-center w-[60%] '>
        <Select>
        <SelectTrigger className="font-semibold outline-none md:border-none w-full shadow-none text-lg">
            <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
        </SelectContent>
        </Select>
        <Separator orientation="vertical" className="hidden md:block bg-slate-300"/>
        <Select>
         <SelectTrigger className="font-semibold outline-none md:border-none w-full shadow-none text-lg">
            <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
        </SelectContent>
        </Select>
        <Separator orientation="vertical" className="hidden md:block bg-slate-300"/>
        <Select>
         <SelectTrigger className="font-semibold outline-none md:border-none w-full shadow-none text-lg">
            <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
        </SelectContent>
        </Select>
        <div>
        <FaSearch className='text-xl'/>
        </div>
    </div>
  )
}

export default Search