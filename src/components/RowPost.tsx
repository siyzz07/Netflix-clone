import img from "../assets/eeeee.jpeg";
import img1 from "../assets/downloadwww.jpeg";
import "./style.css";

const RowPost = () => {
  return (
    <div className="pt-25 p-15">
      <div>
        <div className=" pt-10">
          <h1 className="font-bold text-2xl text-white">tile</h1>
        </div>
        <div className="mt-10 flex gap-x-15  overflow-y-hidden scroll no-scroll">
          <div>
            <img className="rounded-md" src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RowPost;
