import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppButton from "../components/AppButton";
import AppInput from "../components/AppInput";
import MobileLayout from "../components/MobileLayout";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleLogin = () => {
    const nextErrors = {
      email: email.trim()
        ? ""
        : "Email Address is required",
      password: password.trim()
        ? ""
        : "Password is required",
    };

    if (nextErrors.email || nextErrors.password) {
      setErrors(nextErrors);
      return;
    }

    navigate("/profile", {
      state: { fromAuth: true },
    });
  };

  return (
    <MobileLayout>
      <Box sx={{ p: 3 }}>
        <Typography
          sx={{ fontSize: 30, fontWeight: 500 }}
        >
          Signin to your
          <br />
          PopX account
        </Typography>

        <Typography
          sx={{ color: "#919191", mt: 1, mb: 4 }}
        >
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </Typography>

        <AppInput
          label="Email Address"
          placeholder="Enter email address"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (errors.email && e.target.value.trim()) {
              setErrors((prev) => ({
                ...prev,
                email: "",
              }));
            }
          }}
          error={Boolean(errors.email)}
          helperText={errors.email}
        />

        <AppInput
          label="Password"
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            if (
              errors.password &&
              e.target.value.trim()
            ) {
              setErrors((prev) => ({
                ...prev,
                password: "",
              }));
            }
          }}
          error={Boolean(errors.password)}
          helperText={errors.password}
        />

        <AppButton
          sx={{
            backgroundColor: "#CBCBCB",
            color: "#FFFFFF",
          }}
          onClick={handleLogin}
        >
          Login
        </AppButton>
      </Box>
    </MobileLayout>
  );
};

export default Login;
