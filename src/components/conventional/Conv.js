import React from "react";
import { Container, Grid } from "semantic-ui-react";
import ConvItem from "./ConvItem";

const fields = [
  { id: 1, name: "closingDate", label: "Closing Date" },
  { id: 2, name: "borrowerPaystubs", label: "Borrower Paystubs", days: 120 },
  { id: 3, name: "les", label: "Leave and Earnings Statement", days: 120 },
  { id: 4, name: "creditReport", label: "Credit Report", days: 120 },
  { id: 5, name: "bankStatement", label: "Bank Statement", days: 120 },
  { id: 6, name: "appraisal", label: "Appraisal", days: 120 },
  { id: 7, name: "titleCommitment", label: "Title Commitment", days: 120 },
  { id: 8, name: "voe", label: "Verbal Verification of Employment", days: 120 },
  {
    id: 9,
    name: "thirdPartyVoe",
    label: "Third Party Verification of Employement",
    days: 120
  },
  {
    id: 10,
    name: "selfEmployedVoe",
    label: "Self Employed Verification of Employment",
    days: 120
  },
  { id: 11, name: "voi", label: "Verification of Income", days: 120 }
];

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

  render() {
    return (
      <Container>
        <Grid celled>
          {fields.map(({ name, days, label, id }) => (
            <ConvItem
              key={id}
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
