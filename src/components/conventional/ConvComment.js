import React from "react";
import { Button, Modal, List } from "semantic-ui-react";
import dateFormat from "dateformat";

class ConvComment extends React.Component {
  render() {
    const {
      borrowerPaystubs,
      les,
      creditReport,
      bankStatement,
      appraisal,
      titleCommitment,
      voe,
      thirdPartyVoe,
      selfEmployedVoe,
      voi
    } = this.props.value;
    return (
      <Modal trigger={<Button>Generate Comment</Button>}>
        <Modal.Header>Copy Comment into Cadence</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <List>
              <List.Item>
                {borrowerPaystubs
                  ? `Paystub Expiration Date: 
                ${dateFormat(borrowerPaystubs, "mm/dd/yyyy")}`
                  : ""}
              </List.Item>
              <List.Item>
                {les
                  ? `LES Expiration Date: 
                ${dateFormat(les, "mm/dd/yyyy")}`
                  : ""}
              </List.Item>
              <List.Item>
                {creditReport
                  ? `Credit Report Expiration Date: 
                ${dateFormat(creditReport, "mm/dd/yyyy")}`
                  : ""}
              </List.Item>
              <List.Item>
                {bankStatement
                  ? `Bank Statement Expiration Date:
                ${dateFormat(bankStatement, "mm/dd/yyyy")}`
                  : ""}
              </List.Item>
              <List.Item>
                {appraisal
                  ? `Appraisal Expiration Date: 
                ${dateFormat(appraisal, "mm/dd/yyyy")}`
                  : ""}{" "}
              </List.Item>
              <List.Item>
                {titleCommitment
                  ? `Title Commitment Expiration Date:
                ${dateFormat(titleCommitment, "mm/dd/yyyy")}`
                  : ""}
              </List.Item>
              <List.Item>
                {voe
                  ? `VOE Expiration Date: 
                ${dateFormat(voe, "mm/dd/yyyy")}`
                  : ""}
              </List.Item>
              <List.Item>
                {thirdPartyVoe
                  ? `Third-Party VOE Expiration Date: 
                ${dateFormat(thirdPartyVoe, "mm/dd/yyyy")}`
                  : ""}
              </List.Item>
              <List.Item>
                {selfEmployedVoe
                  ? `Self-Employment VOE Expiration Date:
                ${dateFormat(selfEmployedVoe, "mm/dd/yyyy")}`
                  : ""}
              </List.Item>
              <List.Item>
                {voi
                  ? `VOI Expiration Date:
                ${dateFormat(voi, "mm/dd/yyyy")}`
                  : ""}
              </List.Item>
            </List>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}

export default ConvComment;
