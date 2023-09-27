import React from "react";
import ImageIcon from "@material-ui/icons/Image";
import MoodIcon from "@material-ui/icons/Mood";
import { IconButton } from "@material-ui/core";
import Image from "./Image";
import EmojiPicker from "emoji-picker-react";
import "./UploadImage.scss";
export const UploadImages = ({
  image,
  setImage,
  deleteImage,
  placeholder,
  setText,
  text,
}) => {
  const inputRef = React.useRef(null);
  const [visible, setVisible] = React.useState(false);
  const onEmojiClick = (e) => {
    setText((prev) => prev + e.emoji);
  };

  const uploadFunc = React.useCallback((event) => {
    const file = event.target.files[0];
    if (file) {
      const fileObj = new Blob([file]);
      setImage((image) => [
        ...image,
        {
          blobUrl: URL.createObjectURL(fileObj),
          file,
        },
      ]);
    }
  }, []);

  const handleClickIcon = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.addEventListener("change", uploadFunc);
    }

    return () => {
      if (inputRef.current) {
        inputRef.current.removeEventListener("change", uploadFunc);
      }
    };
  }, []);

  return (
    <div style={{ display: "inline-block", maxWidth: 400 }}>
      {placeholder === "Что у Вас произошло?" && (
        <IconButton color="primary" onClick={handleClickIcon}>
          <ImageIcon />
        </IconButton>
      )}

      <IconButton onClick={() => setVisible(!visible)} color="primary">
        <MoodIcon />
      </IconButton>
      {visible && (
        <EmojiPicker
          emojiStyle="google"
          style={{ position: "absolute" }}
          onEmojiClick={onEmojiClick}
        />
      )}
      <input ref={inputRef} type="file" id="upload-file" hidden />
      <div>
        <Image key={1} image={image} deleteImage={deleteImage} delIco />
      </div>
    </div>
  );
};

export default UploadImages;
