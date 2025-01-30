import React from "react";
import { useNavigate } from "react-router";

export const ProfileBanner = ({usuario}) => {

const navigate = useNavigate();

  return (
    <div className="profile_banner_container">
      <div className="profile_banner"></div>
      <div className="profile_info">
        <div className="profile_img">
          <button>
            <img
              src={usuario.photo}
              alt=""
              width={100}
              height={100}
            />
          </button>
          <div>
            <h1>{usuario.name} {usuario.lastname}</h1>
            <label htmlFor="">{usuario.username}</label>
          </div>
        </div>
        <div className="profile_bio">
          <div className="buttons_bio">
            <button onClick={() => navigate("edit")}>Edit Profile</button>
            <button>Add Post</button>
          </div>
          <div className="follows_bio">
            <p>{usuario.publications.length} posts</p>
            <p>{usuario.followers.length} followers</p>
            <p>{usuario.following.length} following</p>
          </div>
        </div>
      </div>
    </div>
  );
};
