import * as React from "react";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { API_ADMIN } from "../../constants/index";
import Copyright from "../../components/CopyRight";
import { loginAdmin } from "../../store";

const theme = createTheme();

export default function SignIn() {
  const [emailNoti, setEmailNoti] = useState(true);
  const [passWordNoti, setPassWordNoti] = useState(true);
  const [message, setMessage] = useState(false);
  const [raw, setRaw] = useState({});
  const [isverify, setIsverify] = useState(true);

  const formRef = React.useRef();

  const { fetchDataLoginAdmin, checkRole } = loginAdmin();

  const fetchDataLoginAPI = async (raw) => {
    const data = await fetchDataLoginAdmin(raw);

    if (data.message === "Incorrect Password !") setPassWordNoti(false);
    if (data.message === "User Not Exist") setEmailNoti(false);
    if (data.message) {
      setEmailNoti(true);
      setPassWordNoti(true);
      setMessage(true);
    }
    if (data.token) {
      const check = await checkRole(data.token);
      if (check) {
        window.location.href = API_ADMIN;
        localStorage.setItem("tokensAdmin", JSON.stringify(data.token));
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const raw = {
      email: data.get("email"),
      password: data.get("password"),
    };

    setRaw(raw);
    fetchDataLoginAPI(raw);
  };

  const onChange = (value) => {
    setIsverify(false);
    if (!value) setIsverify(true);
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
            Đăng nhập
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
              id="email"
              label="Email Address"
              name="email"
              error={!emailNoti}
              helperText={!emailNoti ? "Email is not correct" : ""}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              error={!passWordNoti}
              helperText={!passWordNoti ? "Incorrect password" : ""}
            />
            {message && (
              <Typography variant="body2" sx={{ color: "#e7684c" }}>
                Invalid email or password
              </Typography>
            )}

            <ReCAPTCHA
              sitekey="6Lelby0gAAAAAI9V-f0jKtIIHknw17goLCiHU_uk"
              onChange={onChange}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => formRef.current.reportValidity()}
              disabled={isverify}
            >
              Đăng nhập
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
