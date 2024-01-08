import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

function LandingPage() {
  const navigate = useNavigate();

  const handler = () => {
    navigate("/test");
  };

  return (
    <>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "fit-content",
          transform: "translate(-50%, -50%)",
          cursor: "pointer",
        }}
      >
        <img src={logo} alt="logo" onClick={handler} />
      </Box>
    </>
  );
}

export default LandingPage;
