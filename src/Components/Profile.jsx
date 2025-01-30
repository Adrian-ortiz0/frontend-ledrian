import React from 'react'
import { HeaderNav } from '../Components/LedrianInterfazSubComponents/HeaderNav'    
import { AsideProfile } from './LedrianInterfazSubComponents/AsideProfile'
import { SuggestionsSection } from './LedrianInterfazSubComponents/SuggestionsSection'
import { ProfileFeed } from './PorfileComponents/ProfileFeed'

export const Profile = () => {
  return (
    <section className='profile_container'>
        <HeaderNav />
        <section className='content'>
            <AsideProfile />
            <ProfileFeed />
            <SuggestionsSection />
        </section>
    </section>
  )
}
