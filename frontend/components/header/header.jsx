import React, { Component } from "react";
import { Link } from "react-router-dom";
import Menu from "./header_items";
import Masonry from "../masonry/masonry";
import { HeaderBar, Search, Input, Icon, LogoBtn, Logo, FooterBar } from './header_style'


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
    }
  }

  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  sessionLinks = () => {
    return (
      <>
        <Masonry />
      </>
    );
  };

  nav = () => {
    const { currentUser, logout } = this.props;
    return (
    <HeaderBar>
      <LogoBtn>
        <Link to="/">
          <Logo src={window.logo} alt="Intrst logo" />
        </Link>
      </LogoBtn>
      <Search>
        <Icon className="fa fa-search" />
        <Input type="text" placeholder="Search" />
      </Search>
      <Menu currentUser={currentUser} logout={logout} />
    </HeaderBar>
    );
  }

  mobileNav = () => {
    const { currentUser, logout } = this.props
    return (
      <>
      <HeaderBar>
      <Search>
        <Icon className="fa fa-search" />
        <Input type="text" placeholder="Search" />
      </Search>
      </HeaderBar>

      <FooterBar>
        <Menu currentUser={currentUser} logout={logout} />
      </FooterBar>
      </>
    );
  }

  render() {
    const { width } = this.state;
    const isMobile = width <= 710;
    const { currentUser, openModal, closeModal } = this.props;
    if (currentUser && !isMobile) {
      closeModal();
      return this.nav();
    } else if (currentUser && isMobile) {
      closeModal();
      return this.mobileNav();
    } else {
      openModal({ modal: "ShowSignup" });
      return this.sessionLinks();
    }
  }
}

export default Header;
