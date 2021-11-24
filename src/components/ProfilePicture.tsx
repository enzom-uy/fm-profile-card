import React from "react";
import styled from "styled-components";

export default function ProfilePicture(props: any) {
  const StyledImg = styled.img`
    border-radius: 50px;
    border: 4px solid white;
    width: 100px;
    height: 100px;
    position: relative;
    top: 20%;
  `;
  return (
    <>
      <StyledImg src={`./assets/${props.src}`} alt="Just Victor" />
    </>
  );
}
