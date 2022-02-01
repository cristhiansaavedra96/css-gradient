import React, { useState } from 'react';
import './SaveModal.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeShowSaveModal } from '../../../reducers/modalReducer';
import { createTemplate } from '../../../services/templates';
import { useTheme } from '../../../hooks/useTheme';
import { BeatLoader } from 'react-spinners';
import { parseBackground } from '../../../utils/parseBackground';

const SaveModal = () => {
    const { firstColor, secondColor, direction, style } = useSelector(state => state.gradientReducer);
    const [name, setName] = useState('');
    const [author, setAuthor] = useState('');
    const [msg, setMsg] = useState('');
    const [loading, setLoading] = useState(false);
    const theme = useTheme();
    const dispatch = useDispatch();
    const background = parseBackground(firstColor, secondColor, direction, style);

    const handleClose = () => {
        dispatch(changeShowSaveModal());
    }

    function handleChange(e) {
        if (e.currentTarget.name === "name") {
            setName(e.currentTarget.value);
        } else {
            setAuthor(e.currentTarget.value);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !author) {
            setMsg('All fields are required.');
        } else {
            setLoading(true);
            const res = await createTemplate({
                "name": name,
                "firstColor": firstColor,
                "secondColor": secondColor,
                "direction": direction,
                "type": style,
                "author": author
            });
            setLoading(false);
            if (res.message === 'OK') {
                setName('');
                setAuthor('');
                setMsg('Template successfully added!');
            } else {
                setMsg('Template already exists.');
            }
        }
    }

    return (
        <div className="save__modal">
            <div
                className={`save__modal__container save__modal__container__${theme}`}
                id="container">
                <div className={`form__container save__left__container save__left__container__${theme}`}>
                    <form action="#">
                        <h2>Save Template</h2>
                        <input
                            type="text"
                            name="name"
                            value={name}
                            placeholder="Name"
                            autoComplete='off'
                            required
                            onChange={(e) => handleChange(e)}
                        />
                        <input
                            type="text"
                            placeholder="Author"
                            name="author"
                            value={author}
                            autoComplete='off'
                            required
                            onChange={(e) => handleChange(e)}
                        />
                        <div className={`save__buttons__container save__buttons__container__${theme}`}>
                            <button
                                type="submit"
                                onClick={(e) => handleSubmit(e)}>
                                Save
                            </button>
                            <button
                                type="button"
                                onClick={(e) => handleClose(e)}>
                                Close
                            </button>
                            <div className="save__results">
                                {loading ? <BeatLoader size={20} /> : <p>{msg}</p>}
                            </div>
                        </div>
                    </form>
                </div>
                <div className="save__right__container">
                    <div className="save__gradient__container" >
                        <div
                            className="gradient__panel gradient__right"
                            style={{ background: background }}>
                            {name}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SaveModal;
