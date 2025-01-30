import React from "react";
import { AsideProfile } from "./LedrianInterfazSubComponents/AsideProfile";
import { HeaderNav } from "./LedrianInterfazSubComponents/HeaderNav";

export const Friends = () => {
  return (
    <section className="friends_container">
        <HeaderNav />
      <section className="content">
        <AsideProfile />
      </section>
    </section>
  );
};
