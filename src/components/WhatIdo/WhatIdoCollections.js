import React from "react";
import WhatIdo from "./WhatIdo";
import {data} from './whatIdoData'

const whatido = {
  fontSize: "24px",
  fontWeight: "500",
  textAlign: "center",
  margin: "20px 0",
};

export default function WhatIdoCollections() {
  return (
    <>
      <div style={{ marginTop:'60px' }}>
        <div style={{ marginBottom:'60px' }}>
        <p style={whatido}>What I Do</p>
        <div style={{ height: "2px", backgroundColor: "blueviolet" }}></div>
        {data.map((d) => (
          <WhatIdo image={d.image} title={d.title} subTitle={d.subTitle} />
        ))}
        </div>
        <button className='whatIdoBtn'>
          Book Now
        </button>
      </div>
    </>
  );
}
