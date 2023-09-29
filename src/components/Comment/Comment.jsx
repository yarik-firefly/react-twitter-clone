import React from "react";
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
  Avatar,
  Paper,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { formatData } from "../../utils/formatData";
import { format } from "date-fns";
import ruLang from "date-fns/locale/ru";
import BurgerButton from "../BurgerButton/BurgerButton";

export const Comment = ({ none = true, text, user, createdAt }) => {
  return (
    <Paper variant="outlined" square>
      <Container maxWidth="lg" style={{ cursor: "default", marginTop: 15 }}>
        <Grid container spacing={3}>
          <Grid item xs={1}>
            <Avatar
              style={{ width: 50, height: 50 }}
              alt={` ${user.fullname}`}
              src={user.avatarUrl}
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
              <b>{user.fullname}</b>
              <Link to={`users/tweets/${1}`}>
                <span
                  style={{ color: "#0005ff" }}
                  // className={classes.tweetUserName}
                >
                  @{user.username}
                </span>
              </Link>
              <b style={{ margin: "0 4px" }}> · </b>
              <span style={{ color: "#9c9a9a" }}>
                {formatData(new Date(createdAt))} назад
              </span>
            </Typography>
            <Link
              onClick={(e) => {
                if (e.target) {
                  return;
                }
              }}
              style={{
                color: "inherit",
                textDecoration: "none",
                pointerEvents: none || 2 ? "none" : "auto",
              }}
              to={`/home/tweet/${12}`}
              disa
            >
              <Typography
                style={{
                  marginBottom: 20,
                  fontSize: 20,
                  cursor: "default",
                }}
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
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};
export default Comment;
