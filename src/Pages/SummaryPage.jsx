import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React from "react";

const SummaryPage = () => {
  const [token, setToken] = React.useState("");

  const handleChange = (event) => {
    setToken(event.target.value);
  };
  return (
    <Box sx={{}}>
      <Box>
        <Typography
          variant="h5"
          sx={{ color: "#368D35", fontWeight: "700", mb: "20px" }}
        >
          Send Money
        </Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        {/* 1 box */}

        <Box>
          <Box sx={{ display: "flex", alignItems: "flex-start" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "flex-start",
                mr: "15px",
              }}
            >
              <Typography sx={{ fontWeight: "500" }}>
                Payment request ID
              </Typography>
              <Typography sx={{ mt: "10px" }}>Total Amount</Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Typography>#836273822</Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-end",
                  flexDirection: "column",
                }}
              >
                <Typography sx={{ mt: "10px" }}>INR 338.75</Typography>
                <Typography variant="body2">13.34 IENeo</Typography>
              </Box>
            </Box>
          </Box>
          <Box color={"green"} borderBottom={4} mt={2} />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "flex-start",
                mr: "15px",
              }}
            >
              <Typography>Currency</Typography>
            </Box>
            <Box>
              <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small-label">Tokens</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={token}
                  label="Token"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>IE-Neo</MenuItem>
                  <MenuItem value={20}>Polygon</MenuItem>
                  <MenuItem value={30}>Ethereum</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
        </Box>
        {/* 2 box */}
        <Box
          sx={{
            ml: "30px",
            alignItems: "flex-start",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "flex-start",
                mr: "15px",
              }}
            >
              <Typography>Currency</Typography>
            </Box>
            <Box>
              <Typography>1237 IE-NEO</Typography>
            </Box>
          </Box>
          <Box color={"green"} borderBottom={4} marginTop={1} />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "flex-start",
                mr: "15px",
              }}
            >
              <Typography>Current NEO Price</Typography>
            </Box>
            <Box>123 INR</Box>
          </Box>
          <Box color={"green"} borderBottom={4} marginTop={1} />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "flex-start",
                mr: "15px",
              }}
            >
              <Typography>Neo to Send</Typography>
            </Box>
            <Box>
              <Typography>13.24 IE-NEO</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box>
        <Button variant="contained" sx={{ width: "300px", borderRadius: "2%" }}>
          Pay
        </Button>
      </Box>
    </Box>
  );
};

export default SummaryPage;
