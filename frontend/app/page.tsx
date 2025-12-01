"use client";
import BackgroundImage from "@/components/BackgroundImage";
import HomeHeader from "@/components/HomeHeader";
import HomeContent from "@/components/HomeContent";

export default function Home() {
  return (
    <div className="min-h-screen text-white flex flex-col font-sans relative">
      <BackgroundImage src="/Home.png" alt="Background" priority />
      
      <div className="backdrop-blur-md bg-white/3 border border-white/3 p-8 rounded-3xl shadow-2xl text-white mx-40 my-auto">
        <HomeHeader />
        <HomeContent />
      </div>
    </div>
  );
}
