import React from "react";
import { Form, Input } from "semantic-ui-react";

const ConvForm = () => (
  <Form size="mini">
    <Form.Field>
      <label>Closing Date</label>
      <Input type="date" placeholder="00/00/0000" />
    </Form.Field>
    <Form.Field>
      <label>Borrower Paystubs</label>
      <Input type="date" placeholder="00/00/0000" />
    </Form.Field>
    <Form.Field>
      <label>Leave and Earnings Statement (LES)</label>
      <Input type="date" placeholder="00/00/0000" />
    </Form.Field>
    <Form.Field>
      <label>Credit Report</label>
      <Input type="date" placeholder="00/00/0000" />
    </Form.Field>
    <Form.Field>
      <label>Bank Statements</label>
      <Input type="date" placeholder="00/00/0000" />
    </Form.Field>
    <Form.Field>
      <label>Appraisal</label>
      <Input type="date" placeholder="00/00/0000" />
    </Form.Field>
    <Form.Field>
      <label>Title Commitment</label>
      <Input type="date" placeholder="00/00/0000" />
    </Form.Field>
    <Form.Field>
      <label>Verbal Verification of Employment (VOE)</label>
      <Input type="date" placeholder="00/00/0000" />
    </Form.Field>
    <Form.Field>
      <label>Third-Party Verbal Verification of Employment (VOE)</label>
      <Input type="date" placeholder="00/00/0000" />
    </Form.Field>
    <Form.Field>
      <label>Self Employed Verbal Verification of Employment (VOE)</label>
      <Input type="date" placeholder="00/00/0000" />
    </Form.Field>
    <Form.Field>
      <label>Verification of Income (VOI)</label>
      <Input type="date" placeholder="00/00/0000" />
    </Form.Field>
  </Form>
);

export default ConvForm;
