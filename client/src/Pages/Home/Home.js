import React from "react";
import Navber from "../Navber/Navber";
import "./Home.css";
import { CgHome } from "react-icons/cg";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import {Outlet} from "react-router-dom"

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

  const listbox = ["All", "Gaming","Live","Mixes", "Ghosts","Music", "Arena of Valor","News", "Mango","CSS", "Computer Science","Thai cuisine", "Game shows","Podcasts","Tourism","Home imporovement","Role-Playing Game","Eating","Recently uploaded","Watched","New to you"];

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
          <SubC />
          <ListExplore />
        </div>
        <div style={{display:"flex",flexDirection:"column"}}>
        <div className="top-h">
          <div className="left-click">
            <div className="box-lr" style={{ cursor: "pointer" }}>
              <AiOutlineLeft />
            </div>
          </div>
          <div
            className="center-contien"
            style={{
              height: "100%",
              display:"flex",
              overflowX:"scroll",
              justifyContent:"start",
              alignItems:"center",
              gap:"0.7rem",
              position:"relative"
            }}
          > {listbox.map((item)=>{
               return(
              <><div className="box-i">
                <h4 className="f-w-400">{item}</h4>
                </div>
                </>
            );
          })}</div>
          <div className="right-click">
            <div className="box-lr" style={{ cursor: "pointer" }}>
              <AiOutlineRight />
            </div>
          </div>
          
        </div>
        <Outlet/>
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

const SubC = () => {
  const listSub = [
    {
      name: "Channel",
      imgurl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdSZvO63ejOG6eqaZRcAmWJWndq8dOPi2aIrkylgcm4deUu-TcDfPKyfMjx4s5r8K7vio&usqp=CAU",
    },
    {
      name: "Channel",
      imgurl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdSZvO63ejOG6eqaZRcAmWJWndq8dOPi2aIrkylgcm4deUu-TcDfPKyfMjx4s5r8K7vio&usqp=CAU",
    },
    {
      name: "Channel",
      imgurl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdSZvO63ejOG6eqaZRcAmWJWndq8dOPi2aIrkylgcm4deUu-TcDfPKyfMjx4s5r8K7vio&usqp=CAU",
    },
    {
      name: "Channel",
      imgurl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdSZvO63ejOG6eqaZRcAmWJWndq8dOPi2aIrkylgcm4deUu-TcDfPKyfMjx4s5r8K7vio&usqp=CAU",
    },
    {
      name: "Channel",
      imgurl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdSZvO63ejOG6eqaZRcAmWJWndq8dOPi2aIrkylgcm4deUu-TcDfPKyfMjx4s5r8K7vio&usqp=CAU",
    },
    {
      name: "Channel",
      imgurl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdSZvO63ejOG6eqaZRcAmWJWndq8dOPi2aIrkylgcm4deUu-TcDfPKyfMjx4s5r8K7vio&usqp=CAU",
    },
    {
      name: "Channel",
      imgurl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdSZvO63ejOG6eqaZRcAmWJWndq8dOPi2aIrkylgcm4deUu-TcDfPKyfMjx4s5r8K7vio&usqp=CAU",
    },
  ];
  return (
    <div>
      <h4
        style={{
          color: "white",
          margin: "0.5rem 2rem",
          fontWeight: "400",
          fontSize: "16px",
        }}
      >
        Subscriptions
      </h4>
      {listSub.map((item, index) => {
        return (
          <div className="box-icon p-1r" style={{ gap: "1.5rem" }} key={index}>
            <div
              style={{
                backgroundColor: "red",
                width: "1.5rem",
                height: "1.5rem",
                borderRadius: "100%",
              }}
              className="sub-img"
            >
              <img
                src={item.imgurl}
                key={index}
                style={{ width: "1.5rem", height: "1.5rem" }}
                alt={item.name}
              ></img>
            </div>
            <h4 className="s-f">{item.name}</h4>
          </div>
        );
      })}
      <div className="line"></div>
    </div>
  );
};

const ListExplore = () => {
  return (
    <>
      <h3>Test</h3>
    </>
  );
};

export default Home;
