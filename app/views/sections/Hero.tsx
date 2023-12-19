"use client";

import { motion } from "framer-motion";

import PaperTexture from "@/components/PaperTexture";
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
      className="relative md:ml-[-10px] md:mb-[37px] font-extrabold text-[16vw] md:text-[90px] font-inter text-[#1E2B3A] leading-[0.9] tracking-[-2px] z-[100]"
    >
      <span className="text-[#407BBF]">Sell</span> Your Mobile <br /> Home <span className="text-[#407BBF]">Fast.</span>
    </motion.h1>

    <motion.h5
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.15,
        duration: 0.95,
        ease: [0.165, 0.84, 0.44, 1],
      }}
      className="relative md:ml-[-10px] md:mb-[37px] font-extrabold text-[16vw] md:text-[30px] font-inter text-[#1E2B3A] leading-[0.9] tracking-[-2px] z-[100]"
    >
      We buy mobile homes in any condition. <br />
      <span className="text-[#407BBF]">Get a fair cash offer in less than 48 hours!</span>
    </motion.h5>
  </>
)

const Hero = (props: Props) => {
  return (
    <div id={props.id} key={props.id} className="min-h-[100vh] sm:min-h-screen w-screen flex flex-col relative bg-[#F2F3F5] font-inter overflow-hidden">
      <PaperTexture />
      <OverlayImage />

      <div className="flex flex-col justify-center h-screen w-screen overflow-hidden grid-rows-[1fr_repeat(3,auto)_1fr] z-[100] pt-[30px] pb-[320px] px-4 md:px-20 md:py-0">
        <div className="w-full h-[90%] flex flex-col justify-center">
          <div className="basis-7/12 flex flex-col justify-end">
            <Title />

            <CallToActionButton />
          </div>

          <div className="basis-5/12 flex flex-col justify-end pb-10">
            <div className="flex gap-10 w-10/12">
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
    </div>
  )
}

export default Hero;