import React from "react";
import { Container } from "semantic-ui-react";
// import ConvForm from "./ConvForm";
// import ConvResult from "./ConvResult";
import ConvItem from "./ConvItem";

const fields = [
  { name: "closingDate", label: "Closing Date" },
  { name: "borrowerPaystubs", label: "Borrower Paystubs", days: 120 },
  { name: "les", label: "Leave and Earnings Statement", days: 120 },
  { name: "creditReport", label: "Credit Report", days: 120 },
  { name: "bankStatement", label: "Bank Statement", days: 120 },
  { name: "appraisal", label: "Appraisal", days: 120 },
  { name: "titleCommitment", label: "Title Commitment", days: 120 },
  { name: "voe", label: "Verbal Verification of Employment", days: 120 },
  {
    name: "thirdPartyVoe",
    label: "Third Party Verification of Employement",
    days: 120
  },
  {
    name: "selfEmployedVoe",
    label: "Self Employed Verification of Employment",
    days: 120
  },
  { name: "voi", label: "Verification of Income", days: 120 }
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
    console.log(this.state);
  };

  render() {
    return (
      <Container>
        {fields.map(({ name, days, label }) => (
          <ConvItem
            name={name}
            days={days}
            label={label}
            value={this.state[name]}
          />
        ))}
      </Container>
    );
  }
}

export default Conv;
