import * as React from "react";
import Box from "@mui/material/Box";
import SearchBar from "./SearchBar";
import { Button } from "@mui/material";
import { SvgIcon } from "@mui/material";
import { Modal } from "@mui/material";
import ProfileForm from "./ProfileForm";
import SortToggleButtons from "./SortToggleButtons";

import "./GridHeader.css";

export default function GridHeader() {
  const [createProfile, setCreateProfile] = React.useState(false);
  const handleCreateProfile = () => {
    setCreateProfile(!createProfile);
  };
  const handleClose = () => setCreateProfile(false);

  return (
    <>
      <Box
        className={"GridheaderBox"}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          alignSelf: "stretch",
          width: "75%",
          paddingBottom: "20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            height: "40px",
            paddingBottom: "12px",
            alignItems: "center",
            gap: "10px",
            flex: "1 0 0",
          }}
        >
          <SearchBar></SearchBar>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "8px 12px",
            gap: "8px",
            height: "100%",
          }}
        >
          <Button variant="outlined" onClick={handleCreateProfile}>
            <SvgIcon
              sx={{
                width: "24px",
                height: "24px",
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="user/plus">
                  <path
                    id="Vector"
                    d="M14.3838 6.98H13.0398V5.62C13.0398 5.433 12.8886 5.28 12.7038 5.28H12.0318C11.847 5.28 11.6958 5.433 11.6958 5.62V6.98H10.3518C10.167 6.98 10.0158 7.133 10.0158 7.32V8C10.0158 8.187 10.167 8.34 10.3518 8.34H11.6958V9.7C11.6958 9.887 11.847 10.04 12.0318 10.04H12.7038C12.8886 10.04 13.0398 9.887 13.0398 9.7V8.34H14.3838C14.5686 8.34 14.7198 8.187 14.7198 8V7.32C14.7198 7.133 14.5686 6.98 14.3838 6.98ZM5.98379 8C7.46849 8 8.67179 6.78237 8.67179 5.28C8.67179 3.77762 7.46849 2.56 5.98379 2.56C4.49909 2.56 3.29579 3.77762 3.29579 5.28C3.29579 6.78237 4.49909 8 5.98379 8ZM7.86539 8.68H7.51469C7.04849 8.89675 6.52979 9.02 5.98379 9.02C5.43779 9.02 4.92119 8.89675 4.45289 8.68H4.10219C2.54399 8.68 1.27979 9.95925 1.27979 11.536V12.42C1.27979 12.9831 1.73129 13.44 2.28779 13.44H9.67979C10.2363 13.44 10.6878 12.9831 10.6878 12.42V11.536C10.6878 9.95925 9.42359 8.68 7.86539 8.68Z"
                    fill="#3DACFF"
                  />
                </g>
              </svg>
            </SvgIcon>
            {"Create Profile"}
          </Button>
        </Box>
        <SortToggleButtons></SortToggleButtons>
      </Box>
      {createProfile && (
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
          open={createProfile}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <ProfileForm
            setClose={setCreateProfile}
            formText={"Create Profile"}
          ></ProfileForm>
        </Modal>
      )}
    </>
  );
}
