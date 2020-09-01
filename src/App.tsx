import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SideBar from "./pages/Sidebar/index";
import Header from "./header";
import Customers from "./pages/Customers/index";
import AddNewCustomer from "./pages/AddNewCustomer/index";
import Reports from "./pages/Reports/index";
import "./App.css";

const App: React.FC<{}> = () => {
  return (
    <>
      <Header />
      <Router>
        <Content />
      </Router>
    </>
  );
};

export default App;

const Content = () => {
  return (
    <div className="container">
      <SideBar />
      <Routes />
    </div>
  );
};
const Routes: React.FC = () => {
  return (
    <div className="pages-container">
      <Switch>
        <Route path="/customers" component={Customers} />
        <Route path="/add-customer" component={AddNewCustomer} />
        <Route path="/reports" component={Reports} />
      </Switch>
    </div>
  );
};
