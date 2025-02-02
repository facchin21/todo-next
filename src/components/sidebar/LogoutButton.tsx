'use client'

import { signIn, signOut, useSession } from 'next-auth/react'
import React from 'react'
import { CiLogout } from 'react-icons/ci'
import { IoShieldOutline } from 'react-icons/io5';

export function LogoutButton() {

    const { data: session, status } = useSession();

    if (status === 'loading') {
        return (
            <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
                <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                    <IoShieldOutline />
                    <span className="group-hover:text-gray-700">Espere...</span>
                </button>
            </div>
        )
    }

    if (status === 'unauthenticated') {
        return (
            <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
                <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
                onClick={() => signIn()}>
                    <CiLogout />
                    <span className="group-hover:text-gray-700">Ingresar a la app</span>
                </button>
            </div>
        )
    }

    return (
        <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
            <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group
            transition-all duration-300 hover:text-red-500"
            onClick={() => signOut()}>
                <CiLogout />
                <span className="group-hover:text-gray-700">Logout</span>
            </button>
        </div>
    )
}
