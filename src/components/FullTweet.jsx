import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Tweet from "./Tweet";
import { getOneTwitt } from "../redux/slices/tweetsSlice";
import { useParams } from "react-router-dom";

const FullTweet = () => {
  const { oneTweet } = useSelector((state) => state.tweetsSlice);
  const { id } = useParams();
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getOneTwitt(id));
  }, []);

  return (
    <>
      {oneTweet.map(tweet => <Tweet {...tweet} none/>)}
    </>
  );
};

export default FullTweet;
