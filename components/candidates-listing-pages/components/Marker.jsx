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

export default function Marker({ text, onClick, data }) {
  const initialState = {
    text: "",
    onClick: null,
    active: false,
  };

  const [state, setstate] = useState(initialState);

  useEffect(() => {
    setstate({
      text: text,
      onClick: onClick,
      active: false,
    });
  }, [text, onClick]);

  const handleOnClick = () => {
    if (!state.active) {
      setstate({
        ...state,
        active: true,
      });
    } else {
      setstate({
        ...state,
        active: false,
      });
    }
  };

  return (
    <>
      <Wrapper alt={state.text} onClick={() => handleOnClick()}></Wrapper>
      <InfoWindow dataCL={data} visible={state.active}></InfoWindow>
    </>
  );
}
