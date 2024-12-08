import React from 'react'
import { Helmet } from 'react-helmet-async'
import useFetch from '../hooks/useFetch'
import PortfolioCard from '../components/PortfolioCard';
import Loader from '../components/Loader';
import Error from '../components/Error';


export default function Portfolio() {

    const { data, loading, error } = useFetch(import.meta.env.VITE_PORTFOLIO_URL);

    if (loading) { return <Loader /> }
    if (error) { <Error msg="Failed to load projects" /> }

    return(
        <React.Fragment>
            <Helmet>
                <title>Portfolio - Alexander Eriksson</title>
            </Helmet>

            <div className="content">
                <section className="w-full flex flex-col items-center gap-6">
                    {(() => {
                        if (Array.isArray(data) && data.length > 0) {
                            return data.slice().reverse().map((project) => (
                                <PortfolioCard key={project.id} project={project} />
                            ))
                        } else {
                            return <p>No projects to display.</p>
                        }
                    })()}
                </section>
            </div>
        </React.Fragment>
    )
}
