import NavbarWrapper from "./containers/Navbar/NavbarWrapper";
import { ColorModeContext } from "./context/ColorModeContext";
import "./styles/App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {useState, useMemo} from 'react'
import { THEME_DARK_MODE, THEME_LIGHT_MODE } from "./core/consts";
import AppContainer from "./core/containers/AppContainer";


const App = () => {

  const [mode, setMode] = useState(THEME_LIGHT_MODE);
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === THEME_LIGHT_MODE ? THEME_DARK_MODE : THEME_LIGHT_MODE));
      },
    }),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <AppContainer />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
