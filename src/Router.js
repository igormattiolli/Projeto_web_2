import { BrowserRouter as Router, Route } from "react-router-dom";

import { Register } from "./pages/Register";
import { Enter } from "./pages/Enter";
import { Users } from "./pages/Users";
import { Home } from "./pages/Home";

export default function Routes() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/enter" component={Enter} />
      <Route exact path="/users" component={Users} />
    </Router>
  );
}
