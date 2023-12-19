import { motion } from "framer-motion";

interface MotionProps {
  children: any
}

const MotionContainer = (props: MotionProps) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      delay: 0.65,
      duration: 0.55,
      ease: [0.075, 0.82, 0.965, 1],
    }}
    className="flex">
    {props.children}
  </motion.div>
)

const CallToActionButton = () => (
  <MotionContainer>
    <a href="#_" className="flex bg-orange-600 rounded-md px-3.5 py-2 overflow-hidden relative group cursor-pointer border-2 font-medium border-orange-600 text-orange-600 text-white">
      <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
      <span className="flex relative text-white transition duration-300 group-hover:text-orange-600 ease stroke-white hover:stroke-orange-600">
        Request an Offer&nbsp;&nbsp;
        <svg
          className="w-5 h-5 "
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.75 6.75L19.25 12L13.75 17.25"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19 12H4.75"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>

    </a>
  </MotionContainer>
);

export default CallToActionButton;