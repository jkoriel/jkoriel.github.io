import React from "react";
import { Container, Table, Header, Button } from "semantic-ui-react";
import DateItem from "../reusable/DateItem";
import { fields } from "./VaFields";
import Comment from "../reusable/Comment";

class Va extends React.Component {
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
    thirdPartyVoe: "",
    thirdPartyVoe2: "",
    selfEmployedVoe: "",
    selfEmployedVoe2: "",
    voi: "",
    voi2: "",
    addDays: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addDays(date, days) {
    if (date.slice(0, 4) < 2018) {
      return "";
    } else {
      let result = new Date(date);
      result.setDate(result.getDate() + days + 1);
      return new Intl.DateTimeFormat("en-US").format(result);
    }
  }

  addBusinessDays(date, days) {
    var count = 0;
    let result = new Date(date);
    while (count <= days) {
      result.setDate(result.getDate() + 1);
      if (result.getDay() !== 0 && result.getDay() !== 6) count++;
    }
    return new Intl.DateTimeFormat("en-US").format(result);
  }

  compareDates(docDate, days, closingDate) {
    let updatedDocDate = new Date(docDate);
    updatedDocDate.setDate(updatedDocDate.getDate() + days + 1);
    if (new Date(closingDate).getTime() < updatedDocDate.getTime()) {
      return true;
    } else return false;
  }

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
      thirdPartyVoe: "",
      thirdPartyVoe2: "",
      selfEmployedVoe: "",
      selfEmployedVoe2: "",
      voi: "",
      voi2: "",
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
            marginLeft: "290px"
          }}
          as="h1"
        >
          VA Mortgage Date Calculator
        </Header>
        <Comment
          value={this.state}
          addDays={this.addDays}
          addBusinessDays={this.addBusinessDays}
        />
        <Button
          onClick={this.resetForm}
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
                addDays={this.addDays}
                addBusinessDays={this.addBusinessDays}
                compareDates={this.compareDates}
              />
            ))}
          </Table.Body>
        </Table>
      </Container>
    );
  }
}

export default Va;
