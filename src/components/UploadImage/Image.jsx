import React from "react";
import styles from "./UploadImage.module.scss";
import DeleteIcon from "@material-ui/icons/DeleteOutline";
import mediumZoom from "medium-zoom";
import { useSelector } from "react-redux";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";

export const Image = ({ image, deleteImage, none, key, fullTweet }) => {
  const { statusOneTweet, statusTweets, tweets } = useSelector(
    (state) => state.tweetsSlice
  );
  console.log(image);
  const imgRef = React.useRef(null);
  // React.useEffect(() => {
  //   if (statusTweets === "SUCCESS") {
  //     mediumZoom(".MuiImageListItem-imgFullHeight");
  //   }
  // }, [statusTweets]);

  // if (statusTweets !== "SUCCESS") {
  //   return <>Loading...</>;
  // }

  return (
    <>
      {/* {image.length > 0 &&
        image.map((item) => (
          <div key={key} className={styles.wrapper}>
            <img
              ref={statusTweets === "SUCCESS" && imgRef}
              key={item.blobUrl || item}
              className={styles.root}
              src={item.blobUrl || item}
              width={50}
              style={{ width: "50px", height: "auto", backgroundImage: `url${item.blobUrl || item}` }}
            />
            {deleteImage && (
              <DeleteIcon
                onClick={() => deleteImage(item.blobUrl)}
                className={styles.delIcon}
              />
            )}
          </div>
        ))} */}
      {
        <>
          <ImageList
            className={fullTweet ? styles.rootImageFullTweet : styles.rootImage}
            cols={2.5}
          >
            {image.map((item) => (
              <ImageListItem key={item.blobUrl || item}>
                <img src={item.blobUrl || item} alt={"Картинка"} />
                {deleteImage && (
                  <DeleteIcon
                    onClick={() => deleteImage(item.blobUrl)}
                    className={styles.delIcon}
                  />
                )}
              </ImageListItem>
            ))}
          </ImageList>
        </>
      }
    </>
  );
};

export default Image;
