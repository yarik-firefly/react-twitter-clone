import React from "react";
import GifIcon from "@material-ui/icons/Gif";
import ListIcon from "@material-ui/icons/List";
import MoodIcon from "@material-ui/icons/Mood";
import DateRangeIcon from "@material-ui/icons/DateRange";
import CloseIcon from "@material-ui/icons/Close";
import {
  Grid,
  InputBase,
  Paper,
  Avatar,
  IconButton,
  CircularProgress,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import { useHomeStyles } from "../../pages/Home";
import ButtonTweet from "../ButtonTweet";
import { useDispatch, useSelector } from "react-redux";
import { showModalTweet } from "../../redux/slices/modalSlice";
import UploadImages from "../UploadImage/UploadImages";

const CreateTweet = ({ close }) => {
  const { statusPostTweet, statusTweets } = useSelector(
    (state) => state.tweetsSlice
  );
  const [text, setText] = React.useState("");
  const progress = (text.length / 280) * 100;
  const maxLength = 280 - text.length;
  const [image, setImage] = React.useState([]);

  const deleteImage = (url) => {
    setImage((prev) => prev.filter((_url) => _url.blobUrl !== url));
  };

  const dispatch = useDispatch();

  const circleProgress = (e) => {
    if (e || !e) {
      setText(e);
    }
  };

  const classes = useHomeStyles();
  const useTweetStyles = makeStyles({
    circularTweet: {
      top: -0.5,
      left: -30,
      position: "absolute",
    },
  });
  const classesTweet = useTweetStyles();
  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });

  const { vertical, horizontal, open } = state;

  // const handleClick = (newState) => () => {
  //   setState({ open: true, ...newState });
  // };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <>
      <Paper>
        <div style={{ borderBottom: "1px solid rgb(247,249,249)" }}>
          {close && (
            <IconButton>
              <CloseIcon onClick={() => dispatch(showModalTweet(false))} />
            </IconButton>
          )}
        </div>
        <Paper className={classes.myTweet}>
          <Grid xs={1}>
            <Avatar />
          </Grid>
          <Grid xs={11}>
            <InputBase
              style={{ paddingTop: 50 }}
              maxRows={10}
              multiline
              value={text}
              onChange={(e) => circleProgress(e.target.value)}
              placeholder="Что у Вас произошло?"
              fullWidth
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderTop: "1px solid rgb(203 211 211",
              }}
            >
              <div>
                <UploadImages
                  image={image}
                  setImage={setImage}
                  deleteImage={deleteImage}
                />

                {/* <IconButton color="primary">
                  <GifIcon />
                </IconButton>
                <IconButton color="primary">
                  <ListIcon />
                </IconButton> */}

                {/* <IconButton color="primary">
                  <DateRangeIcon />
                </IconButton> */}
              </div>
              {text && (
                <div style={{ position: "relative" }}>
                  <span style={{ position: "absolute", left: -75, top: 8 }}>
                    {maxLength <= 0 ? 0 : maxLength}
                  </span>

                  <CircularProgress
                    style={{
                      zIndex: 5,
                      width: 25,
                      color: progress >= 100 ? "red" : undefined,
                    }}
                    className={classesTweet.circularTweet}
                    variant="determinate"
                    value={progress >= 100 ? 100 : progress}
                    thickness={6}
                  />
                  <CircularProgress
                    thickness={6}
                    variant="determinate"
                    style={{
                      color: "rgb(247,249,249)",
                      width: 25,
                    }}
                    value={100}
                    className={classesTweet.circularTweet}
                  />

                  <ButtonTweet
                    image={image}
                    disabled={progress >= 100}
                    width={65}
                    height={36}
                    fontSize={10}
                    origin
                    text={text}
                    setText={setText}
                    setImage={setImage}
                  />
                </div>
              )}
            </div>
            {statusPostTweet === "ERROR" && (
              <Alert severity="error">Не удалось твитнуть 😢</Alert>
            )}
          </Grid>
        </Paper>
      </Paper>
    </>
  );
};

export default CreateTweet;
