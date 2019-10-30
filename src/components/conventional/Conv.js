import React from "react";
import { Grid, Container } from "semantic-ui-react";
import ConvForm from "./ConvForm";
import ConvResult from "./ConvResult";

class Conv extends React.Component {
  state = {};
  render() {
    return (
      <Grid>
        <Grid.Column width="4">
          <Container>
            <ConvForm />
          </Container>
        </Grid.Column>
        <Grid.Column width="4">
          <Container>
            <ConvResult />
          </Container>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Conv;
