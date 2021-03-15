import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import MenuBar from "./components/MenuBar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { Container } from "semantic-ui-react";
import { AuthProvider } from "./context/auth";
import AuthRoute from "./util/AuthRoute";
import SinglePost from "./pages/SinglePost";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Container>
          <MenuBar />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <AuthRoute exact path="/login" component={LoginPage} />
            <AuthRoute exact path="/register" component={RegisterPage} />
            <Route exact path="/posts/:postId" component={SinglePost} />
          </Switch>
        </Container>
      </Router>
    </AuthProvider>
  );
}

export default App;
