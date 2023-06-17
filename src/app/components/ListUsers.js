import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const ListUsers = () => {
    const { value, loading } = useSelector((state) => state.counter)
    const users = value.map((user) => {
        return (
            <div key={user.id}>
                <p>{user.id}</p>
                <p>{user.name}</p>
                <p>{user.email}</p>
                <p>{user.phone}</p>
            </div>
        )
    })
    return (
        <div>{users}</div>
    )
}

export default ListUsers
