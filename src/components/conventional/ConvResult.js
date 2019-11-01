import React from "react";
import { Form, Input } from "semantic-ui-react";
import moment from "moment";
import Moment from "react-moment";

function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  console.log(result);
  return result;
// }

const ConvResult = props => {
  console.log("result", { props });
  return (
    <Form size="mini">
      <Form.Field>
        <label>Closing Date</label>
        <Input type="date" value={props.dates.closingDate} readOnly />
      </Form.Field>
      <Form.Field>
        <label>Plus 120 days</label>
        <Input type="date" readOnly>
          <Moment format="MM/DD/YYYY">
            {addDays(props.dates.borrowerPaystubs, 120)}
          </Moment>
        </Input>
      </Form.Field>
      <Form.Field>
        <label>Plus 90 days</label>
        <Input type="date" readOnly />
      </Form.Field>
      <Form.Field>
        <label>Plus 120 days</label>
        <Input type="date" readOnly />
      </Form.Field>
      <Form.Field>
        <label>Plus 120 days</label>
        <Input type="date" readOnly />
      </Form.Field>
      <Form.Field>
        <label>Plus 120 days</label>
        <Input type="date" readOnly />
      </Form.Field>
      <Form.Field>
        <label>Plus 120 days</label>
        <Input type="date" readOnly />
      </Form.Field>
      <Form.Field>
        <label>Plus 10 days</label>
        <Input type="date" readOnly />
      </Form.Field>
      <Form.Field>
        <label>Plus 35 days</label>
        <Input type="date" readOnly />
      </Form.Field>
      <Form.Field>
        <label>Plus 120 days</label>
        <Input type="date" readOnly />
      </Form.Field>
      <Form.Field>
        <label>Plus 120 days</label>
        <Input type="date" readOnly />
      </Form.Field>
    </Form>
  );
};

export default ConvResult;
