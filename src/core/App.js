import { Fragment } from "react";
import LoginContainer from "../containers/Navbar/Authentication/LoginContainer";
import NavbarWrapper from "../containers/Navbar/NavbarWrapper";
import "./styles/App.css";

function App() {
  return (
    <Fragment>
      <NavbarWrapper />
      <LoginContainer />
    </Fragment>
  );
}

export default App;
