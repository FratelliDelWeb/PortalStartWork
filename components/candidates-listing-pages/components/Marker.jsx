import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import InfoWindow from "./InfoWindow";

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 18px;
  height: 18px;
  background-color: #000;
  border: 2px solid #fff;
  border-radius: 100%;
  user-select: none;
  transform: translate(-50%, -50%);
  cursor: ${(state) => (state.onClick ? "pointer" : "default")};
  &:hover {
    z-index: 1;
  }
`;

export default function Marker({ text, onClick, data, modifyMap }) {
  const initialState = {
    text: "",
    onClick: null,
    active: false,
  };

  const [state, setstate] = useState(initialState);

  const handleOnClick = (status, data) => {
    onClick(data);
  };

  useEffect(() => {
    setstate({
      text: text,
      onClick: onClick,
      active: data.active,
    });
  }, [data]);

  return (
    <>
      <Wrapper
        alt={state.text}
        onClick={() => handleOnClick(state.active, data)}
      ></Wrapper>
      <InfoWindow dataCL={data} visible={state.active}></InfoWindow>
    </>
  );
}
