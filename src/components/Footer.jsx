import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import TwitterIcon from "../assets/icons/twitter.png";
import InstagramIcon from "../assets/icons/instagram.png";
import LinkedInIcon from "../assets/icons/linkedin.png";

export default function Footer() {
  const textStyle = "text-2xl text-white pb-8 pt-2";

  return (
    <footer className="flex flex-col gap-4 bg-[#151515] fontAlSC m-4 p-2 border-2 border-white rounded-xl">
      <div className="flex justify-around items-center">
        <div className="flex flex-col justify-center items-center">
          <h2 className={textStyle}>Socials</h2>
          <div className="flex gap-4 *:*:h-8 bg-[#0f0f0f] p-4 rounded-e-lg">
            <a href="#">
              <img src={InstagramIcon} alt="IEEE Instagram" />
            </a>
            <a href="#">
              <img src={LinkedInIcon} alt="IEEE LinkedIn" />
            </a>
            <a href="#">
              <img src={TwitterIcon} alt="IEEE Twitter" />
            </a>
          </div>
        </div>
        <div id="links" className="flex flex-col">
          <h2 className={textStyle}>Quick Links</h2>

          <div>
            <ul className="flex flex-col gap-1 text-md text-white underline">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Events</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Team</a>
              </li>
            </ul>
          </div>
        </div>

        <div id="links" className="flex flex-col">
          <h2 className={textStyle}>Resources</h2>

          <div>
            <ul className="flex flex-col gap-1 text-md text-white underline">
              <li>
                <a href="#">IEEE.org</a>
              </li>
              <li>
                <a href="#">IEEE Xplore</a>
              </li>
              <li>
                <a href="#">IEEE Standards</a>
              </li>
              <li>
                <a href="#">IEEE Spectrum</a>
              </li>
            </ul>
          </div>
        </div>

        <div id="links" className="flex flex-col">
          <h2 className={textStyle}>Contact</h2>

          <div>
            <ul className="flex flex-col gap-1 text-md text-white underline">
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Join IEEE</a>
              </li>
              <li>
                <a href="#">Newsletter</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <p className=" text-center mb-2 text-md text-white">
          &copy; 2025 IEEE Student Branch MUJ. All rights reserved. 2025 IEEE
          Student Branch MUJ. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
