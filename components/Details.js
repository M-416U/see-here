"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MainContent from "@/components/MainContent";
import DIsplayVideos from "@/components/DIsplayVideos";
import { img_path } from "./API_LINKS";
export default function Details({ params, tv }) {
  const moviesid = params.moviesid;
  const tvshowid = params.tvshowid;
  const api_key = "2439b9895317f11787da95e8bf9e8782";
  const [data, setData] = useState({});
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/${moviesid ? "movie" : "tv"}/${
            moviesid || tvshowid
          }?api_key=${api_key}`
        );
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, [moviesid || tvshowid]);
  // =====================similar data==========
  const [similarData, setSimilarData] = useState({});
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/${moviesid ? "movie" : "tv"}/${
            moviesid || tvshowid
          }/recommendations?api_key=${api_key}`
        );
        const jsonData = await response.json();
        setSimilarData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, [moviesid || tvshowid]);
  // =====================Images data==========
  const [Images, setImages] = useState({});
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/${moviesid ? "movie" : "tv"}/${
            moviesid || tvshowid
          }/images?api_key=${api_key}`
        );
        const jsonData = await response.json();
        setImages(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, [moviesid || tvshowid]);
  const genres = data.genres || [];
  const companies = data.production_companies || [];
  const seasons = data.seasons || [];
  const movieHomePage = data.homepage;
  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="container px-2 md:items-start items-center md:px-16 flex flex-col md:flex-row space-x-0 md:space-x-3 w-[70%] mx-auto relative py-[50px] bg-slate-900 rounded-md">
        <h2 className="absolute left-1/2 text-center top-[-10px] translate-x-[-50%] text-[10px] lg:text-2xl w-[100%]">
          {data.tagline}
        </h2>
        <div className="w-[90%] h-[330px] md:min-w-[234px] relative md:h-[500px] pb-0 md:pb-5">
          <Image
            className="rounded-lg"
            src={`${img_path}${data.poster_path}`}
            alt={data.title}
            layout="fill"
          />
          <span className="relative p-2 bg-yellow-300 text-black top-2 left-3 rounded-md font-bold">
            {`${parseFloat(data.vote_average).toFixed(1)}`}
          </span>
        </div>
        <div className="flex flex-col space-y-3">
          <div className="flex flex-col">
            <div className="flex justify-center md:justify-between md:items-center items-start space-x-2 md:space-x-0 flex-col md:flex-row">
              <h2 className="font-bold md:text-3xl">
                {data.title || data.name}
              </h2>
              <span className="text-slate-500 text-[12px]">
                {`${
                  moviesid
                    ? `${data.runtime} Minutes`
                    : `${data.episode_run_time} EP`
                } `}
              </span>
            </div>
            <h2 className="text-left md:text-left">Genres:</h2>
            <ul className="flex gap-2 items-center max-w-[300px] flex-wrap md:max-w-[500px]">
              {genres.map((genre) => (
                <li className="text-slate-500" key={genre.id}>
                  {genre.name} -
                </li>
              ))}
            </ul>
            {tv && <h2>Seasons:</h2>}
            <ul className="flex gap-2 overflow-x-auto max-w-[227px] md:max-w-[440px]">
              {seasons.map((season) => (
                <li key={season.id}>
                  <Link href={`${season.id}`}>
                    <div className="flex flex-col space-y-2 border-t-none border-r-2 px-3">
                      <div className="w-[50px] h-[50px] relative bg-slate-400 text-center">
                        {season.poster_path ? (
                          <Image
                            className="rounded-lg"
                            src={`${img_path}${season.poster_path}`}
                            alt={data.title}
                            layout="fill"
                          />
                        ) : (
                          "No Image"
                        )}
                      </div>
                      <h3>{season.name}</h3>
                      <span className="text-slate-500">
                        EP:{season.episode_count}
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="py-3">
              <h3 className="font-bold text-2xl">Description:</h3>
              <p className="text-slate-500 px-4 max-h-[250px] overflow-auto">
                {data.overview}
              </p>
            </div>
            <div className="border border-slate-500 hover:border-slate-200 text-center inline-block px-3 md:px-0 md:w-1/2 mx-auto  rounded-md">
              <Link
                href={movieHomePage ? movieHomePage : ""}
                className="block text-slate-500 hover:bg-slate-500 hover:text-white py-4 rounded-md"
              >
                Watch {data.title || data.name}
              </Link>
            </div>
            <div className="flex justify-center flex-wrap gap-4 items-center mt-5  overflow-auto">
              {companies.map((company) => (
                <div className="items-center flex flex-col bg-slate-300 opacity-[0.9] w-[50px] h-[50px] md:w-[150px] md:h-[150px] justify-center md:rounded-full p-2">
                  {company.logo_path ? (
                    <div className="w-[50px] h-[50px] relative">
                      <Image
                        src={`${img_path}${company.logo_path}`}
                        alt={company.name}
                        layout="fill"
                      />
                    </div>
                  ) : (
                    <span className="text-center">No IMAGE</span>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="relative w-16 h-16 overflow-hidden bottom-0">
            <Image
              alt={data.title || data.name}
              src={`${img_path}${data.backdrop_path}`}
              layout="fill"
            />
          </div>
        </div>
      </div>
      {Images.backdrops && (
        <div className=" w-[70%] h-[150px] mx-auto flex overflow-x-auto space-x-2 py-3">
          {Images.backdrops.map((img) => (
            <div
              className="relative min-w-[100px] h-[100%] "
              key={img.file_path}
            >
              <Image
                alt={data.title || data.name}
                src={`${img_path}${img.file_path}`}
                layout="fill"
              />
            </div>
          ))}
        </div>
      )}
      <div className="container px-5 mx-auto">
        <DIsplayVideos id={moviesid ? moviesid : tvshowid} />
      </div>
      {<MainContent data={similarData} header={"You Will Love"} tv={tv} />}
    </>
  );
}
