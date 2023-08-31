"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineArrowLeft, MdArrowRight } from "react-icons/md";

export default function MainContent({ data, header }) {
  if (!data || !data.results) {
    return <div>Loading...</div>;
  } else {
    return (
      <main className="flex space-x-5 space-y-10 flex-wrap container mx-auto px-16 py-5">
        <div className="flex justify-between w-[100%] items-end">
          <h1 className="font-bold text-3xl flex items-center space-x-4 border border-t-transparent border-l-transparent border-r-transparent border-b-2 border-slate-500 px-3 py-5">
            <MdOutlineArrowLeft
              onClick={() => history.back()}
              className="cursor-pointer text-5xl"
            />
            {header}
          </h1>
          <span className="flex items-center">
            For Word
            <MdArrowRight
              on
              Click={() => history.forward()}
              className="cursor-pointer text-5xl"
            />
          </span>
        </div>
        <div className="flex space-y-10 flex-wrap container mx-auto gap-3">
          {data.results.map((tv) => (
            <div className="flex flex-col-reverse w-[18%] hover:shadow-none transition-all delay-300 ease-in-out cursor-pointer space-y-2 group ">
              <h2 className="h-[20px]">{tv.name}</h2>
              <div className=" relative transition-all delay-300 ease-in-out">
                <div className="z-10 hidden absolute h-[100%] w-[100%] group-hover:flex bg-slate-500 opacity-50"></div>
                <h2 className="z-10 hidden group-hover:block absolute top-2 h-[210px] text-ellipsis overflow-hidden px-2">
                  {tv.overview}
                </h2>
                <Link href={`/tv/${tv.id}`}>
                  <button className="z-10 hidden group-hover:block border border-b-2 transition-all delay-150 ease-in-out hover:text-slate-700 hover:border-slate-700 border-white w-[80%] ml-[10%] rounded-md hover:bg-white slate-700 font-bold text-2xl absolute bottom-7">
                    SEE MORE
                  </button>
                </Link>
                <div className="overflow-hidden rounded-md">
                  <Image
                    className="scale-[1.1] group-hover:scale-[1] transition-all delay-150 ease-in-out"
                    src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`}
                    alt={tv.title}
                    width="1"
                    height="1"
                    layout="responsive"
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    );
  }
}
