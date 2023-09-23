import React from "react";
import ImageIcon from "@material-ui/icons/Image";
import MoodIcon from "@material-ui/icons/Mood";
import { IconButton } from "@material-ui/core";
import Image from "./Image";

export const UploadImages = ({ image, setImage, deleteImage }) => {
  const inputRef = React.useRef(null);

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
      <IconButton color="primary" onClick={handleClickIcon}>
        <ImageIcon />
      </IconButton>
      <IconButton color="primary">
        <MoodIcon />
      </IconButton>
      <input ref={inputRef} type="file" id="upload-file" hidden />
      <div>
        <Image image={image} deleteImage={deleteImage} delIco/>
      </div>
    </div>
  );
};

export default UploadImages;
