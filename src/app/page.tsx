"use client";
import BestOfAirMax from "@/components/bestOfAirMax";
import DontMiss from "@/components/dontMiss";
import Features from "@/components/features";
import GearUp from "@/components/gearUp";
import Hello from "@/components/hello";
import SecondLast from "@/components/secondLast";
import TheEssentials from "@/components/theEssentials";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-back",
      duration: 1200,
      delay: 100,
      mirror: false,
      anchorPlacement: "bottom-bottom",
      offset: 160,
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="overflow-hidden">
      <Hello />
      <BestOfAirMax />
      <Features />
      <GearUp />
      <DontMiss />
      <TheEssentials />
      <SecondLast />
    </div>
  );
}
