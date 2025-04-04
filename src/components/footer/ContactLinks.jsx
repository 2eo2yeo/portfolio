import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { FaBlogger } from "react-icons/fa";

export default function ContactLinks() {
    const contactList = [
        {
            "href":"https://github.com/2eo2yeo",
            "type":"github",
        },
        {
            "href":"https://2eo2yeo.github.io/",
            "type":"blog",
        }
    ];
    return (
        <ul className="contact__links">
            {contactList && contactList.map((item) => 
                <li>
                    <a className="contact__link" href={item.href}>
                        {item.type === 'github' && <FontAwesomeIcon icon={faGithub} />}
                        {item.type === 'blog' && <FaBlogger />}
                    </a>
                </li>            
            )}
        </ul>
    );
}

