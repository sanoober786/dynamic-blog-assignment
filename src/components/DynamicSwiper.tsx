// In a separate file: SwiperComponent.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AuthoreCard from './AuthoreCard'

export default function SwiperComponent() {
  return (
    <Swiper spaceBetween={50} slidesPerView={2}>
      <SwiperSlide>{Post()}</SwiperSlide>
      <SwiperSlide>{Post2()}</SwiperSlide>
      <SwiperSlide>{Post()}</SwiperSlide>
      <SwiperSlide>{Post2()}</SwiperSlide>
      <SwiperSlide>{Post()}</SwiperSlide>
      <SwiperSlide>{Post2()}</SwiperSlide>
    </Swiper>
  );
}

function Post(){
  return(
      <div className='grid'>
      <div className='images'>
      <Link href={'/'}> <Image src={'/img3.jpg'} alt = "image" height={450} width={600}/></Link>
      </div>
      <div className=' info flex justify-center flex-col py-4'>
      <div className="cat">
              <Link href={'/'} className="text-orange-600 hover:text-orange-800">The Art of Writing</Link>
              <Link href={'/'} className="text-gray-800 hover:text-gray-600">Jan 1, 2025</Link>
          </div>
          <div className="title">
              <Link href={'/'} className="text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600">You want your child to read these books</Link>
          </div>
           <p className="text-gray-500 py-3">Book lovers dont just read—they experience, dream, and travel without ever leaving their seat. Book lovers are proof that magic exists between the covers of a good book.</p>
           <AuthoreCard/>
      </div>
  </div>
  )
};
function Post2(){
  return(
      <div className='grid'>
      <div className='images'>
      <Link href={'/'}> <Image src={'/img1.jpg'} alt = "image" height={400} width={600}/></Link>
      </div>
      <div className=' info flex justify-center flex-col py-4'>
      <div className="cat">
              <Link href={'/'} className="text-orange-600 hover:text-orange-800">The Art of Writing</Link>
              <Link href={'/'} className="text-gray-800 hover:text-gray-600">Jan 1, 2025</Link>
          </div>
          <div className="title">
              <Link href={'/'} className="text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600">My new digital reading habits</Link>
          </div>
           <p className="text-gray-500 py-3">Book lovers dont just read—they experience, dream, and travel without ever leaving their seat. Book lovers are proof that magic exists between the covers of a good book.</p>
           <AuthoreCard/>
      </div>
  </div>
  )
}
 