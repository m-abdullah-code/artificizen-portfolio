'use client';
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { carouselData } from "@/app/data/HomePage/Testimonials";
import playVideo from "../../../public/assets/Testimonials/play_video.svg";

// Slick CSS imports abhi bhi zaroori hain structure ke liye
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CenterMode() {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "0px",
        slidesToShow: 3,
        speed: 500,
        focusOnSelect: true,
        arrows: false,
    };

    return (
        <div className="w-full bg-black py-20 overflow-hidden">

            {/* MAGIC HAPPENS HERE:
         Hum Tailwind ke Arbitrary selectors use kar rahe hain taaki 
         External CSS ki zaroorat na pade.
      */}
            <div className="
        [&_.slick-list]:overflow-visible
        [&_.slick-list]:py-10
        
        /* Side Slides Styling (Default) */
        [&_.slide-card]:scale-[0.85]
        [&_.slide-card]:opacity-60
        [&_.slide-card]:transition-all
        [&_.slide-card]:duration-500
        [&_.slide-card]:blur-[1px]
        
        /* Center Slide Styling (Active) */
        [&_.slick-center_.slide-card]:scale-110
        [&_.slick-center_.slide-card]:opacity-100
        [&_.slick-center_.slide-card]:blur-0
        [&_.slick-center_.slide-card]:z-10
        [&_.slick-center_.slide-card]:shadow-2xl
        
        /* Play Button Visibility */
        [&_.play-btn]:opacity-0
        [&_.slick-center_.play-btn]:opacity-100
        
        /* Overlay Visibility */
        [&_.slide-overlay]:opacity-100
        [&_.slick-center_.slide-overlay]:opacity-0
      ">

                <Slider {...settings}>
                    {carouselData.carouselImages.map((img, index) => (
                        <div key={index} className="outline-none px-4">

                            {/* Card Container (Targeted by .slide-card above) */}
                            <div className="slide-card relative group">

                                {/* Gradient Border */}
                                <div className="p-[3px] rounded-[30px] bg-gradient-to-b from-[#FF9900] to-[#3366FF] relative">

                                    {/* Image Wrapper */}
                                    <div className="relative h-[400px] w-full rounded-[27px] overflow-hidden bg-gray-800">
                                        <Image
                                            src={img}
                                            alt="Testimonial"
                                            layout="fill"
                                            objectFit="cover"
                                            className="transition-transform duration-500"
                                        />

                                        {/* Dark Overlay for non-active slides */}
                                        <div className="slide-overlay absolute inset-0 bg-black/60 transition-opacity duration-300"></div>

                                        {/* Play Button */}
                                        <div className="play-btn absolute inset-0 flex items-center justify-center transition-all duration-500 scale-90 hover:scale-100 cursor-pointer">
                                            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 shadow-lg">
                                                <Image src={playVideo} alt="Play" width={24} height={24} />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Vertical Name Text */}
                                    <div className="absolute -right-2 bottom-12 z-20">
                                        <h3
                                            className="text-white text-3xl md:text-4xl font-bold tracking-widest uppercase"
                                            style={{
                                                writingMode: 'vertical-rl',
                                                transform: 'rotate(180deg)',
                                                textShadow: '0px 2px 4px rgba(0,0,0,0.5)'
                                            }}
                                        >
                                            {carouselData.testimonial.names[index % carouselData.testimonial.names.length]}
                                        </h3>
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default CenterMode;