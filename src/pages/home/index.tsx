import React from "react";
import Contents from "../../components/contents";
import Header from "../../components/header";

const Home: React.FC = () => {
  return (
    <main className="main">
      <Header />
      <Contents />
    </main>
  );
};
export default Home;
