import React from "react";
import { Suggestions } from "./Suggestions";
import { Stories } from "./Stories";

export const SuggestionsSection = () => {
  return (
    <section className="suggestions-section-container">
      <Stories />
      <Suggestions />
    </section>
  );
};
