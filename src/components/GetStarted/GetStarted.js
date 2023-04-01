import React from "react";
import sessionImg from "../../icons/session.png";

export default function GetStarted() {
  return (
    <>
      <div
        style={{
          marginTop: "35px",
          backgroundColor: "white",
          color: "black",
        }}
      >
        <p
          style={{
            textAlign: "center",
            fontSize: "28px",
            fontWeight: "500",
            padding: "30px 30px 0 30px",
          }}
        >
          Let's Get Started
        </p>
        <p style={{ textAlign: "center", fontSize: "20px", fontWeight: "400" }}>
          The figure below indicates a range and is subject to minor changes
        </p>
        <div
          style={{
            width: "90%",
            height: "3px",
            backgroundColor: "blueviolet",
            margin: "auto",
            marginTop: "30px",
          }}
        ></div>
        <div
        className="getStartedWrapper"
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "30px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={sessionImg} alt="started session" />
            <p
              style={{
                fontSize: "19px",
                fontWeight: "500",
                marginLeft: "20px",
              }}
            >
              Starter Session
            </p>
          </div>
          <div className="getStartedPBtn" style={{ display: "flex", alignItems: "center" }}>
            <p
              style={{
                fontSize: "21px",
                fontWeight: "600",
                marginRight: "25px",
              }}
            >
              $100-$500
            </p>
            <button className="startedBtn">Book Now</button>
          </div>
        </div>
        <div
          style={{
            width: "90%",
            height: "3px",
            backgroundColor: "blueviolet",
            margin: "auto",
            marginTop: "30px",
          }}
        ></div>
        <div style={{width:'100%',height:'50px' }}></div>
      </div>
    </>
  );
}
