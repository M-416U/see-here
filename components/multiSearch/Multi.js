"use client";

import TVCard from "@/components/multiSearch/TVCard";
import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
export default function Multi() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const API_KEY = "2439b9895317f11787da95e8bf9e8782";
  const api = `https://api.themoviedb.org/3/search/multi?query=${searchValue}&api_key=${API_KEY}`;

  useEffect(() => {
    const res = fetch(api, {
      next: { revalidate: 4500 },
    })
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, [searchValue]);

  const ShowData = movies.map((movie) => (
    <TVCard
      key={movie.id}
      title={movie.name || movie.title}
      img={movie.poster_path}
      year={movie.first_air_date || movie.release_date}
      movieID={`${movie.id}`}
      mediaType={movie.media_type}
    />
  ));
  return (
    <div className="flex justify-center relative z-40 ">
      <div className="w-11/12 md:w-[50%]  md:ml-0 justify-items-center flex flex-col absolute top-6 ">
        <div className="relative">
          <input
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            className="w-full
           p-3 rounded-md 
           text-slate-700 
           outline-none
           focus:border-slate-100
           "
            type="text"
            id="search"
            placeholder="What Do You Want To See..?"
          />
          <div className="absolute right-0 top-0 bg-slate-500 p-4">
            <BsSearch />
          </div>
        </div>
        <div
          className={`flex flex-col space-y-1 md:space-y-4  max-h-[400px] md:max-h[500px] overflow-y-auto`}
        >
          {ShowData}
        </div>
      </div>
    </div>
  );
}
