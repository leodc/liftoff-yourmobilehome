const NavigationBar = () => (
  <nav className="z-[999] fixed h-12 w-full flex justify-end items-center px-20 backdrop-blur shadow drop-shadow">
    <div className="flex gap-4 items-center text-white font-bold">
      <div>
        <p>
          Home
        </p>
      </div>
      <div>
        <button className="bg-[#FF6600] py-2 px-4 rounded-full hover:bg-[#ff944d]">
          Request an Offer
        </button>
      </div>
    </div>
  </nav>
)

export default NavigationBar;
