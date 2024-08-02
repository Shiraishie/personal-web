import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import "./Navbar.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleHamburger = () => {
    setOpen(!open);
  };

  return (
    <>
      <div
        className={`overlay-menu duration-700 ${open ? "active" : ""}`}
      ></div>
      <nav className="flex p-10 justify-between sticky top-0 ">
        <span className="pl-7">
          <p className="text-5xl font-[Poppins] cursor-pointer">ATM.</p>
        </span>

        <ul className={`flex nav-menu ${open ? "active" : ""}`}>
          <li className="header hover:text-white hover:bg-slate-700 hover:scale-110 hover:rounded-3xl  rounded-3xl p-3 duration-500 ease-in-out">
            <Link to="/">Home</Link>
          </li>
          <li className="header hover:text-white hover:bg-slate-700 hover:scale-110 hover:rounded-3xl  rounded-3xl p-3 duration-500 ease-in-out">
            <Link to="/projects">Projects</Link>
          </li>

          <li className="header hover:text-white hover:bg-slate-700 hover:scale-110 hover:rounded-3xl  rounded-3xl p-3 duration-500 ease-in-out">
            Reviews(WIP)
          </li>
          <li className="header hover:text-white hover:bg-slate-700 hover:scale-110 hover:rounded-3xl  rounded-3xl p-3 duration-500 ease-in-out">
            <Link to="/contacts">Contact Me</Link>
          </li>
          <ul className={`icons flex space-x-3s justify-center`}>
            <li className="header rounded-3xl p-2 duration-500 hover:-translate-y-2 hover:scale-110 ">
              <a href="https://github.com/Shiraishie">
                <IconBrandGithub size={37} />
              </a>
            </li>
            <li className="header rounded-3xl p-2 duration-500 hover:-translate-y-2 hover:scale-110 s ">
              <a href="https://www.linkedin.com/in/alexandra-morales-tolentino-996baa236/">
                <IconBrandLinkedin size={37} />
              </a>
            </li>
          </ul>
        </ul>

        <div
          className={`hamburger ${open ? "active" : ""}`}
          onClick={handleHamburger}
        >
          <span className="bar bg-slate-700"></span>
          <span className="bar  bg-slate-700"></span>
          <span className="bar  bg-slate-700"></span>
        </div>
      </nav>
    </>
  );
}
