import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./components/homepage/Homepage";
import TopNav from "./components/TopNav";
import Conv from "./components/conventional/Conv";

class App extends React.Component {
  render() {
    return (
      <Router>
        <TopNav />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/conv" component={Conv} />
        </Switch>
      </Router>
    );
  }
}

export default App;
