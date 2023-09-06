"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { img_path } from "./API_LINKS";

export default function MainContent({ data, header, tv }) {
  if (!data || !data.results) {
    return <div className="py-10 block text-center text-3xl">Loading...</div>;
  } else {
    return (
      <main className="flex space-x-5 space-y-10 flex-wrap container mx-auto px-16 py-5">
        <h1 className="font-bold text-3xl flex items-center space-x-4 border border-t-transparent border-l-transparent border-r-transparent border-b-2 border-slate-500 px-3 py-5">
          {header}
        </h1>
        <div className="flex space-y-10 flex-wrap container mx-auto gap-3">
          {data.results.map((movie) => (
            <div
              key={movie.id}
              className="flex flex-col-reverse w-[90%] md:w-[30%] lg:w-[18%] hover:shadow-none transition-all delay-300 ease-in-out cursor-pointer space-y-2 group "
            >
              <h2 className="h-[20px]">{tv ? movie.name : movie.title}</h2>
              <div className=" relative transition-all delay-300 ease-in-out">
                <div className="z-10 hidden absolute h-[100%] w-[100%] group-hover:flex bg-slate-500 opacity-50"></div>
                <h2 className="z-10 hidden lg:group-hover:block absolute top-2 h-[210px] text-ellipsis overflow-hidden px-2">
                  {movie.overview}
                </h2>
                <Link href={`/${tv ? "tv" : "movies"}/${movie.id}`}>
                  <button className="z-10 hidden group-hover:block border border-b-2 transition-all delay-150 ease-in-out hover:text-slate-700 hover:border-slate-700 border-white w-[80%] ml-[10%] rounded-md hover:bg-white slate-700 font-bold text-2xl absolute bottom-7">
                    SEE MORE
                  </button>
                </Link>
                <div className="overflow-hidden rounded-md">
                  <Image
                    className="scale-[1.1] group-hover:scale-[1] transition-all delay-150 ease-in-out"
                    src={`${img_path}${movie.poster_path}`}
                    alt={movie.title}
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
