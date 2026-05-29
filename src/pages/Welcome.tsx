import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AppButton from "../components/AppButton";
import MobileLayout from "../components/MobileLayout";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <MobileLayout>
      <Box
        sx={{
          position: "absolute",
          bottom: 30,
          width: "100%",
          px: 3,
        }}
      >
        <Typography
          sx={{ fontWeight: 500, fontSize: 28 }}
        >
          Welcome to PopX
        </Typography>

        <Typography
          sx={{ color: "#919191", mt: 1, mb: 3 }}
        >
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </Typography>

        <AppButton
          onClick={() => navigate("/register")}
        >
          Create Account
        </AppButton>

        <Box sx={{ mt: 1 }}>
          <AppButton
            secondary
            onClick={() => navigate("/login")}
          >
            Already Registered? Login
          </AppButton>
        </Box>
      </Box>
    </MobileLayout>
  );
};

export default Welcome;
