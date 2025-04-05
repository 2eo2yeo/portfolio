import React from 'react';

export default function SectionWrap({ id, title, description, children }) {
  const isWhiteTitle = ["My Skills", "My Projects"].includes(title);

  return (
    <section id={id} className="section max-container">
      <h2 className={`title ${isWhiteTitle ? "white" : ""}`}>
        {title}
      </h2>

      {id === 'skill' && (
        <p className={`description ${isWhiteTitle ? "white" : ""}`}>
          Skills & Attributes
        </p>
      )}

      {id === 'skill' ? (
        <p className={`description ${isWhiteTitle ? "white" : ""}`}>
          {description}
        </p>
      ) : (
        <p className={`description ${isWhiteTitle ? "white" : ""}`}>
          {description}
        </p>
      )}

      {children}
    </section>
  );
}
