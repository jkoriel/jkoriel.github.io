import React from "react";
import { Input, Form, Segment, Table } from "semantic-ui-react";
import {
  expDateBackgroundColor,
  compareDates,
  expirationDateFunc
} from "./HelperFunctions";

const ConvItem = props => {
  let backgroundColor = expDateBackgroundColor(
    props.name,
    props.value[props.name],
    props.days,
    props.value.closingDate,
    compareDates
  );

  return (
    <Table.Row>
      <Table.Cell width="2" textAlign="center" style={{ fontWeight: "bold" }}>
        {props.label}
      </Table.Cell>
      <Table.Cell width="1" collapsing>
        <Form.Field>
          <Input
            widths="equal"
            size="mini"
            type="date"
            style={{
              marginLeft: "35px",
              marginTop: "10px",
              fontWeight: "bold"
            }}
            label={props.text}
            name={props.name}
            onChange={props.handleChange}
            value={props.value[props.name]}
          />
        </Form.Field>
      </Table.Cell>
      <Table.Cell collapsing width="1">
        {props.days === 0 ? (
          <Segment size="mini" textAlign="center">
            Appraisal Expiration Date
          </Segment>
        ) : props.days ? (
          <Segment
            size="mini"
            textAlign="center"
            style={{ fontWeight: "bold" }}
          >
            Plus {props.days} Days
          </Segment>
        ) : (
          ""
        )}
      </Table.Cell>
      {props.name === "closingDate" ? (
        <Table.Cell
          width="1"
          style={{
            backgroundColor: " white",
            fontFamily: "Gotham Narrow,Arial,sans-serif",
            fontWeight: "bold"
          }}
        />
      ) : (
        <Table.Cell
          width="1"
          style={{
            backgroundColor: `${backgroundColor}`,
            fontFamily: "Gotham Narrow,Arial,sans-serif",
            fontWeight: "bold"
          }}
        >
          {expirationDateFunc(props.name, props.value[props.name], props.days)}
        </Table.Cell>
      )}
    </Table.Row>
  );
};

export default ConvItem;
