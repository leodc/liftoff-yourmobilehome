import { motion } from "framer-motion";

interface CardProp {
  title: string;
  description: string;
  transitionDelay: number;
}

const CardStep = (props: CardProp) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      delay: props.transitionDelay,
      duration: 0.95,
      ease: [0.165, 0.84, 0.44, 1],
    }}
    className="border w-4/12 rounded-b bg-white shadow shadow-lg drop-shadow">
    <div className="bg-sky-950 text-white p-4 font-extrabold font-inter leading-[0.9] text-xl">
      <p>
        {props.title}
      </p>
    </div>
    <div className="p-4 text-sky-950 flex flex-grow items-center">
      <p>
        {props.description}
      </p>
    </div>
  </motion.div>
)

export default CardStep;