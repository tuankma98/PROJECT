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

import { API_LINK, API_LOGIN } from "../constants";
import { loginUser } from "../store";

import CopyRight from "../components/CopyRight";

const theme = createTheme();

export default function SignIn() {
  const [emailNoti, setEmailNoti] = useState(true);
  const [passWordNoti, setPassWordNoti] = useState(true);
  const [message, setMessage] = useState(false);
  const [isverify, setIsverify] = useState(true);

  const onChange = (value) => {
    setIsverify(false);
    if (!value) setIsverify(true);
  };

  const formRef = React.useRef();

  const { fetchDataUser } = loginUser();
  const getDataUser = async (raw) => {
    const data = await fetchDataUser(raw, API_LOGIN);
    if (data.message === "User Not Exist") setEmailNoti(false);
    if (data.message === "Incorrect Password !") {
      setEmailNoti(true);
      setPassWordNoti(false);
    }
    if (data.errors) setMessage(true);
    if (data.token) {
      localStorage.setItem("tokens", JSON.stringify(data.token));
      window.location.href = API_LINK;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const raw = JSON.stringify({
      email: data.get("email"),
      password: data.get("password"),
    });
    getDataUser(raw);
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
            ????ng nh???p
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
              helperText={!emailNoti ? "Email kh??ng ????ng" : ""}
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
              helperText={!passWordNoti ? "M???t kh???u kh??ng h???p l???" : ""}
            />
            {message && (
              <Typography variant="body2" sx={{ color: "#e7684c" }}>
                Th??ng tin sai. Vui l??ng nh???p l???i
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
              ????ng nh???p
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/forgot-password" variant="body2">
                  Qu??n m???t kh???u
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"B???n ch??a c?? t??i kho???n? ????ng k??"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>

        <CopyRight sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
