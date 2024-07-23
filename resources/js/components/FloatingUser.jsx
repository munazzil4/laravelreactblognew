import React from "react";
import UserCoin from './UserCoin.jsx'

function FloatingUser({ post, user }) {
    if (user.profile_picture == null) {
        user.profile_picture =
            "https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png";
    }

    return (
        <div className="card floating-user col-11 col-sm-11 col-md-4 col-lg-4 row m-2 h-25 shadow-sm py-2">
            <div className="author col-12 align-items-center">
                <UserCoin user={user}></UserCoin>

            </div>
        </div>
    );
}

export default FloatingUser;
