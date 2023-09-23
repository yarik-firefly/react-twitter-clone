import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Tweet from "./Tweet";
import { getOneTwitt } from "../redux/slices/tweetsSlice";
import { useParams } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";

const FullTweet = () => {
  const { oneTweet, statusOneTweet } = useSelector(
    (state) => state.tweetsSlice
  );
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getOneTwitt(id));
  }, []);

  return (
    <>
      {statusOneTweet === "SUCCESS" ? (
        oneTweet.map((tweet) => <Tweet {...tweet} none />)
      ) : statusOneTweet === "LOADING" ? (
        <div
          style={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress size={100} />
        </div>
      ) : null}
    </>
  );
};

export default FullTweet;
