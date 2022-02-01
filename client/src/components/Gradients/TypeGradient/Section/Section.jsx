import React from 'react';
import './Section.css';

const Section = ({ title, content }) => {

    function createMarkup(text) { return { __html: text }; };
    const generateId = (title) => {
        let id = "";
        id = title.replaceAll(" ", "-").toLowerCase();
        return id;
    }
    const id = generateId(title);

    return (
        <div className="section__main" key={id} id={id} name={id}>
            <section className="section__container">
                <h2 className="section__h2">{title}</h2>
                <div dangerouslySetInnerHTML={createMarkup(content)} />
            </section>
        </div>);
};

export default Section;
