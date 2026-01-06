import React from "react";
import Slider1 from "../assets/slider1.jpg";
import Slider2 from "../assets/slider2.jpg";
import Slider3 from "../assets/slider3.jpg";
import Slider4 from "../assets/slider4.jpg";

const Slider = () => {
  return (
    <div>
      
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
         
          <img
            src={Slider1}
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <div className="space-y-7">
               <h3 className="text-2xl md:text-4xl font-bold text-teal-900">Find The Best Toys For Your Kids</h3>
               <div className="flex justify-center items-center">
                <button className="btn bg-primary text-white ">Shop Now</button>
               </div>
            </div>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src={Slider2}
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>

             <div className="space-y-7">
               <h3 className="text-2xl md:text-4xl font-bold">Find The Best Toys For Your Kids</h3>
               <div className="flex justify-center items-center">
                <button className="btn bg-primary text-white ">Shop Now</button>
               </div>
            </div>

            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
           src={Slider3}
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>

 <div className="space-y-7">
               <h3 className="text-2xl md:text-4xl font-bold text-teal-500">Find The Best Toys For Your Kids</h3>
               <div className="flex justify-center items-center">
                <button className="btn bg-primary text-white ">Shop Now</button>
               </div>
            </div>

            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src={Slider4}
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>

             <div className="space-y-7">
               <h3 className="text-2xl md:text-4xl font-bold text-teal-500 ">Find The Best Toys For Your Kids</h3>
               <div className="flex justify-center items-center">
                <button className="btn bg-primary text-white ">Shop Now</button>
               </div>
            </div>

            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
