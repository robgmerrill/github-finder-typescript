import React from 'react'
import { useState, useEffect } from 'react'
import UserItem from './UserItem';
import { User } from '../../../types';

function UserResults() {
    const [users, setUsers] = useState<User[] | null>(null)
    const [loading, setLoading] = useState(true)
    console.log(users)

  useEffect(() => {
 
    const getData = async() => {
        const res = await fetch(`${process.env.REACT_APP_GITHUB_URL}users`)
        const data = await res.json();
        setUsers(data)
        setLoading(false)
      }

    getData();
  }, [])


  if (loading) {
    return <p>Loading...</p>
  }
  return (
    <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
      {Array.isArray(users) && users.map(user => {
        console.log("USER", user.login);
        return (
            <UserItem key={user.id} user={user} />
        )
      })}
    </div>
  )
}

export default UserResults
