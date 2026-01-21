import React, { type ReactNode } from 'react'

interface PropType {
    children?: ReactNode,
    image: string,
    title: string,
    price: number,
    details: string,
    quantity: number
}
function Card({ image, title, price = 0, details, quantity, children }: PropType) {
    return (
        <div className='relative w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl bg-teal-200 shadow-lg rounded'>
            <div className='h-50'>
                <img className='w-full h-full' src={"/image.png"} alt="Sunset in the mountains" />
            </div>

            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title || 'Title'}</div>
                <p className="text-gray-700 text-base">
                    {details || 'NA'}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{'₹' + price}</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{'Availabe :' + quantity}</span>
            </div>
            {children}
        </div>
    )
}

export default Card