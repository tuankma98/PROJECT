import * as React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ErrorIcon from "@mui/icons-material/Error";

import CopyRight from "../components/CopyRight";
import Notification from "../components/notification/Notification";

import { forgotPassword } from "../store";

const theme = createTheme();

export default function ForgotPassword() {
  const [dataEmail, setDataEmail] = useState({});
  const [isverify, setIsverify] = useState(true);
  const [popup, setPopup] = useState(false);
  const [found, setFound] = useState(false);

  const formRef = React.useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setDataEmail({
      [name]: value,
    });
  };

  const onChange = (value) => {
    setIsverify(false);
    if (!value) setIsverify(true);
  };

  // FORGOT PASSWORD
  const { forgotPasswordAPI } = forgotPassword();
  const forgotPass = async (dataEmail) => {
    const data = await forgotPasswordAPI(dataEmail);
    if (data === 200) setPopup(true);
    if (data === 400) setFound(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    forgotPass(dataEmail);
  };

  const handleClose = () => {};

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />

        {popup && (
          <Notification
            title="Email đã được gửi"
            content={`Một email đã được gửi tới ${dataEmail.email}. Vui lòng kiểm tra.`}
            handleClose={() => setPopup(false)}
            mail
          />
        )}

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
            Quên mật khẩu
          </Typography>

          {found && (
            <Box className="notification-found">
              <Typography
                component="h1"
                variant="h5"
                className="notification-found__content"
              >
                <ErrorIcon />
                Không tìm thấy email
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                className="notification-found__content"
                sx={{ color: "#888" }}
              >
                Email chưa được đăng ký, vui lòng thử email khác.
              </Typography>
            </Box>
          )}

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
              label="Email Address"
              name="email"
              onChange={handleChange}
            />

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
              button
            </Button>
          </Box>
        </Box>

        <CopyRight sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
