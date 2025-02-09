import React from "react";
import Sidebar from "../components/Sidebar";
import Chat from "./Chat";

const Home = () => {
  return (
    <div className="Dashboard container-fluid d-flex px-0">
      <Sidebar />
      <Chat />
    </div>
  );
};
export default Home;
