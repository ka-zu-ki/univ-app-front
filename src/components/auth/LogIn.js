/** @jsxImportSource @emotion/react */

import React, { useContext } from "react";
import { css } from "@emotion/react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import AppContext from "../../contexts/AppContext";
import { fetchLogIn } from "../../apis/index";
import { LOG_IN } from "../../actions/index";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { pageTitleCss, sectionTitleCss } from "../Style/Object/Component/title";

const LogIn = () => {
  const classes = useStyles();
  const history = useHistory();

  const { register, handleSubmit } = useForm();
  const { dispatch } = useContext(AppContext);

  
  const onSubmit = async (formValue) => {
    const res = await fetchLogIn(formValue);
    console.log(res.data);

    if (res.data.status === 200) {
      dispatch({
        type: LOG_IN,
        payload: {
          id: res.data.user.id,
          email: res.data.user.email,
        },
      });
      history.push('/')
    }

    if (res.data.status === 401) {
      console.log('失敗')
    }
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log In
          </Typography>
          <form
            className={classes.form}
            noValidate
            onSubmit={handleSubmit(onSubmit)}
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              inputRef={register}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              inputRef={register}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Log In
            </Button>
            <Grid container justify="flex-end">
              <Grid
                item
                onClick={() => {
                  history.push("/SignUp");
                }}
              >
                新規登録はこちらから
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
      <div css={loginInfoCss}>
        <p css={pageTitleCss}>こちらのアカウントをご利用ください</p>
        <p css={sectionTitleCss}>email: test@example.com</p>
        <p css={sectionTitleCss}>password: 123456</p>
      </div>
    </>
  );
};

export default LogIn;

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


const loginInfoCss = css`
  margin: 0 auto;
  width: 600px;
  margin-top: 50px;
`