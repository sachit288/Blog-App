import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="https://blogappsachitsharma.onrender.com/">
          <Home />
        </Route>
        <Route path="https://blogappsachitsharma.onrender.com/register">{user ? <Home /> : <Register />}</Route>
        <Route path="https://blogappsachitsharma.onrender.com/login">{user ? <Home /> : <Login />}</Route>
        <Route path="https://blogappsachitsharma.onrender.com/write">{user ? <Write /> : <Register />}</Route>
        <Route path="https://blogappsachitsharma.onrender.com/settings">{user ? <Settings /> : <Register />}</Route>
        <Route path="https://blogappsachitsharma.onrender.com/post/:postId">
          <Single />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
