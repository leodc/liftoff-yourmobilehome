const NavigationBar = () => (
  <nav 
    className="z-[999] fixed h-12 w-full flex justify-end items-center backdrop-blur shadow drop-shadow px-2 md:px-20">
    <div className="flex items-center text-white text-sm md:text-base gap-2 md:gap-4 font-semibold md:font-bold">
      <div>
        <p>
          Home
        </p>
      </div>
      <div>
        <button className="bg-[#FF6600] rounded-full hover:bg-[#ff944d] py-1 md:py-2 px-3 md:px-4">
          Request an Offer
        </button>
      </div>
    </div>
  </nav>
)

export default NavigationBar;
