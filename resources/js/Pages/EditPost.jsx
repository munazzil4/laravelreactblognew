import React from "react";
import Header from "../components/Header";
import PostForm from "../components/PostForm";
function CreatePost({ post }) {
    return (
        <div className="form-container container-fluid">
            <Header></Header>
            <PostForm post={post}></PostForm>
        </div>
    );
}

export default CreatePost;
