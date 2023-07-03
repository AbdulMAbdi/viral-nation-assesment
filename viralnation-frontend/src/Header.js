import * as React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { SvgIcon } from "@mui/material";
import Switch from "@mui/material/Switch";

export default function Header({ setMode, mode }) {
  console.log("fdsfa");
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "0%",
          top: 0,
          position: "fixed",
          display: "flex",
          padding: "40px 40px 40px 20px",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "6%",
            flexDirection: "row",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <SvgIcon
            sx={{
              width: "33px",
              height: "32px",
            }}
          >
            <svg
              width="33"
              height="32"
              viewBox="0 0 33 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="vn-logo">
                <path
                  id="Path 9028"
                  d="M14.5625 0V0.605966H10.3731L19.4005 24.0676L28.6008 0.605966H24.6723V0H33V0.605966H29.2536L16.9639 32H15.6992L3.66277 0.605969H0V0H14.5625Z"
                  fill="#121212"
                />
              </g>
            </svg>
          </SvgIcon>
          <Typography
            sx={{
              fontSize: 14,
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "2.5%",
              letterSpacing: "0.5px",
              alignSelf: "flex-end",
            }}
          >
            {"iral Nation"}
          </Typography>
        </Box>
        <Box
          sx={{
            width: "10.5%",
            hieght: "2.2%",
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <SvgIcon
            sx={{
              width: "24px",
              height: "24px",
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Weather/Moon">
                <path
                  id="Vector"
                  d="M20.9999 12.79C20.8426 14.4922 20.2038 16.1144 19.1581 17.4668C18.1125 18.8192 16.7034 19.8458 15.0956 20.4265C13.4878 21.0073 11.7479 21.1181 10.0794 20.7461C8.41092 20.3741 6.8829 19.5345 5.67413 18.3258C4.46536 17.117 3.62584 15.589 3.25381 13.9205C2.88178 12.252 2.99262 10.5121 3.57336 8.9043C4.15411 7.29651 5.18073 5.88737 6.53311 4.84175C7.8855 3.79614 9.5077 3.15731 11.2099 3C10.2133 4.34827 9.73375 6.00945 9.85843 7.68141C9.98312 9.35338 10.7038 10.9251 11.8893 12.1106C13.0748 13.2961 14.6465 14.0168 16.3185 14.1415C17.9905 14.2662 19.6516 13.7866 20.9999 12.79Z"
                  fill="#9E9E9E"
                />
              </g>
            </svg>
          </SvgIcon>
          <Switch
            size="small"
            onChange={() => setMode(mode === "light" ? "dark" : "light")}
          />
          <SvgIcon
            sx={{
              width: "24px",
              height: "24px",
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="lightmode-filled">
                <path
                  id="Vector"
                  d="M12 7C9.24 7 7 9.24 7 12C7 14.76 9.24 17 12 17C14.76 17 17 14.76 17 12C17 9.24 14.76 7 12 7ZM2 13H4C4.55 13 5 12.55 5 12C5 11.45 4.55 11 4 11H2C1.45 11 1 11.45 1 12C1 12.55 1.45 13 2 13ZM20 13H22C22.55 13 23 12.55 23 12C23 11.45 22.55 11 22 11H20C19.45 11 19 11.45 19 12C19 12.55 19.45 13 20 13ZM11 2V4C11 4.55 11.45 5 12 5C12.55 5 13 4.55 13 4V2C13 1.45 12.55 1 12 1C11.45 1 11 1.45 11 2ZM11 20V22C11 22.55 11.45 23 12 23C12.55 23 13 22.55 13 22V20C13 19.45 12.55 19 12 19C11.45 19 11 19.45 11 20ZM5.99 4.58C5.89749 4.4873 5.7876 4.41375 5.66662 4.36357C5.54565 4.31339 5.41597 4.28756 5.285 4.28756C5.15403 4.28756 5.02435 4.31339 4.90338 4.36357C4.7824 4.41375 4.67251 4.4873 4.58 4.58C4.4873 4.67251 4.41375 4.7824 4.36357 4.90338C4.31339 5.02435 4.28756 5.15403 4.28756 5.285C4.28756 5.41597 4.31339 5.54565 4.36357 5.66662C4.41375 5.7876 4.4873 5.89749 4.58 5.99L5.64 7.05C6.03 7.44 6.67 7.44 7.05 7.05C7.43 6.66 7.44 6.02 7.05 5.64L5.99 4.58ZM18.36 16.95C18.2675 16.8573 18.1576 16.7837 18.0366 16.7336C17.9157 16.6834 17.786 16.6576 17.655 16.6576C17.524 16.6576 17.3944 16.6834 17.2734 16.7336C17.1524 16.7837 17.0425 16.8573 16.95 16.95C16.8573 17.0425 16.7837 17.1524 16.7336 17.2734C16.6834 17.3944 16.6576 17.524 16.6576 17.655C16.6576 17.786 16.6834 17.9157 16.7336 18.0366C16.7837 18.1576 16.8573 18.2675 16.95 18.36L18.01 19.42C18.4 19.81 19.04 19.81 19.42 19.42C19.5127 19.3275 19.5863 19.2176 19.6364 19.0966C19.6866 18.9757 19.7124 18.846 19.7124 18.715C19.7124 18.584 19.6866 18.4543 19.6364 18.3334C19.5863 18.2124 19.5127 18.1025 19.42 18.01L18.36 16.95ZM19.42 5.99C19.5127 5.89749 19.5863 5.7876 19.6364 5.66662C19.6866 5.54565 19.7124 5.41597 19.7124 5.285C19.7124 5.15403 19.6866 5.02435 19.6364 4.90338C19.5863 4.7824 19.5127 4.67251 19.42 4.58C19.3275 4.4873 19.2176 4.41375 19.0966 4.36357C18.9757 4.31339 18.846 4.28756 18.715 4.28756C18.584 4.28756 18.4543 4.31339 18.3334 4.36357C18.2124 4.41375 18.1025 4.4873 18.01 4.58L16.95 5.64C16.56 6.03 16.56 6.67 16.95 7.05C17.34 7.43 17.98 7.44 18.36 7.05L19.42 5.99ZM7.05 18.36C7.1427 18.2675 7.21625 18.1576 7.26643 18.0366C7.31661 17.9157 7.34244 17.786 7.34244 17.655C7.34244 17.524 7.31661 17.3944 7.26643 17.2734C7.21625 17.1524 7.1427 17.0425 7.05 16.95C6.95749 16.8573 6.8476 16.7837 6.72662 16.7336C6.60565 16.6834 6.47597 16.6576 6.345 16.6576C6.21403 16.6576 6.08435 16.6834 5.96338 16.7336C5.8424 16.7837 5.73251 16.8573 5.64 16.95L4.58 18.01C4.19 18.4 4.19 19.04 4.58 19.42C4.97 19.8 5.61 19.81 5.99 19.42L7.05 18.36Z"
                  fill="#212121"
                />
              </g>
            </svg>
          </SvgIcon>
        </Box>
      </Box>
    </>
  );
}