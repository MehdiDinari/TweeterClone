import React from 'react'

export function UserLink(props) {
  const { username } = props
  
  if (!username) return props.children || null; // Protection si username est null
  
  const handleUserLink = (event) => {
    window.location.href = `/profiles/${username}`
  }
  
  return (
    <span className='pointer' onClick={handleUserLink}>
      {props.children}
    </span>
  )
}

export function UserDisplay(props) {
  const { user, includeFullName } = props
  
  if (!user) return null; // Protection si user est null
  
  const nameDisplay = includeFullName === true ? `${user.first_name || ''} ${user.last_name || ''} ` : null
  
  return (
    <React.Fragment>
      {nameDisplay}
      <UserLink username={user.username}>@{user.username}</UserLink>
    </React.Fragment>
  )
}

export function UserPicture(props) {
  const { user } = props
  
  if (!user || !user.username) return null; // Protection si user ou user.username est null
  
  return (
    <UserLink username={user.username}>
      <span className='mx-1 px-3 py-2 rounded-circle bg-dark text-white'>
        {user.username[0]}
      </span>
    </UserLink>
  )
}