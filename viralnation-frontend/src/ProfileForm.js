import React, { useEffect, useState } from "react";
import { TextField, Button } from "@mui/material";
import Box from "@mui/material/Box";
import { graphqlRequest } from "./lib/graphql";
import { Typography } from "@mui/material";
import { SvgIcon } from "@mui/material";
import { Switch } from "@mui/material";
import { useDataStore } from "./store/profileStore";
import { InputLabel } from "@mui/material";
import "./ProfileForm.css";

export default function ProfileForm({
  formText,
  profile = {
    avatarUrl: "",
    firstName: "",
    lastName: "",
    email: "",
    description: "",
  },
  setClose,
}) {
  const [formData, setFormData] = useState(profile);
  const [verified, setVerfied] = useState(false);
  const [emails, mode] = useDataStore((state) => [state.emails, state.mode]);
  const [errors, setErrors] = useState({});
  const validate = (fieldValues = formData) => {
    let temp = { ...errors };

    if ("email" in fieldValues) {
      temp.email = fieldValues.email ? "" : "This field is required.";
      if (fieldValues.email)
        temp.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fieldValues.email)
          ? ""
          : "Email is not valid.";
      for (let email of emails) {
        if (email === fieldValues.email) {
          temp.email = "Email is already in use.";
        }
      }
    }
    if ("description" in fieldValues) {
      temp.description =
        fieldValues.description.length <= 300
          ? ""
          : "Please limit description to 300 characters";
    }

    setErrors({
      ...temp,
    });
  };

  const handleClose = () => {
    setClose(false);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    validate({ [name]: value });
  };

  const formIsValid = () => {
    const isValid = Object.values(errors).every((x) => x === "");
    return isValid;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const variables = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      avatarUrl: formData.avatarUrl,
      desc: formData.description,
      verified: verified,
    };
    if (formIsValid()) {
      graphqlRequest(
        formText === "Create Profile" ? "createProfile" : "updateProfile",
        variables,
        () => {}
      );
      setClose(false);
    }
  };
  useEffect(() => {}, [errors]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box
          className={"ProfileFormBox"}
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            height: "100%",
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              padding: "32px 48px",
              justifyContent: "space-between",
              width: "672px",
              hieght: "36px",
              alignItems: "center",
              alignSelf: "stretch",
            }}
          >
            <Typography
              sx={{
                fontSize: 28,
                fontFamily: "Roboto",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "36px",
                letterSpacing: "0.18px",
                alignSelf: "flex-start",
              }}
            >
              {formText}
            </Typography>
            <SvgIcon
              sx={{
                width: "24px",
                height: "24px",
                display: "flex",
                alignSelf: "flex-end",
              }}
              onClick={handleClose}
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="navigation/close_24px">
                  <path
                    id=" &#226;&#134;&#179;Color"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M25.3334 8.54663L23.4534 6.66663L16.0001 14.12L8.54675 6.66663L6.66675 8.54663L14.1201 16L6.66675 23.4533L8.54675 25.3333L16.0001 17.88L23.4534 25.3333L25.3334 23.4533L17.8801 16L25.3334 8.54663Z"
                    fill="#9E9E9E"
                  />
                </g>
              </svg>
            </SvgIcon>
          </Box>
          <InputLabel size={"small"}>Image Link</InputLabel>
          <TextField
            sx={{
              display: "flex",
              alignSelf: "flex-end",
              alignItems: "center",
              // padding: "10px 8px",
              height: "40px",
            }}
            name="avatarUrl"
            label="Image Link"
            value={formData.avatarUrl}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <Box
            sx={{
              display: "flex",
              gap: "24px",
              alignItems: "flex-start",
              alignSelf: "stretch",
            }}
          >
            <TextField
              sx={{
                display: "flex",
                alignSelf: "stretch",
                alignItems: "center",
                height: "40px",
              }}
              name="firstName"
              label="First Name"
              value={formData.firstName}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              sx={{
                display: "flex",
                alignSelf: "stretch",
                alignItems: "center",
                height: "40px",
              }}
              name="lastName"
              label="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Box>
          <InputLabel size={"small"}>Email</InputLabel>
          <TextField
            sx={{
              display: "flex",
              alignSelf: "flex-end",
              alignItems: "center",
              height: "40px",
            }}
            name="email"
            label="Email"
            value={formData.email}
            {...(errors["email"] && {
              error: true,
              helperText: errors["email"],
            })}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <InputLabel size={"small"}>Description</InputLabel>
          <TextField
            sx={{
              display: "flex",
              alignSelf: "stretch",
              alignItems: "flex-start",
              flex: "1 0 0",
              height: "124px",
            }}
            name="description"
            label="Write a description for the talent"
            value={formData.description}
            onChange={handleChange}
            {...(errors["description"] && {
              error: true,
              helperText: errors["description"],
            })}
            fullWidth
            multiline
            rows={4}
            margin="normal"
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              hieght: "88px",
              gap: "16px",
              paddingTop: "20px",
              paddingLeft: "20px",
              paddingBottom: "20px",
              alignItems: "flex-end",
              alignSelf: "stretch",
              bgcolor: mode === "light" ? "grey.200" : "grey.900",
            }}
          >
            <Typography
              sx={{
                fontSize: 20,
                fontFamily: "Roboto",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "24px",
                letterSpacing: "0.5px",
                alignSelf: "flex-start",
              }}
            >
              {"Talent is verified"}
            </Typography>
            <Switch
              size="small"
              onChange={() => setVerfied(!verified)}
              sx={{
                alignSelf: "flex-end",
                marginLeft: "60%",
                justifyContent: "flex-end",
                paddingLeft: "40px",
              }}
            />
          </Box>

          <Button
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignSelf: "flex-end",
              marginLeft: "75%",
              marginTop: "4%",
            }}
            variant="contained"
            type="submit"
            color="primary"
            disabled={!formIsValid()}
          >
            {formText}
          </Button>
        </Box>
      </form>
    </>
  );
}
