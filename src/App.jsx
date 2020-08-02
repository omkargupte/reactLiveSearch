import React from "react";
import { Route, Switch } from "react-router-dom";
import AboutUs from "./component/about-us";
import ContactUs from "./component/contact-us";
import User from "./component/user";
import Search from "./component/search";
import Error from "./component/error";
import NavBar from "./component/nav-bar";

const App = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route
          exact
          path="/"
          render={() => <AboutUs pageName="About Us" />}
        ></Route>
        <Route
          path="/contactUs"
          component={() => <ContactUs pageName="Contact Us" />}
        ></Route>
        <Route path="/user/:fname/:lname" component={User}></Route>
        <Route path="/search" component={Search}></Route>
        <Route component={Error}></Route>
      </Switch>
    </>
  );
};

export default App;
