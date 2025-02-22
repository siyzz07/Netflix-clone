const Footer = () => {
  return (
    <div className="bg-[#080117] ">


    <div className="flex justify-center items-center text-center  w-full flex-col ">
      <div className="mt-15">
        <p className="text-white mt-9 font-semibold">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="flex mt-4">
          <div className=" p-2 border-white border rounded-sm bg-[#0c0c0c21] ">
            <input
              className="w-150 h-10 focus:outline-none text-white placeholder:text-[#e5e3e3dd] placeholder:text-lg"
              placeholder="Eamil address"
              type="text"
            />
          </div>
          <div className="bg-red-600 rounded-sm w-50 ml-2 text-center items-center justify-center flex cursor-pointer">
            <p className="font-semibold text-2xl text-white">
              Get Started {">"}
            </p>

          </div>
        </div>
      
      </div>
    </div>
    <div >
        <p className="text-[#918d8d] mt-19 pl-38">Questions? Call 000-800-919-1743</p>
    <div className="flex gap-x-50 pl-38 mt-20 text-[#918d8d]">
            <div className="">
                <ul>
                    <li className="underline">FAQ</li>
                    <li className="underline">Help Centre</li>
                    <li className="underline">Account</li>
                    <li className="underline">Media Centre</li>
                    
                </ul>
            </div>
            <div className="">
                <ul className="text-line">
                    <li className="underline">Investor Relations</li>
                    <li className="underline">Jobs</li>
                    <li className="underline">Ways to Watch</li>
                    <li className="underline">Terms of Use</li>
                    
                </ul>
            </div>
            <div className="">
                <ul>
                    <li className="underline">Privacy</li>
                    <li className="underline">Cookie Preferences</li>
                    <li className="underline">Corporate Information</li>
                    <li className="underline">Contact Us</li>
                    
                </ul>
            </div>
            <div className="">
                <ul>
                    <li className="underline">Speed Test</li>
                    <li className="underline">Legal Notices</li>
                    <li className="underline">Only on Netflix</li>
                    
                    
                </ul>
            </div>

        </div>
        <p className="text-[#918d8d] mt-19 pl-38">Netflix India</p>
        </div>
    </div>
    
    












    
  
  );
};

export default Footer;
