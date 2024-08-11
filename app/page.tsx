'use client';
import Navbar from "@/app/ui/home-page/navbar";
import { poppins, poppinsThin } from "./ui/fonts";
import VideoComponent from "./ui/home-page/video-component";
import { useEffect, useRef, useState } from "react";
import { 
  HOW_TO_USE,
  WHAT_TO_USE_TO_TEACH,
  TUTORIALS,
  PROJECTS_WITH_TEACHABLE,
  FOR_LEARNING,
  TWEETS
} from "./lib/placeholder-data";
import Image from "next/image";
import { ImageCardType, LearningCardType } from "./lib/types";
import Card from "./ui/card";
import Carousel from "./ui/home-page/carousel";
import WorksWithSVG from "./ui/home-page/works-wth-svg";
import LearningCard from "./ui/home-page/LearningCard";
import TwitterCard from "./ui/home-page/twitter-card";
import TwitterIcon from '@mui/icons-material/Twitter';
import Footer from "./ui/footer";

export default function Page() {
  const [showNavbar, setShowNavbar] = useState<boolean>(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const ref = useRef<HTMLDivElement | null>(null);
  const howToUseSectionCards = HOW_TO_USE;
  const whatToUseToTeach = WHAT_TO_USE_TO_TEACH;
  const tutorials = TUTORIALS;
  const projectWithTeachable = PROJECTS_WITH_TEACHABLE;
  const forLearning = FOR_LEARNING;
  const tweets = TWEETS;
  useEffect(() => {
    console.log(window.innerWidth, window.innerHeight);
    const observer = new IntersectionObserver(
      ([entry]) => {
          setShowNavbar(!entry.isIntersecting);
      },
      {
          root: null,
          rootMargin: '0px',
          threshold: 1.0
      }
    );
    if(ref.current){
        observer.observe(ref.current);
    }
    function handleResize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);
    return () => {
        if(ref.current){
            observer.unobserve(ref.current);
        }
        window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <div className="overflow-x-hidden max-w-full">
      <div className={`transition-all ease-in-out duration-700 w-full z-40 ${showNavbar ? 'fixed top-0':'-top-20'} h-8`}>
        <Navbar showNavbar={showNavbar}/>
      </div>
      <div className="flex flex-col min-h-screen w-full">
        <section className="main-content mt-16 lg:px-64 px-10 flex flex-col gap-20 h-fit">
          <section ref={ref} className="flex flex-col-reverse lg:flex-row justify-between items-center pt-4">
              <div className="w-fit">
                <h1 className={`${poppins.className} text-blue-600 md:text-6xl text-5xl`}>Teachable Machine</h1>
                <p className={`${poppins.className} md:text-2xl my-8 max-w-[27rem] text-xl`}>
                  Train a computer to recognize your own images, sounds, & poses.
                </p>
                <p className="md:text-lg max-w-[27rem] mb-8 text-sm">
                  A fast, easy way to create machine learning models for your sites, apps, and more – no expertise or coding required.
                </p>
                <button className={`${poppins.className} bg-blue-500 hover:bg-blue-600 text-white p-10 py-4 rounded-lg text-xl mb-10`}>Get started</button>
                <WorksWithSVG/>
              </div>
              <video width={480} height={454} autoPlay={true} loop playsInline preload="auto" muted>
                <source src="/prediction.mp4" type="video/mp4"/>
              </video>
          </section>
          <section className="items-center justify-center flex flex-col mt-20">
              <h1 className={`${poppins.className} text-5xl mb-20 text-center`}>What is Teachable Machine?</h1>
              <VideoComponent src="https://www.youtube.com/embed/T2qQGqZxkD0?si=x3Vh90meLyC4K4hB&autoplay=1"/>
              <p className="mt-10 text-wrap text-lg max-w-[38rem] text-center">
                Teachable Machine is a web-based tool that makes creating machine learning models fast, easy, and accessible to everyone. (Note: you can find the <a className="text-blue-500 underline" href="https://teachablemachine.withgoogle.com/v1">first version of Teachable Machine from 2017 here</a>.)
              </p>
          </section>
          <section className="items-center justify-center flex flex-col">
              <h1 className={`${poppins.className} text-5xl my-20 text-center`}>How do I use it?</h1>
              <div className="grid grid-rows-3 lg:grid-rows-none lg:grid-cols-3 gap-14">
                {
                  howToUseSectionCards.map((card: ImageCardType, index) => <Card {...card} indexOfCard={index+1} showLink={true} showPostLinkIcon key={card.heading}/>)
                }
              </div>
          </section>
          <section className="items-center justify-center flex flex-col mt-20">
              <h1 className={`${poppins.className} text-5xl mb-20 text-center`}>What can I use to teach it?</h1>
              <p className="text-wrap text-lg text-center mb-20 max-w-[50rem]">
                Teachable Machine is flexible – use files or capture examples live. It’s respectful of the way you work. You can even choose to use it entirely on-device, without any webcam or microphone data leaving your computer.
              </p>
              <div className="grid grid-rows-3 lg:grid-rows-none lg:grid-cols-3 gap-14 justify-center">
                {
                  whatToUseToTeach.map((card: ImageCardType, index) => <Card {...card} key={card.heading} customStyles="grid-rows-[16rem_4rem_7rem]"/>)
                }
              </div>
          </section>
          <section className="items-center justify-center flex flex-col mt-20">
              <h1 className={`${poppins.className} text-5xl mb-20`}>Tutorials</h1>
              <div className="grid grid-rows-3 md:grid-rows-none md:grid-cols-3 justify-between gap-20">
                {
                  tutorials.map((tutorial) => {
                    return (
                      <div className="flex flex-col gap-4 max-w-80" key={tutorial.header}>
                        <a href={tutorial.linkHref} className={`${poppinsThin.className} text-blue-600 text-2xl underline`}>{tutorial.header}</a>
                        <p className="text-lg text-left">
                          {tutorial.subHeader}
                        </p>
                      </div>
                    );
                  })
                }
              </div>
          </section>
          <section className="items-center justify-center flex flex-col mt-20">
                <h1 className={`${poppins.className} text-5xl mb-20 text-center`}>Made with Teachable Machine</h1>
                <Carousel items={projectWithTeachable} CardComponent={Card}/>
                <p className="text-lg text-center m-20 w-[25rem] lg:w-[50rem]">
                  Check out more experiments made with Teachable Machine <a href="https://experiments.withgoogle.com/experiments?tag=Teachable+Machine" className="underline">here</a>. If you've made something you want
                  to share with us, <a className="underline" href="https://experiments.withgoogle.com/submit">submit it here</a> or just email at <a className="underline" href="mailto:teachablemachine—support@google.com">teachablemachine-support@google.com</a>
                </p>
          </section>
          <section className="items-center justify-center flex flex-col mt-20">
              <h1 className={`${poppins.className} text-5xl mb-20`}>Works with...</h1>
              <WorksWithSVG/>
              <p className="text-lg text-left w-[22rem] md:w-[30rem]">
                The models you make with Teachable Machine are real TensorFlow.js models that work anywhere javascript runs, so they play nice with tools like Glitch, P5.js, Node.js & more.
              </p>
              <p className="text-lg text-left mt-8 w-[22rem] md:w-[30rem]">
                Plus, export to different formats to use your models elsewhere, like Coral, Arduino & more.
              </p>
              <a href="https://teachablemachine.withgoogle.com/faq#Saving-&-Exporting" className="text-blue-500 underline mt-4 text-lg md:justify-self-start flex relative right-20 md:right-36 text-center">FAQ:Saving & Exporting</a>
          </section>
          <section className="items-center justify-center flex flex-col mt-20">
              <h1 className={`${poppins.className} text-5xl mb-20`}>For Learning</h1>
              <span className="text-lg">Want to learn using Teachable Machine?</span>
              <span className="text-lg">Here are some lessons & activities folks have made with it:</span>
              <div className="flex flex-col lg:flex-row justify-between">
                {
                  forLearning.map((learning: LearningCardType) => {
                    return(
                      <LearningCard {...learning} key={learning.id}/>
                    );
                  })
                }
              </div>
          </section>
          <section className="items-center justify-center flex flex-col mt-20">
              <h1 className={`${poppins.className} text-5xl mb-20`}>Tweets</h1>
              <Carousel items={tweets} CardComponent={TwitterCard}/>
              <span className="text-lg mt-20 text-center"><TwitterIcon/>  See what people are making: <a className="underline" href="https://twitter.com/hashtag/teachablemachine">#teachablemachine</a> on twitter</span>
          </section>
          <section className="items-center justify-center flex flex-col mt-20">
              <h1 className={`${poppins.className} text-5xl mb-20 text-center`}>Looking for the first version from 2017?</h1>
              <Image src='/2017-version.jpg' alt="2017 teachable version" height={267} width={500} className="rounded-lg"/>
              <a href="https://teachablemachine.withgoogle.com/v1" className="underline text-blue-500 text-lg mt-10">Open site</a>
            </section>
            <section className="items-center justify-center flex flex-col my-40">
              <h1 className={`${poppins.className} text-5xl mb-20 text-center`}>More questions?</h1>
              <a href="https://teachablemachine.withgoogle.com/faq" className="underline text-blue-500 text-lg mt-10">Check our FAQ</a>
            </section>
        </section>
        <Footer/>
      </div>
    </div>
  );
}
