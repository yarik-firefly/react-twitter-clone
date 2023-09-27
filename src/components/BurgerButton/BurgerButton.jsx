import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import styles from "./Burger.module.scss";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteTweet } from "../../redux/slices/tweetsSlice";

export const BurgerButton = ({
  click,
  refer,
  anchorEl,
  setAnchorEl,
  handleClose,
  id,
}) => {
  const ITEM_HEIGHT = 48;

  const dispatch = useDispatch();
  const { removeTweet } = useSelector((state) => state.tweetsSlice);

  const burgerRef = React.useRef(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    // event.stopPropagation()
    // if (burgerRef.current) {
    //   burgerRef.current.click();
    // }
    setAnchorEl(event.currentTarget);
  };

  const handleDeleteClick = () => {
    dispatch(deleteTweet(id));
    setAnchorEl(null);

  };
  console.log(burgerRef.current);

  return (
    <div className={styles.root}>
      <IconButton
        ref={refer}
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClickCapture={click}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        <MenuItem>Редактировать</MenuItem>
        <MenuItem onClick={handleDeleteClick}>Удалить</MenuItem>
      </Menu>
    </div>
  );
};

export default BurgerButton;
