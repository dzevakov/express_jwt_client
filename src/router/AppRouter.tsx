import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import LandingPage from "../pages/landing/LandingPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/test" element={<Box>Test</Box>} />
    </Routes>
  );
};

export default AppRouter;
