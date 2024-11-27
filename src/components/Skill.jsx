import React from 'react';

const Skill = ({ icon, label, progress }) => {
    return(
        <div className="flex flex-col items-center gap-4">
            <img src={icon} alt={label} width="50" height="50" />
            <p className="font-semibold">{label}</p>
            <div className="w-3/4 bg-slate-200 h-1 rounded">

                <div
                className="progress-bar h-full rounded"
                style={{ width: progress }}
                role="progressbar"
                aria-valuenow={parseInt(progress, 10)}
                aria-valuemin="0"
                aria-valuemax="100"
                ></div>

            </div>
        </div>
    )
}

export default Skill