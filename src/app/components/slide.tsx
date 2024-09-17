/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect } from "react";
import Image from "next/image";
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";

interface slidedProp{
  id: number;
  image: string;
}

export default function Slide() {
  const slides: slidedProp[] = [
    {
      id: 1,
      image: "1.jpg",
    },
    {
      id: 2,
      image: "2.jpg",
    },
    {
      id: 3,
      image: "3.jpg",
    },
  ]

  let slideIndex = 0;
  useEffect(() => {
    showSlide(slideIndex);
  }, [slideIndex]);

  useEffect(() => {
    const interval = setInterval(() => showSlide((slideIndex += 1)), 15000);
    return () => clearInterval(interval);
  }, []);

  function nextSlide() {
    showSlide((slideIndex += 1));
  }

  function preSlide() {
    showSlide((slideIndex -= 1));
  }

  function showSlide(n: number) {
    const slides = document.getElementsByClassName("slideItems") as HTMLCollectionOf<HTMLElement>;
    const dots = document.getElementsByClassName("dot") as HTMLCollectionOf<HTMLElement>;
   
    if (n > slides.length - 1) {
      slideIndex = 0;
    }
    if (n < 0) {
      slideIndex = slides.length - 1;
    }
    for (let i = 0; i < slides.length; i++) {
      if (slideIndex == i) {
        slides[i].style.display = "block";
      } else {
        slides[i].style.display = "none";
      }
    }
    for (let i = 0; i < slides.length; i++) {
        if (slideIndex == i) {
          slides[i].style.display = "block";
        } else {
          slides[i].style.display = "none";
        }
      }

      for (let i = 0; i < dots.length; i++) {
        if (slideIndex == i) {
          dots[i].style.transition = "0.5s";
          dots[i].style.width = "2rem";
        } else {
            dots[i].style.transition = "0.5s";
            dots[i].style.width = "0.5rem";
        }
      }
  }

  function currentSlide(n: number){
    showSlide(slideIndex = n);
  }

  return (
    <section className="carousel group w-full h-700 relative">
        {/* Move slide button */}
        <div className="w-full h-700 top-0 absolute z-10" 
      >
        <a
        id="prev"
        className="opacity-0 absolute right-5 p-2 bg-white top-[50%] transition ease-in delay-100 cursor-pointer z-100 hover:bg-slate-900 hover:text-white
        group-hover:opacity-100"
        onClick={() => nextSlide()}
      >
        <MdNavigateNext className="text-[48px]" />
      </a>
      <a
        id="next"
        className="opacity-0 absolute left-5 p-2 bg-white top-[50%] transition ease-in delay-100 cursor-pointer z-200 hover:bg-slate-900 hover:text-white
        group-hover:opacity-100"
        onClick={() => preSlide()}
      >
        <MdNavigateBefore className="text-[48px]" />
      </a>
    {/* Dot button */}
      <ul className="absolute z-50 left-[47%] list-none top-120 cursor-pointer w-auto space-x-2 block">
      {slides.map((item) => (
         <li key={item.id} className={`dot w-${item.id - 1 === 0 ? '8' : '2'} h-2 rounded-full bg-slate-100 inline-block`} onClick={()=>currentSlide(item.id -1)}></li>)
        )}
      </ul>
        </div>
        {/* Slide item */}
        {slides.map((item) => (
          <div key={item.id} id={`slide${item.id}`} className="absolute z-5 w-full h-700 slideItems animate-showSlide block">
          <Image
            src={`/images/slide/${item.image}`}
            alt={`Slide ${item.id}`}
            layout="fill"
            className="object-cover"
            priority={true}
            quality={100}
            />
        </div>)
        )}
    </section>
  );
}
