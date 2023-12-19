interface CardProp {
  title: string;
  description: string;
}

const CardStep = (props: CardProp) => (
  <div className="border w-4/12 rounded-b bg-white shadow shadow-lg drop-shadow">
    <div className="bg-[#1E2B3A] text-white p-4 font-extrabold font-inter leading-[0.9] text-xl">
      <p>
        {props.title}
      </p>
    </div>
    <div className="p-4 text-[#1E2B3A] flex flex-grow items-center">
      <p>
        {props.description}
      </p>
    </div>
  </div>
)

export default CardStep;