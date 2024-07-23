import React from "react";
import MiniAuthor from "./MiniAuthor";
import { Inertia } from "@inertiajs/inertia";

function Modal({ post, csrf_token, displayed, setDisplayed }) {
    function handleClickDelete(post) {
        Inertia.post(`/posts/delete/${post.id}`, {
            onSuccess: () => {
                // setDisplayed(false);
            },
            _token: csrf_token,
        });
        setDisplayed(false);
    }
    function handleClickHide() {
        setDisplayed(false);
    }
    return (
        <React.Fragment>
            {displayed && (
                <div
                    className="container-fluid modal min-vh-100 justify-content-center align-items-center"
                    role="dialog"
                >
                    <div
                        className="custom-modal min-vh-100 col-12"
                        onClick={handleClickHide}
                    ></div>
                    <div className="modal-content py-2  col-10 col-md-8 col-lg-6 col-xl-5">
                        <div className="modal-content__header row justify-content-between pr-3 pr-sm-4 pr-md-2">
                            <h3 className="modal-title col-11 pb-2">
                                You want to delete this post?
                            </h3>
                            <button
                                className="close row align-items-top pr-3 pt-1"
                                onClick={handleClickHide}
                            >
                                <span>&times;</span>
                            </button>
                        </div>

                        <div className="modal-content__postpreview row card m-0 pl-4 pr-2 py-3">
                            <h5>{post.title}</h5>
                            <MiniAuthor creation={post}></MiniAuthor>
                        </div>

                        <div className="modal-buttoncontainer row justify-content-center pt-3">
                            <input
                                className="btn-secondary btn cancel button col-11 col-sm-5"
                                type="button"
                                value="nah"
                                onClick={handleClickHide}
                            />
                            <input
                                className="btn-primary btn send button col-11 col-sm-5"
                                type="button"
                                value="yes!"
                                onClick={() => handleClickDelete(post)}
                            />
                        </div>
                    </div>
                </div>
            )}
        </React.Fragment>
    );
}

export default Modal;
