import React from 'react';
import CodingBar from './CodingBar.jsx';

export default function Coding() {
    const codeList = [
        {
            "title":"HTML",
            "percent": 80
        },
        {
            "title":"CSS",
            "percent": 80
        },
        {
            "title":"JavaScript",
            "percent": 70
        },
        {
            "title":"TypeScript",
            "percent": 0
        },
        {
            "title":"React",
            "percent": 80
        },
        {
            "title":"NodeJS",
            "percent": 60
        },
        {
            "title":"MySQL",
            "percent": 60
        },
    ];

    return (
        <article className="sklls__coding">
            <h3 className="skill__title">Coding Skills</h3>
            <ul>
                {codeList && codeList.map((code) =>
                    <li className="bar">
                        <CodingBar 
                            title={code.title}
                            percent={code.percent}
                            />
                    </li>                
                )}
                
            </ul>
        </article>
    );
}

