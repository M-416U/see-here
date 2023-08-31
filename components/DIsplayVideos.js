"use client";
import React, { useEffect, useState } from "react";

export default function DIsplayVideos({ id, tv }) {
  // =====================Videos data==========
  const [videos, setVideos] = useState({});
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/${
            tv ? "tv" : "movie"
          }/${id}/videos?api_key=2439b9895317f11787da95e8bf9e8782`,
          {
            cache: "no-store",
          }
        );
        const jsonData = await response.json();
        setVideos(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, [id]);
  return (
    <>
      <h2 className="font-bold text-3xl flex items-center space-x-4 border border-t-transparent border-l-transparent border-r-transparent border-b-2 border-slate-500 px-3 py-5">
        Trailers:
      </h2>
      <div className="flex overflow-x-auto space-x-4 justify-center">
        {videos.results
          ? videos.results.map((video) => (
              <div className="flex flex-col space-y-1">
                <iframe
                  width="300"
                  height="200"
                  src={`https://www.youtube.com/embed/${video.key}?si=Y53cZlZrLW8Wl6JV`}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
                <span>{video.name}</span>
              </div>
            ))
          : "No Trailers Here"}
      </div>
    </>
  );
}
