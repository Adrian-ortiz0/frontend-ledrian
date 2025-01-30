import React from 'react'
import { ProfileBanner } from './ProfileBanner'
import { ProfileNav } from './ProfileNav'
import { ProfilePosts } from './ProfilePosts'

export const ProfileFeed = () => {
  return (
    <div className='profile'>
        <ProfileBanner />
        <ProfileNav />
        <ProfilePosts />
    </div>
  )
}
