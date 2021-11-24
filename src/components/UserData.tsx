import React from "react";
import styled from "styled-components";

export default function UserData(props: any) {
  const StyledContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 70%;
    position: relative;
    top: 10%;
  `;
  const StyledDataContainer = styled.div`
    display: flex;
    flex-direction: column;
  `;
  const StyledData = styled.span`
    color: hsl(229, 23%, 23%);
    font-family: "Kumbh Sans", sans-serif;
    font-weight: 900;
    font-size: 18px;
  `;
  const StyledDataName = styled.p`
    color: hsl(227, 10%, 46%);
    margin: 6px 0;
    font-family: "Kumbh Sans", sans-serif;
    font-size: 10px;
    letter-spacing:2px;
  `;
  return (
    <StyledContainer>
      <StyledDataContainer>
        <StyledData> {props.followers} </StyledData>
        <StyledDataName>Followers</StyledDataName>
      </StyledDataContainer>

      <StyledDataContainer>
        <StyledData> {props.likes} </StyledData>
        <StyledDataName>Likes</StyledDataName>
      </StyledDataContainer>

      <StyledDataContainer>
        <StyledData> {props.photos} </StyledData>
        <StyledDataName>Photos</StyledDataName>
      </StyledDataContainer>
    </StyledContainer>
  );
}
