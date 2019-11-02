import React, { Component } from "react";
import { Image, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Logo from "./usaa.jpg";

class TopNav extends Component {
  render() {
    return (
      <Menu compact fluid inverted style={{ backgroundColor: "#0C2136" }}>
        <Link to={"/"}>
          <Image src={Logo} size="tiny" style={{ marginLeft: "150px" }} />
        </Link>
        <Link to={"/va"}>
          <Menu.Item style={{ marginTop: "20px" }}>VA</Menu.Item>
        </Link>
        <Link to={"/conv"}>
          <Menu.Item style={{ marginTop: "20px" }}>Conventional</Menu.Item>
        </Link>
        <Link to={"/jumbo"}>
          <Menu.Item style={{ marginTop: "20px" }}>
            Conventional Jumbo
          </Menu.Item>
        </Link>
      </Menu>
    );
  }
}

export default TopNav;
