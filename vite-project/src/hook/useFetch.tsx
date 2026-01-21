import React, { useEffect, useState } from 'react'

function useFetch(url:string) {
    const [data, setData] = useState();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    useEffect(()=>{
        const fetchData = async ()=>{
            setLoading(true);
            try{
                const ret = await fetch(url);
                console.log(url)
                const res = await ret.json();
                console.log(res)
                if(!ret.ok)
                    throw new Error('Return Bad');
                setData(res);
            }catch(e){
                if(e instanceof Error)
                    setError(e.message);
                else setError('this is default error');
            }finally{
               setLoading(false); 
            }
        }
        fetchData();
    },[url])
  return {data, loading, error};
}

export default useFetch