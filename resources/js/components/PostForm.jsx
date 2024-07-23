import React, { useState, useEffect } from "react";
import { Inertia } from "@inertiajs/inertia";

import Button from "./Button";

function PostForm({ post }) {
    // let data = new FormData();
    // TODO

    const [values, setValues] = useState({
        title: "",
        body: "",
        file: "",
    });

    const [success, setSuccess] = useState(false);

    if (post !== undefined) {
        useEffect(() => {
            setValues((values) => ({
                ...values,
                title: post.title,
                body: post.body,
                file: post.file,
            }));
            console.log(values);
        }, [post.title, post.body, post.file]);
    }

    function handleSubmit(e) {
        e.preventDefault();
        Inertia.post("/posts", values, {
            onSuccess: () => {
                setSuccess(true);
                setTimeout(() => setSuccess(false), 10000);
            },
        });
    }
    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));
        // TODO
        // data.append(`${key}`, value || "");
    }
    function handleHide(setStatus) {
        setStatus(false);
    }
    return (
        <React.Fragment>
            {success && (
                <div
                    className="alert alert-success"
                    onClick={() => handleHide(setSuccess)}
                >
                    Post created succesfully
                </div>
            )}
            <form
                className="table-bordered bg-white p-3 col-12 col-lg-5 col-md-6 display-flex justify-content-centermax-vh-100"
                onSubmit={handleSubmit}
            >
                <div>
                    <div className="form-group">
                        <label className="">Title</label>
                        <input
                            className="form-control"
                            required={true}
                            type="text"
                            placeholder="title"
                            value={values.title}
                            onChange={handleChange}
                            id="title"
                        />
                    </div>
                    <div className="form-group">
                        <label className="">Content</label>
                        <textarea
                            id="body"
                            className="form-control no-resize"
                            name=""
                            value={values.body}
                            onChange={handleChange}
                            required={true}
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Image (optional)</label>
                        <br />
                        <input
                            type="file"
                            id="file"
                            value={values.file}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group"></div>
                    <Button
                        btn_style="send btn-primary mb-2"
                        btn_value="Send"
                    ></Button>
                </div>
            </form>
        </React.Fragment>
    );
}

export default PostForm;
