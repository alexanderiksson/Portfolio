import React from 'react'
import { Helmet } from 'react-helmet-async'
import GithubIcon from '../assets/img/github.svg'
import LinkedinIcon from '../assets/img/linkedin.svg'

export default function Contact() {
    return(
        <React.Fragment>
            <Helmet>
                <title>Contact me - Alexander Eriksson</title>
            </Helmet>

            <div className="content">
                <section className="w-full flex flex-col justify-center items-center">
                    <p className="max-w-md text-center mb-12">If you have any questions or want to know more about me, don't hesitate to reach out.</p>
                    <div className="flex flex-col gap-8">
                        <div className="flex items-center gap-4">
                            <a className="text-white font-medium text-xl" href="mailto:hello@alexeriksson.se">hello@alexeriksson.se</a>
                        </div>
                        <div className="flex justify-center items-center gap-4">
                            <a className="text-white" href="https://www.linkedin.com/in/alexander-eriksson-302bb8237/" aria-label="Visit my LinkedIn profile">
                                <img src={LinkedinIcon} alt="LinkedIn Profile" width="40px"/>
                            </a>
                            <a className="text-white" href="https://github.com/alexanderiksson" aria-label="Visit my GitHub profile">
                                <img src={GithubIcon} alt="GitHub Profile" width="32px"/>
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </React.Fragment>
    )
}
