import React from 'react'
import { NavbarFooterShell } from '../components/app-shell/index'
import { Outlet } from 'react-router-dom'
export function Component() {
    return (
        <NavbarFooterShell>
            <Outlet />
        </NavbarFooterShell>
    )
}