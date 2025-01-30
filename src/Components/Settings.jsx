import React from 'react'
import { HeaderNav } from './LedrianInterfazSubComponents/HeaderNav'
import { AsideProfile } from './LedrianInterfazSubComponents/AsideProfile'
import { SettingsFeed } from './SettingsComponents/SettingsFeed'

export const Settings = () => {
  return (
    <section className='settings_background'>
        <HeaderNav/>
        <section className='content'>
            <AsideProfile />
            <SettingsFeed />
        </section>
    </section>
    
  )
}
