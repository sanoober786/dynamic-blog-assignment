import React from "react";
import Link from "next/link";
import Image from "next/image";
import AuthoreCard from "./AuthoreCard";
export default function Section4(){
    return(
        <section className="container mx-auto md:px-20 py-16 ">
            <div className="grid lg:grid-cols-2 gap-6">
                <div className="items">
                <h1 className='font-bold text-4xl py-12'>Post 1</h1>
                <div className="flex flex-col gap-6">
                    {Post1()}
                    {Post2()}
                    {Post3()}
                    {Post4()}
                </div>
                </div>
                <div className="items">
                <h1 className='font-bold text-4xl py-12'>Post 2</h1>
                <div className="flex flex-col gap-6">
                    {Post1()}
                    {Post2()}
                    {Post3()}
                    {Post4()}
                </div>
                </div>
            </div>
        </section>
    )
};

function Post1(){
    return(
        <div className="flex gap-5">
            <div className="image flex flex-col justify-start">
            <Link href={'/'}> <Image src={'/img1.jpg'} alt = "image" height={250} width={300} className='rounded'/></Link>
            </div>
            <div className="info flex flex-col justify-center">
            <div className="cat">
                    <Link href={'/'} className="text-orange-600 hover:text-orange-800">The Art of Writing</Link>
                    <Link href={'/'} className="text-gray-800 hover:text-gray-600">Jan 1, 2025</Link>
                </div>
                <div className="title">
                    <Link href={'/'} className="text-xl font-bold text-gray-800 hover:text-gray-600"></Link>
                </div>
                <p className="text-gray-500 py-3">Book lovers dont just read—they experience, dream, and travel without ever leaving their seat. Book lovers are proof that magic exists between the covers of a good book.</p>
                <AuthoreCard/>
            </div>
        </div>
    )
};

function Post2(){
    return(
        <div className='flex gap-5'>
            <div className='images  flex flex-col justify-start'>
            <Link href={'/'}> <Image src={'/img5.jpg'} alt = "image" height={150} width={500} className='rounded'/></Link>
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

function Post3(){
    return(
        <div className='flex gap-5'>
            <div className='images  flex flex-col justify-start'>
            <Link href={'/'}> <Image src={'/img4.jpg'} alt = "image" height={150} width={500} className='rounded'/></Link>
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
        <div className='flex gap-5'>
            <div className='images  flex flex-col justify-start'>
            <Link href={'/'}> <Image src={'/img2.jpg'} alt = "image" height={150} width={500} className='rounded'/></Link>
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

