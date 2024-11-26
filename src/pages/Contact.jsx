import React from 'react'
import { Helmet } from "react-helmet"

export default function Contact() {
    return(
        <React.Fragment>
            <Helmet>
                <title>Contact me - Alexander Eriksson</title>
            </Helmet>

            <div className="content">
                <img src="/email.svg" alt="" width="40px"/>
                <img src="/linkedin.svg" alt="" width="40px" />
                <img src="/github.svg" alt="" width="40px" />
            </div>
        </React.Fragment>
    )
}
