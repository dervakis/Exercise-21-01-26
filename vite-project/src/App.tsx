import { useContext, useEffect, useState, type ChangeEvent, type MouseEventHandler } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './common/Navbar'
import Card from './common/Card'
import { useForm, type SubmitErrorHandler, type SubmitHandler } from 'react-hook-form'
import Form from './common/Form'
import { Siren, Tag } from 'lucide-react'
import Tiles from './common/Tiles'
import { UserContext, type Mode } from './context/UserContext'
import Loader from './common/Loader'
import useFetch from './hook/useFetch'

type Item = {
  id: number,
  title: string,
  price: number,
  stock: number,
  description: string
  images: string[],
  category: string
}

type Tile = {
  id: number,
  heading: string,
  value: number
}



function App() {
  const [items, SetItems] = useState<Item[]>([]);
  const [errors, setErrors] = useState<Object>();
  const { fetchData, error, loading } = useFetch();
  const [category, setCategory] = useState([]);
  const [catname, setCatname] = useState<string>();




  useEffect(() => {
    const apiFetch = async () => {
      let data = await fetchData('https://dummyjson.com/products');
      if ('products' in data) {
        const product = data.products as Item[];
        SetItems(product);
      }
      data = await fetchData('https://dummyjson.com/products/category-list');
      setCategory(data);

    }
    apiFetch();
  }, [])

  const handleSelect = async (e:ChangeEvent<HTMLSelectElement>) =>{
    let selected = e.target.value;
    let data = await fetchData(`https://dummyjson.com/products/category/${selected}`)
    if ('products' in data) {
      const product = data.products as Item[];
      SetItems(product);
    }
  }

  const tiles: Tile[] = [
    { id: 1, heading: 'All Product', value: items.length },
    { id: 2, heading: 'Low Stock Alert', value: items.filter(i => i.stock < 30).length },
    { id: 3, heading: 'Premium Item', value: items.filter(i => i.price > 1500).length }
  ];
  return (
    <>
      <Navbar />
      {loading && <Loader/>}
      <div className='flex'>

        <div className="w-full h-150 container justify-between p-4 overflow-y-auto">
          <div className='flex justify-around mb-2'>

            {
              tiles.map(t =>
                <Tiles heading={t.heading} value={t.value} key={t.id} />
              )
            }
          </div>
          <div className="flex text-4xl justify-center font-bold mb-6 text-gray-800">
            Items •
            <div className='mx-4'>
              <select value={catname} onChange={handleSelect} className="px-3 py-2.5 bg-neutral-secondary-medium border text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body">
                <option key="All" value="All"> All</option>
                {category.map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">          {
            items.map(i =>
              <Card key={i.id} images={i.images} price={i.price} title={i.title} description={i.description} stock={i.stock} category={i.category}>
                <div className='absolute top-0 left-0 text-red-500'>
                  {i.price > 30000 && (
                    <div className='flex item-center font-bold'>
                      <Tag /> Premium
                    </div>
                  )}

                  {i.stock < 6 && (
                    <div className='flex item-center font-bold'>
                      <Siren /> Limited Deal
                    </div>
                  )}
                </div>
                <div className='mb-10'></div>
                <div className='absolute inset-x-0 bottom-0'>
                  <div className='bg-blue-400 w-1/3 place-self-center hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>
                    {i.category}
                  </div>
                </div>
              </Card>
            )
          }
          </div>

        </div>
        {/* <div className='w-1/3 justify-items-center'>
          <h1 className="text-3xl font-bold mb-6 text-gray-800">New Entry</h1>

          <Form Onsubmit={Onsubmit} onError={onError} />
        </div> */}
      </div>

    </>
  )
}

export default App
