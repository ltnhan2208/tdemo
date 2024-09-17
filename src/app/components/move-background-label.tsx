"use client";
interface Props {
  className: string;
  title: string;
  content: string;
}

export default function MoveBgBtn({ className, title, content }: Props) {
  return (
    <div className={className}>
      <div
        className="relative text-white text-2xl overflow-hidden w-[150%]">
        {title}
        <span className="absolute block -bottom-1 translate-x-[-100%] w-full h-full top-0 bg-pink-600 group-hover:translate-x-[400px] transition duration-1000 ease-in-out"></span>
      </div>
      <p className="text-slate-300 text-sm uppercase group-hover:text-pink-600">
        {content}
      </p>
    </div>
  );
}
