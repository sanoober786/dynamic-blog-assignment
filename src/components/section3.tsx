"use client"

import React from 'react'
import "swiper/css"; // Import Swiper core styles
import "swiper/css/navigation"; // Import specific module styles (if needed)
import dynamic from "next/dynamic"; 

const DynamicSwiper = dynamic(() => import("./DynamicSwiper"), { ssr: false });

export default function section3() {
  return(
    <section className='container mx-auto md:px-20 py-16 '>
        <h1 className='font-bold text-4xl py-12 text-center'>Most Popular</h1>
      
          <DynamicSwiper />
          <h1 className='font-bold text-xl py-12 text-center'>Scroll left to see the post</h1>
    </section>
  )
 };
   




      
 