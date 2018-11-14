import React from "react";
import { Links, NavBtn, StyledLink, User, ImageBtn, Image, Logout } from './header_style'

const Menu = ({ currentUser, logout }) => {
  return (
    <Links>
      <NavBtn>
        <StyledLink to="/">Home</StyledLink>
      </NavBtn>
      <NavBtn>
        <StyledLink to="/following">Following</StyledLink>
      </NavBtn>
      <NavBtn>
        <StyledLink to={`/user/${currentUser.id}`}>
            <ImageBtn>
              {currentUser.imageUrl
                ? <Image src={currentUser.imageUrl} />
                : <Image
                    src="https://source.unsplash.com/user/yiwen0316"
                  />}
            </ImageBtn>
            <User>
              {currentUser.username[0].toUpperCase() +
                currentUser.username.slice(1)}
            </User>
        </StyledLink>
      </NavBtn>
      <NavBtn>
        <Logout onClick={logout}>
          Log Out
        </Logout>
      </NavBtn>
    </Links>
  );
};

export default Menu;
