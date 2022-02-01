import React from 'react';
import './LoadModal.css';
import { useDispatch } from 'react-redux';
import { changeShowLoadModal } from '../../../reducers/modalReducer';
import { useTheme } from '../../../hooks/useTheme';
import TemplateCard from './TemplateCard';
import { BeatLoader } from 'react-spinners';
import { useLoadModal } from '../../../hooks/useLoadModal';

const LoadModal = () => {
    const theme = useTheme();
    const { templates, loading } = useLoadModal();

    const dispatch = useDispatch();
    const handleClose = () => {
        dispatch(changeShowLoadModal());
    }

    return (
        <div className="modal">
            <section className={`modal__main modal__main__${theme}`}>
                <h2>Load Template</h2>
                <button
                    className={`close__button close__button__${theme}`}
                    type="button"
                    onClick={handleClose}
                >
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
