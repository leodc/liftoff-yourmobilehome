import { motion } from "framer-motion";

const OverlayImage = () => {
  const shape = "polygon(100px 0,100% 0,calc(100% + 225px) 100%, 480px 100%)";

  const Background = () => (
    <div
      className="absolute top-0 right-0 w-[80%] md:w-1/2 h-screen bg-gray-400/50"
      style={{ clipPath: shape }}
    ></div>
  )

  return (
    <>
      <Background />

      <motion.canvas
        initial={{
          filter: "blur(20px)",
        }}
        animate={{
          filter: "blur(0px)",
        }}
        transition={{
          duration: 1,
          ease: [0.075, 0.82, 0.965, 1],
        }}
        style={{
          clipPath: shape,
          backgroundImage: "url(/shutterstock_2283825159.jpg)"
        }}
        data-transition-in
        className="z-10 absolute top-0 right-[-2px] w-[80%] md:w-1/2 h-screen bg-cover bg-center"
      ></motion.canvas>
    </>
  )
}

export default OverlayImage;