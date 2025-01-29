import React from 'react'
import { SearchInput } from './SearchInput'
import { Nav } from './Nav'
import { NavProfile } from './NavProfile'

export const HeaderNav = () => {
  return (
    <header className='header_nav-container'>
        <SearchInput />
        <Nav />
        <NavProfile />
    </header>
  )
}
