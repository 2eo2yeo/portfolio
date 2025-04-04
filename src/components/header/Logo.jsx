import React from 'react';

export default function Logo({img, name}) {
    return (
        <div className="header__logo">
            <h1 className="header__logo__title" style={{display:"none"}}>{name}</h1>
        </div>
    );
}

