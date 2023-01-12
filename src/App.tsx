import React, { useEffect, useState } from 'react'
import './App.css'
import { TUser } from '../assets/types'
import { Users } from './components/Users'

const Content: React.FC< {users: TUser[], isLoading: boolean, error: string} > = ({ users, isLoading, error }) => {
  if (!users && !error) return
  if (error) return <div>{error}</div>
  if (isLoading) return <div>loading...</div>
  return <Users users={users} />
}

export const App = () => {
  const [users, setUsers] = useState<TUser[]>()
  const [fetchError, setFetchError] = useState<string>()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true)
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await res.json()
        setUsers(data)
        setIsLoading(false)
      } catch (err) {
        setFetchError(err)
        setIsLoading(false)
      }
    })()
  }, [])

  return (
    <div className="wrapper">
      <Content users={users} isLoading={isLoading} error={fetchError} />
    </div>
  )
}
