import React from 'react';
import './LoadModal.css';
import { useDispatch } from 'react-redux';
import { changeShowLoadModal } from '../../../../reducers/modalReducer';
import { useTheme } from '../../../../hooks/useTheme';
import { getAll } from '../../../../services/templates';
import { useEffect } from 'react';
import { useState } from 'react';
import TemplateCard from './TemplateCard';
import { BeatLoader } from 'react-spinners';

const LoadModal = () => {
    const theme = useTheme();
    const [templates, setTemplates] = useState();
    const [loading, setLoading] = useState(true);

    const dispatch = useDispatch();
    const handleClose = () => {
        dispatch(changeShowLoadModal());
    }

    useEffect(() => {
        getAll().then(templates => {
            setLoading(false);
            setTemplates(templates)
        });
    }, []);

    return (
        <div className="modal">
            <section className={`modal__main modal__main__${theme}`}>
                <h2>Load Template</h2>
                <button
                    className="closeButton"
                    type="button"
                    onClick={handleClose}>
                    X
                </button>
                <hr></hr>
                <div className="load__templates__container">
                    {loading ? <div className="loader"><BeatLoader size={30} /></div> :
                        templates ?
                            templates.map((template) =>
                                <TemplateCard template={template} theme={theme} key={template.name} />)
                            : null
                    }
                </div>
            </section>
        </div>
    );
};

export default LoadModal;
