import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Info({ dataCL }) {
  const initialState = {
    publicName: "",
    mansione: "",
    skills: "",
    linkProfile: "",
    visible: false,
  };

  const [state, setstate] = useState(initialState);

  const innerBoxStyle = {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "15px",
    background: "#ffffff",
    border: "1px solid #ecedf2",
    borderRadius: "8px",
    transition: "all 300ms ease",
    flexDirection: "column",
    flexWrap: "wrap",
  };

  const containerStyle = {
    width: "150px",
  };

  const contentStyle = {
    position: "relative",
    minHeight: "90px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  };

  const postTagsStyle = {
    position: "relative",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
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

  const designationStyle = {
    display: "block",
    fontSize: "14px",
    color: " var(--primary-color)",
    lineHeight: "19px",
    paddingLeft: "0",
  };

  const infoStyle = {
    position: "relative",
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    marginBottom: "5px",
  };

  const linkPostStyle = {
    color: "#696969",
  };

  const nameStyle = {
    position: "relative",
    display: "block",
    fontSize: "18px",
    lineHeight: "24px",
    fontWeight: "500",
    color: "#202124",
    marginBottom: "5px",
  };

  return (
    <>
      <div className="map-container-info-marker" style={containerStyle}>
        <div className="map-inner-box" style={innerBoxStyle}>
          <div className="map-content" style={contentStyle}>
            <h4 className="map-name" style={nameStyle}>
              {dataCL.publicName}
            </h4>

            <ul className="map-candidate-info" style={infoStyle}>
              <li className="map-designation" style={designationStyle}>
                {dataCL.mansione}
              </li>
            </ul>

            <ul className="map-post-tags" style={postTagsStyle}>
              {dataCL.skills.map((val, i) => (
                <li key={i} style={postTagStyle}>
                  <a href="#" style={linkPostStyle}>
                    {val}
                  </a>
                </li>
              ))}
            </ul>

            <div className="btn-box">
              <Link
                href={`/candidates/${dataCL.publicName}`}
                className="theme-btn btn-style-three"
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
