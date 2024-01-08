import { ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { theme } from "./theme";
import { ClientPageLayout } from "./components/clientPageLayout";

const AppContainer = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <ClientPageLayout>
        <BrowserRouter>{children}</BrowserRouter>
      </ClientPageLayout>
    </ThemeProvider>
  );
};

export default AppContainer;
