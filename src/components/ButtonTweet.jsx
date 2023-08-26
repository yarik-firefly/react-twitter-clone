import React from "react";
import { Button } from "@material-ui/core";
import { showModalTweet } from "../redux/slices/modalSlice";
import { useDispatch } from "react-redux";
import { postTwitt } from "../redux/slices/tweetsSlice";

const ButtonTweet = ({
  width,
  height,
  fontSize,
  disabled,
  sideBtn,
  origin,
  text,
}) => {
  const dispatch = useDispatch();
  return (
    <Button
      onClick={
        sideBtn
          ? () => dispatch(showModalTweet(true))
          : () => dispatch(postTwitt(text))
      }
      disabled={disabled}
      variant="contained"
      style={{
        backgroundColor: `${
          disabled ? "rgb(135 137 137 / 78%)" : "rgb(29,155,240)"
        }`,
        color: "white",
        fontSize: `${fontSize}px`,
        fontWeight: 700,
        width: `${width}px`,
        height: `${height}px`,
        borderRadius: 40,
      }}
    >
      Твитнуть
    </Button>
  );
};

export default ButtonTweet;
