import React, { useContext, useState, type ReactNode } from 'react'
import { UserContext } from '../context/UserContext'

interface PropType {
    children?: ReactNode,
    images: string[],
    title: string,
    price: number,
    description: string,
    stock: number,
    category: string
}
function Card({ images, title, price = 0, description, stock, category, children }: PropType) {
    const {mod} = useContext(UserContext);
    return (
        <div className={`relative w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl ${mod ? 'bg-gray-300' : 'bg-teal-200'} shadow-lg rounded`}>
            <div className='h-50'>
                <img className='w-full h-full' src={images[0] || "/images.png"} alt="Sunset in the mountains" />
            </div>

            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title || 'Title'}</div>
                <p className="text-gray-700 text-base">
                    {description || 'NA'}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{'₹' + price}</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{'Availabe :' + stock}</span>
            </div>
            {children}
        </div>
    )
}

export default Card