import React from "react";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import { useDispatch, useSelector } from "react-redux";
import { setOpen } from "../redux/slices/authSlice";

export const Notification = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export const CustomizedSnackbars = () => {
  const { status, open, statusResponse, statusRegister } = useSelector(
    (state) => state.authSlice
  );
  const dispatch = useDispatch();
  const classes = useStyles();
  //   const [open, setOpen] = React.useState(false);

  //   const handleClick = () => {
  //     setOpen(true);
  //   };

  const handleClose = () => {
    dispatch(setOpen(false));
  };

  return (
    <div className={classes.root}>
      {/* <Button variant="outlined">Open success snackbar</Button> */}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={
            statusResponse === 401
              ? "error"
              : status === "success"
              ? "success"
              : "info"
          }
        >
          {statusResponse === 401
            ? "Неверный логин или пароль"
            : status === "success"
            ? "Авторизация прошла успешно"
            : statusRegister === "success"
            ? "Регистрация успешна. На вашу почту отправлено письмо!"
            : statusRegister === "error"
            ? "Ошибка при регистрации"
            : "Успешный выход"}
        </Alert>
      </Snackbar>
    </div>
  );
};
