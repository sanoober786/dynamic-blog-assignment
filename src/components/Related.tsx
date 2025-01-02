import React from "react";
import Link from "next/link";
import Image from "next/image";
import AuthoreCard from "./AuthoreCard";


export default function Related(){
    return(
        <section className="pt-20 pl-[110px] pr-20">
            <h1 className="font-bold text-4xl py-10">Related</h1>
            <div className="flex flex-col gap-10">
                {Post1()}
                {Post2()}
                {Post3()}
                {Post4()}
            </div>
            </section>
            
    )   
}

function Post1(){
    return(
        <div className='item grid md:grid-cols-2 gap-12  '>
            <div className='images'>
            <Link href={'/'}> <Image src={'/img5.jpg'} alt = "image" height={150} width={500} className='rounded'/></Link>
            </div>
            <div className=' info flex justify-center flex-col py-4'>
            <div className="cat">
                    <Link href={'/'} className="text-orange-600 hover:text-orange-800">The Book Lover</Link>
                    <Link href={'/'} className="text-gray-800 hover:text-gray-600">Jan 1, 2025</Link>
                </div>
                <div className="title">
                    <Link href={'/'} className="text-xl font-bold text-gray-800 hover:text-gray-600">My new digital reading habits</Link>
                </div>
                 <p className="text-gray-500 py-3">Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....</p>
                 <AuthoreCard/>
            </div>
        </div>
    )
};
function Post2(){
    return(
        <div className='item grid md:grid-cols-2 gap-12'>
            <div className='images'>
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
                 <p className="text-gray-500 py-3">Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....</p>
                 <AuthoreCard/>
            </div>
        </div>
    )
}
function Post3(){
    return(
        <div className='item grid md:grid-cols-2 gap-12'>
            <div className='images'>
            <Link href={'/'}> <Image src={'/img1.jpg'} alt = "image" height={150} width={500} className='rounded'/></Link>
            </div>
            <div className=' info flex justify-center flex-col py-4'>
            <div className="cat">
                    <Link href={'/'} className="text-orange-600 hover:text-orange-800">The Art of Writing</Link>
                    <Link href={'/'} className="text-gray-800 hover:text-gray-600">Jan 1, 2025</Link>
                </div>
                <div className="title">
                    <Link href={'/'} className="text-xl font-bold text-gray-800 hover:text-gray-600">“The Traitor’s Daughter”</Link>
                </div>
                 <p className="text-gray-500 py-3">Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....</p>
                 <AuthoreCard/>
            </div>
        </div>
    )
}
function Post4(){
    return(
        <div className='item grid md:grid-cols-2 gap-12'>
            <div className='images'>
            <Link href={'/'}> <Image src={'/img6.jpg'} alt = "image" height={150} width={500} className='rounded'/></Link>
            </div>
            <div className=' info flex justify-center flex-col py-4'>
            <div className="cat">
                    <Link href={'/'} className="text-orange-600 hover:text-orange-800">The Art of Writing</Link>
                    <Link href={'/'} className="text-gray-800 hover:text-gray-600">Jan 1, 2025</Link>
                </div>
                <div className="title">
                    <Link href={'/'} className="text-xl font-bold text-gray-800 hover:text-gray-600">8 must-read books</Link>
                </div>
                 <p className="text-gray-500 py-3">Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....</p>
                 <AuthoreCard/>
            </div>
        </div>
    )
};
