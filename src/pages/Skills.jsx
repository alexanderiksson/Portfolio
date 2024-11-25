import React from 'react'
import { Helmet } from "react-helmet"

export default function Skills() {
    return(
        <React.Fragment>
            <Helmet>
                <title>Skills</title>
            </Helmet>

            <div className="content">
                <div className="w-full h-screen flex flex-col justify-center items-center">

                    {/* Row 1 */}
                    <div className="w-full flex justify-evenly mb-8">
                        <div className="flex flex-col items-center w-1/4">
                            <img src="html.svg" alt="HTML" width="50" height="50" />
                            <p>HTML</p>
                        </div>

                        <div className="flex flex-col items-center w-1/4">
                            <img src="css.svg" alt="CSS" width="50" height="50" />
                            <p>CSS</p>
                        </div>

                        <div className="flex flex-col items-center w-1/4">
                            <img src="js.svg" alt="JavaScript" width="50" height="50" />
                            <p>JavaScript</p>
                        </div>

                        <div className="flex flex-col items-center w-1/4">
                            <img src="react.svg" alt="React" width="50" height="50" />
                            <p className="mt-1">React</p>
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="w-full flex justify-evenly mt-8">
                        <div className="flex flex-col items-center w-1/4">
                            <img src="vue.svg" alt="Vue" width="50" height="50" />
                            <p>Vue</p>
                        </div>

                        <div className="flex flex-col items-center w-1/4">
                            <img src="tailwind.svg" alt="Tailwind" width="50" height="50" />
                            <p>Tailwind</p>
                        </div>

                        <div className="flex flex-col items-center w-1/4">
                            <img src="node.svg" alt="Node.js" width="50" height="50" />
                            <p>Node.js</p>
                        </div>

                        <div className="flex flex-col items-center w-1/4">
                            <img src="php.svg" alt="PHP" width="50" height="50" />
                            <p>PHP</p>
                        </div>
                    </div>

                </div>
            </div>
        </React.Fragment>
    )
}
