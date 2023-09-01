"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { images } from "@/app/Images/Images";
import { AiFillGithub } from "react-icons/ai";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
export default function NavBar({ tv, home }) {
  const [isOpen, setIsopen] = useState(false);
  const Links = [
    { link: "/movies", name: "Movies", icon: "" },
    { link: "/tv", name: "TV Shows", icon: "" },
    { link: "/about", name: "About", icon: "" },
    { link: "/contact", name: "Contact", icon: "" },
    {
      link: "https://github.com/M-416U",
      name: "GitHub",
      icon: <AiFillGithub />,
    },
  ];
  const DropItems = [
    { link: "/movies/popular-movies", name: "Popular movies" },
    { link: "/movies/top-rated-movies", name: "Top Rated Movies" },
    {
      link: "/movies/up-coming",
      name: "Up Coming",
    },
  ];
  const DropItemsTV = [
    { link: "/tv/popular-tv-show", name: "Popular TV Shows" },
    { link: "/tv/top-rated-tv-show", name: "Top Rated TV Shows" },
  ];

  return (
    <div>
      <nav className="flex container items-center px-16  justify-between pt-3 z-50 relative">
        <Link href="/" className="w-[5rem] h-12 relative">
          <Image
            src={images.logo}
            layout="fill"
            alt="logo"
            className="relative"
          ></Image>
        </Link>
        <div
          className={`z-50 md:flex align-middle w-4/5 px-3 md:px-0 space-y-0 md:space-y-0 absolute md:relative bg-[#f0fffbc9] md:bg-transparent top-20 md:top-0 
          py-2 md:py-0
          space-x-2
          md:justify-center
          right-[10%]
          md:right-0
          flex-col md:flex-row rounded-md ${isOpen ? "block" : "hidden"}`}
        >
          {Links.map((link) => (
            <Link href={link.link} key={link.link}>
              <div className="flex items-center mt-1">
                <span className="mr-1 leading-none block md:inline-block w-[100%] hover:bg-[#f0fffbfe] text-slate-900 md:text-white hover:text-sky-700 text-left p-1">
                  {link.name}
                </span>
                {link.icon}
              </div>
            </Link>
          ))}
        </div>
        <div className="block md:hidden cursor-pointer">
          <RxHamburgerMenu onClick={() => setIsopen((pre) => !pre)} />
        </div>
        {!home && (
          <div className="group relative z-50">
            <span className="flex space-x-2 items-center cursor-pointer">
              <span className="hidden md:flex">Categories</span>

              <MdOutlineKeyboardArrowDown />
            </span>
            <ul className="hidden group-hover:flex flex-col w-[300px] bg-slate-200 absolute top-[20px] right-0 rounded-sm px-3 py-4">
              {tv
                ? DropItemsTV.map((item) => (
                    <Link href={item.link} key={item.link}>
                      <li className="text-slate-900 hover:bg-slate-900 px-3 hover:text-slate-200">
                        {item.name}
                      </li>
                    </Link>
                  ))
                : DropItems.map((item) => (
                    <Link href={item.link}>
                      <li className="text-slate-900 hover:bg-slate-900 px-3 hover:text-slate-200">
                        {item.name}
                      </li>
                    </Link>
                  ))}
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}
