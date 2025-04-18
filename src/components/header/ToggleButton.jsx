import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";


export default function ToggleButton({ onClick }) {
    return (
        <button id="menu_toggle" className="header__toggle" aria-label="navigation menu toggle" onClick={onClick}>
            <FontAwesomeIcon icon={faBars}  />
        </button>
    );
}

