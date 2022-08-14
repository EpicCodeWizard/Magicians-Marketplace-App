import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Competition from "./pages/Competition";
import Interview from "./pages/Interview";
import JobOffer from "./pages/JobOffer";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/competition" exact component={Competition} />
          <Route path="/jobs" exact component={JobOffer} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/interview" exact component={Interview} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
