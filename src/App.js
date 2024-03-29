import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./components/homepage/Homepage";
import TopNav from "./components/homepage/TopNav";
import Conv from "./components/conventional/Conv";
import Va from "./components/va/Va";
import Jumbo from "./components/jumbo/Jumbo";
import VaNewConst from "./components/vanewconst/VaNewConst";
import { Container } from "semantic-ui-react";

class App extends React.Component {
  render() {
    return (
      <Router>
        <TopNav />
        <Container
          fluid
          style={{ backgroundColor: "#0F1E31", paddingBottom: "100px" }}
        >
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/conv" component={Conv} />
            <Route path="/va" component={Va} />
            <Route path="/jumbo" component={Jumbo} />
            <Route path="/vanewconst" component={VaNewConst} />
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;
