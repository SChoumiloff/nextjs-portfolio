// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
//       <div className="container p-12 flex justify-between">
//         <span>LOGO</span>
//         <p className="text-slate-600">All rights reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#121212] text-white p-8">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Link href="/">
            <p className="pl-12">Sacha</p>
        </Link>
        <div className="menu hidden md:block md:w-auto" id="footer">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            <li>
              <Link href="#about">
                <p className="hover:text-indigo-400">About</p>
              </Link>
            </li>
            <li>
              <Link href="#projects">
                <p className="hover:text-indigo-400">Projects</p>
              </Link>
            </li>
            <li>
              <Link href="#contact">
                <p className="hover:text-indigo-400">Contact</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>&copy; {new Date().getFullYear()} Sacha</p>
      </div>
    </footer>
  );
};

export default Footer;