import React from "react";
import { Avatar } from "@material-ui/core";
import styles from "./SidePanelUser.module.scss";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSignOut } from "../../redux/slices/authSlice";

export const SidePanelUser = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const dispatch = useDispatch();
  const { dataMe } = useSelector((state) => state.authSlice);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSignOut = () => {
    dispatch(setSignOut());
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  //   <div>
  //     <Button aria-controls="simple-menu" aria-haspopup="true">
  //       Open Menu
  //     </Button>
  //   </div>;

  return (
    <div style={{ position: "relative" }}>
      <div className={styles.wrapper} onClick={handleClick}>
        <div>
          <Avatar
            className={styles.avatar}
            alt={dataMe.fullname}
            src="blob:https://web.telegram.org/4a157085-52c6-45eb-a74a-d19f8cf0b774"
          />
          <div className={styles.info}>
            <span>{dataMe.fullname}</span>
            <span>{dataMe.username}</span>
          </div>
        </div>
      </div>
      <div>
        <Menu
          classes={{ paper: styles.menu }}
          style={{ width: "330px !important" }}
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <Link to={`users/tweets/${dataMe._id}`}>
            <MenuItem onClick={handleClose}>Мой Профиль</MenuItem>
          </Link>
          <MenuItem onClick={handleSignOut}>Выйти из Профиля</MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default SidePanelUser;
