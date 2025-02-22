import bg from "../assets/IN-en-20250217-TRIFECTA-perspective_c3376e06-9aff-4657-aafb-91256a597b7c_large.jpg";
import Body from "./TopBody";
import Navbar from "./Navbar";
import RowPost from "./RowPost1";
import { action,originals,topRated } from "../url";
import Footer from "./Footer";


const Main = () => {

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
      <div className="w-full bg-[#01011d]  [clip-path:ellipse(60%_70%_at_50%_80%)] -mt-17 relative  ">
        <div className="w-full h-[100px]">
        </div>
      </div>
        <div className="w-full bg-[#010120]">
          <RowPost title="Top Rated" url={topRated} />
          <RowPost title="Action" url={action} />
          <RowPost title="Originals" url={originals} />
        </div>
        <Footer/>
    </div>
  );
};

export default Main;
