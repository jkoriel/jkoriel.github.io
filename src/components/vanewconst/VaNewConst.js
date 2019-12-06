import React from "react";
import { fields } from "./VaNewConstFields";
import Calculator from "../reusable/Calculator";

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
      <Calculator
        state={this.state}
        handleChange={this.handleChange}
        resetForm={this.resetForm}
        fields={fields}
        title={"VA New Construction Mortgage Date Calculator"}
      />
    );
  }
}

export default VaNewConst;
