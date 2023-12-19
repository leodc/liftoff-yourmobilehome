"use client";

import { AnimatePresence } from "framer-motion";
import NavigationBar from "@/components/NavigationBar";
import Hero from "./views/sections/Hero";


export default function Home() {
  return (
    <>
      <NavigationBar />

      <AnimatePresence>
        <Hero id="home"/>
        
        <div id="request-offer" key="request-offer" className="h-screen w-full">

        </div>
      </AnimatePresence>
    </>
  );
}
