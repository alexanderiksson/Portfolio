import React from 'react'
import { Helmet } from "react-helmet"

export default function Contact() {
    return(
        <React.Fragment>
            <Helmet>
                <title>Contact me - Alexander Eriksson</title>
            </Helmet>

            <div className="content">
                <div className="w-full flex flex-col justify-center items-center">
                    <p className="max-w-md text-center mb-12">If you have any questions or want to know more about me, don't hesitate to reach out.</p>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-4">
                            <a className="text-white" href="mailto:hello@alexeriksson.se">hello@alexeriksson.se</a>
                        </div>
                        <div className="flex justify-center items-center gap-4">
                            <a className="text-white" href="https://www.linkedin.com/in/alexander-eriksson-302bb8237/">
                                <img src="/linkedin.svg" alt="" width="40px"/>
                            </a>
                            <a className="text-white" href="https://github.com/alexanderiksson">
                                <img src="/github.svg" alt="" width="32px"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
