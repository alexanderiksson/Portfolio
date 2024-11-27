import React from 'react';

const PortfolioCard = ({ project }) => {
  return(
    <div className="portfolio-card p-6 flex flex-col md:flex-row items-center gap-8 md:gap-6 w-full">

        <div className="flex justify-center w-full md:w-1/2">
            <img src={project.img} alt={`Image for ${project.name}`} className="w-full" loading="lazy" />
        </div>

        <div className="flex flex-col gap-4 items-center md:items-start w-full md:w-1/2">
            <h2 className="text-xl font-bold">{project.name}</h2>

            <div className="tags">
                {project.tags.map((tag) => (
                    <span key={tag.name} className="tag-item flex items-center gap-2">
                        <img src={tag.icon} alt={tag.name} width="16" height="16" />
                        {tag.name}
                    </span>
                ))}
            </div>

            <p>{project.text}</p>
            {project.github && (
              <a href={project.github} className="button" aria-label={`Show ${project.name} on GitHub`}>Show on GitHub</a>
            )}
        </div>

    </div>
  )
}

export default PortfolioCard
