import React from "react";
import {
  Grid,
  Container,
  Typography,
  makeStyles,
  InputBase,
  Paper,
  Button,
} from "@material-ui/core";

import Tweet from "../components/Tweet";
import SideMenu from "../components/SideMenu";

export const useHomeStyles = makeStyles((theme) => ({
  wrapper: {},
  list: {
    listStyle: "none",
    padding: 0,
    "& li": {
      display: "flex",
      alignItems: "center",
      borderRadius: 30,
      transition: "all .2s ease",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "rgba(15, 20, 25, 0.1)",
      },
      "& p": {
        marginLeft: 15,
        fontSize: 20,
        fontWeight: 700,
      },

      "& svg": {
        fontSize: 40,
      },
    },
  },
  input: {
    width: 288,
    height: 50,
    border: "1px solid rgb(239,243,244)",
    backgroundColor: "rgb(239,243,244)",
    borderRadius: 30,
    "&:focus": {
      border: "1px solid rgb(29,155,240)",
    },
  },
  button: {
    width: "50%",
    height: 50,
  },
  tweet: {
    cursor: "pointer",
    transition: "all .2s ease-in-out",
    "&:hover": {
      backgroundColor: "#ebebeb",
    },
  },
  tweetUserName: {
    paddingLeft: 15,
  },
  tweetIconsPost: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

const Home = () => {
  const classes = useHomeStyles();
  return (
    <Container maxWidth="lg" style={{ height: "100vh" }}>
      <Grid container spacing={2}>
        <Grid item xs={3} style={{ marginTop: 15 }}>
          <SideMenu />
        </Grid>
        <Grid item xs={7}>
          <Paper
            variant="outlined"
            style={{
              height: "100%",
              borderBottom: 0,
              borderRadius: 0,
              borderTop: 0,
            }}
          >
            <Paper variant="outlined">
              <Typography
                variant="h6"
                style={{ fontWeight: 700, padding: "10px 15px" }}
              >
                Главная
              </Typography>
              <Button className={classes.button}>Для Вас</Button>
              <Button className={classes.button}>Следующий</Button>
            </Paper>

            <Tweet
              username="serhiyprytula"
              fullname="Serhiy Prytula"
              avatarUrl="https://pbs.twimg.com/profile_images/1493217271048777729/Ha-OGOTY_400x400.jpg"
              text="Погляньте, на що здатні ваші донати!Не важливо який їх розмір, важливо, що кожного місяця сотні тисяч переказів допомагають нам акумулювати кошти за які ми регулярно посилюємо сотні і стотні підрозділів Сил Оборони!"
            />
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <InputBase className={classes.input} placeholder="Поиск" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
