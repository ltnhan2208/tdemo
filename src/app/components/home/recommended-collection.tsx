"use client";
import Link from "next/link";
import { useRef } from "react";
import { FaRegHeart } from "react-icons/fa";

interface listItem {
  id: number;
  title: string;
  price: string;
  image1?: string;
  image2?: string;
}

export default function RecommendedCollection() {
  const linkImg = "/images/recommended-collection/";
  const listItem1: listItem[] = [
    {
      id: 1,
      title: "Thiep moi",
      price: "30.000",
      image1: "1.jpg",
      image2: "1_2.jpg",
    },
    {
      id: 2,
      title: "Thiep moi",
      price: "30.000",
      image1: "1.jpg",
      image2: "1_2.jpg",
    },
    {
      id: 3,
      title: "Thiep moi",
      price: "30.000",
      image1: "1.jpg",
      image2: "1_2.jpg",
    },
    {
      id: 4,
      title: "Thiep moi",
      price: "30.000",
      image1: "1.jpg",
      image2: "1_2.jpg",
    },
    {
      id: 5,
      title: "Thiep moi",
      price: "30.000",
      image1: "1.jpg",
      image2: "1_2.jpg",
    },
    {
      id: 6,
      title: "Thiep moi",
      price: "30.000",
      image1: "2.jpg",
      image2: "2_2.jpg",
    },
    {
      id: 7,
      title: "Thiep moi",
      price: "30.000",
      image1: "2.jpg",
      image2: "2_2.jpg",
    },
    {
      id: 8,
      title: "Thiep moi",
      price: "30.000",
      image1: "2.jpg",
      image2: "2_2.jpg",
    },
    {
      id: 9,
      title: "Thiep moi",
      price: "30.000",
      image1: "2.jpg",
      image2: "2_2.jpg",
    },
    {
      id: 10,
      title: "Thiep moi",
      price: "30.000",
      image1: "2.jpg",
      image2: "2_2.jpg",
    },
  ];

  const listItem2: listItem[] = [
    {
      id: 1,
      title: "Thiep moi",
      price: "30.000",
      image1: "1.jpg",
      image2: "1_2.jpg",
    },
    {
      id: 2,
      title: "Thiep moi",
      price: "30.000",
      image1: "1.jpg",
      image2: "1_2.jpg",
    },
    {
      id: 3,
      title: "Thiep moi",
      price: "30.000",
      image1: "1.jpg",
      image2: "1_2.jpg",
    },
    {
      id: 4,
      title: "Thiep moi",
      price: "30.000",
      image1: "1.jpg",
      image2: "1_2.jpg",
    },
    {
      id: 5,
      title: "Thiep moi",
      price: "30.000",
      image1: "1.jpg",
      image2: "1_2.jpg",
    },
    {
      id: 6,
      title: "Thiep moi",
      price: "30.000",
      image1: "2.jpg",
      image2: "2_2.jpg",
    },
    {
      id: 7,
      title: "Thiep moi",
      price: "30.000",
      image1: "2.jpg",
      image2: "2_2.jpg",
    },
    {
      id: 8,
      title: "Thiep moi",
      price: "30.000",
      image1: "2.jpg",
      image2: "2_2.jpg",
    }
  ];

  const scrollRef = useRef(null);
  let startX = 0;
  let scrollLeft = 0;
  let isDown = false;

  const handleMouseDown = (e) => {
    const slider = scrollRef.current;
    if (!slider) return;
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    slider.style.scrollBehavior = "smooth"; // Tắt chế độ scroll smooth trong quá trình kéo
  };

  const handleMouseLeave = () => {
    isDown = false;
  };

  const handleMouseUp = () => {
    const slider = scrollRef.current;
    if (!slider) return;
    isDown = false;
    slider.style.scrollBehavior = "smooth"; // Bật lại chế độ cuộn mượt sau khi kéo xong
  };

  const handleMouseMove = (e) => {
    const slider = scrollRef.current;
    if (!slider || !isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 0.3; // Giảm tốc độ cuộn
    slider.scrollLeft = scrollLeft - walk;
  };
  return (
    <section>
      <div className="w-90 relative left-5-per h-auto flex flex-col items-center">
        <ul className="list-none space-x-5 w-full text-center">
          <li className="inline-block cursor-pointer text-slate-500 hover:text-black">
            New product
          </li>
          <li className="inline-block text-xs">x</li>
          <li className="inline-block cursor-pointer text-slate-500 hover:text-black">
            Favorite product
          </li>
          <li className="inline-block text-xs">x</li>
          <li className="inline-block cursor-pointer text-slate-500 hover:text-black">
            Most viewed product
          </li>
        </ul>
        <br />
        <div className="w-full flex flex-row justify-around">
          <div className="relative h-auto gap-6 w-90 grid grid-cols-5 items-center box-border">
            {listItem1.map((item) => (
              <div key={item.id} className="group h-400-px w-72 items-center">
                <div
                  className="relative h-85-per w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${linkImg}${item.image1})` }}
                >
                  <div
                    className="h-full w-full bg-cover bg-center absolute opacity-0 hover:opacity-100 transition duration-700 ease-in-out"
                    style={{ backgroundImage: `url(${linkImg}${item.image2})` }}
                  ></div>
                </div>
                <div className="h-[15%] pt-5">
                  <div className="flex flex-row justify-between">
                    <span className="inline-block">Thiep trung thu</span>
                    <span className="inline-block pt-1 text-base cursor-pointer">
                      <FaRegHeart />
                    </span>
                  </div>
                  <div className="relative overflow-hidden">
                    <Link
                      href="#"
                      className="font-semibold w-0 top-0 absolute inset-0 block transition-all duration-500 ease-in-out -left-20 group-hover:left-0"
                    >
                      Option
                    </Link>
                    <span className="inline-block transition duration-500 ease-in-out group-hover:translate-x-[70%] group-hover:opacity-0">
                      11.000VND
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative w-max mt-10 uppercase cursor-pointer border-solid border-2 border-slate-300 py-2 px-24 text-sm
        hover:bg-black hover:text-white hover:border-black transition duration-300"
        >Xem tất cả</div>
      </div>
      <br />
      <br />
      <br />
      <div className="w-90 relative left-5-per h-max flex flex-col items-center">
        <ul className="list-none space-x-5 w-full text-center">
          <li className="inline-block text-xs">x</li>
          <li className="inline-block cursor-pointer text-slate-500 hover:text-black">
            Favorite product
          </li>
          <li className="inline-block text-xs">x</li>
        </ul>
        <br />
        <div
          className="h-90-per max-w-full space-x-7 flex flex-row box-border overflow-x-auto scrollbar-hidden"
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {listItem2.map((item) => (
            <div key={item.id} className="group h-350-px min-w-60 items-center">
               <div
                  className="relative h-85-per w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${linkImg}${item.image1})` }}
                >
                  <div
                    className="h-full w-full bg-cover bg-center absolute opacity-0 hover:opacity-100 transition duration-700 ease-in-out"
                    style={{ backgroundImage: `url(${linkImg}${item.image2})` }}
                  ></div>
                </div>
              <div className="h-[15%]">
                <div className="flex flex-row justify-between">
                  <span className="inline-block">Thiep trung thu</span>
                  <span className="inline-block pt-1 text-base cursor-pointer">
                    <FaRegHeart />
                  </span>
                </div>
                <div className="relative overflow-hidden">
                  <Link
                    href="#"
                    className="font-semibold w-0 top-0 absolute inset-0 block transition-all duration-500 ease-in-out -left-20 group-hover:left-0"
                  >
                    Option
                  </Link>
                  <span className="inline-block transition duration-500 ease-in-out group-hover:translate-x-[70%] group-hover:opacity-0">
                    11.000VND
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="relative w-max mt-10 uppercase cursor-pointer border-solid border-2 text-white border-pink-500 bg-pink-500 py-2 px-24 text-sm
        hover:bg-black hover:text-white hover:border-black transition duration-300"
        >Xem thêm</div>
      </div>
    </section>
  );
}
