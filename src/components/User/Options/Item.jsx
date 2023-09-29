import React from "react";
import "./Item.scss";
import UploadImages from "../../UploadImage/UploadImages";
import { uploadImage } from "../../../utils/uploadImage";
import { useDispatch } from "react-redux";
import { updateAvatar } from "../../../redux/slices/authSlice";

export const Item = ({ avatar, title, element }) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    element?.ref?.current.addEventListener("change", uploadFunc);

    return () => {
      if (element?.ref?.current) {
        element.ref.current.removeEventListener("change", uploadFunc);
      }
    };
  }, []);

  const uploadFunc = React.useCallback(async (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileObj = new Blob([file]);
      const blobUrl = URL.createObjectURL(fileObj);
      const formData = new FormData();
      formData.append("image", blobUrl);
      const { url } = await uploadImage(file);
      dispatch(updateAvatar(url));
    }
  }, []);

  const optionsHandleClick = () => {
    if (title === "Установить аватар") {
      element.ref.current.click();
    }
  };
  return (
    <div className="options-item" onClick={() => optionsHandleClick()}>
      {element}
      <span className="options-item__icon">{avatar}</span>
      <span className="options-item__text">{title}</span>
    </div>
  );
};

export default Item;
