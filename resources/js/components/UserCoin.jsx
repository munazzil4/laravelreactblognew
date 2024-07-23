import React from 'react'
const UserCoin = ({ user }) => {
    return (
        <React.Fragment>
            <div
                className="image-container col-12 col-md-12 col-lg-12row justify-content-center m-0 p-0"
                id="profilepic_container"
            >
                <div className="author-profile-pic-container d-flex justify-content-center p-2 ">
                    <img
                        src={user.profile_picture}
                        alt="Profile picture from user"
                        id="profilepic"
                        className="img-thumbnail author-profile-pic rounded-circle"
                    />
                </div>
            </div>
            <div className="author-name col-12 p-0">
                <h2 className="author-nickname card-title text-center col-12">
                    {user.nickname}
                </h2>
                <div
                    href=""
                    className="author-name card-text text-center col-12 p-0"
                >
                    <h5 className="">{user.name}</h5>
                </div>
            </div>
        </React.Fragment>
    );
};
export default UserCoin;
