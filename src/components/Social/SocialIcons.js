import React from "react";
import facebook from "../../icons/facebook.png";
import instagram from "../../icons/instagram.png";
import twitter from "../../icons/twitter.png";

export default function SocialIcons({ justifyContent,marginBottom,marginRight }) {
const socialIconsStyle = {
  listStyleType: "none",
  display: "flex",
  justifyContent: justifyContent,
  marginRight: marginRight,
  marginBottom: marginBottom,
  marginTop:'10px'
};
  console.log(socialIconsStyle);
  return (
    <div style={{ marginTop: "6px" }}>
      <ul className="socialIconsTop" style={socialIconsStyle}>
        <li style={{ marginRight: "10px" }}>
          <a href="#">
            <img width={30} src={facebook} alt="facebook" />
          </a>
        </li>
        <li style={{ marginRight: "10px" }}>
          <a href="#">
            <img width={30} src={twitter} alt="facebook" />
          </a>
        </li>
        <li style={{ marginRight: "10px" }}>
          <a href="#">
            <img width={30} src={instagram} alt="facebook" />
          </a>
        </li>
      </ul>
    </div>
  );
}
