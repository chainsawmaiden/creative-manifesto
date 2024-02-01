import Image, { StaticImageData } from "next/image";

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


export type imgsType = {
    src: StaticImageData,
    width: number,
    rounded?: boolean,
}

export const name = "Aditya" as string;

export const imgs = 
    [
        {
            src: human1,
            width: 4,
        },
        {
            src: human2,
            width: 3,
        },
        {
            src: human3,
            width: 9,
        },
        {
            src: human4,
            width: 5,
        },
        {
            src: human5,
            width: 2,
        },
        {
            src: human6,
            width: 10,
        },
        {
            src: human7,
            width: 14,
        },
        {
            src: human8,
            width: 3,
        },
        {
            src: human9,
            width: 1,
        },
        {
            src: human10,
            width: 5,
        },
        {
            src: human11,
            width: 4,
        },
        {
            src: human12,
            width: 5,
        },
        {
            src: human13,
            width: 3,
        },
        {
            src: human14,
            width: 11,
        },
        {
            src: human15,
            width: 9,
        },
        {
            src: human16,
            width: 1,
        },
        {
            src: human17,
            width: 5,
        },
        {
            src: human18,
            width: 6,
        },
        {
            src: human19,
            width: 7,
        },
        {
            src: human20,
            width: 10,
        },
        {
            src: human21,
            width: 14,
        },
        {
            src: human22,
            width: 10,
        },
        {
            src: human23,
            width: 4,
        },
        {
            src: human24,
            width: 2,
        },
        {
            src: manifesto1,
            width: 10,
            rounded: true,
        },
        {
            src: manifesto2,
            width: 3,
            rounded: true,
        },
        {
            src: manifesto3,
            width: 4,
            rounded: true,
        },
        {
            src: manifesto4,
            width: 3,
            rounded: true,
        },
        {
            src: manifesto5,
            width: 4,
            rounded: true,
        },
        {
            src: manifesto6,
            width: 5,
            rounded: true,
        },
        {
            src: manifesto7,
            width: 1,
            rounded: true,
        },
        {
            src: manifesto8,
            width: 3,
            rounded: true,
        },
        {
            src: manifesto9,
            width: 6,
            rounded: true,
        },
        {
            src: manifesto10,
            width: 4,
            rounded: true,
        },
        {
            src: manifesto11,
            width: 4,
            rounded: true,
        },
        {
            src: manifesto12,
            width: 3,
            rounded: true,
        },
        {
            src: manifesto13,
            width: 6,
            rounded: true,
        },
        {
            src: manifesto14,
            width: 8,
            rounded: true,
        },
        {
            src: manifesto15,
            width: 4,
            rounded: true,
        },
        {
            src: manifesto16,
            width: 5,
            rounded: true,
        },
    ] as imgsType[];

export const userVote = Array(imgs.length).fill(0) as number[];