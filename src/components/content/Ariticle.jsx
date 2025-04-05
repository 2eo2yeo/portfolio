import React from 'react';

export default function Ariticle({ type }) {
    const data = {
        "tools": [
            "Visual Studio Code"
        ],
        "etc": [
            "Git",
            "GitHub",
            "Notion"
        ]
    };

    return (
        <article className={type === 'Etc' ? 'skills__etc' : 'skills__tools'}>
            <h3 className="skill__title">{type}</h3>
            <ul>
                {(type === 'Tools' ? data.tools : data.etc).map((item, index) =>
                    <li key={index}>{item}</li>
                )}
            </ul>
        </article>
    );
}
