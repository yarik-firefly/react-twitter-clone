import React from "react";
import { Divider, ListItem, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const NewsList = (news) => {
  return (
    <>
      <Link to={`/home/search?q=${news.theme}`}>
        <ListItem button>
          <div>
            <Typography style={{ fontSize: 13, fontWeight: 400 }}>
              {news.title}
            </Typography>
            <Typography style={{ fontSize: 15, fontWeight: 700 }}>
              {news.theme}
            </Typography>
            <Typography style={{ fontSize: 15, fontWeight: 400 }}>
              {news.count} posts
            </Typography>
          </div>
        </ListItem>
        <Divider />
      </Link>
    </>
  );
};

export default NewsList;
