import React from "react";
import { useNavigate } from "react-router";

export const AsideProfile = () => {

  const navigate = useNavigate();

  return (
    <aside className="aside_profile-container">
      <div className="aside_profile-options">
        <button onClick={() => navigate("/profile")}>
          <img src="/public/profile_icon.png" alt="" width={20} height={20} />
          Adrian Ortiz
        </button>
        <button onClick={() => navigate("/home")}>
          <img src="/public/home_icon.png" alt="" width={20} height={20} />
          Home
        </button>
        <button onClick={() => navigate("/friends")}>
          <img src="/public/friends_icon.png" alt="" width={20} height={20} />
          Friends
        </button>
        <button>
        <img src="/public/tabs_icon.png" alt="" width={20} height={20} />
            Create</button>
        <button>
        <img src="/public/setting_icon.png" alt="" width={20} height={20} />
            Settings</button>
        <button>
        <img src="/public/conversation_icon.png" alt="" width={20} height={20} />
            Messages</button>
        <button>
        <img src="/public/more_icon.png" alt="" width={20} height={20} />
            More</button>
      </div>
    </aside>
  );
};
