"use client";

import React from "react";
import Image from "next/image";

import Dart from "../../../public/assets/AboutUs/dart1.png";
import Credit from "../../../public/assets/AboutUs/creditfixr1.png";
import Meomind from "../../../public/assets/AboutUs/meomind1.png";
import Google from "../../../public/assets/AboutUs/google1.png";
import Iqvia from "../../../public/assets/AboutUs/iqvia1.png";

const images = [
    { src: Dart, alt: "Dartmouth" },
    { src: Credit, alt: "Creditfixrr" },
    { src: Meomind, alt: "Meomind" },
    { src: Google, alt: "Google" },
    { src: Iqvia, alt: "Iqvia" },
];

const logoRow = [...images, ...images, ...images];

const LogoSlider = () => {
    return (
        <div className="w-full overflow-hidden bg-white py-8">
            <div className="flex review-marquee-rtl">
                {logoRow.map((image, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 px-4 sm:px-8 md:px-12 flex items-center justify-center"
                    >
                        <Image
                            src={image.src}
                            alt={image.alt}
                            width={140}
                            height={60}
                            className="
                object-contain 
                h-8 sm:h-10 md:h-14 
                w-auto 
                grayscale opacity-80 
                hover:grayscale-0 hover:opacity-100 
                transition-all duration-300
              "
                            priority
                        />
                    </div>
                ))}
            </div>

        </div>
    );
};

export default LogoSlider;
