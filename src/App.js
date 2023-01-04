import { Fragment } from "react";
import NavbarWrapper from "./containers/Navbar/NavbarWrapper";
import WeatherInfoContainer from "./containers/WeatherUpdate/WeatherInfoContainer";
import "./styles/App.css";

function App() {
  return (
    <Fragment>
      <NavbarWrapper />
      <WeatherInfoContainer />
    </Fragment>
  );
}

export default App;
