import React, { useRef } from "react";
import { useHomeStyles } from "../../pages/Home";
import MessageIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteIcon from "@material-ui/icons/FavoriteBorder";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import PublishIcon from "@material-ui/icons/Publish";
import Image from "../UploadImage/Image";

import {
  Grid,
  Container,
  IconButton,
  Typography,
  Paper,
  Avatar,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { formatData } from "../../utils/formatData";
import { format } from "date-fns";
import ruLang from "date-fns/locale/ru";
import BurgerButton from "../BurgerButton/BurgerButton";
import { useSelector } from "react-redux";

const Tweet = ({ text, user, _id, none, createdAt, images, userPage, fullTweet }) => {
  const burgerRef = useRef(null);
  const linkRef = React.useRef(null);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const { dataMe } = useSelector((state) => state.authSlice);
  const { oneTweet } = useSelector((state) => state.tweetsSlice);

  const handleClickBurger = (event) => {
    event.stopPropagation();
    event.preventDefault();
    console.log(event.target);
    // event.stopPropagation();
    // event.preventDefault();
    // burgerRef.current = true;
    setAnchorEl(event.target);

    // console.log(event);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  console.log(burgerRef);
  console.log(linkRef);

  const classes = useHomeStyles();
  const { username, avatarUrl, fullname, _id: userId } = user;
  return (
    <Paper
      className={classes.tweet}
      style={{
        paddingTop: 15,
        pointerEvents: none || userPage ? "none" : "auto",
      }}
      variant="outlined"
    >
      <Container maxWidth="lg" style={{ cursor: "default" }}>
        <Grid container spacing={3}>
          <Grid item xs={1}>
            <Avatar
              style={{ width: 50, height: 50 }}
              alt={`Аватар пользователя ${username}`}
              src={avatarUrl}
            />
          </Grid>
          <Grid style={{ paddingLeft: 25 }} item xs={11}>
            <Typography
              style={{
                marginBottom: 20,
                display: "flex",
                alignItems: "center",
              }}
            >
              <b>{fullname}</b>
              <Link to={`users/tweets/${userId}`}>
                <span
                  style={{ color: "#0005ff" }}
                  className={classes.tweetUserName}
                >
                  @{username}
                </span>
              </Link>
              <b style={{ margin: "0 4px" }}> · </b>
              <span style={{ color: "#9c9a9a" }}>
                {formatData(new Date(createdAt))}
              </span>
              {dataMe._id === userId && (
                <BurgerButton
                  id={_id}
                  refer={burgerRef}
                  click={handleClickBurger}
                  setAnchorEl={setAnchorEl}
                  anchorEl={anchorEl}
                  handleClose={handleClose}
                />
              )}
            </Typography>
            <Link
              ref={linkRef}
              onClick={(e) => {
                if (e.target) {
                  return;
                }
              }}
              style={{
                color: "inherit",
                textDecoration: "none",
                pointerEvents: none || userPage ? "none" : "auto",
              }}
              to={`/home/tweet/${_id}`}
              disa
            >
              <Typography
                style={{ marginBottom: 20, fontSize: 20, cursor: "default" }}
              >
                {text}
              </Typography>
            </Link>

            {none && (
              <Typography style={{ color: "#9c9a9a", marginBottom: 25 }}>
                <span>
                  {format(new Date(createdAt), "H:mm:ss", { locale: ruLang })}
                </span>
                <span style={{ marginLeft: 10 }}>
                  {format(new Date(createdAt), "dd MMM. yyyy г.", {
                    locale: ruLang,
                  })}
                </span>
              </Typography>
            )}
            <Image none image={images} fullTweet={fullTweet}/>

            <div className={classes.tweetIconsPost}>
              <div>
                <IconButton color="primary">
                  <MessageIcon />
                </IconButton>
                <span>1</span>
              </div>
              <div>
                <IconButton color="primary">
                  <RepeatIcon />
                </IconButton>
                <span>1</span>
              </div>
              <div>
                <IconButton color="primary">
                  <FavoriteIcon />
                </IconButton>
                <span>1</span>
              </div>
              <div>
                <IconButton color="primary">
                  <EqualizerIcon />
                </IconButton>
                <span>1</span>
              </div>
              <div>
                <IconButton color="primary">
                  <PublishIcon />
                </IconButton>
                <span>1</span>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

export default Tweet;
