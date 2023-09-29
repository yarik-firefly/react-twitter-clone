import React from "react";
import CreateTweet from "../Tweet/CreateTweet";
import Comment from "./Comment";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Comment.scss";
import { CircularProgress } from "@material-ui/core";

export const CommentBlock = () => {
  const { id } = useParams();
  const { comments, status } = useSelector((state) => state.CommentsSlice);
  const { statusOneTweet } = useSelector((state) => state.tweetsSlice);
  return (
    <>
      <div>
        <CreateTweet placeholder={"Ответить"} id={id} />
      </div>
      <div className="comment-block">
        <h3 className="comments-title">Комментарии:</h3>
        {comments.length > 0 ? (
          comments.map(
            status === "SUCCESS" && statusOneTweet === "SUCCESS"
              ? (item) => <Comment {...item} />
              : (item) => (
                  <div className="comment-block__circle">
                    <CircularProgress />
                  </div>
                )
          )
        ) : status === "SUCCESS" &&
          !comments.length &&
          statusOneTweet === "SUCCESS" ? (
          <div className="comment-block__empty">
            Комментариев пока нет <br />
            <span>Оставьте первый комментарий 😎</span>
          </div>
        ) : (
          <div className="comment-block__circle">
            <CircularProgress />
          </div>
        )}
      </div>
    </>
  );
};

export default CommentBlock;
