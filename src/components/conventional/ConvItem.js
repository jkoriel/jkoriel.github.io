import React from "react";
import { Grid, Input, Form } from "semantic-ui-react";

function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  console.log(result);
  return result;
}

const ConvItem = props => {
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width="4">
          <label>{props.label}</label>
        </Grid.Column>
        <Grid.Column width="4">
          <Form.Field>
            <Input
              type="date"
              name={props.name}
              onChange={props.handleChange}
              value={props.value}
            />
          </Form.Field>
        </Grid.Column>
        <Grid.Column></Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default ConvItem;
