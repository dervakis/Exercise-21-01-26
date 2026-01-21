import { Moon, MoonStar, ShoppingCart, Sun } from 'lucide-react'
import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

function Navbar() {
    const { name, mod, setMode } = useContext(UserContext);
    return (
        <nav className={`relative ${mod ? 'bg-sky-300': 'bg-gray-700'}`}>
            <div className="relative flex h-16 items-center justify-between">
                <div className={`flex shrink-0 ${mod ? 'text-black' : 'text-white'} gap-2 font-bold items-center`}>
                    <ShoppingCart /> E-Com
                </div>
                <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                        <h1 className='px-3 py-2 text-sm font-medium text-white'>{name}</h1>
                        {
                            mod ? (
                                <button onClick={()=>setMode?.(0)}>
                                    <Sun className='text-white' />
                                </button>
                            ) : (

                                <button onClick={()=>setMode?.(1)}>
                                    <MoonStar className='text-white' />
                                </button>
                            )
                        }


                        <a aria-current="page" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white">Dashboard</a>
                        <a className="rounded-md px-3 py-2 text-sm font-medium text-gray-300">About Us</a>

                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar