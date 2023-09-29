import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Tweet from "./Tweet";
import { getOneTwitt } from "../redux/slices/tweetsSlice";
import { useParams } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";
import CommentBlock from "./Comment/CommentBlock";
import { getCommentUnderTweet } from "../redux/slices/CommentsSlice";

const FullTweet = () => {
  const { oneTweet, statusOneTweet } = useSelector(
    (state) => state.tweetsSlice
  );
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getOneTwitt(id));
    dispatch(getCommentUnderTweet(id));
  }, []);

  return (
    <>
      {statusOneTweet === "SUCCESS" ? (
        oneTweet.map((tweet) => <Tweet {...tweet} none fullTweet />)
      ) : statusOneTweet === "LOADING" ? (
        <div
          style={{
            height: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress size={100} />
        </div>
      ) : null}
      <CommentBlock />
    </>
  );
};

export default FullTweet;
