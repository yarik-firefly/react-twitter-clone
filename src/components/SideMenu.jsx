import React from "react";
import { useHomeStyles } from "../pages/Home";
import { Button, IconButton, Typography } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import PersonIcon from "@material-ui/icons/Person";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const SideMenu = () => {
  const classes = useHomeStyles();
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
        <li>
          <IconButton aria-label="delete" color="primary">
            <HomeIcon />
          </IconButton>
          <Typography>Главная</Typography>
        </li>
        <li>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <Typography>Поиск</Typography>
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
      <Button
        variant="contained"
        style={{
          backgroundColor: "rgb(29,155,240)",
          color: "white",
          fontSize: 17,
          fontWeight: 700,
          width: 270,
          height: 65,
          borderRadius: 40,
        }}
      >
        Твитнуть
      </Button>
    </>
  );
};

export default SideMenu;
