import { Box } from "@mui/material";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const MobileLayout = ({ children }: Props) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#FFFFFF",
      }}
    >
      <Box
        sx={{
          width: {
            xs: "100%",
            sm: "375px",
          },
          height: "680px",
          maxHeight: "100dvh",
          bgcolor: "#F7F8F9",
          border: {
            xs: "none",
            sm: "1px solid #e5e5e5",
          },
          position: "relative",
          overflow: "auto",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default MobileLayout;
