import React from "react";
import NavLink from "./NavLink";
import { useLanguage } from "./LanguageContext";
import LanguageToggle from "./LanguageToogle";

const MenuOverlay = ({ links }) => {

  const {language} = useLanguage()

  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link[language]} />
        </li>
      ))}
      <li key={'language'}>
        <LanguageToggle />
      </li>
    </ul>
  );
};

export default MenuOverlay;
