import "./App.css";
import ResponsiveGrid from "./Grid";
import * as React from "react";
import Header from "./Header";
import GridHeader from "./GridHeader";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { graphqlRequest } from "./lib/graphql";
import { useDataStore } from "./store/profileStore";

function App() {
  const [profiles, filteredProfiles, mode, actions] = useDataStore((state) => [
    state.profiles,
    state.filteredProfiles,
    state.mode,
    state.actions,
  ]);
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          type: mode,
          mode: mode,
          background: {
            dark: "hsl(230, 17%, 14%)",
            light: "#121212",
          },
        },
      }),
    [mode]
  );
  React.useEffect(() => {
    if (mode === "") {
      actions.setMode("light");
    }
  }, [mode, actions]);

  React.useEffect(() => {
    graphqlRequest("getAll", {}, actions.updateProfiles);
    graphqlRequest("getEmails", {}, actions.updateEmails);
  }, [actions]);
  React.useEffect(() => {
    if (profiles.length > 0) {
      actions.updateFilteredProfiles(profiles);
    }
  }, [actions, profiles]);
  return (
    <>
      {mode && (
        <ThemeProvider theme={theme}>
          <CssBaseline enableColorScheme />
          <Header theme={theme}></Header>
          {profiles.length > 0 && (
            <div className="App">
              <GridHeader></GridHeader>
              <ResponsiveGrid
                profiles={filteredProfiles}
                theme={theme}
                mode={mode}
              ></ResponsiveGrid>
            </div>
          )}
        </ThemeProvider>
      )}
    </>
  );
}

export default App;
