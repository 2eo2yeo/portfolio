import React, {useState} from 'react';
import Menu from './Menu.jsx';

export default function MenuList({ isOpen, setIsOpen }) {
    const [selected, setSelected] = useState('Home');
    const list = [
        {"href": "#home", "name":"Home"},
        {"href": "#about", "name":"About"},
        {"href": "#skill", "name":"Skills"},
        {"href": "#work", "name":"Projects"},
        {"href": "#contact", "name":"Contact"},
        {"href": "https://github.com/2eo2yeo", "name":"Github", "target": "_blank"},
    ];

    const handleClick = (menuName) => {
        setSelected(menuName);
        setIsOpen(false);
    }
    

    return (
        <nav>
            <ul className={`header__menu ${isOpen ? 'show' : ''}`}>
                {list && list.map((menu) => 
                    <li>
                        <Menu href={menu.href} 
                                menuName={menu.name}
                                click={handleClick}
                                className={menu.name === selected ? 
                                            'header__menu__item active'
                                        :   'header__menu__item'
                                }
                                target={menu.target}
                                />
                    </li>                
                )}
            </ul>
        </nav>
    );
}

