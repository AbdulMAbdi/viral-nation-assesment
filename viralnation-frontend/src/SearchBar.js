import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { debounce } from "@mui/material/utils";

async function profileFetch({ input: inputValue }, callback) {
  console.log("here", inputValue);
  const graphqlQuery = {
    operationName: "getProfile",
    query: `query 
        getProfile($username:String!) { getProfile(username:$username) {      avatarUrl
          description
          username
          email}
    
        }
      `,
    variables: { username: inputValue },
  };

  const headers = {
    "content-type": "application/json",
    Authorization: "<token>",
  };

  const options = {
    method: "POST",
    headers: headers,
    body: JSON.stringify(graphqlQuery),
  };

  const endpoint = "http://localhost:4000/graphql";

  const response = await fetch(endpoint, options);

  const data = await response.json();
  console.log(data.data.getProfile);
  callback(data.data);
}

export default function SearchBar() {
  const [value, setValue] = React.useState(null);
  const [inputValue, setInputValue] = React.useState("");
  const [options, setOptions] = React.useState([]);

  const fetch = React.useMemo(
    () =>
      debounce((request, callback) => {
        profileFetch(request, callback);
      }, 500),
    []
  );

  React.useEffect(() => {
    let active = true;

    if (inputValue === "") {
      setOptions(value ? [value] : []);
      return undefined;
    }

    fetch({ input: inputValue }, (results) => {
      console.log(results);
      if (active) {
        let newOptions = [];

        if (value) {
          newOptions = [value];
        }

        if (results.getProfile) {
          console.log(results);
          newOptions = [...newOptions, ...results.getProfile.username];
        }

        setOptions(newOptions);
      }
    });

    return () => {
      active = false;
    };
  }, [value, inputValue, fetch]);

  return (
    <Autocomplete
      id="google-map-demo"
      sx={{ width: "100%", height: "100%" }}
      getOptionLabel={(option) =>
        typeof option === "string" ? option : option.description
      }
      filterOptions={(x) => x}
      options={options}
      autoComplete
      includeInputInList
      filterSelectedOptions
      value={value}
      noOptionsText="No Matches"
      onChange={(event, newValue) => {
        setOptions(newValue ? [newValue, ...options] : options);
        setValue(newValue);
      }}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      renderInput={(params) => (
        <TextField {...params} label="Search" fullWidth />
      )}
    />
  );
}
