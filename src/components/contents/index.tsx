import React from "react";
import MainContainer from "../maincontainer";
import SideBar from "../sidebar/sidebar";
const Contents: React.FC = () => {
  return (
    <section className="contents">
      <SideBar />
      <MainContainer />
    </section>
  );
};
export default Contents;
