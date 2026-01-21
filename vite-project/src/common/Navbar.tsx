import { ShoppingCart } from 'lucide-react'
import React from 'react'

function Navbar() {
    return (
        <nav className='relative bg-gray-800'>
            <div className="relative flex h-16 items-center justify-between">
                <div className="flex shrink-0 text-white gap-2 font-bold items-center">
                    <ShoppingCart /> E-Com
                </div>
                <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                        <a aria-current="page" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white">Dashboard</a>
                        <a className="rounded-md px-3 py-2 text-sm font-medium text-gray-300">About Us</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar