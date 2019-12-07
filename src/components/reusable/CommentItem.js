import React from "react";
import { List } from "semantic-ui-react";
import { expirationDateFunc } from "./HelperFunctions";

// This function conditionally renders the document expiration date. If the date item is the closing date
// or if no value is entered nothing is rendered. Otherwise it renders the expiration date of the document

const listItemFunc = (name, value, label, expirationDate) => {
  if (name === "closingDate") {
    return "";
  }
  if (!value) {
    return "";
  } else {
    return (
      <List.Item>
        {label} Expiration Date: {expirationDate}
      </List.Item>
    );
  }
};

const CommentItem = props => {
  const expirationDate = expirationDateFunc(
    props.name,
    props.value[props.name],
    props.days
  );

  const listItem = listItemFunc(
    props.name,
    props.value[props.name],
    props.label,
    expirationDate
  );
  return listItem;
};
export default CommentItem;
