import NavBar from "@/components/NavBar";
import React from "react";

const About = () => {
  return (
    <>
      <NavBar home />
      <div className="bg-black min-h-screen flex items-center justify-center">
        <div className="bg-slate-300 p-8 rounded shadow-md max-w-md w-full">
          <h1 className="text-2xl font-semibold mb-4">About Us</h1>
          <p className="text-gray-700 mb-4">
            Welcome to MovieMania! We are a passionate team of movie enthusiasts
            dedicated to providing you with the latest and greatest in the world
            of cinema.
          </p>
          <p className="text-gray-700 mb-4">
            Our mission is to share our love for movies and help you discover
            new films that you'll enjoy. From classic masterpieces to the
            hottest releases, we've got you covered.
          </p>
          <p className="text-gray-700">
            Our team is made up of movie critics, industry experts, and avid
            viewers who are excited to curate recommendations and reviews just
            for you.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
