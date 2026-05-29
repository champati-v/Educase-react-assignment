import {
  Box,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppButton from "../components/AppButton";
import AppInput from "../components/AppInput";
import MobileLayout from "../components/MobileLayout";
import type { User } from "../types/user";

const Register = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState<
    Partial<Record<keyof User, string>>
  >({});

  const [formData, setFormData] =
    useState<User>({
      fullName: "Mary Doe",
      phone: "Mary Doe",
      email: "Mary Doe",
      password: "Mary Doe",
      companyName: "Mary Doe",
      isAgency: true,
    });

  const handleChange =
    (field: keyof User) =>
    (
      e: React.ChangeEvent<HTMLInputElement>
    ) => {
      const value = e.target.value;
      setFormData((prev) => ({
        ...prev,
        [field]: value,
      }));
      if (errors[field]) {
        setErrors((prev) => ({
          ...prev,
          [field]: value.trim()
            ? ""
            : prev[field],
        }));
      }
    };

  const handleSubmit = () => {
    const nextErrors: Partial<
      Record<keyof User, string>
    > = {};

    if (!formData.fullName.trim()) {
      nextErrors.fullName = "Full Name is required";
    }
    if (!formData.phone.trim()) {
      nextErrors.phone = "Phone Number is required";
    }
    if (!formData.email.trim()) {
      nextErrors.email = "Email Address is required";
    }
    if (!formData.password.trim()) {
      nextErrors.password = "Password is required";
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    navigate("/profile", {
      state: {
        fromAuth: true,
        user: formData,
      },
    });
  };

  return (
    <MobileLayout>
      <Box sx={{ p: 3 }}>
        <Typography
          sx={{ fontSize: 30, fontWeight: 500, mb: 4 }}
        >
          Create your
          <br />
          PopX account
        </Typography>

        <AppInput
          label={
            <>
              Full Name
              <Box component="span" sx={{ color: "#DD4A3D" }}>
                *
              </Box>
            </>
          }
          value={formData.fullName}
          onChange={handleChange("fullName")}
          error={Boolean(errors.fullName)}
          helperText={errors.fullName}
        />

        <AppInput
          label={
            <>
              Phone Number
              <Box component="span" sx={{ color: "#DD4A3D" }}>
                *
              </Box>
            </>
          }
          value={formData.phone}
          onChange={handleChange("phone")}
          error={Boolean(errors.phone)}
          helperText={errors.phone}
        />

        <AppInput
          label={
            <>
              Email Address
              <Box component="span" sx={{ color: "#DD4A3D" }}>
                *
              </Box>
            </>
          }
          value={formData.email}
          onChange={handleChange("email")}
          error={Boolean(errors.email)}
          helperText={errors.email}
        />

        <AppInput
          label={
            <>
              Password
              <Box component="span" sx={{ color: "#DD4A3D" }}>
                *
              </Box>
            </>
          }
          type="password"
          value={formData.password}
          onChange={handleChange("password")}
          error={Boolean(errors.password)}
          helperText={errors.password}
        />

        <AppInput
          label="Company Name"
          value={formData.companyName}
          onChange={handleChange("companyName")}
        />

        <Typography sx={{ mb: 1 }}>
          Are you an Agency?
        </Typography>

        <RadioGroup row defaultValue="yes">
          <FormControlLabel
            value="yes"
            control={
              <Radio
                sx={{
                  "&.Mui-checked": {
                    color: "#6C25FF",
                  },
                }}
              />
            }
            label="Yes"
          />

          <FormControlLabel
            value="no"
            control={
              <Radio
                sx={{
                  "&.Mui-checked": {
                    color: "#6C25FF",
                  },
                }}
              />
            }
            label="No"
          />
        </RadioGroup>

        <Box
          sx={{
            position: "absolute",
            bottom: 20,
            left: 24,
            right: 24,
          }}
        >
          <AppButton onClick={handleSubmit}>
            Create Account
          </AppButton>
        </Box>
      </Box>
    </MobileLayout>
  );
};

export default Register;
