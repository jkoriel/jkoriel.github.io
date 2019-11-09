import React from "react";
import { List, Grid, Header, Segment, Container } from "semantic-ui-react";

const Footer = () => {
  return (
    <Segment inverted vertical style={{ padding: "5em 0em" }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="USAA" />
              <List link inverted>
                <List.Item
                  style={{ fontFamily: "Gotham Narrow,Arial,sans-serif" }}
                >
                  USAA Federal Savings Bank
                </List.Item>
                <List.Item
                  style={{ fontFamily: "Gotham Narrow,Arial,sans-serif" }}
                >
                  For Internal Use Only
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="Services" />
              <List link inverted>
                <List.Item
                  as="a"
                  style={{ fontFamily: "Gotham Narrow,Arial,sans-serif" }}
                >
                  Going above for those who have gone beyond
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header
                as="h4"
                inverted
                style={{ fontFamily: "Gotham Narrow,Arial,sans-serif" }}
              >
                Loyalty
              </Header>
              <p style={{ fontFamily: "Gotham Narrow,Arial,sans-serif" }}>
                We know what it means to serve
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
};

export default Footer;
