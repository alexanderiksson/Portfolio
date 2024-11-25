import React from 'react'
import { Helmet } from "react-helmet"
import useFetch from '../hooks/useFetch'

export default function Portfolio() {

    const { data, loading, error } = useFetch("http://localhost:5173/api/portfolio.json");

    console.log(data)

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

                            <div className="h-32 overflow-hidden">
                                <img src={project.img} alt={project.name} className="h-full" />
                            </div>
                            <h2 className="text-xl">{project.name}</h2>
                            <div className="tags">

                                {project.tags.map((tag, i) => (
                                    <span key={i} className="mx-4">
                                        <img src={tag.icon} alt={tag.name} width="16" height="16" />
                                        {tag.name}
                                    </span>
                                ))}

                            </div>
                            <p className="flex-1">{project.text}</p>
                            <a href={project.github}>Show on github</a>

                        </div>
                    ))}

                </div>
            </div>
        </React.Fragment>
    )
}
