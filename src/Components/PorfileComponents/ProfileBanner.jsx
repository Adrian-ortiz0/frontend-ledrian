import React from "react";
import { useNavigate } from "react-router";

export const ProfileBanner = () => {

const navigate = useNavigate();

  return (
    <div className="profile_banner_container">
      <div className="profile_banner"></div>
      <div className="profile_info">
        <div className="profile_img">
          <button>
            <img
              src="/public/profile_icon.png"
              alt=""
              width={100}
              height={100}
            />
          </button>
          <div>
            <h1>Adrian Ortiz</h1>
            <label htmlFor="">@adrian_flac</label>
          </div>
        </div>
        <div className="profile_bio">
          <div className="buttons_bio">
            <button onClick={() => navigate("edit")}>Edit Profile</button>
            <button>Add Post</button>
          </div>
          <div className="follows_bio">
            <p>0 posts</p>
            <p>386 followers</p>
            <p>810 following</p>
          </div>
        </div>
      </div>
    </div>
  );
};
