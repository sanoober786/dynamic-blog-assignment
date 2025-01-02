import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AuthoreCard from './AuthoreCard'

export default function section2() {
  return (
   <section className='container mx-auto md:px-20 py-10 '>
    <h1 className='font-bold text-4xl py-12 text-center'>Latest Post</h1>

    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-14'>
        {Post()}
        {Post2()}
        {Post3()}
        {Post4()}
        {Post5()}
        {Post6()}

    </div>
   </section>
  )
}

function Post(){
    return(
        <div className='item '>
            <div className='images'>
            <Link href={'/'}> <Image src={'/img1.jpg'} alt = "image" height={350} width={500} className='rounded'/></Link>
            </div>
            <div className=' info flex justify-center flex-col py-4'>
            <div className="cat">
                    <Link href={'/'} className="text-orange-600 hover:text-orange-800">The Art of Writing</Link>
                    <Link href={'/'} className="text-gray-800 hover:text-gray-600">Jan 1, 2025</Link>
                </div>
                <div className="title">
                    <Link href={'/'} className="text-xl font-bold text-gray-800 hover:text-gray-600">How reading changes your perspective</Link>
                </div>
                 <p className="text-gray-500 py-3">Book lovers dont just read—they experience, dream, and travel without ever leaving their seat. Book lovers are proof that magic exists between the covers of a good book.</p>
                 <AuthoreCard/>
            </div>
        </div>
    )
}
function Post2(){
    return(
        <div className='item '>
            <div className='images'>
            <Link href={'/'}> <Image src={'/img3.jpg'} alt = "image" height={350} width={500} className='rounded'/></Link>
            </div>
            <div className=' info flex justify-center flex-col py-4'>
            <div className="cat">
                    <Link href={'/'} className="text-orange-600 hover:text-orange-800">The Art of Writing</Link>
                    <Link href={'/'} className="text-gray-800 hover:text-gray-600">Jan 1, 2025</Link>
                </div>
                <div className="title">
                    <Link href={'/'} className="text-xl font-bold text-gray-800 hover:text-gray-600">The art of writing</Link>
                </div>
                 <p className="text-gray-500 py-3">Book lovers dont just read—they experience, dream, and travel without ever leaving their seat. Book lovers are proof that magic exists between the covers of a good book.</p>
                 <AuthoreCard/>
            </div>
        </div>
    )
}
function Post3(){
    return(
        <div className='item '>
            <div className='images'>
            <Link href={'/'}> <Image src={'/img4.jpg'} alt = "image" height={350} width={500} className='rounded'/></Link>
            </div>
            <div className=' info flex justify-center flex-col py-4'>
            <div className="cat">
                    <Link href={'/'} className="text-orange-600 hover:text-orange-800">The Art of Writing</Link>
                    <Link href={'/'} className="text-gray-800 hover:text-gray-600">Jan 1, 2025</Link>
                </div>
                <div className="title">
                    <Link href={'/'} className="text-xl font-bold text-gray-800 hover:text-gray-600">You want your child to read these books</Link>
                </div>
                 <p className="text-gray-500 py-3">Book lovers dont just read—they experience, dream, and travel without ever leaving their seat. Book lovers are proof that magic exists between the covers of a good book.</p>
                 <AuthoreCard/>
            </div>
        </div>
    )
}
function Post4(){
    return(
        <div className='item '>
            <div className='images'>
            <Link href={'/'}> <Image src={'/img2.jpg'} alt = "image" height={350} width={500} className='rounded'/></Link>
            </div>
            <div className=' info flex justify-center flex-col py-4'>
            <div className="cat">
                    <Link href={'/'} className="text-orange-600 hover:text-orange-800">The Art of Writing</Link>
                    <Link href={'/'} className="text-gray-800 hover:text-gray-600">Jan 1, 2025</Link>
                </div>
                <div className="title">
                    <Link href={'/'} className="text-xl font-bold text-gray-800 hover:text-gray-600">“The Traitor’s Daughter”</Link>
                </div>
                 <p className="text-gray-500 py-3">Book lovers dont just read—they experience, dream, and travel without ever leaving their seat. Book lovers are proof that magic exists between the covers of a good book.</p>
                 <AuthoreCard/>
            </div>
        </div>
    )
}
function Post5(){
    return(
        <div className='item '>
            <div className='images'>
            <Link href={'/'}> <Image src={'/img6.jpg'} alt = "image" height={350} width={500} className='rounded'/></Link>
            </div>
            <div className=' info flex justify-center flex-col py-4'>
            <div className="cat">
                    <Link href={'/'} className="text-orange-600 hover:text-orange-800">The Art of Writing</Link>
                    <Link href={'/'} className="text-gray-800 hover:text-gray-600">Jan 1, 2025</Link>
                </div>
                <div className="title">
                    <Link href={'/'} className="text-xl font-bold text-gray-800 hover:text-gray-600">8 must-read books</Link>
                </div>
                 <p className="text-gray-500 py-3">Book lovers dont just read—they experience, dream, and travel without ever leaving their seat. Book lovers are proof that magic exists between the covers of a good book.</p>
                 <AuthoreCard/>
            </div>
        </div>
    )
}
function Post6(){
    return(
        <div className='item '>
            <div className='images'>
            <Link href={'/'}> <Image src={'/img5.jpg'} alt = "image" height={350} width={500} className='rounded'/></Link>
            </div>
            <div className=' info flex justify-center flex-col py-4'>
            <div className="cat">
                    <Link href={'/'} className="text-orange-600 hover:text-orange-800">The Book Lover</Link>
                    <Link href={'/'} className="text-gray-800 hover:text-gray-600">Jan 1, 2025</Link>
                </div>
                <div className="title">
                    <Link href={'/'} className="text-xl font-bold text-gray-800 hover:text-gray-600">My new digital reading habits</Link>
                </div>
                 <p className="text-gray-500 py-3">Book lovers dont just read—they experience, dream, and travel without ever leaving their seat. Book lovers are proof that magic exists between the covers of a good book.</p>
                 <AuthoreCard/>
            </div>
        </div>
    )
}

