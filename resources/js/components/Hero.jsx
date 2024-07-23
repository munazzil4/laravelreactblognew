import React from "react";
import Button from "./Button";
// import "../assets/styles/index.css";
import { InertiaLink } from "@inertiajs/inertia-react"

function Hero() {
    return (
        <div className="row hero border-top border-bottom shadow-sm col-xl py-5 px-5 justify-content-around align-items-center h-75">
            <div className="image-container p-3 col-lg-5 order-lg-2 d-flex justify-content-center">
                <img
                    className="col-lg-10 col-sm-4 col-md-4 d-none d-lg-block"
                    src="https://ingeniolab.co/wp-content/uploads/2020/05/ilustracion-conceptual-blogging_114360-851.jpg"
                    alt=""
                />
            </div>
            <div className="col-lg-5 order-lg-1 ">
                <h1 className="display-5">Laravel Blog, your confidence blog</h1>
                <p className="lead">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    senectus, orci posuere ante magnis habitasse sodales dui
                    mauris, massa sagittis diam dapibus tincidunt venenatis
                    primis. Vivamus commodo vel morbi imperdiet ligula torquent
                    molestie venenatis etiam, rhoncus habitant mauris odio est
                    dictumst id natoque, blandit dui aenean euismod pellentesque
                    magna facilisi convallis.
                </p>
                <div className="row buttons ">
                    <InertiaLink href="/login" className="col">
                        <Button btn_style="btn-secondary" btn_value="Login"className="col-12">
                            Login
                        </Button>
                    </InertiaLink>
                    <InertiaLink href="/register" className="col">
                        <Button className="col-12" btn_style="btn-primary" btn_value="Signup">Signup</Button>
                    </InertiaLink>
                </div>
            </div>
        </div>
    );
}
export default Hero;
