import React from 'react';

export default function Top({ title, description }) {
    return (
        <>
            <h2 className={`title ${title === "Contect Me" ? "white" : ""}`}>
                {title}
            </h2>
            <p className={`description ${title === "Contect Me" ? "white" : ""}`} >{description}</p>
        </>
    );
}

