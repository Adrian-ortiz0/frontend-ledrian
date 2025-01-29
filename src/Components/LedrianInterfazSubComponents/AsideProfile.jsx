import React from "react";

export const AsideProfile = () => {
  return (
    <aside className="aside_profile-container">
      <div className="aside_profile-options">
        <button>
          <img src="/public/profile_icon.png" alt="" width={20} height={20} />
          Adrian Ortiz
        </button>
        <button>
          <img src="/public/home_icon.png" alt="" width={20} height={20} />
          Home
        </button>
        <button>
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
