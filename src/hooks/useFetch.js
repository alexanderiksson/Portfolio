import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        if (!url) {
            setError(new Error('URL is required'));
            setLoading(false);
            return
        }

        fetch(url, {
            headers: {'Content-Type': 'application/json'}
        })
        .then(response => {
            if (!response.ok) {
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
