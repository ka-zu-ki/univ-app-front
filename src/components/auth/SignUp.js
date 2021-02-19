import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import AppContext from "../../contexts/AppContext";
import { fetchSignUp } from "../../apis/index";
import { SIGN_UP } from "../../actions/index";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
// import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const SignUp = () => {
  const classes = useStyles();

  const { register, handleSubmit } = useForm();
  const { dispatch } = useContext(AppContext);

  const onSubmit = async (formValue) => {
    console.log(formValue);
    const res = await fetchSignUp(formValue);
    console.log(res.data);

    res.status === 200
      ? dispatch({
          type: SIGN_UP,
          payload: {
            id: res.data.id,
            name: res.data.name,
            email: res.data.email,
          },
        })
      : console.log(res.data.error);
  };

  return (
    <>
      {/* <h1>SignUp</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          name="name"
          placeholder="姓名"
          ref={register({ required: true })}
        />
        <input
          type="email"
          name="email"
          placeholder="メールアドレス"
          ref={register({ required: true })}
        />
        <input
          type="password"
          name="password"
          placeholder="パスワード"
          ref={register({ required: true })}
        />
        <button>
          <Link to={"/"}>Sign Up</Link>
        </button>
      </form>
      <Link to={"/login"}>登録済みの方はこちらから</Link> */}

      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="fname"
                  name="name"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="Name"
                  autoFocus
                  inputRef={register}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  inputRef={register}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  inputRef={register}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              <Link to={"/"}>Sign Up</Link>
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link to={"/login"}>登録済みの方はこちらから</Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </>
  );
};

export default SignUp;

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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
