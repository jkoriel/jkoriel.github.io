import React, { Component } from "react";
import { Image, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Logo from "./usaa.jpg";

class TopNav extends Component {
  render() {
    return (
      <Menu inverted size="large" style={{ backgroundColor: "#0C2136" }}>
        <Link to={"/"}>
          <Image src={Logo} size="tiny" style={{ marginLeft: "150px" }} />
        </Link>
        <Menu.Item>VA</Menu.Item>
        <Link to={"/conv"}>
          <Menu.Item style={{ marginTop: "20px" }}>Conventional</Menu.Item>
        </Link>
        <Menu.Item>Conventional Jumbo</Menu.Item>
      </Menu>
    );
  }
}

export default TopNav;
