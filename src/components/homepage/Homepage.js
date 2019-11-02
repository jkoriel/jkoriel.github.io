import React from "react";
import { Header, Container, Card } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Homepage = () => (
  <div style={{ backgroundColor: "#0C2136" }}>
    <Container style={{ marginLeft: "25px", marginRight: "25px" }}>
      <Header inverted as="h1" style={{ padding: "25px", textAlign: "center" }}>
        USAA Mortgage Date Calculator
      </Header>
      <Link to={"/va"}>
        <div style={{ padding: "40px" }}>
          <Card style={{ padding: "10px" }}>
            <Card.Content>
              <Card.Header>VA Mortgage Date Calculator</Card.Header>
            </Card.Content>
          </Card>
        </div>
      </Link>
      <Link to={"/conv"}>
        <div style={{ marginLeft: "40px" }}>
          <Card style={{ padding: "10px" }}>
            <Card.Content>
              <Card.Header>Conventional Mortgage Date Calculator</Card.Header>
            </Card.Content>
          </Card>
        </div>
      </Link>
      <Link to={"/jumbo"}>
        <div style={{ padding: "40px" }}>
          <Card style={{ padding: "10px" }}>
            <Card.Content>
              <Card.Header>
                Conventional Jumbo Mortgage Date Calculator
              </Card.Header>
            </Card.Content>
          </Card>
        </div>
      </Link>
    </Container>
    <Footer />
  </div>
);
export default Homepage;
