'use client'

import Image, { StaticImageData } from "next/image";
import Draggable, {DraggableCore} from "react-draggable";
import { useState, useEffect } from 'react';
import {imgs, imgsType, name, userVote} from '@/lib/data'
import Link from "next/link";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

function getRandom(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

function widthToString(w: number): string {
  return `w-[${w}rem]`
}

export default function Home() {
  const { height, width } = useWindowDimensions();
  const [userImages, setUserImages] = useState(imgs);
  const [showVotes, setShowVotes] = useState(false as boolean);
  const [previewImage, setPreviewImage] = useState(imgs[0].src as StaticImageData);
  const [showImage, setShowImage] = useState(false as boolean);
  const [votes, setVotes] = useState(userVote);
  const size = 2 as number;
  const widthMultiplier = 36 as number;

  function displayVotes() {setShowVotes(true);}
  function hideVotes() {setShowVotes(false);}

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

  function imageZoom(img: StaticImageData) {
    setPreviewImage(img);
    setShowImage(old => !old);
  }

  return (
    <main className={`h-[${height*size}px] w-[${width*size}px] overflow-hidden `}>

      <div onClick={() => setShowImage(false)} className={`${showImage ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} transition-all duration-500 cursor-zoom-out w-screen h-screen fixed z-50 bg-white bg-opacity-90 py-12 pl-16 pr-[29rem]`} >
        <Image src={previewImage} className="w-full h-full object-contain" alt=''/>  
      </div>
      
      <div className='group' onClick={displayVotes}>
        <h1 className={`group-hover:opacity-0 opacity-100 transition-all font-arial font-normal text-7xl text-center w-[35rem] h-fit fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}>Things to believe in: a manifesto.</h1>
        <h1 className={`group-hover:opacity-100 group-hover:animate-pulse opacity-0 cursor-pointer transition-all font-arial font-normal text-7xl text-center w-[35rem] h-fit fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}>{name}, what do you believe in?</h1>
      </div>

        {
          userImages.map((image: imgsType, index: number) =>
            (
              <Draggable key={index} defaultPosition={{x: getRandom(16, width*size-(widthMultiplier * 12)), y: getRandom(16, height*size - (widthMultiplier * 12))}}>
                <div className={`overflow-hidden absolute cursor-move ${image.rounded && 'rounded-md'} shadow-lg`}>
                  <Image src={image.src} alt='' className={`h-auto pointer-events-none transition-all duration-500`} style={{width: (image.width + votes[index]) * widthMultiplier}}/>
                </div>
              </Draggable>
            )
          )
        }

      <section className={`${showVotes ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} px-4 transition-all duration-500 bg-white w-[24rem] z-50 fixed h-screen overflow-x-clip overflow-y-scroll right-0 text-center font-arial flex flex-col pt-8 pb-20`}>
        <h1 className='text-4xl mb-6'>You believe in...</h1>
        
        {true ? <div className='fixed w-[21rem] bottom-4 cursor-pointer rounded-full px-4 py-2  border-black border-solid border-[1px] bg-white z-50 hover:animate-pulse' onClick={() => hideVotes()}>
            ← Back
        </div> :

        <div className='top-6 right-6 fixed cursor-pointer rounded-full px-3 py-1 border-black border-solid border-[1px] bg-white z-50 hover:animate-pulse' onClick={() => hideVotes()}>X</div>}
        
        {userImages.map((image, index) => 
                <>
                    <Image src={image.src} alt='' className={`${image.rounded && 'rounded-md'} w-full h-auto ${showImage ? 'cursor-zoom-out' : 'cursor-zoom-in'}`} onClick={() => imageZoom(image.src)} onMouseOver={() => {showImage && setPreviewImage(image.src)}}/>
                    <div className='flex w-full place-content-between mb-4'>
                        <p onClick={() => handleClick(1, index)} className={`${votes[index] === 1 || votes[index] === 2 ? 'opacity-100' : 'opacity-30'} cursor-pointer`}>YES</p>
                        <p onClick={() => handleClick(0, index)} className={`${votes[index] === 0 || votes[index] === 2 ? 'opacity-100' : 'opacity-30'} cursor-pointer`}>DON'T CARE</p>
                        <p onClick={() => handleClick(-1, index)} className={`${votes[index] === -1 || votes[index] === 2 ? 'opacity-100' : 'opacity-30'} cursor-pointer`}>NO</p>
                    </div>
                </>
                
            )
        }

      </section>
    </main>
  );
}
