import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderBar = styled.div `
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  background-color: rgba(255, 255, 255, 1);
  padding: 12px 0;
  box-shadow: 0 1px 1px rgba(0,0,0,0.07);
  z-index: 10;

  @media all and (max-width: 710px) {
    padding-left: 0;
    padding-right: 0;
  }
`;

export const Search = styled.div `
  position: relative;
  width: 60%;
  margin-left: -20px;

    @media all and (max-width: 710px) {
      margin-left: 2.5%;
      width: 95%;
  }
`;

export const Input = styled.input `
  text-indent: 48px;
  width: 100%;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  height: 40px;
`;

export const Icon = styled.span `
  position: absolute;
  top: 10px;
  left: 15px;
  font-size: 20px;
  color: #8e8e8e;
`;

export const LogoBtn = styled.div `
  padding: 8px 15px;
  border-radius: 25px;

  &:hover {
      background-color: rgba(0, 0, 0, 0.06);
  }
`;

export const Logo = styled.img `
  width: 57px;
`;

export const Links = styled.div`
  display: flex;
  flex-direction: row;
  // margin-right: 40px;

  @media all and (max-width: 500px) {
      margin-right: 2.5%;
  }
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: #8e8e8e;
    font-size: 16px;
    margin: auto;
    text-align: center;
`;

export const User = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 5px;
`;

export const NavBtn = styled.div`
  padding: 8px 15px;
  border-radius: 25px;
  display: flex;

  &:hover {
      background-color: rgba(0, 0, 0, 0.06);
  }
`;

export const ImageBtn = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  overflow: hidden;
  padding-right: 10px;
  float: left;
`;

export const Image = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 50%;
`;

export const Logout = styled.button`
  background: transparent;
  color: #8e8e8e;
  outline: none;
  `;

  export const FooterBar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  background: rgba(255,255,255, 0.8);
  z-index: 10;
  `;