import { HoverEffect } from "./ui/card-hover-effect";

export function Webinars() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <h2 className="max-w-5xl mx-auto text-2xl mt-[50px] my-5 text-center text-gray-600 font-bold">Featured Webinars</h2>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Unlocking Your Vocal Potential",
    description:
      "Learn essential vocal techniques to enhance your singing abilities in this interactive webinar with vocal coach Sarah Johnson.",
    link: "",
  },  
  {
    title: "Mastering Music Theory",
    description:
      " Demystify music theory and gain valuable skills to become a more well-rounded musician in this comprehensive webinar series led by music educator David Lee.",
    link: "",
  },
  {
    title: "The Art of Songwriting",
    description:
      "Discover songwriting secrets and learn how to write compelling melodies and lyrics in this engaging webinar with songwriter Emma Thompson.",
    link: "",
  },
  {
    title: "Exploring Jazz",
    description:
      " Explore the rich history of jazz from swing to fusion in this captivating webinar series led by jazz aficionado Michael Davis.",
    link: "",
  },
  {
    title: "Navigating the Music Industry",
    description:
      "Get insider tips and practical advice for navigating the music industry as an emerging artist in this insightful webinar featuring industry professionals.",
    link: "",
  },
  {
    title: "The Power of Performance",
    description:
      " Overcome stage fright and connect authentically with your audience in this empowering webinar led by performance coach Olivia Martinez.",
    link: "",
  },
];
