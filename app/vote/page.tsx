"use client"

import Link from 'next/link'
import React, {useState} from 'react'

import { imgs, userVote } from '@/lib/data'
import Image, { StaticImageData } from 'next/image'

export default function Page() {
    const [votes, setVotes] = useState(userVote)

    function handleClick(num: number, index: number): void {
        const newVotes = votes.map((vote, i) => {
            if (i === index) {
              // Increment the clicked counter
              return num;
            } else {
              return vote;
            }
        });
        setVotes(newVotes);
        console.log(votes)
    }

    function saveData(): void {
        
    }

    return (
    <main className='w-full max-w-sm mx-auto text-center overflow-x-hidden font-arial flex flex-col py-8'>
        <h1 className='text-4xl mb-6'>You believe in...</h1>
        
        <Link href='/' className='fixed bottom-4' onClick={() => saveData()}>
            <div className='rounded-full px-4 py-2 mx-2 border-black border-solid border-[1px] bg-white z-50 hover:animate-pulse'>← Back</div>
        </Link>
        
        {imgs.map((image, index) => 
                <>
                    <Image src={image.src} alt='' className='w-full h-auto'/>
                    <div className='flex w-full place-content-between mb-4'>
                        <p onClick={() => handleClick(2, index)} className={`${votes[index] === 2 || votes[index] === -1 ? 'opacity-100' : 'opacity-30'} cursor-pointer`}>YES</p>
                        <p onClick={() => handleClick(1, index)} className={`${votes[index] === 1 || votes[index] === -1 ? 'opacity-100' : 'opacity-30'} cursor-pointer`}>DON'T CARE</p>
                        <p onClick={() => handleClick(0, index)} className={`${votes[index] === 0 || votes[index] === -1 ? 'opacity-100' : 'opacity-30'} cursor-pointer`}>NO</p>
                    </div>
                </>
                
            )
        }

        <p>{votes}</p>

    </main>
    )
}
