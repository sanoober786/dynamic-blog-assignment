import React from 'react'
import Image from 'next/image'

export default function AuthoreCard() {
    return (
        <div className='bg-white shadow-lg  rounded-lg p-6 mt-12'>
            <div className='flex items-center animation-fadeIn'>

                <Image src={'/Image.jpg'} alt='Authore Image' height={18} width={18} className='w-16 h-16 mr-4 rounded-full object-cover border-2 border-red-500' />

                <div>
                    <h1 className='text-xl font-bold'>Sanoober</h1>
                    <p className='mt-2 text-slate-500'>I am a GIAIC student passionate about exploring technology and learning new skills to build innovative solutions.</p>
                </div>
            </div>
        </div>
    )
}
