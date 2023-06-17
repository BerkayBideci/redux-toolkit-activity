"use client"
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers } from './features/counter/counterSlice'
import ListUsers from './components/ListUsers'

export default function Counter() {
  const { value, loading } = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://jsonplaceholder.typicode.com/users")
      const data = await response.json()
      dispatch(fetchUsers(data))
    }
    fetchData()
  }, [])

  if (loading) {
    return (
      <h1>Loading...</h1>
    )
  }
  console.log(value)
  return (
    <div>
      <div>
        {!loading && <ListUsers />}
      </div>
    </div>
  )
}