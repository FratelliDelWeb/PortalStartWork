import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Info({ dataCL }) {
  const initialState = {
    publicName: "",
    mansione: "",
    skills: "",
    linkProfile: "",
    category:"",
    avatar:"",
    visible: false,
  };

  const [state, setstate] = useState(initialState);

  const innerBoxStyle = {
    position: "relative",
    display: "flex",
    alignContent: "flex-start",
    alignItems: "center",
    padding: "10px",
    background: "#ffffff",
    border: "0px solid #ecedf2",
    borderRadius: "8px",
    transition: "all 300ms ease",
    flexDirection: "column",
    flexWrap: "wrap",
    overflow:"hidden",
  };

  const containerStyle = {
    width: "150px",
  };

  const contentStyle = {

    minHeight: "90px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    flexWrap: "wrap"

  };

  const postTagsStyle = {
    position: "relative",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
  };
  const imgStyle= {
    maxHeight:"20px",
    borderRadius:"50%",
    marginRight:"5px",
   
  };
  const postTagStyle = {
    position: "relative",
    background: "#f0f5f7",
    borderRadius: "30px",
    fontSize: "14px",
    lineHeight: "20px",
    color: "#696969",
    padding: "5px 20px",
    borderRadius: "20px",
    marginRight: "50px",
    marginBottom: "5px",
  };
const categoryStyle={
  fontSize: "10px",
  lineHeight: "12px"
}
  const designationStyle = {
    display: "block",
    fontSize: "12px",
    color: " var(--primary-color)",
    lineHeight: "14px",
    paddingLeft: "0",
  };

  const infoStyle = {
    

    marginBottom: "5px",
  };

  const linkPostStyle = {
    color: "#696969",
  };

  const nameStyle = {
 
    fontSize:"16px",
    fontWeight: "500",
    color: "#202124",
    marginBottom: "5px",
  };

  return (
    <>
      <div className="map-container-info-marker" style={containerStyle}>
        <div className="map-inner-box" style={innerBoxStyle}>
          <div className="map-content" style={contentStyle}>
            <div className="headerModal d-flex">
            <img style={imgStyle} src={ window.location.origin + "/" + dataCL.icon}/>
            <h6 className="map-name" style={nameStyle}>
              {dataCL.publicName}
            </h6>

            </div>
          
            <div className="map-candidate-info" style={infoStyle}>
              <h6 className="map-designation" style={designationStyle}>
                {dataCL.mansione}
              </h6>
              <p   style={categoryStyle} className="map-designation">
                {dataCL.category}
              </p>
            </div>

          {/*   <ul className="map-post-tags" style={postTagsStyle}>
              {dataCL.skills.map((val, i) => (
                <li key={i} style={postTagStyle}>
                  <a href="#" style={linkPostStyle}>
                    {val}
                  </a>
                </li>
              ))}
            </ul> */}

            <div className="btn-box">
              <Link
                href={`/candidates/${dataCL.publicName}`}
                className="theme-btn btn-map-innerModal"
              
              >
                <span className="btn-title">Dettagli</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
