import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { useDispatch, useSelector } from "react-redux";
import CloseIcon from "@material-ui/icons/Close";
import { setOpen } from "../../redux/slices/modalSlice";
import { Button, TextField, Typography } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    // border: "1px solid #000",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: 30,
  },
  modalSignUp: {
    fontSize: 31,
    fontWeight: 700,
  },
  blockBirthday: {
    textAlign: "start",
  },
}));

export default function ModalWindowSignIn() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { open } = useSelector((state) => state.modalSlice);

  if (open === "SignUp") {
    return (
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper} style={{ width: 600 }}>
              <CloseIcon
                onClick={() => dispatch(setOpen(""))}
                style={{
                  cursor: "pointer",
                  position: "absolute",
                  top: 10,
                  left: 10,
                }}
              />
              <Typography variant="h1" className={classes.modalSignUp}>
                Создайте учетную запись
              </Typography>
              <TextField
                label="Имя"
                style={{ width: 480, marginBottom: 30, marginTop: 15 }}
                variant="filled"
              ></TextField>
              <TextField
                label="Адрес электронной почты"
                variant="filled"
                style={{ width: 480, marginBottom: 50 }}
              ></TextField>
              <div className={classes.blockBirthday}>
                <Typography variant="h6" style={{ marginBottom: 15 }}>
                  Дата рождения
                </Typography>
                <Typography style={{ color: "#b8bfc4" }}>
                  Эта информация не будет общедоступной. Подтвердите свой
                  возраст, даже если эта учетная запись предназначена для
                  компании, домашнего животного и т. д.
                </Typography>
              </div>

              <TextField
                label="Дата Рождения"
                type="date"
                defaultValue="1999-05-25"
                style={{ width: 480, marginTop: 30 }}
              ></TextField>
              <Button
                variant="contained"
                style={{
                  width: 480,
                  borderRadius: 30,
                  marginTop: 30,
                  backgroundColor: "black",
                  color: "white",
                }}
              >
                Далее
              </Button>
            </div>
          </Fade>
        </Modal>
      </div>
    );
  } else if (open === "SignIn") {
    return (
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper} style={{ width: 600 }}>
              <CloseIcon
                onClick={() => dispatch(setOpen(""))}
                style={{
                  cursor: "pointer",
                  position: "absolute",
                  top: 10,
                  left: 10,
                }}
              />
              <h2>Вход в X</h2>
              <TextField
                id="filled-basic"
                label="Номер телефона, адрес электронной почты или имя пользователя"
                variant="filled"
                style={{
                  width: 300,
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  marginBottom: 30,
                }}
              />
              <Button
                variant="contained"
                style={{
                  backgroundColor: "black",
                  color: "white",
                  borderRadius: 30,
                  width: 300,
                  display: "block",
                  marginBottom: 30,
                }}
              >
                Далее
              </Button>
              <Button
                style={{ width: 300, display: "block", borderRadius: 30 }}
              >
                Забыли пароль?
              </Button>
            </div>
          </Fade>
        </Modal>
      </div>
    );
  }
}
