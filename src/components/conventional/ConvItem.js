import React from "react";
import { Grid, Input, Form, Divider, Icon } from "semantic-ui-react";

function addDays(date, days) {
  if (date.slice(0, 4) < 2018) {
    return "";
  } else {
    var result = new Date(date);
    result.setDate(result.getDate() + days + 1);
    return new Intl.DateTimeFormat("en-US").format(result);
  }
}

const ConvItem = ({ name, days, label, value, handleChange }) => {
  return (
    <Grid.Row>
      {console.log("conv item value", value)}
      {console.log("conv item name", name)}
      <Grid.Column width="3">
        <label>{label}</label>
      </Grid.Column>
      <Grid.Column width="4">
        <Form.Field>
          <Input
            style={{ width: "165px" }}
            type="date"
            name={name}
            onChange={handleChange}
            value={value}
          />
        </Form.Field>
      </Grid.Column>
      {name === "closingDate" ? (
        ""
      ) : (
        <Grid.Column width="3">
          <p>Plus {days} days</p> <Divider />
          <p>
            {!value ? (
              <div>
                <Icon fitted name="long arrow alternate left" /> Input a Date
              </div>
            ) : (
              addDays(value, days)
            )}
          </p>
        </Grid.Column>
      )}
      <Grid.Column width="2"></Grid.Column>
    </Grid.Row>
  );
};

export default ConvItem;
