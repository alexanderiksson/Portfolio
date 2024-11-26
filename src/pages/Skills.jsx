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
                        <div className="flex flex-col items-center w-1/4">
                            <img src="html.svg" alt="HTML" width="50" height="50" />
                            <p className="font-semibold">HTML</p>
                        </div>

                        <div className="flex flex-col items-center w-1/4">
                            <img src="css.svg" alt="CSS" width="50" height="50" />
                            <p className="font-semibold">CSS</p>
                        </div>

                        <div className="flex flex-col items-center w-1/4">
                            <img src="js.svg" alt="JavaScript" width="50" height="50" />
                            <p className="font-semibold">JavaScript</p>
                        </div>

                        <div className="flex flex-col items-center w-1/4">
                            <img src="react.svg" alt="React" width="50" height="50" />
                            <p className="mt-1 font-semibold">React</p>
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-6">
                        <div className="flex flex-col items-center w-1/4">
                            <img src="vue.svg" alt="Vue" width="50" height="50" />
                            <p className="font-semibold">Vue</p>
                        </div>

                        <div className="flex flex-col items-center w-1/4">
                            <img src="tailwind.svg" alt="Tailwind" width="50" height="50" />
                            <p className="font-semibold">Tailwind</p>
                        </div>

                        <div className="flex flex-col items-center w-1/4">
                            <img src="node.svg" alt="Node.js" width="50" height="50" />
                            <p className="font-semibold">Node.js</p>
                        </div>

                        <div className="flex flex-col items-center w-1/4">
                            <img src="php.svg" alt="PHP" width="50" height="50" />
                            <p className="font-semibold">PHP</p>
                        </div>
                    </div>

                </div>
            </div>
        </React.Fragment>
    )
}
