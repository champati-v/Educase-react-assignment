import {
  Box,
  Typography,
} from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { useLocation } from "react-router-dom";
import MobileLayout from "../components/MobileLayout";
import profileImage from "../assets/profile.png";
import type { User } from "../types/user";

const Profile = () => {
  const location = useLocation();
  const user =
    (location.state as { user?: User })?.user;

  return (
    <MobileLayout>
      <Box
        sx={{ bgcolor: "#FFFFFF", p: 2 }}
      >
        <Typography sx={{ fontWeight: 400 }}>
          Account Settings
        </Typography>
      </Box>

      <Box sx={{ p: 3 }}>
        <Box
          sx={{ display: "flex", gap: 2, alignItems: "center" }}
        >
          <Box sx={{ position: "relative" }}>
            <Box
              component="img"
              src={profileImage}
              alt="Profile"
              sx={{
                width: 76,
                height: 76,
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />

            <Box
              sx={{
                position: "absolute",
                right: -2,
                bottom: 0,
                width: 24,
                height: 24,
                borderRadius: "50%",
                backgroundColor: "#6C25FF",
                display: "grid",
                placeItems: "center",
              }}
            >
              <CameraAltIcon
                sx={{
                  fontSize: 14,
                  color: "#fff",
                }}
              />
            </Box>
          </Box>

          <Box>
            <Typography sx={{ fontWeight: 600 }}>
              {user?.fullName || "Mary Doe"}
            </Typography>

            <Typography sx={{ fontSize: 14 }}>
              {user?.email || "Mary@Gmail.Com"}
            </Typography>
          </Box>
        </Box>

        <Typography
          sx={{ mt: 3, fontSize: 14, lineHeight: 1.8 }}
        >
          Lorem Ipsum Dolor Sit Amet,
          Consetetur Sadipscing Elitr,
          Sed Diam Nonumy Eirmod Tempor
          Invidunt Ut Labore Et Dolore Magna
          Aliquyam Erat, Sed Diam.
        </Typography>
      </Box>
    </MobileLayout>
  );
};

export default Profile;
