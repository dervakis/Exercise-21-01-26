import React from 'react'
import { useForm, type SubmitErrorHandler, type SubmitHandler } from 'react-hook-form';

type Item = {
    id: number
    title: string,
    price: number,
    quantity: number,
    details: string
    image: string,
}
function Form({ Onsubmit, onError }: { Onsubmit: SubmitHandler<Item>, onError: SubmitErrorHandler<Item> }) {
    const { register, handleSubmit } = useForm<Item>();

    return (
        <form className="w-full max-w-sm" onSubmit={handleSubmit(Onsubmit, onError)}>
            <div className=" md:items-center mb-6">
                <div className="m-4">
                    <label className="block text-gray-500 font-bold" >
                        Title
                    </label>
                    <input className="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700" type="text" {...register('title', { required: true })} />
                </div>

                <div className="m-4">
                    <label className="block text-gray-500 font-bold" >
                        Details
                    </label>
                    <textarea className="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700" {...register('details', { required: true })} />
                </div>

                <div className="m-4">
                    <label className="block text-gray-500 font-bold" >
                        Image Link
                    </label>
                    <input className="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700" type="text" {...register('image', { required: true })} />
                </div>

                <div className="m-4">
                    <label className="block text-gray-500 font-bold" >
                        Price
                    </label>
                    <input className="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700" type="number" {...register('price', { required: true })} />
                </div>

                <div className="m-4">
                    <label className="block text-gray-500 font-bold" >
                        Quantity
                    </label>
                    <input className="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700" type="number" {...register('quantity', { required: true })} />
                </div>
            </div>
            <div className="m-4 item-center">
                <button className='bg-red-400 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full' type="submit">
                    Add Item
                </button>
            </div>
        </form>
    )
}

export default Form