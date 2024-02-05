"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import LanguageToggle from "./LanguageToogle";
import { useLanguage } from "./LanguageContext";

const navLinks = [
  {
    EN: "About",
    FR: "A propos",
    path: "#about",
  },
  {
    EN: "Projects",
    FR: "Projets",
    path: "#projects",
  },
  {
    FR: "Me contacter",
    EN: "Contact me",
    path: "#contact",
  },
];
const Navbar = () => {
  const {language} = useLanguage()
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed  border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className=" pr-10 flex container lg:py-4 flex-wrap items-center justify-between mx-auto ">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          <p className="pl-12 text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">साचा</p>
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden items-center md:block md:w-auto" id="navbar">
          <ul className="flex p-4 items-center md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link[language]} />
              </li>
            ))}
              <li key={'language'}>
                <LanguageToggle />
              </li>
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
