import React from "react";
import Logo from "./common/Logo";
import NavigationLinks from "./common/NavigationLinks";
import SocialLinks from "./common/SocialLinks";
import LanguageDropdown from "./common/LanguageDropdown";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200/50">
      <div className="flex items-center justify-between px-6 lg:px-12 xl:px-16 py-4">
        <Logo variant="header" />
        <NavigationLinks variant="header" />
        <div className="flex items-center gap-4">
          <SocialLinks variant="header" />
          <LanguageDropdown />
        </div>
      </div>
    </header>
  );
};

export default Header;


