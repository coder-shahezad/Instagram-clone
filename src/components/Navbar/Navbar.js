import React, { Fragment } from "react";
import messages from "./../../assets/Local/messages";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentLang } from "../../store/actions/Lang";
import { Link } from "react-router-dom";
import { NxButton } from "../Controls/NxButton/NxButton";
import { withStyles, Typography } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";
import { useHistory } from "react-router";
import Auth from "../../utils/Auth";

const styles = (theme) => ({
  title: {
    flexGrow: 1,
  },
  toolbarMargin: theme.mixins.toolbar,
  aboveDrawer: {
    zIndex: theme.zIndex.drawer + 1,
  },
});

const MyToolbar = withStyles(styles)(({ classes, handleLogout }) => (
  <Fragment>
    <AppBar className={classes.aboveDrawer}>
      <Toolbar>
        <Typography className={classes.title}>
          {/* <img src={Logo} alt="logo" className={classes.logo} /> */}
          Menu
        </Typography>
        <IconButton color="inherit" onClick={handleLogout}>
          <ExitToAppRoundedIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
    <div className={classes.toolbarMargin} />
  </Fragment>
));

export default function Navbar() {
  const lang = useSelector((state) => state.lang);
  const dispatch = useDispatch();
  const message = messages[lang];
  const switchLanguage = (lang) => {
    dispatch(setCurrentLang(lang === "ar" ? "en" : "ar"));
  };
  const history = useHistory();
  const onLogout = () => {
    Auth.signOut();
    history.push("/login");
  };
  return (
    <>
      {/* <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand">{message.hello}</a>
        <div className="d-flex align-items-center">
          <NxButton
            handleClick={() => switchLanguage(lang)}
            text={message.langBtn}
          />
        </div>
      </nav> */}
      <MyToolbar handleLogout={onLogout} />
    </>
  );
}
