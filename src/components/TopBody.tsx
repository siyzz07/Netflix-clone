

const Body = () => {
  return (
    <div className="flex justify-center items-center text-center w-full mt-35 flex-col">
    <h1 className="text-6xl font-bold text-white">
      Unlimited movies, TV<br /> shows and more
    </h1>
    <p className="font-bold text-white text-xl mt-7">Starts at ₹149. Cancel at any time.</p>

    <p className="text-white mt-9 font-semibold">Ready to watch? Enter your email to create or restart your membership.</p>
    <div className="flex mt-4">
        <div  className=" p-2 border-red-500 border hover:border-amber-50 rounded-sm bg-[#16161621] ">
            <input className="w-92 h-10 focus:outline-none text-white placeholder:text-[#e5e3e3dd] placeholder:text-lg" placeholder='Eamil address' type="text" />
        </div>
        <div className="bg-red-600 rounded-sm w-50 ml-2 text-center items-center justify-center flex cursor-pointer">
           <p className="font-semibold text-2xl text-white">Get Started {">"}</p>
           <img src="" alt="" />
        </div>
    </div>
  </div>
  )
}

export default Body
