import React from 'react';
import './Section.css';
import { parseHtml, generateId } from '../../../../utils/htmlFunctions';

const Section = ({ title, content }) => {
    
    const id = generateId(title);

    return (
        <div className="section__main" key={id} id={id} name={id}>
            <section className="section__container">
                <h2 className="section__h2">{title}</h2>
                <div dangerouslySetInnerHTML={parseHtml(content)} />
            </section>
        </div>);
};

export default Section;
