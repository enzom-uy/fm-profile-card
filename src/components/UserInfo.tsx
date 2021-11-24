import React from "react";
import styled from "styled-components";
import "../index.css";

export default function ProfileData(props: any) {
  const StyledContainer = styled.div`
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
  const StyledName = styled.span`
    font-family: "Kumbh Sans", sans-serif;
    font-weight: 700;
    font-size: 18px;
    color: hsl(229, 23%, 23%);
  `;

  const StyledAge = styled.span`
    color: hsl(227, 10%, 46%);
    margin-left: 10px;
    font-family: "Kumbh Sans", sans-serif;
    font-weight: 500;
  `;

  const StyledCity = styled.p`
    color: hsl(227, 10%, 46%);
    font-family: "Kumbh Sans", sans-serif;
    font-weight: 500;
    margin: 10px;
  `;

  return (
    <StyledContainer>
      <StyledName>
        {props.name}
        <StyledAge>{props.age}</StyledAge> 
      </StyledName>
      <StyledCity>{props.city}</StyledCity>
    </StyledContainer>
  );
}
