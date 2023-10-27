// example Layout.js
import React from "react";
import styled from "styled-components";
import "./google-fonts.css";

const DivLight = styled.div`
  a:focus,
  a:hover,
  a:visited,
  a:link,
  a:active {
    color: #000;
  }
  a {
    padding: 2px;
  }
  ul li {
    text-align: left;
  }
`;

const DivDark = styled.div`
  a:focus,
  a:hover,
  a:visited,
  a:link,
  a:active {
    color: #fff;
  }
  a {
    padding: 2px;
  }
  td {
    padding: 0.5em 1em;
  }
  ul li {
    text-align: left;
  }
`;

export default ({ children, color, image, light, half, twocolumn, leftTitle, serif, courier, green, left}) => {

  let font = "Open Sans, Arial, Sans-Serif"
  if(serif){
    font = "Times New Roman"
  }else if(courier){
    font = "Courier"
  }

  let fontColor = "#fff"
  if(light){
    fontColor="#000"
  }else if(green){
    fontColor="#0f0"
  }
  let style = {
    width: twocolumn?"50vw":"100vw",
    height: "100vw",
    padding: `0 ${half ||twocolumn ? "25%" : "10%"}`,
    backgroundColor: color,
    justifyContent: "center",
    alignItems: leftTitle?"left":"center",
    display: "flex",
    flexDirection: "column",
    color: fontColor,
    fontFamily: font,
  };

  if (image) {
    style = {
      ...style,
      background: `url(${image}) 0% 50%`,
      backgroundSize: "contain",
    };
  }

  if (light) {
    return <DivLight style={style}>{children}</DivLight>;
  } else {
    return <DivDark style={style}>{children}</DivDark>;
  }
};
