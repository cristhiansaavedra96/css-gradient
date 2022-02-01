import React from 'react';
import { useSection } from '../../../../hooks/useSection';
import './Section.css';

const Section = ({ title, content, hr }) => {

    const { id, parsedContent } = useSection(title, content);

    return (
        <div className="section__main" key={id} id={id} name={id}>
            <section className="section__container">
                <h2 className="section__h2">{title}</h2>
                <div dangerouslySetInnerHTML={parsedContent} />
            </section>
            {hr ? <hr></hr> : null}
        </div>);
};

export default Section;
