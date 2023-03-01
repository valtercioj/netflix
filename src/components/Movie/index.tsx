import React from "react";
import movie1 from "public/movies/movie1.jpg";
import movie2 from "public/movies/movie2.jpg";
import movie3 from "public/movies/movie3.jpg";
import movie4 from "public/movies/movie4.jpg";
import movie5 from "public/movies/movie5.jpg";
import movie6 from "public/movies/movie6.jpg";

import Image from "next/image";
export default function index() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-6 gap-4 md:px-10">
      <Image
        src={movie1}
        alt="filme"
        className="rounded bg-cover shadow-lg transform transition relative cursor-pointer focus:scale-125 focus:box-shadow focus:z-10 hover:box-shadow hover:z-10 hover:scale-125"
      />

      <Image
        src={movie2}
        alt="filme"
        className="rounded bg-cover shadow-lg transform transition relative cursor-pointer focus:scale-125 focus:box-shadow focus:z-10 hover:box-shadow hover:z-10 hover:scale-125"
      />
      <Image
        src={movie3}
        alt="filme"
        className="rounded bg-cover shadow-lg transform transition relative cursor-pointer focus:scale-125 focus:box-shadow focus:z-10 hover:box-shadow hover:z-10 hover:scale-125"
      />
      <Image
        src={movie4}
        alt="filme"
        className="rounded bg-cover shadow-lg transform transition relative cursor-pointer focus:scale-125 focus:box-shadow focus:z-10 hover:box-shadow hover:z-10 hover:scale-125"
      />
      <Image
        src={movie5}
        alt="filme"
        className="rounded bg-cover shadow-lg transform transition relative cursor-pointer focus:scale-125 focus:box-shadow focus:z-10 hover:box-shadow hover:z-10 hover:scale-125"
      />
      <Image
        src={movie6}
        alt="filme"
        className="rounded bg-cover shadow-lg transform transition relative cursor-pointer focus:scale-125 focus:box-shadow focus:z-10 hover:box-shadow hover:z-10 hover:scale-125"
      />
    </div>
  );
}
