import React from "react";
import { Container, Grid, Header, Button } from "semantic-ui-react";
import ConvItem from "./ConvItem";
import { fields } from "./ConvFields";

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
    console.log("change");
    console.log("change handler target value", e.target.value);
  };

  resetForm = () => {
    this.setState({
      ...this.state,
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
    });
  };

  render() {
    return (
      <Container>
        <Header as="h1">
          Conventional Mortgage Date Calculator by Joe Smooth and Hakerman E
        </Header>
        <Button
          positive
          size="medium"
          onClick={e => {
            if (
              window.confirm("Are you sure you want to reset the calculator?")
            )
              this.resetForm(e);
          }}
        >
          RESET
        </Button>
        <Grid celled>
          {fields.map(({ name, days, label, id, text }) => (
            <ConvItem
              key={id}
              text={text}
              name={name}
              days={days}
              label={label}
              value={this.state[name]}
              handleChange={this.handleChange}
            />
          ))}
        </Grid>
      </Container>
    );
  }
}

export default Conv;
