import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AccountCircle from "@mui/icons-material/AccountCircle";

import { Outlet } from "react-router-dom";

const Layout = () => {
  const menuId = "primary-search-account-menu";

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" color="transparent">
          <Toolbar>
            <Box
              component="img"
              sx={{
                height: 92,
                width: 88,
              }}
              alt="logo"
              src="/public/assets/logo.png"
            />
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                Mui
              </Typography>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                color="#368D35"
              >
                <AccountCircle />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Outlet />
    </div>
  );
};

export default Layout;
