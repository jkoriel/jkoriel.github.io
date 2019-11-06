import React from "react";
import { Grid, Input, Form, Divider, Icon, Message } from "semantic-ui-react";

class ConvItem extends React.Component {
  state = {
    borrowerPaystubs: "",
    les: "",
    creditReport: "",
    bankStatement: "",
    appraisal: "",
    titleCommitment: "",
    voe: "",
    thirdPartyVoe: "",
    selfEmployedVoe: "",
    voi: "",
    addDays: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log("handle change", e.target.name, e.target.value);
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

  calcWorkingDays(fromDate, days) {
    var count = 0;
    while (count <= days) {
      fromDate.setDate(fromDate.getDate() + 1);
      if (fromDate.getDay() !== 0 && fromDate.getDay() !== 6) count++;
    }

    return new Intl.DateTimeFormat("en-US").format(fromDate);
  }

  compareDates(docDate, days, closingDate) {
    let updatedDocDate = new Date(docDate);
    updatedDocDate.setDate(updatedDocDate.getDate() + days + 1);
    if (new Date(closingDate).getTime() < updatedDocDate.getTime()) {
      return true;
    } else return false;
  }

  render() {
    return (
      <Grid.Row>
        <Grid.Column width="3">
          <label>{this.props.label}</label>
        </Grid.Column>
        <Grid.Column width="4">
          <p className="labels">{this.props.text}</p> <Divider />
          <Form.Field>
            <Input
              size="mini"
              style={{ width: "165px" }}
              type="date"
              name={this.props.name}
              onChange={this.handleChange}
              value={this.state[this.props.name]}
            />
          </Form.Field>
        </Grid.Column>
        {this.props.name === "closingDate" ? (
          ""
        ) : (
          <Grid.Column width="3">
            <p>Plus {this.props.days} days</p> <Divider />
            {!this.state[this.props.name] ? (
              <Message size="mini">
                <Icon name="long arrow alternate left" size="big" />
                Input a Date
              </Message>
            ) : this.props.name === "voe" ? (
              this.calcWorkingDays(
                new Date(this.state[this.props.name]),
                this.props.days
              )
            ) : (
              this.addDays(this.state[this.props.name], this.props.days)
            )}
          </Grid.Column>
        )}
        <Grid.Column width="2">
          {this.state[this.props.name] === ""
            ? ""
            : this.compareDates(
                this.state[this.props.name],
                this.props.days,
                this.props.closingDate
              )
            ? "Good through closing date"
            : "Expires before closing date"}
        </Grid.Column>
      </Grid.Row>
    );
  }
}

export default ConvItem;
