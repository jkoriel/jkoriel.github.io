import React from "react";
import { fields } from "./VaFields";
import Calculator from "../reusable/Calculator";

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
    voi: "",
    voi2: "",
    termite: "",
    water: "",
    dvi: "",
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
      dvi: "",
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
        title={"VA Mortgage Date Calculator"}
      />
    );
  }
}

export default Va;
