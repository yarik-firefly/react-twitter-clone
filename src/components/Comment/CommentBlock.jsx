import React from "react";
import CreateTweet from "../Tweet/CreateTweet";
import Comment from "./Comment";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Comment.scss";

export const CommentBlock = () => {
  const { id } = useParams();
  const { comments } = useSelector((state) => state.CommentsSlice);
  return (
    <>
      <div>
        <CreateTweet placeholder={"Ответить"} id={id} />
      </div>
      <div className="comment-block">
        <h3 className="comments-title">Комментарии:</h3>
        {comments.length > 0 ? (
          comments.map((item) => <Comment {...item} />)
        ) : (
          <div className="comment-block__empty">
            Комментариев пока нет <br />
            <span>Оставьте первый комментарий 😎</span>
          </div>
        )}
      </div>
    </>
  );
};

export default CommentBlock;
