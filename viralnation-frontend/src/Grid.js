import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import BasicCard from "./Card";
import Pagination from "@mui/material/Pagination";

export default function ResponsiveGrid({ profiles, theme, mode }) {
  console.log(profiles);
  const [profileChunks, setProfileChunks] = React.useState([]);
  const [page, setPage] = React.useState(1);
  React.useEffect(() => {
    const chunks = Array.from(
      new Array(Math.ceil(profiles.length / 12)),
      (_, i) => profiles.slice(i * 12, i * 12 + 12)
    );
    setProfileChunks(chunks);
  }, [profiles]);

  const handleChange = (event, value) => {
    setPage(value);
  };

  console.log(profileChunks);
  console.log(theme);
  return (
    <>
      {profileChunks.length > 0 && (
        <>
          <Grid
            container
            spacing={{ xs: 4, md: 4 }}
            columns={{ xs: 4, sm: 4, md: 4 }}
          >
            {" "}
            {profileChunks[page - 1].map((profile, index) => {
              return (
                <Grid
                  item
                  spacing={{ xs: 4, md: 4 }}
                  columns={{ xs: 4, sm: 4, md: 4 }}
                >
                  <BasicCard
                    theme={theme}
                    mode={mode}
                    profile={profile}
                  ></BasicCard>{" "}
                </Grid>
              );
            })}
          </Grid>
          <Pagination
            count={profileChunks.length}
            page={page}
            boundaryCount={1}
            onChange={handleChange}
          />{" "}
        </>
      )}
    </>
  );
}
