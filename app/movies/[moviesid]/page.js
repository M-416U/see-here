// "use client";
// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import MainContent from "@/components/MainContent";
// import DIsplayVideos from "@/components/DIsplayVideos";
// export default function page(props) {
//   const [data, setData] = useState({});
//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await fetch(
//           `https://api.themoviedb.org/3/tv/${props.params.tvshowid}?api_key=2439b9895317f11787da95e8bf9e8782`
//         );
//         const jsonData = await response.json();
//         setData(jsonData);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     }
//     fetchData();
//   }, [props.params.tvshowid]);
//   if (!data) {
//     return <div>Loading...</div>;
//   }
//   // =====================similar data==========
//   const [similarData, setSimilarData] = useState({});
//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await fetch(
//           `https://api.themoviedb.org/3/tv/${props.params.tvshowid}/recommendations?api_key=2439b9895317f11787da95e8bf9e8782`
//         );
//         const jsonData = await response.json();
//         setSimilarData(jsonData);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     }
//     fetchData();
//   }, [props.params.tvshowid]);
//   // =====================Images data==========
//   const [Images, setImages] = useState({});
//   console.log(Images.posters);
//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await fetch(
//           `https://api.themoviedb.org/3/tv/${props.params.tvshowid}/images?api_key=2439b9895317f11787da95e8bf9e8782`
//         );
//         const jsonData = await response.json();
//         setImages(jsonData);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     }
//     fetchData();
//   }, [props.params.tvshowid]);
//   if (!data) {
//     return <div>Loading...</div>;
//   }

//   const genres = data.genres || [];
//   const companies = data.production_companies || [];
//   const seasons = data.seasons || [];
//   const movieHomePage = data.homepage;
//   return (
//     <>
//       <div className="container px-16 flex space-x-3 w-[70%] mx-auto relative py-[50px] bg-slate-900 rounded-md">
//         <h2 className="absolute left-1/2 top-[10px] translate-x-[-50%]">
//           {data.tagline}
//         </h2>
//         <div className="min-w-[255px] relative min-h-[500px] max-h-[510px] pb-5 text-center">
//           {data.poster_path ? (
//             <Image
//               className="rounded-lg"
//               src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
//               alt={data.name}
//               layout="fill"
//             />
//           ) : (
//             "No Image"
//           )}
//         </div>

//         <div className="flex flex-col space-y-3">
//           <div className="flex flex-col space-y-3">
//             <div className="flex justify-between items-center">
//               <h2 className="font-bold text-3xl">{data.name}</h2>
//               <din className="flex flex-col">
//                 <span className="text-slate-500 text-[12px]">
//                   {data.episode_run_time} episodes
//                 </span>
//                 <p className="w-8 h-7 bg-yellow-500 text-slate-900 text-center font-extrabold">
//                   {data.vote_average}
//                 </p>
//               </din>
//             </div>
//             <h2>Genres:</h2>
//             <ul className="flex gap-2">
//               {genres.map((genre) => (
//                 <li className="text-slate-500" key={genre.id}>
//                   {genre.name} -
//                 </li>
//               ))}
//             </ul>
//             <h2>Seasons:</h2>
//             <ul className="flex gap-2 overflow-x-auto max-w-[700px]">
//               {seasons.map((season) => (
//                 <li key={season.id}>
//                   <Link href={`${season.id}`}>
//                     <div className="flex flex-col space-y-2 border-t-none border-r-2 px-3">
//                       <div className="w-[50px] h-[50px] relative bg-slate-400 text-center">
//                         {season.poster_path ? (
//                           <Image
//                             className="rounded-lg"
//                             src={`https://image.tmdb.org/t/p/w500${season.poster_path}`}
//                             alt={data.title}
//                             layout="fill"
//                           />
//                         ) : (
//                           "No Image"
//                         )}
//                       </div>
//                       <h3>{season.name}</h3>
//                       <span className="text-slate-500">
//                         EP:{season.episode_count}
//                       </span>
//                     </div>
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//             <div className="py-3">
//               <h2>Description:</h2>
//               <p className="text-slate-500 px-4 max-h-[140px] overflow-y-auto">
//                 {data.overview}
//               </p>
//             </div>
//             <div className="border border-slate-500 hover:border-slate-200 text-center inline-block w-1/2 mx-auto  rounded-md">
//               <Link
//                 href={movieHomePage ? movieHomePage : ""}
//                 className="block text-slate-500 hover:bg-slate-500 hover:text-white py-4 rounded-md"
//               >
//                 Watch {data.name}
//               </Link>
//             </div>
//             <div className="flex justify-center flex-wrap gap-4 items-center mt-5">
//               {companies.map((company) => (
//                 <div className="items-center flex flex-col bg-slate-300 opacity-[0.9] w-[150px] h-[150px] justify-center rounded-full">
//                   {company.logo_path ? (
//                     <Image
//                       src={`https://image.tmdb.org/t/p/w500${company.logo_path}`}
//                       alt={company.name}
//                       width={50}
//                       height={50}
//                     />
//                   ) : (
//                     "No Image"
//                   )}
//                   <span className="text-center text-[12px] text-slate-500 pt-2">
//                     {company.name}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="relative w-16 h-16 overflow-hidden bottom-0 text-center">
//             {data.backdrop_path && (
//               <Image
//                 alt={data.title}
//                 src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
//                 layout="fill"
//               />
//             )}
//           </div>
//         </div>
//       </div>
//       {Images.backdrops && (
//         <div className=" w-[70%] h-[150px] mx-auto flex overflow-x-auto space-x-2 py-3">
//           {Images.backdrops.map((img) => (
//             <div
//               className="relative min-w-[100px] h-[100%] "
//               key={img.file_path}
//             >
//               <Image
//                 alt={data.title}
//                 src={`https://image.tmdb.org/t/p/w500${img.file_path}`}
//                 layout="fill"
//               />
//             </div>
//           ))}
//         </div>
//       )}
//       <div className="container px-5 mx-auto">
//         <DIsplayVideos id={props.params.tvshowid} tv />
//       </div>
//       {<MainContent data={similarData} header={"You Will Love"} tv />}
//     </>
//   );
// }
"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MainContent from "@/components/MainContent";
import DIsplayVideos from "@/components/DIsplayVideos";
import Details from "@/components/Details";
export default function page(props) {
  return <Details params={props.params} />;
}
