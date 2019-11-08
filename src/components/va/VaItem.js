import React from "react";
import { Grid, Input, Form, Divider, Icon, Message } from "semantic-ui-react";

const VaItem = props => {
  let bkgnd = "";
  props.value[props.name] === "" || props.name === "closingDate"
    ? (bkgnd = "white")
    : props.compareDates(
        props.value[props.name],
        props.days,
        props.value.closingDate
      )
    ? (bkgnd = "green")
    : (bkgnd = "red");

  return (
    <Grid.Row>
      <Grid.Column width="3">
        <label>{props.label}</label>
      </Grid.Column>
      <Grid.Column width="4">
        <p className="labels">{props.text}</p> <Divider />
        <Form.Field>
          <Input
            size="mini"
            style={{ width: "165px" }}
            type="date"
            name={props.name}
            onChange={props.handleChange}
            value={props.value[props.name]}
          />
        </Form.Field>
      </Grid.Column>
      {props.name === "closingDate" ? (
        ""
      ) : (
        <Grid.Column width="3" style={{ backgroundColor: `${bkgnd}` }}>
          <p>Plus {props.days} days</p> <Divider />
          {!props.value[props.name] ? (
            <Message size="mini">
              <Icon name="long arrow alternate left" size="big" />
              Input a Date
            </Message>
          ) : props.name === "voe" ? (
            props.addBusinessDays(new Date(props.value[props.name]), props.days)
          ) : (
            props.addDays(props.value[props.name], props.days)
          )}
        </Grid.Column>
      )}
    </Grid.Row>
  );
};

export default VaItem;
