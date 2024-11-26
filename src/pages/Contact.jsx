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
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2">
                            <img src="/email.svg" alt="" width="40px"/>
                            <a className="text-white" href="mailto:hello@alexeriksson.se">hello@alexeriksson.se</a>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src="/linkedin.svg" alt="" width="40px"/>
                            <a className="text-white" href="https://www.linkedin.com/in/alexander-eriksson-302bb8237/">LinkedIn</a>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src="/github.svg" alt="" width="40px"/>
                            <a className="text-white" href="https://github.com/alexanderiksson">Github</a>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
