import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";

const CommentForm = ({ post }) => {
    const [values, setValues] = useState({
        content: "",
        image: "",
        post_id: post.id,
    });
    const content = document.getElementById("content");

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));
    }
    function handleSubmit(e) {
        e.preventDefault();
        Inertia.post(`/comments`, values, {
            onSuccess: () => {
                content.value = "";
            },
        });
    }

    return (
        <form
            action=""
            className="col-12 col-lg-11 row justify-content-center px-0 my-2"
            method="POST"
        >
            <div id="content-ancle" className="content-ancle"></div>
            <textarea
                id="content"
                rows="5"
                className="no-resize form-control col-12 row"
                onChange={handleChange}
            ></textarea>
            {/* @csrf */}
            <div className="row mt-2 px-0 justify-content-end col-12">
                <input
                    type="button"
                    value="cancel"
                    onClick={() => {}}
                    className="btn-lg btn-secondary button cancel mr-1"
                />
                <input
                    type="submit"
                    value="send"
                    onClick={handleSubmit}
                    className="btn-lg btn-primary button send"
                />
            </div>
        </form>
    );
};
export default CommentForm;
