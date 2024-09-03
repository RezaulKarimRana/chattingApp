import React from "react";
import { EmojiIcon } from "../../svg/Emoji";
import { GalleryIcon } from "../../svg/Gallery";
import demoMedio from "../../assets/Table.jpg";
const Chatting = () => {
  return (
    <>
      <div className="w-full bg-white">
        <div className="py-4 bg-[#212121] px-6">
          <div className="flex items-center gap-x-2">
            <div className="w-10 h-10 rounded-full bg-orange-200 overflow-hidden"></div>
            <div>
              <span className="font-fontRegular text-white">
                Md. Rezaul Karim
              </span>
            </div>
          </div>
        </div>
        <div className="h-[530px] bg-[#FBFBFB] px-5 py-3 overflow-y-auto">
          {/*sender message*/}
          <div className="w-[60%] ml-auto">
            <p className="text-white font-fontRegular text-sm bg-slate-500 p-4 rounded-md inline-block">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
              possimus!
            </p>
          </div>
          {/*receiver message*/}
          <div className="w-[60%] mr-auto my-3">
            <p className="text-black font-fontRegular text-sm bg-cyan-300 p-4 rounded-md inline-block">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
              possimus!
            </p>
          </div>
          {/*sender message*/}
          <div className="w-[60%] ml-auto overflow-hidden my-3">
            <img
              src={demoMedio}
              alt="cat"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          {/*receiver message*/}
          <div className="w-[60%] mr-auto overflow-hidden my-3">
            <img
              src={demoMedio}
              alt="cat"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </div>
        <div className="bg-[#F5F5F5] py-4">
          <div className="bg-white w-[532px] rounded-md mx-auto py-3 flex items-center justify-center gap-x-3">
            <div className="flex items-center gap-x-2 w-[15%]">
              <EmojiIcon />
              <GalleryIcon />
            </div>
            <input
              placeholder="Type something"
              className="w-[60%] outline-none"
            />
            <button className="bg-[#4A81D3] px-4 py-2 rounded-md font-fontRegular text-sm text-white">
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatting;
