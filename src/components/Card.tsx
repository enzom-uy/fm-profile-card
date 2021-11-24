import React from "react";
import styled from "styled-components";
import cardTopSvg from "../assets/images/bg-pattern-card.svg";
import ProfilePicture from "./ProfilePicture";
import UserData from "./UserData";
import UserInfo from "./UserInfo";
export default function CardBackground() {
  const StyledContainer = styled.div`
    background-image: url(${cardTopSvg});
    background-repeat: no-repeat;
    background-size: contain;
    background-color: white;
    height: 380px;
    width: 350px;
    border-radius: 10px;
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  `;

  return (
    <StyledContainer>
      <ProfilePicture src="image-victor.jpg" />
      <UserInfo name="Victor Crest" age="26" city="London" />
      <UserData followers="80K" likes="803K" photos="1.4K" />
    </StyledContainer>
  );
}
