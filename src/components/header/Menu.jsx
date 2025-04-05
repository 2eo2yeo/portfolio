import React from 'react';

export default function Menu({ href, menuName, className, click, target }) {
    return (
      <a className={className} href={href} onClick={() => { click(menuName) }}  target={target}>
        {menuName}
      </a>
    );
  }
  