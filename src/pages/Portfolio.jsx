import React from 'react'
import { Helmet } from "react-helmet"
import useFetch from '../hooks/useFetch'

export default function Portfolio() {

    const { data, loading, error } = useFetch("http://localhost:5173/api/portfolio.json");

    if (loading) return;
    if (error) console.log(error);

    return(
        <React.Fragment>
            <Helmet>
                <title>Portfolio</title>
            </Helmet>

            <div className="content">
                <div className="w-full h-max pt-28 flex overflow-x-auto gap-6">

                    {data.map((project, i) => (
                        <div key={i} className="portfolio-card py-8 px-4 flex flex-col items-center gap-6 text-center">

                            <div className="flex justify-center">
                                <img src={project.img} alt={project.name} className="w-3/4" />
                            </div>
                            <h2 className="text-xl font-bold">{project.name}</h2>
                            <div className="tags">

                                {project.tags.map((tag, i) => (
                                    <span key={i}>
                                        <img src={tag.icon} alt={tag.name} width="16" height="16" />
                                        {tag.name}
                                    </span>
                                ))}

                            </div>
                            <p className="flex-1">{project.text}</p>
                            <a href={project.github} className="button">Show on github</a>

                        </div>
                    ))}

                </div>
            </div>
        </React.Fragment>
    )
}
