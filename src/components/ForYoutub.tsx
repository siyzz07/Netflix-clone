import React from "react";
import YouTube from "react-youtube";

type Data = {
  urlid: string;
  vedioid: string;
  opt: any;
  pop:any
};

const ForYouTube: React.FC<Data> = ({ urlid, vedioid, opt,pop }) => {
  return (
    <div>
      <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div className="fixed inset-0 bg-black/15 transition-opacity" aria-hidden="true"></div>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto flex items-center justify-center">
          <div className="relative transform overflow-hidden rounded-lg bg-[#000000] text-left shadow-xl transition-all sm:my-8 w-full sm:max-w-4xl">
            <div className="bg-[#000000] px-4 pt-5 pb-4 sm:p-6 sm:pb-4 relative">
              
          
              <p onClick={pop}  className="absolute right-4 top-4 text-3xl text-white cursor-pointer">
                X
              </p>
              <div className="mt-4 flex justify-center">
                {urlid ? <YouTube videoId={vedioid} opts={opt} />:<h1 className="text-4xl text-white">No Vedio Available</h1>}
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForYouTube;
