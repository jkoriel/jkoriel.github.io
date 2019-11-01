import React from "react";
import { Header, Container, Card } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Homepage = () => (
  <div style={{ backgroundColor: "#0C2136" }}>
    <Container style={{ marginLeft: "25px", marginRight: "25px" }}>
      <Header inverted as="h1">
        USAA Mortgage Date Calculator
      </Header>
      <Card>
        <Card.Content>
          <Card.Header>VA Mortgage Date Calculator</Card.Header>
        </Card.Content>
      </Card>
      <Link to={"/conv"}>
        <Card>
          <Card.Content>
            <Card.Header>Conventional Mortgage Date Calculator</Card.Header>
          </Card.Content>
        </Card>
      </Link>
      <Card>
        <Card.Content>
          <Card.Header>Conventional Jumbo Mortgage Date Calculator</Card.Header>
        </Card.Content>
      </Card>

      {/* <Header inverted as="h2">
        VA Mortgage Date Calculator
      </Header>
      <Header inverted as="h2">
        Conventional Mortgage Date Calculator
      </Header>
      <Header inverted as="h2">
        Conventional Jumbo Mortgage Date Calculator
      </Header> */}
    </Container>
    <Footer />
  </div>
);
export default Homepage;
