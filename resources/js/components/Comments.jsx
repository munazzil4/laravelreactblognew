import React from "react";
import CommentForm from "./CommentForm";
import Comment from "./Comment";
function Comments({ comments, post }) {
    return (
        <div className="col-12 col-sm-12 col-md-11 col-lg-11 row justify-content-center">
            <CommentForm post={post}></CommentForm>
            {comments.map((comment) => (
                <Comment
                    comment={comment}
                    key={comment.id}
                    id={comment.id}
                ></Comment>
            ))}
        </div>
    );
}

export default Comments;
