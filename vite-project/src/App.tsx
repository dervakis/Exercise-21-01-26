import { useEffect, useState, type MouseEventHandler } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './common/Navbar'
import Card from './common/Card'
import { useForm, type SubmitErrorHandler, type SubmitHandler } from 'react-hook-form'
import Form from './common/Form'
import { Siren, Tag } from 'lucide-react'
import Tiles from './common/Tiles'

type Item = {
  id: number,
  title: string,
  price: number,
  quantity: number,
  details: string
  image: string,
}

type Tile = {
  id: number,
  heading: string,
  value: number
}



function App() {
  const [items, SetItems] = useState<Item[]>([]);
  const [errors, setErrors] = useState<Object>();


  useEffect(() => {
    const itemsAsStr = localStorage.getItem('items');
    console.log(itemsAsStr);
    if (itemsAsStr) {
      SetItems(JSON.parse(itemsAsStr!))
    }
    // console.log(JSON.parse(itemsAsStr!) as Item[]);
  }, [])

  const SaveItem = (obj: Item) => {
    obj.id = items.length + 1;
    localStorage.setItem('items', JSON.stringify([...items, obj]));
    const itemsAsStr = localStorage.getItem('items');
    console.log(itemsAsStr);
    SetItems(i => [...i, obj]);
  }

  const DeleteItem = (key: number) =>{
    localStorage.setItem('items', JSON.stringify(items.filter(i=> i.id !== key)));
    SetItems(i => i.filter(o => o.id !== key));
  }
  const Onsubmit: SubmitHandler<Item> = (i) => SaveItem(i);
  const onError: SubmitErrorHandler<Item> = (e) => setErrors(e);

  const tiles: Tile[] = [
    {id:1, heading:'All Product', value: items.length},
    {id: 2, heading:'Low Stock Alert', value: items.filter(i => i.quantity < 6).length},
    {id: 3, heading:'Premium Item', value: items.filter(i => i.price > 30000).length}
  ];
  return (
    <>
      <Navbar />
      <div className='flex'>

        <div className="w-2/3 h-150 container justify-between p-4 overflow-y-auto">
        <div className='flex justify-around mb-2'>

        {
          tiles.map(t => 
            <Tiles heading={t.heading} value={t.value} key={t.id}/>      
          )
        }
        </div>
          <h1 className="text-3xl font-bold mb-6 text-gray-800">Items</h1>
          <div className="grid grid-cols-3 gap-4">          {
            items.map(i =>
              <Card key={i.id} image={i.image} price={i.price} title={i.title} details={i.details} quantity={i.quantity}>
                <div className='absolute top-0 left-0 text-red-500'>
                  {i.price > 30000 && (
                    <div className='flex item-center font-bold'>
                      <Tag /> Premium
                    </div>
                  )}

                  {i.quantity < 6 && (
                    <div className='flex item-center font-bold'>
                      <Siren /> Limited Deal
                    </div>
                  )}
                </div>
                  <div className='mb-10'></div>
                <div className='absolute inset-x-0 bottom-0'>
                  <button className='bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' onClick={(e: React.MouseEvent<HTMLButtonElement>) => DeleteItem(i.id) }>
                    Delete
                </button>
                </div>
              </Card>
            )
          }
          </div>

        </div>
        <div className='w-1/3 justify-items-center'>
          <h1 className="text-3xl font-bold mb-6 text-gray-800">New Entry</h1>

          <Form Onsubmit={Onsubmit} onError={onError} />
        </div>
      </div>

    </>
  )
}

export default App
