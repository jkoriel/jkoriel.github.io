import React from "react";
import { Grid, Container } from "semantic-ui-react";
import ConvForm from "./ConvForm";
import ConvResult from "./ConvResult";

class Conv extends React.Component {
  state = {
    closingDate: "",
    borrowerPaystubs: "",
    les: "",
    creditReport: "",
    bankStatement: "",
    appraisal: "",
    titleCommitment: "",
    voe: "",
    thirdPartyVoe: "",
    selfEmployedVoe: "",
    voi: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  };

  render() {
    return (
      <Grid>
        <Grid.Column width="4">
          <Container>
            <ConvForm dates={this.state} handleChange={this.handleChange} />
          </Container>
        </Grid.Column>
        <Grid.Column width="4">
          <Container>
            <ConvResult dates={this.state} />
          </Container>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Conv;
