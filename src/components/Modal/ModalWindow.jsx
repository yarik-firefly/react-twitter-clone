import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { useDispatch, useSelector } from "react-redux";
import CloseIcon from "@material-ui/icons/Close";
import { setOpen } from "../../redux/slices/modalSlice";
import { Button, TextField, Typography } from "@material-ui/core";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Login from "../../pages/Auth/Login";
import Register from "../../pages/Auth/Register";

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
  const { open } = useSelector((state) => state.modalSlice);

  if (open === "SignUp") {
    return <Register />;
  } else if (open === "SignIn") {
    return <Login />;
  }
}
