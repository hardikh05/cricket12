import React from "react";
import HeroSection from "../HomeCompo/HeroSection";
import FeaturedTeams from "../HomeCompo/FeaturedTeams";
import Tourna from "../HomeCompo/tourna";
import CricketNews from "../HomeCompo/CricketNews";
export const Home = () => {
  return (
    <div style={{ marginTop: "-2rem" }}>
      <main className="flex-grow">
        <HeroSection />
        <FeaturedTeams />
        <Tourna /> 
        <CricketNews/>
      </main>
    </div>
  );
};