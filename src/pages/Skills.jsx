import React from 'react'
import { Helmet } from 'react-helmet-async'
import Skill from '../components/Skill'
import useContentful from '../hooks/useContentful'
import Loader from '../components/Loader';
import Error from '../components/Error';


export default function Skills() {

    const { data, loading, error } = useContentful('skills', {order: 'sys.createdAt'});

    if (loading) { return <Loader /> }
    if (error) { return <Error /> }

    return(
        <React.Fragment>
            <Helmet>
                <title>Skills - Alexander Eriksson</title>
            </Helmet>

            <div className="content">

                <h1 className="page-title">Skills</h1>
                <p className="page-description">My skills.</p>

                <section className="grid grid-cols-2 md:grid-cols-5 gap-x-12 gap-y-24">
                    {data.map((skill) => (
                        <Skill
                        key={skill.fields.name}
                        icon={skill.fields.icon}
                        label={skill.fields.name}
                        progress={skill.fields.progress}
                        />
                    ))}
                </section>

            </div>
        </React.Fragment>
    )
}
