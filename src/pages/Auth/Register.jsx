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
import { useStyles } from "../../components/Modal/ModalWindow";
import { register } from "../../redux/slices/authSlice";

const RegisterformSchema = yup
  .object({
    email: yup.string().email("Введите почту").required("Введите почту"),
    fullname: yup.string().required("Введите имя"),
    username: yup.string().required("Введите логин"),
    password: yup
      .string()
      .min(8, "Минимальная длина 8 символов")
      .required("Неверный пароль"),
    password2: yup
      .string()
      .oneOf([yup.ref("password")], "Пароли не совпадают")
      .required("Пароли не совпадают"),
  })
  .required();

const Register = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { open } = useSelector((state) => state.modalSlice);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(RegisterformSchema),
  });

  const onSubmit = async (data) => {
    dispatch(setOpen(""));
    dispatch(register(data));
    console.log(data);
  };
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <Controller
                defaultValue=""
                control={control}
                id="email"
                name="email"
                variant="filled"
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    autoComplete="off"
                    defaultValue=""
                    helperText={errors.email?.message}
                    error={!!errors.email}
                    label=" Введите адрес электронной почты "
                    style={{
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      marginBottom: 25,
                      display: "block",
                    }}
                  />
                )}
              />
              <Controller
                defaultValue=""
                control={control}
                id="email"
                name="fullname"
                variant="filled"
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    autoComplete="off"
                    defaultValue=""
                    helperText={errors.fullname?.message}
                    error={!!errors.fullname}
                    label="Имя"
                    style={{
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      marginBottom: 25,
                      display: "block",
                    }}
                  />
                )}
              />
              <Controller
                defaultValue=""
                control={control}
                id="email"
                name="username"
                variant="filled"
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    autoComplete="off"
                    defaultValue=""
                    helperText={errors.username?.message}
                    error={!!errors.username}
                    label="Логин"
                    style={{
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      marginBottom: 25,
                      display: "block",
                    }}
                  />
                )}
              />
              <Controller
                defaultValue=""
                control={control}
                id="email"
                name="password"
                variant="filled"
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    type="password"
                    autoComplete="off"
                    defaultValue=""
                    helperText={errors.password?.message}
                    error={!!errors.password}
                    label="Введите пароль"
                    style={{
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      marginBottom: 25,
                      display: "block",
                    }}
                  />
                )}
              />
              <Controller
                defaultValue=""
                control={control}
                name="password2"
                style={{ width: 300 }}
                render={({ field }) => (
                  <TextField
                    autoComplete="off"
                    {...field}
                    fullWidth
                    type="password"
                    label="Введите пароль повторно"
                    style={{
                      display: "block",
                      width: 300,
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      marginBottom: 30,
                    }}
                    helperText={errors.password2?.message}
                    error={!!errors.password2}
                  />
                )}
                label="Пароль"
                variant="filled"
              />
              <Button
                type="submit"
                variant="contained"
                style={{
                  backgroundColor: "black",
                  color: "white",
                  borderRadius: 30,
                  width: 300,
                  marginBottom: 30,
                }}
              >
                Далее
              </Button>
            </form>
            <Button style={{ width: 300, display: "block", borderRadius: 30 }}>
              Забыли пароль?
            </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default Register;
