import { InertiaLink } from "@inertiajs/inertia-react";
import React from "react";

function SearchForm() {
    return (
        <form
            action="submit"
            className="header-form row d-none d-md-flex col-sm-3 col-md-4 col-lg-4 col-xl-3"
        >
            <input
                className="header-form__text form-control col-sm-8 col-sm-6 col-md-8"
                type="text"
                placeholder="Search"
            />
            <InertiaLink
                href="/"
                className="col-sm-4 col-md-4 col-lg-4 px-sm-1"
            >
                <input
                    className="header-form__button btn btn-primary form-control"
                    type="button"
                    value="Go!"
                />
            </InertiaLink>
        </form>
    );
}

export default SearchForm;
