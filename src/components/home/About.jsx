import React from "react";
import placeHolder1About from "../../assets/home/placeholder1_about.png";
import placeHolder2About from "../../assets/home/placeholder2_about.png";

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col text-white fontAlSC md:px-20 mt-10"
    >
      <h2 className="text-2xl font-bold text-center ">About</h2>
      <div className="flex justify-around items-center">
        <img className="bento-item" src={placeHolder1About} alt="" />
        <div>
          <h2 className="text-xl font-bold font-weight-400">IEEE SB</h2>
          <p className="max-w-lg text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio,
          </p>
        </div>
      </div>
      <div className="h-6"></div>
      <div className="flex justify-around">
        <p className="text-left max-w-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam
        </p>
        <img className="bento-item" src={placeHolder2About} alt="" />
      </div>
    </div>
  );
};

export default About;
