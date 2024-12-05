import React from 'react'
import { Helmet } from 'react-helmet-async'
import Skill from '../components/Skill'
import useFetch from '../hooks/useFetch'
import Loader from '../components/Loader';


export default function Skills() {

    const { data, loading, error } = useFetch(import.meta.env.VITE_SKILLS_URL);

    if (loading) {
        return <Loader />
    }

    if (error) {
        console.error(error)
    }

    return(
        <React.Fragment>
            <Helmet>
                <title>Skills - Alexander Eriksson</title>
            </Helmet>

            <div className="content">
                <section className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-20">
                    {data.map((skill) => (
                        <Skill key={skill.label} icon={skill.icon} label={skill.label} progress={skill.progress} />
                    ))}
                </section>
            </div>
        </React.Fragment>
    )
}
