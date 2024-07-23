import React from "react";

function FullPost({ post }) {
    return (
        <div className="postcontainer container col-12 row justify-content-center p-0">
            <div className="postcontent px-4 px-lg-5 pt-3 mt-2 col-lg-11">
                <h2 className="container-title display-4 row">{post.title}</h2>
                {/* {{ $post->get_excerpt}} */}
                <div className="body text-justify row">{post.body}</div>
            </div>
        </div>
    );
}

export default FullPost;
