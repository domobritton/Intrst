import React from "react";
import { Link } from "react-router-dom";
import Menu from "./header_items";
import Masonry from "../masonry/masonry";

const Header = ({ currentUser, logout, openModal, closeModal }) => {
  const sessionLinks = () => {
    return (
      <div>
        <Masonry />
      </div>
    );
  };

  const nav = () =>
    <div className="header">
      <div className="logo-outer">
        <Link to="/">
          <img className="nav-logo" src={window.logo} alt="Intrst logo" />
        </Link>
      </div>
      <div className="search">
        <span className="fa fa-search" />
        <input type="text" placeholder="Search" />
      </div>
      <Menu currentUser={currentUser} logout={logout} />
    </div>;

  if (currentUser) {
    closeModal();
    return nav();
  } else {
    openModal({ modal: "ShowSignup" });
    return sessionLinks();
  }
};

export default Header;
