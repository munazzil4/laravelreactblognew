import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Header from "../components/Header";
import PostCardContainer from "../components/PostCardContainer";
import CreateButton from "../components/CreateButton";

const Home = ({ user, posts }) => {
    if (user == null) {
        user = {
            name: "",
            email: ""
        };
    }

    return (
        <React.Fragment>
            <Header user={user}></Header>
            <Hero></Hero>
            <PostCardContainer posts={posts}></PostCardContainer>
            <CreateButton></CreateButton>
        </React.Fragment>
    );
};

export default Home;
