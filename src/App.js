import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import "./App.css";

const Example = () => (
  <>
    <h1>Example</h1>
  </>
);
class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/example" component={Example} />
        </Switch>
      </div>
    );
  }
}

export default App;
