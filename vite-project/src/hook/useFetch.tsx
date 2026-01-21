import React, { useCallback, useEffect, useState } from 'react'

function useFetch() {
    // const [data, setData] = useState();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const fetchData = useCallback(async (url: string) => {
        setLoading(true);
        try {
            const ret = await fetch(url);
            // console.log(url)
            const res = await ret.json();
            // console.log(res)
            if (!ret.ok)
                throw new Error('Return Bad');
            return res;
        } catch (e) {
            if (e instanceof Error)
                setError(e.message);
            else setError('this is default error');
            throw error;
        } finally {
            setLoading(false);
        }
    }, [])
    // fetchData();
    // },[url])
    return { fetchData, loading, error };
}

export default useFetch