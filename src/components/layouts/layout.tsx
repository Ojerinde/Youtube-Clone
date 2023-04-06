import React from "react";
import Header from "../header";
import SideBar from "../sidebar/sidebar";
interface LayoutProps {
  children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main className="main">
      <Header />
      <section className="contents">
        <SideBar />
        {children}
      </section>
    </main>
  );
};
export default Layout;
