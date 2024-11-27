import React from 'react'
import { Helmet } from 'react-helmet-async'
import Skill from '../components/Skill'
import HtmlIcon from '../assets/img/html.svg'
import CssIcon from '../assets/img/css.svg'
import JsIcon from '../assets/img/js.svg'
import TailwindIcon from '../assets/img/tailwind.svg'
import ReactIcon from '../assets/img/react.svg'
import VueIcon from '../assets/img/vue.svg'
import NodeIcon from '../assets/img/node.svg'
import PhpIcon from '../assets/img/php.svg'

export default function Skills() {
    const skills = [
        { icon: HtmlIcon, label: 'HTML', progress: '100%' },
        { icon: CssIcon, label: 'CSS', progress: '95%' },
        { icon: JsIcon, label: 'JavaScript', progress: '70%' },
        { icon: TailwindIcon, label: 'Tailwind', progress: '80%' },
        { icon: ReactIcon, label: 'React', progress: '50%' },
        { icon: VueIcon, label: 'Vue', progress: '20%' },
        { icon: NodeIcon, label: 'Node.js', progress: '40%' },
        { icon: PhpIcon, label: 'PHP', progress: '50%' },
    ]

    return(
        <React.Fragment>
            <Helmet>
                <title>Skills - Alexander Eriksson</title>
            </Helmet>

            <div className="content">
                <section className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-20">
                    {skills.map((skill, i) => (
                        <Skill key={i} icon={skill.icon} label={skill.label} progress={skill.progress} />
                    ))}
                </section>
            </div>
        </React.Fragment>
    )
}
