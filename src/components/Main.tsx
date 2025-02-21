
import bg from "../assets/IN-en-20250217-TRIFECTA-perspective_c3376e06-9aff-4657-aafb-91256a597b7c_large.jpg";
import Body from "./TopBody";
import Navbar from "./Navbar";
import RowPost from "./RowPost";
import { useEffect } from "react";
import axios from "../Axios";


const Main = () => {
 
useEffect(()=>{

})


  return (
    <div
    style={{
      backgroundImage: `url(${bg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100vh", 
    }}
    className="relative"
  >
    {/* Black Overlay and Navbar */}
    <div className="bg-[#000000b2] w-full h-screen shadow-inner box-shadow1">
      <Navbar />
      <Body />
    </div>
  
    {/*  Div with Curved Toppppp */}
    <div className="w-full bg-[#010120]  [clip-path:ellipse(100%_80%_at_50%_80%)] -mt-14 relative  ">
      <div className="w-full h-[500px]">

      <RowPost />
      </div>
    </div>
  </div>
  
  );
};

export default Main;
