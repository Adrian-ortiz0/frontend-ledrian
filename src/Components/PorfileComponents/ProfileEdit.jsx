import React from "react";
import { AsideProfile } from "../LedrianInterfazSubComponents/AsideProfile";
import { HeaderNav } from "../LedrianInterfazSubComponents/HeaderNav";
import { ProfileEditForm } from "./ProfileEditForm";
import { Suggestions } from "../LedrianInterfazSubComponents/Suggestions";
import { SuggestionsSection } from "../LedrianInterfazSubComponents/SuggestionsSection";

export const ProfileEdit = () => {
  return (
    <div className="profile_container">
      <HeaderNav />
      <section className="content">
        <AsideProfile />
        <ProfileEditForm />
        <SuggestionsSection />
      </section>
    </div>
  );
};
