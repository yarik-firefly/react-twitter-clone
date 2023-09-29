import React from "react";
import Item from "./Options/Item";
import AccountCircleIcon from "@material-ui/icons/AccountCircleOutlined";
import TextFormatIcon from "@material-ui/icons/TextFormat";
import Location from "@material-ui/icons/LocationOnOutlined";

export const EditUser = () => {
  const addFileRef = React.useRef(null);
  const options = [
    {
      avatar: <AccountCircleIcon />,
      title: "Установить аватар",
      element: <input ref={addFileRef} type="file" hidden />,
    },
    { avatar: <TextFormatIcon />, title: "Описание" },
    { avatar: <Location />, title: "Геолокация" },
  ];
  return (
    <div>
      <h3 style={{ marginLeft: 15 }}>Настройки Профиля</h3>
      <div style={{ position: "relative" }}>
        {options.map((item) => (
          <Item key={item} {...item} />
        ))}
      </div>
    </div>
  );
};

export default EditUser;
