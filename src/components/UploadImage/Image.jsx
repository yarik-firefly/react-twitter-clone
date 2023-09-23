import React from "react";
import styles from "./UploadImage.module.scss";
import DeleteIcon from "@material-ui/icons/DeleteOutline";
import mediumZoom from "medium-zoom";
import { useSelector } from "react-redux";

export const Image = ({ image, deleteImage }) => {
  const { statusOneTweet } = useSelector((state) => state.tweetsSlice);
  React.useEffect(() => {
    if (statusOneTweet === "SUCCESS") {
      mediumZoom(".UploadImage_wrapper__QCYgK  .UploadImage_root__9lXL1");
    }
  }, [statusOneTweet]);

  return (
    <>
      {image.length > 0 &&
        image.map((item) => (
          <div className={styles.wrapper}>
            <img
              key={item.blobUrl || item}
              className={styles.root}
              src={item.blobUrl || item}
              width={70}
            />
            {deleteImage && (
              <DeleteIcon
                onClick={() => deleteImage(item.blobUrl)}
                className={styles.delIcon}
              />
            )}
          </div>
        ))}
    </>
  );
};

export default Image;
