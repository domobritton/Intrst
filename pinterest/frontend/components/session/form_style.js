import styled from "styled-components";

export const SessionPage = styled.div `
  overflow-y: hidden;
  height: 100vh;
  width: 100vw;
  &:before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100vw;
    overflow-y: hidden;
    height: 100vh;
    display: block;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.5);
  }

  @media all and (max-width: 500px) {
    position: absolute;
    top: 0;
    left: 0;
    max-height: 80vh;
    height: 80vh;
    overflow-y: hidden;
  }
`;

export const Wrapper = styled.div `
  margin: auto;
  width: 400px;
  max-height: 533px;
  padding-top: 25px;
  background: white;
  border-radius: 8px;
  text-align: center;
  position: absolute;
  top: 0;
  margin-top: 50px;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;

  @media all and (max-width: 500px) {
    width: 100vw;
    background: transparent;
    border-radius: 0;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

export const LoginBtn = styled.div `
  min-height: 25px;
  background-color: #efefef;
  padding: 10px 14px 0 14px;
  border-radius: 4px;
  cursor: pointer;
  position: absolute;
  top: 50px;
  right: 25px;
  width: 100px;
  text-align: center;
  margin: auto;
  z-index: 1;
  > p {
    line-height: 14px;
    font-size: 14px;
    font-weight: bold;
    text-decoration: none;
    color: #717171;
  }
`;

export const Header = styled.div `
  padding-bottom: 20px;
  background: #ffffff;
  background: -webkit-linear-gradient(bottom, #ffffff, transparent);
  background: -moz-linear-gradient(bottom, #ffffff, transparent);
  background: linear-gradient(to top, #ffffff, transparent);
`;

export const Logo = styled.img `
  height: 90px;
  width: 130px;
`;

export const Welcome = styled.h3 `
  margin-top: -20px;
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  letter-spacing: 2px;
  @media all and (max-width: 500px) {
    color: #fff;
  }
`;

export const Subtitle = styled.h4 `
  margin-top: 5px;
  margin-bottom: 20px;
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  color: rgba(204, 204, 204, 1);
  @media all and (max-width: 500px) {
    color: #fff;
  }
`;

export const UpperForm = styled.form `
  margin: 0 auto;
  width: 100%;
  background: white;
`;

export const LowerForm = styled.form `
  margin: 0 auto;
  width: 100%
  background: white;
  padding-bottom: 50px;
  `;

export const Input = styled.input `
  min-height: 40px;
  border: 1px solid #8e8e8e;
  border-radius: 4px;
  font-size: 16px;
  width: 73%;
  padding: 3px 14px;
  margin-top: 10px;
`;

export const Submit = styled.input `
  background-color: rgba(189, 8, 28, 1);
  font-size: 15px;
  color: rgba(255, 255, 255, 1);
  font-weight: bold;
  border-radius: 4px;
  height: 36px;
  padding: 3px 14px;
  cursor: pointer;
  margin-top: 10px;
  width: 80%;
  align-items: center;
`;

export const LoginMobile = styled.div `
  display: inline-block;
  background-color: lightgray;
  font-size: 15px;
  color: rgba(255, 255, 255, 1);
  font-weight: bold;
  border-radius: 4px;
  height: 36px;
  cursor: pointer;
  margin-top: 10px;
  width: 80%;
  text-align: center;
  align-items: center;
  > p {
    padding-top: 10px;
    color: #000;
  }
`;

export const Error = styled.div `
  font-size: 12px;
  color: #e3780c;
  margin-top: 10px;
`;

export const SignupLink = styled.div`
  padding-left: 60px;
  padding-right: 60px;
  margin-bottom: 40px;
  cursor: pointer;
`;

export const Link = styled.p`
  line-height: 14px;
  font-size: 14px;
  font-weight: bold;

  &:hover {
    border-bottom: 0.5px solid rgba(138, 138, 138, 1);  
  }
`;

export const DivLine = styled.div`
  border-bottom: 1px solid rgba(222, 222, 222, 1);
  margin: 30px auto 15px;
  width: 110px;
`;