import { Button } from "@mui/material";
import type { ButtonProps } from "@mui/material/Button";

interface Props extends ButtonProps {
  secondary?: boolean;
}

const AppButton = ({
  secondary,
  children,
  ...props
}: Props) => {
  return (
    <Button
      fullWidth
      {...props}
      sx={{
        height: "46px",
        borderRadius: "6px",
        textTransform: "none",
        fontWeight: 500,
        backgroundColor: secondary
          ? "#CEBAFB"
          : "#6C25FF",

        color: secondary ? "#1D2226" : "#FFFFFF",

        "&:hover": {
          backgroundColor: secondary
            ? "#CEBAFB"
            : "#642AF5",
        },

        ...props.sx,
      }}
    >
      {children}
    </Button>
  );
};

export default AppButton;
