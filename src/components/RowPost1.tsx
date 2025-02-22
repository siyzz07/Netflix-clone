import { useEffect } from "react";
import YouTube from "react-youtube";
import axios from "axios";
import { imgUrl, baseUrl,API_KEY } from "../constants/constant";
import { useState } from "react";
import "./style.css";
import ForYoutub from "./ForYoutub";

type moviePorps = {
  title: string;
  url: string;
};

const opts = {
  height: '390',
  width: '640',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  }
}

type Movie = {
  id: number;
  title: string;
  backdrop_path: string;
  description: string;
};




const RowPost1: React.FC<moviePorps> = (props) => {
  const { title, url } = props;


  // states
  const [state, setSate] = useState<Movie[]>([]);
  const [urlid,setUrlid]=useState<any>('')
  const [popup,setPopup]=useState<Boolean>(false)



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
        setSate(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching datsdefddwa:", error);
      });
  }, []);

const handleVedio=(id:number)=>{
  setPopup(!popup)
  instance.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
    if(response.data.results.length!=0){
      setUrlid(response.data.results[0])
    }
  })
}

const pop_vedio_handle:any =()=>{
  setPopup(false)
  setUrlid('')
}

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
                onClick={():void=>handleVedio(Movie.id)}
                className="rounded-md min-w-[15rem] hover:scale-[1.2]  "
                src={`${imgUrl + Movie.backdrop_path}`}
                
              />
              <p className="text-white text-xl font-semibold">{Movie.title}</p>
            </div>
          ))}
        </div>
      </div>

      {popup==true && <ForYoutub urlid={urlid} vedioid={urlid.key} opt={opts} pop={()=>pop_vedio_handle()}/>}
       
              
    </div>
  );
};

export default RowPost1;
