import React, { useCallback, useEffect, useState } from "react";
import dasktop from "./image/desktop-11-65x65.webp";
import laptop from "./image/laptop-65x65.webp";
import keyboard from "./image/keyboard-65x65.webp";
import router from "./image/router-65x65.webp"
const Banner = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const carouselImages = [
    "https://i.postimg.cc/dQBqbc6B/logitech-slider-2-1024x476.webp",
    "https://i.postimg.cc/rFZqpGvR/gpu-monitor-offer-slider-3-1024x476.webp",
    "https://images.unsplash.com/photo-1719749990914-a3ba54e6343f?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1467195468637-72eb862bb14e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    
  ];
  const prevSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === 0 ? carouselImages.length - 1 : currentSlider - 1
    );
  const nextSlider = useCallback(
    () =>
      setCurrentSlider((currentSlider) =>
        currentSlider === carouselImages.length - 1 ? 0 : currentSlider + 1
      ),
    [carouselImages.length]
  );

  // if you don't want to change the slider automatically then you can just remove the useEffect
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlider();
    }, 10000);
    return () => clearInterval(intervalId);
  }, [nextSlider]);

  return (
    <div className="container mx-auto">
      <div className="flex md:flex-row flex-col-reverse md:pl-2  border-l-2 hover:border-green-300   rounded-xl">
        {/* left site */}
        
        <div >
          <h1 className="text-center mt-1 md:hidden ">Category</h1>
          <div className="flex justify-center items-center">

          <hr  className="w-40 "/>
          </div>
       <div className="flex md:flex-col md:justify-around gap-x-1  md:mr-1 md:m-0 ml-8 mr-8 mt-2 h-full   ">
             {/* 1 */}
             <div className="border hover:border-green-400 hover:bg-base-200 rounded-xl md:h-28 h-20 md:w-44 w-32  flex justify-center items-center cursor-pointer">
            <img  src={dasktop} alt="" />
          </div>
          {/* 2 */}
          <div className="border hover:border-green-400 hover:bg-base-200 rounded-xl  md:h-28 h-20 md:w-44 w-32 flex justify-center items-center cursor-pointer">
            <img   src={laptop} alt="" />
          </div>
          {/* 3 */}
          <div className="border hover:border-green-400 hover:bg-base-200 rounded-xl  md:h-28 h-20 md:w-44 w-32 flex justify-center items-center cursor-pointer">
            <img   src={keyboard} alt="" />
          </div>
          {/* 4 */}
          <div className="border hover:border-green-400 hover:bg-base-200 rounded-xl  md:h-28 h-20 md:w-44 w-32 flex justify-center items-center cursor-pointer">
            <img   src={router} alt="" />
          </div>
       </div>
        </div>
        {/* right site */}
        <div className="flex h-60 w-full md:h-[470px] lg:h-[540px] relative overflow-hidden">
          {/* arrow left */}
          <button
            onClick={prevSlider}
            className="absolute top-1/2 left-3 z-50 flex justify-center items-center   rounded-full w-6 h-6 md:w-8 md:h-8"
          >
            <svg
              className="icon h-4 w-4 fill-black/50 md:h-6 md:w-6"
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path>
            </svg>
          </button>
          {/* arrow right */}
          <button
            onClick={nextSlider}
            className="absolute top-1/2 z-50 right-3  flex justify-center items-center   rounded-full w-6 h-6 md:w-8 md:h-8"
          >
            <svg
              className="icon h-4 w-4 fill-black/50 md:h-6 md:w-6"
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
              transform="rotate(180)"
            >
              <path d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path>
            </svg>
          </button>
          {/* dots */}
          <div className="flex justify-center items-center rounded-full z-50 absolute bottom-4 w-full gap-1">
            {carouselImages.map((img, idx) => (
              <button
                key={`${img}_${idx}`}
                onClick={() => setCurrentSlider(idx)}
                className={`rounded-full duration-500 bg-white ${
                  currentSlider === idx ? "w-8" : "wz-2"
                } h-2`}
              ></button>
            ))}
          </div>
          {/* Carousel container */}
          <div
            className="ease-linear duration-500 flex transform-gpu"
            style={{ transform: `translateX(-${currentSlider * 100}%)` }}
          >
            {/* sliders */}
            {carouselImages.map((slide, idx) => (
              <img
                key={slide}
                src={slide}
                className="min-w-full h-60 bg-black/20 sm:h-96 md:h-[540px] object-cover"
                alt={`Slider - ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
