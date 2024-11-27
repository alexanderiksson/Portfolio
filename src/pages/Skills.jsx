import React from 'react'
import { Helmet } from "react-helmet"

export default function Skills() {
    return(
        <React.Fragment>
            <Helmet>
                <title>Skills - Alexander Eriksson</title>
            </Helmet>

            <div className="content">
                <div className="w-full flex flex-row sm:flex-col justify-center items-center sm:gap-16 gap-4">

                    {/* Row 1 */}
                    <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-6">
                        <div className="flex flex-col items-center w-full sm:w-1/4 gap-4">
                            <img src="html.svg" alt="HTML" width="50" height="50" />
                            <p className="font-semibold">HTML</p>
                            <div className="w-3/4 bg-slate-200 h-1">
                                <div className="progress-bar w-full h-full"></div>
                            </div>
                        </div>

                        <div className="flex flex-col items-center w-full sm:w-1/4 gap-4">
                            <img src="css.svg" alt="CSS" width="50" height="50" />
                            <p className="font-semibold">CSS</p>
                            <div className="w-3/4 bg-slate-200 h-1">
                                <div className="progress-bar w-11/12 h-full"></div>
                            </div>
                        </div>

                        <div className="flex flex-col items-center w-full sm:w-1/4 gap-4">
                            <img src="js.svg" alt="JavaScript" width="50" height="50" />
                            <p className="font-semibold">JavaScript</p>
                            <div className="w-3/4 bg-slate-200 h-1">
                                <div className="progress-bar w-2/3 h-full"></div>
                            </div>
                        </div>

                        <div className="flex flex-col items-center w-full sm:w-1/4 gap-4">
                            <img src="react.svg" alt="React" width="50" height="50" />
                            <p className="font-semibold">React</p>
                            <div className="w-3/4 bg-slate-200 h-1">
                                <div className="progress-bar w-1/2 h-full"></div>
                            </div>
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-6">
                        <div className="flex flex-col items-center w-full sm:w-1/4 gap-4">
                            <img src="vue.svg" alt="Vue" width="50" height="50" />
                            <p className="font-semibold">Vue</p>
                            <div className="w-3/4 bg-slate-200 h-1">
                                <div className="progress-bar w-1/3 h-full"></div>
                            </div>
                        </div>

                        <div className="flex flex-col items-center w-full sm:w-1/4 gap-4">
                            <img src="tailwind.svg" alt="Tailwind" width="50" height="50" />
                            <p className="font-semibold">Tailwind</p>
                            <div className="w-3/4 bg-slate-200 h-1">
                                <div className="progress-bar w-3/4 h-full"></div>
                            </div>
                        </div>

                        <div className="flex flex-col items-center w-full sm:w-1/4 gap-4">
                            <img src="node.svg" alt="Node.js" width="50" height="50" />
                            <p className="font-semibold">Node.js</p>
                            <div className="w-3/4 bg-slate-200 h-1">
                                <div className="progress-bar w-1/2 h-full"></div>
                            </div>
                        </div>

                        <div className="flex flex-col items-center w-full sm:w-1/4 gap-4">
                            <img src="php.svg" alt="PHP" width="50" height="50" />
                            <p className="font-semibold">PHP</p>
                            <div className="w-3/4 bg-slate-200 h-1">
                                <div className="progress-bar w-7/12 h-full"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </React.Fragment>
    )
}
