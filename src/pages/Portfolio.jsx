import React from 'react'
import { Helmet } from 'react-helmet-async'
import useFetch from '../hooks/useFetch'
import PortfolioCard from '../components/PortfolioCard';

export default function Portfolio() {

    const { data, loading, error } = useFetch(import.meta.env.VITE_PORTFOLIO_URL);

    if (loading) return;
    if (error) console.log(error);

    return(
        <React.Fragment>
            <Helmet>
                <title>Portfolio - Alexander Eriksson</title>
            </Helmet>

            <div className="content">
                <section className="w-full flex flex-col items-center gap-6">
                    {data.map((project) => (
                        <PortfolioCard key={project.id} project={project} />
                    ))}
                </section>
            </div>
        </React.Fragment>
    )
}
