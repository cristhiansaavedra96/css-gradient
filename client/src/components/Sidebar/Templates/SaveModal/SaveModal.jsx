import React, { useState } from 'react';
import './SaveModal.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeShowSaveModal } from '../../../../reducers/modalReducer';
import { createTemplate } from '../../../../services/templates';
import { getParsedDirection } from '../../../../utils/parseCss';
import { useTheme } from '../../../../hooks/useTheme';

const SaveModal = () => {
    const { firstColor, secondColor, direction, style } = useSelector(state => state.gradientReducer);

    const [name, setName] = useState('');
    const [author, setAuthor] = useState('');
    const [msg, setMsg] = useState('');
    const theme = useTheme();
    const dispatch = useDispatch();
    let parsedDirection = getParsedDirection(direction, style);
    let parsedStyle = "";

    if (style === "linear") {
        parsedStyle = "linear-gradient"
    } else {
        parsedStyle = direction === "center" ? "radial-gradient" : "-webkit-radial-gradient";
    }
    const background = `${parsedStyle}(${parsedDirection ? parsedDirection + ',' : ''}${firstColor}, ${secondColor})`;

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
            setMsg('All fields are required.')
        } else {
            const res = await createTemplate({
                "name": name,
                "firstColor": firstColor,
                "secondColor": secondColor,
                "direction": direction,
                "type": style,
                "author": author
            });
            if (res === 200) {
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
            <div className={`save__modal__container save__modal__container__${theme}`} id="container">
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
                            <button type="submit" onClick={(e) => handleSubmit(e)}>Save</button>
                            <button type="button" onClick={(e) => handleClose(e)}>Close</button>
                            <p>{msg}</p>
                        </div>
                    </form>
                </div>
                <div className="save__right__container">
                    <div className="save__gradient__container" >
                        <div className="gradient__panel gradient__right" style={{ background: background }}>
                            {name}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SaveModal;