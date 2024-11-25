import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        fetch(url, {
            headers: {'Content-Type': 'application/json'}
        })
        .then(response => {
            if (!response) {
                throw new Error(response.status)
            }
            return response.json()
        })
        .then(data => {
            setData(data)
            setLoading(false)
        })
        .catch(err => {
            setError(err)
            setLoading(false)
        })

    }, [url])

    return { data, loading, error }

}

export default useFetch
