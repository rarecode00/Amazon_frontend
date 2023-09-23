import React from 'react'

interface User {
    name: string;
}

export function Component() {
    let user: User | null = null
    const userJson = localStorage.getItem('user');
    if (userJson) user = JSON.parse(userJson)
    return (
        <>
            <div>this is the dashboard</div>
            <div>{user && user?.name}</div>
        </>
    )
}