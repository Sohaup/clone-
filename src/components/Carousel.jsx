import React, { useEffect, useRef, useState } from 'react'
import { Splide, SplideSlide } from "@splidejs/react-splide"
import { Splide as SplideController } from '@splidejs/splide'
import img1 from "../assets/parrot_imgs/img1.png"
import img2 from "../assets/parrot_imgs/img2.png"
import img3 from "../assets/parrot_imgs/img3.png"
import img4 from "../assets/parrot_imgs/img4.png"
import img5 from "../assets/parrot_imgs/img5.png"
import img6 from "../assets/parrot_imgs/img6.png"
import img7 from "../assets/parrot_imgs/img7.png"
import img8 from "../assets/parrot_imgs/img8.png"
import img9 from "../assets/parrot_imgs/img9.png"
import img10 from "../assets/parrot_imgs/img10.png"

export default function Carousel() {
    const carouselRef = useRef(null);
    const carouselImgs  = [img1 , img2 , img3 , img4 , img5 , img6 , img7 , img8 , img9 , img10];
    useEffect(() => {
        activateGlide();
    }, [])

    function activateGlide() {

    }
    return (
        <div className="carousel my-8 ">
            <Splide options={{
                type: "loop",
                autoplay: true
            }} >
             <RenderSlides imgs={carouselImgs}/> 
            </Splide>
        </div>
    )
}

function RenderSlides({imgs=[]}) {
    return (
        <>
        {imgs.map((img )=> <SplideSlide><img key={imgs} src={img} alt={`carousel img ${img}`}/></SplideSlide>)}
        </>
    ) 
}
