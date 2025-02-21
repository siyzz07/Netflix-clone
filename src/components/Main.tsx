
import bg from "../assets/IN-en-20250217-TRIFECTA-perspective_c3376e06-9aff-4657-aafb-91256a597b7c_large.jpg";
import Body from "./TopBody";
import Navbar from "./Navbar";

const Main = () => {
 
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
      className=" "
    >
      <div className={`bg-[#000000b2] w-full h-screen shadow-inner box-shadow1`}>
        <Navbar />
        <Body/>
      </div>
    </div>
  );
};

export default Main;
