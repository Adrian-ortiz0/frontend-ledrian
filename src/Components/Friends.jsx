import React from "react";
import { AsideProfile } from "./LedrianInterfazSubComponents/AsideProfile";
import { HeaderNav } from "./LedrianInterfazSubComponents/HeaderNav";
import { FriendsFeed } from "./FriendsComponents/FriendsFeed";
import { SuggestionsSection } from "./LedrianInterfazSubComponents/SuggestionsSection";

export const Friends = () => {
  return (
    <section className="friends_container">
        <HeaderNav />
      <section className="content">
        <AsideProfile />
        <FriendsFeed />
        <SuggestionsSection />
      </section>
    </section>
  );
};
