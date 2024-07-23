import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";

function CreateButton() {
    return (
        <InertiaLink href="/posts/create" className="button-link shadow">
            <div className="createButton bottom-right btn-primary row justify-content-center align-items-center position-fixed m-0 rounded-circle m-3 shadow">
                <h1 className="mb-1 plus">+</h1>
                <div className="internalCircle rounded-circle"></div>
            </div>
            <div className="createPost bottom-right p-3 position-fixed row align-items-center m-3 mr-5 col-3 alert-primary">
                <h5 className="createPost-text">Create a new post</h5>
            </div>
        </InertiaLink>
    );
}

export default CreateButton;
