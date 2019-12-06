import React from "react";
import { Container, Table, Header, Button } from "semantic-ui-react";
import DateItem from "./DateItem";
import Comment from "./Comment";

const Calculator = props => {
  return (
    <Container
      style={{ width: "70%", fontFamily: "Gotham Narrow,Arial,sans-serif" }}
    >
      <Header
        style={{
          color: "white",
          paddingTop: "25px",
          fontSize: "24pt",
          fontFamily: "Gotham Narrow,Arial,sans-serif",
          textAlign: "center"
        }}
        as="h1"
      >
        {props.title}
      </Header>
      <Comment value={props.state} fields={props.fields} />
      <Button
        inverted
        size="huge"
        onClick={e => {
          if (window.confirm("Are you sure you want to reset the calculator?"))
            props.resetForm(e);
        }}
        style={{ fontFamily: "Gotham Narrow,Arial,sans-serif" }}
      >
        Clear
      </Button>
      <Table textAlign="center" celled compact>
        <Table.Body
          style={{
            backgroundColor: "white",
            fontFamily: "Gotham Narrow,Arial,sans-serif"
          }}
        >
          {props.fields.map(({ name, days, label, id, text }) => (
            <DateItem
              key={id}
              text={text}
              name={name}
              days={days}
              label={label}
              value={props.state}
              handleChange={props.handleChange}
            />
          ))}
        </Table.Body>
      </Table>
    </Container>
  );
};

export default Calculator;
