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

                <h1 className="page-title">Contact me</h1>
                <p className="page-description">Send me a message.</p>

                <div className="w-full flex flex-col justify-center items-center">

                    <ContactForm />

                </div>
            </div>
        </React.Fragment>
    )
}
