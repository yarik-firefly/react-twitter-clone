import React from "react";
import { Button } from "@material-ui/core";
import { showModalTweet } from "../redux/slices/modalSlice";
import { useDispatch } from "react-redux";
import { postTwitt } from "../redux/slices/tweetsSlice";
import { uploadImage } from "../utils/uploadImage";

const ButtonTweet = ({
  width,
  height,
  fontSize,
  disabled,
  sideBtn,
  origin,
  text,
  setText,
  image,
  setImage,
}) => {
  const dispatch = useDispatch();
  const onClickButtonHandler = async () => {
    const urls = [];
    for (let i = 0; i < image.length; i++) {
      const file = image[i].file;
      const { url } = await uploadImage(file);
      urls.push(url);
    }
    dispatch(postTwitt({ text, images: urls }));
    setText("");
    setImage([]);
    dispatch(showModalTweet(false));
  };
  return (
    <Button
      onClick={
        sideBtn
          ? () => dispatch(showModalTweet(true))
          : () => onClickButtonHandler()
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
