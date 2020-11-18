import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "./Header";
import Home from "./Home";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <h1>I AM AT CHECKOUT GO BACK AS OF NOW </h1>
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
        {/* Home  */}
      </div>
    </Router>
  );
}

export default App;
