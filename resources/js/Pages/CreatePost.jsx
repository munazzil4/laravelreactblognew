import React from "react";
import Header from "../components/Header";
import PostForm from "../components/PostForm";
function CreatePost({user}) {
    return (
        <div className="form-container container-fluid">
            <Header user={user}></Header>
            <PostForm></PostForm>
        </div>
    );
}

export default CreatePost;
