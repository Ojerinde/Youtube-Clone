import React from "react";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";
const Header: React.FC = () => {
  return (
    <>
      <DesktopNavigation />
      <MobileNavigation />
    </>
  );
};
export default Header;
