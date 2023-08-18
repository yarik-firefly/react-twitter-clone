import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { setOpen } from "../redux/slices/modalSlice";
import ModalWindowSignIn from "../components/Modal/ModalWindow";

const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    height: "100vh",
  },
  XSide: {
    backgroundColor: "rgb(255,255,255)",
    flex: "0 0 50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  loginSide: {
    backgroundColor: "rgb(255,255,255)",
    flex: "0 0 50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "center",
  },
});

const SignIn = () => {
  const dispatch = useDispatch();
  const { open } = useSelector((state) => state.modalSlice);
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <section className={classes.XSide}>
        <svg
          height={380}
          viewBox="0 0 24 24"
          aria-hidden="true"
          class="r-18jsvk2 r-4qtqp9 r-yyyyoo r-rxcuwo r-1777fci r-m327ed r-dnmrzs r-494qqr r-bnwqim r-1plcrui r-lrvibr"
        >
          <g>
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
          </g>
        </svg>
      </section>
      <section className={classes.loginSide}>
        <Typography
          variant="h2"
          style={{
            fontSize: "80px",
            wordSpacing: "5px",
            fontWeight: "900",
            paddingBottom: "50px  ",
          }}
        >
          Здесь и сейчас
        </Typography>
        <Typography variant="h3" style={{ fontWeight: 700, fontSize: 31 }}>
          Присоединяйтесь сегодня.
        </Typography>
        <Button
          onClick={() => dispatch(setOpen("SignUp"))}
          style={{
            width: "300px",
            borderRadius: "30px",
            height: "40px",
            backgroundColor: "rgb(29,155,240)",
            marginTop: 30,
          }}
          variant="contained"
          color="primary"
        >
          Создать Профиль
        </Button>
        <Typography style={{ fontSize: 17, fontWeight: 700, marginTop: 50 }}>
          У вас уже есть профиль?
        </Typography>
        <Button
          onClick={() => dispatch(setOpen("SignIn"))}
          style={{
            color: "rgb(29,155,240)",
            borderRadius: "30px",
            border: "1px solid #9f9898",
            width: "300px",
            marginTop: 10,
          }}
        >
          Вход
        </Button>
      </section>
      <ModalWindowSignIn />
    </div>
  );
};

export default SignIn;
