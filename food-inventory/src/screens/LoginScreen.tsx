import * as React from "react";
import Box from "@mui/material/Box";
import {
  Button,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Stack,
} from "@mui/material";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LockRoundedIcon from "@mui/icons-material/LockRounded";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { userContext } from "../utils/userContext";
import loginService from "../hooks/useAuth";

export default function LoginScreen() {
  let loggedUser = React.useContext(userContext);

  const [values, setValues] = React.useState({
    email: "",
    username: "",
    password: "",
    showPassword: false,
  });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [ignored, forceUpdate] = React.useReducer((x) => x + 1, 0);

  const handleChange = (prop: string): ((event: any) => void) => {
    return (event) => {
      setValues({ ...values, [prop]: event.target.value });
    };
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };

  const loginClick = async () => {
    await loginService.login(values.username, values.password);
    if (localStorage.getItem("token")) {
      loggedUser.isLoggedIn = true;
      forceUpdate();
    }
  };

  if (localStorage.getItem("token") !== null) {
    loggedUser.isLoggedIn = true;
    return <Box>User logged in</Box>;
  }

  return (
    <Box
      sx={{ pt: "5%", pl: "5%", pr: "5%", pb: "5%" }}
      bgcolor="purple"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        display="grid"
        gridTemplateColumns="repeat(11, 1fr)"
        gap={2}
        bgcolor="white"
        alignItems="center"
        justifyContent="center"
      >
        <Box gridRow="span 4" gridColumn="span 6">
          <img src="user.png" width="200" height="200" alt=""></img>
        </Box>
        <Box
          gridColumn="span 4"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          Login Page
        </Box>
        <Box gridColumn="span 4" sx={{ "& > :not(style)": { m: 1 } }}>
          <FormControl variant="standard" fullWidth>
            <InputLabel htmlFor="input-with-icon-adornment">
              Username
            </InputLabel>
            <Input
              id="input-with-icon-adornment"
              type="text"
              value={values.username}
              onChange={handleChange("username")}
              startAdornment={
                <InputAdornment position="start">
                  <EmailRoundedIcon />
                </InputAdornment>
              }
            />
          </FormControl>
        </Box>

        <Box gridColumn="span 4">
          <FormControl sx={{ m: 1 }} variant="standard" fullWidth>
            <InputLabel htmlFor="standard-adornment-password">
              Password
            </InputLabel>
            <Input
              id="standard-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              startAdornment={
                <InputAdornment position="start">
                  <LockRoundedIcon />
                </InputAdornment>
              }
            />
          </FormControl>
        </Box>
        <Stack
          gridColumn="span 4"
          direction="column"
          alignItems="center"
          spacing={1}
        >
          <Button
            variant="outlined"
            fullWidth
            style={{ textTransform: "none", color: "blue" }}
            onClick={loginClick}
          >
            Login
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
