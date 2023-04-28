import React from "react";
import Navber from "../Navber/Navber";
import "./Home.css";
import { CgHome } from "react-icons/cg";

const Home = () => {
  const manuList = [
    {
      name: "Home",
      icon: <CgHome />,
    },
    {
      name: "Shorts",
      icon: <CgHome />,
    },
    {
      name: "Subscriptions",
      icon: <CgHome />,
    },
    {
      name: "Originals",
      icon: <CgHome />,
    },
    {
      name: "Youtube Music",
      icon: <CgHome />,
    },
  ];

  return (
    <div className="main-page-h">
      <Navber />
      <div className="body-h">
        <div className="left-h">
          {manuList.map((item, index) => {
            return (
              <div className="box-icon p-1r" key={index}>
                {item.icon}
                <h4 className="s-f">{item.name}</h4>
              </div>
            );
          })}
          <div className="line"></div>
          <Manumore />
          <Manumore />
        </div>
        <div className="top-h">
          <h1> Test</h1>
        </div>
      </div>
    </div>
  );
};

const Manumore = () => {
  const manuMore = [
    {
      name: "Library",
      icon: <CgHome />,
    },
    {
      name: "History",
      icon: <CgHome />,
    },
    {
      name: "Your videos",
      icon: <CgHome />,
    },
    {
      name: "Watch later",
      icon: <CgHome />,
    },
    {
      name: "Downloads",
      icon: <CgHome />,
    },
    {
      name: "Liked videos",
      icon: <CgHome />,
    },
    {
      name: "Show more",
      icon: <CgHome />,
    },
  ];
  return (
    <>
      {manuMore.map((item, index) => {
        return (
          <div className="box-icon p-1r" key={index}>
            {item.icon}
            <h4 className="s-f">{item.name}</h4>
          </div>
        );
      })}
      <div className="line"></div>
    </>
  );
};

export default Home;
