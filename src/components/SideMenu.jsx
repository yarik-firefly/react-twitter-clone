import React from "react";
import { useHomeStyles } from "../pages/Home";
import { Button, Hidden, IconButton, Typography } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import PersonIcon from "@material-ui/icons/Person";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ButtonTweet from "./ButtonTweet";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import CreateTweet from "./Tweet/CreateTweet";
import { useStyles } from "./Modal/ModalWindow";
import { useDispatch, useSelector } from "react-redux";
import { showModalTweet } from "../redux/slices/modalSlice";
import { Link } from "react-router-dom";

const SideMenu = () => {
  const clickOnAddTweet = () => {};
  // const [addTweet, setAddTweet] = React.useState(false);
  const { showModal } = useSelector((state) => state.modalSlice);
  const dispatch = useDispatch();
  const classes = useHomeStyles();
  const classModal = useStyles();
  return (
    <>
      <svg
        width={50}
        height={30}
        viewBox="0 0 24 24"
        aria-hidden="true"
        class="r-18jsvk2 r-4qtqp9 r-yyyyoo r-16y2uox r-8kz0gk r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp"
      >
        <g>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
        </g>
      </svg>
      <ul className={classes.list}>
        <Link style={{ color: "inherit", textDecoration: "none" }} to="/home">
          <li>
            <IconButton aria-label="delete" color="primary">
              <HomeIcon />
            </IconButton>
            <Hidden xsDown>
              <Typography>Главная</Typography>
            </Hidden>
          </li>
        </Link>

        <li>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <Hidden xsDown>
            <Typography>Поиск</Typography>
          </Hidden>
        </li>
        <li>
          <IconButton>
            <NotificationsNoneIcon />
          </IconButton>
          <Typography>Уведомления</Typography>
        </li>
        <li>
          <IconButton>
            <MailOutlineIcon />
          </IconButton>
          <Typography>Сообщения</Typography>
        </li>
        <li>
          <IconButton>
            <ListAltIcon />
          </IconButton>
          <Typography>Список</Typography>
        </li>
        <li>
          <IconButton>
            <PeopleOutlineIcon />
          </IconButton>
          <Typography>Сообщество</Typography>
        </li>
        <li>
          <IconButton>
            <VerifiedUserIcon />
          </IconButton>
          <Typography>Проверенные</Typography>
        </li>
        <li>
          <IconButton>
            <PersonIcon />
          </IconButton>
          <Typography>Профиль</Typography>
        </li>
        <li>
          <IconButton>
            <MoreHorizIcon />
          </IconButton>
          <Typography>Больше</Typography>
        </li>
      </ul>
      <ButtonTweet width="270" height="65" fontSize="17" sideBtn/>

      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          closeAfterTransition
          onClose={() => dispatch(showModalTweet(false))}
          open={showModal}
          BackdropComponent={Backdrop}
          className={classModal.modal}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={showModal} style={{ width: 550 }}>
            <div>
              <CreateTweet close />
            </div>
          </Fade>
        </Modal>
      </div>
    </>
  );
};

export default SideMenu;
