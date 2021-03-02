import React, { useContext } from "react";

import { fetchLogOut } from "../../apis";
import AppContext from "../../contexts/AppContext";
import { LOG_OUT } from "../../actions/index";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

const Header = () => {
  const classes = useStyles();
  const { state, dispatch } = useContext(AppContext);
  const history = useHistory()

  console.log(state.isLogin)

  const logOut = async () => {
    const res = await fetchLogOut()

    if (res.data === 200) {
      dispatch({ type: LOG_OUT })
    }

    history.push('/')
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography 
          variant="h6" 
          className={classes.title}
          onClick={() => {history.push('/')}}
        >
          University App
        </Typography>
        <ul>
          <li onClick={() => {history.push('/lessons')}}>授業一覧</li>
          <li onClick={() => {history.push('/registration')}}>履修登録</li>
        </ul>
        <Button color="inherit" onClick={() => logOut()}>Logout</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));