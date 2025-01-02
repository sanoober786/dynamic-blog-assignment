import React from "react";
import Image from "next/image";
import Link from "next/link";
import AuthoreCard from "@/components/AuthoreCard";


export default function Section1(){
    return(
        <section className="container mx-auto md:px-20 py-16 " >
            <div className="container mx-auto md:px-20">
    
          {Slide()}
            </div>
        </section>
    )
};

function Slide(){
    return(
        <div className="grid md:grid-cols-2 gap-12">
            <div className="image">
               <Link href={'/'}> <Image src={'/img5.jpg'} alt = "image" height={600} width={600}/></Link>
            </div>
            <div className="info ">
                <div className="cat">
                    <Link href={'/'} className="text-orange-600 hover:text-orange-800">The Art of Writing</Link>
                    <Link href={'/'} className="text-gray-800 hover:text-gray-600">Jan 1, 2025</Link>
                </div>
                <div className="title">
                    <Link href={'/'} className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600">The Books Lover</Link>
                </div>
                <p className="text-gray-500 py-3">Book lovers are dreamers, adventurers, and seekers of wisdom, finding magic in every turn of the page. For them, books are not just objects but portals to other worlds, where stories come alive, characters become companions, and lessons unfold like whispers from the past. They treasure the scent of old paper and the crispness of new pages, finding comfort in the quiet company of a well-loved story. Libraries feel like sanctuaries, bookstores like treasure troves, and every shelf is a universe waiting to be explored. To a book lover, time spent reading is never wasted—it’s an investment in imagination, empathy, and the joy of discovery. In their hands, a single book holds infinite possibilities, and through their love of stories, they carry a little piece of magic wherever they go.</p>
                <AuthoreCard/>
            </div>
        </div>
    )
}