import React from "react";
import "./Video.css";

const Video = () => {

  const dataVd = [{
    img_vd: "https://i.gadgets360cdn.com/large/youtube_1581315068339.jpg?downsize=950:*",
    img_ch:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdSZvO63ejOG6eqaZRcAmWJWndq8dOPi2aIrkylgcm4deUu-TcDfPKyfMjx4s5r8K7vio&usqp=CAU" ,
    tital:"ย้อนวัยเด็กหมูมะนาว !! เกรียนกิตงายแบบเอาให้ยับบบ !! - Red Alert 2",
    name:"JAI RAW",
  },
  {
    img_vd: "https://i.gadgets360cdn.com/large/youtube_1581315068339.jpg?downsize=950:*",
    img_ch:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdSZvO63ejOG6eqaZRcAmWJWndq8dOPi2aIrkylgcm4deUu-TcDfPKyfMjx4s5r8K7vio&usqp=CAU" ,
    tital:"ย้อนวัยเด็กหมูมะนาว !! เกรียนกิตงายแบบเอาให้ยับบบ !! - Red Alert 2",
    name:"JAI RAW",
  },
  {
    img_vd: "https://i.gadgets360cdn.com/large/youtube_1581315068339.jpg?downsize=950:*",
    img_ch:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdSZvO63ejOG6eqaZRcAmWJWndq8dOPi2aIrkylgcm4deUu-TcDfPKyfMjx4s5r8K7vio&usqp=CAU" ,
    tital:"ย้อนวัยเด็กหมูมะนาว !! เกรียนกิตงายแบบเอาให้ยับบบ !! - Red Alert 2",
    name:"JAI RAW",
  },
  {
    img_vd: "https://i.gadgets360cdn.com/large/youtube_1581315068339.jpg?downsize=950:*",
    img_ch:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdSZvO63ejOG6eqaZRcAmWJWndq8dOPi2aIrkylgcm4deUu-TcDfPKyfMjx4s5r8K7vio&usqp=CAU" ,
    tital:"ย้อนวัยเด็กหมูมะนาว !! เกรียนกิตงายแบบเอาให้ยับบบ !! - Red Alert 2",
    name:"JAI RAW",
  },
  {
    img_vd: "https://i.gadgets360cdn.com/large/youtube_1581315068339.jpg?downsize=950:*",
    img_ch:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdSZvO63ejOG6eqaZRcAmWJWndq8dOPi2aIrkylgcm4deUu-TcDfPKyfMjx4s5r8K7vio&usqp=CAU" ,
    tital:"ย้อนวัยเด็กหมูมะนาว !! เกรียนกิตงายแบบเอาให้ยับบบ !! - Red Alert 2",
    name:"JAI RAW",
  },
  {
    img_vd: "https://i.gadgets360cdn.com/large/youtube_1581315068339.jpg?downsize=950:*",
    img_ch:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdSZvO63ejOG6eqaZRcAmWJWndq8dOPi2aIrkylgcm4deUu-TcDfPKyfMjx4s5r8K7vio&usqp=CAU" ,
    tital:"ย้อนวัยเด็กหมูมะนาว !! เกรียนกิตงายแบบเอาให้ยับบบ !! - Red Alert 2",
    name:"JAI RAW",
  },
  {
    img_vd: "https://i.gadgets360cdn.com/large/youtube_1581315068339.jpg?downsize=950:*",
    img_ch:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdSZvO63ejOG6eqaZRcAmWJWndq8dOPi2aIrkylgcm4deUu-TcDfPKyfMjx4s5r8K7vio&usqp=CAU" ,
    tital:"ย้อนวัยเด็กหมูมะนาว !! เกรียนกิตงายแบบเอาให้ยับบบ !! - Red Alert 2",
    name:"JAI RAW",
  },
  {
    img_vd: "https://i.gadgets360cdn.com/large/youtube_1581315068339.jpg?downsize=950:*",
    img_ch:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdSZvO63ejOG6eqaZRcAmWJWndq8dOPi2aIrkylgcm4deUu-TcDfPKyfMjx4s5r8K7vio&usqp=CAU" ,
    tital:"ย้อนวัยเด็กหมูมะนาว !! เกรียนกิตงายแบบเอาให้ยับบบ !! - Red Alert 2",
    name:"JAI RAW",
  },
  {
    img_vd: "https://i.gadgets360cdn.com/large/youtube_1581315068339.jpg?downsize=950:*",
    img_ch:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdSZvO63ejOG6eqaZRcAmWJWndq8dOPi2aIrkylgcm4deUu-TcDfPKyfMjx4s5r8K7vio&usqp=CAU" ,
    tital:"ย้อนวัยเด็กหมูมะนาว !! เกรียนกิตงายแบบเอาให้ยับบบ !! - Red Alert 2",
    name:"JAI RAW",
  }
  
]
  return (
    <div className="main-vd">
      <div className="body-vd">
        {/* <div className="item-vd">
          <div className="img-vd"></div>
          <div style={{display:"flex",flexDirection:"row",width:"100%",height:"max-content",padding:"0.7rem 0"}}>
            <div className="ch-img"></div>
            <div className="info-vd">
                <h5>ย้อนวัยเด็กหมูมะนาว !! เกรียนกิตงายแบบเอาให้ยับบบ !! - Red Alert 2</h5>
                <h6 style={{fontSize:"10px",fontWeight:"500",marginTop:"5px"}}>JAI RAW</h6>
                <h6 style={{marginTop:"-5px"}}>การดู 2 แสน ครั้ง 1 เดือนที่ผ่านมา</h6>
            </div>
          </div>
        </div> */}
        {dataVd.map((item,index)=>{
          return(
            <div className="item-vd">
          <div className="img-vd"><img className="img-vd" src={item.img_vd}></img></div>
          <div style={{display:"flex",flexDirection:"row",width:"100%",height:"max-content",padding:"0.7rem 0"}}>
            <div className="ch-img" style={{margin:"0.5rem 0"}}><img className="ch-img" src={item.img_ch}></img></div>
            <div className="info-vd">
                <h5>{item.tital}</h5>
                <h6 style={{fontSize:"10px",fontWeight:"500",marginTop:"5px"}}>{item.name}</h6>
                <h6 style={{marginTop:"-5px"}}>393K views
7 days ago</h6>
            </div>
          </div>
        </div>
          )
        })}
      </div>
    </div>
  );
};

export default Video;
