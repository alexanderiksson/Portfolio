import React from 'react';

const PortfolioCard = ({ project }) => {

    return(
        <div className="bg-white bg-opacity-5 rounded-lg p-6 flex flex-col md:flex-row items-center gap-8 md:gap-6 w-full">

            <div className="flex justify-center w-full md:w-1/2">
                <img src={`https:${project?.fields?.image?.fields?.file?.url}`} alt={`Image for ${project.fields.title}`} className="w-full" loading="lazy" />
            </div>

            <div className="flex flex-col gap-4 items-center md:items-start w-full md:w-1/2">

                <h2 className="text-xl font-bold">{project.fields.title}</h2>

                <div className="flex gap-2 flex-wrap">

                    {project.fields.tags.map((tag) => (

                        <span key={tag.fields.name} className="flex items-center gap-1 bg-white bg-opacity-10 py-1 px-2 rounded-lg text-xs">
                            {tag.fields.icon && (
                                <img src={`https:${tag?.fields?.icon?.fields?.file?.url}`} alt={tag.fields.name} width="16" height="16" />
                            )}
                            {tag.fields.name}
                        </span>

                    ))}

                </div>

                <p>{project.fields.description}</p>

                {project.fields.githubLink && (
                <a href={project.fields.githubLink} className="button" aria-label={`Show ${project.fields.title} on GitHub`}>Show on GitHub</a>
                )}

            </div>

        </div>
    )
}

export default PortfolioCard
