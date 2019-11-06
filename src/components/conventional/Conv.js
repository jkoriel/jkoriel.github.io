import React from "react";
import { Container, Grid, Header, Form, Input } from "semantic-ui-react";
import ConvItem from "./ConvItem";
import { fields } from "./ConvFields";

class Conv extends React.Component {
  state = {
    closingDate: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log("handle change", e.target.name, e.target.value);
  };

  render() {
    return (
      <Container>
        <Header as="h1">
          Conventional Mortgage Date Calculator by Joe Smooth and Hackerman E
        </Header>
        <Grid celled>
          <Grid.Row>
            <Grid.Column width="3">
              <label>Closing Date</label>
            </Grid.Column>
            <Form.Field>
              <Input
                type="date"
                name="closingDate"
                onChange={this.handleChange}
                value={this.state.closingDate}
              />
            </Form.Field>
          </Grid.Row>
          {fields.map(({ name, days, label, id, text }) => (
            <ConvItem
              key={id}
              text={text}
              name={name}
              days={days}
              label={label}
              closingDate={this.state.closingDate}
            />
          ))}
        </Grid>
      </Container>
    );
  }
}

export default Conv;
