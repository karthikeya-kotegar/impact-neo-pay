import { Box, Button, Typography } from "@mui/material";
import { green } from "@mui/material/colors";
import { useParams } from "react-router-dom";

const SuccessPaymentPage = () => {
  const { status } = useParams();
  let _status = status === "success" ? true : false;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        alignItems: "flex-start",
      }}
    >
      {/* 1 Box */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          flexDirection: "column",
          width: "50%",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "700", color: "green" }}>
          Your Payment is Successfully Done!
        </Typography>
        <Box>
          {_status ? (
            <img src="../assets/success_payment.png" alt="Payment Successful" />
          ) : (
            <img src="../assets/failure_payment.png" alt="Payment Failure" />
          )}
        </Box>
        <Button
          variant="contained"
          sx={{ width: "250px", borderRadius: "2%", mt: "20px" }}
        >
          Go To Homepage
        </Button>
      </Box>

      {/* 2 Box */}

      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
          width: "50%",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "700" }}>
          Invoice
        </Typography>
        <Typography variant="h7" sx={{ fontWeight: "700" }}>
          Name
        </Typography>
        <Typography variant="h8" sx={{ fontWeight: "600" }}>
          Invoice: Number
        </Typography>

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
            <Typography sx={{ fontWeight: "500", fontSize: "17px" }}>
              Payment request ID
            </Typography>
            <Typography sx={{ mt: "10px", fontSize: "17px" }}>
              Total Amount
            </Typography>

            <Typography sx={{ mt: "25px", fontSize: "17px" }}>
              Address
            </Typography>
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
              <Typography sx={{ mt: "10px", fontSize: "17px" }}>
                INR 338.75
              </Typography>
              <Typography variant="body2">13.34 IENeo</Typography>
              <Typography sx={{ mt: "10px", fontSize: "17px" }}>
                Address id 0x123
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box borderBottom={4} color={green} />
      </Box>
    </Box>
  );
};

export default SuccessPaymentPage;
