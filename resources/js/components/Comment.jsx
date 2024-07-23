import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import MiniAuthor from "./MiniAuthor";
import Options from "./Options";
const Comment = ({ comment, id }) => {
    const [displayed, setDisplayed] = useState(false);
    const [formDisplayed, setFormDisplayed] = useState(false);

    const [values, setValues] = useState({
        comment: comment.content
    });

    function DisplayOptions() {
        setDisplayed(!displayed);
    }
    function handleSubmit() {
        Inertia.patch(`/comments/update/${comment.id}`);
    }
    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value;
        setValues(values => ({
            ...values,
            [key]: value
        }));
    }
    return (
        <div className="card row col-12 m-1 py-2" id={id}>
            {displayed && !formDisplayed && (
                <Options
                    comment={comment}
                    id={id}
                    setFormDisplayed={setFormDisplayed}
                ></Options>
            )}
            {!formDisplayed && (
                <React.Fragment>
                    <div className="user row col-12 user-container">
                        <MiniAuthor
                            creation={comment}
                            title_style="comment-user mb-0"
                        >
                            <span className="text-secondary">
                                {comment.created_at.substring(0, 10)}
                            </span>
                        </MiniAuthor>
                    </div>
                    <p className="col-12 pl-5 py-2">{comment.content}</p>
                    <div onClick={DisplayOptions}>
                        <h1 className="options close position-absolute">
                            {!displayed && "..."}
                            {displayed && (
                                <div className="text-danger border-danger">
                                    &times;
                                </div>
                            )}
                        </h1>
                    </div>
                </React.Fragment>
            )}
            {formDisplayed && (
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="comment-update">
                            Editando comentario
                        </label>
                        <textarea
                            id="comment"
                            name="comment"
                            className="form-control no-resize"
                            value={values.comment}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <input
                        type="submit"
                        value="Cancel"
                        className="btn btn-secondary mr-1"
                    />
                    <input
                        type="submit"
                        value="Submit"
                        className="btn btn-primary"
                    />
                </form>
            )}
        </div>
    );
};

export default Comment;
