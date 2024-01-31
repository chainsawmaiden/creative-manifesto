'use client'

import Image, { StaticImageData } from "next/image";
import Draggable, {DraggableCore} from "react-draggable";

import human1 from "@/public/human1.png";
import human2 from "@/public/human2.png";
import human3 from "@/public/human3.png";
import human4 from "@/public/human4.png";
import human5 from "@/public/human5.png";
import human6 from "@/public/human6.gif";
import human7 from "@/public/human7.png";
import human8 from "@/public/human8.png";
import human9 from "@/public/human9.png";
import human10 from "@/public/human10.png";
import human11 from "@/public/human11.png";
import human12 from "@/public/human12.png";
import human13 from "@/public/human13.png";
import human14 from "@/public/human14.png";
import human15 from "@/public/human15.png";
import human16 from "@/public/human16.png";
import human17 from "@/public/human17.png";
import human18 from "@/public/human18.png";
import human19 from "@/public/human19.png";
import human20 from "@/public/human20.png";
import human21 from "@/public/human21.png";
import human22 from "@/public/human22.png";
import human23 from "@/public/human23.png";
import human24 from "@/public/human24.png";

import manifesto1 from "@/public/manifesto1.png";
import manifesto2 from "@/public/manifesto2.png";
import manifesto3 from "@/public/manifesto3.png";
import manifesto4 from "@/public/manifesto4.png";
import manifesto5 from "@/public/manifesto5.png";
import manifesto6 from "@/public/manifesto6.png";
import manifesto7 from "@/public/manifesto7.png";
import manifesto8 from "@/public/manifesto8.png";
import manifesto9 from "@/public/manifesto9.png";
import manifesto10 from "@/public/manifesto10.png";
import manifesto11 from "@/public/manifesto11.png";
import manifesto12 from "@/public/manifesto12.png";
import manifesto13 from "@/public/manifesto13.png";
import manifesto14 from "@/public/manifesto14.png";
import manifesto15 from "@/public/manifesto15.png";
import manifesto16 from "@/public/manifesto16.png";

const imgs = [human1, human2, human3, human4, human5, human6, human7, human8, human9, human10, human11, human12, human13, human14, human15, human16, human17, human18, human19, human20, human21, human22, human23, human24,
manifesto1, manifesto2, manifesto3, manifesto4, manifesto5, manifesto6, manifesto7, manifesto8, manifesto9, manifesto10, manifesto11, manifesto12, manifesto13, manifesto14, manifesto15, manifesto16,] as StaticImageData[];


export default function Home() {
  return (
    <main>
      <div className='inline-flex justify-center items-center p-12 rounded-full border-black border-2'>
        <p className="font-arial font-normal text-9xl text-center w-[73.5rem]">This manifesto will change as you see fit.</p>
      </div>
      <Draggable>
        <Image src={human1} alt='' className='w-80 h-auto cursor-pointer pointer-events-auto'/>
      </Draggable>
    </main>
  );
}
