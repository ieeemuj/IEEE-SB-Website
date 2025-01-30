import { NavLink } from "react-router-dom";
import ieeeNav from "../assets/logo.png";

export default function Navbar() {
  const navItems = [
    { name: "HOME", path: "/" },
    { name: "EVENTS", path: "/events" },
    { name: "BLOG", path: "/blog" },
    { name: "SOCIETIES", path: "/societies" },
    { name: "ACHIEVEMENTS", path: "/achievements" }, // Added Achievements
    { name: "TEAM", path: "/team" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <nav className="flex w-screen fontAlSC h-26 justify-center items-center">
      <div className="">
        <div className="flex flex-col ">
          <div id="Logo" className="flex flex-row h-16 self-center m-4">
            <img src={ieeeNav} className=" h-30" />
          </div>

          <ul className="flex gap-5 text-md">
            {navItems.map((item) => (
              <li key={item.name} className="">
                <NavLink
                  to={item.path}
                  className="text-white border-2 px-4 py-1 border-white rounded-full"
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
