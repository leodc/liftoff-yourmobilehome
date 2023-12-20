"use client";

import { motion } from "framer-motion";

import OverlayImage from "@/components/OverlayImage";
import CardStep from "@/components/CardStep";
import CallToActionButton from "@/components/CallToActionButton";

interface Props {
  id: string
}

const Title = () => (
  <>
    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.15,
        duration: 0.95,
        ease: [0.165, 0.84, 0.44, 1],
      }}
      className="mb-5 md:mb-9 font-extrabold text-sky-950 tracking-[-2px] text-5xl md:text-8xl"
    >
      <span className="text-cyan-600">Sell</span> Your Mobile <br /> Home <span className="text-cyan-600">Fast.</span>
    </motion.h1>

    <motion.h5
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.15,
        duration: 0.95,
        ease: [0.165, 0.84, 0.44, 1],
      }}
      className="mb-5 md:mb-9 font-extrabold text-sky-950 tracking-[-2px] text-xl md:text-3xl"
    >
      We buy mobile homes in any condition. <br />
      <span className="text-cyan-600">Get a fair cash offer in less than 48 hours!</span>
    </motion.h5>
  </>
)

const Hero = (props: Props) => {
  return (
    <div id={props.id} key={props.id} className="min-h-screen md:h-screen w-screen flex flex-col relative bg-[#F2F3F5] font-inter overflow-x-hidden overflow-y-auto pt-20 md:pt-12">
      <OverlayImage />

      <div className="h-full w-screen flex flex-col justify-center z-50 px-4">
        <div className="basis-7/12 flex flex-col justify-end">
          <Title />

          <CallToActionButton />
        </div>

        <div className="basis-5/12 flex flex-col justify-end pb-10 md:pb-20">
          <div className="flex flex-col md:flex-row gap-4 md:gap-10 w-10/12">
            <CardStep
              title="Fast Closing"
              description="No need to wait for bank approvals. We can close in as little as 7 days."
              transitionDelay={0.15}
            />

            <CardStep
              title="Fair Cash Offer"
              description="We give you a fair cash offer, no hidden fees or costs."
              transitionDelay={0.30}
            />

            <CardStep
              title="Any Condition"
              description="We buy mobile homes in any condition. You don&lsquo;t need to make any repairs or improvements."
              transitionDelay={0.45}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;