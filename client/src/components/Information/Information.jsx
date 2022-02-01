import React from 'react';
import './Information.css';
import { useSelector } from 'react-redux';
import { sections } from './sectionData';
import Section from './Section';

const Information = () => {
    const theme = useSelector(state => state.themeReducer);

    return (
        <div className={`information information__${theme}`}>
            {sections.map((section) =>
                <div key={section.title}>
                    <Section title={section.title} content={section.content} hr={section !== sections[sections.length - 1]} />
                </div>
            )}
        </div>);
};

export default Information;
