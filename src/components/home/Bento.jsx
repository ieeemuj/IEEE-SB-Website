import React from "react";
import Bento1 from "../../assets/bento/bento1.png";
import Bento2 from "../../assets/bento/bento2.png";
import Bento3 from "../../assets/bento/bento3.png";
import Bento4 from "../../assets/bento/bento4.png";
import Bento5 from "../../assets/bento/bento5.png";
import Bento6 from "../../assets/bento/bento6.png";
import Bento7 from "../../assets/bento/bento7.png";
import Bento8 from "../../assets/bento/bento8.png";
import Bento9 from "../../assets/bento/bento9.png";
import Bento10 from "../../assets/bento/bento10.png";

// TODO
// Need to add an overlay on the images and Link them onto a source + do this beto with a component. Code below is too redundant

const Bento = () => {
  const overlayStyle =
    "absolute inset-0 bg-[#151515]/70 flex items-center justify-center text-white z-10";
  return (
    <div className="w-screen flex flex-col justify-center items-center mt-5">
      <div className="flex-col sm:grid sm:grid-cols-4 sm:grid-rows-5 gap-4 p-4 *:rounded-xl *:min-h-24 fontAlSC h-[80vh] w-[80vw]">
        <div className="col-span-1 row-span-3 relative bento-item h-auto  flex items-center justify-center text-white text-lg font-bold">
          <img src={Bento1} className="w-full h-full" />
          <div className="absolute bottom-2 right-2 p-2 bg-black bg-opacity-50 text-white rounded">
            Text 1
          </div>
        </div>
        <div className="col-span-1 row-span-2 bento-item h-auto flex items-center justify-center text-white text-lg font-bold">
          <img src={Bento2} className="w-full h-full" />
        </div>
        <div className="col-span-1 row-span-1 bento-item h-auto flex items-center justify-center text-white text-lg font-bold">
          <img src={Bento3} className="w-full h-full" />
        </div>
        <div className="col-span-1 row-span-3 bento-item h-auto flex items-center justify-center text-white text-lg font-bold">
          <img src={Bento4} className="w-full h-full" />
        </div>
        <div className="col-span-1 row-span-2 bento-item h-auto flex items-center justify-center text-white text-lg font-bold">
          <img src={Bento5} className="w-full h-full" />
        </div>
        <div className="col-span-1 row-span-1 bento-item h-auto flex items-center justify-center text-white text-lg font-bold">
          <img src={Bento6} className="w-full h-full" />
        </div>
        <div className="col-span-1 row-span-1 bento-item h-auto flex items-center justify-center text-white text-lg font-bold">
          <img src={Bento7} className="w-full h-full" />
        </div>
        <div className="col-span-2 row-span-1 text-2xl bg-[#151515] flex items-center justify-center text-white ">
          A Community of Innovation
        </div>
        <div className="col-span-1 row-span-1 bento-item  flex items-center justify-center text-white text-lg font-bold">
          <img src={Bento8} className="w-full h-full" />
        </div>
        <div className="col-span-2 row-span-1 bento-item  flex items-center justify-center text-white text-lg font-bold">
          <img src={Bento9} className="w-full h-full" />
        </div>
        <div className="col-span-2 row-span-1 bento-item  flex items-center justify-center text-white text-lg font-bold">
          <img src={Bento10} className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default Bento;
