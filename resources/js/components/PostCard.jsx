import React, { useState, useEffect } from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import MiniAuthor from "./MiniAuthor";

const PostCard = ({ user, post, children }) => {
    const [isAuthor, setIsAuthor] = useState(false);
    useEffect(() => {
        if (user == null) {
            user = {
                name: "",
                email: ""
            };
        }

        if (post.user_id == user.id) {
            setIsAuthor(true);
        }
    }, []);

    // TODO solo mostrar los botones si el id de usuario es el mismo que el post.user_id
    return (
        <div
            className="post bg-white row border row-cols-lg-6 row-cols-xs-1 col-lg-8"
            key={post.id}
            tabIndex="-1"
        >
            <div className="post-content col-lg-9">
                <h4 className="px-3 pt-2 post-title">
                    <InertiaLink
                        href={`/u/${post.user.slug}/post/${post.id}/${post.slug}`}
                    >
                        {post.title}
                    </InertiaLink>
                </h4>
                <p className="post-preview px-3">
                    <InertiaLink
                        className="post-preview"
                        href={`/u/${post.user.slug}/post/${post.id}/${post.slug}`}
                    >
                        {post.body.substring(0, 150)}
                    </InertiaLink>
                </p>
                <div className="">
                    <MiniAuthor creation={post} title_style="gray"></MiniAuthor>
                </div>
            </div>
            {isAuthor && (
                <div className="post-buttoncontainer col-sm-12 col-lg-3 justify-content-around">
                    {children}
                </div>
            )}
        </div>
    );
};

export default PostCard;
