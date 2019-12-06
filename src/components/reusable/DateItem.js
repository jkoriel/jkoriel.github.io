import React from "react";
import { Input, Form, Segment, Table } from "semantic-ui-react";
import { addDays, addBusinessDays, compareDates } from "./HelperFunctions";

const ConvItem = props => {
  let bkgnd = "";

  props.value[props.name] === "" || props.name === "closingDate"
    ? (bkgnd = "white")
    : compareDates(props.value[props.name], props.days, props.value.closingDate)
    ? (bkgnd = "rgba(0, 255, 0, 0.6)")
    : (bkgnd = "rgba(255, 0, 0, 0.6)");

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
            backgroundColor: `${bkgnd}`,
            fontFamily: "Gotham Narrow,Arial,sans-serif",
            fontWeight: "bold"
          }}
        >
          {!props.value[props.name]
            ? ""
            : props.name === "voe" || props.name === "voe2"
            ? addBusinessDays(props.value[props.name], props.days)
            : addDays(props.value[props.name], props.days)}
        </Table.Cell>
      )}
    </Table.Row>
  );
};

export default ConvItem;
