import React from "react";
import { useState, useEffect } from "react";

export default function InfoWindow({ dataCL, visible }) {
  const initialState = {
    publicName: "",
    mansione: "",
    skills: "",
    linkProfile: "",
    visible: false,
  };

  const [state, setstate] = useState(initialState);

  useEffect(() => {
    setstate({
      publicName: dataCL.publicName,
      mansione: dataCL.mansione,
      skills: dataCL.skills,
      linkProfile: "/" + dataCL.id,
    });
  }, [dataCL]);

  const innerBoxStyle = {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "30px 30px",
    background: "#ffffff",
    border: "1px solid #ecedf2",
    borderRadius: "8px",
    transition: "all 300ms ease",
  };

  const containerStyle = {
    width: "250px",
    height: "250px",
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
    marginRight: "10px",
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

  return (
    <>
      {visible && (
        <div className="map-container-info-marker" style={containerStyle}>
          <div className="map-inner-box" style={innerBoxStyle}>
            <div className="map-content" style={contentStyle}>
              <h4 className="map-name">{state.publicName}</h4>
              <ul className="map-candidate-info" style={infoStyle}>
                <li className="map-designation" style={designationStyle}>
                  {state.mansione}
                </li>
                <ul className="map-post-tags" style={postTagsStyle}>
                  {state.skills.map((val, i) => (
                    <li key={i} style={postTagStyle}>
                      <a href="#">{val}</a>
                    </li>
                  ))}
                </ul>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
