import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ColorModeContext } from "context/ColorModeContext";
import "styles/App.css";
import { THEME_DARK_MODE, THEME_LIGHT_MODE } from "core/consts";
import AppContainer from "core/containers/AppContainer";
import { useState, useMemo } from "react";
import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const [mode, setMode] = useState(THEME_LIGHT_MODE);
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) =>
          prevMode === THEME_LIGHT_MODE ? THEME_DARK_MODE : THEME_LIGHT_MODE
        );
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/*" element={<AppContainer />} />
        </Routes>
        <ToastContainer />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
