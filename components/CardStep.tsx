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
    className="border w-full md:w-4/12 rounded-b bg-white shadow shadow-lg drop-shadow">
    <div className="bg-sky-950 text-white font-bold md:font-extrabold text-sm md:text-xl p-2 md:p-4">
      <p>
        {props.title}
      </p>
    </div>
    <div className="bg-white text-sky-950 text-sm md:text-base p-2 md:p-4">
      <p>
        {props.description}
      </p>
    </div>
  </motion.div>
)

export default CardStep;