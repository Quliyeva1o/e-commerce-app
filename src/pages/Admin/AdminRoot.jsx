import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminHeader from '../../components/Admin/Header'

const AdminRoot = () => {

    return (
        <>
            <AdminHeader />
            <Outlet />
        </>
    )
}

export default AdminRoot
