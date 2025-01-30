import React from "react";

export const FriendsCard = () => {
  return (
    <div className="friends_card">
        <img src="/public/profile_icon.png" alt="" width={30} height={30} />
        <div>
          <p>Laura Rodriguez</p>
          <label htmlFor="username">@itslau_</label>
        </div>
        <button>Unfollow</button>
    </div>
  );
};
