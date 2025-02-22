import { useEffect } from "react";
import img from "../assets/eeeee.jpeg";
import axios from "axios";
import { imgUrl, baseUrl } from "../constants/constant";
import { useState } from "react";
import "./style.css";

type moviePorps = {
  title: string;
  url: string;
};

type Movie = {
  id: number;
  title: string;
  backdrop_path: string;
  description: string;
};
const RowPost1: React.FC<moviePorps> = (props) => {
  const { title, url } = props;

  const [state, setSate] = useState<Movie[]>([]);

  const instance = axios.create({
    baseURL: `${baseUrl}`,
    headers: {
      accept: "application/json",
      Authorization: `Bearer eyJhdWQiOiIxZGE2ZWZmOTcxYTIzZDc3ZTg0Yjg4MTYzNDcyNDI2OSIsIm5iZiI6MTc0MDEzNjA1MS4zMTQsInN1YiI6IjY3Yjg1ZTczNzQzNDIwMGMyODIyODIwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FyHO3umu7XHWFDFQ8YHbNadgt0ac7iXYiXq6D4a5CjA`,
    },
  });

  useEffect(() => {
    instance
      .get(`${url}`)
      .then((response) => {
        console.log(response.data);
        setSate(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching datsdefddwa:", error);
      });
  }, []);

  console.log("asasasdasdasdasd", state);

  return (
    <div className=" p-5 pl-25">
      <div>
        <div className="">
          <h1 className="font-bold text-3xl text-red-700">{title}</h1>
        </div>

        <div className="mt-5 flex gap-x-9 overflow-x-auto  no-scroll">
          {state.map((Movie, index) => (
            <div
              key={index}
              className="text-center cursor-pointer no-scroll action"
            >
              <img
                className="rounded-md min-w-[15rem] hover:scale-[1.2]  "
                src={`${imgUrl + Movie.backdrop_path}`}
                
              />
              <p className="text-white text-xl font-semibold">{Movie.title}</p>
              {/* <p className="text-white text-md font-semibold">
                {Movie.description}
              </p> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RowPost1;
