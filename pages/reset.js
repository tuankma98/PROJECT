import * as React from "react";
import { useEffect } from "react";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import CopyRight from "../components/CopyRight";

import { resetPassword } from "../store";
import { API_LINK } from "../constants";

const theme = createTheme();

export default function Reset() {
  const formRef = React.useRef();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [token, setToken] = useState("");

  useEffect(() => {
    const url_string = window.location.href;
    const url = new URL(url_string);
    setToken(url.searchParams.get("token"));
  }, []);

  // RESET PASSWORD
  const { resetPasswordAPI } = resetPassword();
  const resetPassByUser = async (token, email) => {
    const data = resetPasswordAPI(token, email)
    if (data) alert('Thanh cong')
    window.location.href = `${API_LINK}/signin`;
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match");
    } else {
      resetPassByUser(token, {newPassword: password})
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Mật khẩu mới
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            ref={formRef}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirm-password"
              label="Confirm password"
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => formRef.current.reportValidity()}
            >
              Đổi mật khẩu
            </Button>
          </Box>
        </Box>

        <CopyRight sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
