"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "./ui/layout-grid";

export function Advantage() {
  return (
    <div className="h-screen w-full  mx-auto max-w-5xl">
        <h2 className="max-w-5xl mx-auto text-2xl  my-8 text-center text-gray-600 font-bold">Melodyverse Advantage</h2>
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    
    <div>
      <p className="font-bold text-4xl text-white">Unlocking Your Vocal Potential</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Learn essential vocal techniques to enhance your singing abilities in this interactive webinar with vocal coach Sarah Johnson.
      </p>
    </div>

  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white"> The Art of Songwriting: Crafting Memorable Melodies and Lyrics,
</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Discover songwriting secrets and learn how to write compelling melodies and lyrics in this engaging webinar with songwriter Emma Thompson.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Greens all overExploring Jazz: A Journey Through the Great American Songbook</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Explore the rich history of jazz from swing to fusion in this captivating webinar series led by jazz aficionado Michael Davis.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Navigating the Music Industry: Tips for Emerging Artists</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Get insider tips and practical advice for navigating the music industry as an emerging artist in this insightful webinar featuring industry professionals.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8RXhwbG9yaW5nJTIwSmF6enxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fE5hdmlnYXRpbmclMjB0aGUlMjBNdXNpYyUyMEluZHVzdHJ5fGVufDB8fDB8fHww",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1513614804160-44b4560c8acf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8T3ZlcmNvbWluZyUyMFN0YWdlfGVufDB8fDB8fHww",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1488376739361-ed24c9beb6d0?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
]
