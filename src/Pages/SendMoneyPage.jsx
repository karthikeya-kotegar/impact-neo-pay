import { Box, Button, Input, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SendMoneyPage = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="h4"
        sx={{ color: "#368D35", fontWeight: "700", mb: "20px" }}
      >
        Send Money
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Typography sx={{ mr: "10px" }}>Enter Address</Typography>
        <Input placeholder="Address" />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Typography sx={{ mr: "10px" }}>Enter Amount</Typography>
        <Input placeholder="Amount" />
        <Input sx={{ ml: "10px" }} placeholder="Add Note" />
        <Button
          variant="contained"
          sx={{
            marginLeft: "10px",
            borderRadius: "20%",
          }}
          onClick={() => navigate("/summary")}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default SendMoneyPage;
