import React from 'react'
import { useState, useEffect } from 'react'

interface User {
    login: string;
    // add any other properties of the user object here
  }

function UserResults() {
    const [users, setUsers] = useState<User[] | null>(null)
    const [loading, setLoading] = useState(true)
    console.log(users)

  useEffect(() => {
 
    const getData = async() => {
        const res = await fetch(`${process.env.REACT_APP_GITHUB_URL}users`, {
            headers: {
                Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
            } 
        })
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
            <div>hi</div>
        )
      })}
    </div>
  )
}

export default UserResults
