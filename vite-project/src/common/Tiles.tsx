import React from 'react'

function Tiles({heading, value}: {heading:string, value:number}) {
  return (
    <div className='w-1/5 h-1/5 bg-yellow-200 rounded-lg p-4 place-content-center'>
        <p className='text-gray-700 font-bold mb-4'>{heading || 'Deafult'}</p>

        <strong className='text-lg'>{value || 0}</strong>
    </div>
  )
}

export default Tiles