import React from "react";
import { Meteors } from "./ui/meteors";

export function Testimonials() {
  return (
    <div >
      <h2 className="max-w-5xl mx-auto text-2xl  my-8 text-center text-gray-600 font-bold">Students's Testmonial</h2>
   
    <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10 max-w-5xl mx-auto justify-center ">
      
    

      <div className=" w-full relative max-w-xs h-[450px] mb-5 mx-auto">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2 w-2 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div>

          <h1 className="font-bold text-xl text-white mb-4 relative z-50">
           Sophia Nguyen (Parent)
          </h1>

          <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
           My son has been attending MelodyVerse Music Academy for the past year, and I couldn't be happier with his progress. The staff are friendly and professional, and they truly care about their students' success. I've seen a noticeable improvement in my son's confidence and musical abilities, and I credit it all to the wonderful teachers at MelodyVerse.
          </p>

       

          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>


    
      <div className=" w-full relative max-w-xs h-[450px] mb-5 mx-auto">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2 w-2 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div>

          <h1 className="font-bold text-xl text-white mb-4 relative z-50">
           Athoi Barua
          </h1>

          <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
          MelodyVerse has been instrumental in shaping my musical journey. The instructors are not only talented musicians but also passionate educators who inspire and encourage their students every step of the way. Thanks to MelodyVerse, I've gained confidence in my abilities and discovered a newfound love for music.
          </p>

       

          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>
  


      <div className="mx-auto w-full relative max-w-xs h-[450px] mb-5 ">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2 w-2 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div>

          <h1 className="font-bold text-xl text-white mb-4 relative z-50">
           Anuran Seikh
          </h1>

          <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
          Being part of MelodyVerse's jazz ensemble has been a highlight of my musical journey. The ensemble director is incredibly knowledgeable and passionate about jazz, and he challenges us to push our boundaries and explore new sounds. I've made lifelong friends and memories through my participation in the ensemble, and I'm grateful for the opportunities MelodyVerse has provided me.
          </p>

       

          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>


      <div className="mx-auto w-full relative max-w-xs h-[450px] mb-5 ">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2 w-2 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div>

          <h1 className="font-bold text-xl text-white mb-4 relative z-50">
           Sophia Nguyen (Parent)
          </h1>

          <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
           My son has been attending MelodyVerse Music Academy for the past year, and I couldn't be happier with his progress. The staff are friendly and professional, and they truly care about their students' success. I've seen a noticeable improvement in my son's confidence and musical abilities, and I credit it all to the wonderful teachers at MelodyVerse.
          </p>

       

          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>


      <div className="mx-auto w-full relative max-w-xs h-[450px] mb-5">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2 w-2 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div>

          <h1 className="font-bold text-xl text-white mb-4 relative z-50">
           Athoi Barua
          </h1>

          <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
          MelodyVerse has been instrumental in shaping my musical journey. The instructors are not only talented musicians but also passionate educators who inspire and encourage their students every step of the way. Thanks to MelodyVerse, I've gained confidence in my abilities and discovered a newfound love for music.
          </p>

       

          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>


      <div className="mx-auto w-full relative max-w-xs h-[450px] mb-5">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2 w-2 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div>

          <h1 className="font-bold text-xl text-white mb-4 relative z-50">
           Anuran Seikh
          </h1>

          <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
          Being part of MelodyVerse's jazz ensemble has been a highlight of my musical journey. The ensemble director is incredibly knowledgeable and passionate about jazz, and he challenges us to push our boundaries and explore new sounds. I've made lifelong friends and memories through my participation in the ensemble, and I'm grateful for the opportunities MelodyVerse has provided me.
          </p>

       

          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>
 


    
    </div>
    </div>
    
  );
}
