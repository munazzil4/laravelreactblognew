import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";

const MediaOptions = ({ comment, setFormDisplayed }) => {
    function handleClickDelete() {
        Inertia.post(`/comments/delete/${comment.id}`);
    }
    function handleClickEdit() {
        setFormDisplayed(true);
        // const comment_html = document.getElementById(id);
        // const comment_textbox = document.createElement("textarea");
        // comment_textbox.innerHTML = comment_html.innerHTML;
        // comment_textbox.value = comment.content;
        // comment_html.parentNode.replaceChild(comment_textbox, comment_html);
    }
    return (
        <div className="options shadow position-absolute col-4 col-sm-3 col-md-3 col-lg-2 bg-white px-0">
            <a
                href="#content-ancle"
                onClick={() => {
                    handleClickEdit();
                }}
            >
                <div className="option px-2 py-3 col-12">edit</div>
            </a>

            <div
                className="option px-2 py-3 col-12"
                onClick={() => {
                    handleClickDelete();
                }}
            >
                delete
            </div>
        </div>
    );
};

export default MediaOptions;
