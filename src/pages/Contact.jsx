import React from 'react'
import { Helmet } from 'react-helmet-async'
import GithubIcon from '../assets/img/github.svg'
import LinkedinIcon from '../assets/img/linkedin.svg'
import ContactForm from '../components/ContactForm'


export default function Contact() {
    return(
        <React.Fragment>
            <Helmet>
                <title>Contact me - Alexander Eriksson</title>
            </Helmet>

            <div className="content">
                <section className="w-full flex flex-col justify-center items-center">

                    <h1 className="text-4xl mb-20">Send me a message</h1>

                    <ContactForm />

                </section>
            </div>
        </React.Fragment>
    )
}
