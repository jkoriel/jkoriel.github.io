import React from "react";
import { Form, Input } from "semantic-ui-react";

const ConvForm = props => (
  <Form size="mini">
    <Form.Field>
      <label>Closing Date</label>
      <Input
        type="date"
        name="closingDate"
        onChange={props.handleChange}
        value={props.dates.closingDate}
      />
    </Form.Field>
    <Form.Field>
      <label>Borrower Paystubs</label>
      <Input
        type="date"
        name="borrowerPaystubs"
        onChange={props.handleChange}
        value={props.dates.borrowerPaystubs}
      />
    </Form.Field>
    <Form.Field>
      <label>Leave and Earnings Statement (LES)</label>
      <Input
        type="date"
        name="les"
        onChange={props.handleChange}
        value={props.dates.les}
      />
    </Form.Field>
    <Form.Field>
      <label>Credit Report</label>
      <Input
        type="date"
        name="creditReport"
        onChange={props.handleChange}
        value={props.dates.creditReport}
      />
    </Form.Field>
    <Form.Field>
      <label>Bank Statements</label>
      <Input
        type="date"
        name="bankStatement"
        onChange={props.handleChange}
        value={props.dates.bankStatement}
      />
    </Form.Field>
    <Form.Field>
      <label>Appraisal</label>
      <Input
        type="date"
        name="appraisal"
        onChange={props.handleChange}
        value={props.dates.appraisal}
      />
    </Form.Field>
    <Form.Field>
      <label>Title Commitment</label>
      <Input
        type="date"
        name="titleCommitment"
        onChange={props.handleChange}
        value={props.dates.titleCommitment}
      />
    </Form.Field>
    <Form.Field>
      <label>Verbal Verification of Employment (VOE)</label>
      <Input
        type="date"
        name="voe"
        onChange={props.handleChange}
        value={props.dates.voe}
      />
    </Form.Field>
    <Form.Field>
      <label>Third-Party Verbal Verification of Employment (VOE)</label>
      <Input
        type="date"
        name="thirdPartyVoe"
        onChange={props.handleChange}
        value={props.dates.thirdPartyVoe}
      />
    </Form.Field>
    <Form.Field>
      <label>Self Employed Verbal Verification of Employment (VOE)</label>
      <Input
        type="date"
        name="selfEmployedVoe"
        onChange={props.handleChange}
        value={props.dates.selfEmployedVoe}
      />
    </Form.Field>
    <Form.Field>
      <label>Verification of Income (VOI)</label>
      <Input
        type="date"
        name="voi"
        onChange={props.handleChange}
        value={props.dates.voi}
      />
    </Form.Field>
  </Form>
);

export default ConvForm;
