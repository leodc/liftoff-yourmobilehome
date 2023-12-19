import { motion } from "framer-motion";

const CallToActionButton = () => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      delay: 0.65,
      duration: 0.55,
      ease: [0.075, 0.82, 0.965, 1],
    }}
    className="flex">
    <a href="#_" className="flex bg-[#FF6600] rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-[#FF6600] text-[#FF6600] text-white">
      <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
      <span className="flex relative text-[#f5f7f9] transition duration-300 group-hover:text-[#FF6600] ease stroke-[#f5f7f9] hover:stroke-[#FF6600]">
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
  </motion.div>
);

export default CallToActionButton;