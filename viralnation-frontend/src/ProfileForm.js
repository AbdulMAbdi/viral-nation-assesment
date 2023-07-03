import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import Box from "@mui/material/Box";
import { graphqlRequest } from "./lib/graphql";
import { Typography } from "@mui/material";
import { SvgIcon } from "@mui/material";
import { Switch } from "@mui/material";

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
  console.log(setClose);
  const [formData, setFormData] = useState(profile);
  const [verified, setVerfied] = useState(false);
  const handleClose = () => {
    setClose(false);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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
    graphqlRequest(
      formText === "Create" ? "createProfile" : "updateProfile",
      variables,
      console.log
    );

    setClose(false);
  };

  return (
    <>

        <form onSubmit={handleSubmit}>
        <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 768,
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
          <TextField
            sx={{
              display: "flex",
              alignSelf: "flex-end",
              alignItems: "center",
              padding: "10px 8px",
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
                padding: "10px 8px",
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
                padding: "10px 8px",
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

          <TextField
            sx={{
              display: "flex",
              alignSelf: "flex-end",
              alignItems: "center",
              padding: "10px 8px 20px",
              height: "40px",
            }}
            name="email"
            label="Email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />

          <TextField
            sx={{
              display: "flex",
              alignSelf: "stretch",
              alignItems: "flex-start",
              padding: "20px 8px",
              flex: "1 0 0",
              height: "124px",
            }}
            name="description"
            label="Write a description for the talent"
            value={formData.description}
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
            margin="normal"
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "672px",
              hieght: "88px",
              gap: "16px",
              paddingTop: "40px",
              paddingLeft: "20px",
              alignItems: "flex-start",
              alignSelf: "stretch",
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
              }}
            />
          </Box>

          <Button
            sx={{
              alignSelf: "flex-end",
            }}
            variant="contained"
            type="submit"
            color="primary"
          >
            {formText}
          </Button>
      </Box>
        </form>

    </>
  );
}
