
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Tables from "./pages/Tables";
import Children from "./pages/children";
import Organization from "./pages/organization";
import Billing from "./pages/Billing";
import Rtl from "./pages/Rtl";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import SignUpOrg from "./pages/SignUpOrg";
import SignIn from "./pages/SignIn";
import Main from "./components/layout/Main";
import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={SignUp} />
        <Route path="/sign-up-org" exact component={SignUpOrg} />
        <Route path="/sign-in" exact component={SignIn} />
        <Main>
          <Route path="/dashboard" component={Home} />
          <Route exact path="/tables" component={Tables} />
          <Route exact path="/children" component={Children} />
          <Route exact path="/organization" component={Organization} />
          <Route exact path="/billing" component={Billing} />
          <Route exact path="/rtl" component={Rtl} />
          <Route exact path="/profile" component={Profile} />
        </Main>
      </Switch>
    </div>
  );
}

export default App;
