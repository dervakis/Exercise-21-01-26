import { LucideLoader, Loader as MyLoader } from 'lucide-react'
import React from 'react'

function Loader() {
  return (
    <div className='fixed flex z-50 inset-0 place-items-center justify-center h-screen'>
        <MyLoader className='animate-spin w-12 h-12 text-teal-700'/>
    </div>
  )
}

export default Loader