import * as React from "react";
import { useState, useEffect } from "react";
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

import { API_SIGNUP, API_LINK } from "../constants";
import { signUpUser } from "../store";

import Copyright from "../components/CopyRight";

const theme = createTheme();

export default function SignUp() {
  const [messageUserName, setMessageUserName] = useState(true);
  const [messageEmail, setMessageEmail] = useState(true);
  const [messagePass, setMessagePass] = useState(true);
  const [tokens, setTokens] = useState("");
  const [message, setMessage] = useState(true);
  const [isverify, setIsverify] = useState(true);

  const onChange = (value) => {
    setIsverify(false);
    if (!value) setIsverify(true);
  };

  useEffect(() => {
    const localToken = window.localStorage.getItem("tokens");
    if (localToken === null) {
      localStorage.setItem("tokens", JSON.stringify(tokens));
    }
  }, []);

  const { fetchDataUser } = signUpUser();
  const getDataUser = async (raw) => {
    const data = await fetchDataUser(raw, API_SIGNUP);
    
    if (data.errors) {
      setMessage(false);
      setMessagePass(true);
      setMessageUserName(true);
    }
    if (data.msg === "User Already Exists") {
      setMessageUserName(false);
      setMessage(true);
    }
    if (data.token) {
      setMessage(true);
      setMessagePass(true);
      setMessageUserName(true);
      localStorage.setItem("tokens", JSON.stringify(data.token));
      window.location.href = API_LINK;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const raw = JSON.stringify({
      email: data.get("email"),
      username: data.get("userName"),
      password: data.get("password"),
    });

    const password = JSON.parse(raw).password;

    const pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*+]{6,16}$/;

    // const alo = 'Hieu*2008'
    const res = password.match(pattern);

    // console.log(alo)
    if (res) {
      getDataUser(raw);
      console.log("Valid password!");
    } else {
      console.log("Not a valid password.");
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
            Đăng ký
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="userName"
                  required
                  fullWidth
                  id="userName"
                  label="User Name"
                  error={!messageUserName}
                  helperText={
                    !messageUserName ? "Tên đăng ký đã được sử dụng" : ""
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  error={!messageEmail}
                  helperText={!messageEmail ? "Email đã tồn tại" : ""}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  error={!messagePass}
                  helperText={!messagePass ? "Mật khẩu không hợp lệ" : ""}
                  setMessagePass
                />
              </Grid>
              <Grid item xs={12}>
                {!message && (
                  <Typography className="message-error">
                    Đã có lỗi, vui lòng nhập lại thông tin
                  </Typography>
                )}
              </Grid>
            </Grid>
            <ReCAPTCHA
              sitekey="6Lelby0gAAAAAI9V-f0jKtIIHknw17goLCiHU_uk"
              onChange={onChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={isverify}
            >
              Đăng ký
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signin" variant="body2">
                  Bạn đã có tài khoản. Đăng nhập
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
