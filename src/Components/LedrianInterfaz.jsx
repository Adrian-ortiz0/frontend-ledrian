import React from 'react'
import "../styles.css";
import { HeaderNav } from './LedrianInterfazSubComponents/HeaderNav';
import { AsideProfile } from './LedrianInterfazSubComponents/AsideProfile';
import { Feed } from './LedrianInterfazSubComponents/Feed';
import { SuggestionsSection } from './LedrianInterfazSubComponents/SuggestionsSection';

export const LedrianInterfaz = () => {
  return (
    <main className='ledrianInterfaz'>
      <HeaderNav />
      <section className='content'>
        <AsideProfile />
        <Feed />
        <SuggestionsSection />
      </section>
    </main>
  )
}
