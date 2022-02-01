import React from 'react';
import './TypeGradient.css';
import Section from './Section';
import { useTypeGradient } from '../../../hooks/useTypeGradient';

const TypeGradient = ({ type }) => {

    const sectionsToUse = useTypeGradient(type);

    return (
        <div>
            {sectionsToUse.map((section) =>
                <div key={section.title}>
                    <Section title={section.title} content={section.content} />
                </div>
            )}
        </div>);
};

export default TypeGradient;

