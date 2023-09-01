import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { img_path } from "../API_LINKS";
export default function MovieCard(props) {
  return (
    <div className="flex space-x-2 md:space-x-4 space-y-0 md:space-y-3 bg-slate-600 mt-0 md:mt-6 rounded">
      <div className="md:w-[30%] max-w-[150px] min-w-[149px] rounded-lg h-[150px] md:h-[300px] md:max-w-[300px] relative overflow-hidden">
        <h3 className="bg-white text-center h-[100%] text-xl md:text-7xl text-blue-950">
          No Image Here
        </h3>
        <Image
          src={`${img_path}${props.img}`}
          alt={props.title}
          layout="fill"
        />
      </div>
      <div className="flex flex-col md:space-y-24">
        <div className="flex flex-col space-y-2">
          <h2 className="md:text-2xl font-bold">{props.title}</h2>
          <p className="text-slate-300 ">{props.year}</p>
          <p className="text-slate-300 ">{props.mediaType}</p>
        </div>
        <Link href={`/tv/${props.movieID}`}>
          <button
            className="border rounded-xl lg:px-10 py-2  px-3 border-none lg:tracking-[5px]
           bg-blue-500 w-[150px] lg:w-[350px] mx-auto font-bold lg:text-2xl hover:bg-blue-900 ease-in duration-300"
          >
            More Details
          </button>
        </Link>
      </div>
    </div>
  );
}
