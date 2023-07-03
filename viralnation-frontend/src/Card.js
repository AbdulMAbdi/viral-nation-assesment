import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import SvgIcon from "@mui/material/SvgIcon";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import ProfileForm from "./ProfileForm";
import Modal from "@mui/material/Modal";

export default function BasicCard({ profile, theme, mode }) {
  const [showMenu, setShowMenu] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [showUpdate, setShowUpdate] = React.useState(false);

  const handleClick = (event) => {
    console.log(showMenu);
    setShowMenu(!showMenu);
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClick = () => {
    setShowUpdate(!showUpdate);
  };
  return (
    <>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "10px",
          flex: "1 0 0",
          width: "314px",
          height: "186px",
        }}
      >
        <CardContent>
          <Box
            sx={{
              display: "flex",
              width: "294px",
              height: "64px",
              gap: "16px",
              alignItems: "center",
              alignSelf: "stretch",
            }}
          >
            <Avatar
              sx={{
                display: "flex",
                width: "64px",
                height: "64px",
                justifyContent: "center",
                alignItems: "center",
              }}
              alt="Profile Image"
              src={profile.avatarUrl}
            />
            <Box
              sx={{
                display: "flex",
                width: "214px",
                height: "46px",
                justifyContent: "space-between",
                alignItems: "center",
                flex: "1 0 0",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  width: "188px",
                  height: "46px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  gap: "2px",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    width: "188px",
                    height: "24px",
                    alignItems: "center",
                    gap: "4px",
                    alignSelf: "stretch",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 16,
                      fontFamily: "Roboto",
                      fontStyle: "Normal",
                      fontWeight: "500",
                      lineHeight: "24px",
                      letterSpacing: "0.5px",
                    }}
                    color="text.primary"
                    gutterBottom
                  >
                    {profile.username}
                  </Typography>
                  <SvgIcon
                    sx={{
                      width: "16px",
                      height: "16px",
                    }}
                  >
                    <svg
                      width="16"
                      height="18"
                      viewBox="0 0 16 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="accreditation badge">
                        <path
                          id="Star 2"
                          d="M6.56148 1.4818C7.33823 0.645662 8.66174 0.645662 9.43849 1.4818C9.9011 1.97976 10.5883 2.20306 11.2553 2.07211C12.3752 1.85223 13.4459 2.63017 13.5828 3.76318C13.6644 4.43795 14.0891 5.02255 14.7057 5.30864C15.7409 5.78899 16.1499 7.04772 15.5947 8.04484C15.2641 8.63868 15.2641 9.36129 15.5947 9.95513C16.1499 10.9522 15.7409 12.211 14.7057 12.6913C14.0891 12.9774 13.6644 13.562 13.5828 14.2368C13.4459 15.3698 12.3752 16.1477 11.2553 15.9279C10.5883 15.7969 9.9011 16.0202 9.43849 16.5182C8.66174 17.3543 7.33823 17.3543 6.56148 16.5182C6.09888 16.0202 5.41163 15.7969 4.74468 15.9279C3.62481 16.1477 2.55407 15.3698 2.41713 14.2368C2.33557 13.562 1.91083 12.9774 1.29429 12.6913C0.259045 12.211 -0.149942 10.9522 0.405239 9.95513C0.735883 9.36129 0.735883 8.63868 0.405239 8.04484C-0.149941 7.04772 0.259045 5.78899 1.29429 5.30864C1.91083 5.02255 2.33557 4.43795 2.41713 3.76318C2.55407 2.63017 3.62481 1.85223 4.74468 2.07211C5.41163 2.20306 6.09888 1.97976 6.56148 1.4818Z"
                          fill="#3B94ED"
                        />
                        <path
                          id="V"
                          d="M6.55416 6.02386L8.47302 10.7418L7.72332 10.5905L9.46368 6.02386H10.9988L8 12.8782L5.00122 6.02386H6.55416Z"
                          fill="white"
                        />
                      </g>
                    </svg>
                  </SvgIcon>
                </Box>
                <Typography
                  sx={{
                    fontSize: 14,
                    fontFamily: "Roboto",
                    fontStyle: "Normal",
                    fontWeight: "400",
                    lineHeight: "20px",
                    letterSpacing: "0.25px",
                  }}
                  color="text.secondary"
                  gutterBottom
                >
                  {profile.email}
                </Typography>
              </Box>
              <SvgIcon
                sx={{
                  width: "24px",
                  height: "24px",
                }}
                onClick={handleClick}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="navigation/more_vert_24px">
                    <path
                      id=" &#226;&#134;&#179;Color"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z"
                      fill="#9E9E9E"
                    />
                  </g>
                </svg>
              </SvgIcon>
              <Menu
                id="lock-menu"
                open={showMenu}
                onClose={handleClick}
                anchorEl={anchorEl}
                MenuListProps={{
                  "aria-labelledby": "lock-button",
                  role: "listbox",
                }}
              >
                <MenuItem key={"edit"} onClick={handleMenuClick}>
                  {"Edit profile"}
                </MenuItem>
                <MenuItem key={"remove"}>{"Remove profile"}</MenuItem>
              </Menu>
            </Box>
          </Box>
          <Typography
            sx={{
              display: "flex",
              flexDirection: "column",
              alignSelf: "stretch",
              fontSize: 12,
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "16px",
              letterSpacing: "0.4px",
              textAlign: "left",
            }}
            variant="caption"
          >
            {profile.description}
          </Typography>
        </CardContent>
      </Card>
      {showUpdate && (
        <Modal
          sx={{
            width: "40%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            flex: "1 0 0",
            alignSelf: "stretch",
            left: "30%",
          }}
          open={showUpdate}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <ProfileForm
            setClose={setShowUpdate}
            formText={"Update"}
            profile={profile}
          ></ProfileForm>
        </Modal>
      )}
    </>
  );
}
