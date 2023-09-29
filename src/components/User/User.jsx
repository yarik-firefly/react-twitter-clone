import React from "react";
import "./User.scss";
import { Avatar, Button, CircularProgress } from "@material-ui/core";
import { Tabs } from "@material-ui/core";
import { Tab } from "@material-ui/core";
import Calendar from "@material-ui/icons/Today";
import { useDispatch, useSelector } from "react-redux";
import Tweet from "../Tweet";
import { getTweets } from "../../redux/slices/tweetsSlice";
import format from "date-fns/format";
import ruLang from "date-fns/locale/ru";
import { getOneUser } from "../../redux/slices/authSlice";
import { Link, useParams } from "react-router-dom";

export const User = () => {
  const [value, setValue] = React.useState(0);
  const { tweets } = useSelector((state) => state.tweetsSlice);

  const { infoUser, infoUserStatus, dataMe } = useSelector((state) => state.authSlice);
  const dispatch = useDispatch();
  const { id } = useParams();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // const {fullname, username, createdAt} = userInfo;

  React.useEffect(() => {
    dispatch(getOneUser(id));
    dispatch(getTweets(id));
  }, [dispatch, id]);

  if (infoUserStatus === "loading") {
    return <CircularProgress />;
  }
  console.log(infoUserStatus);

  return (
    <div>
      <div className="empty-block"></div>
      <div className="info">
        <Avatar src={infoUser.avatarUrl}></Avatar>

        <div className="info__person">
          <h4>{infoUser.fullname}</h4>
          <h6>{infoUser.username}</h6>
          <h6>
            <Calendar />
            Присоединился в
            {format(new Date(infoUser.createdAt), " MMMM   yyyy г.", {
              locale: ruLang,
            })}
          </h6>
          <span>0 Подписки</span>
          <span>0 Подписчики</span>
        </div>
        <div>
          <Link to="edit">
            {dataMe._id === infoUser._id && (
              <Button variant="contained">Редактировать</Button>
            )}
          </Link>
        </div>
      </div>
      <div className="block-tabs">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="action tabs example"
        >
          <Tab label="Посты" />
          <Tab label="Ретвиты" />
          <Tab label="Медия" />
          <Tab label="Лайки" />
        </Tabs>
      </div>
      <div>
        {tweets.map((tweet) => (
          <Tweet {...tweet} userPage />
        ))}
      </div>
    </div>
  );
};

export default User;
