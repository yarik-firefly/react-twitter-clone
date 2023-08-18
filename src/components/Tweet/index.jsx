import React from "react";
import { useHomeStyles } from "../../pages/Home";
import MessageIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteIcon from "@material-ui/icons/FavoriteBorder";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import PublishIcon from "@material-ui/icons/Publish";
import {
  Grid,
  Container,
  IconButton,
  Typography,
  Paper,
  Avatar,
} from "@material-ui/core";

const Tweet = ({ text, fullname, username, avatarUrl }) => {
  const classes = useHomeStyles();
  return (
    <Paper
      className={classes.tweet}
      style={{ paddingTop: 15 }}
      variant="outlined"
    >
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={1}>
            <Avatar
              style={{ width: 50, height: 50 }}
              alt={`Аватар пользователя ${username}`}
              src={avatarUrl}
            />
          </Grid>
          <Grid style={{ paddingLeft: 25 }} item xs={11}>
            <Typography>
              <b>{fullname}</b>
              <span className={classes.tweetUserName}>@{username}</span>
              <b> · </b>
              <span>Aug 17</span>
            </Typography>
            <Typography>{text}</Typography>
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
