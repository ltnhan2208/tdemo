import Image from "next/image";
import pin1 from "../../../../public/images/pin-collection/1.jpg";
import pin2 from "../../../../public/images/pin-collection/2.jpg";
import pin3 from "../../../../public/images/pin-collection/3.jpg";
import pin4 from "../../../../public/images/pin-collection/4.jpg";
import pin5 from "../../../../public/images/pin-collection/5.jpg";
import MoveBgBtn from "@/app/components/move-background-label";
import Link from "next/link";

export default function PinCollection() {
  return (
    <div className="flex flex-row w-full space-x-5">
      <Link
        href="google.com"
        className="block group w-1/2 h-600 box-border overflow-hidden"
      >
        <MoveBgBtn
          className="absolute z-10 left-10 -bottom-10"
          title="Chủ đề nhân gian"
          content="Nét vẽ tay họa dấu riêng"
        />
        <Image
          src={pin1}
          alt="Pin 1"
          className="w-full h-full group-hover:scale-105 transition duration-500 ease-linear relative z-5"
          priority={true}
          quality={100}
          placeholder="blur"
        />
      </Link>
      <div className="w-1/2 h-600 grid grid-cols-2 gap-5">
        <Link
        href="google.com"
        className="relative group box-border overflow-hidden">
          <MoveBgBtn
            className="absolute z-10 left-10 top-5"
            title="Chủ đề nhân gian"
            content="Nét vẽ tay họa dấu riêng"
          />
          <Image
            src={pin2}
            alt="Pin 2"
            className="w-full h-full group-hover:scale-105 transition duration-500 ease-linear relative z-5"
            priority={true}
            quality={100}
            placeholder="blur"
          />
        </Link>
        <Link
        href="google.com"
        className="relative group block box-border overflow-hidden">
          <MoveBgBtn
            className="absolute z-10 left-10 top-5"
            title="Chủ đề nhân gian"
            content="Nét vẽ tay họa dấu riêng"
          />
          <Image
            src={pin3}
            alt="Pin 3"
            className="w-full h-full group-hover:scale-105 transition duration-500 ease-linear relative z-5"
            priority={true}
            quality={100}
            placeholder="blur"
          />
        </Link>
        <Link
        href="google.com"
        className="relative group block box-border overflow-hidden">
          <MoveBgBtn
            className="absolute z-10 left-10 top-5"
            title="Chủ đề nhân gian"
            content="Nét vẽ tay họa dấu riêng"
          />
          <Image
            src={pin4}
            alt="Pin 4"
            className="w-full h-full group-hover:scale-105 transition duration-500 ease-linear relative z-5"
            priority={true}
            quality={100}
            placeholder="blur"
          />
        </Link>
        <Link
        href="google.com"
        className="relative group box-border overflow-hidden">
          <MoveBgBtn
            className="absolute z-10 left-10 top-5"
            title="Chủ đề nhân gian"
            content="Nét vẽ tay họa dấu riêng"
          />
          <Image
            src={pin5}
            alt="Pin 5"
            className="w-full h-full group-hover:scale-105 transition duration-500 ease-linear relative z-5"
            priority={true}
            quality={100}
            placeholder="blur"
          />
        </Link>
      </div>
    </div>
  );
}
