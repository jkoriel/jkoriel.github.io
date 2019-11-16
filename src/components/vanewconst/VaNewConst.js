import React from "react";
import { Container, Table, Header, Button } from "semantic-ui-react";
import DateItem from "../reusable/DateItem";
import { fields } from "./VaNewConstFields";
import Comment from "../reusable/Comment";

class VaNewConst extends React.Component {
  state = {
    closingDate: "",
    borrowerPaystubs: "",
    borrowerPaystubs2: "",
    les: "",
    les2: "",
    creditReport: "",
    creditReport2: "",
    bankStatement: "",
    bankStatement2: "",
    appraisal: "",
    titleCommitment: "",
    voe: "",
    voe2: "",
    voi: "",
    voi2: "",
    termite: "",
    water: "",
    addDays: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  resetForm = () => {
    this.setState({
      ...this.state,
      closingDate: "",
      borrowerPaystubs: "",
      borrowerPaystubs2: "",
      les: "",
      les2: "",
      creditReport: "",
      creditReport2: "",
      bankStatement: "",
      bankStatement2: "",
      appraisal: "",
      titleCommitment: "",
      voe: "",
      voe2: "",
      voi: "",
      voi2: "",
      termite: "",
      water: "",
      addDays: ""
    });
  };

  render() {
    return (
      <Container
        style={{ width: "70%", fontFamily: "Gotham Narrow,Arial,sans-serif" }}
      >
        <Header
          style={{
            color: "white",
            paddingTop: "25px",
            fontSize: "24pt",
            fontFamily: "Gotham Narrow,Arial,sans-serif",
            textAlign: "center"
          }}
          as="h1"
        >
          Va New Construction Mortgage Date Calculator
        </Header>
        <Comment value={this.state} fields={fields} />
        <Button
          inverted
          size="huge"
          onClick={e => {
            if (
              window.confirm("Are you sure you want to reset the calculator?")
            )
              this.resetForm(e);
          }}
          style={{ fontFamily: "Gotham Narrow,Arial,sans-serif" }}
        >
          Clear
        </Button>
        <Table textAlign="center" celled compact>
          <Table.Body
            style={{
              backgroundColor: "white",
              fontFamily: "Gotham Narrow,Arial,sans-serif"
            }}
          >
            {fields.map(({ name, days, label, id, text }) => (
              <DateItem
                key={id}
                text={text}
                name={name}
                days={days}
                label={label}
                value={this.state}
                handleChange={this.handleChange}
              />
            ))}
          </Table.Body>
        </Table>
      </Container>
    );
  }
}

export default VaNewConst;
