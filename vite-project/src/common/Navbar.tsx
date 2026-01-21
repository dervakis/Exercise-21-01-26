import { Moon, MoonStar, Search, ShoppingCart, Sun } from 'lucide-react'
import React, { useContext, useState, type ChangeEvent } from 'react'
import { UserContext } from '../context/UserContext'

function Navbar({handleSearch}: {handleSearch: (q:string)=>void}) {
    const { name, mod, setMode } = useContext(UserContext);
    const [searchText, setSearchText] = useState<string>();
    const handelChange = (e:ChangeEvent<HTMLInputElement>) =>{
        setSearchText(e.target.value);
    }
    return (
        <nav className={`relative ${mod ? 'bg-sky-300' : 'bg-gray-700'}`}>
            <div className="relative flex h-16 items-center justify-between">
                <div className={`flex shrink-0 ${mod ? 'text-black' : 'text-white'} gap-2 font-bold items-center`}>
                    <ShoppingCart /> E-Com
                </div>
                <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                        <div>
                            <input className="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700" type="text" value={searchText} onChange={handelChange} />
                        </div>
                        <div className='px-3 py-2 text-sm font-medium text-white'>
                        <Search onClick={()=>handleSearch(searchText || '')}/>
                        </div>
                        <h1 className='px-3 py-2 text-sm font-medium text-white'>{name}</h1>
                        {
                            mod ? (
                                <button onClick={() => setMode?.(0)}>
                                    <Sun className='text-white' />
                                </button>
                            ) : (

                                <button onClick={() => setMode?.(1)}>
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