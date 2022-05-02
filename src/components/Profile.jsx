import React from 'react';
import './Home.css'

const Profile = ({profileList}) => {
  return (
    <>
        <aside>
            <img src={profileList.avatar_url} alt='My Picture'/>
            <h3>
              {profileList.login}
            </h3>
            <h4 className='name name-2'>
              {profileList.name}
            </h4>
            <p className='bio'>
              {profileList.bio}
            </p>
            <button>
              Follow
            </button>
      </aside>
    </>
  )
}

export default Profile