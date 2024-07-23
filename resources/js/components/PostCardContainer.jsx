import React, { useState } from "react";
import PostCard from "./PostCard";
import { Inertia } from "@inertiajs/inertia";
import Modal from "./Modal";

function PostCardContainer({ user, posts, csrf_token }) {
    const [displayed, setDisplayed] = useState(false);
    const [selectedPost, setSelectedPost] = useState(null);

    if (posts.lenght <= 0) {
        posts = [];
    }
    function DisplayModal(post) {
        setDisplayed(true);
        setSelectedPost(post);
        // console.log(displayed, post.title);
    }

    function handleClickEdit(post) {
        // TODO
        Inertia.get(`posts/edit/${post.id}/${post.slug}`);
    }

    return (
        <div className="container-fluid col-12">
            <Modal
                post={selectedPost}
                csrf_token={csrf_token}
                displayed={displayed}
                setDisplayed={setDisplayed}
            ></Modal>
            {posts.map(post => (
                <PostCard
                    user={user}
                    post={post}
                    key={post.id}
                    csrf_token={csrf_token}
                >
                    <div className="my-2 col-12 col-sm-6 col-md-6 col-lg-12 row">
                        <button
                            className="btn btn-outline-success button col-12"
                            type="button"
                            onClick={() => handleClickEdit(post)}
                        >
                            <div className="button-text">Edit</div>
                            <div className="animated-text d-none">Edit</div>
                        </button>
                    </div>
                    <div className="my-2 col-12 col-sm-6 col-md-6 col-lg-12 row">
                        <button
                            className="btn btn-outline-danger button col-12"
                            type="button"
                            onClick={() => DisplayModal(post)}
                        >
                            <div className="animated-text d-none">Delete</div>
                            <div className="button-text">Delete</div>
                        </button>
                    </div>
                </PostCard>
            ))}
        </div>
    );
}

export default PostCardContainer;
