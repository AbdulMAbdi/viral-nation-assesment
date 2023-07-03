import "./App.css";
import ResponsiveGrid from "./Grid";
import * as React from "react";
import Header from "./Header";
import GridHeader from "./GridHeader";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { graphqlRequest } from "./lib/graphql";

function App() {
  const [profiles, setProfiles] = React.useState([]);
  const [mode, setMode] = React.useState("light");

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          type: mode,
          mode: mode,
          background: {
            dark: "hsl(230, 17%, 14%)",
            light: "hsl(0, 0%, 100%)",
          },
        },
      }),
    [mode]
  );
  React.useEffect(() => {
    graphqlRequest("getAll", {}, setProfiles);
  }, []);
  console.log(theme);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <Header setMode={setMode} mode={mode}></Header>
        {profiles.length > 0 && (
          <div className="App">
            <GridHeader></GridHeader>
            <ResponsiveGrid
              profiles={profiles}
              theme={theme}
              mode={mode}
            ></ResponsiveGrid>
          </div>
        )}
      </ThemeProvider>
    </>
  );
}

export default App;
