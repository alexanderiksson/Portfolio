import React from 'react'
import { Helmet } from "react-helmet"
import { Link } from "react-router-dom";


export default function Home() {
    return(
        <React.Fragment>
            <Helmet>
                <title>Home</title>
            </Helmet>

            <div className="content">
                <div className="w-full h-screen flex flex-col justify-center items-center">
                    <h1 className="text-6xl mb-10">Alexander Eriksson</h1>
                    <p className="text-2xl mb-10">Fullstack Developer, Stockholm</p>
                    <div className="flex gap-4">
                        <Link className="button" to="/contact">Contact me</Link>
                        <Link className="button" to="/portfolio">Portfolio</Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
