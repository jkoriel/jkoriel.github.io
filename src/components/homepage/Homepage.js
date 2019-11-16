import React from "react";
import { Header, Container, Card, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Homepage = () => (
  <Container style={{ marginLeft: "25px", marginRight: "25px" }}>
    <Header
      inverted
      as="h1"
      style={{
        padding: "25px",
        textAlign: "center",
        fontFamily: "Gotham Narrow,Arial,sans-serif"
      }}
    >
      USAA Mortgage Date Calculator
    </Header>
    <Grid columns={2}>
      <Grid.Row>
        <Grid.Column>
          <Link to={"/conv"}>
            <Container style={{ padding: "25px" }}>
              <Card fluid style={{ padding: "50px" }}>
                <Card.Content>
                  <Card.Header
                    style={{
                      textAlign: "center",
                      fontFamily: "Gotham Narrow,Arial,sans-serif"
                    }}
                  >
                    Conventional Mortgage Date Calculator
                  </Card.Header>
                </Card.Content>
              </Card>
            </Container>
          </Link>
          <Link to={"/jumbo"}>
            <Container style={{ padding: "25px" }}>
              <Card fluid style={{ padding: "50px" }}>
                <Card.Content>
                  <Card.Header
                    style={{
                      textAlign: "center",
                      fontFamily: "Gotham Narrow,Arial,sans-serif"
                    }}
                  >
                    Conv Jumbo Mortgage Date Calculator
                  </Card.Header>
                </Card.Content>
              </Card>
            </Container>
          </Link>
        </Grid.Column>
        <Grid.Column>
          <Link to={"/va"}>
            <Container style={{ padding: "25px" }}>
              <Card fluid style={{ padding: "50px" }}>
                <Card.Content>
                  <Card.Header
                    style={{
                      textAlign: "center",
                      fontFamily: "Gotham Narrow,Arial,sans-serif"
                    }}
                  >
                    VA Mortgage Date Calculator
                  </Card.Header>
                </Card.Content>
              </Card>
            </Container>
          </Link>
          <Link to={"/vanewconst"}>
            <Container style={{ padding: "25px" }}>
              <Card fluid style={{ padding: "50px" }}>
                <Card.Content>
                  <Card.Header
                    style={{
                      textAlign: "center",
                      fontFamily: "Gotham Narrow,Arial,sans-serif"
                    }}
                  >
                    VA New Construction Mortgage Date Calculator
                  </Card.Header>
                </Card.Content>
              </Card>
            </Container>
          </Link>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
);
export default Homepage;
