import React from "react";
import {
  Grid,
  Container,
  Typography,
  makeStyles,
  InputBase,
  Paper,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
  IconButton,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Skeleton } from "@material-ui/lab";

import Tweet from "../components/Tweet";
import SideMenu from "../components/SideMenu";

import mediumZoom from "medium-zoom";

import CreateTweet from "../components/Tweet/CreateTweet";
import { useDispatch, useSelector } from "react-redux";
import { getNewsList, getTweets } from "../redux/slices/tweetsSlice";
import NewsList from "../components/NewsList";
import {
  Outlet,
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import FullTweet from "../components/FullTweet";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import User from "../components/User/User";

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
    paddingLeft: 40,
    position: "relative",
    "&.Mui-focused": {
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
  myTweet: {
    display: "flex",
    padding: "10px 24px",
    "& input": {
      paddingTop: 40,
    },
  },
  rightBar: {
    width: 350,
    padding: "12px 16px",
    backgroundColor: "rgb(247,249,249)",
    borderRadius: 30,
    marginTop: 15,
  },
  rightBarNews: {
    width: 350,
    backgroundColor: "rgb(247,249,249)",
    borderRadius: 30,
    marginTop: 15,
  },
  circleProgress: {
    height: "inherit",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 30,
    fontWeight: 700,
  },
}));

const Home = () => {
  const classes = useHomeStyles();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const params = useParams();
  const { tweets, news, statusTweets, statusNews } = useSelector(
    (state) => state.tweetsSlice
  );
  const { dataMe, infoUser, infoUserStatus } = useSelector((state) => state.authSlice);

  const id = Object.values(params).toString();

  React.useEffect(() => {
    if (pathname === "/home") {
      dispatch(getTweets());
    }
    // dispatch(getNewsList());
  }, [pathname]);

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
            <Paper>
              <Typography
                variant="h6"
                style={{ fontWeight: 700, padding: "10px 15px" }}
              >
                {pathname === `/home/${id}` ? (
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <IconButton onClick={() => navigate(-1)}>
                      <ArrowBackIcon />
                    </IconButton>
                    <span style={{ marginLeft: 10 }}>
                      {pathname === "/home/users/tweets/" + infoUser._id ? (
                        <>{infoUser.fullname}</>
                      ) : pathname === `/home/${id}` && infoUserStatus !== "loading"  ? (
                        "Твитнуть"
                      ) : (
                        <Skeleton variant="text" width={131} height={32}/>
                      )}
                    </span>
                  </div>
                ) : pathname === "/home" ? (
                  <>Главная</>
                ) : null}
              </Typography>
              <Routes>
                <Route
                  index
                  path=""
                  element={
                    <>
                      <Button className={classes.button}>Для Вас</Button>
                      <Button className={classes.button}>Следующий</Button>
                    </>
                  }
                ></Route>
              </Routes>
            </Paper>
            <Routes>
              <Route path="tweet/:id" element={<FullTweet />} />
              <Route path={`users/tweets/:id`} element={<User />} />

              <Route
                path=""
                element={
                  <>
                    <CreateTweet />

                    {statusTweets === "SUCCESS" ? (
                      tweets.map((tweet) => <Tweet {...tweet} />)
                    ) : statusTweets === "LOADING" ? (
                      <div className={classes.circleProgress}>
                        <CircularProgress style={{ width: 70, height: 70 }} />
                      </div>
                    ) : statusTweets === "ERROR" ? (
                      <div className={classes.errorText}>
                        Не удалось отобразить твиты. Попробуйте зайти позже 😑
                      </div>
                    ) : null}
                  </>
                }
              />
            </Routes>
          </Paper>
        </Grid>
        <Grid item xs={2} style={{ position: "relative", marginTop: 5 }}>
          <div style={{ position: "sticky", top: 0 }}>
            <SearchIcon
              style={{ position: "absolute", zIndex: 10, top: 20, left: 19 }}
            />
            <InputBase
              className={classes.input}
              placeholder="Поиск"
            ></InputBase>
            <div className={classes.rightBar}>
              <Typography
                variant="h6"
                style={{
                  fontSize: 20,
                  fontWeight: 800,
                  whiteSpace: "nowrap",
                  marginBottom: 10,
                }}
              >
                Подписаться на Премиум
              </Typography>
              <Typography style={{ fontSize: 15, fontWeight: 700 }}>
                Подпишитесь, чтобы разблокировать новые функции и, если вы
                соответствуете требованиям, получать долю дохода от рекламы.
              </Typography>
              <Button
                style={{
                  backgroundColor: "black",
                  color: "white",
                  fontSize: 15,
                  fontWeight: 700,
                  width: 130,
                  height: 40,
                  borderRadius: 30,
                  marginTop: 10,
                }}
              >
                Подписаться
              </Button>
            </div>
            <div className={classes.rightBarNews}>
              <Typography
                variant="h5"
                style={{
                  fontSize: 20,
                  fontWeight: 800,
                  paddingTop: 15,
                  paddingLeft: 12,
                }}
              >
                Тренды для вас
              </Typography>
              <List
                component="nav"
                className={classes.root}
                aria-label="mailbox folders"
              >
                <Divider />

                {news.map((item) => (
                  <NewsList {...item} />
                ))}
              </List>
            </div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;

{
  /* {statusTweets === "LOADING" ? (
                      <div className={classes.circleProgress}>
                        <CircularProgress style={{ width: 70, height: 70 }} />
                      </div>
                    ) : (
                      tweets.map((tweet) => <Tweet {...tweet} />)
                    )} */
}
