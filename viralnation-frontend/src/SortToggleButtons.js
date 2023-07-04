import * as React from "react";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useDataStore } from "./store/profileStore";
import { graphqlRequest } from "./lib/graphql";

export default function SortToggleButtons() {
  const [sort, setSort] = React.useState("asc");
  const [actions] = useDataStore((state) => [state.actions]);

  const handleSort = (event, newSort) => {
    graphqlRequest(
      "getProfilesSortEmail",
      { sort: newSort },
      actions.updateProfiles
    );
    setSort(newSort);
  };

  return (
    <ToggleButtonGroup
      value={sort}
      exclusive
      onChange={handleSort}
      aria-label="sort"
    >
      <ToggleButton value="asc" aria-label="left aligned">
        <ArrowUpwardOutlinedIcon />
      </ToggleButton>
      <ToggleButton value="desc" aria-label="left aligned">
        <ArrowDownwardOutlinedIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
