import React from "react";
// import image hero
import imgaeHero from '../image/hero.png';
import { Link } from "react-router-dom";




const Hero = () => {

    return (
        <section className="bg-sky-200  h-[800px] py-24">
            <div className="container mx-auto flex justify-around h-full gap-16">
                {/* text */}
                <div className="flex flex-col justify-center">
                    <div className="font-semibold flex items-center uppercase">
                        <div className="w-10 h-[2px]  bg-red-500 mr-3"></div>
                        <div className="">New Trend</div>
                    </div>
                    <h1 className="text-[70px] leading-[1.1] 
                    font-light mb-4">AUTUMN SALE STYLISH
                        <br />
                        <span className="font-semibold">SHOPPING</span>
                    </h1>
                    <Link to={'/'} className="self-start uppercase font-semibold border-b-4 border-primary">Discover More</Link>
                </div>
                {/* Image */}
                <div className="hidden lg:flex lg:justify-end lg:w-full">
                    <img className="w-[50%]" src={imgaeHero} alt="" />
                </div>
            </div>
        </section >
    )
}

export default Hero;