import React from "react";
import { List } from "semantic-ui-react";

const CommentItem = props => {
  const expirationDate =
    props.name === "closingDate" || !props.value[props.name]
      ? ""
      : props.name === "voe" || props.name === "voe2"
      ? props.addBusinessDays(props.value[props.name], props.days)
      : props.addDays(props.value[props.name], props.days);
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
