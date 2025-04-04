import React from 'react';
import Major from './Major.jsx';

export default function Majors() {
    const majorList = [
        {
            "icon": "html",
            "title": "Front-end",
            "subjects": "HTML, CSS, JavaScript, TypeScript, React, WebAPIs"            
        },
        // {
        //     "icon": "mobile",
        //     "title": "Server",
        //     "subjects": "Node.js, Express.js"            
        // },
        {
            "icon": "server",
            "title": "Back-end",
            "subjects": "Node.js, Express.js, MySQL"            
        }
    ];
    return (
        <ul className="majors">
            {majorList && majorList.map((major)=>
                <li className="major">
                    <Major icon={major.icon} 
                            title={major.title} 
                            subjects={major.subjects} />
                </li>            
            )}
        </ul>
    );
}

