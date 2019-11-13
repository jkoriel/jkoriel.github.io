import React from "react";
import { Button, Modal, List } from "semantic-ui-react";
import CommentItem from "./CommentItem";

class ConvComment extends React.Component {
  render() {
    return (
      <Modal
        style={{ fontFamily: "Gotham Narrow,Arial,sans-serif" }}
        trigger={
          <Button inverted size="huge">
            Generate Comment
          </Button>
        }
      >
        <Modal.Header style={{ fontFamily: "Gotham Narrow,Arial,sans-serif" }}>
          Copy Comment into Cadence
        </Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <List>
              {this.props.fields.map(({ name, days, id, label }) => (
                <CommentItem
                  key={id}
                  name={name}
                  label={label}
                  days={days}
                  value={this.props.value}
                  addDays={this.props.addDays}
                  addBusinessDays={this.props.addBusinessDays}
                />
              ))}
            </List>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}
export default ConvComment;
