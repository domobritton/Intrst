import styled from 'styled-components';

export const PinPage = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: hidden;
  background-color: #eeeeee;
`;

export const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  max-height: 100vh;
  width: 100%;
  cursor: zoom-out;
  z-index: 0;
`;

export const BackBtn = styled.div`
  position: absolute;
  top: 0;
  left: 25px;
  width: 65px;
  height: 25px;
  border-radius: 25px;
  padding: 12px 16px;
  cursor: pointer;

  &:hover {
      background-color: rgba(0,0,0,0.07);
  }
`;

export const Arrow = styled.i`
  float: left;
  font-size: 25px;
  color: #333;
  padding-right: 10px;
`;

export const ButtonP = styled.p`
  font-size: 17px;
  line-height: 1.2;
  font-weight: 900;
`;

export const SaveDiv = styled.div`
  position: relative;
  margin: auto;
  margin-top: 40px;
  width: 704px;
  height: 550px;
  background: white;
  border-radius: 8px;
  text-align: center;
  padding: 0, 20px, 20px, 20px;
  z-index: 99;
`;

export const Header = styled.div`
  width: 100%;
  height: 80px;
`;

export const Image = styled.img`
  position: absolute;
  bottom: 20px;
  top: 80px;
  left: 20px;
  width: 300px;
  border-radius: 10px;
`;

export const Save = styled.div`
  background-color: #bd081c;
  position: absolute;
  top: 12px;
  right: 12px;
  width: 60px;
  height: 25px;
  text-align: center;
  padding: 8px;
  color: #fff;
  cursor: pointer;
  border-radius: 6px;
`;