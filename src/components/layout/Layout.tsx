import {Box} from "@mui/material";
import {Outlet} from "react-router";

export default function Layout() {
  return (
    <Box>
      <Outlet />
    </Box>
  );
}
