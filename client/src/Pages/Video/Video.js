import React from "react";
import "./Video.css";

const Video = () => {
  return (
    <div className="main-vd">
      <div className="body-vd">
        <div className="item-vd">
          <div className="img-vd"></div>
          <div style={{display:"flex",flexDirection:"row",width:"100%",height:"max-content",padding:"0.7rem 0"}}>
            <div className="ch-img"></div>
            <div className="info-vd">
                <h5>ย้อนวัยเด็กหมูมะนาว !! เกรียนกิตงายแบบเอาให้ยับบบ !! - Red Alert 2</h5>
                <h6 style={{fontSize:"10px",fontWeight:"500",marginTop:"5px"}}>JAI RAW</h6>
                <h6 style={{marginTop:"-5px"}}>การดู 2 แสน ครั้ง 1 เดือนที่ผ่านมา</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
