import React, {useEffect} from "react";
import Header from "../components/Header";
import UserCoin from "../components/UserCoin";
import PostCardContainer from "../components/PostCardContainer";
import CreateButton from '../components/CreateButton'
import { Inertia } from "@inertiajs/inertia";


function User({ user, posts }) {
    
    if (user.profile_picture == null) {
        user.profile_picture =
            "https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png";
    }
    if (posts.lenght <= 0) {
        posts = [];
    }
    return (
        <div className="container-fluid mt-5">
            <Header user={user}></Header>
            <UserCoin user={user}></UserCoin>
            <div className="mt-5 pt-4">
                <h3>User Posts</h3>
                <PostCardContainer posts={posts}></PostCardContainer>
            </div>
            <CreateButton></CreateButton>
        </div>
    );
}
export default User;
