import React from "react";
import { List } from "semantic-ui-react";
import { addBusinessDays, addDays } from "./HelperFunctions";

// change this into a function, if statements not ternarys
const CommentItem = props => {
  const expirationDate =
    props.name === "closingDate" || !props.value[props.name]
      ? ""
      : props.name === "voe" || props.name === "voe2"
      ? addBusinessDays(props.value[props.name], props.days)
      : addDays(props.value[props.name], props.days);
  const listItem =
    props.name === "closingDate" ? (
      ""
    ) : props.value[props.name] ? (
      <List.Item>
        {props.label} Expiration Date: {expirationDate}
      </List.Item>
    ) : (
      ""
    );
  return listItem;
};
export default CommentItem;
