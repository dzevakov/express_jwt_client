import { Box } from "@mui/material";
import { theme } from "../../theme";

export const ClientPageLayout = ({ children }) => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
      }}
      bgcolor={theme.palette.background.default}
    >
      {children}
    </Box>
  );
};
