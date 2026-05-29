import { TextField } from "@mui/material";
import type { TextFieldProps } from "@mui/material";

const AppInput = (props: TextFieldProps) => {
  return (
    <TextField
      fullWidth
      size="small"
      variant="outlined"
      slotProps={{
        inputLabel: {
          shrink: true,
        },
      }}
      {...props}
      sx={{
        mb: 3,

        "& .MuiOutlinedInput-root": {
          background: "#F7F8F9",
          borderRadius: "6px",
        },

        "& .MuiInputLabel-root": {
          color: "#6C25FF",
        },

        ...props.sx,
      }}
    />
  );
};

export default AppInput;
