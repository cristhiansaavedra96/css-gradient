import React from 'react';
import './Section.css';
import { useSection } from '../../../../hooks/useSection';

const Section = ({ title, content }) => {

    const { id, parsedContent } = useSection(title, content);

    return (
        <div className="section__main" key={id} id={id} name={id}>
            <section className="section__container">
                <h2 className="section__h2">{title}</h2>
                <div dangerouslySetInnerHTML={parsedContent} />
            </section>
        </div>);
};

export default Section;
