import React from 'react'
import { ImTwitter ,  ImLinkedin,  ImFacebook} from "react-icons/im";
import Link from "next/link";
import Newslatter from './newslater';

export default function Footer() {
  return (
    <footer className='bg-gray-50' >
      <Newslatter/>
      <div className='container mx-auto flex justify-center py-12'>
        <div className='py-5'>
          <div className='flex gap-6 justify-center'>
          <Link href={'/'}><ImFacebook  /></Link>
          <Link href={'/'}><ImTwitter /></Link>
          <Link href={'/'}><ImLinkedin /></Link>
          </div>
          <p className='py-5 text-gray-400'>&copy;2025 All rights reserved | This template is made by Sanoober</p>
          <p className='text-gray-400 text-center'>Terms & Conditions</p>
        </div>
      </div>
    </footer>
  )
}
