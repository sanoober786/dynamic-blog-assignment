import React from "react";
import Link from "next/link";

export default function Header(){
    return(
        <header className="bg-gray-50 w-full">
            <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
                <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0">
                    <input type="text" placeholder="Search..." className="mt-1 block w-60 px-3 py-2 bg-white border border-slate-300 rounded-full text-sm shadow-sm placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" />
                </div>
                <div className="shrink w-80 sm:order-2 w-full">
                   <Link href={'/'} className="font-SemiBold-600-Italic uppercase text-3xl ">Dynamic Blog</Link> 
                </div>
                <div className="w-full order-3 flex justify-center gap-6">
                <ul className='flex justify-end items-center gap-4 sm:gap-6 lg:gap-8 w-full text-[orange] text-[14px] sm:text-[16px] lg:text-[18px] font-semibold'>
        <li className='relative group cursor-pointer'>
            <span className='group-hover:text-[#D1E8E2] transition-colors'><Link href={"/"}>Home</Link></span>
            <div className='absolute left-0 bottom-[-6px] w-0 h-[3px] bg-[#D1E8E2] group-hover:w-full transition-all'></div>
        </li>
        <li className='relative group cursor-pointer'>
            <span className='group-hover:text-[#D1E8E2] transition-colors'><Link href={"/"}>Blog</Link></span>
            <div className='absolute left-0 bottom-[-6px] w-0 h-[3px] bg-[#D1E8E2] group-hover:w-full transition-all'></div>
        </li>
        <li className='relative group cursor-pointer'>    
            <span className='group-hover:text-[#D1E8E2] transition-colors'><Link href={"/"}>Contact</Link></span>
            <div className='absolute left-0 bottom-[-6px] w-0 h-[3px] bg-[#D1E8E2] group-hover:w-full transition-all'></div>
        </li>
                </ul>  
                </div>
            </div>
        </header>
    )
}