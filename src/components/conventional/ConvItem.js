import React from "react";
import { Input, Form, Segment, Icon, Message, Table } from "semantic-ui-react";

const ConvItem = props => {
  let bkgnd = "";

  props.value[props.name] === "" || props.name === "closingDate"
    ? (bkgnd = "white")
    : props.compareDates(
        props.value[props.name],
        props.days,
        props.value.closingDate
      )
    ? (bkgnd = "rgba(0, 255, 0, 0.6)")
    : (bkgnd = "rgba(255, 0, 0, 0.6)");

  return (
    <Table.Row>
      <Table.Cell width="2" textAlign="center">
        {props.label}
      </Table.Cell>
      <Table.Cell width="1" collapsing>
        <Form.Field>
          <Input
            widths="equal"
            size="mini"
            type="date"
            style={{ marginLeft: "35px", marginTop: "7px" }}
            label={props.text}
            name={props.name}
            onChange={props.handleChange}
            value={props.value[props.name]}
          />
        </Form.Field>
      </Table.Cell>
      <Table.Cell collapsing width="1">
        {props.days ? (
          <Segment size="mini" textAlign="center">
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
            fontFamily: "Gotham Narrow,Arial,sans-serif"
          }}
        />
      ) : (
        <Table.Cell
          width="1"
          style={{
            backgroundColor: `${bkgnd}`,
            fontFamily: "Gotham Narrow,Arial,sans-serif"
          }}
        >
          {!props.value[props.name] ? (
            <Message size="mini">
              <Icon name="long arrow alternate left" size="big" />
              Input a Date
            </Message>
          ) : props.name === "voe" || props.name === "voe2" ? (
            props.addBusinessDays(props.value[props.name], props.days)
          ) : (
            props.addDays(props.value[props.name], props.days)
          )}
        </Table.Cell>
      )}
    </Table.Row>
  );
};

export default ConvItem;
