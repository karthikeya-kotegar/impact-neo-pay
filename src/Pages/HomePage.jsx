import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import OTPInput from "react-otp-input";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const [otp, setOtp] = useState("");
  const [view, setView] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    setView(true);
  };

  const handleVerify = () => {
    navigate("/send-money");
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h7"
          width={"60%"}
          justifyContent={"left"}
          textAlign={"left"}
        >
          Pay to Your Friends is a mobile app that allows users to send and
          receive cryptocurrency to each other. The app is designed to be easy
          to use and secure, and it supports a variety of cryptocurrencies,
          including Bitcoin, Ethereum, and Litecoin. To use Pay to Your Friends,
          users simply need to create an account and add their cryptocurrency
          wallet address. They can then send and receive cryptocurrency to other
          users by entering their contact information or wallet address. The app
          also supports QR codes, which can be used to scan and send
          cryptocurrency quickly and easily. Pay to Your Friends is a convenient
          and secure way to send and receive cryptocurrency. The app is
          available for free on the App Store and Google Play.
        </Typography>

        <Box>
          <img src="assets/homepage-image.png" alt="homeimage" width={"60%"} />
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Typography fontWeight={700} color={"#368D35"}>
          Get Started
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
          />
          <Button
            variant="contained"
            sx={{
              margin: "20px",
            }}
            onClick={() => handleClick()}
          >
            Proceed
          </Button>
          {view && (
            <Box
              sx={{
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
                flexDirection: "row",
                margin: "0px 40px",
              }}
            >
              <Box>
                <Typography>Enter OTP</Typography>
                <OTPInput
                  value={otp}
                  onChange={setOtp}
                  numInputs={4}
                  renderSeparator={<span>-</span>}
                  renderInput={(props) => <input {...props} />}
                />
              </Box>
              <Button
                variant="contained"
                sx={{
                  margin: "20px",
                }}
                onClick={() => handleVerify()}
              >
                Verify
              </Button>
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
}
