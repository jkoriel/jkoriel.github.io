import React from "react";
import { fields } from "./ConvFields";
import Calculator from "../reusable/Calculator";

class Conv extends React.Component {
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
    e.preventDefault();
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
      <Calculator
        state={this.state}
        handleChange={this.handleChange}
        resetForm={this.resetForm}
        fields={fields}
        title={"Conventional Mortgage Date Calculator"}
      />
    );
  }
}

export default Conv;
