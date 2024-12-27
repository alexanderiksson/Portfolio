import { useState, useEffect } from 'react';
import client from './contentfulClient';

const useContentful = (contentType, query = {}) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);

                const response = await client.getEntries({
                content_type: contentType,
                ...query,
                });

                setData(response.items);
            } catch (err) {
                console.error('Error fetching Contentful data:', err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { data, loading, error };
};

export default useContentful;
