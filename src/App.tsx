import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Box } from "@mui/material";
import type { ReactNode } from "react";

import Welcome from "./pages/Welcome";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

const FadeInPage = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <Box
      sx={{
        animation:
          "profileFadeIn 320ms ease-out both",
        "@keyframes profileFadeIn": {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
      }}
    >
      {children}
    </Box>
  );
};

function App() {
  const location = useLocation();
  const shouldFadeProfile =
    location.pathname === "/profile" &&
    Boolean(
      (location.state as { fromAuth?: boolean })
        ?.fromAuth
    );

  return (
    <Routes>
      <Route
        path="/"
        element={<Welcome />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/profile"
        element={
          shouldFadeProfile ? (
            <FadeInPage>
              <Profile />
            </FadeInPage>
          ) : (
            <Profile />
          )
        }
      />
    </Routes>
  );
}

export default App;
